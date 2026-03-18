import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroFull from "@/components/home/HeroFull";
import AboutSection from "@/components/home/AboutSection";
import AboutTwoSection from "@/components/home/AboutTwoSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import BlogsSection from "@/components/home/BlogsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <HeroFull />
        <AboutSection />
        <AboutTwoSection />
        <ProjectsSection />
        <ServicesSection />
        <BlogsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer variant="base" />
    </>
  );
}
