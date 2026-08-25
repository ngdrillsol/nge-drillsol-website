"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Globe2,
} from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Industries We Serve
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-5xl font-bold leading-tight text-white xl:text-7xl"
          >
            Engineered Solutions
            <span className="block text-yellow-400">
              For Every Industry
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            From groundwater development and agriculture to mining,
            renewable energy, infrastructure and oil & gas,
            NGE DRILLSOL provides drilling solutions engineered
            for your industry's unique challenges.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#industries-grid"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explore Industries

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              Speak With Our Engineers
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Building2
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Multiple Industries
                </h3>

                <p className="mt-2 text-slate-400">
                  Solutions for water supply,
                  agriculture,
                  mining,
                  infrastructure,
                  solar,
                  oil & gas and exploration.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Factory
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Application Focused
                </h3>

                <p className="mt-2 text-slate-400">
                  Every drilling rig is recommended
                  according to project objectives,
                  geology and field requirements.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <Globe2
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Global Experience
                </h3>

                <p className="mt-2 text-slate-400">
                  Engineering solutions trusted
                  across international markets
                  and diverse geological conditions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}