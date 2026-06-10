import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import MissionVisionValues from '@/components/MissionVisionValues';
import FeaturedServices from '@/components/FeaturedServices';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ControllerDesign from '@/components/ControllerDesign';
import ProductsSection from '@/components/ProductsSection';
import TrainingsSection from '@/components/TrainingsSection';
import IndustriesServed from '@/components/IndustriesServed';
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

      {/* Mission, Vision & Core Values */}
      <MissionVisionValues />

      {/* Featured Services - 3 column boxes */}
      <FeaturedServices />

      {/* Stats Bar */}
      <StatsSection />

      {/* Detailed Services */}
      <ServicesSection />

      {/* Controller Design */}
      <ControllerDesign />

      {/* Products & Tools */}
      <ProductsSection />

      {/* Training Programs */}
      <TrainingsSection />

      {/* Industries We Serve */}
      <IndustriesServed />

      {/* Technology Stack */}
      <TechStackSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
