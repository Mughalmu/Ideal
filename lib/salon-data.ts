export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  duration: string;
  features: string[];
  imageUrl: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'transformations' | 'skincare' | 'mehndi' | 'salon';
  imageUrl: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  serviceReceived: string;
  avatarUrl?: string;
}

export const SALON_INFO = {
  name: "Ideal Beauty Salon",
  leadArtist: "Kiran Shakir",
  leadTitle: "Master Makeup Artist & Beauty Specialist",
  tagline: "Enhance Your Beauty, Elevate Your Confidence",
  phone: "+92 300 8473921",
  formattedPhone: "+923008473921",
  whatsapp: "+92 300 8473921",
  whatsappClean: "923008473921",
  email: "info@idealbeautysalon.com",
  address: "Suite 402, Luxury Beauty Boulevard, Gulberg III, Lahore",
  city: "Lahore",
  hours: "Monday – Sunday: 10:00 AM – 8:00 PM",
  instagram: "https://instagram.com/idealbeautysalon_kiranshakir",
  facebook: "https://facebook.com/idealbeautysalon",
  youtube: "https://youtube.com/idealbeautysalon",
  tiktok: "https://tiktok.com/@idealbeautysalon",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Gulberg+III+Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const HERO_DATA = {
  heading: "Where Beauty Meets Perfection",
  subheading: "Professional makeup and beauty services designed to make you look and feel your absolute best.",
  imageUrl: "/images/hero_bridal_beauty_1789199666717.jpg",
};

export const ABOUT_DATA = {
  title: "About Ideal Beauty Salon",
  artistName: "Kiran Shakir",
  subtitle: "Master Makeup Artist & Aesthetic Director",
  bioParagraph1: "Welcome to Ideal Beauty Salon, Lahore's premier sanctuary for bespoke bridal elegance, high-definition party makeup, and advanced skin revitalizing therapies. Founded and personally directed by renowned Makeup Artist Kiran Shakir, our salon represents the perfect blend of modern aesthetic trends and timeless feminine sophistication.",
  bioParagraph2: "With over 12 years of hands-on mastery in high-fashion bridal artistry, Kiran Shakir believes every individual possesses a unique beauty signature. Her philosophy centers around sculpting radiant skin, highlighting natural features, and boosting inner confidence using only world-class, dermatologist-tested cosmetics.",
  imageArtist: "/images/kiran_shakir_artist_1789199686309.jpg",
  imageSalon: "/images/salon_interior_1789199726528.jpg",
  stats: [
    { label: "Years Experience", value: "12+" },
    { label: "Brides Transformed", value: "2,500+" },
    { label: "Satisfaction Rate", value: "99.8%" },
    { label: "Luxury Product Brands", value: "35+" }
  ],
  commitments: [
    "Dermatologist-Approved Luxury Products",
    "Individual Skin & Tone Match Consultation",
    "Medical-Grade Hygiene & Sterilization",
    "Private Luxury Bridal Suites"
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    category: "Bridal",
    shortDesc: "Bespoke Barat, Walima & Nikkah bridal looks crafted for high-definition perfection.",
    fullDesc: "Our flagship bridal service led personally by Kiran Shakir. Includes custom skin preparation, airbrush/HD foundation match, intricate eye sculpting, long-wear lipstick, hair styling, jewelry setting, and dupattain setting.",
    price: "PKR 45,000 - 85,000",
    duration: "3 - 4 Hours",
    popular: true,
    features: [
      "HD / Airbrush Flawless Foundation",
      "Custom Eyelash Architecture",
      "Hair Styling & Extensions Setting",
      "Jewelry & Dupatta Styling",
      "Includes Complimentary Refreshments & Private Lounge"
    ],
    imageUrl: "/images/hero_bridal_beauty_1789199666717.jpg"
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    category: "Makeup",
    shortDesc: "Glamorous, long-lasting makeup designed for weddings, galas, and special evening events.",
    fullDesc: "Step into the spotlight with radiant skin, sculpted cheekbones, and customized eye makeup tailored to complement your evening outfit perfectly.",
    price: "PKR 15,000 - 25,000",
    duration: "1.5 - 2 Hours",
    popular: true,
    features: [
      "Luminous HD Base",
      "Smokey or Cut-Crease Eye Look",
      "High-Precision Contour & Highlight",
      "Long-wear Waterproof Finish",
      "Basic Hair Blowdry / Waves Included"
    ],
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "engagement-makeup",
    title: "Engagement Makeup",
    category: "Bridal",
    shortDesc: "Soft, romantic glow with delicate features highlighting your milestone moment.",
    fullDesc: "Designed specifically for Engagement, Dholak, or Nikkah ceremonies. Focuses on an ethereal, dewy aesthetic with soft pastel tones and weightless elegance.",
    price: "PKR 30,000 - 45,000",
    duration: "2.5 Hours",
    features: [
      "Dewy Skin Preparation",
      "Soft Glam Eye Palette",
      "Romantic Blush & Highlight",
      "Sophisticated Hair Updo or Soft Curls",
      "Dupatta Setting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    category: "Hair",
    shortDesc: "Chic updos, Hollywood waves, intricate braided crowns, and voluminous blowouts.",
    fullDesc: "Transform your hair into a work of art. Our expert hair stylists craft modern textures, sleek buns, retro waves, and regal bridal hairdos tailored to your hair length and face shape.",
    price: "PKR 6,000 - 18,000",
    duration: "45 - 90 Mins",
    features: [
      "Hollywood Glamour Waves",
      "Traditional & Textured Updos",
      "Hair Extension Installation",
      "Heat & Humidity Protection Shield",
      "Floral & Crystal Hair Accessory Setting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    category: "Hair",
    shortDesc: "Keratin smoothing, Protein rebuild, Hair Botox, and deep conditioning gloss therapy.",
    fullDesc: "Revitalize damaged, frizzy, or dull hair with our salon-grade restorative treatments. Restore silky softness, mirror-like shine, and long-lasting strength.",
    price: "PKR 12,000 - 35,000",
    duration: "2 - 3.5 Hours",
    popular: true,
    features: [
      "Formaldehyde-Free Keratin Smoothing",
      "Intense Protein Rebuilding Mask",
      "Scalp Detox & Micro-Circulation Massage",
      "Color-Locking Gloss Shine Treatment",
      "Thermal Defense Sealing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "facial-skin-care",
    title: "Facial & Skin Care",
    category: "Skin",
    shortDesc: "HydraFacial MD, Gold Radiance Peel, Deep Cleansing & Anti-Aging Vitamin C Therapy.",
    fullDesc: "Achieve glass skin before your big event. Medical-grade exfoliation, pore extraction, oxygen infusion, and soothing botanical masks designed for deep hydration.",
    price: "PKR 8,000 - 22,000",
    duration: "60 - 90 Mins",
    features: [
      "HydraFacial 6-Step Hydro Extraction",
      "24K Gold Foil Glow Mask",
      "Ultrasonic Skin Scrubbing",
      "Hyaluronic Acid & Peptide Infusion",
      "Soothing Lymphatic Facial Massage"
    ],
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "mehndi-bridal",
    title: "Mehndi / Bridal Services",
    category: "Bridal",
    shortDesc: "Intricate organic henna application, bridal hand & arm motifs, plus full bridal pampering.",
    fullDesc: "Exquisite henna artistry crafted with 100% natural, deep-staining organic henna. Custom geometric, floral, and portrait motifs for brides and bridesmaids.",
    price: "PKR 5,000 - 20,000",
    duration: "1 - 3 Hours",
    features: [
      "100% Pure Organic Chemical-Free Henna",
      "Custom Bridal Finger-to-Elbow Art",
      "Dark Color Stain Guarantee Spray",
      "Bridal Feet & Ankle Motifs",
      "Group Packages for Bridesmaids"
    ],
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "beauty-grooming",
    title: "Beauty & Grooming",
    category: "Grooming",
    shortDesc: "Spa Mani-Pedi, Velvet Waxing, Eyebrow Micro-Threading, and Eyelash Lifting.",
    fullDesc: "Complete body grooming and pampering in a serene private setting. Precise brow threading, organic paraffin wax manicures, and relaxing spa pedicures.",
    price: "PKR 3,000 - 12,000",
    duration: "30 - 90 Mins",
    features: [
      "Paraffin Hydrating Spa Manicure & Pedicure",
      "Gentle Herbal Velvet Body Waxing",
      "Precision Brow Threading & Tinting",
      "Keratin Lash Lift & Tint",
      "Sterilized Single-Use Instruments"
    ],
    imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
  }
];

export const BRIDAL_SPOTLIGHT_DATA = {
  title: "Bridal Transformations by Kiran Shakir",
  tagline: "Your Wedding Day Perfection Starts Here",
  description: "Your wedding day is one of the most cherished moments of your life. At Ideal Beauty Salon, Kiran Shakir curates a serene, luxurious, and stress-free bridal experience. From initial skin assessment to the final veil drape, every detail is handled with artistic precision.",
  imageUrl: "/images/bridal_transformation_1789199707798.jpg",
  perks: [
    "Personalized Pre-Bridal Consultation & Skin Prep Timeline",
    "Airbrush & High-Definition Makeup for 18-Hour Wear",
    "Exclusive Private VIP Bridal Suite with Refreshment Bar",
    "Expert Jewelry, Headpiece & Heavy Dupatta Draping",
    "On-Location / Venue Booking Options Available upon Request"
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Royal Barat Bridal Transformation",
    category: "bridal",
    imageUrl: "/images/hero_bridal_beauty_1789199666717.jpg",
    caption: "Deep crimson lip signature with luminous HD base and regal gold headpiece drape."
  },
  {
    id: "gal-2",
    title: "Ethereal Nikkah Bride Glow",
    category: "bridal",
    imageUrl: "/images/bridal_transformation_1789199707798.jpg",
    caption: "Soft peach & rose gold tones with delicate lashes for a dreamy morning Nikkah look."
  },
  {
    id: "gal-3",
    title: "Hollywood Waves & Textured Hair",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    caption: "Glossy vintage Hollywood waves sculpted with thermal protection."
  },
  {
    id: "gal-4",
    title: "HydraFacial Glass Skin Result",
    category: "skincare",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    caption: "Post-HydraFacial natural radiance and deep pore refinement."
  },
  {
    id: "gal-5",
    title: "Intricate Organic Bridal Henna",
    category: "mehndi",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    caption: "Handcrafted intricate floral motifs extending to elbows with organic dark stain."
  },
  {
    id: "gal-6",
    title: "Luxury Salon Suite Experience",
    category: "salon",
    imageUrl: "/images/salon_interior_1789199726528.jpg",
    caption: "Our private vanity suite illuminated with warm soft ring lights for ultimate comfort."
  },
  {
    id: "gal-7",
    title: "Walima Pastel Glam Makeup",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    caption: "Champagne gold glitter lid accent paired with nude-rose satin lips."
  },
  {
    id: "gal-8",
    title: "Chic Bridal Crown Updo",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    caption: "Textured braided crown bun adorned with fresh baby's breath flowers."
  }
];

export const WHY_CHOOSE_US = [
  {
    iconName: "Sparkles",
    title: "Professional Makeup Artist",
    description: "Led directly by master artist Kiran Shakir with over 12 years of high-fashion and bridal expertise."
  },
  {
    iconName: "ShieldCheck",
    title: "High-Quality Beauty Products",
    description: "We use exclusively premium international cosmetics including Charlotte Tilbury, NARS, Dior, Huda Beauty & Kryolan."
  },
  {
    iconName: "UserCheck",
    title: "Personalized Consultation",
    description: "Bespoke color matching, skin diagnosis, and outfit harmony planning tailored uniquely to your style."
  },
  {
    iconName: "Award",
    title: "Experienced Service",
    description: "Over 2,500+ satisfied brides and 10,000+ happy clients trust our proven aesthetic excellence."
  },
  {
    iconName: "Sparkle",
    title: "Professional & Hygienic Environment",
    description: "Hospital-grade UV sterilization of instruments, single-use applicators, and sanitized luxury private suites."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    clientName: "Ayesha Khan",
    role: "Barat Bride",
    rating: 5,
    comment: "Kiran Shakir made my wedding day an absolute dream! My makeup stayed flawless for 16 hours straight through tears, dancing, and photography. Everyone complimented my radiant skin. Truly the best bridal salon in town!",
    date: "August 2026",
    serviceReceived: "Full Barat Bridal Package"
  },
  {
    id: "rev-2",
    clientName: "Dr. Mahnoor Tariq",
    role: "Walima Bride",
    rating: 5,
    comment: "The level of professionalism, cleanliness, and attention to detail at Ideal Beauty Salon is unmatched. Kiran listens carefully to what you want and delivers beyond expectations. The private bridal suite was so calming!",
    date: "July 2026",
    serviceReceived: "Walima Signature Bridal Makeup"
  },
  {
    id: "rev-3",
    clientName: "Zainab Malik",
    role: "Party Glam Client",
    rating: 5,
    comment: "I booked Kiran for my sister's engagement and got endless compliments on my smokey eyes and Hollywood waves! Soft, lightweight feel with zero cakey finish. Highly recommended!",
    date: "August 2026",
    serviceReceived: "Party Glam & Hollywood Waves"
  },
  {
    id: "rev-4",
    clientName: "Sobia Ahmed",
    role: "Regular Skin & Hair Client",
    rating: 5,
    comment: "The HydraFacial treatment transformed my dull skin in just one session. My face was glowing for weeks! The staff is super respectful, warm, and highly skilled.",
    date: "June 2026",
    serviceReceived: "HydraFacial Glow & Keratin Hair Spa"
  }
];

export const FAQS = [
  {
    q: "How far in advance should I book my bridal appointment?",
    a: "We recommend booking your bridal slot at least 2 to 3 months in advance, especially during peak wedding season (October to March). Direct WhatsApp inquiries can reserve dates instantly."
  },
  {
    q: "Are trial makeup sessions available with Kiran Shakir?",
    a: "Yes! We offer 1-on-1 bridal consultation and skin assessment sessions where Kiran discusses tone matching, eye style options, and outfit coordination."
  },
  {
    q: "Which cosmetic brands do you use?",
    a: "We strictly use 100% authentic luxury brands including Charlotte Tilbury, NARS, Dior, Huda Beauty, MAC, Kryolan Professional, Anastasia Beverly Hills, and Estée Lauder."
  },
  {
    q: "Do you offer venue / home bridal services?",
    a: "Yes, on-location bridal packages are available upon special request and subject to Kiran Shakir's schedule availability. Please contact us via WhatsApp for venue travel rates."
  }
];
