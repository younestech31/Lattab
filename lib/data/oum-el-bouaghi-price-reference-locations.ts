// oum-el-bouaghi-locations-2025-2026.ts
// Source: Termes de références relatifs aux locations d'immeubles – Wilaya d'Oum El Bouaghi 2025-2026

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

export const oumElBouaghiLocationsReference: CommuneData[] = [
  {
    commune: "Oum El Bouaghi",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(143, 165), centreVille: createRange(219, 253), zonePeripherique: createRange(100, 116), zoneEloignement: createRange(61, 70), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(119, 137), centreVille: createRange(183, 211), zonePeripherique: createRange(83, 96), zoneEloignement: createRange(50, 59), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(99, 114), centreVille: createRange(152, 175), zonePeripherique: createRange(69, 80), zoneEloignement: createRange(42, 48), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(44, 51), centreVille: createRange(68, 79), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(19, 22), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(197, 227), centreVille: createRange(262, 302), zonePeripherique: createRange(138, 159), zoneEloignement: createRange(84, 97), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(164, 189), centreVille: createRange(218, 251), zonePeripherique: createRange(115, 133), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(137, 158), centreVille: createRange(182, 210), zonePeripherique: createRange(96, 111), zoneEloignement: createRange(58, 67), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(62, 72), centreVille: createRange(82, 95), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(220, 253), centreVille: createRange(438, 504), zonePeripherique: createRange(154, 178), zoneEloignement: createRange(92, 106), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(183, 211), centreVille: createRange(365, 420), zonePeripherique: createRange(128, 148), zoneEloignement: createRange(77, 89), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(55, 64), centreVille: createRange(110, 127), zonePeripherique: createRange(38, 44), zoneEloignement: createRange(23, 27), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(146, 168), centreVille: createRange(197, 227), zonePeripherique: createRange(103, 119), zoneEloignement: createRange(62, 72), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(117, 135), centreVille: createRange(167, 193), zonePeripherique: createRange(82, 95), zoneEloignement: createRange(49, 57), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(53, 61), centreVille: createRange(70, 81), zonePeripherique: createRange(37, 43), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(30, 35), zonePeripherique: createRange(19, 22), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(54, 63), centreVille: createRange(77, 89), zonePeripherique: createRange(37, 44), zoneEloignement: createRange(22, 25), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(46, 54), centreVille: createRange(66, 76), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(19, 22), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(46, 54), zonePeripherique: createRange(22, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(22, 25), centreVille: createRange(31, 36), zonePeripherique: createRange(15, 19), zoneEloignement: createRange(9, 11), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(12, 14), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 70), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 22), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Mlila",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(133, 154), centreVille: createRange(204, 235), zonePeripherique: createRange(93, 108), zoneEloignement: createRange(56, 64), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(111, 128), centreVille: createRange(170, 196), zonePeripherique: createRange(78, 90), zoneEloignement: createRange(46, 54), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(92, 107), centreVille: createRange(142, 164), zonePeripherique: createRange(65, 76), zoneEloignement: createRange(39, 45), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(42, 48), centreVille: createRange(64, 75), zonePeripherique: createRange(29, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(197, 227), centreVille: createRange(262, 302), zonePeripherique: createRange(138, 159), zoneEloignement: createRange(84, 97), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(164, 189), centreVille: createRange(218, 251), zonePeripherique: createRange(115, 133), zoneEloignement: createRange(70, 81), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(137, 158), centreVille: createRange(182, 210), zonePeripherique: createRange(96, 111), zoneEloignement: createRange(58, 67), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(62, 72), centreVille: createRange(82, 95), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(300, 345), centreVille: createRange(600, 690), zonePeripherique: createRange(210, 242), zoneEloignement: createRange(126, 145), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(250, 288), centreVille: createRange(500, 575), zonePeripherique: createRange(175, 202), zoneEloignement: createRange(105, 121), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(146, 168), centreVille: createRange(197, 227), zonePeripherique: createRange(103, 119), zoneEloignement: createRange(62, 72), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(117, 135), centreVille: createRange(167, 193), zonePeripherique: createRange(82, 95), zoneEloignement: createRange(49, 57), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(60, 69), centreVille: createRange(80, 92), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(27, 32), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(34, 40), zonePeripherique: createRange(22, 26), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(62, 72), centreVille: createRange(88, 101), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(25, 30), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(53, 62), centreVille: createRange(75, 87), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 25), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(37, 44), centreVille: createRange(53, 62), zonePeripherique: createRange(25, 30), zoneEloignement: createRange(15, 19), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(24, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(19, 23), centreVille: createRange(28, 33), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(50, 59), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 24), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Beida",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(122, 141), centreVille: createRange(189, 217), zonePeripherique: createRange(86, 100), zoneEloignement: createRange(51, 60), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(102, 118), centreVille: createRange(158, 182), zonePeripherique: createRange(71, 83), zoneEloignement: createRange(43, 50), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(85, 99), centreVille: createRange(131, 151), zonePeripherique: createRange(60, 69), zoneEloignement: createRange(36, 42), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(38, 44), centreVille: createRange(59, 68), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(185, 213), centreVille: createRange(245, 282), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(78, 90), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(154, 178), centreVille: createRange(204, 235), zonePeripherique: createRange(108, 125), zoneEloignement: createRange(65, 75), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(128, 148), centreVille: createRange(170, 196), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(54, 63), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(58, 67), centreVille: createRange(77, 89), zonePeripherique: createRange(41, 48), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(214, 247), centreVille: createRange(426, 490), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(90, 104), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(178, 205), centreVille: createRange(355, 409), zonePeripherique: createRange(125, 144), zoneEloignement: createRange(75, 87), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(53, 61), centreVille: createRange(107, 124), zonePeripherique: createRange(38, 44), zoneEloignement: createRange(23, 27), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(131, 151), centreVille: createRange(180, 207), zonePeripherique: createRange(93, 107), zoneEloignement: createRange(56, 65), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(105, 121), centreVille: createRange(150, 173), zonePeripherique: createRange(74, 86), zoneEloignement: createRange(44, 51), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(45, 52), centreVille: createRange(60, 69), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(26, 30), zonePeripherique: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(46, 54), centreVille: createRange(66, 76), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(19, 22), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(40, 46), centreVille: createRange(56, 65), zonePeripherique: createRange(28, 32), zoneEloignement: createRange(15, 19), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(28, 32), centreVille: createRange(40, 46), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(26, 31), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(6, 8), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(34, 40), centreVille: createRange(48, 55), zonePeripherique: createRange(24, 28), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Fakroun",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(122, 141), centreVille: createRange(189, 217), zonePeripherique: createRange(86, 100), zoneEloignement: createRange(51, 60), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(102, 118), centreVille: createRange(158, 182), zonePeripherique: createRange(71, 83), zoneEloignement: createRange(43, 50), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(85, 99), centreVille: createRange(131, 151), zonePeripherique: createRange(60, 69), zoneEloignement: createRange(36, 42), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(38, 44), centreVille: createRange(59, 68), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(185, 213), centreVille: createRange(245, 282), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(78, 90), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(154, 178), centreVille: createRange(204, 235), zonePeripherique: createRange(108, 125), zoneEloignement: createRange(65, 75), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(128, 148), centreVille: createRange(170, 196), zonePeripherique: createRange(90, 104), zoneEloignement: createRange(54, 63), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(58, 67), centreVille: createRange(77, 89), zonePeripherique: createRange(41, 48), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(244, 281), centreVille: createRange(486, 559), zonePeripherique: createRange(170, 196), zoneEloignement: createRange(102, 118), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(203, 234), centreVille: createRange(405, 466), zonePeripherique: createRange(142, 164), zoneEloignement: createRange(85, 98), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(61, 71), centreVille: createRange(122, 141), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(131, 151), centreVille: createRange(180, 207), zonePeripherique: createRange(93, 107), zoneEloignement: createRange(56, 65), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(105, 121), centreVille: createRange(150, 173), zonePeripherique: createRange(74, 86), zoneEloignement: createRange(44, 51), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(45, 52), centreVille: createRange(60, 69), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(26, 30), zonePeripherique: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(46, 54), centreVille: createRange(66, 76), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(19, 22), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(40, 46), centreVille: createRange(56, 65), zonePeripherique: createRange(28, 32), zoneEloignement: createRange(15, 19), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(28, 32), centreVille: createRange(40, 46), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(26, 31), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(6, 8), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(34, 40), centreVille: createRange(48, 55), zonePeripherique: createRange(24, 28), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Kercha",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Sigus",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ouled Hamla",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Babouche",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(56, 65), centreVille: createRange(86, 99), zonePeripherique: createRange(38, 44), zoneEloignement: createRange(23, 27), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(47, 55), centreVille: createRange(72, 83), zonePeripherique: createRange(32, 37), zoneEloignement: createRange(19, 22), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(39, 45), centreVille: createRange(60, 69), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(18, 21), centreVille: createRange(27, 32), zonePeripherique: createRange(12, 14), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(72, 83), centreVille: createRange(103, 119), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(30, 35), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(25, 29), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(32, 37), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(9, 11), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(48, 56), centreVille: createRange(96, 111), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(40, 46), centreVille: createRange(80, 92), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(12, 14), centreVille: createRange(24, 28), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(63, 73), centreVille: createRange(86, 99), zonePeripherique: createRange(44, 51), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(30, 35), centreVille: createRange(40, 46), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(17, 20), zonePeripherique: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(21, 25), centreVille: createRange(30, 35), zonePeripherique: createRange(15, 18), zoneEloignement: createRange(9, 11), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(8, 10), centreVille: createRange(11, 13), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Meskiana",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Souk Naamane",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Fkirina",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ksar Sbahi",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Dhalaa",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Berriche",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Hanchir Toumghani",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Bir Chouhada",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ouled Gacem",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(74, 86), centreVille: createRange(115, 133), zonePeripherique: createRange(52, 60), zoneEloignement: createRange(31, 36), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(62, 72), centreVille: createRange(96, 111), zonePeripherique: createRange(43, 50), zoneEloignement: createRange(26, 30), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(52, 60), centreVille: createRange(80, 92), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(22, 26), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(23, 27), centreVille: createRange(36, 42), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(96, 111), centreVille: createRange(138, 159), zonePeripherique: createRange(67, 78), zoneEloignement: createRange(41, 48), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(80, 92), centreVille: createRange(115, 133), zonePeripherique: createRange(56, 65), zoneEloignement: createRange(34, 40), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(21, 25), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(90, 104), centreVille: createRange(180, 207), zonePeripherique: createRange(64, 74), zoneEloignement: createRange(38, 44), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(75, 87), centreVille: createRange(150, 173), zonePeripherique: createRange(53, 61), zoneEloignement: createRange(32, 37), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(23, 27), centreVille: createRange(45, 52), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(84, 97), centreVille: createRange(115, 133), zonePeripherique: createRange(59, 68), zoneEloignement: createRange(35, 41), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(67, 78), centreVille: createRange(96, 111), zonePeripherique: createRange(47, 55), zoneEloignement: createRange(28, 33), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(38, 44), centreVille: createRange(50, 58), zonePeripherique: createRange(27, 32), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(22, 26), zonePeripherique: createRange(14, 17), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(32, 37), centreVille: createRange(45, 52), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(27, 32), centreVille: createRange(38, 44), zonePeripherique: createRange(19, 22), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(13, 15), centreVille: createRange(18, 21), zonePeripherique: createRange(9, 11), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(10, 12), centreVille: createRange(14, 17), zonePeripherique: createRange(7, 9), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(25, 29), centreVille: createRange(35, 41), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Harmilia",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Boughrara Saoudi",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Oued Nini",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Zitoun",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Amiria",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ouled Zouai",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(48, 56), centreVille: createRange(72, 83), zonePeripherique: createRange(34, 40), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(40, 46), centreVille: createRange(60, 69), zonePeripherique: createRange(28, 33), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(33, 38), centreVille: createRange(50, 58), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(15, 18), centreVille: createRange(23, 27), zonePeripherique: createRange(10, 12), zoneEloignement: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(60, 69), centreVille: createRange(86, 99), zonePeripherique: createRange(42, 49), zoneEloignement: createRange(24, 28), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(50, 58), centreVille: createRange(72, 83), zonePeripherique: createRange(35, 41), zoneEloignement: createRange(20, 23), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(19, 22), centreVille: createRange(27, 32), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(42, 49), centreVille: createRange(84, 97), zonePeripherique: createRange(30, 35), zoneEloignement: createRange(18, 21), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(35, 41), centreVille: createRange(70, 81), zonePeripherique: createRange(25, 29), zoneEloignement: createRange(15, 18), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(11, 13), centreVille: createRange(21, 25), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(53, 61), centreVille: createRange(72, 83), zonePeripherique: createRange(36, 42), zoneEloignement: createRange(21, 25), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(42, 49), centreVille: createRange(60, 69), zonePeripherique: createRange(29, 34), zoneEloignement: createRange(17, 20), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(23, 27), centreVille: createRange(30, 35), zonePeripherique: createRange(16, 19), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(13, 15), zonePeripherique: createRange(8, 10), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ain Diss",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Zorg",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Djazia",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Behir Chergui",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Belala",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Rahia",
    individuels: [
      { label: "Standing", zoneResidentielle: createRange(29, 34), centreVille: createRange(43, 50), zonePeripherique: createRange(20, 23), zoneEloignement: createRange(12, 14), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(24, 28), centreVille: createRange(36, 42), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(20, 23), centreVille: createRange(30, 35), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(9, 11), centreVille: createRange(14, 17), zonePeripherique: createRange(6, 7), zoneEloignement: createRange(4, 5), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", zoneResidentielle: createRange(36, 42), centreVille: createRange(52, 60), zonePeripherique: createRange(26, 30), zoneEloignement: createRange(16, 19), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(30, 35), centreVille: createRange(43, 50), zonePeripherique: createRange(22, 26), zoneEloignement: createRange(13, 15), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(11, 13), centreVille: createRange(16, 19), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(24, 28), centreVille: createRange(48, 56), zonePeripherique: createRange(17, 20), zoneEloignement: createRange(10, 12), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(20, 23), centreVille: createRange(40, 46), zonePeripherique: createRange(14, 17), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(6, 7), centreVille: createRange(12, 14), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Artere principale", zoneResidentielle: createRange(31, 36), centreVille: createRange(43, 50), zonePeripherique: createRange(23, 27), zoneEloignement: createRange(14, 17), unit: "DA/m²/Mois" },
      { label: "artere secondaire", zoneResidentielle: createRange(25, 29), centreVille: createRange(36, 42), zonePeripherique: createRange(18, 21), zoneEloignement: createRange(11, 13), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "Situé en zone urbaine", zoneResidentielle: createRange(15, 18), centreVille: createRange(20, 23), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Situé en zone rurale", zoneResidentielle: createRange(9, 11), zonePeripherique: createRange(6, 7), unit: "DA/m²/Mois" }
    ],
    terrainsNus: [
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(18, 21), centreVille: createRange(25, 29), zonePeripherique: createRange(13, 15), zoneEloignement: createRange(8, 10), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(15, 18), centreVille: createRange(21, 25), zonePeripherique: createRange(11, 13), zoneEloignement: createRange(7, 9), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(11, 13), centreVille: createRange(15, 18), zonePeripherique: createRange(8, 10), zoneEloignement: createRange(5, 6), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" },
      { label: "Dans l' indivision", zoneResidentielle: createRange(6, 7), centreVille: createRange(8, 10), zonePeripherique: createRange(4, 5), zoneEloignement: createRange(2, 3), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(7, 9), centreVille: createRange(10, 12), zonePeripherique: createRange(5, 6), zoneEloignement: createRange(3, 4), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(9720, 11178), zonePeripherique: createRange(4800, 5520), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(7680, 8832), zonePeripherique: createRange(3790, 4359), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(6070, 6981), zonePeripherique: createRange(3000, 3450), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", zoneResidentielle: createRange(5840, 6716), zonePeripherique: createRange(2880, 3312), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zoneResidentielle: createRange(4620, 5313), zonePeripherique: createRange(2280, 2622), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zoneResidentielle: createRange(3650, 4198), zonePeripherique: createRange(1800, 2070), unit: "DA/Ha/Mois" }
    ]
  }
];

export default oumElBouaghiLocationsReference;
