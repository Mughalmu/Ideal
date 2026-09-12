'use client';

import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '@/lib/salon-data';
import { Menu, X, Phone, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAiAssistant: () => void;
}

export default function Navbar({ onOpenBooking, onOpenAiAssistant }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal Special', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-[#1a1617] text-[#f5eae7] text-xs py-2 px-4 border-b border-[#332a2c]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-[#b82337] animate-pulse"></span>
            <span>Exclusive Bridal Packages 2026 Open • Led by <strong>Kiran Shakir</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#d1c2bd]">
            <a 
              href={`tel:${SALON_INFO.formattedPhone}`} 
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#b82337]" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-[#554749]">|</span>
            <button
              onClick={onOpenAiAssistant}
              className="hover:text-white flex items-center gap-1.5 transition-colors text-[#e8b4b8] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b82337]" />
              <span>Ask AI Beauty Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf7f5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#ebdcd8]'
            : 'bg-[#faf7f5]/80 backdrop-blur-sm py-4 border-b border-[#f0e4e0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#faf1ee] border-2 border-[#b82337] flex items-center justify-center text-[#b82337] font-serif-luxury font-bold text-xl shadow-sm group-hover:bg-[#b82337] group-hover:text-white transition-all">
              I
            </div>
            <div>
              <span className="block font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-[#241e20]">
                Ideal Beauty Salon
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-[#b82337]">
                Kiran Shakir • Makeup Artist
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4a3f42]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#b82337] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#b82337] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1f663c] bg-[#e6f4ea] border border-[#b7e1cd] rounded-full hover:bg-[#d2ebd9] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#b82337] hover:bg-[#a01c2e] rounded-full transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#b82337] rounded-full"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#241e20] hover:text-[#b82337] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f5] border-b border-[#ebdcd8] px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#332a2c] hover:text-[#b82337] py-2 border-b border-[#f3e9e6] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#b82337] rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#155724] bg-[#d4edda] border border-[#c3e6cb] rounded-xl"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#7a202c] bg-[#fdf2f4] border border-[#f8d7da] rounded-xl"
              >
                <Sparkles className="w-4 h-4 text-[#b82337]" />
                <span>Ask AI Beauty Assistant</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
