import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ChefSelection from "@/components/ChefSelection";
import MenuSection from "@/components/MenuSection";
import CraftSection from "@/components/CraftSection";
import ExperienceSection from "@/components/ExperienceSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import HoursLocation from "@/components/HoursLocation";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <ChefSelection />
        <MenuSection />
        <CraftSection />
        <ExperienceSection />
        <Gallery />
        <Reviews />
        <HoursLocation />
        <ReservationCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
