"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { KnowledgeCardProps } from "./knowledge.types";

export default function KnowledgeCard({
  category,
}: KnowledgeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B1120] to-black" />

      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Top */}

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-3xl">
            {category.icon}
          </div>

          <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-300">
            {category.articleCount} Articles
          </div>

        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-white">
          {category.title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-400">
          {category.description}
        </p>

        <div className="flex-1" />

        {/* Footer */}

        <Link
          href={category.slug}
          className="mt-10 flex items-center justify-between border-t border-white/10 pt-6"
        >
          <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-yellow-300">
            Explore Articles
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-yellow-500 group-hover:text-black">
            <ArrowRight className="h-5 w-5" />
          </div>

        </Link>

      </div>
    </motion.div>
  );
}