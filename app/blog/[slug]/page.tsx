import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

// Placeholder full content for articles. In a real app this would go into a markdown file or CMS.
const articlesContent: Record<string, string> = {
  "prix-referentiel-immobilier-oran-2026": `
## الأسعار المرجعية للعقار في وهران لسنة 2026

تُعتبر الأسعار المرجعية للعقار أساساً حيوياً في أي معاملة عقارية (بيع أو إيجار) في الجزائر. قامت المديرية العامة للضرائب بتحديث القوائم المرجعية لولاية وهران للسنوات 2025-2026 لتفادي التصريحات الناقصة التي كانت تكبد الخزينة خسائر كبيرة.

### ما هو السعر المرجعي؟
هو السعر الأدنى المعترف به من الإدارة الجبائية. إذا قمت بالتصريح في العقد التوثيقي بسعر أقل من المرجع المعتمد، ستخضع تلقائياً لعملية "التقويم الضريبي" (Redressement Fiscal) وتُفرض عليك غرامات التأخير.

### من يستفيد من هذا السعر؟
- **الأشخاص الطبيعيون:** المواطنون العاديون.
- **الأشخاص المعنويون:** الشركات والمؤسسات العقارية أو غيرها.

### كيف تتجنب المراجعة الضريبية؟
1. استعمل **[حاسبة السعر المرجعي](/calculateur-prix-referentiel)** الموجودة في موقعنا لتعرف الحد الأدنى المسموح التصريح به لبلديتك.
2. ناقش الأمر مع المشتري أو البائع قبل القدوم إلى مكتب الموثق لتفادي أي خلاف بين الطرفين حول قيمة الضرائب.
3. الموثق يُساعدك في الحساب الأولي لكنه غير مخول بقبول سعر يُعد غبناً للخزينة العامة بناءً على الجداول الرسمية المعتمدة.

### الخلاصة
لا تترك معاملتك العقارية تواجه عقبات جبائية. كن صريحاً واعتمد الجداول المرجعية أو استشر مكتب الموثق قبل إمضاء العقود لتفادي غرامات المصلحة الضريبية التي تفوق بكثير حقوق التسجيل الأصلية.
  `,
  "comment-creer-sarl-en-algerie-2026": `
## كيف تؤسس شركة ذات مسؤولية محدودة (SARL) في الجزائر 2026

إذا كنت تنوي إطلاق مشروعك وتبحث عن الصيغة القانونية الأفضل لحماية ذمتك المالية الخاصة، فإن شركة SARL هي الخيار الأكثر شيوعاً وأماناً في الجزائر. إليك الدليل العملي والمحدث لعام 2026 لتأسيس شركتك.

### ما هي الـ SARL؟
هي شركة تجارية ينحصر فيها التزام الشركاء (من 2 إلى 50 شريك كحد أقصى) بمقدار حصصهم في رأس المال، ولا يمكن الحجز على أموالهم الشخصية في حالة إفلاس الشركة. وإذا كنت شخصاً واحداً، يمكنك تأسيسها بصيغة EURL.

### الخطوات العملية لتأسيس الشركة (الإجراءات أمام الموثق)
1. **تحديد مقر الشركة:** يجب أن يكون لديك إما عقد كراء موثق، عقد ملكية، أو استضافة محلية توطين (Domiciliation) لعنوان مقر الشركة.
2. **تحديد تسمية الشركة:** القيام بطلب "تسمية" (Dénomination Sociale) من المركز الوطني للسجل التجاري (CNRC) للتأكد من عدم وجود شركة أخرى تحمل نفس الاسم.
3. **تحديد الرأسمال:** وفقاً للقوانين الحالية، لا يوجد حد أدنى إلزامي للرأسمال، لكن الرأسمال المعقول يساعد مستقبلاً في التعامل مع البنوك (غالباً 100,000 د.ج للحصول على الاعتبار). الرأسمال يتم إيداعه في حساب بنكي مجمد.
4. **تحرير العقد التأسيسي (Statut):** يتم بالمكتب التوثيقي، حيث يصاغ باللغتين ويتم فيه تعيين المسير وتحديد أهداف الشركة بدقة.
5. **التسجيل الجبائي والنشر:** يقوم المكتب بتوثيق العقد وتسجيله لدى مصالح الضرائب، ثم نشر الملخص العقد في النشرة الرسمية للإعلانات القانونية (BOAL) وجريدة يومية.

### كم من الوقت يستغرق التأسيس؟
مع التحضير الجيد للوثائق الأساسية، تستغرق إجراءات التوثيق واستخراج السجل التجاري حالياً حوالي 7 إلى 10 أيام عمل.

**نصيحة الموثق:** عند تحديد قانون العمل والشركة، خصص وقتاً لمناقشة صلاحيات "المُسيّر" وحدود تصرفه لتفادي أي صراعات مستقبلية بين الشركاء.
  `,
  "nouvelle-loi-enregistrement-immobilier-2026": `
## تعديلات قانون التسجيل العقاري الجزائر 2026

جاء قانون المالية لعام 2026 بعدة تسهيلات وإعفاءات تهم المواطنين البسطاء وتشدد الرقابة على المرقين العقاريين، سعياً لتنظيم السوق العقارية. إليك أبرز ما جاء فيه:

### 1. الإعفاء من حق نقل الملكية للمواطنين (الأشخاص الطبيعيين)
لأول مرة، تم إقرار إعفاء المواطنين (مشتري العقار للاستعمال السكني) من رسوم التسجيل (Droits d'Enregistrement) في حالات محددة وشروط تتعلق بالمساحة وطبيعة السكن (التفاصيل يوضحها الموثق بناءً على حالة كل زبون).

### 2. المرقي العقاري لا يشمله الإعفاء
أوضحت المديرية العامة للضرائب أن المرقين العقاريين يُستثنون من هذا الإعفاء. أي عقار يخص المرقين العقاريين للبيع، تبقى حصتهم خاضعة لحقوق نقل الملكية كما كانت بنسبتها الاعتيادية، ويجب سدادها في الآجال المنصوص عليها.

### 3. الصرامة في محاربة تبييض الأموال
يحمل القانون الجديد تعديلات تُحمّل الموثق مسؤولية أكبر للتقصي والتحقق الموثق من مسار الأموال في المعاملات المالية الضخمة، حيث يُفرض التعامل بالصكوك البنكية (Chèque de Banque) لتمرير المعاملات العقارية التي تتجاوز حداً معيناً.

ننصح دائماً باستشارة مكتب التوثيق قبل أي صفقة للتحقق من المبالغ المستحقة للضرائب والتي قد تتغير نسبها حسب نوع العقار (مبني، سكن جماعي، أرض فلاحية، إلخ).
  `,
  "guide-acte-de-vente-immobilier": `
## دليل عقد البيع العقاري للمبتدئين في الجزائر

هل هي المرة الأولى التي تقوم فيها بشراء سيارة أو شقة أو عقار؟ عقد البيع هو الوثيقة الأهم التي تضمن انتقال الملكية لحيازتك بثقة وبدون أي عيوب قانونية. 

### الشروط الأساسية لصحة عقد البيع التوثيقي
1. **أهلية البائع:** التحقق من ملكيته التامة للعقار (الدفتر العقاري، العقد المشهر).
2. **الخلو من الرهون:** التأكد من أن العقار غير مرهون لدى البنك، وليس محل نزاع قضائي مطروح أمام المحاكم. هذا الدور الدقيق هو عمل الموثق من خلال استخراج "شهادة السلبية" (Certificat Négatif).
3. **وضعية العقار:** يجب أن يكون خالياً من شاغليه وقت إمضاء العقد لتفادي مشاكل الطرد، ما لم يتفق الطرفان على خلاف ذلك.

### الوثائق المطلوبة للتحضير
- عقود الميلاد للطرفين.
- سند الملكية أو الدفتر العقاري الأصلي.
- الدفع البنكي لملف المعاملة (للصفقات الكبيرة).

### احذر من الوكالات أو العقود العرفية!
العقد العرفي، أو الشراء استناداً لـ "القطيعة" أو الأوراق العرفية القديمة يعرضك لفقدان أموالك وعدم القدرة على تسجيل ونقل العقار باسمك. التوثيق هو الحصن القانوني الوحيد.
  `,
  "procuration-generale-algerie": `
## الوكالة العامة في الجزائر — كل ما تحتاج معرفته

كثيراً ما يقصد المواطنون مكاتب التوثيق بغية تحرير وكالة لغيرهم لإدارة شؤونهم. لكن الوكالة سلاح ذو حدين.

### ما هي الوكالة العامة؟
الوكالة هي عقد تفوض بموجبه شخصاً ليقوم مقاماك بمهامك. الوكالة "العامة" تمنح للموكل له حق الإدارة المطلقة وربما البيع والتصرف في كل أملاكك!

### لماذا نحذر من الوكالة العامة؟
لأنها بلا قيود، قد يتصرف الوكيل بممتلكاتك بطرق لا توافقها أنت، وهو محمي قانوناً لأنك فوّضته تفويضاً غير مقيد.

### الحل: الوكالة الخاصة (Procuration Spéciale)
لأمانك المالي:
- دائماً خصص الوكالة لغرض وحيد وواضح. مثلاً: "وكالة خاصة بسحب وثيقة محددة" أو "وكالة خاصة لبيع السيارة المرقّمة كذا... بأدنى ثمن كذا".
- حدد مدة زمنية لصلاحية الوكالة.
- تذكر أن الوكالة تلغى بمجرد وفاة الموكل أو الوكيل، ويجب تحرير إلغاء الوكالة لدى الموثق إن لم تعد هناك حاجة لها وتكلّف المحضر القضائي بتبليغ الوكيل رسمياً بإلغائها!

مكتب التوثيق سيحرص دائماً على النصح والتوجيه نحو صيغة "الوكالات الخاصة والمقيدة" حمايةً لحقوق كل موكل.
  `
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return { title: 'مقال غير موجود' };
  }
  return {
    title: `${post.title} | الأستاذ لعطب محمد - موثق`,
    description: post.description,
    openGraph: {
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  const content = articlesContent[slug];

  if (!post || !content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              العودة للمدونة
            </Link>
          </div>

          <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 border-r pr-4 border-gray-200">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 border-r pr-4 border-gray-200">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} قراءة</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Content Generation using basic markdown-like replacement or HTML (simplified for this demo) */}
              <div 
                className="prose prose-lg prose-emerald max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ 
                  __html: content
                    .replace(/## (.*?)\n/g, '<h2 class="text-2xl mt-12 mb-6 text-emerald-900 border-b pb-4 border-gray-100">$1</h2>')
                    .replace(/### (.*?)\n/g, '<h3 class="text-xl mt-8 mb-4 text-gray-800">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline hover:text-emerald-800 font-bold">$1</a>')
                    .replace(/- (.*?)\n/g, '<li class="mb-2 list-disc ml-6">$1</li>')
                    .replace(/\n\n/g, '<br/>')
                }}
              />
            </div>
            
            <div className="bg-emerald-900 p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">هل تحتاج لمرافقة قانونية وتوثيقية في هذا الموضوع؟</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                مكتب الأستاذ لعطب محمد - الموثق المعتمد، مستعد لدراسة ملفك وتسهيل إجراءاتك بأمان تام وفي أسرع وقت.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex py-3 px-8 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-full font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                تواصل معنا الآن لإيداع ملفك
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
