import { PriceRefCommune } from '../types';

const createRange = (min: number, max: number) => ({ min, max });

// ============================================================================
// REFERENCE GRID DEFINITIONS (EXACT FROM PDF)
// ============================================================================

/** 
 * GRID A: High Urban (Tlemcen City - Page 2) 
 * Standing Centre: 240-280
 */
const getTlemcenCityGrid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(320, 370), centreVille: createRange(240, 280), zonePeripherique: createRange(200, 250), zoneEloignement: createRange(140, 170) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 350), centreVille: createRange(220, 260), zonePeripherique: createRange(180, 220), zoneEloignement: createRange(120, 150) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(250, 300), centreVille: createRange(190, 230), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(100, 120) },
    { label: "Précaire", unit: "DA/m²/Mois", zoneResidentielle: createRange(200, 250), centreVille: createRange(170, 200), zonePeripherique: createRange(100, 120), zoneEloignement: createRange(85, 100) }
  ],
  collectifsSemiCollectifs: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(380, 420), centreVille: createRange(300, 350), zonePeripherique: createRange(260, 290), zoneEloignement: createRange(200, 250) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(1000, 1200), centreVille: createRange(1800, 2000), zonePeripherique: createRange(800, 1000), zoneEloignement: createRange(300, 350) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(6600, 12500), zoneEloignement: createRange(5800, 11600) }]
});

/** 
 * GRID B: Rural High (Sebdou Scale - Page 3) 
 * Standing Centre: 160-190
 */
const getRuralHigh160Grid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(160, 190), zonePeripherique: createRange(140, 170), zoneEloignement: createRange(120, 140) },
    { label: "Amélioré", unit: "DA/m²/Mois", centreVille: createRange(140, 170), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(100, 120) },
    { label: "Economique", unit: "DA/m²/Mois", centreVille: createRange(135, 160), zonePeripherique: createRange(120, 140), zoneEloignement: createRange(85, 100) },
    { label: "Précaire", unit: "DA/m²/Mois", centreVille: createRange(90, 110), zonePeripherique: createRange(70, 80), zoneEloignement: createRange(60, 70) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(180, 210), zonePeripherique: createRange(140, 170), zoneEloignement: createRange(135, 160) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3700, 8300), zoneEloignement: createRange(2900, 6200) }]
});

/** 
 * GRID C: Rural Standard (El Gour Scale - Page 4) 
 * Standing Centre: 140-170
 */
const getRuralStandard140Grid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(140, 170), zonePeripherique: createRange(120, 140), zoneEloignement: createRange(85, 100) },
    { label: "Amélioré", unit: "DA/m²/Mois", centreVille: createRange(135, 160), zonePeripherique: createRange(110, 130), zoneEloignement: createRange(70, 80) },
    { label: "Economique", unit: "DA/m²/Mois", centreVille: createRange(120, 150), zonePeripherique: createRange(90, 110), zoneEloignement: createRange(60, 70) },
    { label: "Précaire", unit: "DA/m²/Mois", centreVille: createRange(70, 80), zonePeripherique: createRange(50, 60), zoneEloignement: createRange(40, 50) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", centreVille: createRange(110, 130), zonePeripherique: createRange(70, 80), zoneEloignement: createRange(60, 70) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3300, 6600), zoneEloignement: createRange(2500, 5000) }]
});

/** 
 * GRID D: Mid-Urban (Nedroma Scale - Page 25) 
 * Standing Résidentielle: 250-300
 */
const getMidUrban250Grid = (name: string): PriceRefCommune => ({
  commune: name,
  individuels: [
    { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(250, 300), centreVille: createRange(200, 250), zonePeripherique: createRange(150, 180), zoneEloignement: createRange(120, 150) },
    { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(200, 250), centreVille: createRange(170, 200), zonePeripherique: createRange(140, 170), zoneEloignement: createRange(100, 120) },
    { label: "Economique", unit: "DA/m²/Mois", zoneResidentielle: createRange(170, 200), centreVille: createRange(120, 150), zonePeripherique: createRange(100, 120), zoneEloignement: createRange(85, 100) }
  ],
  locauxCommerciaux: [
    { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(250, 300), centreVille: createRange(350, 400), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(85, 100) }
  ],
  terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3300, 7900), zoneEloignement: createRange(2500, 7100) }]
});

// ============================================================================
// DATA CONFIGURATION (BY PAGE)
// ============================================================================

