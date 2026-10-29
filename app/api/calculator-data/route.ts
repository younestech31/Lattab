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

const wilayaDataLoaders: Record<Wilaya, {
  sale: () => Promise<PriceRefCommune[]>;
  rent: () => Promise<PriceRefCommune[]>;
}> = {
  oran: {
    sale: async () => (await import('@/lib/data/oran-price-reference-transactions')).oranPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/oran-price-reference-locations')).oranPriceReferenceLocations,
  },
  adrar: {
    sale: async () => (await import('@/lib/data/adrar-price-reference-transactions')).adrarPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/adrar-price-reference-locations')).adrarPriceReferenceLocations,
  },
  chlef: {
    sale: async () => (await import('@/lib/data/chlef-price-reference-transactions')).chlefPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/chlef-price-reference-locations')).chlefPriceReferenceLocations,
  },
  laghouat: {
    sale: async () => (await import('@/lib/data/laghouat-price-reference-transactions')).laghouatPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/laghouat-price-reference-locations')).laghouatPriceReferenceLocations,
  },
  'oum-el-bouaghi': {
    sale: async () => (await import('@/lib/data/oum-el-bouaghi-price-reference-transactions')).oumElBouaghiPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/oum-el-bouaghi-price-reference-locations')).oumElBouaghiPriceReferenceLocations,
  },
  batna: {
    sale: async () => (await import('@/lib/data/batna-price-reference-transactions')).batnaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/batna-price-reference-locations')).batnaPriceReferenceLocations,
  },
  bejaia: {
    sale: async () => (await import('@/lib/data/bejaia-price-reference-transactions')).bejaiaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/bejaia-price-reference-locations')).bejaiaPriceReferenceLocations,
  },
  biskra: {
    sale: async () => (await import('@/lib/data/biskra-price-reference-transactions')).biskraPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/biskra-price-reference-locations')).biskraPriceReferenceLocations,
  },
  bechar: {
    sale: async () => (await import('@/lib/data/bechar-price-reference-transactions')).becharPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/bechar-price-reference-locations')).becharPriceReferenceLocations,
  },
  blida: {
    sale: async () => (await import('@/lib/data/blida-price-reference-transactions')).blidaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/blida-price-reference-locations')).blidaPriceReferenceLocations,
  },
  bouira: {
    sale: async () => (await import('@/lib/data/bouira-price-reference-transactions')).bouiraPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/bouira-price-reference-locations')).bouiraPriceReferenceLocations,
  },
  tamanrasset: {
    sale: async () => (await import('@/lib/data/tamanrasset-price-reference-transactions')).tamanrassetPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tamanrasset-price-reference-locations')).tamanrassetPriceReferenceLocations,
  },
  tebessa: {
    sale: async () => (await import('@/lib/data/tebessa-price-reference-transactions')).tebessaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tebessa-price-reference-locations')).tebessaPriceReferenceLocations,
  },
  tiaret: {
    sale: async () => (await import('@/lib/data/tiaret-price-reference-transactions')).tiaretPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tiaret-price-reference-locations')).tiaretPriceReferenceLocations,
  },
  tlemcen: {
    sale: async () => (await import('@/lib/data/tlemcen-price-reference-transactions')).tlemcenPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tlemcen-price-reference-locations')).tlemcenPriceReferenceLocations,
  },
  'tizi-ouzou': {
    sale: async () => (await import('@/lib/data/tizi-ouzou-price-reference-transactions')).tiziOuzouPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tizi-ouzou-price-reference-locations')).tiziOuzouPriceReferenceLocations,
  },
  alger: {
    sale: async () => (await import('@/lib/data/alger-price-reference-transactions')).algerPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/alger-price-reference-locations')).algerPriceReferenceLocations,
  },
  djelfa: {
    sale: async () => (await import('@/lib/data/djelfa-price-reference-transactions')).djelfaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/djelfa-price-reference-locations')).djelfaPriceReferenceLocations,
  },
  jijel: {
    sale: async () => (await import('@/lib/data/jijel-price-reference-transactions')).jijelPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/jijel-price-reference-locations')).jijelPriceReferenceLocations,
  },
  setif: {
    sale: async () => (await import('@/lib/data/setif-price-reference-transactions')).setifPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/setif-price-reference-locations')).setifPriceReferenceLocations,
  },
  saida: {
    sale: async () => (await import('@/lib/data/saida-price-reference-transactions')).saidaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/saida-price-reference-locations')).saidaPriceReferenceLocations,
  },
  skikda: {
    sale: async () => (await import('@/lib/data/skikda-price-reference-transactions')).skikdaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/skikda-price-reference-locations')).skikdaPriceReferenceLocations,
  },
  'sidi-bel-abbes': {
    sale: async () => (await import('@/lib/data/sidi-bel-abbes-price-reference-transactions')).sidiBelAbbesPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/sidi-bel-abbes-price-reference-locations')).sidiBelAbbesPriceReferenceLocations,
  },
  annaba: {
    sale: async () => (await import('@/lib/data/annaba-price-reference-transactions')).annabaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/annaba-price-reference-locations')).annabaPriceReferenceLocations,
  },
  guelma: {
    sale: async () => (await import('@/lib/data/guelma-price-reference-transactions')).guelmaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/guelma-price-reference-locations')).guelmaPriceReferenceLocations,
  },
  constantine: {
    sale: async () => (await import('@/lib/data/constantine-price-reference-transactions')).constantinePriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/constantine-price-reference-locations')).constantinePriceReferenceLocations,
  },
  medea: {
    sale: async () => (await import('@/lib/data/medea-price-reference-transactions')).medeaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/medea-price-reference-locations')).medeaPriceReferenceLocations,
  },
  mostaganem: {
    sale: async () => (await import('@/lib/data/mostaganem-price-reference-transactions')).mostaganemPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/mostaganem-price-reference-locations')).mostaganemPriceReferenceLocations,
  },
  msila: {
    sale: async () => (await import('@/lib/data/msila-price-reference-transactions')).msilaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/msila-price-reference-locations')).msilaPriceReferenceLocations,
  },
  mascara: {
    sale: async () => (await import('@/lib/data/mascara-price-reference-transactions')).mascaraPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/mascara-price-reference-locations')).mascaraPriceReferenceLocations,
  },
  ouargla: {
    sale: async () => (await import('@/lib/data/ouargla-price-reference-transactions')).ouarglaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/ouargla-price-reference-locations')).ouarglaPriceReferenceLocations,
  },
  'el-bayadh': {
    sale: async () => (await import('@/lib/data/el-bayadh-price-reference-transactions')).elBayadhPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/el-bayadh-price-reference-locations')).elBayadhPriceReferenceLocations,
  },
  illizi: {
    sale: async () => (await import('@/lib/data/illizi-price-reference-transactions')).illiziPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/illizi-price-reference-locations')).illiziPriceReferenceLocations,
  },
  'bordj-bou-arreridj': {
    sale: async () => (await import('@/lib/data/bordj-bou-arreridj-price-reference-transactions')).bordjBouArreridjPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/bordj-bou-arreridj-price-reference-locations')).bordjBouArreridjPriceReferenceLocations,
  },
  boumerdes: {
    sale: async () => (await import('@/lib/data/boumerdes-price-reference-transactions')).boumerdesPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/boumerdes-price-reference-locations')).boumerdesPriceReferenceLocations,
  },
  'el-taref': {
    sale: async () => (await import('@/lib/data/el-taref-price-reference-transactions')).elTarefPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/el-taref-price-reference-locations')).elTarefPriceReferenceLocations,
  },
  tindouf: {
    sale: async () => (await import('@/lib/data/tindouf-price-reference-transactions')).tindoufPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tindouf-price-reference-locations')).tindoufPriceReferenceLocations,
  },
  tissemsilt: {
    sale: async () => (await import('@/lib/data/tissemsilt-price-reference-transactions')).tissemsiltPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tissemsilt-price-reference-locations')).tissemsiltPriceReferenceLocations,
  },
  'el-oued': {
    sale: async () => (await import('@/lib/data/el-oued-price-reference-transactions')).elOuedPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/el-oued-price-reference-locations')).elOuedPriceReferenceLocations,
  },
  khenchela: {
    sale: async () => (await import('@/lib/data/khenchela-price-reference-transactions')).khenchelaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/khenchela-price-reference-locations')).khenchelaPriceReferenceLocations,
  },
  'souk-ahras': {
    sale: async () => (await import('@/lib/data/souk-ahras-price-reference-transactions')).soukAhrasPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/souk-ahras-price-reference-locations')).soukAhrasPriceReferenceLocations,
  },
  tipaza: {
    sale: async () => (await import('@/lib/data/tipaza-price-reference-transactions')).tipazaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/tipaza-price-reference-locations')).tipazaPriceReferenceLocations,
  },
  mila: {
    sale: async () => (await import('@/lib/data/mila-price-reference-transactions')).milaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/mila-price-reference-locations')).milaPriceReferenceLocations,
  },
  'ain-defla': {
    sale: async () => (await import('@/lib/data/ain-defla-price-reference-transactions')).ainDeflaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/ain-defla-price-reference-locations')).ainDeflaPriceReferenceLocations,
  },
  naama: {
    sale: async () => (await import('@/lib/data/naama-price-reference-transactions')).naamaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/naama-price-reference-locations')).naamaPriceReferenceLocations,
  },
  'ain-temouchent': {
    sale: async () => (await import('@/lib/data/ain-temouchent-price-reference-transactions')).ainTemouchentPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/ain-temouchent-price-reference-locations')).ainTemouchentPriceReferenceLocations,
  },
  ghardaia: {
    sale: async () => (await import('@/lib/data/ghardaia-price-reference-transactions')).ghardaiaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/ghardaia-price-reference-locations')).ghardaiaPriceReferenceLocations,
  },
  relizane: {
    sale: async () => (await import('@/lib/data/relizane-price-reference-transactions')).relizanePriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/relizane-price-reference-locations')).relizanePriceReferenceLocations,
  },
  timimoun: {
    sale: async () => (await import('@/lib/data/timimoun-price-reference-transactions')).timimounPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/timimoun-price-reference-locations')).timimounPriceReferenceLocations,
  },
  'bordj-badji-mokhtar': {
    sale: async () => (await import('@/lib/data/bordj-badji-mokhtar-price-reference-transactions')).bordjBadjiMokhtarPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/bordj-badji-mokhtar-price-reference-locations')).bordjBadjiMokhtarPriceReferenceLocations,
  },
  'ouled-djellal': {
    sale: async () => (await import('@/lib/data/ouled-djellal-price-reference-transactions')).ouledDjellalPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/ouled-djellal-price-reference-locations')).ouledDjellalPriceReferenceLocations,
  },
  'beni-abbes': {
    sale: async () => (await import('@/lib/data/beni-abbes-price-reference-transactions')).beniAbbesPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/beni-abbes-price-reference-locations')).beniAbbesPriceReferenceLocations,
  },
  'in-salah': {
    sale: async () => (await import('@/lib/data/in-salah-price-reference-transactions')).inSalahPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/in-salah-price-reference-locations')).inSalahPriceReferenceLocations,
  },
  'in-guezzam': {
    sale: async () => (await import('@/lib/data/in-guezzam-price-reference-transactions')).inGuezzamPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/in-guezzam-price-reference-locations')).inGuezzamPriceReferenceLocations,
  },
  touggourt: {
    sale: async () => (await import('@/lib/data/touggourt-price-reference-transactions')).touggourtPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/touggourt-price-reference-locations')).touggourtPriceReferenceLocations,
  },
  djanet: {
    sale: async () => (await import('@/lib/data/djanet-price-reference-transactions')).djanetPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/djanet-price-reference-locations')).djanetPriceReferenceLocations,
  },
  'el-mghaier': {
    sale: async () => (await import('@/lib/data/el-mghaier-price-reference-transactions')).elMghaierPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/el-mghaier-price-reference-locations')).elMghaierPriceReferenceLocations,
  },
  'el-meniaa': {
    sale: async () => (await import('@/lib/data/el-meniaa-price-reference-transactions')).elMeniaaPriceReferenceTransactions,
    rent: async () => (await import('@/lib/data/el-meniaa-price-reference-locations')).elMeniaaPriceReferenceLocations,
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
    const dataSource = (await wilayaDataLoaders[wilaya][mode]()) ?? [];
    
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
