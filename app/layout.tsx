import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ideal Beauty Salon | Kiran Shakir Makeup Artist',
  description: 'Enhance Your Beauty, Elevate Your Confidence. Professional bridal makeup, party glam, hair styling, skin care, and luxury beauty services by Kiran Shakir.',
  keywords: [
    'Ideal Beauty Salon',
    'Kiran Shakir Makeup Artist',
    'Bridal Makeup Salon',
    'Hair Styling',
    'Facial and Skin Care',
    'Party Makeup',
    'Mehndi Services',
    'Beauty Salon'
  ],
  openGraph: {
    title: 'Ideal Beauty Salon | Kiran Shakir Makeup Artist',
    description: 'Enhance Your Beauty, Elevate Your Confidence. Luxury bridal & beauty services by Kiran Shakir.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Beauty Salon | Kiran Shakir Makeup Artist',
    description: 'Enhance Your Beauty, Elevate Your Confidence.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#faf7f5] text-[#241e20] antialiased selection:bg-[#b82337] selection:text-white">
        {children}
      </body>
    </html>
  );
}
