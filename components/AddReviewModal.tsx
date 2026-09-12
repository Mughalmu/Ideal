'use client';

import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { Testimonial } from '@/lib/salon-data';

interface AddReviewModalProps {
  onClose: () => void;
  onAddReview: (newReview: Testimonial) => void;
}

export default function AddReviewModal({ onClose, onAddReview }: AddReviewModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Bridal Client');
  const [service, setService] = useState('Bridal Makeup');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const review: Testimonial = {
      id: `rev-${Date.now()}`,
      clientName: name,
      role: role,
      rating: rating,
      comment: comment,
      date: 'Just now',
      serviceReceived: service,
    };

    onAddReview(review);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-[#ebdcd8]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#78676a] hover:bg-[#faf7f5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4edda] text-[#155724] flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-[#241e20]">Thank You!</h3>
            <p className="text-sm text-[#524548]">
              Your review has been submitted successfully and added to Ideal Beauty Salon&apos;s client testimonials.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b82337]">Client Voice</span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#241e20]">
                Leave a Customer Review
              </h3>
              <p className="text-xs text-[#6e5d61]">Share your experience with Kiran Shakir and Ideal Beauty Salon</p>
            </div>

            {/* Rating Stars Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#332a2c] mb-1">Your Rating</label>
              <div className="flex gap-1 text-[#ffd700]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none transition-transform hover:scale-125"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating ? 'fill-current text-[#ffd700]' : 'text-[#e2d7d2]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#332a2c] mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sara Ahmed"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] focus:ring-1 focus:ring-[#b82337] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#332a2c] mb-1">Role / Occasion</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#ebdcd8] focus:border-[#b82337] outline-none bg-white"
                >
                  <option value="Barat Bride">Barat Bride</option>
                  <option value="Walima Bride">Walima Bride</option>
                  <option value="Engagement Bride">Engagement Bride</option>
                  <option value="Party Glam Client">Party Glam Client</option>
                  <option value="Skin & Hair Client">Skin & Hair Client</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#332a2c] mb-1">Service Received</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. Bridal HD Makeup"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#ebdcd8] focus:border-[#b82337] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#332a2c] mb-1">Your Feedback / Review *</label>
              <textarea
                required
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Describe your salon experience, makeup longevity, staff demeanor..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] focus:ring-1 focus:ring-[#b82337] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Review</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
