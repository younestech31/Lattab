export interface FAQItem {
  questionAr: string;
  answerAr: string;
  questionFr: string;
  answerFr: string;
}

export const faqs: FAQItem[] = [
  {
    questionAr: 'ما هو دور الموثق في الجزائر؟',
    answerAr: 'الموثق هو ضابط عمومي مكلف بالتوثيق، يتم تعيينه بمرسوم رئاسي. دوره الأساسي هو تحرير العقود والاتفاقات التي يرغب الأطراف في إعطائها الصبغة الرسمية، كما يتولى المصادقة على التوقيعات وتلقي الإقرارات والتصريحات.',
    questionFr: 'Quel est le rôle du notaire en Algérie ?',
    answerFr: 'Le notaire est un officier public chargé de la rédaction des actes et contrats auxquels les parties veulent donner le caractère d\'authenticité. Nommé par décret présidentiel, il assure la sécurité juridique des transactions, authentifie les signatures et conserve les documents officiels.',
  },
  {
    questionAr: 'ما الفرق بين العقد العرفي والعقد الرسمي؟',
    answerAr: 'العقد الرسمي هو الذي يحرره الموثق ويتمتع بحجة إثبات قوية لا يمكن الطعن فيها إلا بدعوى الزور، بينما العقد العرفي هو الذي يحرره الأطراف بأنفسهم ولا يتمتع بنفس قوة الإثبات. العقد الرسمي موصى به في المعاملات العقارية والتجارية المهمة.',
    questionFr: 'Quelle est la différence entre un acte sous seing privé et un acte authentique ?',
    answerFr: 'L\'acte authentique est rédigé par un notaire et possède une force probante supérieure, ne pouvant être contesté que par une procédure d\'inscription en faux. À l\'inverse, l\'acte sous seing privé est établi par les parties seules et ne garantit pas le même niveau de sécurité juridique ni la même force exécutoire.',
  },
  {
    questionAr: 'ما هي المدة المتوقعة لتحرير عقد البيع؟',
    answerAr: 'تختلف المدة حسب تعقيد المعاملة. العقد الابتدائي يمكن تحريره في نفس يوم المراجعة إذا كانت الوثائق كاملة. أما العقد النهائي والسند العقاري فيستغرق عادة من أسبوع إلى شهر حسب إجراءات المحافظة العقارية.',
    questionFr: 'Quel est le délai prévu pour la rédaction d\'un acte de vente ?',
    answerFr: 'Les délais varient selon la complexité du dossier. Un acte préliminaire peut souvent être établi rapidement si tous les documents sont réunis. Pour l\'acte définitif et l\'obtention du livret foncier, il faut généralement compter entre une semaine et un mois, selon les délais de réponse de la conservation foncière.',
  },
  {
    questionAr: 'هل يمكنني الحصول على نسخة من العقد الموثق؟',
    answerAr: 'نعم، يمكن للأطراف الحصول على نسخ رسمية من العقد الموثق. النسخة الأصلية تبقى محفوظة لدى الموثق في الأرشيف الرسمي. يمكن طلب نسخ إضافية في أي وقت من نفس المكتب الذي حرر العقد.',
    questionFr: 'Puis-je obtenir une copie d\'un acte notarié ?',
    answerFr: 'Oui, les parties peuvent obtenir des copies authentiques de l\'acte notarié. L\'original (la minute) est impérativement conservé par le notaire dans ses archives officielles. Des copies supplémentaires peuvent être demandées à tout moment auprès de l\'étude ayant rédigé l\'acte initial.',
  },
  {
    questionAr: 'ما هي الرسوم الواجب دفعها عند توثيق عقد؟',
    answerAr: 'الرسوم محددة وفقاً للتعريفة الرسمية المعمول بها. يتم إعلامكم بالتفاصيل قبل تحرير العقد.',
    questionFr: 'Quels sont les frais à payer pour la notarisation d\'un acte ?',
    answerFr: 'Les frais sont fixés selon un tarif officiel réglementé par l\'État. Un décompte détaillé comprenant les droits d\'enregistrement, les taxes de publicité foncière et les émoluments du notaire vous sera communiqué avant la signature de l\'acte.',
  },
  {
    questionAr: 'هل يجب حضور جميع الأطراف شخصياً؟',
    answerAr: 'نعم، في الغالب يجب حضور جميع الأطراف شخصياً للتحقق من هويتهم وإرادتهم. في بعض الحالات الاستثنائية، يمكن التوكيل لشخص آخر بوكالة رسمية موثقة.',
    questionFr: 'La présence physique de toutes les parties est-elle obligatoire ?',
    answerFr: 'En principe, la comparution personnelle de toutes les parties est requise pour vérifier leur identité et leur consentement libre. Toutefois, en cas d\'empêchement, il est possible de se faire représenter par un mandataire muni d\'une procuration notariée spécifique.',
  },
  {
    questionAr: 'كيف أحجز موعداً في مكتب الموثق؟',
    answerAr: 'يمكنكم حجز موعد عبر نموذج التواصل المتاح على موقعنا، أو من خلال تطبيق واتساب، أو عبر الاتصال الهاتفي المباشر. ننصح بالتواصل مسبقاً للاستفسار عن قائمة الوثائق المطلوبة لملفكم.',
    questionFr: 'Comment prendre rendez-vous au cabinet du notaire ?',
    answerFr: 'Vous pouvez prendre rendez-vous en remplissant le formulaire de contact sur notre site web, en nous contactant via WhatsApp, ou par appel téléphonique direct. Nous vous conseillons de nous contacter au préalable pour obtenir la liste des documents nécessaires à la constitution de votre dossier.',
  },
  {
    questionAr: 'ما هي وثائق الهوية المقبولة للتوثيق؟',
    answerAr: 'وثائق الهوية المقبولة رسمياً للتوقيع على العقود هي بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري، ويجب أن تكون سارية المفعول.',
    questionFr: 'Quels documents d\'identité sont acceptés pour les actes notariaux ?',
    answerFr: 'Les documents d\'identité officiellement acceptés pour la signature des actes sont la carte nationale d\'identité biométrique ou le passeport en cours de validité. Ces documents permettent au notaire de certifier l\'identité des parties.',
  },
  {
    questionAr: 'ما هي صلاحيات الوكالة العامة؟',
    answerAr: 'الوكالة العامة تتيح للوكيل القيام بجميع التصرفات القانونية نيابة عن الموكل، مثل إدارة الأموال، البيع والشراء، التقاضي. يمكن تقييد هذه الصلاحيات في الوكالة الخاصة.',
    questionFr: 'Quels sont les pouvoirs conférés par une procuration générale ?',
    answerFr: 'La procuration générale autorise le mandataire à effectuer tous les actes de gestion et de disposition au nom du mandant (administration, vente, achat, actions en justice). Pour limiter ces prérogatives, il est recommandé d\'opter pour une procuration spéciale.',
  },
  {
    questionAr: 'ما هي حاسبة السعر المرجعي للعقارات؟',
    answerAr: 'هي أداة رقمية يوفرها مكتبنا لمساعدة المواطنين على تقدير القيمة التجارية الدنيا للعقارات (الأسعار المرجعية) المعتمدة من طرف مصالح الضرائب. تساعد هذه الحاسبة في تجنب مشاكل إخفاء جزء من ثمن البيع.',
    questionFr: 'Qu\'est-ce que le calculateur de prix de référence immobilier ?',
    answerFr: 'Il s\'agit d\'un outil numérique mis à votre disposition pour estimer la valeur vénale minimale des biens (prix de référence) admise par l\'administration fiscale. Cet outil aide à garantir la transparence des transactions et à éviter d\'éventuels redressements.',
  },
];
