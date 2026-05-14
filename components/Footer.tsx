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
                    src="/logo-small.webp" 
                    alt="شعار مكتب الموثق لعطب محمد" 
                    width={64} 
                    height={64}
                    className="w-full h-full object-contain"
                    quality={75}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">مكتب الأستاذ لعطب محمد</h3>
                  <p className="text-gray-400 text-sm">مكتب موثق معتمد</p>
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
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors tooltip-trigger relative group"
                title="تواصل عبر واتساب"
              >
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414zM12.004 0C5.374 0 0 5.373 0 12.001c0 2.112.547 4.178 1.588 6.003L.057 24l6.162-1.616a11.953 11.953 0 005.785 1.517c6.629 0 12.002-5.373 12.002-12.001C24.006 5.373 18.632 0 12.004 0zM12.004 21.902c-1.934 0-3.83-.518-5.482-1.499l-.393-.233-3.674.963.98-3.582-.255-.406a9.865 9.865 0 01-1.513-5.144c0-5.457 4.441-9.898 9.897-9.898 5.457 0 9.899 4.441 9.899 9.898 0 5.458-4.442 9.899-9.899 9.899z"/>
                </svg>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  تواصل عبر واتساب
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-2 border-transparent border-t-gray-800" />
                </span>
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
