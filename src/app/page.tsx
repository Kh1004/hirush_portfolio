import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import FeaturedServices from '@/components/FeaturedServices';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import TrainingsSection from '@/components/TrainingsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Services - 3 column boxes */}
      <FeaturedServices />

      {/* Stats Bar */}
      <StatsSection />

      {/* Detailed Services */}
      <ServicesSection />

      {/* Products & Tools */}
      <ProductsSection />

      {/* Training Programs */}
      <TrainingsSection />

      {/* Technology Stack */}
      <TechStackSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