export const tlemcenRentalReferenceTransactions: PriceRefCommune[] = [
  getTlemcenCityGrid("Tlemcen"),                 // Page 2
  getRuralHigh160Grid("Sebdou"),                 // Page 3
  getRuralStandard140Grid("El Gour"),            // Page 4
  getRuralHigh160Grid("Sabra"),                  // Page 5
  getRuralStandard140Grid("Bouhlou"),            // Page 6
  getRuralHigh160Grid("Fellaoucene"),            // Page 7
  getRuralStandard140Grid("Ain Fetah"),          // Page 8
  getRuralHigh160Grid("Bensekrane"),             // Page 9
  getRuralStandard140Grid("Sidi Abdelli"),       // Page 10
  getRuralHigh160Grid("Sidi Djilali"),           // Page 11
  getRuralStandard140Grid("Bouihi"),              // Page 12
  getRuralHigh160Grid("Ouled Mimoun"),           // Page 13
  getRuralStandard140Grid("Beni Smyel"),         // Page 14
  getRuralHigh160Grid("Bab El Assa"),            // Page 15
  getRuralStandard140Grid("Souani"),              // Page 16
  
  // Page 17: Honaine (Unique Variant)
  {
    commune: "Honaine",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(170, 200), centreVille: createRange(160, 190), zonePeripherique: createRange(140, 170), zoneEloignement: createRange(120, 140) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(150, 180), centreVille: createRange(140, 170), zonePeripherique: createRange(130, 150), zoneEloignement: createRange(100, 120) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3300, 6600), zoneEloignement: createRange(2900, 6200) }]
  },

  getRuralStandard140Grid("Beni Khellad"),       // Page 18
  getRuralHigh160Grid("Beni Boussaid"),          // Page 19
  getRuralStandard140Grid("Sidi Medjahed"),      // Page 20
  getRuralHigh160Grid("Ain Tallout"),            // Page 21
  getRuralStandard140Grid("Ain Nehala"),         // Page 22
  getRuralHigh160Grid("Beni Senous"),            // Page 23
  getRuralStandard140Grid("El Azail"),           // Page 24
  getMidUrban250Grid("Nedroma"),                 // Page 25
  getRuralStandard140Grid("Djebala"),            // Page 26
  getMidUrban250Grid("Ghazaouet"),               // Page 27
  getRuralStandard140Grid("Dar Yaghoumracen"),   // Page 28
  getMidUrban250Grid("Hennaya"),                 // Page 29
  getRuralStandard140Grid("Zenata"),             // Page 30
  getMidUrban250Grid("Chetouane"),               // Page 31
  getRuralStandard140Grid("Ain Fezza"),          // Page 32

  // Page 33: Maghnia (Unique Table)
  {
    commune: "Maghnia",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(500, 800), centreVille: createRange(400, 500), zonePeripherique: createRange(250, 350), zoneEloignement: createRange(200, 250) },
      { label: "Amélioré", unit: "DA/m²/Mois", zoneResidentielle: createRange(400, 450), centreVille: createRange(300, 400), zonePeripherique: createRange(250, 300), zoneEloignement: createRange(180, 200) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(8400, 25000), zoneEloignement: createRange(6600, 20800) }]
  },

  // Page 34: Hammam Boughrara (Unique Table)
  {
    commune: "Hammam Boughrara",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", centreVille: createRange(280, 340), zonePeripherique: createRange(240, 300), zoneEloignement: createRange(169, 200) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(6600, 16600), zoneEloignement: createRange(5000, 14200) }]
  },

  getMidUrban250Grid("Remchi"),                  // Page 35
  getRuralStandard140Grid("Ain Youcef"),         // Page 36

  // Page 37: Mansourah (Unique Table)
  {
    commune: "Mansourah",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(300, 350), centreVille: createRange(250, 300), zonePeripherique: createRange(200, 250), zoneEloignement: createRange(170, 200) }
    ],
    locauxCommerciaux: [
      { label: "Artère hautement commerciale", unit: "DA/m²/Mois", zoneResidentielle: createRange(980, 1180), centreVille: createRange(1780, 1980), zonePeripherique: createRange(780, 980), zoneEloignement: createRange(280, 330) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(4200, 12500), zoneEloignement: createRange(3300, 8300) }]
  },

  getRuralStandard140Grid("Ain Ghraba"),         // Page 38

  // Page 39: Marsa Ben Mhidi (Unique Table)
  {
    commune: "Marsa Ben Mhidi",
    individuels: [
      { label: "Standing", unit: "DA/m²/Mois", zoneResidentielle: createRange(250, 300), centreVille: createRange(230, 270), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(85, 100) }
    ],
    terrainsAgricolesPlaine: [{ label: "Elevée", unit: "DA/Ha/Mois", zonePeripherique: createRange(3700, 8300), zoneEloignement: createRange(2500, 6200) }]
  },

  getRuralStandard140Grid("Msirda- Fouaka"),     // Page 40
  getRuralStandard140Grid("Terny"),              // Page 41
  getRuralStandard140Grid("Beni Mester"),        // Page 42
  getRuralStandard140Grid("Beni Ouassous"),      // Page 43
  getRuralStandard140Grid("Sebaa Chioukh"),      // Page 44
  getRuralStandard140Grid("Fehoul"),             // Page 45
  getRuralStandard140Grid("Amieur"),             // Page 46
  getRuralStandard140Grid("Ouled Riah"),         // Page 47
  getRuralStandard140Grid("Souahlia"),           // Page 48
  getRuralStandard140Grid("Tianet"),             // Page 49
  getRuralStandard140Grid("Beni Bahdel"),        // Page 50
  getRuralStandard140Grid("Souketlata"),         // Page 51
  getRuralStandard140Grid("Oued chouly"),        // Page 52
  getRuralStandard140Grid("Ain Kebira"),         // Page 53
  getRuralStandard140Grid("Aricha")              // Page 54
];