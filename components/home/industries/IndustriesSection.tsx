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
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[180px]" />

      </div>

      <Container className="relative z-10">

        <IndustriesHeader />

        {/* Industries Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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