import Image from 'next/image';
import Link from 'next/link';
import { WORKING_HOURS } from '@/lib/constants';

const Footer = () => {
  const quickLinks = [
  { href: '/#home', label: 'الرئيسية' },
  { href: '/#services', label: 'الخدمات' },
  { href: '/calculateur-prix-referentiel', label: 'حاسبة السعر المرجعي' },
  { href: '/blog', label: 'المدونة القانونية' },
  { href: '/#about', label: 'عن المكتب' },
  { href: '/#procedures', label: 'الإجراءات' },
  { href: '/#faq', label: 'الأسئلة الشائعة' },
  { href: '/#appointment', label: 'تواصل معنا' },
  { href: '/terms-privacy', label: 'الشروط والأحكام' },
];

  const services = [
    'عقود البيع والشراء',
    'عقود الإيجار',
    'الوكالات',
    'عقود الزواج',
    'تأسيس الشركات',
    'الرهن والتأمين',
    'التصريحات والمصادقات',
    'استشارة قانونية',
    'خدمات أخرى',
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-plus opacity-50" />
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Link href="/#home" className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/logo-optimized.png" 
                    alt="شعار مكتب الموثق لعطب محمد" 
                    width={64} 
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">مكتب الموثق</h3>
                  <p className="text-gray-400 text-sm">معتمد رسمياً</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              مكتب موثق معتمد من وزارة العدل الجزائرية. نقدم خدمات توثيقية شاملة 
              وفق أعلى معايير الجودة والمهنية.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=213562296981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                title="تواصل عبر واتساب"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 1.438a1.5 1.5 0 0 1 1.5 1.5v18.125a1.5 1.5 0 0 1-1.5 1.5H6.5a1.5 1.5 0 0 1-1.5-1.5V2.938a1.5 1.5 0 0 1 1.5-1.5h10.972zM5.5 22.938a.5.5 0 0 0 1 0V2.938a.5.5 0 0 0-1 0v20z" />
                  <path d="M12.986 7.438a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  <a 
                    href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-400 transition-colors"
                  >
                    حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768
                    <br />
                    العقيد لطفي، وهران
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-400 text-sm space-y-1" dir="ltr">
                  <div>
                    <a href="tel:+213562296981" className="hover:text-emerald-400 transition-colors">+213 562 29 69 81</a>
                    <span className="text-gray-500 text-xs ml-2" dir="rtl">(الخاص بالمكتب)</span>
                  </div>
                  <div>
                    <a href="tel:+213558440001" className="hover:text-emerald-400 transition-colors">+213 558 44 00 01</a>
                    <span className="text-gray-500 text-xs ml-2" dir="rtl">(للدعم خارج أوقات العمل فقط)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:maitrelattabmohamed@gmail.com" className="hover:text-emerald-400 transition-colors">maitrelattabmohamed@gmail.com</a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  {WORKING_HOURS.days}: {WORKING_HOURS.morning}
                  <br />
                  و {WORKING_HOURS.afternoon}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} مكتب الأستاذ لعطب محمد. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms-privacy" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms-privacy" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
