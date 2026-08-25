"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Drill,
  MapPin,
} from "lucide-react";

import type { GeologyData } from "./geology.types";

import GeologyChallenges from "./GeologyChallenges";
import DrillingMethod from "./DrillingMethod";
import RigRequirements from "./RigRequirements";
import ToolingRequirements from "./ToolingRequirements";
import RecommendedRigs from "./RecommendedRigs";
import GeologyCTA from "./GeologyCTA";

interface GeologyDetailPageProps {
  geology: GeologyData;
}

export default function GeologyDetailPage({
  geology,
}: GeologyDetailPageProps) {
  /*
   * Keep the existing GeologyData type untouched.
   *
   * Some geology data structures use "summary" instead of
   * "description". We safely support either without changing
   * the main project type.
   */

  const geologyContent = geology as GeologyData & {
    description?: string;
    summary?: string;
    characteristics?: string[];
  };

  const geologyDescription =
    geologyContent.description ||
    geologyContent.summary ||
    `Understanding the characteristics of ${geology.name} is essential for selecting the correct drilling method, tooling and rig configuration.`;

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[180px]" />

        <div className="pointer-events-none absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-blue-500/[0.05] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">

          {/* Back Navigation */}

          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-yellow-400"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />

            Back to Solutions
          </Link>

          {/* Hero Content */}

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">

            {/* Left */}

            <div>

              {/* Eyebrow */}

              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                <Drill size={14} />

                Geology & Drilling Engineering
              </span>

              {/* Title */}

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Drilling in{" "}
                <span className="text-yellow-400">
                  {geology.name}
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                {geologyDescription}
              </p>

              {/* Characteristics */}

              {geologyContent.characteristics?.length ? (
                <div className="mt-8 flex flex-wrap gap-2">

                  {geologyContent.characteristics.map(
                    (characteristic) => (
                      <span
                        key={characteristic}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300"
                      >
                        {characteristic}
                      </span>
                    )
                  )}

                </div>
              ) : null}

            </div>

            {/* Right Assessment Card */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Engineering Assessment
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Formation-first drilling strategy
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The correct drilling solution depends on how the
                formation behaves during drilling. Method, tooling,
                circulation and rig configuration should be selected
                accordingly.
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">

                <MapPin
                  size={18}
                  className="text-yellow-400"
                />

                <span className="text-sm text-slate-400">
                  Geology-specific engineering guidance
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ENGINEERING CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl space-y-28 px-6 pb-28 lg:px-8">

        {/* ===================================================
            01 — GEOLOGY CHALLENGES
        =================================================== */}

        <GeologyChallenges
          geology={geology}
        />

        {/* ===================================================
            02 — DRILLING METHOD
        =================================================== */}

        <DrillingMethod
          geology={geology}
        />

        {/* ===================================================
            03 — RIG REQUIREMENTS
        =================================================== */}

        <RigRequirements
          geology={geology}
        />

        {/* ===================================================
            04 — TOOLING REQUIREMENTS
        =================================================== */}

        <ToolingRequirements
          geology={geology}
        />

        {/* ===================================================
            05 — RECOMMENDED NGE RIGS
        =================================================== */}

        <RecommendedRigs
          geology={geology}
        />

        {/* ===================================================
            06 — ENGINEERING CTA
        =================================================== */}

        <GeologyCTA
          geologyName={geology.name}
        />

      </div>

      {/* =====================================================
          FINAL NAVIGATION
      ===================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          {/* Back */}

          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />

            Explore All Engineering Solutions
          </Link>

          {/* Drilling Rigs */}

          <Link
            href="/drilling-rigs"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
          >
            Explore Drilling Rigs

            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

      </div>

    </main>
  );
}