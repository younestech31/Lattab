import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (COMMON FOR BISKRA RENTALS)
// ============================================================================
const terrainsAgricolesPlaineBiskraRent = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(2700, 3000),
    zoneEloignement: createRange(2200, 2500)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(2500, 2800),
    zoneEloignement: createRange(1600, 1800)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(1800, 2000),
    zoneEloignement: createRange(1400, 1600)
  }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Template Tier 2: Sidi Okba, Tolga, Zeribet El Oued, Ourlal, M'chouneche
 * (Pages 3, 4, 5, 22, 27)
 */
const createBiskraTier2Rent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(314, 360), centreVille: createRange(218, 250), zonePeripherique: createRange(157, 180), zoneEloignement: createRange(87, 100) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(261, 300), centreVille: createRange(174, 200), zonePeripherique: createRange(131, 150), zoneEloignement: createRange(61, 70) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(174, 200), centreVille: createRange(157, 180), zonePeripherique: createRange(87, 100), zoneEloignement: createRange(44, 50) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(331, 380), centreVille: createRange(267, 307), zonePeripherique: createRange(161, 185), zoneEloignement: createRange(105, 120) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(435, 500), centreVille: createRange(348, 400), zonePeripherique: createRange(227, 260), zoneEloignement: createRange(105, 120) }
  ],
  hangars: [
    { label: "Zone Urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(22, 25), zoneEloignement: createRange(18, 20) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(131, 150), centreVille: createRange(96, 110), zonePeripherique: createRange(70, 80), zoneEloignement: createRange(61, 70) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBiskraRent,
  terrainsAgricolesPente: []
});

/**
 * Template Tier 3: Chetma, M'ziraa, El Ghrous, Bordj Ben Azouz, Lichana, Bouchegroune
 * (Pages 6 - 11)
 */
const createBiskraTier3Rent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(48, 55), centreVille: createRange(44, 50), zonePeripherique: createRange(37, 42), zoneEloignement: createRange(35, 40) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(42, 48), centreVille: createRange(40, 45), zonePeripherique: createRange(31, 35), zoneEloignement: createRange(29, 33) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(56, 64), centreVille: createRange(54, 61), zonePeripherique: createRange(44, 50), zoneEloignement: createRange(40, 45) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(218, 250), centreVille: createRange(174, 200), zonePeripherique: createRange(114, 130), zoneEloignement: createRange(53, 60) }
  ],
  hangars: [
    { label: "Zone Urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(22, 25), zoneEloignement: createRange(18, 20) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(96, 110), centreVille: createRange(68, 78), zonePeripherique: createRange(44, 50), zoneEloignement: createRange(25, 28) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBiskraRent,
  terrainsAgricolesPente: []
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================
export const biskraRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. BISKRA CITY (Page 2)
  {
    commune: "Biskra",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(435, 500), centreVille: createRange(348, 400), zonePeripherique: createRange(218, 250), zoneEloignement: createRange(130, 150) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(305, 350), centreVille: createRange(244, 280), zonePeripherique: createRange(174, 200), zoneEloignement: createRange(113, 130) },
      { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(218, 250), centreVille: createRange(192, 220), zonePeripherique: createRange(105, 120), zoneEloignement: createRange(79, 90) },
      { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(105, 120), centreVille: createRange(79, 90), zonePeripherique: createRange(61, 70), zoneEloignement: createRange(44, 50) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(468, 538), centreVille: createRange(401, 461), zonePeripherique: createRange(267, 307), zoneEloignement: createRange(134, 154) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(2783, 3200), centreVille: createRange(1392, 1600), zonePeripherique: createRange(1044, 1200), zoneEloignement: createRange(696, 800) }
    ],
    hangars: [
      { label: "Zone Urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(35, 40), zoneEloignement: createRange(31, 35) },
      { label: "Zone Rurale", unit: "DA/m²/Mois", zoneEloignement: createRange(22, 25) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(131, 150), centreVille: createRange(96, 110), zonePeripherique: createRange(70, 80), zoneEloignement: createRange(61, 70) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBiskraRent,
    terrainsAgricolesPente: []
  },

  // TIER 2: Major Hubs
  ...["Sidi Okba", "Tolga", "Zeribet El Oued", "Ourlal", "M'chouneche"].map(name => createBiskraTier2Rent(name)),

  // TIER 3: Secondary Towns
  ...["Chetma", "M'ziraa", "El Ghrous", "Bordj Ben Azouz", "Lichana", "Bouchegroune"].map(name => createBiskraTier3Rent(name)),

  // TIER 4: Rural / Lower Value (Pages 12 - 21, 24 - 28)
  ...["Khanguet Sidi Nadji", "El Faidh", "Branis", "Ain Zaatout", "Lioua", "Mekhadma", "M'lili", "Oumache", "Ain Naga", "El Haouche", "El Hadjeb", "El Kantara", "Djemoura", "Foughala"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(46, 52), centreVille: createRange(41, 47), zonePeripherique: createRange(35, 40), zoneEloignement: createRange(31, 35) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(54, 62), centreVille: createRange(51, 58), zonePeripherique: createRange(41, 47), zoneEloignement: createRange(35, 40) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(180, 200), centreVille: createRange(140, 150), zonePeripherique: createRange(105, 120), zoneEloignement: createRange(53, 60) }
    ],
    hangars: [
      { label: "Zone Urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(22, 25), zoneEloignement: createRange(18, 20) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²/Mois", zoneResidentielle: createRange(96, 110), centreVille: createRange(68, 78), zonePeripherique: createRange(44, 50), zoneEloignement: createRange(25, 28) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBiskraRent,
    terrainsAgricolesPente: []
  }))
];