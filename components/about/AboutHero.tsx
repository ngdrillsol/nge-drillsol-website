"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe2,
  Factory,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20"
      aria-labelledby="about-nge-heading"
    >
      {/* Background */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            About NGE Drillsol Pvt. Ltd.
          </span>

          <motion.h1
            id="about-nge-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl xl:text-7xl"
          >
            Drilling Rig
            <span className="block text-yellow-400">
              Manufacturer
            </span>
            <span className="block">
              in India
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            NGE Drillsol Pvt. Ltd. is an Indian drilling equipment
            manufacturer focused on the design, engineering and
            manufacturing of water well drilling rigs, DTH rigs,
            rotary drilling rigs, piling rigs, core drilling rigs
            and workover equipment.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            From our engineering and manufacturing base in Mehsana,
            Gujarat, we develop drilling equipment for groundwater,
            infrastructure, foundation, exploration and industrial
            drilling projects in India and international markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/drilling-rigs"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Explore Drilling Rigs

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              View Our Projects
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Building2
              size={38}
              className="text-yellow-400"
              aria-hidden="true"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">
              NGE Drillsol Pvt. Ltd.
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Engineering and manufacturing company specializing
              in drilling rigs and project-specific drilling
              equipment.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Factory
              size={38}
              className="text-yellow-400"
              aria-hidden="true"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">
              Engineering & Manufacturing
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Machine development covers engineering, fabrication,
              assembly, equipment integration, inspection and
              preparation for field operation.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Globe2
              size={38}
              className="text-yellow-400"
              aria-hidden="true"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">
              International Projects
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              NGE Drillsol supplies drilling equipment for
              contractors and project requirements across domestic
              and international markets.
            </p>

          </article>

        </div>

      </div>
    </section>
  );
}