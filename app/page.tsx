import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';
import FAQSchema from './faq-schema';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CalculatorCTA from '@/components/CalculatorCTA';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lattab.vercel.app/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url="https://lattab.vercel.app/"
        name="مكتب الأستاذ لعطب محمد - موثق بوهران"
        description="مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة: عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار."
        breadcrumbs={[
          { name: "الرئيسية", item: "https://lattab.vercel.app/" }
        ]}
      />
      <Header />
      <main>
        <FAQSchema />
        <Hero />
        <Services />

        <CalculatorCTA />
        <WhyChooseUs />
        <About />
        <Procedures />
        <LegalUpdates />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
