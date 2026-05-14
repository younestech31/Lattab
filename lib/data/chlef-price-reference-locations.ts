// chlef-locations-2025-2026.ts
// Source: Termes de références relatifs aux locations d'immeubles - Wilaya de Chlef 2025-2026

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

const dataset1Communes = ["Chlef"];
const dataset2Communes = [
  "Sendjas", "Oben Aek", "Hadjadj", "Sobha", "Dahra", 
  "Haranfa", "Beni Bouateb", "Benairia", "Tadjena", "El Marsa", 
  "Talassa", "Moussadak", "Bereira"
];
const dataset3Communes = [
  "Chettia", "Boukadir", "Osly", "Ofodda", "Tenes"
];
const dataset4Communes = [
  "Medjadja", "Taougrite", "Ouled Abess", "Harchoune", "Beni Rached", 
  "Zeboudja", "Bouzghaia", "Sidi Abderahmane", "Abou El Hassen", 
  "Beni Haoua", "Oued Goussine"
];
const dataset5Communes = [
  "Ain Merane", "Oum Drou", "Karimia", "Ouled Fares", "Sidi Akkacha"
];

const generateDataset1 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(180, 207), centreVille: createRange(170, 196), zonePeripherique: createRange(160, 184), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(170, 196), centreVille: createRange(160, 184), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(140, 161), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(160, 184), centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(150, 173), centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(140, 161), centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(110, 127), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(130, 150), centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(120, 138), centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(110, 127), centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(540, 621), zonePeripherique: createRange(530, 610), zoneEloignement: createRange(520, 598), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(520, 598), zonePeripherique: createRange(510, 587), zoneEloignement: createRange(510, 587), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(500, 575), zonePeripherique: createRange(450, 518), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(450, 518), zonePeripherique: createRange(430, 495), zoneEloignement: createRange(420, 483), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(430, 495), zonePeripherique: createRange(420, 483), zoneEloignement: createRange(410, 472), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(170, 196), zonePeripherique: createRange(160, 184), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(160, 184), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(140, 161), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(160, 184), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(140, 161), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "Industriel", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(110, 127), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(6400, 7360), zoneEloignement: createRange(6400, 7360), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(4000, 4600), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1400, 1610), zoneEloignement: createRange(1400, 1610), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800, 920), zoneEloignement: createRange(800, 920), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(600, 690), zoneEloignement: createRange(600, 690), unit: "DA/Ha/Mois" }
  ]
});

const generateDataset2 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(100, 115), centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(90, 104), centreVille: createRange(80, 92), zonePeripherique: createRange(70, 81), zoneEloignement: createRange(60, 69), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(80, 92), centreVille: createRange(70, 81), zonePeripherique: createRange(60, 69), zoneEloignement: createRange(50, 58), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(70, 81), centreVille: createRange(60, 69), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(40, 46), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", centreVille: createRange(60, 69), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(40, 46), unit: "DA/m²/Mois" },
    { label: "Amélioré", centreVille: createRange(50, 58), zonePeripherique: createRange(40, 46), zoneEloignement: createRange(30, 35), unit: "DA/m²/Mois" },
    { label: "Economique", centreVille: createRange(40, 46), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
    { label: "Précaire", centreVille: createRange(30, 35), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(200, 230), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(200, 230), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(130, 150), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(120, 138), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
    { label: "Industriel", centreVille: createRange(80, 92), zonePeripherique: createRange(70, 81), zoneEloignement: createRange(60, 69), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(6400, 7360), zoneEloignement: createRange(6400, 7360), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(4000, 4600), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1400, 1610), zoneEloignement: createRange(1400, 1610), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800, 920), zoneEloignement: createRange(800, 920), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(600, 690), zoneEloignement: createRange(600, 690), unit: "DA/Ha/Mois" }
  ]
});

