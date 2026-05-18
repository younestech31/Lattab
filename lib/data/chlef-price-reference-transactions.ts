// chlef-transactions-2025-2026.ts
// Source: Termes de références relatifs aux transactions d'immeubles - Wilaya de Chlef 2025-2026

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

const dataset1Communes = ["Chlef"];
const dataset2Communes = ["Tenes", "Oued fodda", "Boukader", "Oued sly", "Oum drou", "Beni haoua", "Chettia"];
const dataset3Communes = ["Marsa", "Sidi abderahmane", "Sidi akkacha", "Ouled fares", "Ain merane", "Oued gousine"];
const dataset4Communes = ["El karimia", "Taougrite", "Sobha"];
const dataset5Communes = ["Bouzghaia"];
const dataset6Communes = ["Aboulhassene", "Harchoune", "Ouled ben aek"];
const dataset7Communes = ["Zeboudja", "Sendjas", "Ouled abess"];
const dataset8Communes = [
  "Tadjena", "Haranfa", "Medjadja", "El hadjadj", "Mousadak", 
  "Beni rached", "Talassa", "Dahra", "Benairia", "Bereira", "Beni bouateb"
];

const generateDataset1 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(142000, 163300), centreVille: createRange(114000, 131100), zonePeripherique: createRange(92000, 105800), zoneEloignement: createRange(74000, 85100), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(98000, 112700), centreVille: createRange(78000, 89700), zonePeripherique: createRange(62000, 71300), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(62000, 71300), centreVille: createRange(50000, 57500), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(46000, 52900), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(98000, 112700), centreVille: createRange(70000, 80500), zonePeripherique: createRange(62000, 71300), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(62000, 71300), centreVille: createRange(50000, 57500), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(46000, 52900), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(38000, 43700), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(22000, 25300), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(255000, 293250), centreVille: createRange(215000, 247250), zonePeripherique: createRange(175000, 201250), zoneEloignement: createRange(135000, 155250), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(185000, 212750), centreVille: createRange(155000, 178250), zonePeripherique: createRange(125000, 143750), zoneEloignement: createRange(95000, 109250), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(125000, 143750), centreVille: createRange(105000, 120750), zonePeripherique: createRange(85000, 97750), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(20000, 23000), zonePeripherique: createRange(15000, 17250), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(40000, 46000), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(30000, 34500), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(15000, 17250), zoneEloignement: createRange(13000, 14950), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(18000, 20700), zonePeripherique: createRange(13000, 14950), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset2 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(128000, 147200), centreVille: createRange(102000, 117300), zonePeripherique: createRange(82000, 94300), zoneEloignement: createRange(66000, 75900), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(62000, 71300), centreVille: createRange(50000, 57500), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(46000, 52900), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(22000, 25300), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(46000, 52900), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(40000, 46000), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(26000, 29900), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(36000, 41400), centreVille: createRange(28000, 32200), zonePeripherique: createRange(22000, 25300), zoneEloignement: createRange(18000, 20700), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(215000, 247250), centreVille: createRange(180000, 207000), zonePeripherique: createRange(145000, 166750), zoneEloignement: createRange(110000, 126500), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(125000, 143750), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(75000, 86250), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(95500, 109825), centreVille: createRange(80500, 92575), zonePeripherique: createRange(65500, 75325), zoneEloignement: createRange(55000, 63250), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(17000, 19550), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(11000, 12650), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(15000, 17250), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(20000, 23000), zonePeripherique: createRange(15000, 17250), zoneEloignement: createRange(13000, 14950), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(13000, 14950), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(13000, 14950), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(12000, 13800), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset3 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(62000, 71300), centreVille: createRange(50000, 57500), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(22000, 25300), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(26000, 29900), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(26000, 29900), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(125000, 143750), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(75000, 86250), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(125000, 143750), centreVille: createRange(105000, 120750), zonePeripherique: createRange(88000, 101200), zoneEloignement: createRange(69500, 79925), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(70500, 81075), centreVille: createRange(60500, 69575), zonePeripherique: createRange(50500, 58075), zoneEloignement: createRange(40500, 46575), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(13000, 14950), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(13000, 14950), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(18000, 20700), zonePeripherique: createRange(13000, 14950), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(11000, 12650), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset4 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(46000, 52900), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(26000, 29900), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(26000, 29900), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(10000, 11500), zonePeripherique: createRange(9200, 10580), zoneEloignement: createRange(7400, 8510), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(126000, 144900), centreVille: createRange(101000, 116150), zonePeripherique: createRange(76000, 87400), zoneEloignement: createRange(51000, 58650), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(77000, 88550), centreVille: createRange(62000, 71300), zonePeripherique: createRange(47000, 54050), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(45500, 52325), zonePeripherique: createRange(33000, 37950), zoneEloignement: createRange(20500, 23575), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(14000, 16100), zonePeripherique: createRange(11000, 12650), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(11000, 12650), centreVille: createRange(8000, 9200), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset5 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(46000, 52900), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(36000, 41400), centreVille: createRange(28000, 32200), zonePeripherique: createRange(22000, 25300), zoneEloignement: createRange(18000, 20700), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(26000, 29900), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(26000, 29900), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(98500, 113275), zonePeripherique: createRange(77000, 88550), zoneEloignement: createRange(55500, 63825), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(95000, 109250), centreVille: createRange(80000, 92000), zonePeripherique: createRange(65000, 74750), zoneEloignement: createRange(45000, 51750), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(60500, 69575), centreVille: createRange(50000, 57500), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(18000, 20700), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(11000, 12650), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(13000, 14950), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(11000, 12650), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset6 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(36000, 41400), centreVille: createRange(28000, 32200), zonePeripherique: createRange(22000, 25300), zoneEloignement: createRange(18000, 20700), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(93000, 106950), centreVille: createRange(77000, 88550), zonePeripherique: createRange(69000, 79350), zoneEloignement: createRange(45000, 51750), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(71000, 81650), centreVille: createRange(55000, 63250), zonePeripherique: createRange(43000, 49450), zoneEloignement: createRange(29000, 33350), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(52000, 59800), centreVille: createRange(40500, 46575), zonePeripherique: createRange(29000, 33350), zoneEloignement: createRange(17500, 20125), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(5000, 5750), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3500, 4025), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(4000, 4600), zonePeripherique: createRange(3000, 3450), zoneEloignement: createRange(2500, 2875), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(6500, 7475), centreVille: createRange(4500, 5175), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset7 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(16000, 18400), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(79000, 90850), centreVille: createRange(62500, 71875), zonePeripherique: createRange(46000, 52900), zoneEloignement: createRange(29500, 33925), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(52000, 59800), zonePeripherique: createRange(39000, 44850), zoneEloignement: createRange(26000, 29900), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(47000, 54050), centreVille: createRange(36500, 41975), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(15500, 17825), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4500, 5175), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3500, 4025), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(5000, 5750), zonePeripherique: createRange(3500, 4025), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(4000, 4600), zonePeripherique: createRange(3000, 3450), zoneEloignement: createRange(2500, 2875), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2500, 2875), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(4000, 4600), zonePeripherique: createRange(3000, 3450), zoneEloignement: createRange(2500, 2875), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

