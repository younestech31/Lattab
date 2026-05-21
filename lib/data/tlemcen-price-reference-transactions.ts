import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Variations per Tier)
// ============================================================================

// High Potential (Urban Hectares - Tlemcen, Mansourah, Maghnia)
const agScaleTlemcenHub = [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(2600000, 3500000), zoneEloignement: createRange(1400000, 2800000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(2100000, 2500000), zoneEloignement: createRange(1300000, 2300000) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(1700000, 2000000), zoneEloignement: createRange(1000000, 1200000) }
];

// Standard Rural (Sebdou, Sabra, Remchi, etc.)
const agScaleStandardRural = [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(900000, 2000000), zoneEloignement: createRange(700000, 1500000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(600000, 1700000), zoneEloignement: createRange(500000, 1300000) }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Group 1: Sebdou Standard (Sebdou, Sabra, Honaine, Bensekrane, Sidi Djilali, Ouled Mimoun, Beni Boussaid, Ain Tallout, Beni Senous)
 * Pages: 2, 3, 6, 8, 10, 12, 16, 18, 20, 22
 */
const createSebdouScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(38000, 45000), zonePeripherique: createRange(35000, 41000), zoneEloignement: createRange(28000, 33000) },
    { label: "Amélioré", unit: "DA/m²", centreVille: createRange(34000, 40000), zonePeripherique: createRange(31000, 37000), zoneEloignement: createRange(24000, 28000) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(33000, 39000), zonePeripherique: createRange(32000, 38000), zoneEloignement: createRange(24000, 28000) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(42000, 50000), zonePeripherique: createRange(36000, 42000), zoneEloignement: createRange(33000, 39000) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(18000, 21000), zonePeripherique: createRange(16000, 18000), zoneEloignement: createRange(13000, 16000) }
  ],
  terrainsAgricolesPlaine: agScaleStandardRural,
  terrainsAgricolesPente: []
});

/**
 * Group 2: Aricha Standard (Aricha, Bouhlou, Ain Kebira, Sidi Abdelli, Bouihi, Oued Chouly, Beni Khellad, Ain Nehala, Beni Bahdel, Djebala, Dar Yaghoumracen, Ouled Riah, Amieur, Fehoul, Beni Mester, El Gour)
 * Pages: 4, 5, 7, 9, 11, 13, 17, 19, 21, 23, 25, 27, 29, 31, 35, 37, 41, 54
 */
const createArichaScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(34000, 40000), zonePeripherique: createRange(30000, 35000), zoneEloignement: createRange(21000, 25000) },
    { label: "Amélioré", unit: "DA/m²", centreVille: createRange(32000, 38000), zonePeripherique: createRange(25000, 30000), zoneEloignement: createRange(17000, 20000) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", centreVille: createRange(28000, 32000), zonePeripherique: createRange(26000, 28000), zoneEloignement: createRange(17000, 20000) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(25000, 30000), zonePeripherique: createRange(22000, 27000), zoneEloignement: createRange(17000, 20000) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(17000, 20000), zonePeripherique: createRange(10000, 12000), zoneEloignement: createRange(8000, 10000) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha", zonePeripherique: createRange(800000, 1500000), zoneEloignement: createRange(600000, 1200000) }],
  terrainsAgricolesPente: []
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const tlemcenPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. TLEMCEN & MANSOURAH (The Core - Pages 40 & 36)
  {
    commune: "Tlemcen",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(95000, 110000), centreVille: createRange(81000, 90000), zonePeripherique: createRange(68000, 75000), zoneEloignement: createRange(45000, 50000) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(90000, 95000), centreVille: createRange(74000, 80000), zonePeripherique: createRange(58000, 64000), zoneEloignement: createRange(37000, 44000) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(90000, 95000), centreVille: createRange(78000, 80000), zonePeripherique: createRange(70000, 75000), zoneEloignement: createRange(55000, 60000) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(160000, 190000), centreVille: createRange(270000, 300000), zonePeripherique: createRange(110000, 130000), zoneEloignement: createRange(60000, 70000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(78000, 90000), centreVille: createRange(67000, 78000), zonePeripherique: createRange(43000, 50000), zoneEloignement: createRange(20000, 25000) }
    ],
    terrainsAgricolesPlaine: agScaleTlemcenHub,
    terrainsAgricolesPente: []
  },
  {
    commune: "Mansourah",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(74000, 85000), centreVille: createRange(63000, 74000), zonePeripherique: createRange(60000, 65000), zoneEloignement: createRange(45000, 52000) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(130000, 160000), centreVille: createRange(160000, 200000), zonePeripherique: createRange(100000, 130000), zoneEloignement: createRange(40000, 50000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(70000, 75000), centreVille: createRange(67000, 70000), zonePeripherique: createRange(40000, 45000), zoneEloignement: createRange(20000, 25000) }
    ],
    terrainsAgricolesPlaine: agScaleTlemcenHub,
    terrainsAgricolesPente: []
  },

  // 2. MAGHNIA (Page 32)
  {
    commune: "Maghnia",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(59000, 70000), centreVille: createRange(56000, 66000), zonePeripherique: createRange(41000, 49000), zoneEloignement: createRange(33000, 38000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(36000, 42000), centreVille: createRange(30000, 36000), zonePeripherique: createRange(20000, 24000), zoneEloignement: createRange(10000, 13000) }
    ],
    terrainsAgricolesPlaine: agScaleTlemcenHub,
    terrainsAgricolesPente: []
  },

  // 3. MARSA BEN MHIDI (Premium Coastal - Page 38)
  {
    commune: "Marsa Ben Mhidi",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(70000, 75000), centreVille: createRange(66000, 71000), zonePeripherique: createRange(37000, 42000), zoneEloignement: createRange(32000, 37000) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", centreVille: createRange(180000, 2100000), zonePeripherique: createRange(42000, 50000), zoneEloignement: createRange(23000, 27000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(83000, 95000), centreVille: createRange(75000, 83000), zonePeripherique: createRange(35000, 40000), zoneEloignement: createRange(20000, 23000) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha", zonePeripherique: createRange(1700000, 2000000), zoneEloignement: createRange(1300000, 1500000) }]
  },

  // 4. URBAN/COASTAL CENTERS (Ghazaouet, Remchi, Hennaya, Nedroma)
  ...["Ghazaouet", "Remchi", "Hennaya", "Nedroma", "Chetouane"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(65000, 70000), centreVille: createRange(56000, 62000), zonePeripherique: createRange(40000, 50000), zoneEloignement: createRange(32000, 37000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", zoneResidentielle: createRange(35000, 40000), centreVille: createRange(30000, 35000), zonePeripherique: createRange(20000, 25000), zoneEloignement: createRange(12000, 15000) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha", zonePeripherique: createRange(1600000, 2000000), zoneEloignement: createRange(1400000, 1700000) }]
  })),

  // Apply Sebdou Template
  ...["Sebdou", "Sabra", "Honaine", "Bensekrane", "Sidi Djilali", "Ouled Mimoun", "Beni Boussaid", "Ain Tallout", "Beni Senous"].map(name => createSebdouScaleGroup(name)),

  // Apply Aricha Template
  ...["Aricha", "Bouhlou", "Ain Kebira", "Sidi Abdelli", "Bouihi", "Oued Chouly", "Beni Khellad", "Ain Nehala", "Beni Bahdel", "Djebala", "Dar Yaghoumracen", "Ouled Riah", "Amieur", "Fehoul", "Beni Mester", "El Gour"].map(name => createArichaScaleGroup(name)),

  // 5. LOWEST TIER (Souani, Msirda-Fouaka - Pages 15, 39)
  ...["Souani", "Msirda-Fouaka"].map(name => ({
    commune: name,
    individuels: [
      { label: "Standing", unit: "DA/m²", centreVille: createRange(21000, 25000), zonePeripherique: createRange(15000, 17000), zoneEloignement: createRange(10000, 12000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades", unit: "DA/m²", centreVille: createRange(12000, 14000), zonePeripherique: createRange(8000, 10000), zoneEloignement: createRange(7000, 8000) }
    ],
    terrainsAgricolesPlaine: agScaleStandardRural
  }))
];