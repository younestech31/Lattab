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
  wilaya: z.enum([
    'oran', 'adrar', 'chlef', 'laghouat', 'oum-el-bouaghi', 'batna', 'bejaia', 'biskra', 'bechar', 'blida',
    'bouira', 'tamanrasset', 'tebessa', 'tiaret', 'tlemcen', 'tizi-ouzou', 'alger', 'djelfa', 'jijel',
    'setif', 'saida', 'skikda', 'sidi-bel-abbes', 'annaba', 'guelma', 'constantine', 'medea', 'mostaganem',
    'msila', 'mascara', 'ouargla', 'el-bayadh', 'illizi', 'bordj-bou-arreridj', 'boumerdes', 'el-taref',
    'tindouf', 'tissemsilt', 'el-oued', 'khenchela', 'souk-ahras', 'tipaza', 'mila', 'ain-defla', 'naama',
    'ain-temouchent', 'ghardaia', 'relizane', 'timimoun', 'bordj-badji-mokhtar', 'ouled-djellal', 'beni-abbes',
    'in-salah', 'in-guezzam', 'touggourt', 'djanet', 'el-mghaier', 'el-meniaa'
  ]),
  mode: z.enum(['sale','rent']).default('sale'),
  region: z.string().max(100).optional(),
});

type Wilaya = z.infer<typeof QuerySchema>['wilaya'];

