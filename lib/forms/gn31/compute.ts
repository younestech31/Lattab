import { GN31FormData } from './schema';

export interface GN31Summary {
  propertyTypeName: {
    ar: string;
    fr: string;
  };
  occupantSummary: string;
  totalAreaDisplay: string;
  declarationTypeName: {
    ar: string;
    fr: string;
  };
}

export function computeGN31(data: GN31FormData): GN31Summary {
  const natureLabels: Record<string, { ar: string; fr: string }> = {
    individuel: { ar: 'سكن فردي (فيلا)', fr: 'Logement individuel (Villa)' },
    appartement: { ar: 'شقة في عمارة جماعية', fr: 'Appartement en copropriété' },
    collectif: { ar: 'مبنى جماعي / شبه جماعي', fr: 'Immeuble collectif' },
    professionnel: { ar: 'محل ذو استعمال مهني / تجاري', fr: 'Local à usage professionnel' },
    terrain: { ar: 'قطعة أرض / ملكية غير مبنية', fr: 'Propriété non bâtie / Terrain' },
  };

  const declLabels: Record<string, { ar: string; fr: string }> = {
    first_year: {
      ar: 'السنة الأولى من تطبيق الرسم العقاري',
      fr: 'Première année d\'application de la taxe foncière',
    },
    change: {
      ar: 'التغيير في الهيكل أو في التخصيص',
      fr: 'Changement de structure ou d\'affectation',
    },
  };

  const occupantSummary =
    data.occupantType === 'physique'
      ? `${data.nomPrenom || 'المصرح'} (${data.qualitePhysique === 'proprietaire' ? 'مالك / شاغل' : 'منتفع'})`
      : `${data.nomSociete || 'الشركة'} (${data.qualiteMorale === 'proprietaire' ? 'مالك' : 'صاحب امتياز'})`;

  let totalAreaDisplay = '';
  if (data.natureBien === 'terrain') {
    if (data.surfaceAgricoleIrriguee > 0 || data.surfaceAgricoleNonIrriguee > 0) {
      const totHectares = (data.surfaceAgricoleIrriguee || 0) + (data.surfaceAgricoleNonIrriguee || 0);
      totalAreaDisplay = `${totHectares} هكتار`;
    } else {
      totalAreaDisplay = `${data.surfaceTerrainConstructible || 0} م²`;
    }
  } else {
    totalAreaDisplay = `${data.superficieTotale || 0} م²`;
  }

  return {
    propertyTypeName: natureLabels[data.natureBien] || { ar: 'ملكية عقارية', fr: 'Propriété immobilière' },
    occupantSummary,
    totalAreaDisplay,
    declarationTypeName: declLabels[data.declarationType] || { ar: 'تصريح عقاري', fr: 'Déclaration foncière' },
  };
}
