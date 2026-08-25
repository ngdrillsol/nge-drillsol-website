"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mountain,
  Ruler,
  Gauge,
  Drill,
} from "lucide-react";

export default function RigRecommendation() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Engineering Recommendation
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white xl:text-6xl">
            Not Sure Which Rig
            <span className="block text-yellow-400">
              Is Right For You?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Share your project requirements with our engineering team.
            We'll recommend the most suitable drilling rig, drilling
            method and accessories based on your application.
          </p>

        </div>

        {/* Requirement Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <Mountain
              size={34}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-xl font-bold text-white">
              Geology
            </h3>

            <p className="mt-3 text-slate-400">
              Clay, Sand,
              Gravel,
              Hard Rock,
              Basalt,
              Limestone.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <Gauge
              size={34}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-xl font-bold text-white">
              Drilling Depth
            </h3>

            <p className="mt-3 text-slate-400">
              Tell us your required
              drilling depth.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <Ruler
              size={34}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-xl font-bold text-white">
              Hole Diameter
            </h3>

            <p className="mt-3 text-slate-400">
              Required bore diameter
              and casing size.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <Drill
              size={34}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-xl font-bold text-white">
              Application
            </h3>

            <p className="mt-3 text-slate-400">
              Water,
              Mining,
              Solar,
              Infrastructure,
              Oil & Gas.
            </p>

          </motion.div>

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Request Engineering Recommendation

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}