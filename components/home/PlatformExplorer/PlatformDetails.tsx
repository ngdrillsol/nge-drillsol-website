"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { PlatformShowcaseProps } from "./platform.types";

export default function PlatformDetails({
  platform,
}: PlatformShowcaseProps) {
  return (
    <div className="flex flex-col justify-center">
      {/* Platform Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex w-fit rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400"
      >
        {platform.application}
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-5 text-4xl font-bold leading-tight text-white xl:text-5xl"
      >
        {platform.title}
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-3 text-lg font-medium text-yellow-400"
      >
        {platform.tagline}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-7 max-w-2xl leading-8 text-slate-300"
      >
        {platform.description}
      </motion.p>

      {/* Drilling Methods */}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Drilling Methods
        </h3>

        <div className="flex flex-wrap gap-3">
          {platform.drillingMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* Supported Models */}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Supported Models
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          {platform.models.map((model) => (
            <div
              key={model}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
            >
              {model}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Engineering Highlights
        </h3>

        <div className="space-y-3">
          {platform.highlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />

              <span className="text-sm leading-6 text-slate-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}