const wilayaDataLoaders: Record<Wilaya, () => Promise<{ transactions: PriceRefCommune[]; locations: PriceRefCommune[] }>> = {
  oran: async () => ({
    transactions: (await import('@/lib/data/oran-price-reference-transactions')).oranPriceReferenceTransactions,
    locations: (await import('@/lib/data/oran-price-reference-locations')).oranPriceReferenceLocations,
  }),
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
    locations: (await import('@/lib/data/bejaia-price-reference-locations')).bejaiaPriceReferenceLocations,
  }),
  biskra: async () => ({
    transactions: (await import('@/lib/data/biskra-price-reference-transactions')).biskraPriceReferenceTransactions,
    locations: (await import('@/lib/data/biskra-price-reference-locations')).biskraPriceReferenceLocations,
  }),
  bechar: async () => ({
    transactions: (await import('@/lib/data/bechar-price-reference-transactions')).becharPriceReferenceTransactions,
    locations: (await import('@/lib/data/bechar-price-reference-locations')).becharPriceReferenceLocations,
  }),
  blida: async () => ({
    transactions: (await import('@/lib/data/blida-price-reference-transactions')).blidaPriceReferenceTransactions,
    locations: (await import('@/lib/data/blida-price-reference-locations')).blidaPriceReferenceLocations,
  }),
  bouira: async () => ({
    transactions: (await import('@/lib/data/bouira-price-reference-transactions')).bouiraPriceReferenceTransactions,
    locations: (await import('@/lib/data/bouira-price-reference-locations')).bouiraPriceReferenceLocations,
  }),
  tamanrasset: async () => ({
    transactions: (await import('@/lib/data/tamanrasset-price-reference-transactions')).tamanrassetPriceReferenceTransactions,
    locations: (await import('@/lib/data/tamanrasset-price-reference-locations')).tamanrassetPriceReferenceLocations,
  }),
  tebessa: async () => ({
    transactions: (await import('@/lib/data/tebessa-price-reference-transactions')).tebessaPriceReferenceTransactions,
    locations: (await import('@/lib/data/tebessa-price-reference-locations')).tebessaPriceReferenceLocations,
  }),
  tiaret: async () => ({
    transactions: (await import('@/lib/data/tiaret-price-reference-transactions')).tiaretPriceReferenceTransactions,
    locations: (await import('@/lib/data/tiaret-price-reference-locations')).tiaretPriceReferenceLocations,
  }),
  tlemcen: async () => ({
    transactions: (await import('@/lib/data/tlemcen-price-reference-transactions')).tlemcenPriceReferenceTransactions,
    locations: (await import('@/lib/data/tlemcen-price-reference-locations')).tlemcenPriceReferenceLocations,
  }),
  'tizi-ouzou': async () => ({
    transactions: (await import('@/lib/data/tizi-ouzou-price-reference-transactions')).tiziOuzouPriceReferenceTransactions,
    locations: (await import('@/lib/data/tizi-ouzou-price-reference-locations')).tiziOuzouPriceReferenceLocations,
  }),
  alger: async () => ({
    transactions: (await import('@/lib/data/alger-price-reference-transactions')).algerPriceReferenceTransactions,
    locations: (await import('@/lib/data/alger-price-reference-locations')).algerPriceReferenceLocations,
  }),
  djelfa: async () => ({
    transactions: (await import('@/lib/data/djelfa-price-reference-transactions')).djelfaPriceReferenceTransactions,
    locations: (await import('@/lib/data/djelfa-price-reference-locations')).djelfaPriceReferenceLocations,
  }),
  jijel: async () => ({
    transactions: (await import('@/lib/data/jijel-price-reference-transactions')).jijelPriceReferenceTransactions,
    locations: (await import('@/lib/data/jijel-price-reference-locations')).jijelPriceReferenceLocations,
  }),
  setif: async () => ({
    transactions: (await import('@/lib/data/setif-price-reference-transactions')).setifPriceReferenceTransactions,
    locations: (await import('@/lib/data/setif-price-reference-locations')).setifPriceReferenceLocations,
  }),
  saida: async () => ({
    transactions: (await import('@/lib/data/saida-price-reference-transactions')).saidaPriceReferenceTransactions,
    locations: (await import('@/lib/data/saida-price-reference-locations')).saidaPriceReferenceLocations,
  }),
  skikda: async () => ({
    transactions: (await import('@/lib/data/skikda-price-reference-transactions')).skikdaPriceReferenceTransactions,
    locations: (await import('@/lib/data/skikda-price-reference-locations')).skikdaPriceReferenceLocations,
  }),
  'sidi-bel-abbes': async () => ({
    transactions: (await import('@/lib/data/sidi-bel-abbes-price-reference-transactions')).sidiBelAbbesPriceReferenceTransactions,
    locations: (await import('@/lib/data/sidi-bel-abbes-price-reference-locations')).sidiBelAbbesPriceReferenceLocations,
  }),
  annaba: async () => ({
    transactions: (await import('@/lib/data/annaba-price-reference-transactions')).annabaPriceReferenceTransactions,
    locations: (await import('@/lib/data/annaba-price-reference-locations')).annabaPriceReferenceLocations,
  }),
  guelma: async () => ({
    transactions: (await import('@/lib/data/guelma-price-reference-transactions')).guelmaPriceReferenceTransactions,
    locations: (await import('@/lib/data/guelma-price-reference-locations')).guelmaPriceReferenceLocations,
  }),
  constantine: async () => ({
    transactions: (await import('@/lib/data/constantine-price-reference-transactions')).constantinePriceReferenceTransactions,
    locations: (await import('@/lib/data/constantine-price-reference-locations')).constantinePriceReferenceLocations,
  }),
  medea: async () => ({
    transactions: (await import('@/lib/data/medea-price-reference-transactions')).medeaPriceReferenceTransactions,
    locations: (await import('@/lib/data/medea-price-reference-locations')).medeaPriceReferenceLocations,
  }),
  mostaganem: async () => ({
    transactions: (await import('@/lib/data/mostaganem-price-reference-transactions')).mostaganemPriceReferenceTransactions,
    locations: (await import('@/lib/data/mostaganem-price-reference-locations')).mostaganemPriceReferenceLocations,
  }),
  msila: async () => ({
    transactions: (await import('@/lib/data/msila-price-reference-transactions')).msilaPriceReferenceTransactions,
    locations: (await import('@/lib/data/msila-price-reference-locations')).msilaPriceReferenceLocations,
  }),
  mascara: async () => ({
    transactions: (await import('@/lib/data/mascara-price-reference-transactions')).mascaraPriceReferenceTransactions,
    locations: (await import('@/lib/data/mascara-price-reference-locations')).mascaraPriceReferenceLocations,
  }),
  ouargla: async () => ({
    transactions: (await import('@/lib/data/ouargla-price-reference-transactions')).ouarglaPriceReferenceTransactions,
    locations: (await import('@/lib/data/ouargla-price-reference-locations')).ouarglaPriceReferenceLocations,
  }),
  'el-bayadh': async () => ({
    transactions: (await import('@/lib/data/el-bayadh-price-reference-transactions')).elBayadhPriceReferenceTransactions,
    locations: (await import('@/lib/data/el-bayadh-price-reference-locations')).elBayadhPriceReferenceLocations,
  }),
  illizi: async () => ({
    transactions: (await import('@/lib/data/illizi-price-reference-transactions')).illiziPriceReferenceTransactions,
    locations: (await import('@/lib/data/illizi-price-reference-locations')).illiziPriceReferenceLocations,
  }),
  'bordj-bou-arreridj': async () => ({
    transactions: (await import('@/lib/data/bordj-bou-arreridj-price-reference-transactions')).bordjBouArreridjPriceReferenceTransactions,
    locations: (await import('@/lib/data/bordj-bou-arreridj-price-reference-locations')).bordjBouArreridjPriceReferenceLocations,
  }),
  boumerdes: async () => ({
    transactions: (await import('@/lib/data/boumerdes-price-reference-transactions')).boumerdesPriceReferenceTransactions,
    locations: (await import('@/lib/data/boumerdes-price-reference-locations')).boumerdesPriceReferenceLocations,
  }),
  'el-taref': async () => ({
    transactions: (await import('@/lib/data/el-taref-price-reference-transactions')).elTarefPriceReferenceTransactions,
    locations: (await import('@/lib/data/el-taref-price-reference-locations')).elTarefPriceReferenceLocations,
  }),
  tindouf: async () => ({
    transactions: (await import('@/lib/data/tindouf-price-reference-transactions')).tindoufPriceReferenceTransactions,
    locations: (await import('@/lib/data/tindouf-price-reference-locations')).tindoufPriceReferenceLocations,
  }),
  tissemsilt: async () => ({
    transactions: (await import('@/lib/data/tissemsilt-price-reference-transactions')).tissemsiltPriceReferenceTransactions,
    locations: (await import('@/lib/data/tissemsilt-price-reference-locations')).tissemsiltPriceReferenceLocations,
  }),
  'el-oued': async () => ({
    transactions: (await import('@/lib/data/el-oued-price-reference-transactions')).elOuedPriceReferenceTransactions,
    locations: (await import('@/lib/data/el-oued-price-reference-locations')).elOuedPriceReferenceLocations,
  }),
  khenchela: async () => ({
    transactions: (await import('@/lib/data/khenchela-price-reference-transactions')).khenchelaPriceReferenceTransactions,
    locations: (await import('@/lib/data/khenchela-price-reference-locations')).khenchelaPriceReferenceLocations,
  }),
  'souk-ahras': async () => ({
    transactions: (await import('@/lib/data/souk-ahras-price-reference-transactions')).soukAhrasPriceReferenceTransactions,
    locations: (await import('@/lib/data/souk-ahras-price-reference-locations')).soukAhrasPriceReferenceLocations,
  }),
  tipaza: async () => ({
    transactions: (await import('@/lib/data/tipaza-price-reference-transactions')).tipazaPriceReferenceTransactions,
    locations: (await import('@/lib/data/tipaza-price-reference-locations')).tipazaPriceReferenceLocations,
  }),
  mila: async () => ({
    transactions: (await import('@/lib/data/mila-price-reference-transactions')).milaPriceReferenceTransactions,
    locations: (await import('@/lib/data/mila-price-reference-locations')).milaPriceReferenceLocations,
  }),
  'ain-defla': async () => ({
    transactions: (await import('@/lib/data/ain-defla-price-reference-transactions')).ainDeflaPriceReferenceTransactions,
    locations: (await import('@/lib/data/ain-defla-price-reference-locations')).ainDeflaPriceReferenceLocations,
  }),
  naama: async () => ({
    transactions: (await import('@/lib/data/naama-price-reference-transactions')).naamaPriceReferenceTransactions,
    locations: (await import('@/lib/data/naama-price-reference-locations')).naamaPriceReferenceLocations,
  }),
  'ain-temouchent': async () => ({
    transactions: (await import('@/lib/data/ain-temouchent-price-reference-transactions')).ainTemouchentPriceReferenceTransactions,
    locations: (await import('@/lib/data/ain-temouchent-price-reference-locations')).ainTemouchentPriceReferenceLocations,
  }),
  ghardaia: async () => ({
    transactions: (await import('@/lib/data/ghardaia-price-reference-transactions')).ghardaiaPriceReferenceTransactions,
    locations: (await import('@/lib/data/ghardaia-price-reference-locations')).ghardaiaPriceReferenceLocations,
  }),
  relizane: async () => ({
    transactions: (await import('@/lib/data/relizane-price-reference-transactions')).relizanePriceReferenceTransactions,
    locations: (await import('@/lib/data/relizane-price-reference-locations')).relizanePriceReferenceLocations,
  }),
  timimoun: async () => ({
    transactions: (await import('@/lib/data/timimoun-price-reference-transactions')).timimounPriceReferenceTransactions,
    locations: (await import('@/lib/data/timimoun-price-reference-locations')).timimounPriceReferenceLocations,
  }),
  'bordj-badji-mokhtar': async () => ({
    transactions: (await import('@/lib/data/bordj-badji-mokhtar-price-reference-transactions')).bordjBadjiMokhtarPriceReferenceTransactions,
    locations: (await import('@/lib/data/bordj-badji-mokhtar-price-reference-locations')).bordjBadjiMokhtarPriceReferenceLocations,
  }),
  'ouled-djellal': async () => ({
    transactions: (await import('@/lib/data/ouled-djellal-price-reference-transactions')).ouledDjellalPriceReferenceTransactions,
    locations: (await import('@/lib/data/ouled-djellal-price-reference-locations')).ouledDjellalPriceReferenceLocations,
  }),
  'beni-abbes': async () => ({
    transactions: (await import('@/lib/data/beni-abbes-price-reference-transactions')).beniAbbesPriceReferenceTransactions,
    locations: (await import('@/lib/data/beni-abbes-price-reference-locations')).beniAbbesPriceReferenceLocations,
  }),
  'in-salah': async () => ({
    transactions: (await import('@/lib/data/in-salah-price-reference-transactions')).inSalahPriceReferenceTransactions,
    locations: (await import('@/lib/data/in-salah-price-reference-locations')).inSalahPriceReferenceLocations,
  }),
  'in-guezzam': async () => ({
    transactions: (await import('@/lib/data/in-guezzam-price-reference-transactions')).inGuezzamPriceReferenceTransactions,
    locations: (await import('@/lib/data/in-guezzam-price-reference-locations')).inGuezzamPriceReferenceLocations,
  }),
  touggourt: async () => ({
    transactions: (await import('@/lib/data/touggourt-price-reference-transactions')).touggourtPriceReferenceTransactions,
    locations: (await import('@/lib/data/touggourt-price-reference-locations')).touggourtPriceReferenceLocations,
  }),
  djanet: async () => ({
    transactions: (await import('@/lib/data/djanet-price-reference-transactions')).djanetPriceReferenceTransactions,
    locations: (await import('@/lib/data/djanet-price-reference-locations')).djanetPriceReferenceLocations,
  }),
  'el-mghaier': async () => ({
    transactions: (await import('@/lib/data/el-mghaier-price-reference-transactions')).elMghaierPriceReferenceTransactions,
    locations: (await import('@/lib/data/el-mghaier-price-reference-locations')).elMghaierPriceReferenceLocations,
  }),
  'el-meniaa': async () => ({
    transactions: (await import('@/lib/data/el-meniaa-price-reference-transactions')).elMeniaaPriceReferenceTransactions,
    locations: (await import('@/lib/data/el-meniaa-price-reference-locations')).elMeniaaPriceReferenceLocations,
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
