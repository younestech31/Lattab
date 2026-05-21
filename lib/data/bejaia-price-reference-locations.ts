import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// SHARED STANDARD SCALES (COMMON FOR ALL COMMUNES IN BEJAIA)
// ============================================================================
const terrainsAgricolesPlaineBejaiaRent = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(80000, 92000),
    zoneEloignement: createRange(40000, 46000)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(30000, 34500),
    zoneEloignement: createRange(20000, 23000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(20000, 23000),
    zoneEloignement: createRange(10000, 11500)
  }
];

const terrainsAgricolesPenteBejaiaRent = [
  {
    label: "Potentialité élevée",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(40000, 46000),
    zoneEloignement: createRange(30000, 34500)
  },
  {
    label: "Potentialité moyenne",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(30000, 34500),
    zoneEloignement: createRange(20000, 23000)
  },
  {
    label: "Potentialité faible",
    unit: "DA/Ha/Mois",
    zonePeripherique: createRange(20000, 23000),
    zoneEloignement: createRange(10000, 11500)
  }
];

// ============================================================================
// SCALE GROUP TEMPLATES
// ============================================================================

/**
 * Group 2 Template: Major Towns (Pages 3-14)
 * Communes: Akbou, Tichi, Souk el Tenine, Aokas, Melbou, El Kseur, 
 * Tala Hamza, Oued Ghir, Sidi Aich, Kherrata, Tazmalt, Ouzellaguen
 */
const createTownScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(150, 173) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(350, 403), centreVille: createRange(250, 288), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(100, 115) },
    { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(200, 230), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(50, 58) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(450, 518), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115) },
    { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(200, 230), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(50, 58) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(600, 690), centreVille: createRange(700, 805), zonePeripherique: createRange(600, 690), zoneEloignement: createRange(500, 575) },
    { label: "Artère moyennement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(600, 690), zonePeripherique: createRange(550, 633), zoneEloignement: createRange(400, 460) },
    { label: "Artère peu commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115) }
  ],
  hangars: [
    { label: "En zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(600, 690), centreVille: createRange(800, 920), zonePeripherique: createRange(400, 460), zoneEloignement: createRange(300, 345) },
    { label: "En zone rurale", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(700, 805), zonePeripherique: createRange(350, 403), zoneEloignement: createRange(250, 288) }
  ],
  terrainsNus: [
    { label: "Pleine propriété (02) façades + raccordements", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(150, 173) },
    { label: "Terrain industriel", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(700, 805), zonePeripherique: createRange(500, 575), zoneEloignement: createRange(200, 230) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaiaRent,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaiaRent
});

/**
 * Group 3 Template: Rural Communes (Pages 15-51)
 * Communes: Seddouk, Beni Ksila, Fenaia, Adekar, Feraoune, Kendira, Semaoune, etc.
 */
const createRuralScaleGroup = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(200, 230), centreVille: createRange(150, 173), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(50, 58) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(150, 173), centreVille: createRange(100, 115), zonePeripherique: createRange(50, 58), zoneEloignement: createRange(40, 46) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(100, 115), centreVille: createRange(50, 58), zonePeripherique: createRange(40, 46), zoneEloignement: createRange(30, 35) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(150, 173), centreVille: createRange(100, 115), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(150, 173), centreVille: createRange(250, 288), zonePeripherique: createRange(80, 92), zoneEloignement: createRange(70, 81) }
  ],
  hangars: [
    { label: "En zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(350, 403), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(200, 230) }
  ],
  terrainsNus: [
    { label: "Pleine propriété (02) façades + raccordements", unit: "DA/m²/Mois", zoneResidentielle: createRange(90, 104), centreVille: createRange(150, 173), zonePeripherique: createRange(100, 115), zoneEloignement: createRange(90, 104) }
  ],
  terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaiaRent,
  terrainsAgricolesPente: terrainsAgricolesPenteBejaiaRent
});

// ============================================================================
// DATA CONFIGURATION
// ============================================================================
export const bejaiaRentalReferenceTransactions: PriceRefCommune[] = [
  // 1. BEJAIA (Page 2)
  {
    commune: "Béjaia",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(600, 690), centreVille: createRange(500, 575), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(400, 460), zonePeripherique: createRange(250, 288), zoneEloignement: createRange(150, 173) },
      { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(100, 115) },
      { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 345), centreVille: createRange(200, 230), zonePeripherique: createRange(150, 173), zoneEloignement: createRange(50, 58) }
    ],
    collectifsSemiCollectifs: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), zoneEloignement: createRange(200, 230) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 460), centreVille: createRange(300, 345), zonePeripherique: createRange(200, 230), zoneEloignement: createRange(150, 173) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(800, 920), centreVille: createRange(1200, 1380), zonePeripherique: createRange(700, 805), zoneEloignement: createRange(300, 345) },
      { label: "Artère moyennement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(700, 805), centreVille: createRange(1000, 1150), zonePeripherique: createRange(600, 690), zoneEloignement: createRange(200, 230) }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois", zoneResidentielle: createRange(800, 920), centreVille: createRange(900, 1035), zonePeripherique: createRange(700, 805), zoneEloignement: createRange(600, 690) }
    ],
    terrainsNus: [
      { label: "Pleine propriété (02) façades + raccordements", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(600, 690), zonePeripherique: createRange(500, 575), zoneEloignement: createRange(400, 460) },
      { label: "Industriel", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 575), centreVille: createRange(900, 1035), zonePeripherique: createRange(800, 920), zoneEloignement: createRange(300, 345) }
    ],
    terrainsAgricolesPlaine: terrainsAgricolesPlaineBejaiaRent,
    terrainsAgricolesPente: terrainsAgricolesPenteBejaiaRent
  },

  // Group 2: Town Group (Pages 3-14)
  ...["Akbou", "Tichi", "Souk el Tenine", "Aokas", "Melbou", "El Kseur", "Tala Hamza", "Oued Ghir", "Sidi Aich", "Kherrata", "Tazmalt", "Ouzellaguen"].map(name => createTownScaleGroup(name)),

  // Group 3: Rural/Mountainous Group (Pages 15-51)
  ...["Seddouk", "Beni Ksila", "Fenaia el Maten", "Adekar", "Feraoune", "Kendira", "Semaoune", "Beni Djellil", "Taourirt Ighil", "el Flay", "Tinebdar", "Souk Oufela", "Tibane", "Tifra", "Akfadou", "Amalou", "Bouhamza", "M'cisna", "Ighram", "Chellata", "Tamokra", "Boudjellil", "Benimlikech", "Ait Rezine", "Tizi n'berbere", "Tamrijte", "Draa el Kaid", "Taskerioute", "Beni Maouche", "Ighil Ali", "Ait Smail", "Chemini", "Barbacha", "Sidi Ayad", "Timezrite", "Toudja", "Darguina"].map(name => createRuralScaleGroup(name)),

  // Group 4: Special Sub-Town Group (Pages 52-53)
  createTownScaleGroup("Boukhlifa"),
  createTownScaleGroup("Amizour")
];