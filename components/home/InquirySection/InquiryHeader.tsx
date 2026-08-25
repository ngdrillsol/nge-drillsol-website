"use client";

import { motion } from "framer-motion";

export default function InquiryHeader() {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          CONTACT OUR ENGINEERS
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl"
      >
        Let's Build the Right
        <br />
        Drilling Solution
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
      >
        Every drilling project is different. Tell us your geology,
        drilling depth and application, and our engineering team
        will recommend the most suitable drilling rig, accessories
        and complete solution.
      </motion.p>
    </div>
  );
}