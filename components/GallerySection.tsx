'use client';

import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/salon-data';
import { Sparkles, Eye, Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function GallerySection({ onOpenBooking }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Bridal Transformations', value: 'bridal' },
    { label: 'Hairstyles', value: 'hair' },
    { label: 'Skin Radiance', value: 'skincare' },
    { label: 'Mehndi Art', value: 'mehndi' },
    { label: 'Salon Ambiance', value: 'salon' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#faf7f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Transformations & Artistry Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            Explore our curated showcase of bridal glamour, high-fashion hair styling, skin glow treatments, and salon aesthetics. Click any image for full-screen view.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-[#b82337] text-white shadow-md shadow-[#b82337]/20 scale-105'
                  : 'bg-white text-[#4a3f42] hover:bg-[#f5eae7] border border-[#ebdcd8]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#1a1617] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/5] border border-[#ebdcd8]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8b4b8] mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif-luxury text-lg font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-[#d1c2bd] line-clamp-2 mt-1">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#b82337] bg-white px-3 py-1.5 rounded-full w-fit">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View High-Res</span>
                </div>
              </div>

              {/* Hover Icon Indicator */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white group-hover:bg-[#b82337] transition-colors">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
        onBookService={(name) => onOpenBooking(name)}
      />
    </section>
  );
}
