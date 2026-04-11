'use client';
import { useState, useEffect } from 'react';
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
import PriceCalculator from '@/components/PriceCalculator';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Services />
        <PriceCalculator />
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
