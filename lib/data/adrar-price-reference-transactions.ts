// adrar-transactions-2025-2026.ts
// Source: Termes de références relatifs aux transactions d'immeubles - Wilaya d'Adrar 2025-2026

export interface PriceRange {
  min: number;
  max: number;
  average: number;
}

export interface PropertyEntry {
  label: string;
  zoneResidentielle?: PriceRange;
  centreVille?: PriceRange;
  zonePeripherique?: PriceRange;
  zoneEloignement?: PriceRange;
  unit: 'DA/m²' | 'DA/Ha';
}

export interface CommuneData {
  commune: string;
  region?: string;
  individuels: PropertyEntry[];
  collectifsSemiCollectifs: PropertyEntry[];
  locauxCommerciaux: PropertyEntry[];
  hangars: PropertyEntry[];
  terrainsNus: PropertyEntry[];
  terrainsAgricolesPlaine: PropertyEntry[];
  terrainsAgricolesPente: PropertyEntry[];
}

const createRange = (min: number, max: number): PriceRange => ({
  min,
  max,
  average: Math.round((min + max) / 2),
});

const dataset1Communes = ["ADRAR"];
const dataset2Communes = [
  "TAMEST", "IN-ZEGHMIR", "TIT", "TIMOKTEN", "TAMENTIT", 
  "SALI", "AKABLI", "OULED AHMED TIMMI", "BOUDA", "SEBAA"
];
const dataset3Communes = [
  "Reggane", "Zaouiet Kounta", "Aoulef", "Fenoughil", "Tsabit"
];

const generateDataset1 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Amélioré", centreVille: createRange(35100, 40500), zonePeripherique: createRange(20250, 23288), zoneEloignement: createRange(16200, 18630), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(25000, 28750), zonePeripherique: createRange(11250, 12938), zoneEloignement: createRange(8750, 10063), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(17250, 19550), zonePeripherique: createRange(4600, 5290), zoneEloignement: createRange(3450, 3968), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Amélioré", centreVille: createRange(13650, 15698), zonePeripherique: createRange(10500, 12075), zoneEloignement: createRange(8400, 9660), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(10500, 12075), zonePeripherique: createRange(7350, 8453), zoneEloignement: createRange(4200, 4830), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(5250, 6038), zonePeripherique: createRange(4200, 4830), zoneEloignement: createRange(3675, 4200), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(44000, 51000), zonePeripherique: createRange(35000, 41000), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", centreVille: createRange(33000, 37950), zonePeripherique: createRange(17600, 20240), zoneEloignement: createRange(12100, 13915), unit: "DA/m²" }
  ],
  hangars:[],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(12100, 13915), zonePeripherique: createRange(4950, 5500), zoneEloignement: createRange(1980, 2310), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(13200, 16500), zonePeripherique: createRange(5500, 6600), zoneEloignement: createRange(2200, 2530), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(11880, 13640), zonePeripherique: createRange(4730, 5390), zoneEloignement: createRange(1760, 2035), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(12980, 14850), zonePeripherique: createRange(5280, 6050), zoneEloignement: createRange(1980, 2310), unit: "DA/m²" },
    { label: "Industriel", zonePeripherique: createRange(5500, 6325), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zoneEloignement: createRange(456700, 525205), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente:[]
});

const generateDataset2 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Amélioré", centreVille: createRange(11550, 13230), zonePeripherique: createRange(8400, 9660), zoneEloignement: createRange(5250, 6038), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(7350, 8453), zonePeripherique: createRange(3150, 3623), zoneEloignement: createRange(2100, 2415), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(4200, 4830), zonePeripherique: createRange(2100, 2415), zoneEloignement: createRange(1575, 1811), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Amélioré", centreVille: createRange(8400, 9660), zonePeripherique: createRange(4200, 4830), zoneEloignement: createRange(3150, 3623), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(5250, 6038), zonePeripherique: createRange(2940, 3381), zoneEloignement: createRange(2100, 2415), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(4200, 4830), zonePeripherique: createRange(2625, 3019), zoneEloignement: createRange(1890, 2174), unit: "DA/m²" }
  ],
  locauxCommerciaux: [
    { label: "Artère moyennement commerciale", centreVille: createRange(13125, 15015), zonePeripherique: createRange(6300, 7245), zoneEloignement: createRange(3150, 3623), unit: "DA/m²" }
  ],
  hangars: [
    { label: "Situé en zone urbaine", centreVille: createRange(12500, 14300), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(3500, 4050), zonePeripherique: createRange(1600, 1690), zoneEloignement: createRange(1400, 1460), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(4000, 4600), zonePeripherique: createRange(1700, 1800), zoneEloignement: createRange(1500, 1570), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(2500, 2850), zonePeripherique: createRange(1400, 1460), zoneEloignement: createRange(1400, 1440), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(3000, 3450), zonePeripherique: createRange(1500, 1570), zoneEloignement: createRange(1500, 1540), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zoneEloignement: createRange(456000, 524400), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente:[]
});

const generateDataset3 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Amélioré", centreVille: createRange(19950, 22575), zonePeripherique: createRange(12600, 14490), zoneEloignement: createRange(8400, 9660), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(13125, 15015), zonePeripherique: createRange(7350, 8453), zoneEloignement: createRange(4200, 4830), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(5775, 6615), zonePeripherique: createRange(3150, 3623), zoneEloignement: createRange(2625, 3019), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Amélioré", centreVille: createRange(9450, 10868), zonePeripherique: createRange(8295, 9539), zoneEloignement: createRange(6300, 7245), unit: "DA/m²" },
    { label: "Economique", centreVille: createRange(6825, 7849), zonePeripherique: createRange(4725, 5434), zoneEloignement: createRange(3150, 3623), unit: "DA/m²" },
    { label: "Précaire", centreVille: createRange(4200, 4830), zonePeripherique: createRange(3150, 3623), zoneEloignement: createRange(2100, 2415), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(20000, 23000), zonePeripherique: createRange(15000, 17250), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", centreVille: createRange(16800, 19320), zonePeripherique: createRange(14700, 16905), zoneEloignement: createRange(9450, 10868), unit: "DA/m²" }
  ],
  hangars:[],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(4200, 4830), zonePeripherique: createRange(1995, 2153), zoneEloignement: createRange(1575, 1649), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(6300, 7245), zonePeripherique: createRange(2100, 2258), zoneEloignement: createRange(1680, 1775), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(3675, 4200), zonePeripherique: createRange(1785, 1890), zoneEloignement: createRange(1365, 1418), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(5775, 6615), zonePeripherique: createRange(1890, 2048), zoneEloignement: createRange(1470, 1523), unit: "DA/m²" },
    { label: "Industriel", zonePeripherique: createRange(5250, 6038), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zoneEloignement: createRange(456700, 525205), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente:[]
});

export const adrarTransactionsReference: CommuneData[] = [
  ...dataset1Communes.map(generateDataset1),
  ...dataset2Communes.map(generateDataset2),
  ...dataset3Communes.map(generateDataset3)
];

export default adrarTransactionsReference;