import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import BookingCtaSection from "@/components/BookingCtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import PricingSection from "@/components/PricingSection";
import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import RulesSection from "@/components/RulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import DeveloperPromoSection from "@/components/DeveloperPromoSection";
import { property } from "@/data/property";

export default function Home() {
  return (
    <>
      <Navbar name={property.name} whatsapp={property.whatsapp} />
      <main id="inicio">
        <HeroSection property={property} />
        <TrustBar items={property.trustItems} />
        <AboutSection property={property} />
        <GallerySection gallery={property.gallery} />
        <AmenitiesSection amenities={property.amenities} />
        <RoomsSection property={property} />
        <PricingSection property={property} />
        <LocationSection property={property} />
        <RulesSection rules={property.rules} />
        <FaqSection faqs={property.faqs} />
        <TestimonialsSection property={property} />
        <BookingCtaSection property={property} />
        <DeveloperPromoSection property={property} />
      </main>
      <Footer property={property} />
      <WhatsAppFloatingButton property={property} />
    </>
  );
}
