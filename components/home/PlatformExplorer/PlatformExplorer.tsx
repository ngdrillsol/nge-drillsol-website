"use client";

import { useState } from "react";
import Link from "next/link";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { platformData } from "@/data/platformData";

import PlatformTabs, {
  platformSectionIds,
} from "./PlatformTabs";

import PlatformShowcase from "./PlatformShowcase";
import PlatformStats from "./PlatformStats";
import PlatformCTA from "./PlatformCTA";

export default function PlatformExplorer() {
  const [selectedPlatform, setSelectedPlatform] =
    useState(platformData[0]);

  return (
    <Section
      id="platforms"
      className="relative overflow-hidden bg-[#05070B] py-12 sm:py-16 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <Container className="relative z-10">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <Heading
          subtitle="NGE DRILLING RIG RANGE"
          title="Explore Our Drilling Rig Platforms"
          align="center"
        />

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-slate-400">
          Explore NGE Drillsol drilling equipment for water well,
          DTH, rotary, piling, core drilling and workover
          applications. Compare platforms according to drilling
          method, depth, geology, project type and equipment
          requirements.
        </p>

        {/* =====================================================
            DIRECT INTERNAL LINKS
        ===================================================== */}

        <nav
          aria-label="Drilling rig categories"
          className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3"
        >

          <Link
            href="/drilling-rigs/water-well-drilling-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            Water Well Drilling Rigs
          </Link>

          <Link
            href="/drilling-rigs/dth-drilling-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            DTH Drilling Rigs
          </Link>

          <Link
            href="/drilling-rigs/rotary-drilling-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            Rotary Drilling Rigs
          </Link>

          <Link
            href="/drilling-rigs/piling-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            Piling Rigs
          </Link>

          <Link
            href="/drilling-rigs/core-drilling-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            Core Drilling Rigs
          </Link>

          <Link
            href="/drilling-rigs/workover-rigs"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
          >
            Workover Rigs
          </Link>

        </nav>

        {/* =====================================================
            PLATFORM NAVIGATION
        ===================================================== */}

        <div className="mt-10 sm:mt-12 lg:mt-16">

          <PlatformTabs
            platforms={platformData}
            selectedPlatform={selectedPlatform}
            onSelect={setSelectedPlatform}
          />

        </div>

        {/* =====================================================
            MAIN PLATFORM CONTENT
        ===================================================== */}

        <div
          id={
            platformSectionIds[selectedPlatform.id] ??
            "platform-details"
          }
          className="mt-8 grid scroll-mt-24 gap-6 sm:mt-10 sm:gap-8 lg:mt-12 xl:grid-cols-[2fr_1fr]"
        >

          <PlatformShowcase
            platform={selectedPlatform}
          />

          <PlatformStats
            platform={selectedPlatform}
          />

        </div>

        {/* =====================================================
            PLATFORM CTA
        ===================================================== */}

        <div className="mt-8 sm:mt-10 lg:mt-12">

          <PlatformCTA
            platform={selectedPlatform}
          />

        </div>

        {/* =====================================================
            MAIN PRODUCT LINK
        ===================================================== */}

        <div className="mt-10 text-center">

          <Link
            href="/drilling-rigs"
            className="inline-flex rounded-xl border border-yellow-500/25 bg-yellow-500/10 px-8 py-4 font-semibold text-yellow-400 transition hover:border-yellow-500/50 hover:bg-yellow-500/15"
          >
            View Complete NGE Drilling Rig Range
          </Link>

        </div>

      </Container>
    </Section>
  );
}