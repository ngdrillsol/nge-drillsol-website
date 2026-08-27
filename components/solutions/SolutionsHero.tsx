"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mountain, Target, Drill } from "lucide-react";

export default function SolutionsHero() {
  const whatsappMessage =
    "Hello NGE DRILLSOL, I would like your recommendation for the most suitable drilling rig for my project. Please help me select the right rig based on my drilling depth, bore diameter, geology and application.";

  const whatsappUrl = `https://wa.me/919106360907?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#0A0A0A] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left Side */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Engineering Solutions
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl xl:text-7xl"
          >
            Find the Right
            <span className="block text-yellow-400">
              Drilling Solution
            </span>
            for Your Project
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            Every drilling project is different. The right drilling rig
            depends on geology, drilling depth, hole diameter and
            application. Our engineering team helps you select the most
            suitable drilling solution.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            {/* WhatsApp Rig Recommendation */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get Rig Recommendation

              <ArrowRight size={18} />
            </a>

            {/* Contact Engineering Team */}

            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              Contact Engineering Team
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-center gap-4">

              <Mountain
                className="text-yellow-400"
                size={34}
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Select by Geology
                </h3>

                <p className="mt-2 text-slate-400">
                  Clay, Sand, Gravel, Basalt, Granite,
                  Limestone and Hard Rock.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-center gap-4">

              <Target
                className="text-yellow-400"
                size={34}
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Select by Application
                </h3>

                <p className="mt-2 text-slate-400">
                  Water Wells, Mining,
                  Infrastructure,
                  Agriculture,
                  Solar and Exploration.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-center gap-4">

              <Drill
                className="text-yellow-400"
                size={34}
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Engineering Recommendation
                </h3>

                <p className="mt-2 text-slate-400">
                  Get the most suitable drilling rig,
                  drilling method and accessories
                  recommended by our engineers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
