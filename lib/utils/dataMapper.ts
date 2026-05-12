import { oranLocationsReference } from '../data/oran-price-reference-locations';
import { oranPriceReference } from '../data/oran-price-reference-transactions';

const categoryMap = [
  { key: 'individuels', name: 'Individuels' },
  { key: 'collectifsSemiCollectifs', name: 'Collectifs et Semi-Collectifs' },
  { key: 'locauxCommerciaux', name: 'Locaux Commerciaux et Locaux à Usage Professionnels' },
  { key: 'hangars', name: 'Hangars' },
  { key: 'terrainsNus', name: 'Terrains Nus' },
  { key: 'terrainsAgricolesPlaine', name: 'Terrains Agricoles en Plaine' },
  { key: 'terrainsAgricolesPente', name: 'Terrains Agricoles en Pente' },
];

export const getPricesForCalculator = (regionId: string, calculationMode: 'sale' | 'rent') => {
  const dataSource = calculationMode === 'sale' ? oranPriceReference : oranLocationsReference;
  const commune = dataSource.find(c => c.commune === regionId);
  
  if (!commune) return null;

  return {
    categories: categoryMap.map(catMap => {
      const catData = commune[catMap.key as keyof typeof commune];
      if (!catData || !Array.isArray(catData)) return null;

      return {
        categorie: catMap.name,
        types: catData.map((t: any) => {
          const zones: Record<string, any> = {};
          if (t.zoneResidentielle) {
            if (calculationMode === 'sale') {
              zones['Zone résidentielle'] = { min: t.zoneResidentielle.min, max: t.zoneResidentielle.max };
            } else {
              zones['Zone résidentielle'] = { rent_min: t.zoneResidentielle.min, rent_max: t.zoneResidentielle.max };
            }
          }
          if (t.centreVille) {
            if (calculationMode === 'sale') {
              zones['Centre ville'] = { min: t.centreVille.min, max: t.centreVille.max };
            } else {
              zones['Centre ville'] = { rent_min: t.centreVille.min, rent_max: t.centreVille.max };
            }
          }
          if (t.zonePeripherique) {
            if (calculationMode === 'sale') {
              zones['Zone périphérique'] = { min: t.zonePeripherique.min, max: t.zonePeripherique.max };
            } else {
              zones['Zone périphérique'] = { rent_min: t.zonePeripherique.min, rent_max: t.zonePeripherique.max };
            }
          }
          if (t.zoneEloignement) {
            if (calculationMode === 'sale') {
              zones['Zone d\'éloignement'] = { min: t.zoneEloignement.min, max: t.zoneEloignement.max };
            } else {
              zones['Zone d\'éloignement'] = { rent_min: t.zoneEloignement.min, rent_max: t.zoneEloignement.max };
            }
          }

          return {
            type: t.label,
            unit: t.unit,
            zones
          };
        }).filter((t: any) => Object.keys(t.zones).length > 0)
      };
    }).filter((cat: any) => cat && cat.types && cat.types.length > 0)
  };
};
