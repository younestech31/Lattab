import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED AGRICULTURAL RENTAL SCALES (Variations exist in Tebessa)
// ============================================================================

const agScaleTebessaCapitalRent = [
  { label: "Potentialité élevée", unit: "DA/Ha/Mois", zoneEloignement: createRange(6800, 7820) },
  { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zoneEloignement: createRange(5440, 6256) },
  { label: "Potentialité faible", unit: "DA/Ha/Mois", zoneEloignement: createRange(4080, 4692) }
];

const agScaleStandardRuralRent = [
  { label: "Potentialité élevée", unit: "DA/Ha/Mois", zoneEloignement: createRange(4900, 5635) },
  { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zoneEloignement: createRange(4200, 4830) },
  { label: "Potentialité faible", unit: "DA/Ha/Mois", zoneEloignement: createRange(3000, 3450) }
];

const agScaleSecondaryHubRent = [
  { label: "Potentialité élevée", unit: "DA/Ha/Mois", zoneEloignement: createRange(3675, 4426) },
  { label: "Potentialité moyenne", unit: "DA/Ha/Mois", zoneEloignement: createRange(3130, 3599) },
  { label: "Potentialité faible", unit: "DA/Ha/Mois", zoneEloignement: createRange(2352, 2705) }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Group 2: Secondary Urban Hubs (Pages 3-10, 19)
 * Bir El Ater, Cheria, Ouenza, El Aouinet, Morsott, Hammamet, Bekkaria, Boulhef Dyr, Boukhadra
 */
const createSecondaryUrbanHubRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(125, 152), centreVille: createRange(155, 186), zonePeripherique: createRange(100, 123), zoneEloignement: createRange(80, 100) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(100, 123), centreVille: createRange(127, 154), zonePeripherique: createRange(78, 98), zoneEloignement: createRange(59, 76) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(92, 106), centreVille: createRange(109, 126), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(67, 77) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(600, 690), centreVille: createRange(700, 805), zonePeripherique: createRange(350, 403), zoneEloignement: createRange(300, 345) }
  ],
  hangars: [
    { label: "Zone urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(75, 87), zoneEloignement: createRange(65, 75) }
  ],
  terrainsAgricolesPlaine: (name === "Bir El Ater") ? 
    [{ label: "Potentialité élevée", unit: "DA/Ha/Mois", zoneEloignement: createRange(5250, 6037) }] : 
    (name === "Morsott") ? agScaleStandardRuralRent : agScaleSecondaryHubRent
});

/**
 * Group 3: Minor/Rural Communes (Pages 11-18, 20-28)
 * El Ogla, Kouif, Bir Mokkadem, Negrine, Oum Ali, El Houidjbet, El Ogla Malha, 
 * El M'ridj, Ain Zarga, Ferkane, Saf Saf El Ouesra, Thlidjene, El Mazraa, 
 * Gourigueur, Bir Dhab, Bedjen, Stah Guentis
 */
const createRuralCommuneRent = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(125, 152), centreVille: createRange(155, 186), zonePeripherique: createRange(100, 123), zoneEloignement: createRange(80, 100) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(100, 123), centreVille: createRange(127, 154), zonePeripherique: createRange(78, 98), zoneEloignement: createRange(59, 76) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(55, 64), centreVille: createRange(63, 73), zonePeripherique: createRange(46, 53), zoneEloignement: createRange(40, 46) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(400, 460), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(200, 230) }
  ],
  terrainsAgricolesPlaine: (name === "El Houidjbet") ? 
    [{ label: "Potentialité élevée", unit: "DA/Ha/Mois", zoneEloignement: createRange(6000, 6900) }] : 
    agScaleStandardRuralRent
});

// ============================================================================
// DATA EXPORT
// ============================================================================

export const tebessaRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. TEBESSA CITY (Page 2)
  {
    commune: "Tebessa",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(217, 257), centreVille: createRange(259, 306), zonePeripherique: createRange(192, 229), zoneEloignement: createRange(159, 191) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(175, 209), centreVille: createRange(213, 253), zonePeripherique: createRange(145, 175), zoneEloignement: createRange(119, 145) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(171, 197), centreVille: createRange(200, 230), zonePeripherique: createRange(146, 168), zoneEloignement: createRange(125, 144) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(700, 805), centreVille: createRange(900, 1035), zonePeripherique: createRange(450, 518), zoneEloignement: createRange(350, 403) }
    ],
    hangars: [
      { label: "Zone urbaine", unit: "DA/m²/Mois", zonePeripherique: createRange(100, 150), zoneEloignement: createRange(80, 90) }
    ],
    terrainsAgricolesPlaine: agScaleTebessaCapitalRent
  },

  // 2. SECONDARY URBAN CENTERS
  ...["Bir El Ater", "Cheria", "Ouenza", "El Aouinet", "Morsott", "Hammamet", "Bekkaria", "Boulhef Dyr", "Boukhadra"].map(name => createSecondaryUrbanHubRent(name)),

  // 3. RURAL/MINOR CENTERS
  ...["El Ogla", "Kouif", "Bir Mokkadem", "Negrine", "Oum Ali", "El Houidjbet", "El Ogla Malha", "El M'ridj", "Ain Zarga", "Ferkane", "Saf Saf El Ouesra", "Thlidjene", "El Mazraa", "Gourigueur", "Bir Dhab", "Bedjen", "Stah Guentis"].map(name => createRuralCommuneRent(name))
];