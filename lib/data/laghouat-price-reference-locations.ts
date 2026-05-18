// laghouat-locations-2025-2026.ts
// Source: Termes de références relatifs aux locations d'immeubles - Wilaya de Laghouat 2025-2026

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

const commonAgriPlaine: PropertyEntry[] = [
  { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
  { label: "Potentialité moyenne", zonePeripherique: createRange(8500, 10000), zoneEloignement: createRange(7650, 9000), unit: "DA/Ha/Mois" },
  { label: "Potentialité faible", zonePeripherique: createRange(7650, 9000), zoneEloignement: createRange(6885, 8100), unit: "DA/Ha/Mois" }
];

const dataset1Communes = ["Laghouat"];
const dataset2Communes = ["Ksar Elhirane", "Ben Nacer Ben Chohra", "Sidi Makhlouf"];
const dataset3Communes = ["El Assafia"];
const dataset4Communes = ["Hassi R'mél"];
const dataset5Communes = ["Hassi Delaa", "Ain Madhi", "Tadjmout", "Elkheneg"];
const dataset6Communes = ["Tadjerouna", "Elhouita"];
const dataset7Communes = [
  "Gueltat Sidi Saad", "El Baidha", "Ain Sidi Ali", "Brida", "Hadje Mechri", 
  "Taouyala", "El Ghicha", "Sebgag", "Oued Moura", "Oued M'zi", "Sidi Bouzid"
];
const dataset8Communes = ["Aflou"];

const generateDataset1 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(150, 176), centreVille: createRange(136, 160), zonePeripherique: createRange(122, 144), zoneEloignement: createRange(110, 130), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(131, 154), centreVille: createRange(119, 140), zonePeripherique: createRange(107, 126), zoneEloignement: createRange(96, 113), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(262, 308), centreVille: createRange(238, 280), zonePeripherique: createRange(214, 252), zoneEloignement: createRange(193, 227), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(236, 277), centreVille: createRange(214, 252), zonePeripherique: createRange(193, 227), zoneEloignement: createRange(174, 204), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(209, 246), centreVille: createRange(190, 224), zonePeripherique: createRange(171, 202), zoneEloignement: createRange(154, 181), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(183, 216), centreVille: createRange(167, 196), zonePeripherique: createRange(150, 176), zoneEloignement: createRange(135, 159), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(1403, 1650), centreVille: createRange(1275, 1500), zonePeripherique: createRange(1148, 1350), zoneEloignement: createRange(1033, 1215), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1262, 1485), centreVille: createRange(1148, 1350), zonePeripherique: createRange(1033, 1215), zoneEloignement: createRange(929, 1094), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(1122, 1320), centreVille: createRange(1020, 1200), zonePeripherique: createRange(918, 1080), zoneEloignement: createRange(826, 972), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(1753, 2063), centreVille: createRange(1594, 1875), zonePeripherique: createRange(1434, 1688), zoneEloignement: createRange(1291, 1519), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(1578, 1856), centreVille: createRange(1434, 1688), zonePeripherique: createRange(1291, 1519), zoneEloignement: createRange(1162, 1367), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", zoneResidentielle: createRange(1403, 1650), centreVille: createRange(1275, 1500), zonePeripherique: createRange(1148, 1350), zoneEloignement: createRange(1033, 1215), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zoneResidentielle: createRange(1262, 1485), centreVille: createRange(1148, 1350), zonePeripherique: createRange(1033, 1215), zoneEloignement: createRange(929, 1094), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(125, 147), centreVille: createRange(114, 134), zonePeripherique: createRange(103, 121), zoneEloignement: createRange(92, 109), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(113, 133), centreVille: createRange(103, 121), zonePeripherique: createRange(92, 109), zoneEloignement: createRange(83, 98), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(100, 118), centreVille: createRange(91, 107), zonePeripherique: createRange(82, 96), zoneEloignement: createRange(74, 87), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(88, 103), centreVille: createRange(80, 94), zonePeripherique: createRange(72, 84), zoneEloignement: createRange(65, 76), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 67), zonePeripherique: createRange(51, 60), zoneEloignement: createRange(46, 54), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
    { label: "Potentialité moyenne", zonePeripherique: createRange(12750, 15000), zoneEloignement: createRange(11475, 13500), unit: "DA/Ha/Mois" },
    { label: "Potentialité faible", zonePeripherique: createRange(11475, 13500), zoneEloignement: createRange(10328, 12150), unit: "DA/Ha/Mois" }
  ],
  terrainsAgricolesPente: []
});

