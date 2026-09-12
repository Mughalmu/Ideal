'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BridalSpotlight from '@/components/BridalSpotlight';
import GallerySection from '@/components/GallerySection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import AiBeautyAssistantModal from '@/components/AiBeautyAssistantModal';
import ElementorInfoModal from '@/components/ElementorInfoModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [preselectedService, setPreselectedService] = useState<string>('Bridal Makeup');
  const [showAiAssistant, setShowAiAssistant] = useState<boolean>(false);
  const [showElementorInfo, setShowElementorInfo] = useState<boolean>(false);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#faf7f5] text-[#241e20] relative">
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenBooking={(svc) => scrollToBooking(svc)}
        onOpenAiAssistant={() => setShowAiAssistant(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => scrollToBooking('Bridal Makeup')}
        onExploreServices={scrollToServices}
      />

      {/* About Ideal Beauty Salon & Kiran Shakir */}
      <AboutSection
        onOpenBooking={() => scrollToBooking('Bridal Makeup')}
      />

      {/* Our Services Section */}
      <ServicesSection
        onOpenBooking={(svc) => scrollToBooking(svc)}
      />

      {/* Bridal Transformations Spotlight Section */}
      <BridalSpotlight
        onOpenBooking={(svc) => scrollToBooking(svc || 'Bridal Makeup')}
      />

      {/* Gallery Section */}
      <GallerySection
        onOpenBooking={(svc) => scrollToBooking(svc)}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Customer Reviews Section */}
      <TestimonialsSection />

      {/* Booking Form Section */}
      <BookingSection
        preselectedService={preselectedService}
      />

      {/* Contact & Map Section */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenElementorInfo={() => setShowElementorInfo(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* AI Beauty Assistant Modal */}
      {showAiAssistant && (
        <AiBeautyAssistantModal
          onClose={() => setShowAiAssistant(false)}
          onOpenBooking={() => {
            setShowAiAssistant(false);
            scrollToBooking();
          }}
        />
      )}

      {/* Elementor / CMS Info Modal */}
      {showElementorInfo && (
        <ElementorInfoModal
          onClose={() => setShowElementorInfo(false)}
        />
      )}
    </main>
  );
}
