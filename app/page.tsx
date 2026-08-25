import Hero from "@/components/home/hero/hero";
import SolutionSelector from "@/components/home/solution-selector/SolutionSelector";
import EngineeringSolution from "@/components/home/EngineeringSolution";
import PlatformExplorer from "@/components/home/PlatformExplorer/PlatformExplorer";
import ProjectsSection from "@/components/home/ProjectsSection/ProjectsSection";
import IndustriesSection from "@/components/home/industries";
import KnowledgeSection from "@/components/home/knowledge";
import TrustSection from "@/components/home/trust";
import Footer from "@/components/shared/footer";

export default function HomePage() {
  return (
    <>

      <Hero />

      <SolutionSelector />

      <EngineeringSolution />

      <PlatformExplorer />

      <ProjectsSection />

      <IndustriesSection />

      <KnowledgeSection />

      <TrustSection />

      <Footer />
    </>
  );
}