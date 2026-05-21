import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Variations exist in Biskra)
// ============================================================================

// Standard Agricultural Scale (e.g., Biskra city, Khanguet)
const agScaleStandard = (isPente = false) => [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(395850, 455000), zoneEloignement: createRange(318500, 364000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(277550, 318500), zoneEloignement: createRange(158340, 182000) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(198380, 277500), zoneEloignement: createRange(79170, 91000) }
];

// Higher Agricultural Scale (e.g., Sidi Okba, Tolga, Ain Naga)
const agScaleHigh = () => [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(413250, 475000), zoneEloignement: createRange(332500, 380000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(289750, 332500), zoneEloignement: createRange(165300, 190000) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(207100, 237500), zoneEloignement: createRange(82650, 95000) }
];

// Maximum Agricultural Scale (e.g., El Ghrous, M'ziraa, Lioua)
const agScaleMax = () => [
  { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(435000, 500000), zoneEloignement: createRange(350000, 400000) },
  { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(305000, 350000), zoneEloignement: createRange(174000, 200000) },
  { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(218000, 250000), zoneEloignement: createRange(87000, 100000) }
];

// ============================================================================
// TIERS / TEMPLATES
// ============================================================================

// Group Tier 2: Sidi Okba, Tolga (42k Scale)
const createTier42k = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(42000, 48300), centreVille: createRange(38600, 44500), zonePeripherique: createRange(28800, 33200), zoneEloignement: createRange(21600, 24900) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(38600, 44500), centreVille: createRange(36600, 42100), zonePeripherique: createRange(25200, 29000), zoneEloignement: createRange(19800, 22800) },
    { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(36600, 42100), centreVille: createRange(31300, 36100), zonePeripherique: createRange(19200, 22100), zoneEloignement: createRange(13200, 15200) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(39700, 45700), centreVille: createRange(36600, 42100), zonePeripherique: createRange(27600, 31800), zoneEloignement: createRange(20200, 23200) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(73200, 84200), centreVille: createRange(57600, 66300), zonePeripherique: createRange(47400, 54600), zoneEloignement: createRange(36600, 42100) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(0,0), centreVille: createRange(0,0), zonePeripherique: createRange(42000, 48300), zoneEloignement: createRange(31300, 36100) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(26400, 30400), centreVille: createRange(20800, 24100), zonePeripherique: createRange(15000, 17300), zoneEloignement: createRange(3600, 4200) }
  ],
  terrainsAgricolesPlaine: agScaleHigh(),
  terrainsAgricolesPente: []
});

// Group Tier 3: Chetma, Zeribet El Oued, El Kantara, Foughala (35k Scale)
const createTier35k = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(35000, 40000), centreVille: createRange(32200, 37000), zonePeripherique: createRange(24000, 27600), zoneEloignement: createRange(18000, 21000) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(32200, 37000), centreVille: createRange(30500, 35000), zonePeripherique: createRange(21000, 24000), zoneEloignement: createRange(16500, 18900) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(33100, 38000), centreVille: createRange(30500, 35000), zonePeripherique: createRange(23000, 26400), zoneEloignement: createRange(16800, 19300) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(61000, 70000), centreVille: createRange(48000, 55000), zonePeripherique: createRange(39500, 45000), zoneEloignement: createRange(30500, 35000) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(0,0), centreVille: createRange(0,0), zonePeripherique: createRange(35000, 40000), zoneEloignement: createRange(26100, 30000) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(22000, 25000), centreVille: createRange(17400, 20000), zonePeripherique: createRange(12500, 13200), zoneEloignement: createRange(3000, 3400) }
  ],
  terrainsAgricolesPlaine: name === "Zeribet El Oued" || name === "Foughala" ? agScaleHigh() : agScaleStandard(),
  terrainsAgricolesPente: []
});

// Group Tier 4: El Ghrous, Bordj Ben Azouz, Mekhadma, M'lili, Oumache, El Hadjeb (21k Scale)
const createTier21k = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(21000, 24200), centreVille: createRange(19300, 22300), zonePeripherique: createRange(14400, 16600), zoneEloignement: createRange(10800, 12500) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(19800, 22900), centreVille: createRange(18300, 21100), zonePeripherique: createRange(13800, 15900), zoneEloignement: createRange(10000, 11600) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(36600, 42100), centreVille: createRange(28800, 33200), zonePeripherique: createRange(23700, 27300), zoneEloignement: createRange(18300, 21100) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(0,0), centreVille: createRange(0,0), zonePeripherique: createRange(21000, 24200), zoneEloignement: createRange(15600, 18100) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(13200, 15200), centreVille: createRange(10400, 12100), zonePeripherique: createRange(7500, 8600), zoneEloignement: createRange(1800, 2100) }
  ],
  terrainsAgricolesPlaine: agScaleMax(),
  terrainsAgricolesPente: []
});

