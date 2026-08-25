"use client";

import IndustriesHero from "./IndustriesHero";
import IndustryGrid from "./IndustryGrid";
import IndustryBenefits from "./IndustryBenefits";
import FeaturedSolutions from "./FeaturedSolutions";
import WhyChooseNGEIndustries from "./WhyChooseNGEIndustries";
import CTASection from "./CTASection";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <IndustriesHero />

        {/* Industry Categories */}
        <IndustryGrid />

        {/* Why Every Industry Needs Different Engineering */}
        <IndustryBenefits />

        {/* Featured Solutions */}
        <FeaturedSolutions />

        {/* Why Industries Choose NGE */}
        <WhyChooseNGEIndustries />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}