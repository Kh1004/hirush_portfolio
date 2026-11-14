import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import MissionVision from '@/components/MissionVision';
import FeaturedServices from '@/components/FeaturedServices';
import ToolsSection from '@/components/ToolsSection';
import ProductsSection from '@/components/ProductsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TrainingsSection from '@/components/TrainingsSection';
import IndustriesServed from '@/components/IndustriesServed';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* About Us */}
      <AboutSection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Services - 5 column boxes */}
      <FeaturedServices />

      {/* Tools */}
      <ToolsSection />

      {/* Products */}
      <ProductsSection />

      {/* Project Reference */}
      <ProjectsSection />

      {/* Training Programs */}
      <TrainingsSection />

      {/* Industries We Serve */}
      <IndustriesServed />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
