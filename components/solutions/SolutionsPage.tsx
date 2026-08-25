"use client";

import SolutionsHero from "./SolutionsHero";
import SolutionCategories from "./SolutionCategories";
import GeologySelector from "./GeologySelector";
import ApplicationSelector from "./ApplicationSelector";
import RigRecommendation from "./RigRecommendation";
import DrillingGuide from "./DrillingGuide";
import WhyNGEEngineering from "./WhyNGEEngineering";
import CTASection from "./CTASection";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <SolutionsHero />

        {/* Solution Categories */}
        <SolutionCategories />

        {/* Select by Geology */}
        <section id="geology" className="scroll-mt-28">
          <GeologySelector />
        </section>

        {/* Select by Application */}
        <ApplicationSelector />

        {/* Rig Recommendation */}
        <RigRecommendation />

        {/* Drilling Method Guide */}
        <DrillingGuide />

        {/* Why NGE Engineering */}
        <WhyNGEEngineering />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}