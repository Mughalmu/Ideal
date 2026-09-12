'use client';

import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem, SALON_INFO } from '@/lib/salon-data';
import { Sparkles, Clock, Calendar, Info, MessageCircle, Star } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Skin', 'Grooming'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf7f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Signature Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Bespoke Beauty & Hair Services
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            Tailored to enhance your unique glow. Each treatment is conducted using premium dermatologist-tested cosmetics and high-fashion styling techniques.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#b82337] text-white shadow-md shadow-[#b82337]/20 scale-105'
                  : 'bg-white text-[#4a3f42] hover:bg-[#f5eae7] border border-[#ebdcd8]'
              }`}
            >
              {cat === 'All' ? 'All Services' : cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#ebdcd8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badge Header */}
              <div className="relative h-48 overflow-hidden bg-[#1a1617]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/90 backdrop-blur-xs text-[#b82337] shadow-xs">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#b82337] text-white shadow-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-[#ffd700]" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex justify-between items-end">
                  <div className="flex items-center gap-1 text-[11px] font-medium bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3 text-[#e8b4b8]" />
                    <span>{service.duration}</span>
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="p-1.5 rounded-full bg-white/90 text-[#241e20] hover:bg-[#b82337] hover:text-white transition-colors"
                    title="Quick Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#241e20] group-hover:text-[#b82337] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6e5d61] leading-relaxed mt-1 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features Snippet */}
                <div className="space-y-1.5 pt-2 border-t border-[#f0e4e0] text-[11px] text-[#4a3f42]">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b82337] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Booking Button */}
                <div className="pt-3 border-t border-[#f0e4e0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#8a7679] block">Price Guide</span>
                    <span className="text-sm font-bold text-[#b82337] font-serif-luxury">{service.price}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1a1617] via-[#2c2225] to-[#1a1617] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#3d3034]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-serif-luxury font-bold text-white">
              Need a Custom Bridal Package or Salon Consultation?
            </h4>
            <p className="text-xs text-[#d1c2bd]">
              Chat directly with Kiran Shakir or our salon team on WhatsApp to get tailored package pricing and availability.
            </p>
          </div>

          <a
            href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20would%20like%20a%20custom%20bridal/beauty%20package%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#155724] bg-[#d4edda] hover:bg-[#c3e6cb] rounded-full transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#25d366]" />
            <span>Consult via WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => onOpenBooking(title)}
      />
    </section>
  );
}
