import Hero from "@/components/sections/Hero";
import CaptainStory from "@/components/sections/CaptainStory";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaptainStory />
      <Features />
      <Gallery />
      <Testimonials />
      <FAQ />
      <BookingCTA />
    </>
  );
}
