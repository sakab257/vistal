import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/projects/ProjectHero";
import PurposeSection from "@/components/projects/PurposeSection";
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import CtaSection from "@/components/home/CtaSection";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <ProjectHero />
        <PurposeSection />
        <ProjectsTabs />
        <CtaSection />
      </main>
      <Footer variant="base" />
    </>
  );
}
