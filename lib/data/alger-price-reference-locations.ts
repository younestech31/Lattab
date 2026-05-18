// alger-locations-2025-2026.ts
// Source: Termes de références relatifs aux locations d'immeubles - Wilaya d'Alger 2025-2026

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

export const algerLocationsReference: CommuneData[] =[
  {
    commune: "Casbah",
    individuels:[
      { label: "Standing", centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(420, 483), zonePeripherique: createRange(380, 437), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(300, 345), zonePeripherique: createRange(260, 299), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(260, 299), zonePeripherique: createRange(220, 253), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(220, 253), zonePeripherique: createRange(180, 207), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(2000, 2300), zonePeripherique: createRange(1900, 2185), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(1600, 1840), zonePeripherique: createRange(1500, 1725), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(1200, 1380), zonePeripherique: createRange(1100, 1265), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(260, 299), zonePeripherique: createRange(220, 253), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(220, 253), zonePeripherique: createRange(180, 207), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Alger Centre",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(860, 989), centreVille: createRange(820, 943), zonePeripherique: createRange(780, 897), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(820, 943), centreVille: createRange(780, 897), zonePeripherique: createRange(740, 851), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(780, 897), centreVille: createRange(740, 851), zonePeripherique: createRange(700, 805), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(740, 851), centreVille: createRange(700, 805), zonePeripherique: createRange(660, 759), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(700, 805), centreVille: createRange(660, 759), zonePeripherique: createRange(620, 713), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(2800, 3220), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2900, 3335), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2400, 2760), centreVille: createRange(2600, 2990), zonePeripherique: createRange(2500, 2875), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(2000, 2300), centreVille: createRange(2200, 2530), zonePeripherique: createRange(2100, 2415), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Sidi M'hamed",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(860, 989), centreVille: createRange(820, 943), zonePeripherique: createRange(780, 897), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(820, 943), centreVille: createRange(780, 897), zonePeripherique: createRange(740, 851), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(780, 897), centreVille: createRange(740, 851), zonePeripherique: createRange(700, 805), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(740, 851), centreVille: createRange(700, 805), zonePeripherique: createRange(660, 759), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(700, 805), centreVille: createRange(660, 759), zonePeripherique: createRange(620, 713), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(2800, 3220), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2900, 3335), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2400, 2760), centreVille: createRange(2600, 2990), zonePeripherique: createRange(2500, 2875), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(2000, 2300), centreVille: createRange(2200, 2530), zonePeripherique: createRange(2100, 2415), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Belouizdad",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(580, 667), centreVille: createRange(540, 621), zonePeripherique: createRange(500, 575), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(540, 621), centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(500, 575), centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(460, 529), centreVille: createRange(420, 483), zonePeripherique: createRange(380, 437), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(420, 483), centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(380, 437), centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(2500, 2875), centreVille: createRange(2700, 3105), zonePeripherique: createRange(2600, 2990), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2100, 2415), centreVille: createRange(2300, 2645), zonePeripherique: createRange(2200, 2530), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(1700, 1955), centreVille: createRange(1900, 2185), zonePeripherique: createRange(1800, 2070), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(420, 483), centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(380, 437), centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Hussein Dey",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(720, 828), centreVille: createRange(680, 782), zonePeripherique: createRange(640, 736), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(680, 782), centreVille: createRange(640, 736), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(640, 736), centreVille: createRange(600, 690), zonePeripherique: createRange(560, 644), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(600, 690), centreVille: createRange(560, 644), zonePeripherique: createRange(520, 598), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(560, 644), centreVille: createRange(520, 598), zonePeripherique: createRange(480, 552), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(520, 598), centreVille: createRange(480, 552), zonePeripherique: createRange(440, 506), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(480, 552), centreVille: createRange(440, 506), zonePeripherique: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(440, 506), centreVille: createRange(400, 460), zonePeripherique: createRange(360, 414), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1800, 2070), centreVille: createRange(2000, 2300), zonePeripherique: createRange(1900, 2185), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1400, 1610), centreVille: createRange(1600, 1840), zonePeripherique: createRange(1500, 1725), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(1200, 1380), zonePeripherique: createRange(1100, 1265), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(480, 552), centreVille: createRange(440, 506), zonePeripherique: createRange(400, 460), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(440, 506), centreVille: createRange(400, 460), zonePeripherique: createRange(360, 414), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Kouba",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(960, 1104), centreVille: createRange(920, 1058), zonePeripherique: createRange(880, 1012), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(920, 1058), centreVille: createRange(880, 1012), zonePeripherique: createRange(840, 966), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(880, 1012), centreVille: createRange(840, 966), zonePeripherique: createRange(800, 920), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(840, 966), centreVille: createRange(800, 920), zonePeripherique: createRange(760, 874), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(800, 920), centreVille: createRange(760, 874), zonePeripherique: createRange(720, 828), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(760, 874), centreVille: createRange(720, 828), zonePeripherique: createRange(680, 782), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(720, 828), centreVille: createRange(680, 782), zonePeripherique: createRange(640, 736), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(680, 782), centreVille: createRange(640, 736), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(2600, 2990), centreVille: createRange(2800, 3220), zonePeripherique: createRange(2700, 3105), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2200, 2530), centreVille: createRange(2400, 2760), zonePeripherique: createRange(2300, 2645), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(1800, 2070), centreVille: createRange(2000, 2300), zonePeripherique: createRange(1900, 2185), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(720, 828), centreVille: createRange(680, 782), zonePeripherique: createRange(640, 736), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(680, 782), centreVille: createRange(640, 736), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Bourouba",
    individuels:[
      { label: "Standing", centreVille: createRange(530, 610), zonePeripherique: createRange(490, 564), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(490, 564), zonePeripherique: createRange(450, 518), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(450, 518), zonePeripherique: createRange(410, 472), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(410, 472), zonePeripherique: createRange(370, 426), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(370, 426), zonePeripherique: createRange(330, 380), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(330, 380), zonePeripherique: createRange(290, 334), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(290, 334), zonePeripherique: createRange(250, 288), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(250, 288), zonePeripherique: createRange(210, 242), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(1900, 2185), zonePeripherique: createRange(1800, 2070), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(1500, 1725), zonePeripherique: createRange(1400, 1610), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(1100, 1265), zonePeripherique: createRange(1000, 1150), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(290, 334), zonePeripherique: createRange(250, 288), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(250, 288), zonePeripherique: createRange(210, 242), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Bach Djerrah",
    individuels:[
      { label: "Standing", centreVille: createRange(550, 633), zonePeripherique: createRange(510, 587), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(510, 587), zonePeripherique: createRange(470, 541), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(470, 541), zonePeripherique: createRange(430, 495), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(430, 495), zonePeripherique: createRange(390, 449), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", centreVille: createRange(390, 449), zonePeripherique: createRange(350, 403), unit: "DA/m²/Mois" },
      { label: "Amélioré", centreVille: createRange(350, 403), zonePeripherique: createRange(310, 357), unit: "DA/m²/Mois" },
      { label: "Economique", centreVille: createRange(310, 357), zonePeripherique: createRange(270, 311), unit: "DA/m²/Mois" },
      { label: "Précaire", centreVille: createRange(270, 311), zonePeripherique: createRange(230, 265), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", centreVille: createRange(2200, 2530), zonePeripherique: createRange(2100, 2415), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", centreVille: createRange(1800, 2070), zonePeripherique: createRange(1700, 1955), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", centreVille: createRange(1400, 1610), zonePeripherique: createRange(1300, 1495), unit: "DA/m²/Mois" },
      { label: "Artère principale", centreVille: createRange(310, 357), zonePeripherique: createRange(270, 311), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", centreVille: createRange(270, 311), zonePeripherique: createRange(230, 265), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Magharia",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(580, 667), centreVille: createRange(540, 621), zonePeripherique: createRange(500, 575), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(540, 621), centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(500, 575), centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(460, 529), centreVille: createRange(420, 483), zonePeripherique: createRange(380, 437), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(420, 483), centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(380, 437), centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(340, 391), centreVille: createRange(300, 345), zonePeripherique: createRange(260, 299), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(300, 345), centreVille: createRange(260, 299), zonePeripherique: createRange(220, 253), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1400, 1610), centreVille: createRange(1600, 1840), zonePeripherique: createRange(1500, 1725), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(1200, 1380), zonePeripherique: createRange(1100, 1265), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(600, 690), centreVille: createRange(800, 920), zonePeripherique: createRange(700, 805), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(340, 391), centreVille: createRange(300, 345), zonePeripherique: createRange(260, 299), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(300, 345), centreVille: createRange(260, 299), zonePeripherique: createRange(220, 253), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Madania",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(780, 897), centreVille: createRange(740, 851), zonePeripherique: createRange(700, 805), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(740, 851), centreVille: createRange(700, 805), zonePeripherique: createRange(660, 759), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(700, 805), centreVille: createRange(660, 759), zonePeripherique: createRange(620, 713), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(580, 667), centreVille: createRange(540, 621), zonePeripherique: createRange(500, 575), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(540, 621), centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(500, 575), centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1300, 1495), centreVille: createRange(1500, 1725), zonePeripherique: createRange(1400, 1610), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(900, 1035), centreVille: createRange(1100, 1265), zonePeripherique: createRange(1000, 1150), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(500, 575), centreVille: createRange(700, 805), zonePeripherique: createRange(600, 690), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(540, 621), centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(500, 575), centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "El Mouradia",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(1140, 1311), centreVille: createRange(1100, 1265), zonePeripherique: createRange(1060, 1219), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(1100, 1265), centreVille: createRange(1060, 1219), zonePeripherique: createRange(1020, 1173), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(1060, 1219), centreVille: createRange(1020, 1173), zonePeripherique: createRange(980, 1127), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(1020, 1173), centreVille: createRange(980, 1127), zonePeripherique: createRange(940, 1081), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(980, 1127), centreVille: createRange(940, 1081), zonePeripherique: createRange(900, 1035), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(940, 1081), centreVille: createRange(900, 1035), zonePeripherique: createRange(860, 989), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(860, 989), centreVille: createRange(820, 943), zonePeripherique: createRange(780, 897), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1500, 1725), centreVille: createRange(1700, 1955), zonePeripherique: createRange(1600, 1840), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1100, 1265), centreVille: createRange(1300, 1495), zonePeripherique: createRange(1200, 1380), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(700, 805), centreVille: createRange(900, 1035), zonePeripherique: createRange(800, 920), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(860, 989), centreVille: createRange(820, 943), zonePeripherique: createRange(780, 897), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Hydra",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(1240, 1426), centreVille: createRange(1200, 1380), zonePeripherique: createRange(1160, 1334), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(1200, 1380), centreVille: createRange(1160, 1334), zonePeripherique: createRange(1120, 1288), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(1160, 1334), centreVille: createRange(1120, 1288), zonePeripherique: createRange(1080, 1242), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(1120, 1288), centreVille: createRange(1080, 1242), zonePeripherique: createRange(1040, 1196), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(1080, 1242), centreVille: createRange(1040, 1196), zonePeripherique: createRange(1000, 1150), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(1040, 1196), centreVille: createRange(1000, 1150), zonePeripherique: createRange(960, 1104), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(960, 1104), zonePeripherique: createRange(920, 1058), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(960, 1104), centreVille: createRange(920, 1058), zonePeripherique: createRange(880, 1012), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(3000, 3450), centreVille: createRange(3200, 3680), zonePeripherique: createRange(3100, 3565), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2600, 2990), centreVille: createRange(2800, 3220), zonePeripherique: createRange(2700, 3105), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(2200, 2530), centreVille: createRange(2400, 2760), zonePeripherique: createRange(2300, 2645), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(960, 1104), zonePeripherique: createRange(920, 1058), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(960, 1104), centreVille: createRange(920, 1058), zonePeripherique: createRange(880, 1012), unit: "DA/m²/Mois" }
    ],
    hangars: [
      { label: "En zone urbaine", unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Gué de Constantine",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(660, 759), centreVille: createRange(620, 713), zonePeripherique: createRange(580, 667), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(620, 713), centreVille: createRange(580, 667), zonePeripherique: createRange(540, 621), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(580, 667), centreVille: createRange(540, 621), zonePeripherique: createRange(500, 575), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(540, 621), centreVille: createRange(500, 575), zonePeripherique: createRange(460, 529), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(500, 575), centreVille: createRange(460, 529), zonePeripherique: createRange(420, 483), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(460, 529), centreVille: createRange(420, 483), zonePeripherique: createRange(380, 437), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(420, 483), centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(380, 437), centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(1800, 2070), centreVille: createRange(2000, 2300), zonePeripherique: createRange(1900, 2185), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(1400, 1610), centreVille: createRange(1600, 1840), zonePeripherique: createRange(1500, 1725), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(1200, 1380), zonePeripherique: createRange(1100, 1265), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(420, 483), centreVille: createRange(380, 437), zonePeripherique: createRange(340, 391), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(380, 437), centreVille: createRange(340, 391), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Bir Mourad Rais",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(1180, 1357), centreVille: createRange(1140, 1311), zonePeripherique: createRange(1100, 1265), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(1140, 1311), centreVille: createRange(1100, 1265), zonePeripherique: createRange(1060, 1219), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(1100, 1265), centreVille: createRange(1060, 1219), zonePeripherique: createRange(1020, 1173), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(1060, 1219), centreVille: createRange(1020, 1173), zonePeripherique: createRange(980, 1127), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(1020, 1173), centreVille: createRange(980, 1127), zonePeripherique: createRange(940, 1081), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(980, 1127), centreVille: createRange(940, 1081), zonePeripherique: createRange(900, 1035), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(940, 1081), centreVille: createRange(900, 1035), zonePeripherique: createRange(860, 989), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(3300, 3795), centreVille: createRange(3500, 4025), zonePeripherique: createRange(3400, 3910), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2900, 3335), centreVille: createRange(3100, 3565), zonePeripherique: createRange(3000, 3450), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(2500, 2875), centreVille: createRange(2700, 3105), zonePeripherique: createRange(2600, 2990), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(940, 1081), centreVille: createRange(900, 1035), zonePeripherique: createRange(860, 989), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(900, 1035), centreVille: createRange(860, 989), zonePeripherique: createRange(820, 943), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Birkhadem",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(1000, 1150), centreVille: createRange(960, 1104), zonePeripherique: createRange(920, 1058), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(960, 1104), centreVille: createRange(920, 1058), zonePeripherique: createRange(880, 1012), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(920, 1058), centreVille: createRange(880, 1012), zonePeripherique: createRange(840, 966), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(880, 1012), centreVille: createRange(840, 966), zonePeripherique: createRange(800, 920), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(840, 966), centreVille: createRange(800, 920), zonePeripherique: createRange(760, 874), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(800, 920), centreVille: createRange(760, 874), zonePeripherique: createRange(720, 828), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(760, 874), centreVille: createRange(720, 828), zonePeripherique: createRange(680, 782), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(720, 828), centreVille: createRange(680, 782), zonePeripherique: createRange(640, 736), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(2800, 3220), centreVille: createRange(3000, 3450), zonePeripherique: createRange(2900, 3335), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(2400, 2760), centreVille: createRange(2600, 2990), zonePeripherique: createRange(2500, 2875), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(2000, 2300), centreVille: createRange(2200, 2530), zonePeripherique: createRange(2100, 2415), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(760, 874), centreVille: createRange(720, 828), zonePeripherique: createRange(680, 782), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(720, 828), centreVille: createRange(680, 782), zonePeripherique: createRange(640, 736), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", zoneResidentielle: createRange(200, 230), centreVille: createRange(400, 460), zonePeripherique: createRange(300, 345), unit: "DA/m²/Mois" },
      { label: "En zone rurale", unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", unit: "DA/m²/Mois" },
      { label: "Industriel", unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente: [
      { label: "Potentialité élevée", unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Tassala El Merdja",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(468, 550), centreVille: createRange(425, 500), zonePeripherique: createRange(383, 450), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(425, 500), centreVille: createRange(383, 450), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(383, 450), centreVille: createRange(340, 400), zonePeripherique: createRange(298, 350), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(340, 400), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(298, 350), centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(255, 300), centreVille: createRange(170, 200), zonePeripherique: createRange(128, 150), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(170, 200), centreVille: createRange(128, 150), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(81, 95), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(680, 800), centreVille: createRange(935, 1100), zonePeripherique: createRange(510, 600), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(595, 700), centreVille: createRange(850, 1000), zonePeripherique: createRange(425, 500), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(510, 600), centreVille: createRange(765, 900), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(298, 350), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(153, 180), centreVille: createRange(149, 175), zonePeripherique: createRange(132, 155), zoneEloignement: createRange(119, 140), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(149, 175), centreVille: createRange(132, 155), zonePeripherique: createRange(119, 140), zoneEloignement: createRange(102, 120), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(132, 155), centreVille: createRange(119, 140), zonePeripherique: createRange(102, 120), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(119, 140), centreVille: createRange(102, 120), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(68, 80), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(102, 120), centreVille: createRange(85, 100), zonePeripherique: createRange(68, 80), zoneEloignement: createRange(60, 70), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(157, 185), centreVille: createRange(153, 180), zonePeripherique: createRange(136, 160), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(87975, 103500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(87975, 103500), zoneEloignement: createRange(78200, 92000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(78200, 92000), zoneEloignement: createRange(68425, 80500), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(68425, 80500), zoneEloignement: createRange(58650, 69000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(58650, 69000), zoneEloignement: createRange(48875, 57500), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(48875, 57500), zoneEloignement: createRange(39100, 46000), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Ouled Chebel",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(468, 550), centreVille: createRange(425, 500), zonePeripherique: createRange(383, 450), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(425, 500), centreVille: createRange(383, 450), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(383, 450), centreVille: createRange(340, 400), zonePeripherique: createRange(298, 350), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(340, 400), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(298, 350), centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(255, 300), centreVille: createRange(170, 200), zonePeripherique: createRange(128, 150), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(170, 200), centreVille: createRange(128, 150), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(81, 95), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(680, 800), centreVille: createRange(935, 1100), zonePeripherique: createRange(510, 600), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(595, 700), centreVille: createRange(850, 1000), zonePeripherique: createRange(425, 500), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(510, 600), centreVille: createRange(765, 900), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(298, 350), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(153, 180), centreVille: createRange(149, 175), zonePeripherique: createRange(132, 155), zoneEloignement: createRange(119, 140), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(149, 175), centreVille: createRange(132, 155), zonePeripherique: createRange(119, 140), zoneEloignement: createRange(102, 120), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(132, 155), centreVille: createRange(119, 140), zonePeripherique: createRange(102, 120), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(119, 140), centreVille: createRange(102, 120), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(68, 80), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(102, 120), centreVille: createRange(85, 100), zonePeripherique: createRange(68, 80), zoneEloignement: createRange(60, 70), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(157, 185), centreVille: createRange(153, 180), zonePeripherique: createRange(136, 160), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(87975, 103500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(87975, 103500), zoneEloignement: createRange(78200, 92000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(78200, 92000), zoneEloignement: createRange(68425, 80500), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(68425, 80500), zoneEloignement: createRange(58650, 69000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(58650, 69000), zoneEloignement: createRange(48875, 57500), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(48875, 57500), zoneEloignement: createRange(39100, 46000), unit: "DA/Ha/Mois" }
    ]
  },
  {
    commune: "Rahmania",
    individuels:[
      { label: "Standing", zoneResidentielle: createRange(468, 550), centreVille: createRange(425, 500), zonePeripherique: createRange(383, 450), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(425, 500), centreVille: createRange(383, 450), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(383, 450), centreVille: createRange(340, 400), zonePeripherique: createRange(298, 350), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" }
    ],
    collectifsSemiCollectifs:[
      { label: "Standing", zoneResidentielle: createRange(340, 400), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "Amélioré", zoneResidentielle: createRange(298, 350), centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" },
      { label: "Economique", zoneResidentielle: createRange(255, 300), centreVille: createRange(170, 200), zonePeripherique: createRange(128, 150), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Précaire", zoneResidentielle: createRange(170, 200), centreVille: createRange(128, 150), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(81, 95), unit: "DA/m²/Mois" }
    ],
    locauxCommerciaux:[
      { label: "Artère hautement commerciale", zoneResidentielle: createRange(680, 800), centreVille: createRange(935, 1100), zonePeripherique: createRange(510, 600), zoneEloignement: createRange(340, 400), unit: "DA/m²/Mois" },
      { label: "Artère moyennement commerciale", zoneResidentielle: createRange(595, 700), centreVille: createRange(850, 1000), zonePeripherique: createRange(425, 500), zoneEloignement: createRange(298, 350), unit: "DA/m²/Mois" },
      { label: "Artère peu commerciale", zoneResidentielle: createRange(510, 600), centreVille: createRange(765, 900), zonePeripherique: createRange(340, 400), zoneEloignement: createRange(255, 300), unit: "DA/m²/Mois" },
      { label: "Artère principale", zoneResidentielle: createRange(340, 400), centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(213, 250), unit: "DA/m²/Mois" },
      { label: "Artère secondaire", zoneResidentielle: createRange(298, 350), centreVille: createRange(255, 300), zonePeripherique: createRange(213, 250), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" }
    ],
    hangars:[
      { label: "En zone urbaine", centreVille: createRange(298, 350), zonePeripherique: createRange(255, 300), zoneEloignement: createRange(170, 200), unit: "DA/m²/Mois" },
      { label: "En zone rurale", centreVille: createRange(213, 250), zonePeripherique: createRange(170, 200), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsNus:[
      { label: "Pleine propriété deux (02) façades avec raccordements", zoneResidentielle: createRange(153, 180), centreVille: createRange(149, 175), zonePeripherique: createRange(132, 155), zoneEloignement: createRange(119, 140), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade avec raccordements", zoneResidentielle: createRange(149, 175), centreVille: createRange(132, 155), zonePeripherique: createRange(119, 140), zoneEloignement: createRange(102, 120), unit: "DA/m²/Mois" },
      { label: "Pleine propriété deux (02) façades sans raccordements", zoneResidentielle: createRange(132, 155), centreVille: createRange(119, 140), zonePeripherique: createRange(102, 120), zoneEloignement: createRange(85, 100), unit: "DA/m²/Mois" },
      { label: "Pleine propriété une (01) façade sans raccordements", zoneResidentielle: createRange(119, 140), centreVille: createRange(102, 120), zonePeripherique: createRange(85, 100), zoneEloignement: createRange(68, 80), unit: "DA/m²/Mois" },
      { label: "Dans l'indivision", zoneResidentielle: createRange(102, 120), centreVille: createRange(85, 100), zonePeripherique: createRange(68, 80), zoneEloignement: createRange(60, 70), unit: "DA/m²/Mois" },
      { label: "Industriel", zoneResidentielle: createRange(157, 185), centreVille: createRange(153, 180), zonePeripherique: createRange(136, 160), zoneEloignement: createRange(128, 150), unit: "DA/m²/Mois" }
    ],
    terrainsAgricolesPlaine:[
      { label: "Potentialité élevée", zonePeripherique: createRange(97750, 115000), zoneEloignement: createRange(87975, 103500), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(87975, 103500), zoneEloignement: createRange(78200, 92000), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(78200, 92000), zoneEloignement: createRange(68425, 80500), unit: "DA/Ha/Mois" }
    ],
    terrainsAgricolesPente:[
      { label: "Potentialité élevée", zonePeripherique: createRange(68425, 80500), zoneEloignement: createRange(58650, 69000), unit: "DA/Ha/Mois" },
      { label: "Potentialité moyenne", zonePeripherique: createRange(58650, 69000), zoneEloignement: createRange(48875, 57500), unit: "DA/Ha/Mois" },
      { label: "Potentialité faible", zonePeripherique: createRange(48875, 57500), zoneEloignement: createRange(39100, 46000), unit: "DA/Ha/Mois" }
    ]
  }
];

export default algerLocationsReference;