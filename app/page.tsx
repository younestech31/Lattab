import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQSchema from './faq-schema';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CalculatorCTA from '@/components/CalculatorCTA';
import WebPageSchema from '@/components/WebPageSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/constants';
import dynamic from 'next/dynamic';

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
      <div className="no-print">
        <Header />
      </div>
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
        <Footer />
        <StickyMobileCTA />
      </div>
    </div>
  );
}