const generateGroup2 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 67), zonePeripherique: createRange(51, 60), zoneEloignement: createRange(46, 54), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(42, 49), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(50, 59), centreVille: createRange(46, 54), zonePeripherique: createRange(41, 48), zoneEloignement: createRange(37, 43), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(44, 52), centreVille: createRange(40, 47), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(32, 38), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(216, 254), centreVille: createRange(196, 231), zonePeripherique: createRange(177, 208), zoneEloignement: createRange(159, 187), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(194, 229), centreVille: createRange(177, 208), zonePeripherique: createRange(159, 187), zoneEloignement: createRange(143, 168), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(173, 203), centreVille: createRange(157, 185), zonePeripherique: createRange(141, 166), zoneEloignement: createRange(127, 150), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(151, 178), centreVille: createRange(137, 162), zonePeripherique: createRange(124, 146), zoneEloignement: createRange(111, 131), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(1169, 1375), centreVille: createRange(1063, 1250), zonePeripherique: createRange(956, 1125), zoneEloignement: createRange(861, 1013), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1052, 1238), centreVille: createRange(956, 1125), zonePeripherique: createRange(861, 1013), zoneEloignement: createRange(775, 911), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(935, 1100), centreVille: createRange(850, 1000), zonePeripherique: createRange(765, 900), zoneEloignement: createRange(689, 810), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", zoneResidentielle: createRange(935, 1100), centreVille: createRange(850, 1000), zonePeripherique: createRange(765, 900), zoneEloignement: createRange(689, 810), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zoneResidentielle: createRange(842, 990), centreVille: createRange(765, 900), zonePeripherique: createRange(689, 810), zoneEloignement: createRange(620, 729), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(70, 83), centreVille: createRange(64, 75), zonePeripherique: createRange(57, 68), zoneEloignement: createRange(52, 61), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 68), zonePeripherique: createRange(52, 61), zoneEloignement: createRange(46, 55), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(41, 49), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(49, 58), centreVille: createRange(45, 53), zonePeripherique: createRange(40, 47), zoneEloignement: createRange(36, 43), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(32, 37), centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup3 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(47, 55), centreVille: createRange(43, 50), zonePeripherique: createRange(38, 45), zoneEloignement: createRange(34, 41), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(42, 50), centreVille: createRange(38, 45), zonePeripherique: createRange(34, 41), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(37, 44), centreVille: createRange(34, 40), zonePeripherique: createRange(31, 36), zoneEloignement: createRange(28, 32), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(33, 39), centreVille: createRange(30, 35), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(178, 209), centreVille: createRange(162, 190), zonePeripherique: createRange(145, 171), zoneEloignement: createRange(131, 154), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(160, 188), centreVille: createRange(145, 171), zonePeripherique: createRange(131, 154), zoneEloignement: createRange(118, 139), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(142, 167), centreVille: createRange(129, 152), zonePeripherique: createRange(116, 137), zoneEloignement: createRange(105, 123), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(124, 146), centreVille: createRange(113, 133), zonePeripherique: createRange(102, 120), zoneEloignement: createRange(92, 108), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(1169, 1375), centreVille: createRange(1063, 1250), zonePeripherique: createRange(956, 1125), zoneEloignement: createRange(861, 1013), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1052, 1238), centreVille: createRange(956, 1125), zonePeripherique: createRange(861, 1013), zoneEloignement: createRange(775, 911), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(935, 1100), centreVille: createRange(850, 1000), zonePeripherique: createRange(765, 900), zoneEloignement: createRange(689, 810), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", zoneResidentielle: createRange(1052, 1238), centreVille: createRange(956, 1125), zonePeripherique: createRange(861, 1013), zoneEloignement: createRange(775, 911), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zoneResidentielle: createRange(947, 1114), centreVille: createRange(861, 1013), zonePeripherique: createRange(775, 911), zoneEloignement: createRange(697, 820), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(70, 83), centreVille: createRange(64, 75), zonePeripherique: createRange(57, 68), zoneEloignement: createRange(52, 61), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 68), zonePeripherique: createRange(52, 61), zoneEloignement: createRange(46, 55), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(41, 49), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(49, 58), centreVille: createRange(45, 53), zonePeripherique: createRange(40, 47), zoneEloignement: createRange(36, 43), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(32, 37), centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup4 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(94, 110), centreVille: createRange(85, 100), zonePeripherique: createRange(77, 90), zoneEloignement: createRange(69, 81), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(84, 99), centreVille: createRange(77, 90), zonePeripherique: createRange(69, 81), zoneEloignement: createRange(62, 73), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(75, 88), centreVille: createRange(68, 80), zonePeripherique: createRange(61, 72), zoneEloignement: createRange(55, 65), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(65, 77), centreVille: createRange(60, 70), zonePeripherique: createRange(54, 63), zoneEloignement: createRange(48, 57), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(415, 488), centreVille: createRange(377, 444), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(306, 360), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(374, 440), centreVille: createRange(340, 400), zonePeripherique: createRange(306, 360), zoneEloignement: createRange(275, 324), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(332, 391), centreVille: createRange(302, 355), zonePeripherique: createRange(272, 320), zoneEloignement: createRange(245, 288), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(291, 342), centreVille: createRange(264, 311), zonePeripherique: createRange(238, 280), zoneEloignement: createRange(214, 252), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(1948, 2291), centreVille: createRange(1771, 2083), zonePeripherique: createRange(1593, 1875), zoneEloignement: createRange(1434, 1687), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1753, 2062), centreVille: createRange(1593, 1875), zonePeripherique: createRange(1434, 1687), zoneEloignement: createRange(1291, 1519), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(1558, 1833), centreVille: createRange(1416, 1666), zonePeripherique: createRange(1275, 1500), zoneEloignement: createRange(1147, 1350), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" }
  ],
  hangars:[],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(70, 83), centreVille: createRange(64, 75), zonePeripherique: createRange(57, 68), zoneEloignement: createRange(52, 61), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 68), zonePeripherique: createRange(52, 61), zoneEloignement: createRange(46, 55), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(41, 49), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(49, 58), centreVille: createRange(45, 53), zonePeripherique: createRange(40, 47), zoneEloignement: createRange(36, 43), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", centreVille: createRange(85, 100), zonePeripherique: createRange(77, 90), zoneEloignement: createRange(69, 81), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(94, 110), centreVille: createRange(85, 100), zonePeripherique: createRange(77, 90), zoneEloignement: createRange(69, 81), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: [],
  terrainsAgricolesPente: []
});

