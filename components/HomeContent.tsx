import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/contact';
import ContactInfo from '@/components/ContactInfo';
import CalculatorCTA from '@/components/CalculatorCTA';
import { Language } from '@/lib/i18n/translations';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import NotaryRole from '@/components/NotaryRole';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div
    className={`w-full ${height.replace(/^h-/, 'min-h-')} bg-gray-50 animate-pulse rounded-lg`}
    aria-hidden="true"
    role="presentation"
  />
);

export async function HomeContent({ lang }: { lang: Language }) {
  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        <div className="no-print">
          <Hero lang={lang} />
          <Services lang={lang} />
          <CalculatorCTA lang={lang} />
          
          <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
            <NotaryRole lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
            <Procedures lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[720px]" />}>
            <LegalUpdates lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[520px]" />}>
            <FAQ lang={lang} />
          </Suspense>
        </div>
        <Contact contactInfo={<ContactInfo lang={lang} />} lang={lang} />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
