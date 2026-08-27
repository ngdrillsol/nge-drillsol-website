"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { IndustryCardProps } from "./industry.types";

const industryRoutes: Record<string, string> = {
  "water-well": "/drilling-rigs/water-well-drilling-rigs",
  mining: "/drilling-rigs/core-drilling-rigs",
  solar: "/drilling-rigs/piling-rigs",
  infrastructure: "/drilling-rigs/piling-rigs",
  agriculture: "/drilling-rigs/water-well-drilling-rigs",
  exploration: "/drilling-rigs/core-drilling-rigs",
};

export default function IndustryCard({
  industry,
}: IndustryCardProps) {
  const href = industryRoutes[industry.id];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative w-[86vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:w-auto lg:max-w-none"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0b1220] to-black" />

      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 lg:p-8">

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-2xl sm:mb-5 lg:mb-6 lg:h-14 lg:w-14 lg:text-3xl">
          {industry.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {industry.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base lg:mt-4 lg:leading-7">
          {industry.description}
        </p>

        {/* Applications */}
        <div className="mt-5 flex flex-wrap gap-2 lg:mt-8">
          {industry.applications.map((item) => (
            <span
              key={item}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer / Explore Solution */}
        <Link
          href={href}
          className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 lg:mt-10 lg:pt-6"
        >
          <span className="text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
            Explore Solution
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-yellow-500 group-hover:text-black">
            <ArrowRight className="h-5 w-5" />
          </div>
        </Link>

      </div>
    </motion.div>
  );
}
