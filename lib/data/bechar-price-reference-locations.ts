import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Locative - DA/Ha/Mois)
// ============================================================================

const agScaleBecharCityRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(6417, 7379), zoneEloignement: createRange(5740, 6601) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(4433, 5098), zoneEloignement: createRange(3827, 4401) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(3885, 4468), zoneEloignement: createRange(2392, 2750) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3675, 4226), zoneEloignement: createRange(3271, 3761) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(3092, 3555), zoneEloignement: createRange(2752, 3164) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(2217, 2549), zoneEloignement: createRange(1973, 2269) }
  ]
};

const agScaleAbadlaTierRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(4305, 4950), zoneEloignement: createRange(3348, 3850) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(2870, 3300), zoneEloignement: createRange(2391, 2750) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(1913, 2200), zoneEloignement: createRange(1435, 1650) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(1674, 1925), zoneEloignement: createRange(1530, 1760) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(1482, 1704), zoneEloignement: createRange(1339, 1540) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(1435, 1650), zoneEloignement: createRange(1243, 1430) }
  ]
};

const agScaleMeridjaTierRent = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3173, 4320), zoneEloignement: createRange(2870, 3300) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(2392, 2750), zoneEloignement: createRange(1913, 2200) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(1674, 1925), zoneEloignement: createRange(1435, 1650) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(1913, 2200), zoneEloignement: createRange(1674, 1925) },
    { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zonePeripherique: createRange(1435, 1650), zoneEloignement: createRange(1339, 1540) },
    { label: "Potentialité faible", unit: "DA/Ha/Mois", zonePeripherique: createRange(1540, 1771), zoneEloignement: createRange(1244, 1430) }
  ]
};

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

// Tier 2 Template: Abadla, Beni Ounif, Kenadsa, Taghit, Lahmar (Pages 3-7)
const createAbadlaTierRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(140, 161), centreVille: createRange(140, 161), zonePeripherique: createRange(78, 90), zoneEloignement: createRange(46, 52) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(99, 113), centreVille: createRange(99, 113), zonePeripherique: createRange(74, 85), zoneEloignement: createRange(42, 48) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(64, 74), centreVille: createRange(64, 74), zonePeripherique: createRange(51, 59), zoneEloignement: createRange(31, 36) },
    { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(53, 62), centreVille: createRange(53, 62), zonePeripherique: createRange(45, 51), zoneEloignement: createRange(26, 30) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(101, 116), centreVille: createRange(101, 116), zonePeripherique: createRange(54, 62), zoneEloignement: createRange(48, 55) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(151, 175), centreVille: createRange(151, 175), zonePeripherique: createRange(107, 123), zoneEloignement: createRange(78, 90) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(81, 94), centreVille: createRange(81, 94), zonePeripherique: createRange(47, 54), zoneEloignement: createRange(39, 44) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(56, 64), centreVille: createRange(56, 64), zonePeripherique: createRange(41, 47), zoneEloignement: createRange(36, 42) }
  ],
  terrainsAgricolesPlaine: agScaleAbadlaTierRent.plaine,
  terrainsAgricolesPente: agScaleAbadlaTierRent.pente
});

// Tier 3 Template: Meridja, Mogheul, Boukaïs, Erg Ferradj, Mechraa Houari (Pages 8-12)
const createMeridjaTierRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(70, 80), centreVille: createRange(70, 80), zonePeripherique: createRange(74, 85), zoneEloignement: createRange(42, 48) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(63, 73), centreVille: createRange(63, 73), zonePeripherique: createRange(51, 59), zoneEloignement: createRange(31, 36) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(64, 74), centreVille: createRange(64, 74), zonePeripherique: createRange(50, 57), zoneEloignement: createRange(44, 51) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(119, 137), centreVille: createRange(119, 137), zonePeripherique: createRange(92, 105), zoneEloignement: createRange(75, 87) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(70, 80), centreVille: createRange(70, 80), zonePeripherique: createRange(27, 31), zoneEloignement: createRange(25, 29) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(49, 56), centreVille: createRange(49, 56), zonePeripherique: createRange(34, 39), zoneEloignement: createRange(30, 34) }
  ],
  terrainsAgricolesPlaine: agScaleMeridjaTierRent.plaine,
  terrainsAgricolesPente: agScaleMeridjaTierRent.pente
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const becharRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. BECHAR CITY (Main Hub - Page 2)
  {
    commune: "BECHAR",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(280, 322), centreVille: createRange(280, 322), zonePeripherique: createRange(139, 159), zoneEloignement: createRange(75, 87) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(195, 224), centreVille: createRange(195, 224), zonePeripherique: createRange(96, 109), zoneEloignement: createRange(40, 47) },
      { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(160, 183), centreVille: createRange(160, 183), zonePeripherique: createRange(54, 62), zoneEloignement: createRange(34, 39) },
      { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(144, 165), centreVille: createRange(144, 165), zonePeripherique: createRange(49, 55), zoneEloignement: createRange(30, 35) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(204, 235), centreVille: createRange(204, 235), zonePeripherique: createRange(95, 108), zoneEloignement: createRange(52, 60) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(151, 174), centreVille: createRange(151, 174), zonePeripherique: createRange(92, 105), zoneEloignement: createRange(48, 55) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(585, 673), centreVille: createRange(585, 673), zonePeripherique: createRange(223, 257), zoneEloignement: createRange(125, 144) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(112, 129), centreVille: createRange(112, 129), zonePeripherique: createRange(93, 107), zoneEloignement: createRange(68, 78) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(84, 97), centreVille: createRange(84, 97), zonePeripherique: createRange(61, 69), zoneEloignement: createRange(47, 53) }
    ],
    terrainsAgricolesPlaine: agScaleBecharCityRent.plaine,
    terrainsAgricolesPente: agScaleBecharCityRent.pente
  },

  // Tier 2: Abadla Group
  ...["ABADLA", "BENI OUNIF", "KENADSA", "TAGHIT", "LAHMAR"].map(name => createAbadlaTierRent(name)),

  // Tier 3: Meridja Group
  ...["MERIDJA", "MOGHEUL", "BOUKAÏS", "ERG FERRADJ", "MECHRAA HOUARI BOUMEDIENE"].map(name => createMeridjaTierRent(name))
];