import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "A valid question is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Return helpful fallback response if key is not configured yet
      return NextResponse.json({
        answer:
          "Welcome to Ideal Beauty Salon by Kiran Shakir! For personalized bridal and beauty advice, we recommend scheduling a 1-on-1 consultation with Kiran Shakir. For skin prep before makeup: stay hydrated, moisturize daily, and avoid new chemical treatments 1 week prior to your event!",
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = `You are the AI Beauty Consultant for Ideal Beauty Salon, led by Kiran Shakir, Makeup Artist.
Brand Tagline: "Enhance Your Beauty, Elevate Your Confidence"
Tone: Warm, luxurious, knowledgeable, encouraging, and professional.
Services offered: Bridal Makeup (Barat, Walima, Nikkah), Party Makeup, Engagement Makeup, Hair Styling, Hair Treatments (Keratin, Botox), Facial & Skin Care (HydraFacial, Glow Peel), Mehndi / Henna, and Beauty Grooming.
Answer the client's beauty, skin prep, hair care, or bridal styling question in 2-3 concise, helpful paragraphs with bullet points if useful. Always suggest booking an appointment with Kiran Shakir at Ideal Beauty Salon for bespoke consultations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: `${systemPrompt}\n\nUser Question: ${question}` }] }
      ]
    });

    const answer = response.text || "Thank you for reaching out to Ideal Beauty Salon! Please contact Kiran Shakir directly via WhatsApp for instant assistance.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Beauty assistant error:", error);
    return NextResponse.json({
      answer:
        "Thank you for asking! For urgent beauty inquiries, please book a direct consultation or chat with Kiran Shakir on WhatsApp.",
    });
  }
}
