"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Drill,
  Gauge,
  Globe2,
  Layers3,
  MapPin,
  Ruler,
  Settings2,
  ShieldCheck,
  Target,
} from "lucide-react";

import type { RigCategory } from "./drilling-rigs.types";
import type { RigData } from "./rig.types";
import { getAllRigs } from "./rig.data";

interface CategoryDrillingRigsPageProps {
  category: RigCategory;
}

export default function CategoryDrillingRigsPage({
  category,
}: CategoryDrillingRigsPageProps) {
  /*
   * ----------------------------------------------------------
   * Resolve the models listed in the category data against
   * the individual-rig database.
   *
   * Example:
   *
   * category.machines = [
   *   "NGDR3000",
   *   "NGDR2000",
   *   "NGDR1500"
   * ]
   *
   * We find those actual RigData records here.
   * ----------------------------------------------------------
   */

  const allRigs = getAllRigs();

  const categoryRigs: RigData[] = category.machines
    .map((machineName) =>
      allRigs.find(
        (rig) =>
          rig.model.toLowerCase() === machineName.toLowerCase()
      )
    )
    .filter((rig): rig is RigData => Boolean(rig));

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Background image */}

        <div className="absolute inset-0">

          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/90 to-[#05070B]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/30" />

        </div>

        {/* Decorative glow */}

        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-32">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >

            <Link
              href="/"
              className="transition hover:text-yellow-400"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/drilling-rigs"
              className="transition hover:text-yellow-400"
            >
              Drilling Rigs
            </Link>

            <ChevronRight size={15} />

            <span className="text-slate-300">
              {category.title}
            </span>

          </nav>

          <div className="max-w-4xl">

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">

                <Drill size={14} />

                {category.badge}

              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
              className="mt-7 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl"
            >
              {category.title}
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.16,
              }}
              className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              {category.description}
            </motion.p>

            {/* Hero stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.24,
              }}
              className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >

              <HeroStat
                icon={Target}
                label="Best For"
                value={category.bestFor}
              />

              <HeroStat
                icon={Gauge}
                label="Drilling Depth"
                value={category.depth}
              />

              <HeroStat
                icon={Ruler}
                label="Hole Diameter"
                value={category.holeDiameter}
              />

              <HeroStat
                icon={Drill}
                label="Available Models"
                value={String(category.totalModels)}
              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

        {/* ====================================================
            CAPABILITIES
        ==================================================== */}

        <section className="border-b border-white/10 py-20">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <SectionEyebrow>
                Category Capabilities
              </SectionEyebrow>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Engineered for demanding
                <span className="text-yellow-400">
                  {" "}field conditions
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Explore the drilling methods, applications and
                formations this machine category is designed to
                address.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <CapabilityCard
                icon={Settings2}
                title="Drilling Methods"
                items={category.methods}
              />

              <CapabilityCard
                icon={Target}
                title="Applications"
                items={category.applications}
              />

              <CapabilityCard
                icon={Layers3}
                title="Suitable Formations"
                items={category.formations}
              />

              <CapabilityCard
                icon={ShieldCheck}
                title="Engineering Focus"
                items={[
                  "Field reliability",
                  "Serviceability",
                  "Project-specific configuration",
                  "Heavy-duty construction",
                ]}
              />

            </div>

          </div>

        </section>

        {/* ====================================================
            AVAILABLE RIGS
        ==================================================== */}

        <section
          id="available-rigs"
          className="scroll-mt-24 py-20"
        >

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <SectionEyebrow>
                Available Machines
              </SectionEyebrow>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Choose the right
                <span className="text-yellow-400">
                  {" "}rig
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
                Compare the NGE DRILLSOL rigs available for this
                drilling category and open an individual machine
                page for detailed specifications.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">

              <Drill
                size={17}
                className="text-yellow-400"
              />

              <span className="text-sm text-slate-300">
                {categoryRigs.length} machine
                {categoryRigs.length === 1 ? "" : "s"}
                {" "}available
              </span>

            </div>

          </div>

          {/* ==================================================
              MACHINE GRID
          ================================================== */}

          {categoryRigs.length > 0 ? (

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {categoryRigs.map((rig, index) => (

                <RigCard
                  key={rig.slug}
                  rig={rig}
                  index={index}
                />

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-[30px] border border-white/10 bg-white/[0.025] p-10 text-center">

              <Drill
                size={32}
                className="mx-auto text-yellow-400"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Machine information coming soon
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Individual machine information for this category
                is currently being prepared.
              </p>

            </div>

          )}

        </section>

        {/* ====================================================
            ENGINEERING APPROACH
        ==================================================== */}

        <section className="border-t border-white/10 py-20">

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090C11]">

            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-[100px]" />

            <div className="relative grid gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-14">

              <div>

                <SectionEyebrow>
                  NGE DRILLSOL Engineering
                </SectionEyebrow>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  More than a machine.
                  <span className="text-yellow-400">
                    {" "}A drilling solution.
                  </span>
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  Drilling requirements vary from project to
                  project. Machine selection should consider depth,
                  bore diameter, formation, drilling method, tooling,
                  power requirements and site conditions.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-yellow-400"
                >
                  Discuss Your Project

                  <ArrowRight size={18} />

                </Link>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <EngineeringPoint
                  icon={Settings2}
                  title="Configuration"
                  description="Machine configuration can be matched to project requirements."
                />

                <EngineeringPoint
                  icon={Target}
                  title="Application"
                  description="Select equipment according to drilling method and intended use."
                />

                <EngineeringPoint
                  icon={Globe2}
                  title="Export Ready"
                  description="Machines can be prepared for international project requirements."
                />

                <EngineeringPoint
                  icon={MapPin}
                  title="Field Support"
                  description="Share your project conditions before final machine selection."
                />

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            FINAL CTA
        ==================================================== */}

        <section className="pb-24 pt-4">

          <div className="rounded-[32px] border border-yellow-500/20 bg-yellow-500/[0.045] p-8 text-center sm:p-12">

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">
              Start Your Requirement
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
              Not sure which rig is right for your project?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Send us your required depth, bore diameter, formation,
              drilling method and project location. Our team can
              help identify the appropriate NGE DRILLSOL machine.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Send an Enquiry

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/drilling-rigs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:text-yellow-400"
              >
                View All Rigs

                <ChevronRight size={18} />

              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

/* ============================================================
   HERO STAT
   ============================================================ */

interface HeroStatProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function HeroStat({
  icon: Icon,
  label,
  value,
}: HeroStatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">

      <Icon
        size={19}
        className="text-yellow-400"
      />

      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-white">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   SECTION EYEBROW
   ============================================================ */

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400">
      {children}
    </span>
  );
}

