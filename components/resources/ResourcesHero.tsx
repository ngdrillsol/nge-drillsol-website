"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Globe2,
  GraduationCap,
} from "lucide-react";

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            NGE Knowledge Center
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl xl:text-7xl"
          >
            Learn.
            <span className="block text-yellow-400">
              Engineer.
            </span>
            <span className="block">
              Drill Smarter.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            Explore technical guides, geological information,
            drilling methods, equipment selection guides,
            engineering case studies and educational resources
            developed for drilling professionals worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#knowledge-categories"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explore Resources

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              Ask Our Engineers
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <BookOpen
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Technical Articles
                </h3>

                <p className="mt-2 text-slate-400">
                  Practical engineering articles covering drilling
                  methods, drilling equipment and project planning.
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
                  Global Geology
                </h3>

                <p className="mt-2 text-slate-400">
                  Country-specific geological guides and drilling
                  recommendations based on field conditions.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <div className="flex items-start gap-4">

              <GraduationCap
                size={34}
                className="mt-1 text-yellow-400"
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Engineering Learning
                </h3>

                <p className="mt-2 text-slate-400">
                  Educational resources, case studies and practical
                  knowledge to help engineers make better drilling
                  decisions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