const generateDataset3 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(170, 196), centreVille: createRange(160, 184), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(140, 161), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(160, 184), centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(150, 173), centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(140, 161), centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(130, 150), centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(120, 138), centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(100, 115), centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(90, 104), centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(520, 598), zonePeripherique: createRange(420, 483), zoneEloignement: createRange(320, 368), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(420, 483), zonePeripherique: createRange(320, 368), zoneEloignement: createRange(220, 253), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(320, 368), zonePeripherique: createRange(220, 253), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(300, 345), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(220, 253), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(160, 184), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(110, 127), unit: "DA/m²/Mois" },
    { label: "Industriel", centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(6400, 7360), zoneEloignement: createRange(6400, 7360), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(4000, 4600), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1400, 1610), zoneEloignement: createRange(1400, 1610), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800, 920), zoneEloignement: createRange(800, 920), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(600, 690), zoneEloignement: createRange(600, 690), unit: "DA/Ha/Mois" }
  ]
});

const generateDataset4 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(150, 173), centreVille: createRange(120, 138), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(100, 115), centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(90, 104), centreVille: createRange(80, 92), zonePeripherique: createRange(70, 81), zoneEloignement: createRange(60, 69), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(80, 92), centreVille: createRange(70, 81), zonePeripherique: createRange(60, 69), zoneEloignement: createRange(50, 58), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(70, 81), centreVille: createRange(60, 69), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(40, 46), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(60, 69), centreVille: createRange(50, 58), zonePeripherique: createRange(40, 46), zoneEloignement: createRange(30, 35), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(50, 58), centreVille: createRange(40, 46), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(40, 46), centreVille: createRange(30, 35), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(15, 17), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(200, 230), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(50, 58), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(140, 161), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(120, 138), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(110, 127), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(95, 109), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(85, 98), unit: "DA/m²/Mois" },
    { label: "Industriel", centreVille: createRange(90, 104), zonePeripherique: createRange(85, 98), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(6400, 7360), zoneEloignement: createRange(6400, 7360), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(4000, 4600), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1400, 1610), zoneEloignement: createRange(1400, 1610), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800, 920), zoneEloignement: createRange(800, 920), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(600, 690), zoneEloignement: createRange(600, 690), unit: "DA/Ha/Mois" }
  ]
});

const generateDataset5 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(160, 184), centreVille: createRange(140, 161), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(140, 161), centreVille: createRange(120, 138), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(120, 138), centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(100, 115), centreVille: createRange(90, 104), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(90, 104), centreVille: createRange(80, 92), zonePeripherique: createRange(70, 81), zoneEloignement: createRange(60, 69), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(70, 81), zonePeripherique: createRange(60, 69), zoneEloignement: createRange(50, 58), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(70, 81), centreVille: createRange(60, 69), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(40, 46), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(60, 69), centreVille: createRange(50, 58), zonePeripherique: createRange(40, 46), zoneEloignement: createRange(30, 35), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", centreVille: createRange(500, 575), zonePeripherique: createRange(400, 460), zoneEloignement: createRange(300, 345), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Artère principale", centreVille: createRange(250, 288), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", centreVille: createRange(200, 230), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(150, 173), zonePeripherique: createRange(140, 161), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(140, 161), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(120, 138), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(130, 150), zonePeripherique: createRange(120, 138), zoneEloignement: createRange(110, 127), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(120, 138), zonePeripherique: createRange(110, 127), zoneEloignement: createRange(100, 115), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(110, 127), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(120, 138), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
    { label: "Industriel", centreVille: createRange(100, 115), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(80, 92), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", zonePeripherique: createRange(6400, 7360), zoneEloignement: createRange(6400, 7360), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(5000, 5750), zoneEloignement: createRange(5000, 5750), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(4000, 4600), zoneEloignement: createRange(4000, 4600), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: [
    { label: "Potentialité élevée", zonePeripherique: createRange(1400, 1610), zoneEloignement: createRange(1400, 1610), unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(800, 920), zoneEloignement: createRange(800, 920), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(600, 690), zoneEloignement: createRange(600, 690), unit: "DA/Ha/Mois" }
  ]
});

export const chlefLocationsReference: CommuneData[] = [
  ...dataset1Communes.map(generateDataset1),
  ...dataset2Communes.map(generateDataset2),
  ...dataset3Communes.map(generateDataset3),
  ...dataset4Communes.map(generateDataset4),
  ...dataset5Communes.map(generateDataset5)
];

export default chlefLocationsReference;