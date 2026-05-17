// batna-price-reference-transactions.ts
// Source: Barème des prix référentiels des transactions immobilières - Wilaya de Batna 2025-2026

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

export const batnaPriceReference: CommuneData[] = [
  {
    commune: "Batna",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(200000, 230000), zonePeripherique: createRange(100000, 115000), zoneEloignement: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(150000, 172500), zonePeripherique: createRange(75000, 86250), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(140000, 161000), zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(120000, 138000), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(28000, 32200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(160000, 184000), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(85000, 97750), centreVille: createRange(140000, 161000), zonePeripherique: createRange(70000, 80500), zoneEloignement: createRange(60000, 69000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(90000, 103500), zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(48000, 55200), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(60000, 69000), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(250000, 287500), zonePeripherique: createRange(93500, 107525), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(100000, 115000), centreVille: createRange(120000, 138000), zonePeripherique: createRange(79050, 90908), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(38000, 43700), zonePeripherique: createRange(24700, 28405), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16500, 18975), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(140000, 161000), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(18000, 20700), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(72000, 82800), centreVille: createRange(130000, 149500), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(13500, 15525), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(120000, 138000), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(12500, 14375), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(35000, 40250), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(3400000, 3910000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2900000, 3335000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2400000, 2760000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1700000, 1955000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Barika",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(90000, 103500), zonePeripherique: createRange(75000, 86250), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(58000, 66700), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(48000, 55200), centreVille: createRange(52000, 59800), zonePeripherique: createRange(38000, 43700), zoneEloignement: createRange(32000, 36800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(35000, 40250), centreVille: createRange(40000, 46000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), zoneEloignement: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(48000, 55200), centreVille: createRange(60000, 69000), zonePeripherique: createRange(44000, 50600), zoneEloignement: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(81800, 94070), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70300, 80845), centreVille: createRange(80700, 92805), zonePeripherique: createRange(58200, 66930), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58600, 67390), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(29900, 34385), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(11400, 13110), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(50000, 57500), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14500, 16675), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12800, 14720), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18500, 21275), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(28000, 32200), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Tazoult",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(85000, 97750), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(52000, 59800), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(31000, 35650), centreVille: createRange(40000, 46000), zonePeripherique: createRange(23200, 26680), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(36500, 41975), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(48000, 55200), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(58000, 66700), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(29000, 33350), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(55000, 63250), zonePeripherique: createRange(18000, 20700), zoneEloignement: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(40000, 46000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ain Touta",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(52000, 59800), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(40000, 46000), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(65000, 74750), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(36500, 41975), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(55000, 63250), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(81800, 94070), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70300, 80845), centreVille: createRange(80700, 92805), zonePeripherique: createRange(58200, 66930), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58600, 67390), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(29900, 34385), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(11400, 13110), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(50000, 57500), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14500, 16675), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12800, 14720), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18500, 21275), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(28000, 32200), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Merouana",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(52000, 59800), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(40000, 46000), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(65000, 74750), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(36500, 41975), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(55000, 63250), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(81800, 94070), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70300, 80845), centreVille: createRange(80700, 92805), zonePeripherique: createRange(58200, 66930), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58600, 67390), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(29900, 34385), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(11400, 13110), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(50000, 57500), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14500, 16675), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12800, 14720), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18500, 21275), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(28000, 32200), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "El Madher",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(85000, 97750), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(52000, 59800), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(31000, 35650), centreVille: createRange(40000, 46000), zonePeripherique: createRange(23200, 26680), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(36500, 41975), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(48000, 55200), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(58000, 66700), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(29000, 33350), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(55000, 63250), zonePeripherique: createRange(18000, 20700), zoneEloignement: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(40000, 46000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ras El Aioun",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(85000, 97750), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(55000, 63250), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(52000, 59800), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(31000, 35650), centreVille: createRange(40000, 46000), zonePeripherique: createRange(23200, 26680), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), zoneEloignement: createRange(36500, 41975), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(48000, 55200), zonePeripherique: createRange(35000, 40250), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(58000, 66700), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(29000, 33350), zonePeripherique: createRange(21200, 24380), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16800, 19320), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(55000, 63250), zonePeripherique: createRange(18000, 20700), zoneEloignement: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(40000, 46000), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(30000, 34500), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), zonePeripherique: createRange(13000, 14950), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Arris",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(50000, 57500), zoneEloignement: createRange(40000, 46000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(65000, 74750), zonePeripherique: createRange(38000, 43700), zoneEloignement: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(55000, 63250), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(40000, 46000), zonePeripherique: createRange(23200, 26680), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(48000, 55200), zonePeripherique: createRange(31000, 35650), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(58000, 66700), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(30000, 34500), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(30000, 34500), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(24000, 27600), zonePeripherique: createRange(14500, 16675), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(3500, 4025), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(16200, 18630), centreVille: createRange(20000, 23000), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(18000, 20700), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "N'Gaous",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(75000, 86250), zonePeripherique: createRange(50000, 57500), zoneEloignement: createRange(40000, 46000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(65000, 74750), zonePeripherique: createRange(38000, 43700), zoneEloignement: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(44000, 50600), centreVille: createRange(55000, 63250), zonePeripherique: createRange(32000, 36800), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(32000, 36800), centreVille: createRange(40000, 46000), zonePeripherique: createRange(23200, 26680), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(48000, 55200), zonePeripherique: createRange(31000, 35650), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(34000, 39100), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(71000, 81650), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(58000, 66700), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(58000, 66700), centreVille: createRange(68000, 78200), zonePeripherique: createRange(48000, 55200), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(30000, 34500), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(30000, 34500), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(24000, 27600), zonePeripherique: createRange(14500, 16675), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(3500, 4025), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(16200, 18630), centreVille: createRange(20000, 23000), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(18000, 20700), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2700000, 3105000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(2300000, 2645000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(2000000, 2300000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2160000, 2484000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1920000, 2208000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1360000, 1564000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Seriana",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Chemora",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Timqad",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "El Djezar",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(35000, 40250), centreVille: createRange(40000, 46000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(30000, 34500), zonePeripherique: createRange(22000, 25300), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(48000, 55200), zonePeripherique: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(35000, 40250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(60000, 69000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(65000, 74750), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(58000, 66700), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(18500, 21275), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(13400, 15410), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(30000, 34500), zonePeripherique: createRange(15000, 17250), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(25000, 28750), zonePeripherique: createRange(13000, 14950), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(15000, 17000), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(17000, 19550), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Tkout",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ain Djasser",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(35000, 40250), centreVille: createRange(40000, 46000), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(30000, 34500), zonePeripherique: createRange(22000, 25300), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(48000, 55200), zonePeripherique: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(35000, 40250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80000, 92000), zonePeripherique: createRange(60000, 69000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(65000, 74750), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(58000, 66700), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(18500, 21275), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(13400, 15410), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(30000, 34500), zonePeripherique: createRange(15000, 17250), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(25000, 28750), zonePeripherique: createRange(13000, 14950), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(15000, 17000), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(17000, 19550), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Bouzina",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Seggana",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Menaa",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ichemoul",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Theniet El Abed",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ouled Si Sliman",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Fisdis",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(45000, 51750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(60000, 69000), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(66000, 75900), centreVille: createRange(50000, 57500), zonePeripherique: createRange(66000, 75900), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(45000, 51750), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(25000, 28750), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(95000, 109250), zonePeripherique: createRange(81800, 94070), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(80700, 92805), zonePeripherique: createRange(70300, 80845), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(68000, 78200), zonePeripherique: createRange(58600, 67390), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16500, 18975), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(22000, 25300), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(20000, 23000), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(16000, 18400), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Oued Chaaba",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(36000, 41400), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(30600, 35190), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(85000, 97750), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(66000, 75900), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(45000, 51750), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(95000, 109250), centreVille: createRange(52000, 59800), zonePeripherique: createRange(75000, 86250), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(44000, 50000), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(68000, 78200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(60000, 69000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16500, 18975), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Djearma",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(36000, 41400), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(30600, 35190), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(85000, 97750), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(70000, 80500), zonePeripherique: createRange(66000, 75900), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(75000, 86250), centreVille: createRange(95000, 109250), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(60000, 69000), centreVille: createRange(80000, 92000), zonePeripherique: createRange(44000, 50000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(68000, 78200), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16500, 18975), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Aine Yagout",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(45000, 51750), centreVille: createRange(60000, 69000), zonePeripherique: createRange(36000, 41400), zoneEloignement: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(39000, 44850), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(34000, 39100), centreVille: createRange(44000, 50600), zonePeripherique: createRange(31000, 35650), zoneEloignement: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(32000, 36800), zonePeripherique: createRange(20000, 23000), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(60000, 69000), zonePeripherique: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(39000, 44850), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(65000, 74750), centreVille: createRange(80000, 92000), zonePeripherique: createRange(52000, 59800), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(70000, 80500), zonePeripherique: createRange(44000, 50600), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(60000, 69000), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(25000, 28750), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(16000, 18400), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(14000, 16100), centreVille: createRange(25000, 28750), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(13000, 14950), centreVille: createRange(22000, 25300), zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(20000, 23000), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(17000, 19550), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(8000, 9200), centreVille: createRange(15000, 17250), zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(13000, 14950), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2430000, 2794500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1940000, 2231000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1550000, 1782500), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1240000, 1426000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(992000, 1140800), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(793000, 911950), unit: "DA/Ha" }
    ]
  },
  {
    commune: "M'Doukal",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Bitam",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Boumegeuer",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Zanat El Beidha",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Sefiane",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Azil Abdelkader",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Oued El Ma",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Oued Taga",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(30000, 34500), centreVille: createRange(36000, 41400), zonePeripherique: createRange(28000, 32200), zoneEloignement: createRange(23000, 26450), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(26000, 29900), zoneEloignement: createRange(21000, 24150), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(28000, 32200), zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(20000, 23000), centreVille: createRange(23000, 26450), zonePeripherique: createRange(17000, 19550), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Amélioré", zoneResidentielle: createRange(25000, 28750), centreVille: createRange(29000, 33350), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(26000, 29900), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(55000, 63250), centreVille: createRange(60000, 69000), zonePeripherique: createRange(26000, 28600), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(46000, 52900), centreVille: createRange(52000, 59800), zonePeripherique: createRange(21000, 23100), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(40000, 46000), centreVille: createRange(50000, 57500), zonePeripherique: createRange(19000, 20900), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13200), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(10000, 11500), centreVille: createRange(15000, 17250), zonePeripherique: createRange(9000, 10350), zoneEloignement: createRange(7000, 8050), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(9000, 10350), centreVille: createRange(14000, 16100), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(7000, 8050), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(8000, 9200), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(10000, 11500), zonePeripherique: createRange(7000, 8050), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(2310000, 2656500), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1848000, 2125200), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(1244000, 1430600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(995000, 1144250), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(796000, 915400), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636800, 732320), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Tilatou",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Rahbat",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Boulhilet",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Boumia",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Taxlent",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ghassira",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Taikhempt",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ksar Belezma",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Foum Etoub",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Guigba",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Tigharghar",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ouled Amar",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Hidoussa",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Inoughissen",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(28000, 32200), centreVille: createRange(30000, 34500), zonePeripherique: createRange(25000, 28750), zoneEloignement: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(26000, 29900), centreVille: createRange(28000, 32200), zonePeripherique: createRange(19000, 21850), zoneEloignement: createRange(15000, 17250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(24000, 27600), centreVille: createRange(26000, 29900), zonePeripherique: createRange(14000, 16100), zoneEloignement: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(20000, 23000), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(10000, 11500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Economique", centreVille: createRange(20000, 23000), zonePeripherique: createRange(24000, 27600), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(15000, 17250), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(27000, 31050), centreVille: createRange(32000, 36800), zonePeripherique: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(23000, 26450), centreVille: createRange(28000, 32200), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(25000, 28750), zonePeripherique: createRange(17000, 19550), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(12000, 13800), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(10000, 11500), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(7000, 8050), centreVille: createRange(12000, 13800), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(6000, 6900), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(10000, 11500), zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(7000, 8050), zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(7000, 8050), zonePeripherique: createRange(6000, 6900), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(591000, 679650), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(636000, 731400), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Chir",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Gazbat",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Kimel",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Larbaa",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Lazrou",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Lamcen",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Maaña",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ouled Salam (M'cil)",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Oueld Aouf",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Oueld Fadhel",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Tighanimine",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  },
  {
    commune: "El Hassi",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(14000, 16100), zonePeripherique: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(17000, 19550), centreVille: createRange(12000, 13800), zonePeripherique: createRange(11000, 12650), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(15000, 17250), centreVille: createRange(11000, 12650), zonePeripherique: createRange(10000, 11500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(12000, 13800), centreVille: createRange(10000, 11500), zonePeripherique: createRange(8000, 9200), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", centreVille: createRange(17000, 19550), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(14000, 16100), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(12000, 13800), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(10000, 11500), unit: "DA/m²" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(22000, 25300), centreVille: createRange(19000, 21850), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(18000, 20700), centreVille: createRange(16000, 18400), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(16000, 18400), centreVille: createRange(14000, 16100), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(10000, 11500), zonePeripherique: createRange(9000, 10350), unit: "DA/m²" },
      { label: "Situé en zone rurale", zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(8000, 9200), unit: "DA/m²" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(6000, 6900), centreVille: createRange(7000, 8050), zonePeripherique: createRange(5000, 5750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(5000, 5750), centreVille: createRange(6000, 6900), zonePeripherique: createRange(4500, 5175), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zonePeripherique: createRange(4000, 4600), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zonePeripherique: createRange(3000, 3450), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(4000, 4600), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2000, 2300), unit: "DA/m²" },
      { label: "Industriel", centreVille: createRange(20000, 23000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zonePeripherique: createRange(1944000, 2235600), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(1555000, 1788250), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(924000, 1062600), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zonePeripherique: createRange(739000, 849850), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(590000, 678500), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(472000, 542800), unit: "DA/Ha" }
    ]
  }
];

export default batnaPriceReference;