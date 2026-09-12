'use client';

import React from 'react';
import { HERO_DATA, SALON_INFO } from '@/lib/salon-data';
import { Calendar, Sparkles, MessageCircle, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBooking, onExploreServices }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-[#F7EFEC] to-[#FAF7F5]">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F5DED9]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E8B4B8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf0f2] border border-[#f5c2c7] text-[#9e1b32] text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#b82337]" />
              <span>{SALON_INFO.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#241e20] leading-[1.12] tracking-tight">
              Where Beauty <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#b82337]">Meets Perfection</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#524548] max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              {HERO_DATA.subheading} Experience bespoke bridal couture makeup, revitalizing aesthetic skin therapies, and world-class hair styling personally directed by master makeup artist <strong>Kiran Shakir</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Book Appointment CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all duration-300 shadow-lg shadow-[#b82337]/20 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book an Appointment</span>
              </button>

              {/* Explore Services CTA */}
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#241e20] bg-white border border-[#e2d7d2] hover:border-[#b82337] hover:text-[#b82337] rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Booking CTA */}
              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20want%20to%20book%20a%20bridal/beauty%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#1f663c] bg-[#e6f4ea] hover:bg-[#d2ebd9] border border-[#b7e1cd] rounded-full transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4.5 h-4.5 text-[#25d366]" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-[#ebdcd8]/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#635558]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#e6a100]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#241e20]">4.9 / 5.0 Rating</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b82337]" />
                <span>2,500+ Happy Brides</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#7a202c] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#b82337]/20 via-[#f8d7da]/30 to-transparent blur-xl pointer-events-none" />

              {/* Main Luxury Hero Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/5]">
                <img
                  src={HERO_DATA.imageUrl}
                  alt="Ideal Beauty Salon Luxury Bridal Makeup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Artist Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#ebdcd8] shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#b82337]">Master Artistry</span>
                    <h3 className="font-serif-luxury font-bold text-[#241e20] text-lg">Kiran Shakir</h3>
                    <p className="text-xs text-[#635558]">Bridal & High-Fashion Specialist</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#fdf2f4] border border-[#f5c2c7] flex items-center justify-center text-[#b82337]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl border border-[#ebdcd8] shadow-xl hidden sm:flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-[#b82337] text-white flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-[#241e20]">#1 Beauty Salon</p>
                  <p className="text-[10px] text-[#78676a]">Top Rated Bridal Artistry</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
