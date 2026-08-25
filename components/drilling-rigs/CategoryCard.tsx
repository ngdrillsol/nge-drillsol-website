"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Drill,
  Layers3,
  Mountain,
  BadgeCheck,
} from "lucide-react";

import { RigCategory } from "./drilling-rigs.types";

interface CategoryCardProps {
  category: RigCategory;
  index: number;
}

export default function CategoryCard({
  category,
  index,
}: CategoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-yellow-500/40"
    >
      {/* Category Header */}

      <div className="px-8 pt-8">
        <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
          {category.badge}
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {category.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {category.description}
        </p>

        {/* Best For */}

        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            BEST FOR
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {category.bestFor}
          </p>
        </div>

        {/* Specifications */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <Drill size={18} />

              <span className="text-sm font-semibold">
                Depth
              </span>
            </div>

            <p className="mt-3 text-white">
              {category.depth}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <Layers3 size={18} />

              <span className="text-sm font-semibold">
                Hole Diameter
              </span>
            </div>

            <p className="mt-3 text-white">
              {category.holeDiameter}
            </p>
          </div>

        </div>

        {/* Methods */}

        <div className="mt-8">

          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Drilling Methods
          </h4>

          <div className="flex flex-wrap gap-3">
            {category.methods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300"
              >
                {method}
              </span>
            ))}
          </div>

        </div>

        {/* Applications */}

        <div className="mt-8">

          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Applications
          </h4>

          <div className="grid grid-cols-2 gap-3">

            {category.applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-300"
              >
                <BadgeCheck
                  size={18}
                  className="text-yellow-400"
                />

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Formation */}

        <div className="mt-8">

          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            <Mountain size={16} />

            Suitable Formations
          </h4>

          <div className="flex flex-wrap gap-3">

            {category.formations.map((formation) => (
              <span
                key={formation}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {formation}
              </span>
            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

          <div>
            <p className="text-sm text-slate-500">
              Available Models
            </p>

            <p className="mt-1 text-xl font-bold text-white">
              {category.totalModels}
            </p>
          </div>

          <Link
            href={category.href}
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Explore Category

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </motion.article>
  );
}