// Group Tier 5: Ourlal, M'chouneche, M'ziraa, Lichana, Bouchegroune, Lioua, Djemoura (16.8k Scale)
const createTier16k = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(16800, 19400), centreVille: createRange(15400, 17800), zonePeripherique: createRange(11500, 13300), zoneEloignement: createRange(8600, 10000) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(15800, 18300), centreVille: createRange(14600, 16900), zonePeripherique: createRange(11000, 12700), zoneEloignement: createRange(8000, 9300) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(29200, 33700), centreVille: createRange(23000, 26500), zonePeripherique: createRange(18900, 21900), zoneEloignement: createRange(14600, 16900) }
  ],
  hangars: [
    { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(0,0), centreVille: createRange(0,0), zonePeripherique: createRange(16800, 19400), zoneEloignement: createRange(12500, 14500) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(10500, 12200), centreVille: createRange(8300, 9700), zonePeripherique: createRange(6000, 6900), zoneEloignement: createRange(1400, 1700) }
  ],
  terrainsAgricolesPlaine: (name === "M'chouneche" || name === "Bouchegroune" || name === "Djemoura") ? agScaleStandard() : agScaleMax(),
  terrainsAgricolesPente: []
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const biskraPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. BISKRA (Main City - Page 2)
  {
    commune: "Biskra",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(88000, 101300), centreVille: createRange(77000, 88600), zonePeripherique: createRange(47800, 55100), zoneEloignement: createRange(33000, 38000) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(77000, 88600), centreVille: createRange(70000, 81000), zonePeripherique: createRange(41800, 48100), zoneEloignement: createRange(26400, 30400) },
      { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(66000, 75900), centreVille: createRange(60500, 69600), zonePeripherique: createRange(38500, 44300), zoneEloignement: createRange(24200, 27900) },
      { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(55000, 63300), centreVille: createRange(52800, 60800), zonePeripherique: createRange(28600, 32900), zoneEloignement: createRange(19800, 22800) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(57800, 66500), centreVille: createRange(52800, 60800), zonePeripherique: createRange(45100, 51900), zoneEloignement: createRange(31900, 36700) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(95700, 110100), centreVille: createRange(91300, 105000), zonePeripherique: createRange(57700, 66500), zoneEloignement: createRange(47800, 55100) }
    ],
    hangars: [
      { label: "Urbain", unit: "DA/m²", zoneResidentielle: createRange(0,0), centreVille: createRange(0,0), zonePeripherique: createRange(77000, 88600), zoneEloignement: createRange(67000, 77200) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(55000, 63300), centreVille: createRange(52800, 60800), zonePeripherique: createRange(28600, 32900), zoneEloignement: createRange(14300, 16500) }
    ],
    terrainsAgricolesPlaine: agScaleStandard(),
    terrainsAgricolesPente: []
  },

  // Tier 42k
  createTier42k("Sidi Okba"),
  createTier42k("Tolga"),

  // Tier 35k
  createTier35k("Chetma"),
  createTier35k("Zeribet El Oued"),
  createTier35k("Foughala"),
  createTier35k("El Kantara"),

  // Tier 21k
  createTier21k("El Ghrous"),
  createTier21k("Bordj Ben Azouz"),
  createTier21k("Mekhadma"),
  createTier21k("M'lili"),
  createTier21k("Oumache"),
  createTier21k("El Hadjeb"),

  // Tier 16.8k
  createTier16k("Ourlal"),
  createTier16k("M'chouneche"),
  createTier16k("M'ziraa"),
  createTier16k("Lichana"),
  createTier16k("Bouchegroune"),
  createTier16k("Lioua"),
  createTier16k("Djemoura"),

  // Tier 13.4k
  {
    commune: "Branis",
    individuels: [{ label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(13400, 15500), centreVille: createRange(12300, 14300), zonePeripherique: createRange(9200, 10100), zoneEloignement: createRange(6900, 8000) }],
    collectifsSemiCollectifs: [], locauxCommerciaux: [], hangars: [], terrainsNus: [],
    terrainsAgricolesPlaine: agScaleStandard(), terrainsAgricolesPente: []
  },
  {
    commune: "Ain Naga",
    individuels: [{ label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(13400, 15500), centreVille: createRange(12300, 14300), zonePeripherique: createRange(9200, 10100), zoneEloignement: createRange(6900, 8000) }],
    collectifsSemiCollectifs: [], locauxCommerciaux: [], hangars: [], terrainsNus: [],
    terrainsAgricolesPlaine: agScaleHigh(), terrainsAgricolesPente: []
  },

  // Tier 10.75k (Khanguet, El Faidh, Ain Zaatout, El Haouche)
  ...["Khanguet Sidi Nadji", "El Faidh", "Ain Zaatout", "El Haouche"].map(name => ({
    commune: name,
    individuels: [{ label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(10750, 14000), centreVille: createRange(9800, 12800), zonePeripherique: createRange(7300, 9600), zoneEloignement: createRange(5500, 7200) }],
    collectifsSemiCollectifs: [], locauxCommerciaux: [], hangars: [], terrainsNus: [],
    terrainsAgricolesPlaine: name === "El Faidh" ? agScaleHigh() : agScaleStandard(),
    terrainsAgricolesPente: []
  }))
];