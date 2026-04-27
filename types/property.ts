import type { LucideIcon } from "lucide-react";

export type Stat = {
  label: string;
  value: string;
};

export type GalleryImage = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export type Amenity = {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
};

export type Room = {
  title: string;
  description: string;
  features: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  guestType: string;
  comment: string;
  rating: number;
};

export type PricingItem = {
  label: string;
  value: string;
};

export type Property = {
  name: string;
  location: string;
  shortLocation: string;
  locationNote: string;
  description: string;
  whatsapp: string;
  phoneDisplay: string;
  email: string;
  mapsUrl: string;
  airbnbUrl: string;
  heroImage: string;
  bookingMessage: string;
  developerMessage: string;
  parkingNote: string;
  accessText: string;
  stats: Stat[];
  trustItems: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  gallery: GalleryImage[];
  amenities: Amenity[];
  rooms: Room[];
  pricing: PricingItem[];
  pricingNote: string;
  rules: string[];
  faqs: Faq[];
  testimonials: Testimonial[];
};
