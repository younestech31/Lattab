import { GN8FormData } from './schema';

export interface GN8Summary {
  taxpayerTypeName: { ar: string; fr: string };
  regimeName: { ar: string; fr: string };
  qualiteName: { ar: string; fr: string };
  isWithin30Days: boolean | null;
  daysSinceStart: number | null;
  requiredDocuments: Array<{ ar: string; fr: string }>;
  isComplete: boolean;
  missingFields: Array<{ ar: string; fr: string }>;
}

export function computeGN8(data: GN8FormData): GN8Summary {
  // Taxpayer type display
  const taxpayerTypeMap: Record<GN8FormData['taxpayerType'], { ar: string; fr: string }> = {
    physique: { ar: 'شخص طبيعي', fr: 'Personne physique' },
    morale: { ar: 'شخص معنوي (شركة)', fr: 'Personne morale (Société)' },
    auto_entrepreneur: { ar: 'مقاول ذاتي', fr: 'Auto-entrepreneur' },
    unspecified: { ar: 'لم تحدد الصفة', fr: 'Statut non sélectionné' },
  };

  // Regime display
  const regimeMap: Record<GN8FormData['regime'], { ar: string; fr: string }> = {
    ibs: { ar: 'الضريبة على أرباح الشركات (IBS)', fr: 'Impôt sur les Bénéfices des Sociétés (IBS)' },
    irg: {
      ar: `الضريبة على الدخل الإجمالي (IRG)${data.irgCategorie ? ` - صنف ${data.irgCategorie}` : ''}`,
      fr: `Impôt sur le Revenu Global (IRG)${data.irgCategorie ? ` - Catégorie ${data.irgCategorie}` : ''}`,
    },
    ifu: { ar: 'الضريبة الجزافية الوحيدة (IFU)', fr: 'Impôt Forfaitaire Unique (IFU)' },
    unspecified: { ar: 'لم يحدد النظام الجبائي', fr: 'Régime non sélectionné' },
  };

  // Declarant capacity display
  const qualiteMap: Record<GN8FormData['qualiteDeclarant'], { ar: string; fr: string }> = {
    proprietaire: { ar: 'مالك', fr: 'Propriétaire' },
    locataire: { ar: 'مستأجر', fr: 'Locataire' },
    gerant_libre: { ar: 'مسير حر', fr: 'Gérant libre' },
    gerant_salarie: { ar: 'مسير أجير', fr: 'Gérant salarié' },
    unspecified: { ar: 'لم تحدد الصفة', fr: 'Qualité non sélectionnée' },
  };

  // Days since start calculation
  let daysSinceStart: number | null = null;
  let isWithin30Days: boolean | null = null;
  if (data.dateDebutActivite) {
    const startDate = new Date(data.dateDebutActivite);
    if (!isNaN(startDate.getTime())) {
      const today = new Date();
      const diffMs = today.getTime() - startDate.getTime();
      daysSinceStart = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      isWithin30Days = daysSinceStart >= 0 && daysSinceStart <= 30;
    }
  }

  // Required documents per page 2 of official form
  const requiredDocuments: Array<{ ar: string; fr: string }> = [];
  if (data.taxpayerType === 'morale') {
    requiredDocuments.push(
      { ar: 'نسخة من القانون الأساسي للشركة', fr: 'Copie des statuts de la société' },
      { ar: 'نموذج إمضاء المسير', fr: 'Spécimen de signature du gérant' },
      { ar: 'نسخة من السجل التجاري', fr: 'Copie du registre du commerce' },
      { ar: 'نسخة من عقد الإيجار أو سند الملكية أو أي مستند يقوم مقامه', fr: 'Copie du bail, acte de propriété ou titre d\'occupation' },
      { ar: 'شهادة ميلاد رقم 12 للمسير', fr: 'Acte de naissance N° 12 du gérant' }
    );
  } else if (data.taxpayerType === 'auto_entrepreneur') {
    requiredDocuments.push(
      { ar: 'نسخة من بطاقة المقاول الذاتي', fr: 'Copie de la carte d\'auto-entrepreneur' },
      { ar: 'نسخة من الشهادة التي تتضمن رقم التعريف الجبائي (NIF)', fr: 'Copie de l\'attestation portant le NIF' },
      { ar: 'وثيقة إثبات مكان مزاولة النشاط (عقد إيجار، ملكية، شهادة إقامة أو فضاء مشترك)', fr: 'Justificatif du lieu d\'activité (bail, propriété, certificat de résidence ou coworking)' }
    );
  } else if (data.taxpayerType === 'physique') {
    // Personne physique
    requiredDocuments.push(
      { ar: 'نسخة من السجل التجاري أو كل وثيقة تقوم مقامه (اعتماد، بطاقة حرفي/فلاح)', fr: 'Copie du registre du commerce, agrément ou carte d\'artisan/agriculteur' },
      { ar: 'نسخة من عقد الإيجار أو عقد الملكية أو أي مستند يقوم مقامه', fr: 'Copie du contrat de bail ou titre de propriété' },
      { ar: 'شهادة ميلاد رقم 12 للمسير / صاحب النشاط', fr: 'Acte de naissance N° 12 de l\'exploitant' }
    );
  }

  // Missing fields validation
  const missingFields: Array<{ ar: string; fr: string }> = [];
  if (!data.nomRaisonSociale.trim()) {
    missingFields.push({ ar: 'الاسم واللقب أو التسمية الاجتماعية', fr: 'Nom ou raison sociale' });
  }
  if (!data.activitePrincipale.trim()) {
    missingFields.push({ ar: 'النشاط الرئيسي', fr: 'Activité principale' });
  }
  if (!data.adresseSiege.trim()) {
    missingFields.push({ ar: 'عنوان المقر أو مكان ممارسة النشاط', fr: 'Adresse du siège ou lieu d\'activité' });
  }
  if (!data.dateDebutActivite) {
    missingFields.push({ ar: 'تاريخ بداية النشاط', fr: 'Date de début d\'activité' });
  }

  return {
    taxpayerTypeName: taxpayerTypeMap[data.taxpayerType] || taxpayerTypeMap.physique,
    regimeName: regimeMap[data.regime] || regimeMap.ifu,
    qualiteName: qualiteMap[data.qualiteDeclarant] || qualiteMap.proprietaire,
    isWithin30Days,
    daysSinceStart,
    requiredDocuments,
    isComplete: missingFields.length === 0,
    missingFields,
  };
}
