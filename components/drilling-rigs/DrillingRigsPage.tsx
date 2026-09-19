"use client";

import Link from "next/link";

import DrillingRigsHero from "./DrillingRigsHero";
import CategoryGrid from "./CategoryGrid";
import WhyChooseNGE from "./WhyChooseNGE";
import CTASection from "./CTASection";

const rigCategories = [
  {
    name: "Water Well Drilling Rigs",
    href: "/drilling-rigs/water-well-drilling-rigs",
  },
  {
    name: "DTH Drilling Rigs",
    href: "/drilling-rigs/dth-drilling-rigs",
  },
  {
    name: "Rotary Drilling Rigs",
    href: "/drilling-rigs/rotary-drilling-rigs",
  },
  {
    name: "Tractor Mounted Drilling Rigs",
    href: "/drilling-rigs/tractor-mounted-drilling-rigs",
  },
  {
    name: "Piling Rigs",
    href: "/drilling-rigs/piling-rigs",
  },
  {
    name: "Core Drilling Rigs",
    href: "/drilling-rigs/core-drilling-rigs",
  },
  {
    name: "Workover Rigs",
    href: "/drilling-rigs/workover-rigs",
  },
];

const rigModels = [
  {
    name: "NGDR3000 Deep Water Well Drilling Rig",
    href: "/drilling-rigs/ngdr3000",
  },
  {
    name: "NGDR2000 Water Well Drilling Rig",
    href: "/drilling-rigs/ngdr2000",
  },
  {
    name: "NGDR1500 Rotary Drilling Rig",
    href: "/drilling-rigs/ngdr1500",
  },
  {
    name: "NGDR1000 Rotary Drilling Rig",
    href: "/drilling-rigs/ngdr1000",
  },
  {
    name: "NGDTH600R DTH Drilling Rig",
    href: "/drilling-rigs/ngdth600",
  },
  {
    name: "NGDTH450R DTH Drilling Rig",
    href: "/drilling-rigs/ngdth450r",
  },
  {
    name: "NGDTH300R DTH Drilling Rig",
    href: "/drilling-rigs/ngdth300",
  },
  {
    name: "NGDTH200R Drilling Rig",
    href: "/drilling-rigs/ngdth200",
  },
  {
    name: "NGDTH50 Tractor Mounted Drilling Rig",
    href: "/drilling-rigs/ngdth50",
  },
  {
    name: "NGDTH30 Tractor Mounted Drilling Rig",
    href: "/drilling-rigs/ngdth30",
  },
  {
    name: "NGDP60 Piling Rig",
    href: "/drilling-rigs/ngdp60",
  },
  {
    name: "NGDP30 Piling Rig",
    href: "/drilling-rigs/ngdp30",
  },
  {
    name: "NGDP15 Piling Rig",
    href: "/drilling-rigs/ngdp15",
  },
  {
    name: "NGCORE100 Trolley Core Drilling Rig",
    href: "/drilling-rigs/ngcore100",
  },
  {
    name: "NGCORE100 Tractor Core Drilling Rig",
    href: "/drilling-rigs/ngcore100-tractor",
  },
  {
    name: "NGCORE50 Core Drilling Rig",
    href: "/drilling-rigs/ngcore50",
  },
  {
    name: "NGWR3100 Workover Rig",
    href: "/drilling-rigs/ngwr3100",
  },
];

export default function DrillingRigsPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-10 lg:gap-28 lg:px-8 lg:py-14">
        <DrillingRigsHero />

        <CategoryGrid />

        <WhyChooseNGE />

        {/* =====================================================
            INTERNAL LINK HUB
        ===================================================== */}
        <section
          aria-labelledby="explore-drilling-rigs"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              NGE Drillsol Rig Range
            </p>

            <h2
              id="explore-drilling-rigs"
              className="mt-3 text-2xl font-semibold sm:text-3xl lg:text-4xl"
            >
              Explore Drilling Rigs by Application and Model
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
              Explore NGE Drillsol drilling rigs for water well drilling,
              DTH drilling, rotary drilling, piling, core drilling and
              workover applications.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Drilling Rig Categories
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {rigCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/75 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Models */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Drilling Rig Models
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {rigModels.map((rig) => (
                  <Link
                    key={rig.href}
                    href={rig.href}
                    className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/75 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                  >
                    {rig.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </main>
  );
}