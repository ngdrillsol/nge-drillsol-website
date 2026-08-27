"use client";

import DrillingRigsHero from "./DrillingRigsHero";
import CategoryGrid from "./CategoryGrid";
import WhyChooseNGE from "./WhyChooseNGE";
import CTASection from "./CTASection";

export default function DrillingRigsPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-10 lg:gap-28 lg:px-8">

        {/* Hero */}
        <DrillingRigsHero />

        {/* Categories */}
        <CategoryGrid />

        {/* Why Choose NGE */}
        <WhyChooseNGE />

        {/* Call To Action */}
        <CTASection />

      </div>
    </main>
  );
}
