"use client";

import { useState } from "react";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { platformData } from "@/data/platformData";

import PlatformTabs, { platformSectionIds } from "./PlatformTabs";
import PlatformShowcase from "./PlatformShowcase";
import PlatformStats from "./PlatformStats";
import PlatformCTA from "./PlatformCTA";

export default function PlatformExplorer() {
  const [selectedPlatform, setSelectedPlatform] = useState(platformData[0]);

  return (
    <Section
      id="platforms"
      className="relative overflow-hidden bg-[#05070B] py-12 sm:py-16 lg:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading */}
        <>
          <Heading
            subtitle="ENGINEERING PLATFORM"
            title="Explore Our Engineering Platform"
            align="center"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
            Discover our complete portfolio of drilling solutions engineered for demanding applications across water well, mining, exploration, piling and infrastructure projects worldwide.
          </p>
        </>

        {/* Platform Navigation */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <PlatformTabs
            platforms={platformData}
            selectedPlatform={selectedPlatform}
            onSelect={setSelectedPlatform}
          />
        </div>

        {/* Main Content */}
        <div
          id={platformSectionIds[selectedPlatform.id] ?? "platform-details"}
          className="mt-8 grid scroll-mt-24 gap-6 sm:mt-10 sm:gap-8 lg:mt-12 xl:grid-cols-[2fr_1fr]"
        >
          <PlatformShowcase platform={selectedPlatform} />

          <PlatformStats platform={selectedPlatform} />
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <PlatformCTA platform={selectedPlatform} />
        </div>
      </Container>
    </Section>
  );
}
