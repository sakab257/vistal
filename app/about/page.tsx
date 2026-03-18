import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutPurpose from "@/components/about/AboutPurpose";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTeams from "@/components/about/AboutTeams";
import AboutFaq from "@/components/about/AboutFaq";
import CtaSection from "@/components/home/CtaSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <AboutHero />
        <AboutPurpose />
        <AboutJourney />
        <AboutTeams />
        <AboutFaq />
        <CtaSection />
      </main>
      <Footer variant="base" />
    </>
  );
}
