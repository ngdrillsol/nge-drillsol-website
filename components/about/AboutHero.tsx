"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe2,
  Award,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left */}

        <div>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            About NGE DRILLSOL
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl xl:text-7xl"
          >
            Engineering
            <span className="block text-yellow-400">
              Reliable
            </span>
            <span className="block">
              Drilling Solutions.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            NGE DRILLSOL designs and manufactures drilling rigs and
            engineering solutions for water well drilling, DTH,
            rotary drilling, piling, core drilling and workover
            applications. Our focus is to deliver reliable equipment
            engineered for demanding field conditions across the world.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Contact Our Team

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
            >
              View Projects
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Building2
              size={38}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Engineering Company
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Specialized in designing and manufacturing advanced
              drilling rigs for diverse geological and industrial
              applications.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Globe2
              size={38}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Global Reach
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Supporting customers across Africa, Asia and other
              international markets with customized engineering
              solutions.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Award
              size={38}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Quality Commitment
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Every machine is developed with a focus on engineering
              precision, durability and long-term operational
              performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