const generateGroup5 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 67), zonePeripherique: createRange(51, 60), zoneEloignement: createRange(46, 54), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(42, 49), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(50, 59), centreVille: createRange(46, 54), zonePeripherique: createRange(41, 48), zoneEloignement: createRange(37, 43), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(44, 52), centreVille: createRange(40, 47), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(32, 38), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(119, 140), centreVille: createRange(108, 127), zonePeripherique: createRange(97, 114), zoneEloignement: createRange(87, 103), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(107, 126), centreVille: createRange(97, 114), zonePeripherique: createRange(87, 103), zoneEloignement: createRange(79, 93), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(95, 112), centreVille: createRange(86, 102), zonePeripherique: createRange(78, 91), zoneEloignement: createRange(70, 82), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(83, 98), centreVille: createRange(76, 89), zonePeripherique: createRange(68, 80), zoneEloignement: createRange(61, 72), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(468, 550), centreVille: createRange(425, 500), zonePeripherique: createRange(383, 450), zoneEloignement: createRange(344, 405), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(421, 495), centreVille: createRange(383, 450), zonePeripherique: createRange(344, 405), zoneEloignement: createRange(310, 365), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(374, 440), centreVille: createRange(340, 400), zonePeripherique: createRange(306, 360), zoneEloignement: createRange(275, 324), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", zoneResidentielle: createRange(935, 1100), centreVille: createRange(850, 1000), zonePeripherique: createRange(765, 900), zoneEloignement: createRange(689, 810), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zoneResidentielle: createRange(842, 990), centreVille: createRange(765, 900), zonePeripherique: createRange(689, 810), zoneEloignement: createRange(620, 729), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(70, 83), centreVille: createRange(64, 75), zonePeripherique: createRange(57, 68), zoneEloignement: createRange(52, 61), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(63, 74), centreVille: createRange(57, 68), zonePeripherique: createRange(52, 61), zoneEloignement: createRange(46, 55), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(56, 66), centreVille: createRange(51, 60), zonePeripherique: createRange(46, 54), zoneEloignement: createRange(41, 49), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(49, 58), centreVille: createRange(45, 53), zonePeripherique: createRange(40, 47), zoneEloignement: createRange(36, 43), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(32, 37), centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(32, 37), centreVille: createRange(29, 34), zonePeripherique: createRange(26, 31), zoneEloignement: createRange(23, 28), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup6 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(47, 55), centreVille: createRange(43, 50), zonePeripherique: createRange(38, 45), zoneEloignement: createRange(34, 41), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(42, 50), centreVille: createRange(38, 45), zonePeripherique: createRange(34, 41), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(37, 44), centreVille: createRange(34, 40), zonePeripherique: createRange(31, 36), zoneEloignement: createRange(28, 32), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(33, 39), centreVille: createRange(30, 35), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(119, 140), centreVille: createRange(108, 127), zonePeripherique: createRange(97, 114), zoneEloignement: createRange(87, 103), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(107, 126), centreVille: createRange(97, 114), zonePeripherique: createRange(87, 103), zoneEloignement: createRange(79, 93), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(95, 112), centreVille: createRange(86, 102), zonePeripherique: createRange(78, 91), zoneEloignement: createRange(70, 82), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(83, 98), centreVille: createRange(76, 89), zonePeripherique: createRange(68, 80), zoneEloignement: createRange(61, 72), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(234, 275), centreVille: createRange(213, 250), zonePeripherique: createRange(191, 225), zoneEloignement: createRange(172, 203), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(210, 248), centreVille: createRange(191, 225), zonePeripherique: createRange(172, 203), zoneEloignement: createRange(155, 182), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" }
  ],
  hangars:[],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(21, 25), centreVille: createRange(19, 23), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(17, 20), zonePeripherique: createRange(15, 18), zoneEloignement: createRange(14, 16), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(16, 19), centreVille: createRange(15, 18), zonePeripherique: createRange(13, 16), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup7 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(21, 25), centreVille: createRange(19, 23), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(19, 22), centreVille: createRange(17, 20), zonePeripherique: createRange(15, 18), zoneEloignement: createRange(14, 16), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(16, 19), centreVille: createRange(15, 18), zonePeripherique: createRange(13, 16), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(59, 69), centreVille: createRange(54, 63), zonePeripherique: createRange(48, 57), zoneEloignement: createRange(43, 51), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(53, 62), centreVille: createRange(48, 57), zonePeripherique: createRange(43, 51), zoneEloignement: createRange(39, 46), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(47, 55), centreVille: createRange(43, 50), zonePeripherique: createRange(39, 45), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(41, 49), centreVille: createRange(37, 44), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(30, 36), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(140, 165), centreVille: createRange(128, 150), zonePeripherique: createRange(115, 135), zoneEloignement: createRange(103, 122), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(126, 149), centreVille: createRange(115, 135), zonePeripherique: createRange(103, 122), zoneEloignement: createRange(93, 109), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(112, 132), centreVille: createRange(102, 120), zonePeripherique: createRange(92, 108), zoneEloignement: createRange(83, 97), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(94, 110), centreVille: createRange(85, 100), zonePeripherique: createRange(77, 90), zoneEloignement: createRange(69, 81), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(84, 99), centreVille: createRange(77, 90), zonePeripherique: createRange(69, 81), zoneEloignement: createRange(62, 73), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", centreVille: createRange(530, 610), zonePeripherique: createRange(460, 520), zoneEloignement: createRange(400, 460), unit: "DA/m²/Mois" },
    { label: "En zone rurale", centreVille: createRange(400, 460), zonePeripherique: createRange(330, 380), zoneEloignement: createRange(260, 290), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(21, 25), centreVille: createRange(19, 23), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(17, 20), zonePeripherique: createRange(15, 18), zoneEloignement: createRange(14, 16), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(16, 19), centreVille: createRange(15, 18), zonePeripherique: createRange(13, 16), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

const generateGroup8 = (commune: string): CommuneData => ({
  commune,
  individuels:[
    { label: "Standing", zoneResidentielle: createRange(94, 110), centreVille: createRange(85, 100), zonePeripherique: createRange(77, 90), zoneEloignement: createRange(69, 81), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(84, 99), centreVille: createRange(77, 90), zonePeripherique: createRange(69, 81), zoneEloignement: createRange(62, 73), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(75, 88), centreVille: createRange(68, 80), zonePeripherique: createRange(61, 72), zoneEloignement: createRange(55, 65), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(65, 77), centreVille: createRange(60, 70), zonePeripherique: createRange(54, 63), zoneEloignement: createRange(48, 57), unit: "DA/m²/Mois" }
  ],
  collectifsSemiCollectifs:[
    { label: "Standing", zoneResidentielle: createRange(237, 278), centreVille: createRange(215, 253), zonePeripherique: createRange(194, 228), zoneEloignement: createRange(174, 205), unit: "DA/m²/Mois" },
    { label: "Amélioré", zoneResidentielle: createRange(213, 250), centreVille: createRange(194, 228), zonePeripherique: createRange(174, 205), zoneEloignement: createRange(157, 184), unit: "DA/m²/Mois" },
    { label: "Economique", zoneResidentielle: createRange(189, 223), centreVille: createRange(172, 202), zonePeripherique: createRange(155, 182), zoneEloignement: createRange(139, 164), unit: "DA/m²/Mois" },
    { label: "Précaire", zoneResidentielle: createRange(166, 195), centreVille: createRange(151, 177), zonePeripherique: createRange(135, 159), zoneEloignement: createRange(122, 143), unit: "DA/m²/Mois" }
  ],
  locauxCommerciaux:[
    { label: "Artère hautement commerciale", zoneResidentielle: createRange(187, 220), centreVille: createRange(170, 200), zonePeripherique: createRange(153, 180), zoneEloignement: createRange(138, 162), unit: "DA/m²/Mois" },
    { label: "Artère moyennement commerciale", zoneResidentielle: createRange(168, 198), centreVille: createRange(153, 180), zonePeripherique: createRange(138, 162), zoneEloignement: createRange(124, 146), unit: "DA/m²/Mois" },
    { label: "Artère peu commerciale", zoneResidentielle: createRange(150, 176), centreVille: createRange(136, 160), zonePeripherique: createRange(122, 144), zoneEloignement: createRange(110, 130), unit: "DA/m²/Mois" },
    { label: "Artère principale", zoneResidentielle: createRange(584, 688), centreVille: createRange(531, 625), zonePeripherique: createRange(478, 563), zoneEloignement: createRange(430, 506), unit: "DA/m²/Mois" },
    { label: "Artère secondaire", zoneResidentielle: createRange(526, 619), centreVille: createRange(478, 563), zonePeripherique: createRange(430, 506), zoneEloignement: createRange(387, 456), unit: "DA/m²/Mois" }
  ],
  hangars:[
    { label: "En zone urbaine", zoneResidentielle: createRange(263, 309), centreVille: createRange(239, 281), zonePeripherique: createRange(215, 253), zoneEloignement: createRange(193, 228), unit: "DA/m²/Mois" },
    { label: "En zone rurale", zoneResidentielle: createRange(236, 278), centreVille: createRange(215, 253), zonePeripherique: createRange(193, 228), zoneEloignement: createRange(174, 205), unit: "DA/m²/Mois" }
  ],
  terrainsNus:[
    { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(21, 25), centreVille: createRange(19, 23), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
    { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(17, 20), zonePeripherique: createRange(15, 18), zoneEloignement: createRange(14, 16), unit: "DA/m²/Mois" },
    { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(16, 19), centreVille: createRange(15, 18), zonePeripherique: createRange(13, 16), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
    { label: "Dans l'indivision", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
    { label: "Industriel", zoneResidentielle: createRange(23, 28), centreVille: createRange(21, 25), zonePeripherique: createRange(19, 23), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
  ],
  terrainsAgricolesPlaine: commonAgriPlaine,
  terrainsAgricolesPente: []
});

export const laghouatLocationsReference: CommuneData[] = [
  ...dataset1Communes.map(generateDataset1),
  ...dataset2Communes.map(generateGroup2),
  ...dataset3Communes.map(generateGroup3),
  ...dataset4Communes.map(generateGroup4),
  ...dataset5Communes.map(generateGroup5),
  ...dataset6Communes.map(generateGroup6),
  ...dataset7Communes.map(generateGroup7),
  ...dataset8Communes.map(generateGroup8)
];

export default laghouatLocationsReference;