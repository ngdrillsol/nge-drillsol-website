"use client";

import { motion } from "framer-motion";

export default function TrustHeader() {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-yellow-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
          Built on Trust
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl"
      >
        Certified Engineering.
        <br />
        <span className="text-yellow-400">
          Trusted Worldwide.
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
      >
        Every drilling rig is designed, manufactured and inspected with a
        commitment to engineering excellence, international quality standards
        and long-term customer confidence.
      </motion.p>
    </div>
  );
}