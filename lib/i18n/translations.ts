import { OFFICE_INFO } from '@/lib/config';

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'اختصاصات المكتب',
      calculator: 'حاسبة السعر المرجعي',
      blog: 'المدونة',
      notary_role: 'دور الموثق',
      procedures: 'الإجراءات',
      news: 'أخبار قانونية',
      faq: 'الأسئلة الشائعة',
      contact: 'معلومات الاتصال',
      book: 'استفسار إداري',
      notary: 'موثق',
      name: 'الأستاذ لعطب محمد',
      useful_links: 'روابط مفيدة',
      forms: 'الاستمارات الرسمية'
    },
    calculator: {
      "Individuels": "سكنات فردية",
      "Collectifs et Semi-Collectifs": "سكنات جماعية وشبه جماعية",
      "Locaux Commerciaux et Locaux à Usage Professionnels": "محلات تجارية ومهنية",
      "Locaux commerciaux": "محلات تجارية",
      "Locaux à Usage Professionnels": "محلات للاستعمال المهني",
      "Locaux professionnels": "محلات مهنية",
      "Hangars": "مستودعات",
      "Terrains Nus": "أراضي بيضاء",
      "Terrains Agricoles en Plaine": "أراضي فلاحية في السهول",
      "Terrains Agricoles en Pente": "أراضي فلاحية منحدرة",
      "Standing": "عالي الجودة (Standing)",
      "Amélioré": "محسن",
      "Economique": "اقتصادي",
      "Précaire": "هش",
      "Artère hautement commerciale": "شارع تجاري بامتياز",
      "Artère moyennement commerciale": "شارع متوسط النشاط التجاري",
      "Artère peu commerciale": "شارع قليل النشاط التجاري",
      "Artère principale (Professionnel)": "شارع رئيسي (مهني)",
      "Artère hautement professionnelle": "شارع رئيسي ذو طابع مهني عالي",
      "Artère moyennement professionnelle": "شارع ذو طابع مهني متوسط",
      "Artère faiblement professionnelle": "شارع ذو طابع مهني خفيف",
      "Artère secondaire (Professionnel)": "شارع ثانوي (مهني)",
      "Artère principale": "شارع رئيسي",
      "Artère secondaire": "شارع ثانوي",
      "Situé en zone urbaine": "يقع في منطقة حضرية",
      "Situé en zone rurale": "يقع في منطقة ريفية",
      "En zone urbaine": "يقع في منطقة حضرية",
      "En zone rurale": "يقع في منطقة ريفية",
      "Pleine propriété deux (02) façades avec raccordements": "ملكية تامة واجهتين مع توصيلات",
      "Pleine propriété une (01) façade avec raccordements": "ملكية تامة واجهة واحدة مع توصيلات",
      "Pleine propriété deux (02) façades sans raccordements": "ملكية تامة واجهتين بدون توصيلات",
      "Pleine propriété une (01) façade sans raccordements": "ملكية تامة واجهة واحدة بدون توصيلات",
      "Pleine propriété (2 façades) avec raccordements": "ملكية تامة (واجهتان) مع توصيلات",
      "Pleine propriété (1 façade) avec raccordements": "ملكية تامة (واجهة واحدة) مع توصيلات",
      "Pleine propriété (2 façades) sans raccordements": "ملكية تامة (واجهتان) بدون توصيلات",
      "Pleine propriété (1 façade) sans raccordements": "ملكية تامة (واجهة واحدة) بدون توصيلات",
      "Dans l'indivision": "في حالة شيوع",
      "Terrain dans l'indivision": "أرض في حالة شيوع",
      "Terrain industriel": "أرض صناعية",
      "Industriel": "صناعي",
      "Potentialité élevée": "إمكانيات عالية",
      "Potentialité moyenne": "إمكانيات متوسطة",
      "Potentialité faible": "إمكانيات ضعيفة",
      "zone_residentielle": "منطقة سكنية",
      "Zone résidentielle": "منطقة سكنية",
      "centre_ville": "وسط المدينة",
      "Centre ville": "وسط المدينة",
      "zone_peripherique": "الضاحية (محيط المدينة)",
      "Zone périphérique": "الضاحية (محيط المدينة)",
      "zone_eloignement": "منطقة نائية",
      "Zone d'éloignement": "منطقة نائية"
    },
    common: {
      loading: 'جارٍ التحميل...',
      error: 'حدث خطأ',
      retry: 'إعادة المحاولة',
    },
    hero: {
      badge: `موثق لدى ${OFFICE_INFO.tribunal.ar}`,
      eyebrow: OFFICE_INFO.officialDesignation.ar,
      title: `${OFFICE_INFO.notaryName.ar} — موثق بوهران`,
      subtitle: OFFICE_INFO.title.ar,
      description: `${OFFICE_INFO.officialDesignation.ar} — ${OFFICE_INFO.notaryName.ar} موثق بوهران — للإعلام حول الإجراءات التوثيقية وفق القانون الجزائري`,
      cta_book: 'الوثائق والإجراءات',
      cta_services: 'الاختصاصات التوثيقية للمكتب'
    },
    services: {
      title: 'الاختصاصات التوثيقية للمكتب',
      heading: 'الاختصاصات التوثيقية للمكتب',
      items: [
        { title: 'عقود البيع والشراء العقارية', description: 'يتولى الموثق تحرير عقود البيع والشراء العقارية وفق الإجراءات القانونية المعمول بها، بما في ذلك التحقق من الملكية والوضعية القانونية.', features: ['عقود بيع عقارات سكنية', 'عقود بيع محلات تجارية', 'عقود بيع أراضي', 'عقود بيع مركبات'] },
        { title: 'عقود الزواج والاتفاق المالي', description: 'توثيق عقد الزواج الرسمي والشروط المالية والاتفاق على الأموال المشتركة وفقاً لقانون الأسرة الجزائري.', features: ['عقود الزواج الرسمية', 'تنظيم الأموال المشتركة', 'شروط العمل والدراسة', 'المصادقة الدولية'] },
        { title: 'الوكالات والتفويضات', description: 'يُحرر الموثق الوكالات القانونية مع تحديد دقيق لنطاق الصلاحيات التفويضية.', features: ['وكالة عامة كاملة', 'وكالة خاصة محددة', 'وكالة قضائية', 'وكالة بنكية'] },
        { title: 'تأسيس الشركات والمؤسسات', description: 'يتولى الموثق تحرير العقود التأسيسية للشركات التجارية وفق أحكام القانون التجاري.', features: ['شركات ذات مسؤولية محدودة', 'شركات تضامن', 'شركات مساهمة', 'تعديل النظام الأساسي'] },
        { title: 'الرهن والتأمينات', description: 'يُوثق المكتب عقود الرهن والتأمينات العينية وفق القواعد القانونية.', features: ['رهن عقاري', 'رهن حيازي', 'رفع الرهن', 'عقود تأمين'] },
        { title: 'الفريضة والتركات', description: 'إجراءات تحرير الفريضة التوثيقية، حصر التركة، وإعداد الشهادة التوثيقية لنقل الملكية العقارية بالميراث.', features: ['عقود الفريضة الشرعية', 'نقل الملكية العقارية', 'القسمة الودية', 'حصر التركة'] }
      ],
      cta: 'الاستفسار حول الإجراءات'
    },
    notaryRole: {
      title: 'دور الموثق العمومي في حماية حقوقكم',
      subtitle: 'الموثق مسؤول قانوني معيَّن من الدولة — دوره توثيق عقودكم وحفظ حقوقكم',
      features: [
        { title: 'القوة التنفيذية للعقود', description: 'العقد الموثق قابل للتنفيذ الفوري دون الحاجة إلى حكم قضائي' },
        { title: 'التحقق من الملكية', description: 'يتحقق الموثق من صحة الملكية وخلوّها من الرهون والتعقيدات القانونية قبل التوثيق' },
        { title: 'حفظ الوثائق الرسمية', description: 'تُحفَظ الوثائق الموثقة في سجلات المكتب وفق الأرشيف الوطني للتوثيق' },
        { title: 'المساواة بين الطرفين', description: 'الموثق محايد — يحمي حقوق جميع أطراف العقد دون تمييز' },
        { title: 'الإجراءات الضريبية', description: 'يتولى المكتب حساب وتسديد الرسوم التسجيلية والضرائب العقارية المستحقة' },
        { title: 'الإشهار العقاري', description: 'يُشهَر العقد الموثق في المحافظة العقارية — ضمان رسمي للملكية' }
      ]
    },
    legalUpdates: {
      title: 'المدونة القانونية والعقارية',
      description: 'مقالات قانونية حول الإجراءات التوثيقية.',
      cta: 'تصفح جميع المقالات',
      cta_mobile: 'عرض جميع المقالات'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      badge: 'الأسئلة الشائعة',
      description: 'للمزيد من المعلومات حول الإجراءات، يمكنكم التواصل مع الديوان عبر القنوات الرسمية.',
      contact_title: 'المزيد من المعلومات',
      contact_description: 'للمزيد من المعلومات، يمكنكم التواصل مع الديوان عبر القنوات الرسمية.'
    },
    contact: {
      badge: 'الديوان العمومي للتوثيق',
      title: 'استفسار إداري',
      description: 'يمكنكم التواصل مع الديوان العمومي للتوثيق للاستفسار حول الإجراءات والمستندات القانونية المطلوبة.',
      tabs: {
        appointment: 'استفسار إداري',
        inquiry: 'استفسار عام'
      },
      form: {
        name: 'الاسم الكامل *',
        name_placeholder: 'أدخل اسمك الكامل',
        phone: 'رقم الهاتف *',
        phone_placeholder: 'رقم الهاتف (مثل: 0555555555 أو +123...)',
        phone_error: 'أدخل رقم هاتف صحيح',
        email: 'البريد الإلكتروني (اختياري)',
        email_placeholder: 'example@email.com',
        company: 'الشركة/المؤسسة (اختياري)',
        company_placeholder: 'اسم الشركة',
        service: 'نوع الخدمة المطلوبة *',
        service_select: 'اختر الخدمة',
        required_docs: 'الوثائق الأساسية المطلوبة لهذه الخدمة:',
        date: 'تاريخ الاستفسار المفضل (اختياري)',
        date_note: 'ملاحظة: الاستقبال يتم خلال أوقات العمل الرسمية المنشورة.',
        time: 'الفترة المفضلة للحضور',
        time_morning: 'الفترة الصباحية (08:30–12:00)',
        time_afternoon: 'الفترة المسائية (13:30–16:00)',
        notes: 'ملاحظات أو استفسار إضافي',
        notes_placeholder: 'اكتب موضوع استفسارك أو المعاملة المطلوبة...',
        terms: 'أوافق على الشروط وسياسة الخصوصية (معالجة إدارية حصرية تحت طائلة السر المهني وفق المادة 14 من القانون 06-02 والقانون 18-07).',
        submit_appointment: 'إرسال الاستفسار الإداري',
        submit_inquiry: 'إرسال الاستفسار',
        loading: 'جاري الإرسال...',
        success_appointment_title: 'الاستفسار جاهز للإرسال عبر واتساب',
        success_appointment_desc: 'تم التحقق من البيانات وإعداد رسالة واتساب. لم يصل الاستفسار إلى المكتب بعد؛ يرجى إكمال الإرسال من تطبيق واتساب بالضغط على زر فتح المحادثة.',
        success_inquiry_title: 'استفسارك جاهز للإرسال عبر واتساب',
        success_inquiry_desc: 'تم تسجيل استفسارك وسيقوم الديوان بالرد خلال أوقات العمل الرسمية.',
        retry_whatsapp: 'إعادة المحاولة',
        fallback_whatsapp: 'إعادة المحاولة',
        fallback_call: 'أو اتصل بنا مباشرة: ',
        print: 'طباعة',
        new_inquiry: 'إرسال استفسار جديد',
        another_request: 'تقديم طلب آخر',
        error_title: 'حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مجددًا أو التواصل عبر الهاتف:',
        agree_error: 'يرجى الموافقة على الشروط والأحكام وسياسة الخصوصية للمتابعة',
        services_list: [
          'عقود البيع والشراء العقارية',
          'عقود الإيجار والتأجير',
          'الوكالات والتفويضات',
          'عقود الزواج والمستندات العائلية',
          'تأسيس الشركات والمؤسسات',
          'الرهن والتأمينات',
          'التصريحات والمصادقات',
        ],
        required_docs_hints: {
          'عقود البيع والشراء العقارية': [
            'سند الملكية (من البائع)',
            'شهادة عدم الرهن أو سلبية الرهن',
            'وثائق الهوية للطرفين',
          ],
          'عقود الإيجار والتأجير': [
            'سند ملكية العقار',
            'بطاقة الهوية للمؤجر والمستأجر',
          ],
          'الوكالات والتفويضات': [
            'بطاقة الهوية للموكل والوكيل',
            'شهادة الميلاد',
            'معلومات دقيقة عن الغرض من الوكالة',
          ],
          'عقود الزواج والمستندات العائلية': [
            'شهادات الميلاد للطرفين',
            'بطاقات الهوية',
            'شاهدان بالغان',
          ],
          'تأسيس الشركات والمؤسسات': [
            'وثائق الهوية وشهادات الميلاد للشركاء',
            'تسمية الشركة المرغوبة',
            'عقد ملكية أو إيجار المقر',
          ],
          'الرهن والتأمينات': [
            'سند الملكية',
            'عقد القرض أو وثيقة الدين',
            'وثائق الهوية',
          ],
          'التصريحات والمصادقات': [
            'بطاقة الهوية',
            'موضوع المصادقة بدقة',
          ]
        }
      },
      info: {
        address: 'العنوان',
        phone: 'الهاتف',
        phone_office: '(الخاص بالديوان)',
        phone_support: '',
        email: 'البريد الإلكتروني',
        working_hours: 'أوقات العمل',
        working_hours_details: OFFICE_INFO.hours.ar,
        office_name: OFFICE_INFO.title.ar,
        notary_title: OFFICE_INFO.title.ar
      }
    },
    footer: {
      quick_links_title: 'روابط سريعة',
      services_title: 'اختصاصات المكتب',
      tools_title: 'أدوات',
      contact_title: 'التواصل',
      copyright: 'جميع الحقوق محفوظة — الأستاذ لعطب محمد موثق',
      terms_link: 'الشروط والأحكام',
      privacy_link: 'سياسة الخصوصية'
    },
    cookie_banner: {
      message: 'يستخدم هذا الموقع معالجة تقنية سحابية مخصصة حصراً للاستفسار الإداري وتقديم المعلومات حول الإجراءات التوثيقية، تحت طائلة السر المهني (المادة 14 من القانون 06-02) والقانون 18-07 المتعلق بحماية المعطيات الشخصية.',
      privacy_policy: 'الاطلاع على سياسة الخصوصية',
      accept: 'موافقة',
      reject: 'رفض'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Attributions de l\'office',
      calculator: 'Calculateur Prix',
      blog: 'Blog',
      notary_role: 'Rôle du Notaire',
      procedures: 'Démarches',
      news: 'Actualités',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Demande administrative',
      notary: 'Notaire',
      name: 'Maître Lattab Mohamed',
      useful_links: 'Liens utiles',
      forms: 'Formulaires officiels'
    },
    calculator: {
      "Individuels": "Logements Individuels",
      "Collectifs et Semi-Collectifs": "Logements Collectifs et Semi-Collectifs",
      "Locaux Commerciaux et Locaux à Usage Professionnels": "Locaux Commerciaux et à Usage Professionnel",
      "Locaux commerciaux": "Locaux commerciaux",
      "Locaux à Usage Professionnels": "Locaux à usage professionnel",
      "Locaux professionnels": "Locaux professionnels",
      "Hangars": "Hangars",
      "Terrains Nus": "Terrains Nus",
      "Terrains Agricoles en Plaine": "Terrains Agricoles en Plaine",
      "Terrains Agricoles en Pente": "Terrains Agricoles en Pente",
      "Standing": "De Standing",
      "Amélioré": "Amélioré",
      "Economique": "Économique",
      "Précaire": "Précaire",
      "Artère hautement commerciale": "Artère hautement commerciale",
      "Artère moyennement commerciale": "Artère moyennement commerciale",
      "Artère peu commerciale": "Artère peu commerciale",
      "Artère principale (Professionnel)": "Artère principale (Professionnel)",
      "Artère hautement professionnelle": "Artère hautement professionnelle",
      "Artère moyennement professionnelle": "Artère moyennement professionnelle",
      "Artère faiblement professionnelle": "Artère faiblement professionnelle",
      "Artère secondaire (Professionnel)": "Artère secondaire (Professionnel)",
      "Artère principale": "Artère principale",
      "Artère secondaire": "Artère secondaire",
      "Situé en zone urbaine": "Situé en zone urbaine",
      "Situé en zone rurale": "Situé en zone rurale",
      "En zone urbaine": "En zone urbaine",
      "En zone rurale": "En zone rurale",
      "Pleine propriété deux (02) façades avec raccordements": "Pleine propriété deux (02) façades avec raccordements",
      "Pleine propriété une (01) façade avec raccordements": "Pleine propriété une (01) façade avec raccordements",
      "Pleine propriété deux (02) façades sans raccordements": "Pleine propriété deux (02) façades sans raccordements",
      "Pleine propriété une (01) façade sans raccordements": "Pleine propriété une (01) façade sans raccordements",
      "Pleine propriété (2 façades) avec raccordements": "Pleine propriété (2 façades) avec raccordements",
      "Pleine propriété (1 façade) avec raccordements": "Pleine propriété (1 façade) avec raccordements",
      "Pleine propriété (2 façades) sans raccordements": "Pleine propriété (2 façades) sans raccordements",
      "Pleine propriété (1 façade) sans raccordements": "Pleine propriété (1 façade) sans raccordements",
      "Dans l'indivision": "Dans l'indivision",
      "Terrain dans l'indivision": "Terrain dans l'indivision",
      "Terrain industriel": "Terrain industriel",
      "Industriel": "Industriel",
      "Potentialité élevée": "Potentialité élevée",
      "Potentialité moyenne": "Potentialité moyenne",
      "Potentialité faible": "Potentialité faible",
      "zone_residentielle": "Zone résidentielle",
      "Zone résidentielle": "Zone résidentielle",
      "centre_ville": "Centre ville",
      "Centre ville": "Centre ville",
      "zone_peripherique": "Zone périphérique",
      "Zone périphérique": "Zone périphérique",
      "zone_eloignement": "Zone d'éloignement",
      "Zone d'éloignement": "Zone d'éloignement"
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
    },
    hero: {
      badge: `Notaire près le ${OFFICE_INFO.tribunal.fr}`,
      eyebrow: OFFICE_INFO.officialDesignation.fr,
      title: `${OFFICE_INFO.notaryName.fr} — Notaire à Oran`,
      subtitle: OFFICE_INFO.title.fr,
      description: `${OFFICE_INFO.officialDesignation.fr} — ${OFFICE_INFO.notaryName.fr}, notaire à Oran — Information sur les procédures notariales selon le droit algérien`,
      cta_book: 'Documents et procédures',
      cta_services: 'Attributions notariales de l\'office'
    },
    services: {
      title: 'Attributions notariales de l\'office',
      heading: 'Attributions notariales de l\'office',
      items: [
        { title: 'Actes de vente et d\'achat immobiliers', description: 'Le notaire dresse les actes de vente et d\'achat immobiliers selon les procédures légales en vigueur, y compris la vérification de la propriété et de la situation juridique.', features: ['Actes de vente de biens résidentiels', 'Actes de vente de locaux commerciaux', 'Actes de vente de terrains', 'Actes de vente de véhicules'] },
        { title: 'Actes de mariage et convention matrimoniale', description: 'Authentification de l\'acte de mariage officiel et des conventions financières conformément au Code de la famille algérien.', features: ['Actes de mariage officiels', 'Régime des biens communs', 'Conditions d\'études et de travail', 'Légalisation internationale'] },
        { title: 'Procurations et mandats', description: 'Le notaire dresse les procurations légales avec une délimitation précise de l\'étendue des pouvoirs délégués.', features: ['Procuration générale', 'Procuration spéciale', 'Procuration judiciaire', 'Procuration bancaire'] },
        { title: 'Constitution de sociétés', description: 'Le notaire dresse les actes constitutifs des sociétés commerciales conformément au droit commercial.', features: ['SARL', 'Sociétés en nom collectif', 'Sociétés par actions', 'Modification des statuts'] },
        { title: 'Hypothèques et sûretés', description: 'L\'office authentifie les actes d\'hypothèque et de sûretés réelles selon les règles légales.', features: ['Hypothèque immobilière', 'Gage', 'Mainlevée', 'Contrats d\'assurance'] },
        { title: 'Frédha et successions', description: 'Procédures de rédaction de la frédha notariale, inventaire de la succession et certificat notarié de transmission successorale.', features: ['Actes de frédha', 'Transmission de propriété', 'Partage amiable', 'Inventaire successoral'] }
      ],
      cta: 'Renseignement sur les procédures'
    },
    notaryRole: {
      title: 'Le rôle du notaire public dans la protection de vos droits',
      subtitle: 'Le notaire est un officier public nommé par l\'État — son rôle est d\'authentifier vos actes et de préserver vos droits',
      features: [
        { title: 'Force exécutoire des actes', description: 'L\'acte notarié est immédiatement exécutoire sans recours à un jugement judiciaire' },
        { title: 'Vérification de la propriété', description: 'Le notaire vérifie la validité du titre et l\'absence d\'hypothèques avant l\'authentification' },
        { title: 'Conservation des archives', description: 'Les actes sont conservés dans les registres de l\'office conformément aux archives nationales du notariat' },
        { title: 'Égalité des parties', description: 'Le notaire est impartial — il protège les droits de toutes les parties sans distinction' },
        { title: 'Formalités fiscales', description: 'L\'office calcule et acquitte les droits d\'enregistrement et taxes immobilières dus' },
        { title: 'Publicité foncière', description: 'L\'acte notarié est publié à la conservation foncière — garantie officielle de la propriété' }
      ]
    },
    legalUpdates: {
      title: 'Blog juridique et immobilier',
      description: 'Articles juridiques sur les procédures notariales.',
      cta: 'Parcourir tous les articles',
      cta_mobile: 'Voir tous les articles'
    },
    faq: {
      title: 'Questions fréquentes',
      badge: 'FAQ',
      description: 'Pour plus d\'informations sur les procédures, vous pouvez contacter l\'office par les voies officielles.',
      contact_title: 'Plus d\'informations',
      contact_description: 'Pour plus d\'informations, vous pouvez contacter l\'office par les voies officielles.'
    },
    contact: {
      badge: 'Office public notarial',
      title: 'Demande administrative',
      description: 'Vous pouvez contacter l\'office public notarial pour vous renseigner sur les procédures et les documents légaux requis.',
      tabs: {
        appointment: 'Demande administrative',
        inquiry: 'Renseignement général'
      },
      form: {
        name: 'Nom complet *',
        name_placeholder: 'Entrez votre nom complet',
        phone: 'Téléphone *',
        phone_placeholder: 'Numéro de téléphone (ex: 0555555555 ou +213...)',
        phone_error: 'Entrez un numéro de téléphone valide',
        email: 'E-mail (facultatif)',
        email_placeholder: 'example@email.com',
        company: 'Société / Institution (facultatif)',
        company_placeholder: 'Nom de la société',
        service: 'Type de service demandé *',
        service_select: 'Choisir le service',
        required_docs: 'Documents de base requis pour ce service :',
        date: 'Date préférée (facultatif)',
        date_note: 'Note : l\'accueil se fait pendant les heures d\'ouverture officielles publiées.',
        time: 'Créneau préféré',
        time_morning: 'Matin (08:30–12:00)',
        time_afternoon: 'Après-midi (13:30–16:00)',
        notes: 'Notes ou demande complémentaire',
        notes_placeholder: 'Décrivez l\'objet de votre demande...',
        terms: 'J\'accepte les conditions et la politique de confidentialité (traitement administratif exclusif sous le secret professionnel art. 14 loi 06-02 et loi 18-07).',
        submit_appointment: 'Envoyer la demande administrative',
        submit_inquiry: 'Envoyer la demande',
        loading: 'Envoi en cours...',
        success_appointment_title: 'Votre demande est prête à être envoyée sur WhatsApp',
        success_appointment_desc: 'Vos informations ont été validées et un message WhatsApp a été préparé. L\'office n\'a pas encore reçu votre demande : veuillez terminer l\'envoi dans WhatsApp en appuyant sur le bouton d\'ouverture de la conversation.',
        success_inquiry_title: 'Votre demande est prête à être envoyée sur WhatsApp',
        success_inquiry_desc: 'Votre demande a été enregistrée ; l\'office y répondra pendant les heures d\'ouverture.',
        retry_whatsapp: 'Réessayer',
        fallback_whatsapp: 'Réessayer',
        fallback_call: 'Ou contactez-nous directement : ',
        print: 'Imprimer',
        new_inquiry: 'Nouvelle demande',
        another_request: 'Autre demande',
        error_title: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone :',
        agree_error: 'Veuillez accepter les conditions et la politique de confidentialité pour continuer',
        services_list: [
          'Actes de vente et d\'achat immobiliers',
          'Baux et locations',
          'Procurations et mandats',
          'Actes de mariage et documents familiaux',
          'Constitution de sociétés',
          'Hypothèques et sûretés',
          'Déclarations et légalisations',
        ],
        required_docs_hints: {
          'Actes de vente et d\'achat immobiliers': [
            'Titre de propriété (vendeur)',
            'Certificat de non-hypothèque',
            'Pièces d\'identité des parties',
          ],
          'Baux et locations': [
            'Titre de propriété',
            'Pièces d\'identité du bailleur et du preneur',
          ],
          'Procurations et mandats': [
            'Pièces d\'identité du mandant et du mandataire',
            'Acte de naissance',
            'Objet précis de la procuration',
          ],
          'Actes de mariage et documents familiaux': [
            'Actes de naissance des parties',
            'Pièces d\'identité',
            'Deux témoins majeurs',
          ],
          'Constitution de sociétés': [
            'Pièces d\'identité et actes de naissance des associés',
            'Dénomination souhaitée',
            'Titre ou bail du siège',
          ],
          'Hypothèques et sûretés': [
            'Titre de propriété',
            'Contrat de prêt ou titre de créance',
            'Pièces d\'identité',
          ],
          'Déclarations et légalisations': [
            'Pièce d\'identité',
            'Objet précis de la légalisation',
          ]
        }
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        phone_office: '(office)',
        phone_support: '',
        email: 'E-mail',
        working_hours: 'Horaires',
        working_hours_details: OFFICE_INFO.hours.fr,
        office_name: OFFICE_INFO.title.fr,
        notary_title: OFFICE_INFO.title.fr
      }
    },
    footer: {
      quick_links_title: 'Liens rapides',
      services_title: 'Attributions',
      tools_title: 'Outils',
      contact_title: 'Contact',
      copyright: 'Tous droits réservés — Maître Lattab Mohamed, notaire',
      terms_link: 'Conditions',
      privacy_link: 'Politique de confidentialité'
    },
    cookie_banner: {
      message: 'Ce site utilise un traitement technique cloud strictement limité à la gestion des demandes de renseignements administratifs et d\'information sur les procédures notariales, sous le sceau du secret professionnel (Art. 14 Loi 06-02) et conformément à la Loi 18-07 relative à la protection des données.',
      privacy_policy: 'Voir la politique de confidentialité',
      accept: 'Accepter',
      reject: 'Refuser'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations['ar'];

export type CalculatorKeys = keyof TranslationKeys['calculator'];
export type NavKeys = keyof TranslationKeys['nav'];
export type HeroKeys = keyof TranslationKeys['hero'];
export type ServicesKeys = keyof TranslationKeys['services'];
export type NotaryRoleKeys = keyof TranslationKeys['notaryRole'];
export type FAQKeys = keyof TranslationKeys['faq'];
export type LegalUpdatesKeys = keyof TranslationKeys['legalUpdates'];
export type FooterKeys = keyof TranslationKeys['footer'];

export function t(lang: Language, section: 'nav', key: NavKeys): string;
export function t(lang: Language, section: 'calculator', key: CalculatorKeys): string;
export function t(lang: Language, section: 'hero', key: HeroKeys): string;
export function t(lang: Language, section: 'services', key: ServicesKeys): string;
export function t(lang: Language, section: 'notaryRole', key: NotaryRoleKeys): string;
export function t(lang: Language, section: 'faq', key: FAQKeys): string;
export function t(lang: Language, section: 'legalUpdates', key: LegalUpdatesKeys): string;
export function t(lang: Language, section: 'footer', key: FooterKeys): string;
export function t(lang: Language, section: 'cookie_banner', key: 'message' | 'privacy_policy' | 'accept' | 'reject'): string;
export function t(lang: Language, section: 'contact', key: string): string;
export function t(lang: Language, section: keyof TranslationKeys, key: string): string {
  return (translations[lang][section] as Record<string, string>)[key] ?? key;
}
