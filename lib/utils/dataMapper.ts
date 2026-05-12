import { oranFtrLocations } from '../data/oran_ftr_locations_data';
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
  if (calculationMode === 'sale') {
    const commune = oranPriceReference.find(c => c.commune === regionId);
    if (!commune) return null;

    return {
      categories: categoryMap.map(catMap => {
        const catData = commune[catMap.key as keyof typeof commune];
        if (!catData || !Array.isArray(catData)) return null;

        return {
          categorie: catMap.name,
          types: catData.map((t: any) => {
            const zones: Record<string, any> = {};
            if (t.zoneResidentielle) zones['Zone résidentielle'] = { min: t.zoneResidentielle.min, max: t.zoneResidentielle.max };
            if (t.centreVille) zones['Centre ville'] = { min: t.centreVille.min, max: t.centreVille.max };
            if (t.zonePeripherique) zones['Zone périphérique'] = { min: t.zonePeripherique.min, max: t.zonePeripherique.max };
            if (t.zoneEloignement) zones['Zone d\'éloignement'] = { min: t.zoneEloignement.min, max: t.zoneEloignement.max };

            return {
              type: t.label,
              unit: t.unit,
              zones
            };
          }).filter((t: any) => Object.keys(t.zones).length > 0)
        };
      }).filter((cat: any) => cat && cat.types && cat.types.length > 0)
    };
  }

  // Rent mode
  const rentCommune = oranFtrLocations.communes.find(c => {
    const ref = regionId.toLowerCase().replace(/[^a-z]/g, '');
    const target = c.commune.toLowerCase().replace(/[^a-z]/g, '');
    return ref === target || target.includes(ref) || ref.includes(target);
  });
  
  if (!rentCommune) return null;

  return {
    categories: rentCommune.categories.map(cat => ({
      categorie: cat.nature,
      types: cat.types.map(t => ({
        type: t.type,
        unit: 'DA/m²', // Rent is typically per m² unless specified
        zones: rentCommune.zones.reduce((acc: any, zone: string, idx: number) => {
          if (t.values[idx]?.[0] !== undefined && t.values[idx]?.[1] !== undefined) {
             acc[zone] = { rent_min: t.values[idx][0], rent_max: t.values[idx][1] };
          }
          return acc;
        }, {})
      })).filter(t => Object.keys(t.zones).length > 0)
    })).filter(cat => cat.types.length > 0)
  };
};
