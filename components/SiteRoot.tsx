import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ChefSelection from "@/components/ChefSelection";
import MenuSection from "@/components/MenuSection";
import DrinksSection from "@/components/DrinksSection";
import CraftSection from "@/components/CraftSection";
import ExperienceSection from "@/components/ExperienceSection";
import Gallery from "@/components/Gallery";
import HoursLocation from "@/components/HoursLocation";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

/**
 * Composición de toda la página. Se usa idéntica en ambas rutas de idioma
 * (`/` = español, `/en` = inglés); el idioma lo fija el <LangProvider> que la envuelve.
 */
export default function SiteRoot() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <ChefSelection />
        <MenuSection />
        <DrinksSection />
        <CraftSection />
        <ExperienceSection />
        <Gallery />
        <HoursLocation />
        <ReservationCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
