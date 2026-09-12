'use client';

import React, { useState } from 'react';
import { TESTIMONIALS, Testimonial } from '@/lib/salon-data';
import { Sparkles, Star, Quote, PlusCircle, CheckCircle } from 'lucide-react';
import AddReviewModal from './AddReviewModal';

export default function TestimonialsSection() {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showModal, setShowModal] = useState(false);

  const handleAddReview = (newRev: Testimonial) => {
    setReviewsList([newRev, ...reviewsList]);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#faf7f5] relative border-t border-[#ebdcd8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Loved by 2,500+ Brides & Clients
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            Read real stories from brides and beauty lovers who trusted Kiran Shakir and Ideal Beauty Salon for their special occasions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#241e20] bg-white px-4 py-2 rounded-full border border-[#ebdcd8] shadow-xs">
              <div className="flex text-[#ffd700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9 / 5.0 Average Rating</span>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#b82337] bg-[#fdf2f4] hover:bg-[#f8d7da] border border-[#f5c2c7] rounded-full transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Leave a Client Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-white border border-[#ebdcd8] shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#ffd700]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8a7679] font-medium">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-[#f5c2c7]" />

                <p className="text-sm text-[#4a3f42] italic leading-relaxed font-sans">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0e4e0] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury font-bold text-[#241e20] text-base">
                    {rev.clientName}
                  </h4>
                  <span className="text-xs text-[#b82337] font-semibold block">
                    {rev.role}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#155724] bg-[#d4edda] px-2.5 py-1 rounded-full font-medium">
                  <CheckCircle className="w-3 h-3 text-[#25d366]" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {showModal && (
        <AddReviewModal
          onClose={() => setShowModal(false)}
          onAddReview={handleAddReview}
        />
      )}
    </section>
  );
}
