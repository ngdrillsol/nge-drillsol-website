"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigHeroProps {
  rig: RigData;
}

export default function RigHero({ rig }: RigHeroProps) {
  const primaryCategory =
    rig.category?.[0]
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ||
    "Drilling Rig";

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#05070B]">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">

        {/* =====================================================
            BREADCRUMB
        ===================================================== */}

        <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">

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
            {rig.model}
          </span>

        </nav>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Category */}

            <div className="flex flex-wrap gap-2">

              {rig.category.map((category) => (

                <span
                  key={category}
                  className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400"
                >
                  {category.replace(/-/g, " ")}
                </span>

              ))}

            </div>

            {/* Model */}

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              NGE DRILLSOL
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {rig.model}
            </h1>

            {/* Title */}

            <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl">
              {rig.name}
            </h2>

            {/* Tagline */}

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {rig.tagline}
            </p>

            {/* Trust Point */}

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">

              <CheckCircle2
                size={20}
                className="text-yellow-400"
              />

              <span>
                Engineered for demanding drilling applications
              </span>

            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#inquiry"
                className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-bold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
              >
                Request a Quote

                <ArrowRight size={18} />
              </Link>

              <Link
                href={`https://wa.me/919106360907?text=${encodeURIComponent(
                  `Hello NGE DRILLSOL, I am interested in the ${rig.model} drilling rig. Please share technical details and quotation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
              >
                <MessageCircle size={18} />

                WhatsApp
              </Link>

              <Link
                href="#downloads"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 font-semibold text-slate-200 transition hover:border-yellow-500/30 hover:text-yellow-400"
              >
                <Download size={18} />

                Brochure
              </Link>

            </div>

            {/* Category Label */}

            <div className="mt-10 text-sm text-slate-500">
              Application:
              <span className="ml-2 capitalize text-slate-300">
                {primaryCategory}
              </span>
            </div>

          </motion.div>

          {/* ===================================================
              RIGHT IMAGE
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative"
          >

            {/* Image Glow */}

            <div className="absolute inset-10 rounded-full bg-yellow-500/10 blur-[100px]" />

            {/* Image Container */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-2xl">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#0A0D12]">

                <img
                  src={rig.heroImage}
                  alt={rig.model}
                  className="h-full w-full object-contain transition duration-700 hover:scale-[1.03]"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              </div>

            </div>

            {/* =================================================
                FLOATING MODEL BADGE
            ================================================= */}

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 shadow-xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Model
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {rig.model}
              </p>

            </div>

            {/* =================================================
                FLOATING CAPACITY
            ================================================= */}

            {rig.quickSpecs?.[0] && (
              <div className="absolute right-6 top-6 rounded-2xl border border-yellow-500/20 bg-black/80 px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {rig.quickSpecs[0].label}
                </p>

                <p className="mt-1 text-lg font-bold text-yellow-400">
                  {rig.quickSpecs[0].value}
                </p>

              </div>
            )}

          </motion.div>

        </div>

        {/* =====================================================
            QUICK SPEC BAR
        ===================================================== */}

        {rig.quickSpecs.length > 0 && (

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4"
          >

            {rig.quickSpecs.slice(0, 4).map((spec, index) => (

              <div
                key={`${spec.label}-${index}`}
                className={`p-6 lg:p-7 ${
                  index !== 0
                    ? "border-t border-white/10 sm:border-l lg:border-t-0"
                    : ""
                }`}
              >

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {spec.label}
                </p>

                <p className="mt-3 text-xl font-bold text-white">
                  {spec.value}
                </p>

              </div>

            ))}

          </motion.div>

        )}

      </div>
    </section>
  );
}