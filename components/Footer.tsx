'use client';

import React from 'react';
import { SALON_INFO } from '@/lib/salon-data';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle, Heart, Sparkles, Layers } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenElementorInfo: () => void;
}

export default function Footer({ onOpenBooking, onOpenElementorInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Bridal Transformations', href: '#bridal' },
    { name: 'Portfolio Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1a1617] text-white pt-16 pb-12 border-t border-[#332a2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#332a2c]">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b82337] text-white flex items-center justify-center font-serif-luxury font-bold text-xl shadow-md">
                I
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl font-bold tracking-tight text-white">
                  Ideal Beauty Salon
                </span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-[#e8b4b8]">
                  Kiran Shakir • Makeup Artist
                </span>
              </div>
            </div>

            <p className="font-serif-luxury italic text-base text-[#e8dad6]">
              &quot;Your Beauty, Our Passion.&quot;
            </p>

            <p className="text-xs text-[#a09093] leading-relaxed max-w-sm">
              Ideal Beauty Salon is Lahore&apos;s premier luxury salon dedicated to high-definition bridal makeup, bespoke hair styling, and glowing skin therapies under the artistic vision of master artist Kiran Shakir.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2c2225] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2c2225] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2c2225] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#155724] hover:bg-[#25d366] text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury font-bold text-lg text-white border-b border-[#332a2c] pb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-[#d1c2bd]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#e8b4b8] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#b82337]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#d1c2bd]">
            <h4 className="font-serif-luxury font-bold text-lg text-white border-b border-[#332a2c] pb-2">
              Salon Contact
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b82337] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b82337] shrink-0" />
                <span>{SALON_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" />
                <span>WhatsApp: {SALON_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b82337] shrink-0" />
                <span>{SALON_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury font-bold text-lg text-white border-b border-[#332a2c] pb-2">
              Book Today
            </h4>
            <p className="text-xs text-[#a09093]">
              Reserve your wedding date or beauty session.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-md"
            >
              Book Appointment
            </button>

            <button
              onClick={onOpenElementorInfo}
              className="w-full py-2 px-3 text-[11px] font-medium text-[#e8b4b8] hover:text-white bg-[#2c2225] border border-[#3d3034] rounded-full transition-colors flex items-center justify-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Elementor & CMS Ready</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8a7679] gap-4">
          <p>© {currentYear} Ideal Beauty Salon. Lead Artist Kiran Shakir. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#b82337] fill-current" />
            <span>for Elegance & Confidence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
