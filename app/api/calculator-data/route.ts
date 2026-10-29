import { NextRequest, NextResponse } from 'next/server';
import { getPricesForCalculator } from '@/lib/utils/dataMapper';
import { PriceRefCommune } from '@/lib/types';
import { SUPPORTED_WILAYA_CODES } from '@/lib/data/wilayas';
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
  wilaya: z.enum(SUPPORTED_WILAYA_CODES),
  mode: z.enum(['sale', 'rent']).default('sale'),
  region: z.string().max(100).optional(),
});

type Wilaya = z.infer<typeof QuerySchema>['wilaya'];

async function loadWilayaData(wilaya: Wilaya, mode: 'sale' | 'rent'): Promise<PriceRefCommune[]> {
  const suffix = mode === 'sale' ? 'transactions' : 'locations';
  const mod = await import(`@/lib/data/${wilaya}-price-reference-${suffix}`);
  const dataSource = (Object.values(mod).find((val) => Array.isArray(val)) as PriceRefCommune[]) ?? [];
  return dataSource;
}

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
    const dataSource = await loadWilayaData(wilaya, mode);
    
    // If no region set, get the first one for initialization
    let regionId = region || (dataSource[0] ? dataSource[0].commune : null);
    
    let result = null;
    if (regionId) {
        result = getPricesForCalculator(dataSource, regionId, mode);
        // Fallback if regionId has mismatched spelling between rent/sale or was not found
        if (!result && dataSource[0]) {
            regionId = dataSource[0].commune;
            result = getPricesForCalculator(dataSource, regionId, mode);
        }
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
