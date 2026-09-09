import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemSection from "@/components/EcosystemSection";
import CapabilitiesBento from "@/components/CapabilitiesBento";
import ByTheNumbers from "@/components/ByTheNumbers";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import SaaSProductsSection from "@/components/SaaSProductsSection";
import OurProofSection from "@/components/OurProofSection";
import GlobalProgramsSection from "@/components/GlobalProgramsSection";
import FAQSection from "@/components/FAQSection";
import TurnIdeaSection from "@/components/TurnIdeaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-navy flex flex-col items-center w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <EcosystemSection />
      <CapabilitiesBento />
      <ByTheNumbers />
      <ServicesSection />
      <HowWeWork />
      <SaaSProductsSection />
      <OurProofSection />
      <GlobalProgramsSection />
      <FAQSection />
      <TurnIdeaSection />
      <Footer />
    </main>
  );
}

