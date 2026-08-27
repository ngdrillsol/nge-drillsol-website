"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import IndustriesHeader from "./IndustriesHeader";
import IndustryCard from "./IndustryCard";
import { industries } from "./industries.data";

export default function IndustriesSection() {
  return (
    <Section
      id="industries"
      className="relative overflow-hidden bg-[#05070B] py-12 sm:py-16 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[180px]" />

      </div>

      <Container className="relative z-10">

        <IndustriesHeader />

        {/* Industries Grid */}

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-3">

          {industries.map((industry) => (

            <IndustryCard
              key={industry.id}
              industry={industry}
            />

          ))}

        </div>

      </Container>

    </Section>
  );
}
