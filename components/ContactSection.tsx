'use client';

import React from 'react';
import { SALON_INFO } from '@/lib/salon-data';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube, Share2, Sparkles } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#faf7f5] relative border-t border-[#ebdcd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Visit Ideal Beauty Salon
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            Located in the heart of Lahore. Visit our sanctuary of elegance or reach out via phone, email, or social media.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd8] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf2f4] text-[#b82337] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-luxury font-bold text-[#241e20] text-lg">Salon Location</h4>
                <p className="text-xs text-[#524548] mt-1 leading-relaxed">{SALON_INFO.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#b82337] hover:underline mt-2 inline-block"
                >
                  Get Directions in Google Maps →
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd8] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf2f4] text-[#b82337] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-luxury font-bold text-[#241e20] text-lg">Phone & WhatsApp</h4>
                <p className="text-xs text-[#524548] mt-1">{SALON_INFO.phone}</p>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href={`tel:${SALON_INFO.formattedPhone}`}
                    className="text-xs font-semibold text-[#b82337] hover:underline"
                  >
                    Call Now
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#1f663c] flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    WhatsApp Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd8] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fdf2f4] text-[#b82337] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-luxury font-bold text-[#241e20] text-lg">Opening Hours</h4>
                <p className="text-xs text-[#524548] mt-1">{SALON_INFO.hours}</p>
                <p className="text-[11px] text-[#8a7679] mt-1">Open 7 days a week for appointments & consultations.</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#1a1617] text-white border border-[#3d3034] shadow-md space-y-3">
              <h4 className="font-serif-luxury font-bold text-lg text-white flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#e8b4b8]" />
                <span>Follow Kiran Shakir</span>
              </h4>
              <p className="text-xs text-[#d1c2bd]">
                Join our Instagram community of 150K+ followers for daily live bridal transformations and beauty tutorials.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={SALON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#332a2c] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SALON_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#332a2c] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SALON_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#332a2c] hover:bg-[#b82337] text-white flex items-center justify-center transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Map Preview */}
          <div className="lg:col-span-7 h-full min-h-[420px] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white relative">
            <iframe
              src={SALON_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ideal Beauty Salon Location Map"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
