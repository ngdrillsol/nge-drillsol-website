"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Drill,
} from "lucide-react";

import { PlatformCTAProps } from "./platform.types";

export default function PlatformCTA({
  platform,
}: PlatformCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent"
    >
      <div className="flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-10">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

            <Drill
              className="h-4 w-4"
              aria-hidden="true"
            />

            {platform.title}

          </span>

          <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
            {platform.cta}
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            Explore the {platform.title} range or discuss your
            drilling depth, bore diameter, geological formation,
            drilling method and project requirements with the NGE
            Drillsol engineering team.
          </p>

        </div>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div className="flex flex-col gap-4 lg:min-w-[300px]">

          {/* Primary category link */}

          <Link
            href={platform.href}
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore {platform.title}

            <ArrowRight
              className="h-5 w-5 transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Consultation */}

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:bg-white/10"
          >
            <MessageSquare
              className="h-5 w-5"
              aria-hidden="true"
            />

            Discuss Your Project
          </Link>

          {/* Catalogue */}

          <a
            href="/downloads/NGE-DRILLSOL-CATALOGUE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-yellow-500/40 hover:bg-white/10"
          >
            <FileText
              className="h-5 w-5"
              aria-hidden="true"
            />

            Download Catalogue
          </a>

        </div>

      </div>
    </motion.div>
  );
}