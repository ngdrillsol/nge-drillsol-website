"use client";

import { motion } from "framer-motion";

export default function IndustriesHeader() {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-20">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2"
      >
        <span
          className="h-2 w-2 rounded-full bg-yellow-400"
          aria-hidden="true"
        />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
          Industries & Applications
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        id="industries-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl"
      >
        Drilling Solutions for
        <br />

        <span className="text-yellow-400">
          Major Industries & Projects
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
      >
        NGE Drillsol provides drilling rigs and equipment solutions
        for water well drilling, mining, solar foundations,
        infrastructure, agriculture and geological exploration.
        Machine selection depends on drilling depth, bore diameter,
        geological formation and project requirements.
      </motion.p>

    </div>
  );
}