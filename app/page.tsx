import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQSchema from './faq-schema';
import Contact from '@/components/Contact';
import CalculatorCTA from '@/components/CalculatorCTA';
import WebPageSchema from '@/components/WebPageSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/constants';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import { JsonLdScript } from '@/components/schema';

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const About = dynamic(() => import('@/components/About'));
const Procedures = dynamic(() => import('@/components/Procedures'));
const LegalUpdates = dynamic(() => import('@/components/LegalUpdates'));
const FAQ = dynamic(() => import('@/components/FAQ'));


export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'ar-DZ': `${SITE_URL}/`,
      'fr-DZ': `${SITE_URL}/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
    url: `${SITE_URL}/`,
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    locale: 'ar_DZ',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LegalService'],
    name: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    url: SITE_URL,
    telephone: '+213562296981',
    email: 'maitrelattabmohamed@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'وهران، الجزائر',
      addressLocality: 'Oran',
      addressCountry: 'DZ',
    },
    openingHours: 'Su-Th 08:30-12:00, Su-Th 13:30-16:00',
    priceRange: '$$',
    sameAs: [],
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLdScript schema={jsonLd} nonce={nonce} />
      <WebPageSchema
        url={`${SITE_URL}/`}
        name="مكتب الأستاذ لعطب محمد - موثق بوهران"
        description="مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة: عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار."
        breadcrumbs={[
          { name: "الرئيسية", item: `${SITE_URL}/` }
        ]}
      />
      <main id="main-content">
        <div className="no-print">
          <FAQSchema />
          <Hero />
          <Services />

          <CalculatorCTA />
          <WhyChooseUs />
          <About />
          <Procedures />
          <LegalUpdates />
          <FAQ />
        </div>
        <Contact />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
