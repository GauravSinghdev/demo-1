import HeroSection from "@/components/shared/HeroSection";
import QuickBookingSection from "@/components/shared/QuickBookingSection";
import Testimonials from "@/components/shared/Testimonials";
import Contact from "@/components/shared/Contact";
import Feature from "@/components/shared/Feature";
import PopDest from "@/components/shared/PopDest";
export default function HolidayBookingLanding() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Quick Booking Form */}
      <HeroSection />

      {/* Quick Booking Form */}
      <QuickBookingSection />

      {/* Popular Destinations */}
      <PopDest />

      {/* Features Section */}
      <Feature />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
