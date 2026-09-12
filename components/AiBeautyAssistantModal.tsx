'use client';

import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '@/lib/salon-data';

interface AiBeautyAssistantModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function AiBeautyAssistantModal({
  onClose,
  onOpenBooking,
}: AiBeautyAssistantModalProps) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: "Hello! I am Kiran's AI Beauty Assistant for Ideal Beauty Salon. Ask me anything about bridal makeup prep, skin care routines before your event, outfit color matching, or our signature hair treatments!",
    },
  ]);

  const sampleQuestions = [
    "What skin prep should I do 1 week before my Barat?",
    "Which makeup style suits a dark crimson bridal lehenga?",
    "Difference between Keratin and Hair Botox treatment?",
    "How to make party makeup last all night?"
  ];

  const handleAsk = async (textToAsk?: string) => {
    const q = textToAsk || question;
    if (!q.trim()) return;

    const userMsg = { sender: 'user' as const, text: q };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await fetch('/api/beauty-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      const aiResponse = data.answer || "Thank you for asking! For personalized beauty consultations, please connect directly with Kiran Shakir on WhatsApp.";

      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "For immediate personalized bridal consultation, please reach out to Kiran Shakir directly on WhatsApp!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#ebdcd8] overflow-hidden flex flex-col h-[85vh] max-h-[650px]">
        
        {/* Header */}
        <div className="p-4 bg-[#1a1617] text-white flex items-center justify-between border-b border-[#332a2c]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#b82337] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-base font-bold">Kiran&apos;s AI Beauty Assistant</h3>
              <p className="text-[10px] text-[#d1c2bd]">Ideal Beauty Salon • Personalized Advice</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#d1c2bd] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#faf7f5]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-[#b82337] text-white flex items-center justify-center shrink-0 mt-1 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#b82337] text-white rounded-br-none'
                    : 'bg-white text-[#241e20] border border-[#ebdcd8] shadow-xs rounded-bl-none'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#332a2c] text-white flex items-center justify-center shrink-0 mt-1 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-[#b82337] font-medium bg-white p-3 rounded-2xl border border-[#ebdcd8] w-fit animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Consulting Kiran&apos;s Beauty Knowledgebase...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts */}
        <div className="p-2.5 bg-white border-t border-[#f0e4e0] flex items-center gap-1.5 overflow-x-auto text-[11px]">
          {sampleQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => handleAsk(sq)}
              className="shrink-0 px-3 py-1.5 rounded-full bg-[#faf7f5] hover:bg-[#f5eae7] text-[#524548] border border-[#ebdcd8] transition-colors"
            >
              {sq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#ebdcd8] flex items-center gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            placeholder="Ask a beauty or bridal makeup question..."
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-full border border-[#ebdcd8] focus:border-[#b82337] outline-none"
          />

          <button
            onClick={() => handleAsk()}
            disabled={loading || !question.trim()}
            className="p-2.5 rounded-full bg-[#b82337] hover:bg-[#9e1b32] text-white disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
