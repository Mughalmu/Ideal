'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/lib/salon-data';
import { Sparkles, UserCheck, ShieldCheck, Award, HeartHandshake, CheckCircle } from 'lucide-react';

export default function WhyChooseUsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#b82337]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#b82337]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#b82337]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#b82337]" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-[#b82337]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#faf7f5] relative border-t border-[#ebdcd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ideal Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Why Choose Ideal Beauty Salon?
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            We combine high-fashion artistry, clinical hygiene standards, and bespoke customer care to ensure your beauty experience is nothing short of flawless.
          </p>
        </div>

        {/* 5 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-white border border-[#ebdcd8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-1 md:col-span-2 bg-gradient-to-br from-white via-white to-[#fdf2f4]' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf2f4] border border-[#f5c2c7] flex items-center justify-center group-hover:bg-[#b82337] group-hover:text-white transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-serif-luxury font-bold text-[#241e20] group-hover:text-[#b82337] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#524548] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0e4e0] flex items-center gap-2 text-xs font-semibold text-[#b82337]">
                <CheckCircle className="w-4 h-4" />
                <span>Guaranteed Quality Standard</span>
              </div>
            </div>
          ))}

          {/* Luxury Products Showcase Card */}
          <div className="p-8 rounded-2xl bg-[#1a1617] text-white border border-[#3d3034] shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e8b4b8]">
                Authenticity Promise
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-white">
                100% Original International Cosmetics
              </h3>
              <p className="text-xs text-[#d1c2bd] leading-relaxed">
                We strictly use original luxury formulations from Charlotte Tilbury, NARS, Dior Beauty, Huda Beauty, MAC, and Kryolan. No cheap substitutes or skin-damaging replicas.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="px-2.5 py-1 rounded-md bg-[#332a2c] border border-white/10">Charlotte Tilbury</span>
              <span className="px-2.5 py-1 rounded-md bg-[#332a2c] border border-white/10">NARS Cosmetics</span>
              <span className="px-2.5 py-1 rounded-md bg-[#332a2c] border border-white/10">Dior Beauty</span>
              <span className="px-2.5 py-1 rounded-md bg-[#332a2c] border border-white/10">Huda Beauty</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
