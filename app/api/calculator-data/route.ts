import { NextRequest, NextResponse } from 'next/server';
import { getPricesForCalculator } from '@/lib/utils/dataMapper';

export const runtime = 'nodejs';

type Wilaya = 'oran' | 'alger' | 'adrar' | 'chlef' | 'laghouat' | 
              'oum-el-bouaghi' | 'batna' | 'biskra' | 'bechar' | 'blida';

const wilayaDataLoaders: Record<Wilaya, () => Promise<{ transactions: any[]; locations: any[] }>> = {
  oran: async () => ({
    transactions: (await import('@/lib/data/price-reference/oran-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/oran-price-reference-locations.json')).default,
  }),
  alger: async () => ({
    transactions: (await import('@/lib/data/price-reference/alger-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/alger-price-reference-locations.json')).default,
  }),
  adrar: async () => ({
    transactions: (await import('@/lib/data/price-reference/adrar-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/adrar-price-reference-locations.json')).default,
  }),
  chlef: async () => ({
    transactions: (await import('@/lib/data/price-reference/chlef-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/chlef-price-reference-locations.json')).default,
  }),
  laghouat: async () => ({
    transactions: (await import('@/lib/data/price-reference/laghouat-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/laghouat-price-reference-locations.json')).default,
  }),
  'oum-el-bouaghi': async () => ({
    transactions: (await import('@/lib/data/price-reference/oum-el-bouaghi-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/oum-el-bouaghi-price-reference-locations.json')).default,
  }),
  batna: async () => ({
    transactions: (await import('@/lib/data/price-reference/batna-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/batna-price-reference-locations.json')).default,
  }),
  biskra: async () => ({
    transactions: (await import('@/lib/data/price-reference/biskra-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/biskra-price-reference-locations.json')).default,
  }),
  bechar: async () => ({
    transactions: (await import('@/lib/data/price-reference/bechar-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/bechar-price-reference-locations.json')).default,
  }),
  blida: async () => ({
    transactions: (await import('@/lib/data/price-reference/blida-price-reference-transactions.json')).default,
    locations: (await import('@/lib/data/price-reference/blida-price-reference-locations.json')).default,
  }),
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const wilaya = searchParams.get('wilaya') as Wilaya;
  const mode = searchParams.get('mode') as 'sale' | 'rent';
  const region = searchParams.get('region');
  
  if (!wilaya || !wilayaDataLoaders[wilaya]) {
    return NextResponse.json({ error: 'Invalid wilaya' }, { status: 400 });
  }
  
  try {
    const data = await wilayaDataLoaders[wilaya]();
    const dataSource = (mode === 'rent' ? data.locations : data.transactions) ?? [];
    
    // If no region set, get the first one for initialization
    const regionId = region || (dataSource[0] ? dataSource[0].commune : null);
    
    let result = null;
    if (regionId) {
        result = getPricesForCalculator(dataSource, regionId, mode ?? 'sale');
    }
    
    const communes = dataSource.map((c: any) => c.commune);
    
    return NextResponse.json(
        { data: result, communes, regionId },
        { 
        headers: { 
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
        } 
        }
    );
  } catch (e) {
    return NextResponse.json({ error: 'Data loading failed' }, { status: 500 });
  }
}
