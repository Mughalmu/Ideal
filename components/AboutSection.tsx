'use client';

import React from 'react';
import { ABOUT_DATA, SALON_INFO } from '@/lib/salon-data';
import { Award, CheckCircle2, HeartHandshake, Sparkles, Star } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet Our Founder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Artistry, Elegance & Trust
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#5c4f52] font-sans">
            Crafting memorable transformations for over a decade with passion, luxury precision, and authentic feminine elegance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Artist Portrait */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[3/4] bg-white">
                <img
                  src={ABOUT_DATA.imageArtist}
                  alt="Kiran Shakir Makeup Artist"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Secondary Salon Ambiance Card overlay */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded-xl overflow-hidden border-4 border-white shadow-2xl bg-white hidden sm:block">
                <img
                  src={ABOUT_DATA.imageSalon}
                  alt="Ideal Beauty Salon Luxury Interior"
                  className="w-full h-32 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-2.5 bg-[#1a1617] text-white text-[11px] font-medium text-center">
                  Private VIP Suites
                </div>
              </div>

              {/* Experience Stamp */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#b82337] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-[#ffd700]" />
                <div>
                  <div className="text-2xl font-bold font-serif-luxury leading-none">12+</div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider opacity-90">Years Excellence</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-sm font-semibold text-[#b82337] uppercase tracking-wider">
                {ABOUT_DATA.subtitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#241e20] mt-1">
                Kiran Shakir
              </h3>
              <p className="text-sm text-[#7a6a6d] font-medium mt-0.5">
                Founder & Lead Aesthetic Director, Ideal Beauty Salon
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4a3f42] leading-relaxed">
              {ABOUT_DATA.bioParagraph1}
            </p>

            <p className="text-sm sm:text-base text-[#4a3f42] leading-relaxed">
              {ABOUT_DATA.bioParagraph2}
            </p>

            {/* Commitments checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_DATA.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#ebdcd8]">
                  <CheckCircle2 className="w-4 h-4 text-[#b82337] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#332a2c]">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#ebdcd8]">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#b82337]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#6e5d61] font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Call */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-md"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Kiran%20Shakir,%20I%20would%20like%20to%20ask%20a%20few%20questions%20about%20your%20salon%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center text-xs font-semibold text-[#7a202c] hover:underline"
              >
                Direct WhatsApp with Kiran Shakir →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
