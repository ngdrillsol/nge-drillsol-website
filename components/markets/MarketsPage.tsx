"use client";

import MarketsHero from "./MarketsHero";
import AfricaMarkets from "./AfricaMarkets";
import WhyChooseNGEGlobal from "./WhyChooseNGEGlobal";
import CTASection from "./CTASection";

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-10 lg:gap-28 lg:px-8">

        {/* Hero */}
        <MarketsHero />

        {/* Africa */}
        <AfricaMarkets />

        {/* Why Choose NGE */}
        <WhyChooseNGEGlobal />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}
