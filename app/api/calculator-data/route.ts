import { NextRequest, NextResponse } from 'next/server';
import { getPricesForCalculator } from '@/lib/utils/dataMapper';

export const runtime = 'nodejs';

type Wilaya = 'oran' | 'alger' | 'adrar' | 'chlef' | 'laghouat' | 
              'oum-el-bouaghi' | 'batna' | 'biskra' | 'bechar' | 'blida';

const wilayaDataLoaders: Record<Wilaya, () => Promise<{ transactions: any[]; locations: any[] }>> = {
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
