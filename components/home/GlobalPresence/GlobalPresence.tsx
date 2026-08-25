"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import GlobalHeader from "./GlobalHeader";
import WorldMap from "./WorldMap";

export default function GlobalPresence() {
  return (
    <Section
      id="global-presence"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[180px]" />

      </div>

      <Container className="relative z-10">

        <GlobalHeader />

        <WorldMap />

        {/* CTA */}

        <div className="mt-16 text-center">

          <p className="text-lg text-slate-400">
            Looking for a drilling solution in your country?
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-8 py-4 font-semibold text-yellow-400 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/20"
          >
            Contact Our Team
          </a>

        </div>

      </Container>

    </Section>
  );
}