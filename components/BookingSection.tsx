'use client';

import React, { useState, useEffect } from 'react';
import { SALON_INFO, SERVICES_LIST } from '@/lib/salon-data';
import { Calendar, Clock, MessageCircle, Sparkles, CheckCircle, Send, User, Phone, FileText } from 'lucide-react';

interface BookingSectionProps {
  preselectedService?: string;
}

export default function BookingSection({ preselectedService }: BookingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Bridal Makeup');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState(preselectedService || 'Bridal Makeup');
  const [prevPreselected, setPrevPreselected] = useState(preselectedService);

  if (preselectedService !== prevPreselected) {
    setPrevPreselected(preselectedService);
    if (preselectedService) {
      setService(preselectedService);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const randomRef = `IBS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(randomRef);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hello Ideal Beauty Salon (Kiran Shakir),%0A%0A*New Appointment Inquiry*%0A• *Name:* ${encodeURIComponent(name || 'Not provided')}%0A• *Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A• *Service:* ${encodeURIComponent(service)}%0A• *Preferred Date:* ${encodeURIComponent(preferredDate || 'Flexible')}%0A• *Preferred Time:* ${encodeURIComponent(preferredTime)}%0A• *Notes:* ${encodeURIComponent(message || 'None')}%0A%0APlease confirm availability!`;
    return `https://wa.me/${SALON_INFO.whatsappClean}?text=${text}`;
  };

  const timeSlots = [
    '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  return (
    <section id="booking" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7F5] via-[#F5EAE7] to-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20]">
            Book Your Beauty Session
          </h2>
          <div className="w-16 h-0.5 bg-[#b82337] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#524548] font-sans">
            Reserve your date with Kiran Shakir and our team. Fill out the quick reservation form below or use instant WhatsApp booking.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#ebdcd8] shadow-xl">
            {bookingRef ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#d4edda] text-[#155724] flex items-center justify-center mx-auto text-3xl font-bold shadow-inner">
                  ✓
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b82337]">
                    Appointment Request Received
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#241e20] mt-1">
                    Reference: {bookingRef}
                  </h3>
                  <p className="text-sm text-[#524548] max-w-md mx-auto mt-2">
                    Thank you, <strong>{name}</strong>! We have received your booking request for <strong>{service}</strong>. Our salon coordinator will call or WhatsApp you shortly at {phone}.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="p-4 rounded-xl bg-[#faf7f5] border border-[#ebdcd8] text-xs text-left max-w-md mx-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#78676a]">Service:</span>
                    <span className="font-semibold text-[#241e20]">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78676a]">Date & Time:</span>
                    <span className="font-semibold text-[#241e20]">{preferredDate || 'Pending confirmation'} @ {preferredTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78676a]">Client Contact:</span>
                    <span className="font-semibold text-[#241e20]">{phone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#155724] bg-[#d4edda] hover:bg-[#c3e6cb] rounded-full shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25d366]" />
                    <span>Send Request to WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setBookingRef(null)}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-[#4a3f42] bg-[#f5eae7] hover:bg-[#e8dad6] rounded-full"
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#ebdcd8] pb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#241e20]">
                    Appointment Details
                  </h3>
                  <span className="text-xs text-[#b82337] font-semibold">Step 1 of 1</span>
                </div>

                {/* Inputs: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#b82337]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mahnoor Khan"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] focus:ring-1 focus:ring-[#b82337] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#b82337]" />
                      <span>Phone / WhatsApp Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] focus:ring-1 focus:ring-[#b82337] outline-none"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#b82337]" />
                    <span>Select Desired Service *</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] outline-none bg-white text-[#241e20]"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#b82337]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b82337]" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] outline-none bg-white text-[#241e20]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Special Instructions */}
                <div>
                  <label className="block text-xs font-semibold text-[#332a2c] mb-1.5 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#b82337]" />
                    <span>Special Requests / Outfit Color Details</span>
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide event date details, hair extension requirements, or skin sensitivities..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#ebdcd8] focus:border-[#b82337] focus:ring-1 focus:ring-[#b82337] outline-none"
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-lg shadow-[#b82337]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Reservation</span>
                  </button>

                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-[#ebdcd8]"></div>
                    <span className="flex-shrink mx-4 text-xs text-[#8a7679] font-medium">OR INSTANT WHATSAPP</span>
                    <div className="flex-grow border-t border-[#ebdcd8]"></div>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 text-sm font-semibold text-[#155724] bg-[#d4edda] hover:bg-[#c3e6cb] border border-[#c3e6cb] rounded-full transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25d366]" />
                    <span>Book Instantly via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info & WhatsApp Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#1a1617] text-white border border-[#3d3034] shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332a2c] text-[#e8b4b8] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#b82337]" />
                <span>Instant Salon Desk</span>
              </div>

              <h3 className="text-2xl font-serif-luxury font-bold text-white">
                Direct WhatsApp Booking
              </h3>

              <p className="text-xs text-[#d1c2bd] leading-relaxed">
                Prefer immediate response? Tap our WhatsApp button to chat directly with Kiran Shakir or our desk coordinator. Get instant date availability, custom quotes, and customized skin prep guides.
              </p>

              <div className="space-y-3 text-xs text-[#e8dad6]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25d366]" />
                  <span>Instant slot verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25d366]" />
                  <span>Send outfit photos for color matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25d366]" />
                  <span>Custom bridal package customization</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Open WhatsApp ({SALON_INFO.whatsapp})</span>
              </a>
            </div>

            {/* Timing Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd8] shadow-sm space-y-2">
              <h4 className="font-serif-luxury font-bold text-[#241e20] text-lg">Salon Working Hours</h4>
              <p className="text-xs text-[#524548] flex items-center justify-between">
                <span>Monday – Sunday:</span>
                <span className="font-bold text-[#b82337]">10:00 AM – 08:00 PM</span>
              </p>
              <p className="text-[11px] text-[#8a7679]">
                * Special early morning bridal dressing slots (5:00 AM - 9:00 AM) available upon prior reservation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
