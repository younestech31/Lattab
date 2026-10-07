export interface ServiceProcedureStep {
  name: string;
  text: string;
}

export interface ServiceData {
  slug: string;
  isPropertyRelated: boolean;
  relatedBlogSlugs: {
    ar: string[];
    fr: string[];
  };
  ar: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    targetAudience: string[];
    requiredDocuments: { category: string; items: string[] }[];
    steps: ServiceProcedureStep[];
    jurisdictionNotes: string[];
    inDepthContent: { heading: string; paragraphs: string[] }[];
    faq: { question: string; answer: string }[];
  };
  fr: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    targetAudience: string[];
    requiredDocuments: { category: string; items: string[] }[];
    steps: ServiceProcedureStep[];
    jurisdictionNotes: string[];
    inDepthContent: { heading: string; paragraphs: string[] }[];
    faq: { question: string; answer: string }[];
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'vente-immobiliere': {
    slug: 'vente-immobiliere',
    isPropertyRelated: true,
    relatedBlogSlugs: {
      ar: ['guide-acte-de-vente-immobilier', 'documents-vente-immobilier-algerie'],
      fr: ['acte-de-vente-immobilier-oran', 'comment-creer-sarl-en-algerie-2026'],
    },
    ar: {
      title: 'عقد بيع عقار في وهران',
      metaTitle: 'عقد بيع عقار في وهران — ديوان التوثيق بوهران',
      metaDescription: 'دليل توثيق عقد بيع عقار في وهران لدى مكتب التوثيق المعتمد. الشروط، الوثائق المطلوبة، إجراءات المحافظة العقارية، وحساب السعر المرجعي 2026.',
      h1: 'عقد بيع عقار في وهران — الإجراءات والتوثيق الرسمي',
      subtitle: 'توثيق رسمي ناقل للملكية العقارية مع الإشهار بالمحافظة العقارية لوهران طبقاً للقانون الجزائري',
      targetAudience: [
        'المواطنون الراغبون في شراء أو بيع شقة سكنية، فيلا، أو قطعة أرض صالحة للبناء بولاية وهران.',
        'أفراد الجالية الوطنية بالخارج المستثمرون في العقارات بالغرب الجزائري عبر وكالات رسمية.',
        'الشركات والمؤسسات التجارية الراغبة في اقتناء مقرات إدارية أو محلات تجارية أو مستودعات صناعية.',
        'المستفيدون من مشاريع الترقية العقارية الحاصلون على عقود بيع على التصاميم ويرغبون بإتمام عقد البيع النهائي.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق البائع والمشتري',
          items: [
            'بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري ساري المفعول لكل الأطراف.',
            'شهادة الميلاد الأصلية رقم 12 (أقل من ثلاثة أشهر) للأطراف والمتدخلين.',
            'الشهادة العائلية للحالة المدنية لتحديد الوضعية الأسرية (متزوج، أعزب، أرمل).',
            'الوكالة التوثيقية الأصلية في حال حضور وكيل نيابة عن أحد الأطراف.'
          ]
        },
        {
          category: 'وثائق العقار محل المعاملة',
          items: [
            'أصل سند الملكية المشهر بالمحافظة العقارية (عقد توثيقي، عقد إداري، أو شهادة توثيقية).',
            'الدفتر العقاري الفردي الأصلي المسلم من المحافظة العقارية المختصة إقليمياً.',
            'شهادة السلبية العقارية الحديثة التي تثبت خلو العقار من أي رهن أو حجز أو مانع قانوني.',
            'مخطط المسح الهندسي الصادر عن مديرية مسح الأراضي لولاية وهران يحدد المعالم والمساحة بدقة.',
            'شهادة المطابقة أو رخصة البناء الأصلية بالنسبة للمباني الفردية والترقيات الحديثة.'
          ]
        }
      ],
      steps: [
        {
          name: 'التحقق المسبق من الوضعية القانونية للعقار',
          text: 'يقوم مكتب التوثيق بدراسة سندات الملكية والتأكد من تطابق الدفتر العقاري والمسح، مع طلب شهادة الكشف العقاري السلبي من المحافظة العقارية المختصة بولاية وهران للتأكد التام من خلو العقار من أي التزام عيني.'
        },
        {
          name: 'تحديد القيمة والامتثال لجدول الأسعار المرجعية 2026',
          text: 'مراجعة ثمن المبيع بالاستناد إلى السعر المرجعي المعتمد من قبل مديرية الضرائب بوهران، لحماية الطرفين من إجراءات حق الشفعة وإعادة التقييم الضريبي، وحساب حقوق التسجيل والرسوم المستحقة قانوناً.'
        },
        {
          name: 'حضور الأطراف والتوقيع على العقد التوثيقي الرسمي',
          text: 'حضور البائع والمشتري شخصياً أو بوكلاء رسميين أمام الموثق بمقر مكتب التوثيق بحي العقيد لطفي، حيث تُتلى بنود العقد كاملة وتُثبت طريقة أداء الثمن وفقاً للتشريع المالي والبنكي الساري.'
        },
        {
          name: 'التسجيل وإجراءات الإشهار العقاري بالمحافظة العقارية',
          text: 'يتولى المكتب إيداع العقد لدى مصالح التسجيل ومفتشية الضرائب ثم توجيهه إلى المحافظة العقارية المختصة لإشهاره في السجل العقاري واستصدار الدفتر العقاري باسم المشتري الجديد.'
        }
      ],
      jurisdictionNotes: [
        'يمارس الموثق مهامه كضابط عمومي مفوض لدى محكمة فلاوسن ومجلس قضاء وهران، ويمتد اختصاصه التوثيقي لتحرير العقود لكافة التراب الوطني طبقاً للمادة 3 من القانون رقم 06-02 المنظم لمهنة التوثيق.',
        'تخضع المعاملات العقارية لأحكام الأمر 75-74 المتضمن إعداد مسح الأراضي وتأسيس السجل العقاري والقوانين المالية السارية.'
      ],
      inDepthContent: [
        {
          heading: 'القوة الإثباتية والتنفيذية لعقد البيع التوثيقي',
          paragraphs: [
            'يُعتبر العقد التوثيقي سندا رسمياً يتمتع بالقوة التنفيذية المباشرة والحجية القاطعة في مواجهة الكافة، ولا يمكن الطعن فيه إلا بسلوك دعوى التزوير الفرعية وفقاً لقانون الإجراءات المدنية والإدارية الجزائري. ويتكفل الموثق كضابط عمومي بفحص أهلية المتعاقدين وصحة رضاهم وخلو إرادتهم من أي عيب.',
            'تكتسي المعاملة التوثيقية أهمية جوهرية لمنع النزاعات الملكية والتأكد من إدماج كافة التعديلات ومخططات المسح ضمن الدفتر العقاري المودع لدى المحافظة العقارية المختصة.'
          ]
        },
        {
          heading: 'الالتزامات الضريبية والمالية وفق قانون المالية 2026',
          paragraphs: [
            'تتطلب المعاملات العقارية التوثيقية استيفاء حقوق التسجيل بنسبة محددة قانوناً، إضافة إلى رسم الإشهار العقاري وأتعاب الموثق المحددة بالتنظيم الصادر بموجب المرسوم التنفيذي رقم 08-243 المحدد لأتعاب الموثقين.',
            'يتضمن الموقع حاسبة استرشادية للسعر المرجعي للعقارات لتمكين المتعاملين من تقدير الرسوم والاطلاع على التوجيهات الجبائية المعمول بها.'
          ]
        }
      ],
      faq: [
        {
          question: 'ما هو الوقت التقديري لإشهار عقد البيع واستلام الدفتر العقاري بوهران؟',
          answer: 'يستغرق تحرير وتوقيع العقد بضعة أيام بعد استكمال الوثائق، في حين تستغرق إجراءات التسجيل والإشهار لدى المحافظة العقارية المختصة بوهران عادة ما بين شهر إلى ثلاثة أشهر بحسب سرعة معالجة الملفات لدى المحافظة العقارية.'
        },
        {
          question: 'هل يمكن شراء عقار بوهران عن طريق قرض بنكي؟',
          answer: 'نعم، يتولى المكتب التنسيق المباشر مع البنك المقرض لتحرير عقد البيع مقترناً بعقد الرهن الرسمي للدرجة الأولى لصالح البنك، واستيفاء كافة الشروط القانونية المقررة.'
        }
      ]
    },
    fr: {
      title: 'Acte de vente immobilière à Oran',
      metaTitle: 'Acte de vente immobilière à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Guide complet pour l\'acte de vente immobilière à Oran chez Office Notarial - Oran, notaire près le Tribunal de Flaussen. Procédure, pièces requises et publicité foncière.',
      h1: 'Acte de vente immobilière à Oran — Sécurité juridique et publicité foncière',
      subtitle: 'Rédaction d\'actes notariés authentiques et transfert de propriété avec publication à la Conservation Foncière d\'Oran',
      targetAudience: [
        'Particuliers désirant acheter ou vendre un appartement, une villa ou un terrain constructible dans la wilaya d\'Oran.',
        'Membres de la communauté nationale à l\'étranger (diaspora) investissant dans l\'immobilier en Algérie par procuration notariée.',
        'Entreprises et sociétés commerciales souhaitant acquérir des locaux d\'activité, bureaux ou terrains industriels.',
        'Acquéreurs de logements promotionnels en VSP (Vente sur Plans) finalisant leur acte de vente authentique définitif.'
      ],
      requiredDocuments: [
        {
          category: 'Documents d\'identité des parties',
          items: [
            'Carte nationale d\'identité biométrique ou passeport biométrique en cours de validité de toutes les parties.',
            'Acte de naissance original n° 12 de moins de trois mois pour chaque signataire.',
            'Fiche familiale d\'état civil justifiant du statut matrimonial (marié, célibataire, veuf).',
            'Procuration notariée originale et conforme si l\'un des contractants est représenté.'
          ]
        },
        {
          category: 'Pièces relatives au bien immobilier',
          items: [
            'Titre de propriété authentique publié à la Conservation Foncière (acte notarié, administratif ou attestation de transfert).',
            'Livret foncier individuel original délivré par la Conservation Foncière territorialement compétente.',
            'Certificat négatif récent attestant de l\'absence d\'hypothèque, de saisie ou de servitude grevant l\'immeuble.',
            'Extrait cadastral et plan de délimitation délivrés par la direction du cadastre de la wilaya d\'Oran.',
            'Certificat de conformité ou permis de construire original pour les constructions individuelles.'
          ]
        }
      ],
      steps: [
        {
          name: 'Vérification préalable des titres et de la situation hypothécaire',
          text: 'L\'étude notariale audite les titres de propriété, confronte les données du livret foncier avec le plan cadastral, et sollicite l\'état négatif auprès de la Conservation Foncière compétente d\'Oran pour sécuriser la transaction.'
        },
        {
          name: 'Contrôle d\'adéquation avec le référentiel des prix 2026',
          text: 'Vérification du prix déclaré au regard des valeurs vénales de référence de l\'administration fiscale à Oran, afin de prémunir les parties contre les pénalités de redressement et le droit de préemption.'
        },
        {
          name: 'Signature de l\'acte authentique de vente à l\'étude',
          text: 'Comparution en personne ou par mandataire des parties devant Office Notarial - Oran au siège de l\'office à Akid Lotfi. Lecture intégrale de l\'acte, recueil des consentements et constatation du règlement conforme aux règles financières.'
        },
        {
          name: 'Enregistrement et formalité de publicité foncière',
          text: 'L\'office notarial effectue l\'enregistrement auprès de la recette des impôts puis procède au dépôt du dossier à la Conservation Foncière pour mutation du droit réel et délivrance du livret foncier au nom de l\'acquéreur.'
        }
      ],
      jurisdictionNotes: [
        'Le notaire exerce ses fonctions d\'officier public près le Tribunal de Fellaoucène et la Cour d\'Oran, avec une compétence nationale d\'instrumentation conformément à l\'article 3 de la loi n° 06-02 portant organisation de la profession de notaire.',
        'Les actes authentiques répondent aux exigences de l\'ordonnance 75-74 portant établissement du cadastre et constitution du livre foncier ainsi qu\'à la législation fiscale en vigueur.'
      ],
      inDepthContent: [
        {
          heading: 'Force probante et exécutoire de l\'acte notarié',
          paragraphs: [
            'En droit algérien, l\'acte notarié est revêtu de la formule exécutoire de plein droit sans nécessiter de décision judiciaire préalable. En tant qu\'officier public impartial, le notaire assure la validité formelle et matérielle du contrat et vérifie la capacité juridique de chaque intervenant.',
            'L\'intervention notariale garantit l\'acquéreur contre tout vice dans la chaîne de propriété antérieure et certifie l\'inscription régulière au livre foncier.'
          ]
        },
        {
          heading: 'Frais d\'enregistrement et barème réglementaire',
          paragraphs: [
            'Les frais d\'acte comportent les droits fiscaux d\'enregistrement (versés au Trésor public), la taxe de publicité foncière et les émoluments du notaire, strictement encadrés par le décret exécutif n° 08-243.',
            'Le simulateur d\'évaluation fiscale permet aux usagers d\'anticiper les coûts légaux et de préparer leur dossier conformément au barème officiel.'
          ]
        }
      ],
      faq: [
        {
          question: 'Quel est le délai moyen pour obtenir le livret foncier après la vente à Oran ?',
          answer: 'La signature de l\'acte s\'effectue rapidement après dépôt des pièces requises. Les formalités d\'enregistrement et de publication à la Conservation Foncière d\'Oran prennent généralement entre un et trois mois selon les délais de traitement administratif.'
        },
        {
          question: 'Est-il possible d\'acquérir un bien immobilier à crédit via une banque algérienne ?',
          answer: 'Oui, l\'office notarial collabore avec l\'ensemble des institutions financières pour instrumenter simultanément l\'acte de vente et l\'acte d\'affectation hypothécaire au profit de l\'établissement prêteur.'
        }
      ]
    }
  },

  'creation-societe': {
    slug: 'creation-societe',
    isPropertyRelated: false,
    relatedBlogSlugs: {
      ar: ['comment-creer-sarl-en-algerie-2026', 'comparaison-eurl-sarl-spa-algerie-2026'],
      fr: ['comment-creer-sarl-en-algerie-2026', 'cession-fonds-de-commerce-algerie'],
    },
    ar: {
      title: 'تأسيس الشركات التجارية في وهران',
      metaTitle: 'تأسيس شركة تجارية في وهران — ديوان التوثيق بوهران',
      metaDescription: 'إجراءات تأسيس الشركات التجارية (SARL, EURL, SPA, SNC) بوهران لدى مكتب التوثيق المعتمد. تحرير القوانين الأساسية، إيداع الرأسمال، والقيد بالسجل التجاري.',
      h1: 'تأسيس الشركات التجارية في وهران — التوثيق والمرافقة القانونية',
      subtitle: 'تحرير العقود التأسيسية والأنظمة الأساسية للشركات التجارية وفق أحكام القانون التجاري الجزائري',
      targetAudience: [
        'المقاولون وأصحاب المشاريع والشركات الناشئة الراغبون في إطلاق نشاط تجاري أو خدمي مهيكل بوهران.',
        'الشركاء الراغبون في تأسيس شركات ذات مسؤولية محدودة (SARL) أو شركات الشخص الوحيد (EURL).',
        'المستثمرون المحليون والأجانب الساعون إلى تأسيس شركات مساهمة (SPA) أو شركات ذات فروع متعددة.',
        'المؤسسات العائلية الراغبة في تنظيم انتقال النشاط من شخص طبيعي إلى كيان معنوي منظم.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق الشركاء والمسير',
          items: [
            'بطاقات التعريف الوطنية البيومترية أو جوازات السفر البيومترية لكافة الشركاء والمسيرين.',
            'شهادات الميلاد الأصلية رقم 12 لجميع الشركاء.',
            'شهادة السوابق العدلية (صحيفة رقم 3) صالحة للمسير أو رئيس مجلس الإدارة.',
            'التسمية التجارية المقترحة مع شهادة السلبية المسلمة من المركز الوطني للسجل التجاري (CNRC).'
          ]
        },
        {
          category: 'وثائق مقر الشركة ورأس المال',
          items: [
            'عقد إيجار توثيقي أو سند ملكية رسمي لمقر الشركة التجاري الكائن بولاية وهران.',
            'شهادة إيداع الحصة النقدية لرأس المال في حساب بنكي أو مكتب التوثيق طبقاً للقانون.',
            'تقرير محافظ الحصص المعتمد في حال وجود حصص عينية مقدمة لتأسيس الشركة.'
          ]
        }
      ],
      steps: [
        {
          name: 'حجز التسمية واختيار الشكل القانوني المناسب',
          text: 'استخراج شهادة مطابقة التسمية التجارية من السجل التجاري (CNRC) وتحديد الشكل القانوني الملائم لطبيعة المشروع ورأس المال والمسؤولية القانونية (SARL, EURL, SPA).'
        },
        {
          name: 'إيداع رأس المال التأسيسي وتحرير القانون الأساسي',
          text: 'إيداع رأس المال لدى الموثق أو بحساب بنكي مخصص، وصياغة القانون الأساسي بدقة متناهية تتضمن توزيع الحصص وصلاحيات الإدارة والجمعيات العامة وقواعد توزيع الأرباح.'
        },
        {
          name: 'توقيع العقد التأسيسي والتسجيل الجبائي',
          text: 'توقيع الشركاء على العقد التأسيسي الرسمي أمام الموثق، واستيفاء إجراءات التسجيل لدى مصالح الضرائب بوهران.'
        },
        {
          name: 'النشر في النشرة الرسمية واستخراج السجل التجاري',
          text: 'إشهار ملخص التأسيس في النشرة الرسمية للإعلانات القانونية (BOAL) وجريدة يومية وطنية، وتسليم النسخ التوثيقية لاستخراج السجل التجاري والبطاقة الجبائية (NIF).'
        }
      ],
      jurisdictionNotes: [
        'يمارس الموثق مهامه كضابط عمومي مفوض لدى محكمة فلاوسن ومجلس قضاء وهران، ويمتد اختصاصه لتحرير العقود التأسيسية وتعديلات الشركات عبر كامل التراب الوطني طبقاً للمادة 3 من القانون 06-02.',
        'تخضع العقود التأسيسية والأنظمة الأساسية لأحكام القانون التجاري الجزائري والنصوص التنظيمية المعمول بها.'
      ],
      inDepthContent: [
        {
          heading: 'المقارنة بين الأشكال القانونية للشركات التجارية في الجزائر',
          paragraphs: [
            'تُعتبر الشركة ذات المسؤولية المحدودة (SARL) وشركة الشخص الوحيد (EURL) من الصيغ القانونية الشائعة في تنظيم الأعمال نظراً لتحديد مسؤولية الشريك بمقدار حصته في رأس المال وفصل الذمة المالية للشركة عن الذمة الشخصية للشركاء.',
            'بالنسبة للمشاريع الاستثمارية الكبرى، يتيح القانون تأسيس شركات المساهمة (SPA) التي توفر هيكلة مرنة لتداول الأسهم وجذب رؤوس الأموال.'
          ]
        },
        {
          heading: 'المتابعة التوثيقية لحياة الشركة',
          paragraphs: [
            'يمتد دور الموثق لمتابعة الإجراءات التوثيقية للشركة طوال نشاطها من خلال توثيق محاضر الجمعيات العامة، وتعديل القوانين الأساسية، ورفع رأس المال، وتغيير المسيرين، وعقود التنازل عن الحصص، وصولاً إلى إجراءات الحل والتصفية.'
          ]
        }
      ],
      faq: [
        {
          question: 'ما هو الحد الأدنى لرأس مال شركة SARL في الجزائر لعام 2026؟',
          answer: 'ألغى التعديل القانوني للتشريع التجاري الجزائري اشتراط حد أدنى إلزامي لرأس مال SARL، وأصبح بإمكان الشركاء تحديد رأس المال بحرية في القانون الأساسي وفق متطلبات نشاطهم.'
        },
        {
          question: 'كم يستغرق استخراج السجل التجاري بعد توقيع العقد التأسيسي؟',
          answer: 'بعد توقيع العقد التأسيسي لدى الموثق، يستغرق استكمال النشر القانوني والتسجيل الجبائي واستلام السجل التجاري من المركز الوطني للسجل التجاري بوهران من 4 إلى 7 أيام عمل.'
        }
      ]
    },
    fr: {
      title: 'Création de sociétés commerciales à Oran',
      metaTitle: 'Création de société à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Constitution de sociétés commerciales à Oran (SARL, EURL, SPA, SNC) chez Office Notarial - Oran. Rédaction des statuts, formalités CNRC et publicité légale BOAL.',
      h1: 'Création de société commerciale à Oran — Rédaction des statuts et immatriculation',
      subtitle: 'Accompagnement notarié dans la rédaction des statuts constitutifs conformément au Code de Commerce algérien',
      targetAudience: [
        'Entrepreneurs, start-up et créateurs de projets désireux de lancer une activité économique à Oran.',
        'Associés optant pour la création d\'une Société à Responsabilité Limitée (SARL) ou d\'une Entreprise Unipersonnelle (EURL).',
        'Groupes industriels et investisseurs institutionnels créant des Sociétés par Actions (SPA) ou filiales d\'entreprises.',
        'Entreprises familiales et commerçants individuels restructurant leur activité sous forme sociétaire.'
      ],
      requiredDocuments: [
        {
          category: 'Documents relatifs aux associés et gérants',
          items: [
            'Pièces d\'identité biométriques (CNIB ou passeport) en cours de validité de chaque associé et gérant.',
            'Actes de naissance n° 12 originaux de tous les fondateurs.',
            'Extrait de casier judiciaire n° 3 récent du gérant désigné.',
            'Certificat de conformité de la dénomination commerciale délivré par le CNRC (Centre National du Registre du Commerce).'
          ]
        },
        {
          category: 'Siège social et apports au capital',
          items: [
            'Bail notarié ou titre de propriété authentique justifiant du siège social dans la wilaya d\'Oran.',
            'Attestation de blocage du capital social en numéraire délivrée par l\'étude ou la banque habilitée.',
            'Rapport du commissaire aux apports en cas d\'apports en nature intégrés au capital social.'
          ]
        }
      ],
      steps: [
        {
          name: 'Réservation de dénomination et choix de la forme juridique',
          text: 'Réservation du nom commercial auprès du CNRC et sélection du statut sociétaire le plus adapté au modèle économique et à la fiscalité des associés.'
        },
        {
          name: 'Dépôt des apports et rédaction des statuts notariés',
          text: 'Dépôt des fonds et rédaction minutieuse des clauses statutaires (répartition des parts, gouvernance, pouvoirs du gérant, cession de parts).'
        },
        {
          name: 'Signature de l\'acte constitutif et enregistrement fiscal',
          text: 'Signature solennelle des statuts devant Office Notarial - Oran et enregistrement immédiat auprès de la recette des impôts d\'Oran.'
        },
        {
          name: 'Publication au BOAL et retrait du registre du commerce',
          text: 'Parution de l\'avis de constitution au Bulletin Officiel des Annonces Légales (BOAL) et dans la presse, puis dépôt au CNRC pour immatriculation.'
        }
      ],
      jurisdictionNotes: [
        'Le notaire est compétent pour instrumenter les actes constitutifs et modificatifs de sociétés sur l\'ensemble du territoire national conformément à l\'article 3 de la loi n° 06-02.',
        'Les statuts sont établis en conformité avec les dispositions du Code de Commerce algérien et des textes réglementaires en vigueur.'
      ],
      inDepthContent: [
        {
          heading: 'Choix de la forme sociale : SARL, EURL ou SPA',
          paragraphs: [
            'La SARL et l\'EURL constituent des formes sociétaires permettant une séparation patrimoniale stricte entre les biens personnels des associés et le patrimoine social de la société.',
            'Pour les investissements d\'envergure, la Société par Actions (SPA) offre un cadre adapté à la mobilisation de capitaux et à la gestion par actions.'
          ]
        },
        {
          heading: 'Suivi juridique et modifications statutaires',
          paragraphs: [
            'L\'office notarial instrumente également les actes relatifs à la vie sociale des entreprises : procès-verbaux d\'assemblées générales, augmentations de capital, modifications de gérance, transferts de siège et cessions de parts sociales.'
          ]
        }
      ],
      faq: [
        {
          question: 'Quel est le montant minimum du capital social pour une SARL en Algérie ?',
          answer: 'Le Code de Commerce algérien a supprimé le plancher obligatoire de 100 000 DZD pour la SARL, accordant aux fondateurs la liberté de fixer contractuellement le capital social adapté à leur activité.'
        },
        {
          question: 'Quel est le délai global pour obtenir le registre de commerce ?',
          answer: 'Après signature des statuts à l\'étude, les formalités de publication et d\'immatriculation au CNRC d\'Oran prennent en moyenne entre 4 et 7 jours ouvrables.'
        }
      ]
    }
  },

  'procuration': {
    slug: 'procuration',
    isPropertyRelated: false,
    relatedBlogSlugs: {
      ar: ['procuration-generale-algerie', 'wikalat-am-algerie-guide'],
      fr: ['comment-creer-sarl-en-algerie-2026', 'acte-de-vente-immobilier-oran'],
    },
    ar: {
      title: 'الوكالات الرسمية والتفويضات في وهران',
      metaTitle: 'تحرير وكالة رسمية بوهران — ديوان التوثيق بوهران',
      metaDescription: 'تحرير الوكالات الرسمية والخاصة بوهران لدى مكتب التوثيق المعتمد: وكالة بيع عقار، وكالة بنكية، وكالة تسيير شركات، وتمثيل أمام الإدارات الجزائرية.',
      h1: 'الوكالات الرسمية والخاصة بوهران — شروط التوثيق والصلاحيات',
      subtitle: 'تحرير عقود الوكالة والتفويض القانوني بصفة دقيقة تحفظ حقوق الموكل والوكيل وفق القانون المدني الجزائري',
      targetAudience: [
        'المواطنون المقيمون خارج ولاية وهران أو في الخارج الراغبون في تعيين ممثل قانوني لإدارة شؤونهم العقارية أو المالية.',
        'الورثة الراغبون في توكيل أحدهم لمتابعة إجراءات الفريضة وحصر التركة وتقسيمها أمام المحاكم والمحافظات العقارية.',
        'المتعاملون الاقتصاديون والمسيرون الراغبون في تفويض صلاحيات محددة لإطاراتهم لدى البنوك والجمارك ومصالح الضرائب.',
        'كبار السن أو المرضى الذين يتعذر عليهم التنقل شخصياً لإنجاز المعاملات الإدارية والقانونية.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق الموكل والوكيل',
          items: [
            'بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري ساري المفعول للموكل والوكيل.',
            'شهادة الميلاد الأصلية رقم 12 للموكل والوكيل متضمنة بيانات الحالة المدنية الكاملة.',
            'تحديد العنوان الدقيق والمهنة لكل من الموكل والوكيل.'
          ]
        },
        {
          category: 'الوثائق التبريرية حسب موضوع الوكالة',
          items: [
            'سند الملكية والدفتر العقاري في حال كانت الوكالة مخصصة لبيع أو شراء أو كراء عقار محدد.',
            'الوثائق التأسيسية والسجل التجاري إذا كانت الوكالة تتعلق بتسيير شركة أو فتح حسابات تجارية.',
            'شهادة الفريضة أو بيانات المورث إذا كانت الوكالة تتعلق بمتابعة تركة أو قسمة ميراث.'
          ]
        }
      ],
      steps: [
        {
          name: 'تحديد نطاق الوكالة بدقة (عامة أو خاصة)',
          text: 'استقبال الموكل وحصر المهام الموكلة بشكل واضح وصريح لمنع أي تجاوز أو التباس قانوني، والتفرقة بين أعمال الإدارة وأعمال التصرف الناقلة للملكية.'
        },
        {
          name: 'التحقق من الأهلية والرضا التام للموكل',
          text: 'يتأكد الموثق من الأهلية القانونية الكاملة للموكل وسلامة إدراكه وإرادته الحرة دون أي ضغط أو إكراه قبل الشروع في التوثيق.'
        },
        {
          name: 'تحرير العقد التوثيقي الرسمي وتلاوته',
          text: 'صياغة العقد بالصيغة التوثيقية المعتمدة وتلاوة مواده وشرح الآثار القانونية والالتزامات المترتبة على التفويض للموكل.'
        },
        {
          name: 'التوقيع وتسليم النسخ التوثيقية الرسمية',
          text: 'توقيع الموكل بسجلات المكتب الرسمية وتسليمه النسخة التوثيقية الأصلية (Grosse) والنسخ المطابقة للأصل اللازمة لتقديمها للجهات المعنية.'
        }
      ],
      jurisdictionNotes: [
        'يمارس الموثق مهامه التوثيقية كضابط عمومي لدى محكمة فلاوسن ومجلس قضاء وهران، وتتمتع الوكالات التوثيقية بالقوة الثبوتية الرسمية وتُقبل لدى كافة الجهات الإدارية والقضائية عبر كامل التراب الوطني طبقاً للقانون 06-02.',
        'يخضع عقد الوكالة لأحكام المواد 571 وما يليها من القانون المدني الجزائري، مع إمكانية إلغائها أو تقييدها بطلب رسمي من الموكل.'
      ],
      inDepthContent: [
        {
          heading: 'الفرق بين الوكالة العامة والوكالة الخاصة بالتصرف',
          paragraphs: [
            'تقتصر الوكالة العامة كقاعدة عامة على أعمال الإدارة وحفظ الحقوق، مثل استخراج الوثائق ومتابعة الملفات الإدارية والتمثيل العادي. بينما تشترط المادة 574 من القانون المدني الجزائري وكالة خاصة محددة بالاسم والصلاحيات لأي عمل من أعمال التصرف كالبيع، الرهن، التبرع، أو الصلح.',
            'في المعاملات العقارية بوهران، تحرص المحافظات العقارية على عدم قبول أي وكالة ما لم تتضمن وصفاً دقيقاً للعقار ورقم دفتري صريح وصلاحية بيع واضحة باسم الموكل.'
          ]
        },
        {
          heading: 'إلغاء الوكالة وانقضاؤها القانوني',
          paragraphs: [
            'يحق للموكل في أي وقت عزل الوكيل وإلغاء الوكالة بموجب عقد توثيقي مفسوخ يُبلَّغ رسمياً للوكيل وللجهات المعنية بواسطة محضر قضائي. كما تنتهي الوكالة حكماً بوفاة الموكل أو الوكيل أو فقدان أحدهما لأهليته القانونية.'
          ]
        }
      ],
      faq: [
        {
          question: 'هل يمكن تحرير وكالة لبيع عقار بوهران من دون تحديد ثمن البيع؟',
          answer: 'يُفضل قانوناً تحديد حد أدنى للثمن أو منح الوكيل صلاحية البيع وفق السعر المرجعي الرائج، وذلك لحماية الموكل من أي غبن قانوني.'
        },
        {
          question: 'هل يحق للموكل إلغاء الوكالة في أي وقت؟',
          answer: 'نعم، يحق للموكل عزل الوكيل وإلغاء الوكالة في أي وقت أمام الموثق، ويصبح الإلغاء سارياً فور تبليغ الوكيل رسمياً.'
        }
      ]
    },
    fr: {
      title: 'Procurations notariées à Oran',
      metaTitle: 'Procuration notariée à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Rédaction de procurations notariées à Oran (générale, spéciale de vente immobilière, bancaire, succession) chez Office Notarial - Oran.',
      h1: 'Procuration notariée à Oran — Mandat authentique et représentation légale',
      subtitle: 'Rédaction d\'actes de mandat conformes aux exigences du Code Civil algérien garantissant la sécurité juridique du mandant et du mandataire',
      targetAudience: [
        'Résidents à l\'étranger ou hors wilaya d\'Oran mandatant un proche pour accomplir des actes administratifs ou patrimoniaux.',
        'Membres d\'une succession confiant à un cohéritier la gestion des biens successoraux et les formalités foncières.',
        'Dirigeants d\'entreprises déléguant des pouvoirs spécifiques de signature bancaire ou de gestion douanière.',
        'Personnes à mobilité réduite ou empêchées de se déplacer devant les services administratifs et bancaires.'
      ],
      requiredDocuments: [
        {
          category: 'Identité du mandant et du mandataire',
          items: [
            'Carte nationale d\'identité biométrique ou passeport biométrique original en cours de validité de chaque partie.',
            'Actes de naissance n° 12 de moins de trois mois du mandant et du mandataire.',
            'Adresse de résidence complète et profession des contractants.'
          ]
        },
        {
          category: 'Justificatifs selon l\'objet du mandat',
          items: [
            'Titre de propriété et livret foncier si la procuration autorise la vente, l\'achat ou la location d\'un bien immobilier déterminé.',
            'Registre de commerce et statuts de la société pour les délégations de gestion d\'entreprise ou d\'ouverture de compte.',
            'Acte de notoriété (Fridha) pour les mandats relatifs à la liquidation d\'une succession.'
          ]
        }
      ],
      steps: [
        {
          name: 'Définition précise de l\'objet et des pouvoirs conférés',
          text: 'Entretien avec le mandant pour fixer les limites exactes de la mission confiée, en distinguant rigoureusement les actes d\'administration des actes de disposition.'
        },
        {
          name: 'Contrôle de la capacité et du libre consentement',
          text: 'Vérification par le notaire du discernement et de la pleine capacité civile du mandant afin de prémunir l\'acte contre toute contestation.'
        },
        {
          name: 'Rédaction solennelle de l\'acte authentique de procuration',
          text: 'Établissement du document notarié selon les formulations juridiques requises par les banques, les tribunaux et les conservations foncières.'
        },
        {
          name: 'Signature et délivrance de la grosse et des expéditions',
          text: 'Signature par le mandant sur le registre officiel de l\'étude et remise immédiate de l\'expédition authentique opposable aux tiers.'
        }
      ],
      jurisdictionNotes: [
        'Le notaire instrumente les actes de procuration avec une pleine valeur probante et opposabilité sur l\'ensemble du territoire algérien conformément à la loi n° 06-02.',
        'L\'acte respecte les dispositions des articles 571 et suivants du Code Civil algérien régissant le mandat légal.'
      ],
      inDepthContent: [
        {
          heading: 'Mandat général vs Mandat spécial de disposition',
          paragraphs: [
            'Aux termes de l\'article 574 du Code Civil algérien, un mandat formulé en termes généraux ne confère de pouvoir que pour les actes d\'administration. Tout acte de disposition (vente d\'immeuble, hypothèque, transaction, renonciation) exige impérativement un mandat spécial décrivant l\'objet précis de l\'opération.',
            'Les conservations foncières d\'Oran appliquent une vigilance stricte quant à la désignation cadastrale exacte de l\'immeuble dans la procuration de vente.'
          ]
        },
        {
          heading: 'Révocation et extinction de la procuration notariée',
          paragraphs: [
            'Le mandant conserve le droit imprescriptible de révoquer sa procuration par acte notarié de révocation, signifié au mandataire par voie d\'huissier de justice. Le mandat s\'éteint également de plein droit par le décès du mandant ou du mandataire.'
          ]
        }
      ],
      faq: [
        {
          question: 'Une procuration notariée de vente immobilière a-t-elle une durée de validité limitée ?',
          answer: 'En l\'absence de terme contractuel expressément prévu dans l\'acte, la procuration demeure valable jusqu\'à son exécution, sa révocation formelle ou le décès du mandant.'
        },
        {
          question: 'Le mandataire doit-il obligatoirement être présent lors de la signature de la procuration ?',
          answer: 'Non, seule la présence physique et la signature du mandant sont requises pour établir la procuration notariée en droit algérien.'
        }
      ]
    }
  },

  'succession': {
    slug: 'succession',
    isPropertyRelated: true,
    relatedBlogSlugs: {
      ar: ['fredha-succession-algerie-etapes', 'succession-heritage-algerie'],
      fr: ['acte-de-vente-immobilier-oran', 'cession-fonds-de-commerce-algerie'],
    },
    ar: {
      title: 'الفريضة ونقل الملكية العقارية بالإرث في وهران',
      metaTitle: 'الفريضة والتركات العقارية في وهران — ديوان التوثيق بوهران',
      metaDescription: 'إجراءات تحرير الفريضة التوثيقية، حصر التركة، وإعداد الشهادة التوثيقية لنقل الملكية العقارية بالميراث في وهران لدى مكتب التوثيق المعتمد.',
      h1: 'الفريضة والتركات العقارية في وهران — تحديد الورثة ونقل الملكية',
      subtitle: 'تحرير عقود الفريضة الشرعية والشهادات التوثيقية لنقل الحقوق العقارية المشهرة وفق قانون الأسرة والتشريع العقاري الجزائري',
      targetAudience: [
        'الورثة الشرعيون الراغبون في استخراج الفريضة الرسمية لتقسيم التركة أو سحب أموال المورث من البنوك والبريد.',
        'العائلات التي تمتلك عقارات مسجلة باسم المورث وترغب في نقل الملكية لأسمائهم واستخراج دفاتر عقارية فردية أو جماعية.',
        'الورثة الراغبون في إجراء قسمة ودية رضائية أو بيع العقار الموروث وتقسيم الثمن بالتراضي.',
        'أفراد الجالية الوطنية بالخارج المعنيون بتركات عقارية أو تجارية بولاية وهران والغرب الجزائري.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق المورث والورثة والشهود',
          items: [
            'شهادة الوفاة الأصلية للمورث المستخرجة من بلدية الوفاة أو مكان التسجيل.',
            'شهادة الميلاد الأصلية رقم 12 للمورث، والدفتر العائلي الأصلي كاملاً.',
            'شهادات الميلاد الأصلية رقم 12 وبطاقات الهوية البيومترية لكافة الورثة الشرعيين.',
            'حضور شاهدين اثنين من غير الورثة يتمتعان بالأهلية لمعاينة صفة الورثة وحصرهم شرعاً وقانوناً مع بطاقات هويتهم.'
          ]
        },
        {
          category: 'وثائق الأملاك العقارية المورثة',
          items: [
            'عقود الملكية الرسمية والدفاتر العقارية الخاصة بالأملاك العقارية التابعة للتركة.',
            'شهادات السلبية العقارية والكشف العقاري المسلم من المحافظة العقارية بوهران.',
            'عقود الشراء والأسهم والسجلات التجارية في حال وجود مؤسسات أو محلات تجارية ضمن التركة.'
          ]
        }
      ],
      steps: [
        {
          name: 'حصر الورثة المستحقين وتطبيق أحكام الشريعة الإسلامية',
          text: 'دراسة الدفتر العائلي وحصر الورثة أصحاب الفروض والعصبة وتحديد أنصبة كل وارث بدقة وفقاً لأحكام قانون الأسرة الجزائري المستمد من الشريعة الإسلامية.'
        },
        {
          name: 'تحرير عقد الفريضة بحضور الشاهدين',
          text: 'استقبال الورثة والشاهدين وتلاوة عقد الفريضة التوثيقي الذي يثبت صفة الورثة وحصصهم، وتوقيعه بسجلات المكتب التوثيقي وتسليم النسخ الرسمية.'
        },
        {
          name: 'إعداد الشهادة التوثيقية لنقل الملكية العقارية بالميراث',
          text: 'حصر العقارات التابعة للمورث وتحرير الشهادة التوثيقية (Attestation Notariée) الناقلة للملكية العقارية من اسم المرحوم إلى أسماء الورثة مجتمعين على الشيوع.'
        },
        {
          name: 'الإشهار بالمحافظة العقارية واستخراج الدفتر العقاري الجديد',
          text: 'إيداع الشهادة التوثيقية لدى المحافظة العقارية المختصة بوهران للإشهار ونقل القيود العقارية، تمهيداً لإجراء القسمة الودية أو التصرف في العقار.'
        }
      ],
      jurisdictionNotes: [
        'يقوم الموثق بتحرير عقود الفريضة وإعداد الشهادات التوثيقية لنقل الملكية العقارية بالميراث وفقاً لقانون الأسرة والتشريع العقاري الجزائري.',
        'تُعد الشهادة التوثيقية المشهرة لدى المحافظة العقارية السند القانوني الإلزامي لنقل الحقوق العينية العقارية بالميراث طبقاً للمرسوم 76-63 المتعلق بتأسيس السجل العقاري.'
      ],
      inDepthContent: [
        {
          heading: 'الفرق الجوهري بين عقد الفريضة والشهادة التوثيقية العقارية',
          paragraphs: [
            'يخلط العديد من المواطنين بين الفريضة ونقل الملكية العقارية. عقد الفريضة يقتصر على إثبات صفة الوارث وتحديد نسبته الشرعية في التركة، وهو وثيقة شخصية تسمح بالتعامل مع البنوك والبريد وصناديق التقاعد.',
            'أما نقل الملكية العقارية فيتطلب وجوباً تحرير "شهادة توثيقية عقارية" مشهرة بالمحافظة العقارية لتسجيل الحصص العينية باسم الورثة، وبدونها لا يمكن لأي وارث بيع حصته أو رهنها أو طلب قسمتها رسمياً.'
          ]
        },
        {
          heading: 'القسمة الودية بين الورثة وفض النزاعات الشائعة',
          paragraphs: [
            'بعد إشهار الشهادة التوثيقية، يمكن للورثة إبرام "عقد قسمة ودية" أمام الموثق يفرز نصيب كل وارث في عقار مستقل أو تعويض مالي عادل، مما يجنب العائلة اللجوء إلى القضاء والبيع بالمزاد العلني بأبخس الأثمان.'
          ]
        }
      ],
      faq: [
        {
          question: 'هل يمكن استخراج الفريضة دون حضور جميع الورثة؟',
          answer: 'نعم، يكفي حضور أحد الورثة مع الدفتر العائلي وشاهدين اثنين بالغين عاقلين للإدلاء بالشهادة وتحرير عقد الفريضة الشرعية.'
        },
        {
          question: 'هل تستلزم الشهادة التوثيقية تسديد رسوم ضريبية باهظة؟',
          answer: 'تستفيد عمليات نقل الملكية بالميراث بين الأصول والفروع والأزواج من إعفاءات وتخفيضات جبائية تفضيلية وفقاً لأحكام قانون التسجيل الجزائري.'
        }
      ]
    },
    fr: {
      title: 'Succession et acte de notoriété (Fridha) à Oran',
      metaTitle: 'Succession et Fridha à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Règlement des successions à Oran chez Office Notarial - Oran : acte de notoriété (Fridha), attestation notariée de transfert immobilier et partage amiable.',
      h1: 'Succession et transfert immobilier à Oran — Acte de notoriété (Fridha) et attestation',
      subtitle: 'Liquidation des successions, dévolution successorale et publication du transfert foncier au profit des héritiers à Oran',
      targetAudience: [
        'Héritiers souhaitant établir l\'acte de notoriété (Fridha) pour faire valoir leurs droits auprès des banques, assurances et administrations.',
        'Familles possédant des biens immobiliers au nom du défunt nécessitant une mutation légale à la Conservation Foncière d\'Oran.',
        'Héritiers envisageant un partage amiable des biens successoraux ou la vente conjointe d\'un immeuble indivis.',
        'Membres de la diaspora algérienne concernés par le règlement d\'une succession patrimoniale dans la région d\'Oran.'
      ],
      requiredDocuments: [
        {
          category: 'Documents relatifs au défunt et aux héritiers',
          items: [
            'Acte de décès original du défunt délivré par la commune du lieu de décès.',
            'Acte de naissance n° 12 du défunt et livret de famille original complet.',
            'Actes de naissance n° 12 originaux et pièces d\'identité biométriques de l\'ensemble des héritiers.',
            'Présence de deux témoins majeurs et honorables, non-héritiers, attestant de la composition de la famille.'
          ]
        },
        {
          category: 'Patrimoine immobilier successoral',
          items: [
            'Titres de propriété originaux et livrets fonciers des immeubles dépendant de la masse successorale.',
            'États négatifs et renseignements cadastraux récents délivrés par la Conservation Foncière d\'Oran.',
            'Comptes bancaires, parts sociales ou titres de commerce appartenant au défunt.'
          ]
        }
      ],
      steps: [
        {
          name: 'Recensement des ayants droit et calcul des quotes-parts',
          text: 'Examen des actes d\'état civil et détermination des parts successorales de chaque héritier en stricte application du Code de la Famille algérien issu du droit successoral musulman.'
        },
        {
          name: 'Instrument de l\'acte de notoriété (Fridha)',
          text: 'Audition des deux témoins, lecture de l\'acte de Fridha certifiant la dévolution légale, signature sur le registre notarial et remise des expéditions.'
        },
        {
          name: 'Rédaction de l\'attestation notariée après décès',
          text: 'Établissement de l\'attestation notariée de mutation immobilière constatant le transfert des droits réels du défunt à l\'indivision successorale.'
        },
        {
          name: 'Dépôt et publication à la Conservation Foncière',
          text: 'Publication de l\'attestation notariée à la Conservation Foncière d\'Oran afin d\'actualiser le registre foncier et d\'établir le nouveau livret foncier indivis.'
        }
      ],
      jurisdictionNotes: [
        'L\'office notarial instrumente les actes de notoriété (Fridha) et attestations notariées après décès conformément au Code de la Famille et à la réglementation foncière.',
        'L\'attestation notariée publiée est le titre légal obligatoire prescrit par le décret 76-63 pour constater le transfert des droits réels immobiliers par succession.'
      ],
      inDepthContent: [
        {
          heading: 'Distinction entre acte de notoriété (Fridha) et attestation notariée immobilière',
          paragraphs: [
            'La Fridha constate uniquement la qualité d\'héritier et la quote-part respective de chacun dans la masse successorale. Elle est indispensable pour débloquer les comptes bancaires et pensions du défunt.',
            'En revanche, le transfert légal de la propriété immobilière exige obligatoirement une attestation notariée soumise à la formalité de publicité foncière. Sans cette attestation publiée, aucun héritier ne peut vendre ni hypothéquer le bien hérité.'
          ]
        },
        {
          heading: 'Partage amiable vs Sortie d\'indivision judiciaire',
          paragraphs: [
            'Une fois l\'attestation notariée publiée, les héritiers peuvent procéder à un acte de partage amiable (Kisma Ridhaya) devant notaire, attribuant à chacun un bien privatif ou une soulte financière, évitant ainsi les procédures judiciaires longues et coûteuses de licitation.'
          ]
        }
      ],
      faq: [
        {
          question: 'Tous les héritiers doivent-ils être présents pour établir la Fridha ?',
          answer: 'Non, un seul héritier muni du livret de famille original et accompagné de deux témoins majeurs peut faire dresser la Fridha chez le notaire.'
        },
        {
          question: 'Quels sont les avantages fiscaux applicables aux mutations successorales en Algérie ?',
          answer: 'La législation fiscale algérienne accorde des taux réduits et des abattements substantiels pour les transferts successoraux en ligne directe (enfants, parents) et entre conjoints.'
        }
      ]
    }
  },

  'contrat-mariage': {
    slug: 'contrat-mariage',
    isPropertyRelated: false,
    relatedBlogSlugs: {
      ar: ['contrat-mariage-chez-notaire-algerie', 'donation-entre-ascendants-descendants-algerie'],
      fr: ['acte-de-vente-immobilier-oran', 'comment-creer-sarl-en-algerie-2026'],
    },
    ar: {
      title: 'عقود الزواج والاتفاق المالي بين الزوجين بوهران',
      metaTitle: 'عقد الزواج والاتفاق المالي بوهران — ديوان التوثيق بوهران',
      metaDescription: 'توثيق عقد الزواج الرسمي والشروط المالية والاتفاق على الأموال المشتركة بوهران لدى مكتب التوثيق المعتمد وفقاً لقانون الأسرة الجزائري.',
      h1: 'عقد الزواج والشروط الاتفاقية بوهران — التوثيق الرسمي وحماية الحقوق',
      subtitle: 'توثيق عقد الزواج الرسمي والشروط المالية التوافقية وفقاً لأحكام المادة 19 من قانون الأسرة الجزائري',
      targetAudience: [
        'المقبلون على الزواج الراغبون في توثيق عقد الزواج الرسمي مباشرة أمام الموثق كضابط عمومي معتمد.',
        'الزوجان الراغبان في إدراج شروط اتفاقية خاصة (العمل، مواصلة الدراسة، أو تنظيم الذمة المالية المشتركة).',
        'الأزواج متعددو الجنسيات أو المقيمون بالخارج المحتاجون لعقد زواج رسمي معترف به دولياً وقابل للمصادقة القنصلية.',
        'المتزوجون عرفياً الراغبون في تثبيت زواجهم وتوثيقه رسمياً لحفظ حقوق الأبناء والأسرة.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق الزوج والزوجة والولي',
          items: [
            'بطاقات التعريف الوطنية البيومترية أو جوازات السفر البيومترية للزوجين والولي والشهود.',
            'شهادات الميلاد الأصلية رقم 12 (أقل من ثلاثة أشهر) للزوج والزوجة.',
            'الشهادة الطبية المسبقة للزواج لكلا الطرفين مسلمة من طبيب معتمد تثبت خلوهما من الموانع الصحية.',
            'حضور ولي الزوجة (الأب أو من ينوب عنه شرعاً) أو ترخيص قضائي بحسب الحالات المنصوص عليها في قانون الأسرة.'
          ]
        },
        {
          category: 'الشاهدان والمهر والشروط',
          items: [
            'حضور شاهدين اثنين بالغين عاقلين متمتعين بحقوقهما المدنية وبحوزتهما بطاقات هوية بيومترية.',
            'تحديد مقدار الصداق (المهر) المعجل والمؤجل وطريقة أدائه.',
            'صيغة الشروط الاتفاقية المتفق عليها بين الطرفين المراد إدراجها في صلب العقد التوثيقي.'
          ]
        }
      ],
      steps: [
        {
          name: 'فحص الشروط الشرعية والقانونية وتقديم الاستشارة',
          text: 'التأكد من اكتمال الأركان والشروط الشرعية (الرضا، الولي، الشاهدان، والصداق) وعدم وجود أي مانع من موانع الزواج الشرعية أو القانونية.'
        },
        {
          name: 'صياغة الشروط التوافقية والاتفاقات المالية',
          text: 'مناقشة وصياغة الشروط الخاصة للزوجين بوضوح، مثل الاتفاق حول الأموال المكتسبة خلال الحياة الزوجية استناداً للمادة 19 من قانون الأسرة الجزائري.'
        },
        {
          name: 'حضور الأطراف والتوقيع الرسمي أمام الموثق',
          text: 'حضور الزوج، الزوجة، الولي، والشاهدين في جلسة التوثيق بمقر المكتب، وتلاوة بنود العقد وتوقيع الجميع بسجلات المكتب التوثيقي.'
        },
        {
          name: 'تسليم الدفتر العائلي وإرسال الإشعار لبلدية الميلاد',
          text: 'تسليم الدفتر العائلي الرسمي للزوجين وتوجيه إشعار الزواج للبلدية المختصة لتسجيل عقد الزواج على هامش شهادات ميلاد الزوجين في سجلات الحالة المدنية.'
        }
      ],
      jurisdictionNotes: [
        'يتمتع الموثق بكامل الصلاحية القانونية لتحرير عقود الزواج الرسمية التي تنتج نفس الآثار القانونية لعقود الزواج المحررة أمام ضابط الحالة المدنية بالبلدية.',
        'تُسجل عقود الزواج الموثقة لدى بلدية وهران والبلديات المعنية لتحديث القيود العائلية الرسمية فوراً.'
      ],
      inDepthContent: [
        {
          heading: 'حجية الشروط الاتفاقية وتنظيم الأموال المكتسبة أثناء الزواج',
          paragraphs: [
            'أتاح التعديل الصادر في قانون الأسرة الجزائري بموجب الأمر 05-02 للزوجين إمكانية الاتفاق في عقد الزواج أو بموجب عقد لاحق على تنظيم أموالهما المشتركة وتحديد مساهمة كل منهما في الأعباء الأسرية.',
            'يساعد هذا الاتفاق التوثيقي في صيانة حقوق الطرفين المالية بوضوح، خاصة عند اقتناء عقارات أو تأسيس شركات ومشاريع مشتركة أثناء قيام الرابطة الزوجية.'
          ]
        },
        {
          heading: 'الاعتراف الدولي بعقد الزواج التوثيقي',
          paragraphs: [
            'يتميز عقد الزواج المحرر لدى الموثق بقيمته الثبوتية العالية وسهولة ترجمته ومصادقته لدى وزارة الشؤون الخارجية والقنصليات الأجنبية، مما يسهل إجراءات التجمع العائلي والتأشيرات للمواطنين المتزوجين من رعايا أجانب أو المقيمين بالخارج.'
          ]
        }
      ],
      faq: [
        {
          question: 'هل يمكن للمرأة الراشدة تزويج نفسها بنفسها لدى الموثق؟',
          answer: 'تتولى المرأة الراشدة عقد زواجها بحضور وليها (أبيها أو أحد أقاربها) أو أي شخص تختاره وفقاً للتعديل الوارد في قانون الأسرة الجزائري.'
        },
        {
          question: 'هل يحق للزوجين إبرام اتفاق حول الأموال المشتركة بعد الزواج؟',
          answer: 'نعم، يجيز القانون الجزائري إبرام عقد توثيقي لاحق لعقد الزواج ينظم الشروط المالية والأموال المكتسبة باتفاق الطرفين.'
        }
      ]
    },
    fr: {
      title: 'Contrat de mariage et régime patrimonial à Oran',
      metaTitle: 'Contrat de mariage à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Célébration et rédaction du contrat de mariage à Oran chez Office Notarial - Oran. Clausses financières, biens communs et reconnaissance consulaire internationale.',
      h1: 'Contrat de mariage et clauses conventionnelles à Oran — Authenticité et sécurité juridique',
      subtitle: 'Authentification solennelle du mariage et rédaction des stipulations patrimoniales conformément à l\'article 19 du Code de la Famille algérien',
      targetAudience: [
        'Futurs époux souhaitant formaliser leur mariage devant un officier public notarial avec rédaction de clauses protectrices.',
        'Couples désirant aménager conventionnellement la gestion de leurs patrimoines ou convenir d\'un régime de biens communs.',
        'Conjoints binationaux ou résidents à l\'étranger nécessitant un acte authentique homologué auprès des consulats.',
        'Époux désireux de formaliser avec rigueur les engagements matrimoniaux et les droits d\'exercice professionnel.'
      ],
      requiredDocuments: [
        {
          category: 'Pièces d\'état civil et certificats médicaux',
          items: [
            'Cartes nationales d\'identité biométriques ou passeports en cours de validité des époux, du tuteur et des témoins.',
            'Actes de naissance n° 12 de moins de trois mois des futurs époux.',
            'Certificats médicaux prénuptiaux obligatoires délivrés par un médecin assermenté.',
            'Présence du tuteur matrimonial (Wali) conformément aux stipulations légales.'
          ]
        },
        {
          category: 'Témoins et conditions particulières',
          items: [
            'Présence de deux témoins majeurs, sains d\'esprit et munis de pièces d\'identité officielles.',
            'Montant et modalités de règlement de la dot (Sadaq).',
            'Projet des clauses conventionnelles convenues entre les conjoints relatives aux biens acquis.'
          ]
        }
      ],
      steps: [
        {
          name: 'Vérification des conditions légales et conseils patrimoniaux',
          text: 'Contrôle préalable de l\'absence d\'empêchement dirimant et information complète des futurs époux sur la portée des clauses conventionnelles.'
        },
        {
          name: 'Rédaction du contrat de mariage et des clauses personnalisées',
          text: 'Élaboration de l\'acte authentique intégrant les conventions matrimoniales (gestion des biens communs, droit au travail ou aux études).'
        },
        {
          name: 'Célébration solennelle et signature à l\'étude',
          text: 'Comparution solennelle des époux, du tuteur et des témoins devant Office Notarial - Oran, recueil des consentements et signatures sur le registre.'
        },
        {
          name: 'Remise du livret de famille et notification à l\'état civil',
          text: 'Délivrance immédiate du livret de famille et transmission de l\'avis de mariage à la mairie du lieu de naissance pour mention en marge.'
        }
      ],
      jurisdictionNotes: [
        'Le notaire dispose d\'une compétence légale concurrente à celle de l\'officier d\'état civil communal pour célébrer et instrumenter les actes de mariage.',
        'L\'acte notarié garantit une valeur probante internationale, facilitant les transcriptions consulaires et procédures de regroupement familial.'
      ],
      inDepthContent: [
        {
          heading: 'Aménagement conventionnel des biens acquis durant le mariage',
          paragraphs: [
            'En droit algérien, le principe fondamental est celui de la séparation des patrimoines. Toutefois, l\'article 19 du Code de la Famille autorise expressément les époux à stipuler toute clause licite, y compris la mise en communauté de certains biens acquis conjointement durant le mariage.',
            'Cette précaution notariée évite les contestations financières en cas de dissolution du lien conjugal ou de transmission successorale.'
          ]
        },
        {
          heading: 'Reconnaissance et apostille consulaire',
          paragraphs: [
            'Les actes de mariage notariés établis par Office Notarial - Oran respectent les standards diplomatiques requis pour l\'authentification auprès du Ministère des Affaires Étrangères et la transcription auprès des représentations consulaires étrangères en Algérie.'
          ]
        }
      ],
      faq: [
        {
          question: 'Le mariage célébré chez le notaire dispense-t-il du passage à la mairie ?',
          answer: 'Oui, l\'acte notarié constitue un mariage officiel complet. Le notaire transmet directement l\'avis aux services communaux pour transcription.'
        },
        {
          question: 'Peut-on insérer des conditions relatives au travail de l\'épouse dans le contrat ?',
          answer: 'Absolument, le Code de la Famille autorise toute clause licite convenue entre les parties, notamment la poursuite des études et de l\'activité professionnelle.'
        }
      ]
    }
  },

  'hypotheque': {
    slug: 'hypotheque',
    isPropertyRelated: true,
    relatedBlogSlugs: {
      ar: ['achat-immobilier-credit-bancaire-algerie', 'guide-acte-de-vente-immobilier'],
      fr: ['acte-de-vente-immobilier-oran', 'comment-creer-sarl-en-algerie-2026'],
    },
    ar: {
      title: 'الرهن العقاري والتأمينات العينية بوهران',
      metaTitle: 'عقد الرهن العقاري بوهران — ديوان التوثيق بوهران',
      metaDescription: 'توثيق عقود الرهن العقاري والتأمينات العينية ورفع اليد عن الرهن بوهران لدى مكتب التوثيق المعتمد. مرافقة القروض البنكية والتمويلات الاستثمارية.',
      h1: 'الرهن العقاري والتأمينات العينية بوهران — القروض والتأمين المالي',
      subtitle: 'تحرير عقود الرهن الرسمي وشهادات القيد وإجراءات رفع اليد لدى المحافظة العقارية بوهران وفقاً للقانون المدني الجزائري',
      targetAudience: [
        'المقترضون الحاصلون على قروض بنكية لشراء عقار أو بناء سكن أو تمويل مشاريع استثمارية بوهران.',
        'المؤسسات البنكية والمالية العامة والخاصة الراغبة في توثيق ضمانات عينية قاطعة من الدرجة الأولى.',
        'الشركات التجارية الراغبة في رهن أصولها العقارية لضمان خطوط تمويل بنكية وتسهيلات مصرفية.',
        'المواطنون الذين أتموا سداد قروضهم البنكية ويرغبون في استخراج عقد رفع اليد (Mainlevée) وشطب القيد العقاري.'
      ],
      requiredDocuments: [
        {
          category: 'وثائق المدين الراهن والبنك الدائن',
          items: [
            'بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري ساري المفعول للمدين الراهن والضامن العيني إن وجد.',
            'شهادة الميلاد الأصلية رقم 12 للمدين الراهن، والشهادة العائلية للحالة المدنية.',
            'الموافقة البنكية على التمويل متضمنة مبلغ القرض، الفوائد، ومدة السداد وجدول الاستحقاقات.',
            'التفويض الرسمي لممثل البنك أو المؤسسة المالية الدائنة.'
          ]
        },
        {
          category: 'وثائق العقار المرهون',
          items: [
            'أصل سند الملكية المشهر بالمحافظة العقارية والدفتر العقاري الفردي الأصلي للعقار المرهون.',
            'شهادة السلبية العقارية الحديثة المبيِّنة لرتبة القيد وخلو العقار من أي حجز مسبق.',
            'مخطط المسح العقاري المعتمد وتقرير تقييم القيمة العقارية الصادر عن خبير معتمد.'
          ]
        }
      ],
      steps: [
        {
          name: 'فحص الملكية ورتبة الرهن لدى المحافظة العقارية',
          text: 'مراجعة سندات الملكية والكشف العقاري للتأكد من أحقية المدين في الرهن وخلو العقار من قيود مانعة والتأكد من توافق القيمة العقارية مع مبلغ الدين المضمون.'
        },
        {
          name: 'صياغة عقد الرهن الرسمي وتحديد التزامات الأطراف',
          text: 'تحرير العقد التوثيقي متضمناً مواصفات العقار، مبلغ الدين، مدة السداد، بند التأمين ضد المخاطر، وشروط التنازل والأولوية البنكية.'
        },
        {
          name: 'توقيع العقد أمام الموثق من قبل المدين وممثل البنك',
          text: 'حضور الأطراف بمقر المكتب لتوقيع العقد الرسمي وتلاوة بنوده والالتزامات المترتبة على عدم الوفاء بالدين.'
        },
        {
          name: 'قيد الرهن بالمحافظة العقارية وتسليم شهادة القيد',
          text: 'إيداع العقد لدى المحافظة العقارية بوهران لإجراء القيد العقاري واستصدار شهادة القيد للدرجة الأولى وتسليمها للبنك الممول لبدء صرف القرض.'
        }
      ],
      jurisdictionNotes: [
        'يمارس الموثق مهامه التوثيقية لتحرير عقود الرهن الرسمي ورفع اليد طبقاً لأحكام القانون المدني والتشريع المصرفي الجزائري.',
        'يخضع الرهن الرسمي لأحكام المادة 882 وما يليها من القانون المدني الجزائري، ويُرتب آثاره القانونية بعد القيد بالمحافظة العقارية المختصة.'
      ],
      inDepthContent: [
        {
          heading: 'الآثار القانونية لقيد الرهن الرسمي وحق التتبع',
          paragraphs: [
            'يمنح الرهن الرسمي المقيد بالمحافظة العقارية للدائن المرتهن حقين أساسيين: حق الأولوية في استيفاء دينه من ثمن العقار قبل أي دائن عادي، وحق التتبع الذي يسمح له بالتنفيذ على العقار أياً كانت اليد التي انتقل إليها.',
            'يظل العقار المرهون تحت حيازة المدين وله حق الانتفاع به وسكنه أو تأجيره وفقاً للشروط المتفق عليها بالعقد التوثيقي.'
          ]
        },
        {
          heading: 'إجراءات رفع اليد التوثيقي وشطب القيد العقاري',
          paragraphs: [
            'بمجرد تسديد المدين لكامل أقساط القرض، يسلم البنك شهادة إبراء ذمة تُقدم للموثق لتحرير "عقد رفع اليد التوثيقي". ويُودع هذا العقد بالمحافظة العقارية لشطب القيد وإعادة العقار لحالته الأصلية حراً من أي التزام عيني.'
          ]
        }
      ],
      faq: [
        {
          question: 'هل يمكن رهن عقار مشاع قبل إجراء القسمة بين الشركاء؟',
          answer: 'يجوز للشريك رهن حصته الشائعة، غير أن الرهن ينتقل بعد القسمة إلى الجزء المفرز الذي يؤول إليه طبقاً لأحكام القانون المدني الجزائري.'
        },
        {
          question: 'كم تستغرق إجراءات قيد الرهن لدى المحافظة العقارية بوهران؟',
          answer: 'تستغرق إجراءات قيد الرهن وتسليم شهادة القيد الرسمية للبنك عادة ما بين 10 إلى 20 يوماً من تاريخ إيداع الملف المستوفي للشروط.'
        }
      ]
    },
    fr: {
      title: 'Hypothèque immobilière et sûretés à Oran',
      metaTitle: 'Acte d\'hypothèque à Oran — Office Notarial - Oran | Notaire Oran',
      metaDescription: 'Rédaction d\'actes d\'hypothèque immobilière, inscription de sûretés et mainlevée d\'hypothèque à Oran chez Office Notarial - Oran.',
      h1: 'Hypothèque immobilière et sûretés réelles à Oran — Garantie de crédit et mainlevée',
      subtitle: 'Constitution d\'hypothèques conventionnelles, inscription au livre foncier et délivrance de mainlevée conformément au Code Civil algérien',
      targetAudience: [
        'Emprunteurs souscrivant un crédit bancaire immobilier, crédit promoteur ou prêt d\'investissement dans la wilaya d\'Oran.',
        'Établissements bancaires et organismes de financement exigeant une sûreté réelle de premier rang opposable aux tiers.',
        'Sociétés et entreprises garantissant des lignes de découvert ou facilités de caisse sur leurs actifs immobiliers.',
        'Propriétaires ayant soldé leur crédit bancaire et souhaitant radier l\'inscription hypothécaire par acte de mainlevée.'
      ],
      requiredDocuments: [
        {
          category: 'Pièces d\'identité et documents financiers',
          items: [
            'Carte nationale d\'identité biométrique ou passeport biométrique original de l\'emprunteur et de la caution réelle éventuelle.',
            'Acte de naissance n° 12 et fiche familiale d\'état civil de l\'emprunteur.',
            'Notification d\'accord de crédit bancaire précisant le capital, les intérêts, la durée et l\'échéancier.',
            'Mandat ou délégation de pouvoir officiel du représentant légal de la banque prêteuse.'
          ]
        },
        {
          category: 'Documents de l\'immeuble grevé',
          items: [
            'Titre de propriété notarié publié et livret foncier individuel original du bien à hypothéquer.',
            'Certificat négatif récent délivré par la Conservation Foncière d\'Oran attestant du rang d\'inscription disponible.',
            'Extrait de plan cadastral et rapport d\'évaluation immobilière établi par un expert agréé.'
          ]
        }
      ],
      steps: [
        {
          name: 'Audit de la chaîne de propriété et vérification du rang hypothécaire',
          text: 'Vérification de la validité du livret foncier et de l\'état hypothécaire pour s\'assurer que l\'immeuble peut supporter l\'inscription requise.'
        },
        {
          name: 'Rédaction de l\'acte notarié d\'affectation hypothécaire',
          text: 'Établissement des clauses précisant l\'assiette hypothécaire, le montant garanti, les assurances incendie obligatoires et les déchéances de terme.'
        },
        {
          name: 'Signature solennelle de l\'emprunteur et de la banque',
          text: 'Comparution des parties à l\'étude notariée, lecture des clauses d\'exigibilité et recueil des signatures solennelles.'
        },
        {
          name: 'Dépôt à la Conservation Foncière et délivrance du bordereau d\'inscription',
          text: 'Formalité de publication au registre foncier d\'Oran, délivrance du bordereau d\'inscription hypothécaire de 1er rang remis à la banque pour libération des fonds.'
        }
      ],
      jurisdictionNotes: [
        'L\'office notarial instrumente les actes d\'affectation hypothécaire conventionnelle et de mainlevée conformément au Code Civil et à la réglementation bancaire.',
        'L\'hypothèque conventionnelle confère au créancier inscrit les droits prévus par l\'article 882 du Code Civil algérien dès son inscription régulière.'
      ],
      inDepthContent: [
        {
          heading: 'Effets juridiques : Droit de préférence et Droit de suite',
          paragraphs: [
            'L\'inscription de l\'hypothèque à la Conservation Foncière accorde au créancier inscrit le droit d\'être désintéressé par préférence sur le prix de vente de l\'immeuble et de poursuivre la saisie immobilière en quelques mains que le bien parvienne.',
            'L\'emprunteur conserve la jouissance et la disposition de son immeuble, sous réserve de ne poser aucun acte matériel ou juridique de nature à déprécier la garantie.'
          ]
        },
        {
          heading: 'Procédure de mainlevée et radiation de l\'hypothèque',
          paragraphs: [
            'Une fois le prêt intégralement remboursé, la banque délivre une attestation de solde permettant au notaire de dresser l\'acte authentique de mainlevée d\'hypothèque. Ce document est déposé à la Conservation Foncière pour obtenir la radiation définitive de la mention au livret foncier.'
          ]
        }
      ],
      faq: [
        {
          question: 'Peut-on consentir une hypothèque de second rang sur un bien déjà grevé à Oran ?',
          answer: 'Oui, si la valeur résiduelle du bien le permet et avec l\'accord du nouveau prêteur, une hypothèque de second rang peut être inscrite.'
        },
        {
          question: 'Quel est le délai pour obtenir la radiation après remboursement du crédit ?',
          answer: 'La rédaction de l\'acte de mainlevée est rapide après obtention de l\'attestation de la banque. La radiation effective à la Conservation Foncière prend en moyenne 2 à 4 semaines.'
        }
      ]
    }
  }
};
