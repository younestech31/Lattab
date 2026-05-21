import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL SCALES (Distinct sets for Tebessa)
// ============================================================================

// High Scale - Specific to Tebessa City (Page 2)
const agScaleTebessaCapital = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(2600000, 2990000), zoneEloignement: createRange(2150000, 2472500) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(2000000, 2300000), zoneEloignement: createRange(1700000, 1955000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(1800000, 2070000), zoneEloignement: createRange(1500000, 1725000) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(1040000, 1196000), zoneEloignement: createRange(860000, 989000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(800000, 920000), zoneEloignement: createRange(680000, 782000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(720000, 828000), zoneEloignement: createRange(600000, 690000) }
  ]
};

// Standard Scale - Shared by all other communes (Pages 3-29)
const agScaleStandardTebessa = {
  plaine: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(1466200, 1725000), zoneEloignement: createRange(977500, 1150000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(1368500, 1610000), zoneEloignement: createRange(879700, 1035000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(1173000, 1380000), zoneEloignement: createRange(782000, 920000) }
  ],
  pente: [
    { label: "Potentialité élevée", unit: "DA/Ha", zonePeripherique: createRange(586500, 690000), zoneEloignement: createRange(391000, 460000) },
    { label: "Potentialité moyenne", unit: "DA/Ha", zonePeripherique: createRange(547400, 644000), zoneEloignement: createRange(351900, 414000) },
    { label: "Potentialité faible", unit: "DA/Ha", zonePeripherique: createRange(469200, 552000), zoneEloignement: createRange(312800, 368000) }
  ]
};

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Tier 2: Secondary Hubs (Pages 3-10, 19)
 * Communes: Bir El Ater, Cheria, Ouenza, El Aouinet, Morsott, Hammamet, Bekkaria, Boulhef Dyr, Boukhadra
 */
const createBirElAterScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(42500, 50000), centreVille: createRange(51000, 60000), zonePeripherique: createRange(42500, 50000), zoneEloignement: createRange(34000, 40000) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(35700, 42000), centreVille: createRange(36500, 43000), zonePeripherique: createRange(28000, 33000), zoneEloignement: createRange(22900, 27000) },
    { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(34000, 40000), centreVille: createRange(34800, 41000), zonePeripherique: createRange(27200, 32000), zoneEloignement: createRange(22500, 26500) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(42000, 48000), centreVille: createRange(43000, 50000), zonePeripherique: createRange(40000, 43000), zoneEloignement: createRange(37000, 40000) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(67400, 79300), centreVille: createRange(68000, 80000), zonePeripherique: createRange(46400, 54600), zoneEloignement: createRange(38200, 45000) }
  ],
  hangars: [
    { label: "En zone urbaine", unit: "DA/m²", zoneResidentielle: createRange(28300, 33300), centreVille: createRange(35700, 42000), zonePeripherique: createRange(22400, 26400), zoneEloignement: createRange(19000, 22400) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(15900, 19100), centreVille: createRange(17000, 20400), zonePeripherique: createRange(12500, 15100), zoneEloignement: createRange(9200, 11200) }
  ],
  terrainsAgricolesPlaine: agScaleStandardTebessa.plaine,
  terrainsAgricolesPente: agScaleStandardTebessa.pente
});

/**
 * Tier 3: Minor/Rural Communes (Pages 11-18, 20-29)
 * Communes: El Ogla, Kouif, El Ma Labiod, Bir Mokkadem, Negrine, Oum Ali, El Houidjbet, Ain Zarga, etc.
 */
const createElOglaScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(35700, 42000), centreVille: createRange(36000, 43000), zonePeripherique: createRange(31200, 36800), zoneEloignement: createRange(27200, 32100) },
    { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(29700, 35000), centreVille: createRange(31400, 37000), zonePeripherique: createRange(26300, 31000), zoneEloignement: createRange(21200, 25000) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(34000, 40000), centreVille: createRange(28900, 34000), zonePeripherique: createRange(24600, 28900), zoneEloignement: createRange(20900, 24600) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(58600, 69000), centreVille: createRange(68400, 80500), zonePeripherique: createRange(40700, 47150), zoneEloignement: createRange(34200, 40250) }
  ],
  hangars: [
    { label: "En zone urbaine", unit: "DA/m²", zoneResidentielle: createRange(24600, 29000), centreVille: createRange(31100, 36600), zonePeripherique: createRange(19500, 23000), zoneEloignement: createRange(16500, 19500) }
  ],
  terrainsNus: [
    { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(7800, 9200), centreVille: createRange(9300, 11000), zonePeripherique: createRange(5100, 6000), zoneEloignement: createRange(3900, 4600) }
  ],
  terrainsAgricolesPlaine: agScaleStandardTebessa.plaine,
  terrainsAgricolesPente: agScaleStandardTebessa.pente
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

export const tebessaPriceReferenceTransactions: PriceRefCommune[] = [
  // 1. TEBESSA CITY (Capital - Page 2)
  {
    commune: "Tebessa",
    individuels: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(69000, 77000), centreVille: createRange(70000, 80000), zonePeripherique: createRange(57300, 64000), zoneEloignement: createRange(44600, 53000) },
      { label: "Amélioré", unit: "DA/m²", zoneResidentielle: createRange(46700, 55000), centreVille: createRange(47600, 56100), zonePeripherique: createRange(34400, 40500), zoneEloignement: createRange(24800, 29300) },
      { label: "Economique", unit: "DA/m²", zoneResidentielle: createRange(36400, 42900), centreVille: createRange(37000, 45000), zonePeripherique: createRange(28700, 33800), zoneEloignement: createRange(24800, 27700) },
      { label: "Précaire", unit: "DA/m²", zoneResidentielle: createRange(28700, 33800), centreVille: createRange(30000, 35400), zonePeripherique: createRange(23500, 27700), zoneEloignement: createRange(20200, 22500) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²", zoneResidentielle: createRange(67000, 75000), centreVille: createRange(69000, 77000), zonePeripherique: createRange(39800, 46600), zoneEloignement: createRange(32000, 37500) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²", zoneResidentielle: createRange(85000, 100000), centreVille: createRange(127500, 150000), zonePeripherique: createRange(58600, 69000), zoneEloignement: createRange(40000, 46000) }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²", zoneResidentielle: createRange(30800, 36300), centreVille: createRange(38930, 45800), zonePeripherique: createRange(24300, 28700), zoneEloignement: createRange(20000, 23000) }
    ],
    terrainsNus: [
      { label: "Pleine propriété 02 façades + raccordements", unit: "DA/m²", zoneResidentielle: createRange(25500, 30000), centreVille: createRange(35200, 42000), zonePeripherique: createRange(18200, 22000), zoneEloignement: createRange(9000, 10500) }
    ],
    terrainsAgricolesPlaine: agScaleTebessaCapital.plaine,
    terrainsAgricolesPente: agScaleTebessaCapital.pente
  },

  // 2. SECONDARY HUBS (Applying Template)
  ...["Bir El Ater", "Cheria", "Ouenza", "El Aouinet", "Morsott", "Hammamet", "Bekkaria", "Boulhef Dyr", "Boukhadra"].map(name => createBirElAterScaleGroup(name)),

  // 3. RURAL COMMUNES (Applying Template)
  ...["El Ogla", "Kouif", "El Ma Labiod", "Bir Mokkadem", "Negrine", "Oum Ali", "El Houidjbet", "Ain Zarga", "El M'ridj", "Ferkane", "Saf Saf El Ouesra", "Thlidjene", "El Mazraa", "Gourigueur", "Bir Dhab", "Bedjen", "Stah Guentis", "El Ogla Malha"].map(name => createElOglaScaleGroup(name))
];