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
  wilaya: z.enum(['oran','alger','adrar','chlef','laghouat','oum-el-bouaghi','batna','biskra','bechar','blida']),
  mode: z.enum(['sale','rent']).default('sale'),
  region: z.string().max(100).optional(),
});

type Wilaya = z.infer<typeof QuerySchema>['wilaya'];

const wilayaDataLoaders: Record<Wilaya, () => Promise<{ transactions: PriceRefCommune[]; locations: PriceRefCommune[] }>> = {
  oran: async () => ({
    transactions: (await import('@/lib/data/oran-price-reference-transactions')).oranPriceReference,
    locations: (await import('@/lib/data/oran-price-reference-locations')).oranLocationsReference,
  }),
  alger: async () => {
    const data = await import('@/lib/data/alger-price-reference-transactions');
    const locs = await import('@/lib/data/alger-price-reference-locations');
    return { transactions: data.algerTransactionsReference, locations: locs.algerLocationsReference };
  },
  adrar: async () => {
    const data = await import('@/lib/data/adrar-price-reference-transactions');
    const locs = await import('@/lib/data/adrar-price-reference-locations');
    return { transactions: data.adrarTransactionsReference, locations: locs.adrarLocationsReference };
  },
  chlef: async () => {
    const data = await import('@/lib/data/chlef-price-reference-transactions');
    const locs = await import('@/lib/data/chlef-price-reference-locations');
    return { transactions: data.chlefTransactionsReference, locations: locs.chlefLocationsReference };
  },
  laghouat: async () => {
    const data = await import('@/lib/data/laghouat-price-reference-transactions');
    const locs = await import('@/lib/data/laghouat-price-reference-locations');
    return { transactions: data.laghouatTransactionsReference, locations: locs.laghouatLocationsReference };
  },
  'oum-el-bouaghi': async () => {
    const data = await import('@/lib/data/oum-el-bouaghi-price-reference-transactions');
    const locs = await import('@/lib/data/oum-el-bouaghi-price-reference-locations');
    return { transactions: data.oumElBouaghiTransactionsReference, locations: locs.oumElBouaghiLocationsReference };
  },
  batna: async () => {
    const data = await import('@/lib/data/batna-price-reference-transactions');
    const locs = await import('@/lib/data/batna-price-reference-locations');
    return { transactions: data.batnaPriceReference, locations: locs.batnaRentalReference };
  },
  biskra: async () => {
    const data = await import('@/lib/data/biskra-price-reference-transactions');
    const locs = await import('@/lib/data/biskra-price-reference-locations').catch(() => ({ biskraLocationsReference: [] }));
    return { transactions: data.biskraPriceReference, locations: locs.biskraLocationsReference ?? [] };
  },
  bechar: async () => {
    const data = await import('@/lib/data/bechar-price-reference-transactions');
    const locs = await import('@/lib/data/bechar-price-reference-locations').catch(() => ({ becharLocationsReference: [] }));
    return { transactions: data.becharPriceReference, locations: locs.becharLocationsReference ?? [] };
  },
  blida: async () => {
    const data = await import('@/lib/data/blida-price-reference-transactions');
    const locs = await import('@/lib/data/blida-price-reference-locations').catch(() => ({ blidaLocationsReference: [] }));
    return { transactions: data.blidaPriceReference, locations: locs.blidaLocationsReference ?? [] };
  },
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