/* ============================================================
   CAPABILITY CARD
   ============================================================ */

interface CapabilityCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

function CapabilityCard({
  icon: Icon,
  title,
  items,
}: CapabilityCardProps) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#090C11] p-6">

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">

          <Icon
            size={20}
            className="text-yellow-400"
          />

        </div>

        <h3 className="font-bold text-white">
          {title}
        </h3>

      </div>

      <div className="mt-6 space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-start gap-3"
          >

            <CheckCircle2
              size={16}
              className="mt-1 shrink-0 text-yellow-400"
            />

            <span className="text-sm leading-6 text-slate-400">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

/* ============================================================
   RIG CARD
   ============================================================ */

interface RigCardProps {
  rig: RigData;
  index: number;
}

function RigCard({
  rig,
  index,
}: RigCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
    >

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <Link
        href={`/drilling-rigs/${rig.slug}`}
        className="block"
      >

        <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1117]">

          <img
            src={rig.heroImage}
            alt={rig.model}
            className="h-full w-full object-contain p-7 transition duration-700 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
            {rig.model}
          </div>

        </div>

      </Link>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="p-7">

        {rig.category.length > 0 && (

          <div className="flex flex-wrap gap-2">

            {rig.category.slice(0, 2).map((item) => (

              <span
                key={item}
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400"
              >
                {item.replace(/-/g, " ")}
              </span>

            ))}

          </div>

        )}

        <h3 className="mt-4 text-2xl font-bold text-white">
          {rig.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
          {rig.tagline}
        </p>

        <Link
          href={`/drilling-rigs/${rig.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-yellow-400"
        >
          View Technical Details

          <ArrowRight size={17} />

        </Link>

      </div>

    </motion.article>
  );
}

/* ============================================================
   ENGINEERING POINT
   ============================================================ */

interface EngineeringPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function EngineeringPoint({
  icon: Icon,
  title,
  description,
}: EngineeringPointProps) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-6">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">

        <Icon
          size={20}
          className="text-yellow-400"
        />

      </div>

      <h3 className="mt-5 font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}
