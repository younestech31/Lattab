// oran-locations-2025-2026.ts
// Source: Barème des prix référentiels des locations d'immeubles - Wilaya d'Oran 2025-2026

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

export const oranLocationsReference: CommuneData[] =[
  {
    commune: "Oran Partie Est",
    region: "Quartiers El-Barqui, Victor Hugo, Petit Lac, Bel Air, Saint-Eugène, Delmonte, Carteaux, Centre ville, Gambetta, Point du jour et Falaises.",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(980, 1100), centreVille: createRange(780, 890), zonePeripherique: createRange(660, 750), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(850, 970), centreVille: createRange(670, 770), zonePeripherique: createRange(570, 650), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(730, 840), centreVille: createRange(580, 660), zonePeripherique: createRange(490, 560), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(630, 720), centreVille: createRange(500, 570), zonePeripherique: createRange(420, 480), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(600, 690), centreVille: createRange(580, 660), zonePeripherique: createRange(480, 550), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(520, 590), centreVille: createRange(500, 570), zonePeripherique: createRange(410, 470), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(450, 510), centreVille: createRange(430, 490), zonePeripherique: createRange(350, 400), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(390, 440), centreVille: createRange(370, 420), zonePeripherique: createRange(300, 340), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1290, 1480), centreVille: createRange(1180, 1350), zonePeripherique: createRange(1010, 1160), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1120, 1280), centreVille: createRange(1020, 1170), zonePeripherique: createRange(870, 1000), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(970, 1110), centreVille: createRange(880, 1010), zonePeripherique: createRange(750, 860), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(1070, 1230), centreVille: createRange(1020, 1170), zonePeripherique: createRange(870, 1000), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(930, 1060), centreVille: createRange(880, 1010), zonePeripherique: createRange(750, 860), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(1990, 2280), centreVille: createRange(1680, 1930), zonePeripherique: createRange(1360, 1560), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zonePeripherique: createRange(1180, 1350), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(1050, 1200), centreVille: createRange(840, 960), zonePeripherique: createRange(750, 860), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(860, 980), centreVille: createRange(700, 800), zonePeripherique: createRange(630, 720), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(960, 1100), centreVille: createRange(680, 780), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(880, 1010), centreVille: createRange(740, 850), zonePeripherique: createRange(540, 620), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(730, 830), centreVille: createRange(640, 730), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Oran Partie Ouest et Sud",
    region: "Autres quartiers",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(681, 774), centreVille: createRange(578, 658), zonePeripherique: createRange(485, 554), zoneEloignement: createRange(404, 462), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(578, 658), centreVille: createRange(485, 554), zonePeripherique: createRange(404, 462), zoneEloignement: createRange(347, 393), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(474, 543), centreVille: createRange(404, 462), zonePeripherique: createRange(323, 370), zoneEloignement: createRange(289, 323), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(266, 300), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(254, 289), zoneEloignement: createRange(208, 231), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(347, 393), centreVille: createRange(289, 323), zonePeripherique: createRange(219, 243), zoneEloignement: createRange(196, 218), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(289, 323), centreVille: createRange(219, 243), zonePeripherique: createRange(185, 208), zoneEloignement: createRange(139, 162), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(231, 266), centreVille: createRange(173, 196), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(116, 133), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1260, 1449), centreVille: createRange(945, 1071), zonePeripherique: createRange(683, 777), zoneEloignement: createRange(368, 420), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(998, 1145), centreVille: createRange(788, 903), zonePeripherique: createRange(578, 662), zoneEloignement: createRange(315, 357), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(840, 966), centreVille: createRange(683, 777), zonePeripherique: createRange(473, 536), zoneEloignement: createRange(263, 294), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(525, 599), centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(315, 357), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(420, 483), centreVille: createRange(368, 420), zonePeripherique: createRange(315, 357), zoneEloignement: createRange(263, 294), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(347, 393), centreVille: createRange(289, 323), zonePeripherique: createRange(219, 254), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(289, 323), centreVille: createRange(231, 266), zonePeripherique: createRange(173, 196), zoneEloignement: createRange(116, 133), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(47300, 54400), zoneEloignement: createRange(36700, 42000), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(29400, 32550), zoneEloignement: createRange(26250, 29400), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(27300, 29400), zoneEloignement: createRange(22050, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(23100, 27300), zoneEloignement: createRange(18900, 21525), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(12600, 14175), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(13650, 15750), zoneEloignement: createRange(10500, 12075), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(10500, 13650), zoneEloignement: createRange(8400, 9450), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BIR EL DJIR",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(870, 1000), centreVille: createRange(740, 850), zonePeripherique: createRange(580, 660), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(750, 860), centreVille: createRange(640, 730), zonePeripherique: createRange(500, 570), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(650, 740), centreVille: createRange(550, 630), zonePeripherique: createRange(430, 490), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(560, 640), centreVille: createRange(470, 540), zonePeripherique: createRange(370, 420), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(780, 890), centreVille: createRange(680, 780), zonePeripherique: createRange(570, 650), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(670, 770), centreVille: createRange(590, 670), zonePeripherique: createRange(490, 560), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(580, 660), centreVille: createRange(510, 580), zonePeripherique: createRange(420, 480), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(500, 570), centreVille: createRange(440, 500), zonePeripherique: createRange(360, 410), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1240, 1420), centreVille: createRange(1120, 1280), zonePeripherique: createRange(970, 1110), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1070, 1230), centreVille: createRange(970, 1110), zonePeripherique: createRange(840, 960), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(930, 1060), centreVille: createRange(840, 960), zonePeripherique: createRange(730, 830), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(840, 960), centreVille: createRange(720, 820), zonePeripherique: createRange(640, 730), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(730, 830), centreVille: createRange(620, 710), zonePeripherique: createRange(550, 630), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(650, 740), centreVille: createRange(630, 720), zonePeripherique: createRange(580, 660), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(560, 640), centreVille: createRange(540, 620), zonePeripherique: createRange(500, 570), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(840, 960), centreVille: createRange(780, 890), zonePeripherique: createRange(700, 800), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(740, 850), centreVille: createRange(680, 780), zonePeripherique: createRange(590, 670), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(650, 740), centreVille: createRange(600, 690), zonePeripherique: createRange(510, 580), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(540, 620), centreVille: createRange(520, 590), zonePeripherique: createRange(500, 570), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(590, 670), centreVille: createRange(550, 630), zonePeripherique: createRange(480, 550), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(170, 190), zonePeripherique: createRange(150, 170), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zoneResidentielle: createRange(15800, 18100), centreVille: createRange(15200, 17400), zonePeripherique: createRange(14900, 17000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(13700, 15700), centreVille: createRange(13200, 15100), zonePeripherique: createRange(12900, 14800), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(11900, 13600), centreVille: createRange(11400, 13100), zonePeripherique: createRange(11200, 12800), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zoneResidentielle: createRange(14300, 16400), centreVille: createRange(12200, 14000), zonePeripherique: createRange(10400, 11900), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(12400, 14200), centreVille: createRange(10600, 12100), zonePeripherique: createRange(9000, 10300), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(10700, 12300), centreVille: createRange(9200, 10500), zonePeripherique: createRange(7800, 8900), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "HASSI BOUNIF",
    individuels:[
      { label: "Standing", centreVille: createRange(550, 620), zonePeripherique: createRange(410, 450), zoneEloignement: createRange(320, 360), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(480, 540), zonePeripherique: createRange(360, 400), zoneEloignement: createRange(270, 310), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(410, 470), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(240, 260), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(350, 400), zonePeripherique: createRange(260, 300), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(410, 460), zonePeripherique: createRange(330, 370), zoneEloignement: createRange(290, 330), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(360, 400), zonePeripherique: createRange(290, 320), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(310, 350), zonePeripherique: createRange(260, 280), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(270, 300), zonePeripherique: createRange(220, 250), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(640, 730), zonePeripherique: createRange(580, 660), zoneEloignement: createRange(550, 630), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(560, 630), zonePeripherique: createRange(510, 570), zoneEloignement: createRange(470, 540), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(480, 550), zonePeripherique: createRange(430, 500), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(470, 540), zonePeripherique: createRange(440, 500), zoneEloignement: createRange(410, 470), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(410, 460), zonePeripherique: createRange(380, 430), zoneEloignement: createRange(350, 400), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(510, 570), zonePeripherique: createRange(390, 440), zoneEloignement: createRange(270, 310), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(430, 500), zonePeripherique: createRange(330, 380), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(460, 530), zonePeripherique: createRange(420, 490), zoneEloignement: createRange(390, 440), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(440, 500), zonePeripherique: createRange(390, 450), zoneEloignement: createRange(360, 410), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(420, 440), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(320, 360), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(350, 400), zonePeripherique: createRange(300, 350), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(330, 360), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(190, 220), zonePeripherique: createRange(160, 180), zoneEloignement: createRange(130, 140), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(14000, 16100), zonePeripherique: createRange(13100, 14900), zoneEloignement: createRange(12000, 13800), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(12100, 13900), zonePeripherique: createRange(11400, 13000), zoneEloignement: createRange(10400, 11900), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(10500, 12000), zonePeripherique: createRange(9900, 11300), zoneEloignement: createRange(9000, 10300), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(11100, 12700), zonePeripherique: createRange(9600, 10800), zoneEloignement: createRange(8700, 10000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(9600, 11000), zonePeripherique: createRange(8300, 9500), zoneEloignement: createRange(7500, 8600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(8300, 9500), zonePeripherique: createRange(7100, 8200), zoneEloignement: createRange(6500, 7400), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "HASSI BEN OKBA",
    individuels:[
      { label: "Standing", centreVille: createRange(410, 470), zonePeripherique: createRange(370, 420), zoneEloignement: createRange(320, 360), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(360, 400), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(290, 310), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(320, 350), zonePeripherique: createRange(280, 310), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(270, 310), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(330, 370), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(290, 320), zonePeripherique: createRange(210, 240), zoneEloignement: createRange(150, 170), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(260, 280), zonePeripherique: createRange(190, 200), zoneEloignement: createRange(130, 140), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(220, 250), zonePeripherique: createRange(150, 180), zoneEloignement: createRange(110, 120), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(560, 630), zonePeripherique: createRange(500, 570), zoneEloignement: createRange(430, 480), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(490, 550), zonePeripherique: createRange(440, 490), zoneEloignement: createRange(370, 420), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(410, 480), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(310, 360), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(450, 500), zonePeripherique: createRange(420, 470), zoneEloignement: createRange(380, 430), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(380, 440), zonePeripherique: createRange(350, 410), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(430, 480), zonePeripherique: createRange(350, 390), zoneEloignement: createRange(300, 340), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(360, 420), zonePeripherique: createRange(290, 340), zoneEloignement: createRange(250, 290), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(430, 490), zonePeripherique: createRange(410, 470), zoneEloignement: createRange(350, 410), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(380, 440), zonePeripherique: createRange(360, 380), zoneEloignement: createRange(340, 390), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(370, 430), zonePeripherique: createRange(340, 390), zoneEloignement: createRange(310, 360), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(300, 350), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(250, 350), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(290, 330), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(180, 210), zonePeripherique: createRange(160, 190), zoneEloignement: createRange(120, 140), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(14200, 16200), zonePeripherique: createRange(12200, 14000), zoneEloignement: createRange(11100, 12700), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(12400, 14100), zonePeripherique: createRange(10600, 12100), zoneEloignement: createRange(9700, 11000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(10700, 12300), zonePeripherique: createRange(9200, 10500), zoneEloignement: createRange(8400, 9600), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(10900, 12400), zonePeripherique: createRange(10100, 11600), zoneEloignement: createRange(7100, 8100), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(9500, 10800), zonePeripherique: createRange(8700, 10000), zoneEloignement: createRange(6200, 7000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(8100, 9400), zonePeripherique: createRange(7500, 8600), zoneEloignement: createRange(5300, 6100), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "GDYEL",
    individuels:[
      { label: "Standing", centreVille: createRange(740, 840), zonePeripherique: createRange(710, 800), zoneEloignement: createRange(670, 770), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(650, 730), zonePeripherique: createRange(620, 700), zoneEloignement: createRange(580, 660), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(560, 640), zonePeripherique: createRange(540, 610), zoneEloignement: createRange(500, 570), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(480, 550), zonePeripherique: createRange(460, 530), zoneEloignement: createRange(430, 490), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(510, 550), zonePeripherique: createRange(440, 500), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(440, 500), zonePeripherique: createRange(380, 430), zoneEloignement: createRange(340, 390), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(380, 430), zonePeripherique: createRange(330, 370), zoneEloignement: createRange(290, 330), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(330, 370), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(810, 900), zonePeripherique: createRange(670, 760), zoneEloignement: createRange(600, 690), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(710, 800), zonePeripherique: createRange(590, 660), zoneEloignement: createRange(520, 590), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(600, 700), zonePeripherique: createRange(500, 580), zoneEloignement: createRange(450, 510), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(530, 600), zonePeripherique: createRange(470, 530), zoneEloignement: createRange(430, 490), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(460, 520), zonePeripherique: createRange(400, 460), zoneEloignement: createRange(370, 420), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(560, 630), zonePeripherique: createRange(510, 570), zoneEloignement: createRange(470, 540), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(480, 550), zonePeripherique: createRange(430, 500), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(500, 580), zonePeripherique: createRange(420, 480), zoneEloignement: createRange(380, 430), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(490, 560), zonePeripherique: createRange(450, 510), zoneEloignement: createRange(360, 410), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(460, 530), zonePeripherique: createRange(430, 490), zoneEloignement: createRange(340, 390), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(400, 460), zonePeripherique: createRange(360, 410), zoneEloignement: createRange(320, 360), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(350, 400), zonePeripherique: createRange(290, 340), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(180, 200), zonePeripherique: createRange(150, 170), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(21900, 25000), zonePeripherique: createRange(21000, 24100), zoneEloignement: createRange(19800, 22700), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(19000, 21800), zonePeripherique: createRange(18200, 20900), zoneEloignement: createRange(17200, 19700), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(16500, 18900), zonePeripherique: createRange(15800, 18100), zoneEloignement: createRange(14900, 17100), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(17100, 19500), zonePeripherique: createRange(16000, 18400), zoneEloignement: createRange(15300, 17500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(14900, 17000), zonePeripherique: createRange(13900, 15900), zoneEloignement: createRange(13300, 15200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(12800, 14800), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(11500, 13200), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "HASSI MEFSOUKH",
    individuels:[
      { label: "Standing", centreVille: createRange(410, 470), zonePeripherique: createRange(360, 410), zoneEloignement: createRange(310, 340), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(350, 400), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(270, 300), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(310, 340), zonePeripherique: createRange(270, 300), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(260, 300), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(200, 220), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(340, 390), zonePeripherique: createRange(290, 330), zoneEloignement: createRange(270, 310), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(300, 330), zonePeripherique: createRange(260, 280), zoneEloignement: createRange(240, 260), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(260, 290), zonePeripherique: createRange(230, 250), zoneEloignement: createRange(210, 230), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(220, 250), zonePeripherique: createRange(190, 220), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(450, 500), zonePeripherique: createRange(400, 450), zoneEloignement: createRange(310, 350), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(390, 440), zonePeripherique: createRange(350, 390), zoneEloignement: createRange(270, 300), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(330, 380), zonePeripherique: createRange(290, 340), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(360, 400), zonePeripherique: createRange(300, 340), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(300, 350), zonePeripherique: createRange(250, 290), zoneEloignement: createRange(170, 190), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(420, 470), zonePeripherique: createRange(360, 400), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(350, 410), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(370, 430), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(250, 290), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(320, 370), zonePeripherique: createRange(260, 300), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(260, 310), zonePeripherique: createRange(250, 290), zoneEloignement: createRange(220, 260), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(290, 330), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(220, 250), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(250, 280), zonePeripherique: createRange(220, 250), zoneEloignement: createRange(180, 210), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(160, 180), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(110, 130), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(18500, 21200), zonePeripherique: createRange(17500, 20100), zoneEloignement: createRange(17100, 19600), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(16100, 18400), zonePeripherique: createRange(15200, 17400), zoneEloignement: createRange(14800, 17000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(13900, 16000), zonePeripherique: createRange(13200, 15100), zoneEloignement: createRange(12800, 14700), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(12700, 14500), zonePeripherique: createRange(12000, 13800), zoneEloignement: createRange(11300, 12900), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(11000, 12600), zonePeripherique: createRange(10400, 11900), zoneEloignement: createRange(9800, 11200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(9500, 10900), zonePeripherique: createRange(9000, 10300), zoneEloignement: createRange(8500, 9700), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BENFREHA",
    individuels:[
      { label: "Standing", centreVille: createRange(420, 480), zonePeripherique: createRange(370, 420), zoneEloignement: createRange(300, 340), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(360, 410), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(260, 290), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(310, 350), zonePeripherique: createRange(280, 310), zoneEloignement: createRange(230, 250), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(270, 300), zonePeripherique: createRange(250, 270), zoneEloignement: createRange(200, 220), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(310, 350), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(270, 300), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(230, 260), zonePeripherique: createRange(210, 230), zoneEloignement: createRange(150, 170), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(190, 220), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(120, 140), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(440, 500), zonePeripherique: createRange(380, 430), zoneEloignement: createRange(340, 380), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(390, 430), zonePeripherique: createRange(330, 370), zoneEloignement: createRange(300, 330), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(330, 380), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(250, 290), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(320, 360), zonePeripherique: createRange(300, 330), zoneEloignement: createRange(270, 300), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(270, 310), zonePeripherique: createRange(250, 290), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(370, 420), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(320, 360), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(360, 420), zonePeripherique: createRange(320, 370), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(330, 380), zonePeripherique: createRange(290, 330), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(280, 320), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(220, 250), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(260, 300), zonePeripherique: createRange(210, 240), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(200, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(140, 160), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(130, 140), zonePeripherique: createRange(100, 120), zoneEloignement: createRange(80, 100), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(19800, 22600), zonePeripherique: createRange(17900, 20500), zoneEloignement: createRange(16330, 18600), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(17200, 19700), zonePeripherique: createRange(15500, 17800), zoneEloignement: createRange(14100, 16200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(14900, 17100), zonePeripherique: createRange(13400, 15400), zoneEloignement: createRange(12200, 14000), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(12500, 14300), zonePeripherique: createRange(10700, 12300), zoneEloignement: createRange(9100, 10300), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(10900, 12400), zonePeripherique: createRange(9300, 10600), zoneEloignement: createRange(7900, 9000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(9400, 10800), zonePeripherique: createRange(8000, 9200), zoneEloignement: createRange(6800, 7800), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "ARZEW",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(700, 800), centreVille: createRange(630, 720), zonePeripherique: createRange(580, 660), zoneEloignement: createRange(510, 580), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(600, 690), centreVille: createRange(540, 620), zonePeripherique: createRange(500, 570), zoneEloignement: createRange(440, 500), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(520, 590), centreVille: createRange(470, 530), zonePeripherique: createRange(440, 490), zoneEloignement: createRange(380, 430), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(450, 510), centreVille: createRange(400, 460), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(560, 640), centreVille: createRange(450, 510), zonePeripherique: createRange(430, 470), zoneEloignement: createRange(380, 430), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(480, 550), centreVille: createRange(390, 440), zonePeripherique: createRange(370, 420), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(410, 470), centreVille: createRange(340, 380), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(350, 400), centreVille: createRange(300, 330), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(760, 870), centreVille: createRange(700, 780), zonePeripherique: createRange(670, 760), zoneEloignement: createRange(650, 740), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(660, 750), centreVille: createRange(600, 690), zonePeripherique: createRange(590, 660), zoneEloignement: createRange(560, 640), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(570, 650), centreVille: createRange(510, 590), zonePeripherique: createRange(500, 580), zoneEloignement: createRange(480, 550), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(520, 590), centreVille: createRange(490, 550), zonePeripherique: createRange(460, 520), zoneEloignement: createRange(410, 470), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(450, 510), centreVille: createRange(420, 480), zonePeripherique: createRange(390, 450), zoneEloignement: createRange(350, 400), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(610, 700), centreVille: createRange(560, 630), zonePeripherique: createRange(510, 570), zoneEloignement: createRange(470, 540), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(530, 600), centreVille: createRange(480, 550), zonePeripherique: createRange(430, 500), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(480, 550), centreVille: createRange(400, 460), zonePeripherique: createRange(360, 420), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(390, 440), centreVille: createRange(350, 400), zonePeripherique: createRange(320, 370), zoneEloignement: createRange(290, 330), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(360, 410), centreVille: createRange(330, 380), zonePeripherique: createRange(300, 350), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(280, 320), centreVille: createRange(260, 300), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(270, 310), centreVille: createRange(250, 290), zonePeripherique: createRange(200, 240), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(220, 250), centreVille: createRange(190, 210), zonePeripherique: createRange(160, 180), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(24500, 28000), zonePeripherique: createRange(23400, 26900), zoneEloignement: createRange(22400, 25700), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(22000, 24400), zonePeripherique: createRange(20300, 23300), zoneEloignement: createRange(19400, 22300), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(18400, 21000), zonePeripherique: createRange(17600, 20200), zoneEloignement: createRange(16800, 19300), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(21000, 23000), zonePeripherique: createRange(19700, 22600), zoneEloignement: createRange(18700, 21500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(18000, 20000), zonePeripherique: createRange(17100, 19600), zoneEloignement: createRange(16200, 18600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(15600, 17900), zonePeripherique: createRange(14800, 17000), zoneEloignement: createRange(14000, 16100), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "SIDI BENYEBKA",
    individuels:[
      { label: "Standing", centreVille: createRange(340, 390), zonePeripherique: createRange(290, 330), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(300, 330), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(220, 240), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(260, 290), zonePeripherique: createRange(220, 240), zoneEloignement: createRange(190, 210), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(220, 250), zonePeripherique: createRange(190, 210), zoneEloignement: createRange(160, 180), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(280, 320), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(220, 250), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(240, 270), zonePeripherique: createRange(210, 230), zoneEloignement: createRange(190, 210), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(210, 230), zonePeripherique: createRange(180, 200), zoneEloignement: createRange(160, 180), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(170, 200), zonePeripherique: createRange(150, 170), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(250, 390), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(230, 250), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(300, 340), zonePeripherique: createRange(270, 300), zoneEloignement: createRange(200, 220), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(250, 290), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(170, 190), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(260, 280), zonePeripherique: createRange(210, 240), zoneEloignement: createRange(200, 220), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 250), zonePeripherique: createRange(180, 200), zoneEloignement: createRange(160, 190), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(310, 350), zonePeripherique: createRange(260, 290), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(260, 300), zonePeripherique: createRange(220, 250), zoneEloignement: createRange(190, 220), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(340, 380), zonePeripherique: createRange(290, 330), zoneEloignement: createRange(260, 300), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(310, 360), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(220, 250), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(320, 360), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(230, 270), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(260, 300), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(220, 250), zonePeripherique: createRange(190, 220), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(130, 140), zonePeripherique: createRange(100, 110), zoneEloignement: createRange(70, 90), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(22500, 25800), zonePeripherique: createRange(19200, 22000), zoneEloignement: createRange(17300, 19800), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(19600, 22400), zonePeripherique: createRange(16700, 19100), zoneEloignement: createRange(15000, 17200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(17000, 19500), zonePeripherique: createRange(14400, 16600), zoneEloignement: createRange(13000, 14900), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(16220, 18500), zonePeripherique: createRange(12600, 14300), zoneEloignement: createRange(12000, 13800), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(14100, 16100), zonePeripherique: createRange(18700, 12500), zoneEloignement: createRange(10400, 11900), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(12100, 14000), zonePeripherique: createRange(9400, 18600), zoneEloignement: createRange(9000, 10300), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BETHIOUA",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(700, 800), centreVille: createRange(660, 750), zonePeripherique: createRange(570, 650), zoneEloignement: createRange(550, 630), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(600, 690), centreVille: createRange(570, 650), zonePeripherique: createRange(500, 560), zoneEloignement: createRange(470, 540), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(520, 590), centreVille: createRange(500, 560), zonePeripherique: createRange(440, 490), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(450, 510), centreVille: createRange(420, 490), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(340, 390), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(410, 470), centreVille: createRange(370, 420), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(290, 330), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(350, 400), centreVille: createRange(330, 360), zonePeripherique: createRange(280, 310), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(300, 340), centreVille: createRange(280, 320), zonePeripherique: createRange(250, 270), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(260, 290), centreVille: createRange(240, 270), zonePeripherique: createRange(200, 240), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(670, 770), centreVille: createRange(610, 690), zonePeripherique: createRange(570, 640), zoneEloignement: createRange(550, 630), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(580, 660), centreVille: createRange(530, 600), zonePeripherique: createRange(490, 560), zoneEloignement: createRange(470, 540), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(500, 570), centreVille: createRange(460, 520), zonePeripherique: createRange(420, 480), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(510, 580), centreVille: createRange(480, 540), zonePeripherique: createRange(440, 500), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(440, 500), centreVille: createRange(410, 470), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(340, 390), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(480, 550), centreVille: createRange(460, 520), zonePeripherique: createRange(440, 500), zoneEloignement: createRange(410, 470), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(410, 470), centreVille: createRange(390, 450), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(350, 400), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(490, 560), centreVille: createRange(430, 490), zonePeripherique: createRange(370, 430), zoneEloignement: createRange(320, 360), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(420, 480), centreVille: createRange(390, 450), zonePeripherique: createRange(350, 410), zoneEloignement: createRange(300, 340), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(400, 460), centreVille: createRange(360, 410), zonePeripherique: createRange(330, 370), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(390, 440), centreVille: createRange(350, 400), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(260, 290), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(340, 390), centreVille: createRange(320, 360), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(270, 310), centreVille: createRange(250, 280), zonePeripherique: createRange(220, 250), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(31600, 36300), zonePeripherique: createRange(30600, 35100), zoneEloignement: createRange(30300, 34800), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(25400, 31500), zonePeripherique: createRange(26600, 30500), zoneEloignement: createRange(26300, 30200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(23800, 25300), zonePeripherique: createRange(23100, 26500), zoneEloignement: createRange(22800, 26200), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(25200, 28900), zonePeripherique: createRange(24500, 28100), zoneEloignement: createRange(24000, 27600), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(21900, 25100), zonePeripherique: createRange(21300, 24400), zoneEloignement: createRange(20800, 23900), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(19000, 21800), zonePeripherique: createRange(18400, 21200), zoneEloignement: createRange(18000, 20700), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "MERS EL HADJADJ",
    individuels:[
      { label: "Standing", centreVille: createRange(410, 470), zonePeripherique: createRange(360, 410), zoneEloignement: createRange(330, 370), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(350, 400), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(310, 340), zonePeripherique: createRange(270, 300), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(260, 300), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(280, 320), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(240, 270), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(210, 230), zonePeripherique: createRange(170, 190), zoneEloignement: createRange(150, 170), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(170, 200), zonePeripherique: createRange(140, 160), zoneEloignement: createRange(120, 140), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(330, 360), zonePeripherique: createRange(280, 310), zoneEloignement: createRange(240, 260), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(280, 320), zonePeripherique: createRange(240, 270), zoneEloignement: createRange(210, 230), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(240, 270), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(280, 310), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(200, 220), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(230, 270), zonePeripherique: createRange(190, 220), zoneEloignement: createRange(160, 190), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(380, 430), zonePeripherique: createRange(350, 390), zoneEloignement: createRange(300, 330), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(330, 370), zonePeripherique: createRange(290, 340), zoneEloignement: createRange(250, 290), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(320, 370), zonePeripherique: createRange(310, 360), zoneEloignement: createRange(250, 290), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(300, 350), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(290, 330), zonePeripherique: createRange(280, 320), zoneEloignement: createRange(230, 260), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(240, 270), zonePeripherique: createRange(210, 230), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(160, 180), zonePeripherique: createRange(150, 170), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(140, 160), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(110, 130), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(27000, 30100), zonePeripherique: createRange(25200, 28900), zoneEloignement: createRange(27600, 31700), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(23500, 26900), zonePeripherique: createRange(21900, 25100), zoneEloignement: createRange(20800, 23900), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(20300, 23400), zonePeripherique: createRange(19000, 21800), zoneEloignement: createRange(18000, 20700), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(21700, 24900), zonePeripherique: createRange(16200, 18500), zoneEloignement: createRange(15300, 17500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(18900, 21600), zonePeripherique: createRange(14100, 16100), zoneEloignement: createRange(13300, 15200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(16300, 18800), zonePeripherique: createRange(12100, 14000), zoneEloignement: createRange(11500, 13200), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "AIN EL BIA",
    individuels:[
      { label: "Standing", centreVille: createRange(440, 500), zonePeripherique: createRange(370, 420), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(380, 430), zonePeripherique: createRange(320, 360), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(330, 370), zonePeripherique: createRange(270, 310), zoneEloignement: createRange(200, 230), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(280, 320), zonePeripherique: createRange(230, 260), zoneEloignement: createRange(170, 190), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(300, 340), zonePeripherique: createRange(250, 280), zoneEloignement: createRange(220, 250), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(260, 290), zonePeripherique: createRange(220, 240), zoneEloignement: createRange(190, 210), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(230, 250), zonePeripherique: createRange(190, 210), zoneEloignement: createRange(160, 180), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(190, 220), zonePeripherique: createRange(150, 180), zoneEloignement: createRange(130, 150), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(380, 420), zonePeripherique: createRange(350, 400), zoneEloignement: createRange(290, 320), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(330, 370), zonePeripherique: createRange(300, 340), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(280, 320), zonePeripherique: createRange(260, 290), zoneEloignement: createRange(210, 240), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(290, 320), zonePeripherique: createRange(210, 240), zoneEloignement: createRange(180, 200), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(240, 280), zonePeripherique: createRange(180, 200), zoneEloignement: createRange(150, 170), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(350, 390), zonePeripherique: createRange(310, 350), zoneEloignement: createRange(280, 310), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(290, 340), zonePeripherique: createRange(270, 300), zoneEloignement: createRange(230, 270), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", centreVille: createRange(330, 380), zonePeripherique: createRange(300, 350), zoneEloignement: createRange(280, 320), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", centreVille: createRange(310, 350), zonePeripherique: createRange(280, 330), zoneEloignement: createRange(250, 280), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", centreVille: createRange(280, 330), zonePeripherique: createRange(260, 300), zoneEloignement: createRange(240, 270), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", centreVille: createRange(220, 250), zonePeripherique: createRange(190, 220), zoneEloignement: createRange(150, 180), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", centreVille: createRange(190, 215), zonePeripherique: createRange(157, 180), zoneEloignement: createRange(140, 160), unit: "DA/m²/Mois" },
      { label: "Industriel", centreVille: createRange(150, 170), zonePeripherique: createRange(120, 140), zoneEloignement: createRange(100, 120), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", centreVille: createRange(21900, 25000), zonePeripherique: createRange(19900, 22800), zoneEloignement: createRange(19300, 22100), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(19000, 21800), zonePeripherique: createRange(17300, 19800), zoneEloignement: createRange(16700, 19200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(16700, 18900), zonePeripherique: createRange(15000, 17200), zoneEloignement: createRange(14500, 16600), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", centreVille: createRange(18900, 21700), zonePeripherique: createRange(14400, 16400), zoneEloignement: createRange(12700, 14600), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", centreVille: createRange(16500, 18800), zonePeripherique: createRange(12500, 14300), zoneEloignement: createRange(11000, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", centreVille: createRange(14200, 16400), zonePeripherique: createRange(10800, 12400), zoneEloignement: createRange(9500, 10900), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "AIN TURCK",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(681, 774), centreVille: createRange(578, 658), zonePeripherique: createRange(485, 554), zoneEloignement: createRange(404, 462), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(578, 658), centreVille: createRange(485, 554), zonePeripherique: createRange(404, 462), zoneEloignement: createRange(347, 393), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(474, 543), centreVille: createRange(404, 462), zonePeripherique: createRange(323, 370), zoneEloignement: createRange(289, 323), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(266, 300), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(254, 289), zoneEloignement: createRange(208, 231), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(347, 393), centreVille: createRange(289, 323), zonePeripherique: createRange(219, 243), zoneEloignement: createRange(196, 218), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(289, 323), centreVille: createRange(219, 243), zonePeripherique: createRange(185, 208), zoneEloignement: createRange(139, 162), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(231, 266), centreVille: createRange(173, 196), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(116, 133), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1103, 1260), centreVille: createRange(998, 1145), zonePeripherique: createRange(924, 1050), zoneEloignement: createRange(788, 903), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(924, 1050), centreVille: createRange(861, 987), zonePeripherique: createRange(788, 903), zoneEloignement: createRange(683, 777), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(788, 903), centreVille: createRange(735, 840), zonePeripherique: createRange(683, 777), zoneEloignement: createRange(578, 662), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(441, 504), centreVille: createRange(368, 420), zonePeripherique: createRange(315, 357), zoneEloignement: createRange(263, 294), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(368, 420), centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(315, 357), centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(263, 294), centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(29400, 32550), zoneEloignement: createRange(26250, 29400), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(27300, 29400), zoneEloignement: createRange(22050, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(23100, 27300), zoneEloignement: createRange(18900, 21525), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(12600, 14175), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(13650, 15750), zoneEloignement: createRange(10500, 12075), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(10500, 13650), zoneEloignement: createRange(8400, 9450), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "MERS EL KEBIR",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(29400, 32550), zoneEloignement: createRange(26250, 29400), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(27300, 29400), zoneEloignement: createRange(22050, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(23100, 27300), zoneEloignement: createRange(18900, 21525), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(12600, 14175), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(13650, 15750), zoneEloignement: createRange(10500, 12075), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(10500, 13650), zoneEloignement: createRange(8400, 9450), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BOUSFER",
    individuels:[
      { label: "Standing", centreVille: createRange(381, 439), zonePeripherique: createRange(335, 381), zoneEloignement: createRange(300, 335), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(323, 370), zonePeripherique: createRange(289, 323), zoneEloignement: createRange(254, 289), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(277, 312), zonePeripherique: createRange(243, 277), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(231, 266), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(10500, 12600), zoneEloignement: createRange(9100, 10500), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(29400, 32550), zoneEloignement: createRange(26250, 29400), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(27300, 29400), zoneEloignement: createRange(22050, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(23100, 27300), zoneEloignement: createRange(18900, 21525), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(12600, 14175), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(13650, 15750), zoneEloignement: createRange(10500, 12075), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(10500, 13650), zoneEloignement: createRange(8400, 9450), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "EL ANCOR",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(26250, 31500), zoneEloignement: createRange(23100, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(10500, 15750), zoneEloignement: createRange(7350, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(8400, 10500), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "ES SENIA",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(681, 774), centreVille: createRange(578, 658), zonePeripherique: createRange(485, 554), zoneEloignement: createRange(404, 462), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(578, 658), centreVille: createRange(485, 554), zonePeripherique: createRange(404, 462), zoneEloignement: createRange(347, 393), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(474, 543), centreVille: createRange(404, 462), zonePeripherique: createRange(323, 370), zoneEloignement: createRange(289, 323), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(266, 300), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(404, 462), centreVille: createRange(347, 393), zonePeripherique: createRange(254, 289), zoneEloignement: createRange(208, 231), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(347, 393), centreVille: createRange(289, 323), zonePeripherique: createRange(219, 243), zoneEloignement: createRange(196, 229), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(289, 323), centreVille: createRange(219, 243), zonePeripherique: createRange(185, 208), zoneEloignement: createRange(139, 162), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(231, 266), centreVille: createRange(173, 196), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(116, 133), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1103, 1260), centreVille: createRange(998, 1145), zonePeripherique: createRange(924, 1050), zoneEloignement: createRange(788, 903), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(924, 1050), centreVille: createRange(861, 987), zonePeripherique: createRange(788, 903), zoneEloignement: createRange(683, 777), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(788, 903), centreVille: createRange(735, 840), zonePeripherique: createRange(683, 777), zoneEloignement: createRange(578, 662), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(441, 504), centreVille: createRange(368, 420), zonePeripherique: createRange(315, 357), zoneEloignement: createRange(263, 294), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(368, 420), centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(315, 357), centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", zoneResidentielle: createRange(263, 294), centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(47300, 54400), zoneEloignement: createRange(36700, 42000), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(29400, 32550), zoneEloignement: createRange(26250, 29400), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(27300, 29400), zoneEloignement: createRange(22050, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(23100, 27300), zoneEloignement: createRange(18900, 21525), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(12600, 14175), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(13650, 15750), zoneEloignement: createRange(10500, 12075), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(10500, 13650), zoneEloignement: createRange(8400, 9450), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "SIDI CHAMI",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(31500, 36800), zoneEloignement: createRange(26300, 31500), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(31500, 36225), zoneEloignement: createRange(28350, 33075), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(26250, 29400), zoneEloignement: createRange(23100, 26250), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(17850, 21000), zoneEloignement: createRange(17850, 22050), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 17850), zoneEloignement: createRange(14700, 17850), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "EL KERMA",
    individuels:[
      { label: "Standing", centreVille: createRange(381, 439), zonePeripherique: createRange(335, 381), zoneEloignement: createRange(300, 335), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(323, 370), zonePeripherique: createRange(289, 323), zoneEloignement: createRange(254, 289), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(277, 312), zonePeripherique: createRange(243, 277), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(231, 266), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(335, 381), zonePeripherique: createRange(289, 323), zoneEloignement: createRange(254, 289), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(289, 323), zonePeripherique: createRange(243, 277), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(243, 277), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(208, 231), zonePeripherique: createRange(173, 196), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(31500, 36800), zoneEloignement: createRange(26300, 31500), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(31500, 36225), zoneEloignement: createRange(28350, 33075), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(26250, 29400), zoneEloignement: createRange(23100, 26250), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(17850, 21000), zoneEloignement: createRange(17850, 22050), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 17850), zoneEloignement: createRange(14700, 17850), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BOUTLELIS",
    individuels:[
      { label: "Standing", centreVille: createRange(364, 419), zonePeripherique: createRange(320, 364), zoneEloignement: createRange(287, 320), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(309, 353), zonePeripherique: createRange(276, 309), zoneEloignement: createRange(243, 276), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(265, 298), zonePeripherique: createRange(232, 265), zoneEloignement: createRange(209, 232), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(221, 254), zonePeripherique: createRange(198, 221), zoneEloignement: createRange(176, 198), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(320, 364), zonePeripherique: createRange(276, 309), zoneEloignement: createRange(243, 276), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(276, 309), zonePeripherique: createRange(232, 265), zoneEloignement: createRange(209, 232), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(232, 265), zonePeripherique: createRange(198, 221), zoneEloignement: createRange(176, 198), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(198, 221), zonePeripherique: createRange(165, 187), zoneEloignement: createRange(143, 165), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(463, 529), zonePeripherique: createRange(386, 441), zoneEloignement: createRange(309, 353), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(386, 441), zonePeripherique: createRange(320, 364), zoneEloignement: createRange(265, 298), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(331, 375), zonePeripherique: createRange(276, 309), zoneEloignement: createRange(221, 254), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(13100, 15100), zoneEloignement: createRange(10500, 12100), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(26250, 31500), zoneEloignement: createRange(23100, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(10500, 15750), zoneEloignement: createRange(7350, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(8400, 10500), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "MISSERGHINE",
    individuels:[
      { label: "Standing", centreVille: createRange(520, 578), zonePeripherique: createRange(474, 520), zoneEloignement: createRange(439, 474), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(462, 508), zonePeripherique: createRange(427, 462), zoneEloignement: createRange(393, 427), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(416, 450), zonePeripherique: createRange(381, 416), zoneEloignement: createRange(358, 381), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(231, 266), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(474, 520), zonePeripherique: createRange(427, 462), zoneEloignement: createRange(393, 427), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(381, 462), zonePeripherique: createRange(381, 416), zoneEloignement: createRange(358, 381), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(381, 416), zonePeripherique: createRange(347, 370), zoneEloignement: createRange(323, 347), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(347, 370), zonePeripherique: createRange(427, 450), zoneEloignement: createRange(289, 312), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(595, 662), zonePeripherique: createRange(518, 573), zoneEloignement: createRange(441, 595), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(518, 573), zonePeripherique: createRange(452, 496), zoneEloignement: createRange(397, 430), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(463, 507), zonePeripherique: createRange(408, 441), zoneEloignement: createRange(353, 386), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(378, 410), zonePeripherique: createRange(315, 336), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(336, 368), zonePeripherique: createRange(284, 305), zoneEloignement: createRange(231, 242), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(389, 420), zonePeripherique: createRange(326, 357), zoneEloignement: createRange(263, 284), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(336, 368), zonePeripherique: createRange(284, 305), zoneEloignement: createRange(231, 247), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(47300, 54400), zoneEloignement: createRange(36700, 42000), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(31500, 36225), zoneEloignement: createRange(28350, 33075), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(26250, 29400), zoneEloignement: createRange(23100, 26250), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(17850, 21000), zoneEloignement: createRange(17850, 22050), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 17850), zoneEloignement: createRange(14700, 17850), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "AIN EL KERMA",
    individuels:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(179, 205), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(147, 168), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 142), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(231, 263), zonePeripherique: createRange(200, 226), zoneEloignement: createRange(163, 189), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(200, 221), zonePeripherique: createRange(168, 189), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(168, 189), zonePeripherique: createRange(137, 158), zoneEloignement: createRange(116, 131), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(137, 158), zonePeripherique: createRange(116, 131), zoneEloignement: createRange(95, 110), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(252, 284), zonePeripherique: createRange(200, 221), zoneEloignement: createRange(147, 168), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(210, 242), zonePeripherique: createRange(168, 189), zoneEloignement: createRange(126, 142), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(179, 205), zonePeripherique: createRange(137, 158), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(24150, 26250), zoneEloignement: createRange(21000, 24150), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(15750, 17850), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(11550, 16800), zoneEloignement: createRange(9450, 13650), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(11550, 16800), zoneEloignement: createRange(9450, 13650), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(8400, 11550), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(5250, 8400), zoneEloignement: createRange(3150, 5250), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "OUED TLELAT",
    individuels:[
      { label: "Standing", centreVille: createRange(381, 439), zonePeripherique: createRange(335, 381), zoneEloignement: createRange(300, 335), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(323, 370), zonePeripherique: createRange(289, 323), zoneEloignement: createRange(254, 289), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(277, 312), zonePeripherique: createRange(243, 277), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(231, 266), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(335, 381), zonePeripherique: createRange(289, 323), zoneEloignement: createRange(254, 289), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(289, 323), zonePeripherique: createRange(243, 277), zoneEloignement: createRange(219, 243), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(243, 277), zonePeripherique: createRange(208, 231), zoneEloignement: createRange(185, 208), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(208, 231), zonePeripherique: createRange(173, 196), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(485, 554), zonePeripherique: createRange(404, 462), zoneEloignement: createRange(323, 370), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(404, 462), zonePeripherique: createRange(335, 381), zoneEloignement: createRange(277, 312), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(347, 393), zonePeripherique: createRange(566, 323), zoneEloignement: createRange(231, 266), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(13100, 15100), zoneEloignement: createRange(10500, 12100), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(24150, 26250), zoneEloignement: createRange(21000, 24150), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(17850, 23100), zoneEloignement: createRange(15750, 17850), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(11550, 16800), zoneEloignement: createRange(9450, 13650), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(11550, 16800), zoneEloignement: createRange(9450, 13650), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(8400, 11550), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(5250, 8400), zoneEloignement: createRange(3150, 5250), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "EL BRAYA",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(26250, 31500), zoneEloignement: createRange(23100, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(10500, 15750), zoneEloignement: createRange(7350, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(8400, 10500), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "BOUFATIS",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(263, 294), zonePeripherique: createRange(200, 231), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(26250, 31500), zoneEloignement: createRange(23100, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(10500, 15750), zoneEloignement: createRange(7350, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(8400, 10500), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "TAFRAOUI",
    individuels:[
      { label: "Standing", centreVille: createRange(347, 399), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(273, 305), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(294, 336), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(252, 284), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(210, 242), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(305, 347), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(231, 263), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(263, 294), zonePeripherique: createRange(221, 252), zoneEloignement: createRange(200, 221), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(221, 252), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(168, 189), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(189, 210), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(137, 158), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(441, 504), zonePeripherique: createRange(368, 420), zoneEloignement: createRange(294, 336), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(368, 420), zonePeripherique: createRange(305, 347), zoneEloignement: createRange(252, 284), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(315, 357), zonePeripherique: createRange(263, 294), zoneEloignement: createRange(210, 242), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(252, 284), zonePeripherique: createRange(189, 210), zoneEloignement: createRange(126, 147), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(210, 242), zonePeripherique: createRange(158, 179), zoneEloignement: createRange(105, 116), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(289, 323), zonePeripherique: createRange(219, 254), zoneEloignement: createRange(150, 173), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(231, 266), zonePeripherique: createRange(173, 196), zoneEloignement: createRange(116, 133), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", zonePeripherique: createRange(10500, 12600), zoneEloignement: createRange(9100, 10500), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(26250, 31500), zoneEloignement: createRange(23100, 25200), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(21000, 24150), zoneEloignement: createRange(17850, 21000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(15750, 18900), zoneEloignement: createRange(12600, 15750), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(10500, 15750), zoneEloignement: createRange(7350, 12600), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(8400, 10500), zoneEloignement: createRange(5250, 8400), unit: "DA/Ha/Mois" }
    ]
  }
];

export default oranLocationsReference;
