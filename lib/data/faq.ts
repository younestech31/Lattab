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
    answerAr: 'العقد الرسمي يحرره موظف أو ضابط عمومي مختص وفق الأشكال القانونية، وتكون له الحجية التي يقررها القانون. وتخضع منازعة ما أثبته محرر العقد أو الطعن في رسميته لقواعد وإجراءات قانونية مختلفة بحسب طبيعة الادعاء؛ لذلك لا يصح اختزال جميع أوجه المنازعة في طريق واحد.',
    questionFr: 'Quelle est la différence entre un acte sous seing privé et un acte authentique ?',
    answerFr: 'L’acte authentique est reçu par un officier public compétent dans les formes prévues par la loi et bénéficie de la force probante que lui reconnaissent les textes. Les contestations relatives à son authenticité ou à son contenu obéissent à des règles différentes selon leur nature ; elles ne se résument pas toutes à une seule procédure.',
  },
  {
    questionAr: 'ما هي المدة المتوقعة لتحرير عقد البيع؟',
    answerAr: 'تختلف المدة بحسب طبيعة العقد، واكتمال الوثائق، والتحريات المطلوبة، وآجال معالجة الإدارات المختصة. لذلك لا يمكن تحديد أجل موحد أو ضمان موعد مسبق لإتمام التسجيل أو الشهر العقاري قبل دراسة الملف.',
    questionFr: 'Quel est le délai prévu pour la rédaction d\'un acte de vente ?',
    answerFr: 'Le délai dépend de la nature de l’acte, de la complétude des pièces, des vérifications nécessaires et du traitement par les administrations compétentes. Il n’est donc pas possible d’annoncer un délai uniforme ni de garantir à l’avance la date d’enregistrement ou de publicité foncière.',
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
    questionAr: 'كيف يتم استقبال المواطنين وإيداع الملفات لدى ديوان التوثيق؟',
    answerAr: 'يتم استقبال المواطنين وإيداع ملفات العقود التوثيقية خلال أوقات العمل الرسمية المقررة لديوان التوثيق، مع إمكانية الاستفسار المسبق عن الوثائق الإدارية المطلوبة لكل معاملة توثيقية.',
    questionFr: 'Comment s\'effectue la réception des citoyens et le dépôt des dossiers à l\'office notarial ?',
    answerFr: 'La réception des citoyens et le dépôt des dossiers se font durant les horaires officiels d\'ouverture de l\'office notarial, avec possibilité de s\'informer au préalable des pièces requises pour chaque acte.',
  },
  {
    questionAr: 'ما هي وثائق الهوية المقبولة للتوثيق؟',
    answerAr: 'وثائق الهوية المقبولة رسمياً للتوقيع على العقود هي بطاقة التعريف الوطنية البيومترية أو جواز السفر البيومتري، ويجب أن تكون سارية المفعول.',
    questionFr: 'Quels documents d\'identité sont acceptés pour les actes notariaux ?',
    answerFr: 'Les documents d\'identité officiellement acceptés pour la signature des actes sont la carte nationale d\'identité biométrique ou le passeport en cours de validité. Ces documents permettent au notaire de certifier l\'identité des parties.',
  },
  {
    questionAr: 'ما هي صلاحيات الوكالة العامة؟',
    answerAr: 'الأصل أن الوكالة العامة تخول الوكيل القيام بأعمال الإدارة في الحدود التي يحددها القانون ونص الوكالة. أما أعمال التصرف، مثل بيع عقار أو رهنه أو التنازل عن حق، فتستلزم وكالة خاصة تحدد التصرف المقصود والصلاحيات الممنوحة، وفق المادة 574 من القانون المدني. وتُفحص كل وكالة بحسب صياغتها وموضوعها.',
    questionFr: 'Quels sont les pouvoirs conférés par une procuration générale ?',
    answerFr: 'En principe, la procuration générale couvre les actes d’administration dans les limites fixées par la loi et le mandat. Les actes de disposition, tels que la vente ou l’hypothèque d’un immeuble ou la renonciation à un droit, exigent un mandat spécial précisant l’opération et les pouvoirs conférés, conformément à l’article 574 du Code civil. Chaque mandat doit être examiné selon son objet et sa rédaction.',
  },
  {
    questionAr: 'ما هي حاسبة السعر المرجعي للعقارات؟',
    answerAr: 'هي أداة معلوماتية تعرض نطاقات القيم المرجعية الواردة في مرجع المديرية العامة للضرائب للفترة المتاحة، بحسب المنطقة ونوع العقار. ولا تمثل سعراً أدنى ملزماً لكل عملية، ولا تحسب أتعاب الموثق أو تحدد نهائياً الوعاء والحقوق الجبائية المستحقة.',
    questionFr: 'Qu\'est-ce que le calculateur de prix de référence immobilier ?',
    answerFr: 'Cet outil présente les fourchettes de valeurs du référentiel immobilier publié par la Direction générale des impôts, selon la zone et le type de bien. Il ne constitue pas un prix minimum obligatoire pour chaque opération et ne calcule ni les émoluments du notaire ni les droits fiscaux définitifs.',
  },
];
