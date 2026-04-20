import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CalculatorCTA from '@/components/CalculatorCTA';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://lattab.vercel.app/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
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