const generateDataset8 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(11000, 12650), zonePeripherique: createRange(9200, 10580), zoneEloignement: createRange(7400, 8510), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
    { label: "Amélioré", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(8000, 9200), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
    { label: "Economique", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(6000, 6900), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(3600, 4140), unit: "DA/m²" },
    { label: "Précaire", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(4000, 4600), zonePeripherique: createRange(3000, 3450), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(72000, 82800), centreVille: createRange(56500, 64975), zonePeripherique: createRange(41000, 47150), zoneEloignement: createRange(25500, 29325), unit: "DA/m²" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(59000, 67850), centreVille: createRange(47000, 54050), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(39500, 45425), centreVille: createRange(31000, 35650), zonePeripherique: createRange(22500, 25875), zoneEloignement: createRange(14000, 16100), unit: "DA/m²" }
  ],
  hangars:[
    { label: "Situé en zone urbaine", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2300, 2645), unit: "DA/m²" },
    { label: "Situé en zone rurale", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2300, 2645), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(5000, 5750), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(3500, 4025), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(4000, 4600), zonePeripherique: createRange(3000, 3450), zoneEloignement: createRange(2500, 2875), unit: "DA/m²" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2500, 2875), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(3500, 4025), centreVille: createRange(2500, 2875), zonePeripherique: createRange(2000, 2300), zoneEloignement: createRange(1800, 2070), unit: "DA/m²" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(3000, 3450), centreVille: createRange(2000, 2300), zonePeripherique: createRange(1900, 2185), zoneEloignement: createRange(1500, 1725), unit: "DA/m²" },
    { label: "Industriel", zoneResidentielle: createRange(2000, 2300), centreVille: createRange(1500, 1725), zonePeripherique: createRange(1000, 1150), zoneEloignement: createRange(900, 1035), unit: "DA/m²" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(9000000, 10350000), zoneEloignement: createRange(9000000, 10350000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(6000000, 6900000), zoneEloignement: createRange(6000000, 6900000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(3000000, 3450000), zoneEloignement: createRange(3000000, 3450000), unit: "DA/Ha" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1200000, 1380000), zoneEloignement: createRange(1200000, 1380000), unit: "DA/Ha" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(800000, 920000), unit: "DA/Ha" },
    { label: "Potentialité faible", zonePeripherique: createRange(500000, 575000), zoneEloignement: createRange(500000, 575000), unit: "DA/Ha" }
  ]
});

export const chlefTransactionsReference: CommuneData[] = [
  ...dataset1Communes.map(generateDataset1),
  ...dataset2Communes.map(generateDataset2),
  ...dataset3Communes.map(generateDataset3),
  ...dataset4Communes.map(generateDataset4),
  ...dataset5Communes.map(generateDataset5),
  ...dataset6Communes.map(generateDataset6),
  ...dataset7Communes.map(generateDataset7),
  ...dataset8Communes.map(generateDataset8)
];

export default chlefTransactionsReference;