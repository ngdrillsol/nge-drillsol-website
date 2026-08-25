"use client";

import { motion } from "framer-motion";

export default function GlobalHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">

        <span className="h-2 w-2 rounded-full bg-yellow-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Global Presence
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
        Engineering Beyond Borders
      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
        NGE Drillsol delivers drilling rigs, engineering expertise and
        aftermarket support to customers across Africa, the Middle East
        and international markets through a growing global network.
      </p>
    </motion.div>
  );
}