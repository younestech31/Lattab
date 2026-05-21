import { NextRequest, NextResponse } from 'next/server';
import { getPricesForCalculator } from '@/lib/utils/dataMapper';
import { PriceRefCommune } from '@/lib/types';
import { z } from 'zod';

export const runtime = 'nodejs';

export interface CalculatorApiResponse {
  data: unknown;
  communes: string[];
  regionId: string | null;
}

export interface CalculatorApiErrorResponse {
  error: string;
  details?: unknown;
}

const QuerySchema = z.object({
  wilaya: z.enum(['oran','alger','adrar','chlef','laghouat','oum-el-bouaghi','batna','bejaia','biskra','bechar','blida']),
  mode: z.enum(['sale','rent']).default('sale'),
  region: z.string().max(100).optional(),
});

type Wilaya = z.infer<typeof QuerySchema>['wilaya'];

const wilayaDataLoaders: Record<Wilaya, () => Promise<{ transactions: PriceRefCommune[]; locations: PriceRefCommune[] }>> = {
  oran: async () => ({
    transactions: (await import('@/lib/data/oran-price-reference-transactions')).oranPriceReference,
    locations: (await import('@/lib/data/oran-price-reference-locations')).oranLocationsReference,
  }),
  alger: async () => ({ transactions: [], locations: [] }),
  adrar: async () => ({
    transactions: (await import('@/lib/data/adrar-price-reference-transactions')).adrarPriceReferenceTransactions,
    locations: (await import('@/lib/data/adrar-price-reference-locations')).adrarPriceReferenceLocations,
  }),
  chlef: async () => ({
    transactions: (await import('@/lib/data/chlef-price-reference-transactions')).chlefPriceReferenceTransactions,
    locations: (await import('@/lib/data/chlef-price-reference-locations')).chlefPriceReferenceLocations,
  }),
  laghouat: async () => ({
    transactions: (await import('@/lib/data/laghouat-price-reference-transactions')).laghouatPriceReferenceTransactions,
    locations: (await import('@/lib/data/laghouat-price-reference-locations')).laghouatPriceReferenceLocations,
  }),
  'oum-el-bouaghi': async () => ({
    transactions: (await import('@/lib/data/oum-el-bouaghi-price-reference-transactions')).oumElBouaghiPriceReferenceTransactions,
    locations: (await import('@/lib/data/oum-el-bouaghi-price-reference-locations')).oumElBouaghiPriceReferenceLocations,
  }),
  batna: async () => ({
    transactions: (await import('@/lib/data/batna-price-reference-transactions')).batnaPriceReferenceTransactions,
    locations: (await import('@/lib/data/batna-price-reference-locations')).batnaPriceReferenceLocations,
  }),
  bejaia: async () => ({
    transactions: (await import('@/lib/data/bejaia-price-reference-transactions')).bejaiaPriceReferenceTransactions,
    locations: (await import('@/lib/data/bejaia-price-reference-locations')).bejaiaRentalReferenceTransactions,
  }),
  biskra: async () => ({
    transactions: (await import('@/lib/data/biskra-price-reference-transactions')).biskraPriceReferenceTransactions,
    locations: (await import('@/lib/data/biskra-price-reference-locations')).biskraRentalReferenceTransactions,
  }),
  bechar: async () => ({
    transactions: (await import('@/lib/data/bechar-price-reference-transactions')).becharPriceReferenceTransactions,
    locations: (await import('@/lib/data/bechar-price-reference-locations')).becharRentalReferenceTransactions,
  }),
  blida: async () => ({
    transactions: (await import('@/lib/data/blida-price-reference-transactions')).blidaPriceReferenceTransactions,
    locations: [],
  }),
};

export async function GET(request: NextRequest) {
  const parsed = QuerySchema.safeParse({
    wilaya: request.nextUrl.searchParams.get('wilaya'),
    mode: request.nextUrl.searchParams.get('mode') ?? 'sale',
    region: request.nextUrl.searchParams.get('region') ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json<CalculatorApiErrorResponse>(
      { error: 'Invalid parameters', details: parsed.error.flatten() },
      { 
        status: 400,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }

  const { wilaya, mode, region } = parsed.data;
  
  const etag = `"${wilaya}-${mode}-${region ?? 'default'}"`;
  const ifNoneMatch = request.headers.get('If-None-Match');

  if (ifNoneMatch === etag) {
    return new NextResponse(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        'Vary': 'Accept-Encoding',
      },
    });
  }

  try {
    const data = await wilayaDataLoaders[wilaya]();
    const dataSource = (mode === 'rent' ? data.locations : data.transactions) ?? [];
    
    // If no region set, get the first one for initialization
    const regionId = region || (dataSource[0] ? dataSource[0].commune : null);
    
    let result = null;
    if (regionId) {
        result = getPricesForCalculator(dataSource, regionId, mode);
    }
    
    const communes = dataSource.map((c) => c.commune);
    
    return NextResponse.json<CalculatorApiResponse>(
        { data: result, communes, regionId },
        { 
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
            'ETag': etag,
            'Vary': 'Accept-Encoding',
          } 
        }
    );
  } catch {
    return NextResponse.json<CalculatorApiErrorResponse>(
      { error: 'Internal Server Error' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}
