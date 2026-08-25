"use client";

import DrillingRigsHero from "./DrillingRigsHero";
import CategoryGrid from "./CategoryGrid";
import FeaturedMachines from "./FeaturedMachines";
import DrillingMethods from "./DrillingMethods";
import WhyChooseNGE from "./WhyChooseNGE";
import CTASection from "./CTASection";

export default function DrillingRigsPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <DrillingRigsHero />

        {/* Categories */}
        <CategoryGrid />

        {/* Featured Machines */}
        <FeaturedMachines />

        {/* Drilling Methods */}
        <DrillingMethods />

        {/* Why Choose NGE */}
        <WhyChooseNGE />

        {/* Call To Action */}
        <CTASection />

      </div>
    </main>
  );
}