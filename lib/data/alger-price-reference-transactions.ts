// alger-transactions-2025-2026.ts
// Source: Termes de références relatifs aux transactions d'immeubles - Wilaya d'Alger 2025-2026

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

export const algerTransactionsReference: CommuneData[] =[
  {
    commune: "Casbah",
    individuels:[
      { label: "Standing", centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(100000, 115000), zonePeripherique: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(85000, 97750), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(105000, 120750), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(90000, 103500), zonePeripherique: createRange(75000, 86250), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(75000, 86250), zonePeripherique: createRange(60000, 69000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Artère peu commerciale", centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(150000, 172500), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(130000, 149500), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Dans l'indivision", centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Alger Centre",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(220000, 253000), centreVille: createRange(205000, 235750), zonePeripherique: createRange(190000, 218500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(205000, 235750), centreVille: createRange(190000, 218500), zonePeripherique: createRange(175000, 201250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(190000, 218500), centreVille: createRange(175000, 201250), zonePeripherique: createRange(160000, 184000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(175000, 201250), centreVille: createRange(160000, 184000), zonePeripherique: createRange(145000, 166750), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(180000, 207000), centreVille: createRange(165000, 189750), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(165000, 189750), centreVille: createRange(150000, 172500), zonePeripherique: createRange(135000, 155250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(135000, 155250), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(220000, 253000), centreVille: createRange(200000, 230000), zonePeripherique: createRange(180000, 207000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(180000, 207000), zonePeripherique: createRange(160000, 184000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(180000, 207000), centreVille: createRange(160000, 184000), zonePeripherique: createRange(140000, 161000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(140000, 161000), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(120000, 138000), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Sidi M'hamed",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(215000, 247250), centreVille: createRange(200000, 230000), zonePeripherique: createRange(185000, 212750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(185000, 212750), zonePeripherique: createRange(170000, 195500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(185000, 212750), centreVille: createRange(170000, 195500), zonePeripherique: createRange(155000, 178250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(155000, 178250), zonePeripherique: createRange(140000, 161000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(175000, 201250), centreVille: createRange(160000, 184000), zonePeripherique: createRange(145000, 166750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(145000, 166750), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(145000, 166750), centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(210000, 241500), centreVille: createRange(190000, 218500), zonePeripherique: createRange(170000, 195500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(190000, 218500), centreVille: createRange(170000, 195500), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(150000, 172500), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(130000, 149500), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Belouizdad",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(165000, 189750), centreVille: createRange(150000, 172500), zonePeripherique: createRange(135000, 155250), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(135000, 155250), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(105000, 120750), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(145000, 166750), centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(115000, 132250), centreVille: createRange(100000, 115000), zonePeripherique: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(100000, 115000), centreVille: createRange(85000, 97750), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(130000, 149500), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Hussein Dey",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(210000, 241500), centreVille: createRange(195000, 224250), zonePeripherique: createRange(180000, 207000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(195000, 224250), centreVille: createRange(180000, 207000), zonePeripherique: createRange(165000, 189750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(180000, 207000), centreVille: createRange(165000, 189750), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(165000, 189750), centreVille: createRange(150000, 172500), zonePeripherique: createRange(135000, 155250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(145000, 166750), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(155000, 178250), centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(125000, 143750), centreVille: createRange(100000, 115000), zonePeripherique: createRange(85000, 97750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(290000, 333500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(240000, 276000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(250000, 287500), zonePeripherique: createRange(190000, 218500), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(215000, 247250), centreVille: createRange(195000, 224250), zonePeripherique: createRange(175000, 201250), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(195000, 224250), centreVille: createRange(175000, 201250), zonePeripherique: createRange(155000, 178250), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(175000, 201250), centreVille: createRange(155000, 178250), zonePeripherique: createRange(135000, 155250), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(155000, 178250), centreVille: createRange(135000, 155250), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(115000, 132250), zonePeripherique: createRange(95000, 109250), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Kouba",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(235000, 270250), centreVille: createRange(220000, 253000), zonePeripherique: createRange(205000, 235750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(220000, 253000), centreVille: createRange(205000, 235750), zonePeripherique: createRange(190000, 218500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(205000, 235750), centreVille: createRange(190000, 218500), zonePeripherique: createRange(175000, 201250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(190000, 218500), centreVille: createRange(175000, 201250), zonePeripherique: createRange(160000, 184000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(195000, 224250), centreVille: createRange(180000, 207000), zonePeripherique: createRange(165000, 189750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(180000, 207000), centreVille: createRange(165000, 189750), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(165000, 189750), centreVille: createRange(150000, 172500), zonePeripherique: createRange(135000, 155250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(135000, 155250), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(240000, 276000), centreVille: createRange(220000, 253000), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(220000, 253000), centreVille: createRange(200000, 230000), zonePeripherique: createRange(180000, 207000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(180000, 207000), zonePeripherique: createRange(160000, 184000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(180000, 207000), centreVille: createRange(160000, 184000), zonePeripherique: createRange(140000, 161000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(140000, 161000), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Bourouba",
    individuels:[
      { label: "Standing", centreVille: createRange(135000, 155250), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(105000, 120750), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(90000, 103500), zonePeripherique: createRange(75000, 86250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(125000, 143750), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(110000, 126500), zonePeripherique: createRange(95000, 109250), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(95000, 109250), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(80000, 92000), zonePeripherique: createRange(65000, 74750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Artère peu commerciale", centreVille: createRange(150000, 172500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", centreVille: createRange(90000, 103500), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Dans l'indivision", centreVille: createRange(30000, 34500), zonePeripherique: createRange(100000, 11500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Bach Djerrah",
    individuels:[
      { label: "Standing", centreVille: createRange(140000, 161000), zonePeripherique: createRange(125000, 143750), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(125000, 143750), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(110000, 126500), zonePeripherique: createRange(95000, 109250), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(95000, 109250), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Amélioré", centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Economique", centreVille: createRange(100000, 115000), zonePeripherique: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Précaire", centreVille: createRange(85000, 97750), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Artère peu commerciale", centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", centreVille: createRange(90000, 103500), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(120000, 138000), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(100000, 115000), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(80000, 92000), zonePeripherique: createRange(60000, 69000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(60000, 69000), zonePeripherique: createRange(40000, 46000), unit: "DA/m²" },
      { label: "Dans l'indivision", centreVille: createRange(40000, 46000), zonePeripherique: createRange(20000, 23000), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Magharia",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(135000, 155250), zonePeripherique: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(105000, 120750), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(105000, 120750), centreVille: createRange(90000, 103500), zonePeripherique: createRange(75000, 86250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(125000, 143750), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(125000, 143750), centreVille: createRange(110000, 126500), zonePeripherique: createRange(95000, 109250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(95000, 109250), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(95000, 109250), centreVille: createRange(80000, 92000), zonePeripherique: createRange(65000, 74750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(100000, 115000), centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(155000, 178250), centreVille: createRange(135000, 155250), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(115000, 132250), zonePeripherique: createRange(95000, 109250), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(115000, 132250), centreVille: createRange(95000, 109250), zonePeripherique: createRange(75000, 86250), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(95000, 109250), centreVille: createRange(75000, 86250), zonePeripherique: createRange(55000, 63250), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(75000, 86250), centreVille: createRange(55000, 63250), zonePeripherique: createRange(35000, 40250), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "El Madania",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(185000, 212750), zonePeripherique: createRange(170000, 195500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(185000, 212750), centreVille: createRange(170000, 195500), zonePeripherique: createRange(155000, 178250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(155000, 178250), zonePeripherique: createRange(140000, 161000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(155000, 178250), centreVille: createRange(140000, 161000), zonePeripherique: createRange(125000, 143750), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(145000, 166750), zonePeripherique: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(145000, 166750), centreVille: createRange(130000, 149500), zonePeripherique: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(115000, 132250), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(115000, 132250), centreVille: createRange(100000, 115000), zonePeripherique: createRange(85000, 97750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(130000, 149500), zonePeripherique: createRange(110000, 126500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "El Mouradia",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(315000, 362250), centreVille: createRange(300000, 345000), zonePeripherique: createRange(285000, 327750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(285000, 327750), zonePeripherique: createRange(270000, 310500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(285000, 327750), centreVille: createRange(270000, 310500), zonePeripherique: createRange(255000, 293250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(270000, 310500), centreVille: createRange(255000, 293250), zonePeripherique: createRange(240000, 276000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(295000, 339250), centreVille: createRange(280000, 322000), zonePeripherique: createRange(265000, 304750), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(280000, 322000), centreVille: createRange(265000, 304750), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(265000, 304750), centreVille: createRange(250000, 287500), zonePeripherique: createRange(235000, 270250), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(235000, 270250), zonePeripherique: createRange(220000, 253000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(400000, 460000), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(150000, 172500), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Hydra",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(330000, 379500), centreVille: createRange(315000, 362250), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(315000, 362250), centreVille: createRange(300000, 345000), zonePeripherique: createRange(285000, 327750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(285000, 327750), zonePeripherique: createRange(270000, 310500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(285000, 327750), centreVille: createRange(270000, 310500), zonePeripherique: createRange(255000, 293250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(285000, 327750), zonePeripherique: createRange(270000, 310500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(285000, 327750), centreVille: createRange(270000, 310500), zonePeripherique: createRange(255000, 293250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(270000, 310500), centreVille: createRange(255000, 293250), zonePeripherique: createRange(240000, 276000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(255000, 293250), centreVille: createRange(240000, 276000), zonePeripherique: createRange(225000, 258750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(450000, 517500), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(400000, 460000), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Gué de Constantine",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(155000, 178250), zonePeripherique: createRange(140000, 161000), zoneEloignement: createRange(120000, 138000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(155000, 178250), centreVille: createRange(140000, 161000), zonePeripherique: createRange(125000, 143750), zoneEloignement: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(125000, 143750), zonePeripherique: createRange(110000, 126500), zoneEloignement: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(125000, 143750), centreVille: createRange(110000, 126500), zonePeripherique: createRange(95000, 109250), zoneEloignement: createRange(75000, 86250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(135000, 155250), centreVille: createRange(120000, 138000), zonePeripherique: createRange(105000, 120750), zoneEloignement: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(120000, 138000), centreVille: createRange(105000, 120750), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(105000, 120750), centreVille: createRange(90000, 103500), zonePeripherique: createRange(75000, 86250), zoneEloignement: createRange(70000, 80500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(75000, 86250), zonePeripherique: createRange(60000, 69000), zoneEloignement: createRange(55000, 63250), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), zoneEloignement: createRange(230000, 264500), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(150000, 172500), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), zoneEloignement: createRange(215000, 247250), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(100000, 115000), centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), zoneEloignement: createRange(200000, 230000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(130000, 149500), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), zoneEloignement: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(70000, 80500), centreVille: createRange(50000, 57500), zonePeripherique: createRange(30000, 34500), zoneEloignement: createRange(25000, 28750), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(50000, 57500), centreVille: createRange(30000, 34500), zonePeripherique: createRange(100000, 11500), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Bir Mourad Rais",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(320000, 368000), centreVille: createRange(305000, 350750), zonePeripherique: createRange(290000, 333500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(305000, 350750), centreVille: createRange(290000, 333500), zonePeripherique: createRange(275000, 316250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(290000, 333500), centreVille: createRange(275000, 316250), zonePeripherique: createRange(260000, 299000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(275000, 316250), centreVille: createRange(260000, 299000), zonePeripherique: createRange(245000, 281750), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(280000, 322000), centreVille: createRange(265000, 304750), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(265000, 304750), centreVille: createRange(250000, 287500), zonePeripherique: createRange(235000, 270250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(235000, 270250), zonePeripherique: createRange(220000, 253000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(235000, 270250), centreVille: createRange(220000, 253000), zonePeripherique: createRange(205000, 235750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(450000, 517500), zonePeripherique: createRange(400000, 460000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(400000, 460000), zonePeripherique: createRange(350000, 402500), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(400000, 460000), centreVille: createRange(350000, 402500), zonePeripherique: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(300000, 345000), zonePeripherique: createRange(250000, 287500), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(250000, 287500), zonePeripherique: createRange(200000, 230000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(200000, 230000), zonePeripherique: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(150000, 172500), zonePeripherique: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Birkhadem",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(255000, 293250), centreVille: createRange(240000, 276000), zonePeripherique: createRange(225000, 258750), zoneEloignement: createRange(180000, 207000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(240000, 276000), centreVille: createRange(225000, 258750), zonePeripherique: createRange(210000, 241500), zoneEloignement: createRange(165000, 189750), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(225000, 258750), centreVille: createRange(210000, 241500), zonePeripherique: createRange(195000, 224250), zoneEloignement: createRange(150000, 172500), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(210000, 241500), centreVille: createRange(195000, 224250), zonePeripherique: createRange(180000, 207000), zoneEloignement: createRange(135000, 155250), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(205000, 235750), centreVille: createRange(190000, 218500), zonePeripherique: createRange(175000, 201250), zoneEloignement: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(190000, 218500), centreVille: createRange(175000, 201250), zonePeripherique: createRange(160000, 184000), zoneEloignement: createRange(115000, 132250), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(175000, 201250), centreVille: createRange(160000, 184000), zonePeripherique: createRange(145000, 166750), zoneEloignement: createRange(100000, 115000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(160000, 184000), centreVille: createRange(145000, 166750), zonePeripherique: createRange(130000, 149500), zoneEloignement: createRange(85000, 97750), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(350000, 402500), centreVille: createRange(400000, 460000), zonePeripherique: createRange(370000, 425500), zoneEloignement: createRange(300000, 345000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(300000, 345000), centreVille: createRange(350000, 402500), zonePeripherique: createRange(320000, 368000), zoneEloignement: createRange(285000, 327750), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(250000, 287500), centreVille: createRange(300000, 345000), zonePeripherique: createRange(270000, 310500), zoneEloignement: createRange(270000, 310500), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(80000, 92000), centreVille: createRange(100000, 115000), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(80000, 92000), unit: "DA/m²" },
      { label: "Situé en zone rurale", unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(200000, 230000), centreVille: createRange(170000, 195500), zonePeripherique: createRange(140000, 161000), zoneEloignement: createRange(130000, 149500), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(170000, 195500), centreVille: createRange(140000, 161000), zonePeripherique: createRange(110000, 126500), zoneEloignement: createRange(105000, 120750), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(140000, 161000), centreVille: createRange(110000, 126500), zonePeripherique: createRange(90000, 103500), zoneEloignement: createRange(85000, 97750), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(110000, 126500), centreVille: createRange(90000, 103500), zonePeripherique: createRange(70000, 80500), zoneEloignement: createRange(65000, 74750), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(90000, 103500), centreVille: createRange(70000, 80500), zonePeripherique: createRange(50000, 57500), zoneEloignement: createRange(45000, 51750), unit: "DA/m²" },
      { label: "Industriel", unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha" },
      { label: "Potentialité moyenne", unit: "DA/Ha" },
      { label: "Potentialité faible", unit: "DA/Ha" }
    ]
  },
  {
    commune: "Chéraga",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(284750, 335000), centreVille: createRange(225250, 265000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(136000, 160000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(182750, 215000), zonePeripherique: createRange(136000, 160000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(182750, 215000), centreVille: createRange(148750, 175000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(85000, 100000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(148750, 175000), centreVille: createRange(123250, 145000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(174250, 205000), zonePeripherique: createRange(140250, 165000), zoneEloignement: createRange(114750, 135000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(174250, 205000), centreVille: createRange(140250, 165000), zonePeripherique: createRange(114750, 135000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(140250, 165000), centreVille: createRange(114750, 135000), zonePeripherique: createRange(93500, 110000), zoneEloignement: createRange(80750, 95000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(114750, 135000), centreVille: createRange(93500, 110000), zonePeripherique: createRange(76500, 90000), zoneEloignement: createRange(59500, 70000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(297500, 350000), centreVille: createRange(399500, 470000), zonePeripherique: createRange(229500, 270000), zoneEloignement: createRange(170000, 200000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(204000, 240000), centreVille: createRange(331500, 390000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(161500, 190000), centreVille: createRange(272000, 320000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(85000, 100000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(187000, 220000), centreVille: createRange(229500, 270000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(68000, 80000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(127500, 150000), centreVille: createRange(170000, 200000), zonePeripherique: createRange(85000, 100000), zoneEloignement: createRange(51000, 60000), unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(204000, 240000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(102000, 120000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(170000, 200000), centreVille: createRange(148750, 175000), zonePeripherique: createRange(114750, 135000), zoneEloignement: createRange(76500, 90000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(148750, 175000), centreVille: createRange(131750, 155000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(136000, 160000), centreVille: createRange(119000, 140000), zonePeripherique: createRange(80750, 95000), zoneEloignement: createRange(63750, 75000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(102000, 120000), centreVille: createRange(89250, 105000), zonePeripherique: createRange(76500, 90000), zoneEloignement: createRange(59500, 70000), unit: "DA/m²" },
      { label: "Industriel", zoneResidentielle: createRange(140250, 165000), centreVille: createRange(123250, 145000), zonePeripherique: createRange(93500, 110000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(81600000, 96000000), zoneEloignement: createRange(61200000, 72000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(71400000, 84000000), zoneEloignement: createRange(51000000, 60000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(51000000, 60000000), zoneEloignement: createRange(40800000, 48000000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(40800000, 48000000), zoneEloignement: createRange(30600000, 36000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(30600000, 36000000), zoneEloignement: createRange(20400000, 24000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(20400000, 24000000), zoneEloignement: createRange(10200000, 12000000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Ben Aknoune",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(289000, 340000), centreVille: createRange(229500, 270000), zonePeripherique: createRange(187000, 220000), zoneEloignement: createRange(153000, 180000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(229500, 270000), centreVille: createRange(187000, 220000), zonePeripherique: createRange(153000, 180000), zoneEloignement: createRange(127500, 150000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(187000, 220000), centreVille: createRange(153000, 180000), zonePeripherique: createRange(127500, 150000), zoneEloignement: createRange(102000, 120000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(153000, 180000), centreVille: createRange(144500, 170000), zonePeripherique: createRange(102000, 120000), zoneEloignement: createRange(76500, 90000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(229500, 270000), centreVille: createRange(178500, 210000), zonePeripherique: createRange(144500, 170000), zoneEloignement: createRange(119000, 140000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(178500, 210000), centreVille: createRange(144500, 170000), zonePeripherique: createRange(119000, 140000), zoneEloignement: createRange(114750, 135000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(144500, 170000), centreVille: createRange(119000, 140000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(119000, 140000), centreVille: createRange(97750, 115000), zonePeripherique: createRange(80750, 95000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(348500, 410000), centreVille: createRange(416500, 490000), zonePeripherique: createRange(246500, 290000), zoneEloignement: createRange(178500, 210000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(246500, 290000), centreVille: createRange(348500, 410000), zonePeripherique: createRange(187000, 220000), zoneEloignement: createRange(119000, 140000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(204000, 240000), centreVille: createRange(289000, 340000), zonePeripherique: createRange(127500, 150000), zoneEloignement: createRange(102000, 120000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(187000, 220000), centreVille: createRange(229500, 270000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(68000, 80000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(127500, 150000), centreVille: createRange(170000, 200000), zonePeripherique: createRange(85000, 100000), zoneEloignement: createRange(51000, 60000), unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(255000, 300000), centreVille: createRange(238000, 280000), zonePeripherique: createRange(195500, 230000), zoneEloignement: createRange(119000, 140000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(212500, 250000), centreVille: createRange(195500, 230000), zonePeripherique: createRange(153000, 180000), zoneEloignement: createRange(102000, 120000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(157250, 185000), centreVille: createRange(140250, 165000), zonePeripherique: createRange(123250, 145000), zoneEloignement: createRange(85000, 100000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(144500, 170000), centreVille: createRange(127500, 150000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(68000, 80000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(106250, 125000), centreVille: createRange(93500, 110000), zonePeripherique: createRange(80750, 95000), zoneEloignement: createRange(63750, 75000), unit: "DA/m²" },
      { label: "Industriel", zoneResidentielle: createRange(148750, 175000), centreVille: createRange(131750, 155000), zonePeripherique: createRange(102000, 120000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(81600000, 96000000), zoneEloignement: createRange(61200000, 72000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(71400000, 84000000), zoneEloignement: createRange(51000000, 60000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(51000000, 60000000), zoneEloignement: createRange(40800000, 48000000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(40800000, 48000000), zoneEloignement: createRange(30600000, 36000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(30600000, 36000000), zoneEloignement: createRange(20400000, 24000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(20400000, 24000000), zoneEloignement: createRange(10200000, 12000000), unit: "DA/Ha" }
    ]
  },
  {
    commune: "Staoueli",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(284750, 335000), centreVille: createRange(225250, 265000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(136000, 160000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(182750, 215000), zonePeripherique: createRange(136000, 160000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(182750, 215000), centreVille: createRange(148750, 175000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(85000, 100000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(148750, 175000), centreVille: createRange(123250, 145000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(174250, 205000), zonePeripherique: createRange(140250, 165000), zoneEloignement: createRange(114750, 135000), unit: "DA/m²" },
      { label: "Amélioré", zoneResidentielle: createRange(174250, 205000), centreVille: createRange(140250, 165000), zonePeripherique: createRange(114750, 135000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Economique", zoneResidentielle: createRange(140250, 165000), centreVille: createRange(114750, 135000), zonePeripherique: createRange(93500, 110000), zoneEloignement: createRange(80750, 95000), unit: "DA/m²" },
      { label: "Précaire", zoneResidentielle: createRange(114750, 135000), centreVille: createRange(93500, 110000), zonePeripherique: createRange(76500, 90000), zoneEloignement: createRange(59500, 70000), unit: "DA/m²" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(297500, 350000), centreVille: createRange(399500, 470000), zonePeripherique: createRange(229500, 270000), zoneEloignement: createRange(170000, 200000), unit: "DA/m²" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(204000, 240000), centreVille: createRange(331500, 390000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(110500, 130000), unit: "DA/m²" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(161500, 190000), centreVille: createRange(272000, 320000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(85000, 100000), unit: "DA/m²" }
    ],
    hangars:[
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(187000, 220000), centreVille: createRange(229500, 270000), zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(68000, 80000), unit: "DA/m²" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(127500, 150000), centreVille: createRange(170000, 200000), zonePeripherique: createRange(85000, 100000), zoneEloignement: createRange(51000, 60000), unit: "DA/m²" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(225250, 265000), centreVille: createRange(204000, 240000), zonePeripherique: createRange(170000, 200000), zoneEloignement: createRange(102000, 120000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(170000, 200000), centreVille: createRange(148750, 175000), zonePeripherique: createRange(114750, 135000), zoneEloignement: createRange(76500, 90000), unit: "DA/m²" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(148750, 175000), centreVille: createRange(131750, 155000), zonePeripherique: createRange(110500, 130000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(136000, 160000), centreVille: createRange(119000, 140000), zonePeripherique: createRange(80750, 95000), zoneEloignement: createRange(63750, 75000), unit: "DA/m²" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(102000, 120000), centreVille: createRange(89250, 105000), zonePeripherique: createRange(76500, 90000), zoneEloignement: createRange(59500, 70000), unit: "DA/m²" },
      { label: "Industriel", zoneResidentielle: createRange(140250, 165000), centreVille: createRange(123250, 145000), zonePeripherique: createRange(93500, 110000), zoneEloignement: createRange(72250, 85000), unit: "DA/m²" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(81600000, 96000000), zoneEloignement: createRange(61200000, 72000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(71400000, 84000000), zoneEloignement: createRange(51000000, 60000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(51000000, 60000000), zoneEloignement: createRange(40800000, 48000000), unit: "DA/Ha" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(40800000, 48000000), zoneEloignement: createRange(30600000, 36000000), unit: "DA/Ha" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(30600000, 36000000), zoneEloignement: createRange(20400000, 24000000), unit: "DA/Ha" },
      { label: "Potentialité faible", zonePeripherique: createRange(20400000, 24000000), zoneEloignement: createRange(10200000, 12000000), unit: "DA/Ha" }
    ]
  }
];

export default algerTransactionsReference;