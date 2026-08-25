"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Circle,
  Waves,
  Layers3,
  Mountain,
  Pickaxe,
  Trees,
  ArrowRight,
} from "lucide-react";

import type { GeologyData } from "./geology/geology.types";

interface CategoryCardProps {
  geology: GeologyData;
  index?: number;
}

/*
 * Keep the icon map flexible so TypeScript does not complain
 * when geology.slug is typed as a general string.
 */
const icons: Record<string, typeof Mountain> = {
  clay: Circle,
  sand: Waves,
  gravel: Layers3,
  "hard-rock": Mountain,
  limestone: Pickaxe,
  "mixed-formation": Trees,
};

export default function CategoryCard({
  geology,
  index = 0,
}: CategoryCardProps) {
  const Icon = icons[geology.slug] ?? Mountain;

  const href = `/solutions/geology/${geology.slug}`;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="group"
    >
      <Link
        href={href}
        className="block h-full overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] transition-all duration-300 hover:border-yellow-500/40 hover:bg-[#0b0b0b]"
      >
        <div className="flex h-full flex-col p-8">

          {/* Icon */}

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
            <Icon
              size={26}
              strokeWidth={1.8}
              className="text-yellow-400"
            />
          </div>

          {/* Formation Badge */}

          <div className="mt-7">
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400">
              {geology.badge}
            </span>
          </div>

          {/* Title */}

          <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
            {geology.name}
          </h3>

          {/* Short Name */}

          <p className="mt-2 text-sm font-medium text-slate-500">
            {geology.shortName}
          </p>

          {/* Introduction */}

          <p className="mt-5 line-clamp-4 text-base leading-7 text-slate-400">
            {geology.introduction}
          </p>

          {/* Key Challenges */}

          <div className="mt-7">

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Key Challenges
            </p>

            <div className="flex flex-wrap gap-2">

              {geology.challenges
                .slice(0, 3)
                .map((challenge) => (
                  <span
                    key={challenge.title}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {challenge.title}
                  </span>
                ))}

            </div>

          </div>

          {/* Recommended Rig */}

          {geology.recommendedRigs.length > 0 && (
            <div className="mt-7 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.06] p-4">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Recommended Rig
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {geology.recommendedRigs
                  .map((rig) => rig.model)
                  .join(" / ")}
              </p>

            </div>
          )}

          {/* Bottom CTA */}

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="font-semibold text-yellow-400">
              Explore Geology
            </span>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={19} />
            </div>

          </div>

        </div>
      </Link>
    </motion.article>
  );
}