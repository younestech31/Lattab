import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQSchema from './faq-schema';
import Contact from '@/components/Contact';
import ContactInfo from '@/components/ContactInfo';
import CalculatorCTA from '@/components/CalculatorCTA';
import WebPageSchema from '@/components/WebPageSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/constants';
import dynamic from 'next/dynamic';

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`w-full ${height} bg-gray-50 animate-pulse rounded-lg`} aria-hidden="true" />
);

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
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران | Notaire Lattab',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
    url: `${SITE_URL}/`,
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    locale: 'ar_DZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران | Notaire Lattab',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <WhyChooseUs />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-80" />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Procedures />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <LegalUpdates />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-48" />}>
            <FAQ />
          </Suspense>
        </div>
        <Contact contactInfo={<ContactInfo />} />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
