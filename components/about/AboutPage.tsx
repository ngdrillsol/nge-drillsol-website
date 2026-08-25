"use client";

import AboutHero from "./AboutHero";
import CompanyStory from "./CompanyStory";
import MissionVision from "./MissionVision";
import EngineeringPhilosophy from "./EngineeringPhilosophy";
import ManufacturingExcellence from "./ManufacturingExcellence";
import GlobalPresence from "./GlobalPresence";
import Leadership from "./Leadership";
import Certifications from "./Certifications";
import WhyChooseNGE from "./WhyChooseNGE";
import CTASection from "./CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <AboutHero />

        {/* Company Story */}
        <CompanyStory />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Engineering Philosophy */}
        <EngineeringPhilosophy />

        {/* Manufacturing Excellence */}
        <ManufacturingExcellence />

        {/* Global Presence */}
        <GlobalPresence />

        {/* Leadership */}
        <Leadership />

        {/* Certifications */}
        <Certifications />

        {/* Why Choose NGE */}
        <WhyChooseNGE />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}