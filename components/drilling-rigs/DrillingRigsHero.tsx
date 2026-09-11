"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Drill } from "lucide-react";

export default function DrillingRigsHero() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0A1220] via-[#080B12] to-[#111111] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400"
        >
          <Drill size={14} />
          NGE Drillsol Drilling Equipment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl xl:text-6xl"
        >
          Drilling Rigs Manufacturer for

          <span className="block text-yellow-400">
            Water Well, DTH & Rotary Drilling
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.16 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300"
        >
          NGE Drillsol manufactures and exports drilling rigs for water well
          drilling, DTH drilling, mud rotary drilling, piling, core drilling
          and workover operations. Our truck-mounted, trailer-mounted and
          tractor-mounted drilling rigs are engineered for different drilling
          depths, geological formations and project requirements worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.24 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#rig-categories"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Drilling Rigs

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:bg-white/10"
          >
            Talk to Our Engineers
          </Link>
        </motion.div>

        {/* Flagship Internal Links */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400"
        >
          <span>Flagship deep drilling rigs:</span>

          <Link
            href="/drilling-rigs/ngdr3000"
            className="font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            NGDR3000
          </Link>

          <Link
            href="/drilling-rigs/ngdr2000"
            className="font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            NGDR2000
          </Link>
        </motion.div>

      </div>

    </section>
  );
}