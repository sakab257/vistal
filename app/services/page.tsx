import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import HowWeWork from "@/components/services/HowWeWork";
import ServicesProjects from "@/components/services/ServicesProjects";
import CtaSection from "@/components/home/CtaSection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <ServicesHero />
        <ServicesGrid />
        <HowWeWork />
        <ServicesProjects />
        <CtaSection />
      </main>
      <Footer variant="base" />
    </>
  );
}
