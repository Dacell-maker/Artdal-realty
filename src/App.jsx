import { useCallback, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PropertyMatch from "./components/PropertyMatch.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import Showcase from "./components/Showcase.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import WhyArtdal from "./components/WhyArtdal.jsx";
import Contact from "./components/Contact.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import PropertyModal from "./components/PropertyModal.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [prefill, setPrefill] = useState("");

  const openModal = useCallback((property) => setSelected(property), []);
  const closeModal = useCallback(() => setSelected(null), []);

  /* "Schedule a Viewing" → close modal, pre-fill enquiry, scroll to contact */
  const handleSchedule = useCallback((property) => {
    setSelected(null);
    setPrefill(
      `Hello Artdal Realty, I'd like to schedule a viewing for ${property.name} (${property.location}). Please share the available time slots.`
    );
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <PropertyMatch onOpen={openModal} />
        <FeaturedProperties onOpen={openModal} />
        <Showcase onOpen={openModal} />
        <About />
        <Services />
        <WhyArtdal />
        <Contact prefill={prefill} />
        <CTASection />
      </main>
      <Footer />
      <PropertyModal
        property={selected}
        onClose={closeModal}
        onSchedule={handleSchedule}
      />
    </>
  );
}
