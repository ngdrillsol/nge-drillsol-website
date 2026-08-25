"use client";

import ServicesHero from "./ServicesHero";
import ServiceGrid from "./ServiceGrid";
import ServiceWorkflow from "./ServiceWorkflow";
import CustomEngineering from "./CustomEngineering";
import SupportServices from "./SupportServices";
import WhyChooseNGEServices from "./WhyChooseNGEServices";
import CTASection from "./CTASection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <ServicesHero />

        {/* Engineering Services */}
        <ServiceGrid />

        {/* Customer Journey */}
        <ServiceWorkflow />

        {/* Custom Engineering */}
        <section id="custom-engineering" className="scroll-mt-28">
          <CustomEngineering />
        </section>

        {/* After Sales Support */}
        <SupportServices />

        {/* Why Choose NGE */}
        <WhyChooseNGEServices />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}