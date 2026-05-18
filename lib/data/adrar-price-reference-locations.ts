// adrar-locations-2025-2026.ts
// Source: Termes de références relatifs aux locations d'immeubles - Wilaya d'Adrar 2025-2026

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
  unit: 'DA/m²' | 'DA/Ha' | 'DA/m²/Mois' | 'DA/Ha/Mois';
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
  "TAMEST", "IN-ZEGMIR", "TIT", "TIMOKTEN", "TAMENTIT", 
  "SALI", "AKABLI", "OULED AHMED TIMMI", "BOUDA", "SBAA"
];
const dataset3Communes = [
  "FENOUGHIL", "Reggane", "Tsabit", "Zaouiet Kounta", "Aoulef"
];

const generateDataset1 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", centreVille: createRange(182, 209), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Amélioré", centreVille: createRange(97, 121), zonePeripherique: createRange(50, 60), zoneEloignement: createRange(40, 46), unit: "DA/m²/Mois" },
    { label: "Economique", centreVille: createRange(30, 35), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", centreVille: createRange(135, 150), zonePeripherique: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Amélioré", centreVille: createRange(70, 80), zonePeripherique: createRange(50, 60), unit: "DA/m²/Mois" },
    { label: "Précaire", centreVille: createRange(800, 920), zonePeripherique: createRange(300, 350), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(450, 500), zonePeripherique: createRange(220, 255), zoneEloignement: createRange(130, 135), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(220, 240), zonePeripherique: createRange(160, 185), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(350, 405), zonePeripherique: createRange(220, 255), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(220, 255), zonePeripherique: createRange(160, 185), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(160, 185), zonePeripherique: createRange(150, 175), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(140, 165), zonePeripherique: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zonePeripherique: createRange(1180, 1350), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(1050, 1200), zonePeripherique: createRange(840, 960), zoneEloignement: createRange(750, 860), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(860, 980), zonePeripherique: createRange(700, 800), zoneEloignement: createRange(630, 720), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(960, 1100), zonePeripherique: createRange(680, 780), zoneEloignement: createRange(600, 690), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(880, 1010), zonePeripherique: createRange(740, 850), zoneEloignement: createRange(540, 620), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(730, 830), zonePeripherique: createRange(640, 730), zoneEloignement: createRange(600, 690), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zoneEloignement: createRange(2300, 2650), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente:[]
});

const generateDataset2 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Amélioré", centreVille: createRange(63, 71), zonePeripherique: createRange(42, 47), unit: "DA/m²/Mois" },
    { label: "Economique", centreVille: createRange(42, 47), zonePeripherique: createRange(32, 37), unit: "DA/m²/Mois" },
    { label: "Précaire", centreVille: createRange(21, 23), zonePeripherique: createRange(11, 13), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Amélioré", centreVille: createRange(8400, 9660), zonePeripherique: createRange(4200, 4830), zoneEloignement: createRange(3150, 3623), unit: "DA/m²/Mois" },
    { label: "Economique", centreVille: createRange(5250, 6038), zonePeripherique: createRange(2940, 3381), zoneEloignement: createRange(2100, 2415), unit: "DA/m²/Mois" },
    { label: "Précaire", centreVille: createRange(4200, 4830), zonePeripherique: createRange(2625, 3019), zoneEloignement: createRange(1890, 2174), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère moyennement commerciale", centreVille: createRange(13125, 15015), zonePeripherique: createRange(6300, 7245), zoneEloignement: createRange(3150, 3623), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(42, 47), zonePeripherique: createRange(32, 37), unit: "DA/m²/Mois" }
  ],
  hangars: [
    { label: "Situé en zone urbaine", centreVille: createRange(12500, 14300), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(3000, 3450), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(3500, 4050), zonePeripherique: createRange(1600, 1690), zoneEloignement: createRange(1400, 1460), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(4000, 4600), zonePeripherique: createRange(1700, 1800), zoneEloignement: createRange(1500, 1570), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(2500, 2850), zonePeripherique: createRange(1400, 1460), zoneEloignement: createRange(1400, 1440), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(3000, 3450), zonePeripherique: createRange(1500, 1570), zoneEloignement: createRange(1500, 1540), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zoneEloignement: createRange(456000, 524400), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente:[]
});

const generateDataset3 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Amélioré", centreVille: createRange(77, 87), zonePeripherique: createRange(44, 50), unit: "DA/m²/Mois" },
    { label: "Economique", centreVille: createRange(55, 62), zonePeripherique: createRange(33, 39), unit: "DA/m²/Mois" },
    { label: "Précaire", centreVille: createRange(22, 24), zonePeripherique: createRange(22, 24), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[],
  locauxCommerciaux:[
    { label: "Artère moyennement commerciale", centreVille: createRange(66, 75), zonePeripherique: createRange(44, 50), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(66, 75), zonePeripherique: createRange(44, 50), unit: "DA/m²/Mois" }
  ],
  hangars:[],
  terrainsNus:[],
  terrainsAgricolesPlaine: [
    { label: "Potentialité moyenne", zoneEloignement: createRange(2300, 2650), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente:[]
});

export const adrarLocationsReference: CommuneData[] = [
  ...dataset1Communes.map(generateDataset1),
  ...dataset2Communes.map(generateDataset2),
  ...dataset3Communes.map(generateDataset3)
];

export default adrarLocationsReference;