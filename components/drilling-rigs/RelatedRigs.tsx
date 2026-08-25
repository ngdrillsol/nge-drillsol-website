"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Drill,
  ExternalLink,
} from "lucide-react";

import { getRigBySlug } from "./rig.data";
import type { RigData } from "./rig.types";

interface RelatedRigsProps {
  rig: RigData;
}

export default function RelatedRigs({
  rig,
}: RelatedRigsProps) {
  /*
   * relatedRigs is stored in rig.data.ts as an array of slugs:
   *
   * relatedRigs: [
   *   "ngdr2000",
   *   "ngdr1500",
   * ]
   *
   * Resolve those slugs into actual RigData objects here.
   */

  const relatedRigs = (rig.relatedRigs || [])
    .map((slug) => getRigBySlug(slug))
    .filter((relatedRig): relatedRig is RigData => Boolean(relatedRig));

  if (!relatedRigs.length) {
    return null;
  }

  return (
    <section
      id="related-rigs"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <Drill size={14} />
            Explore More
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Related
            <span className="text-yellow-400">
              {" "}Drilling Rigs
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Compare the {rig.model} with other NGE DRILLSOL machines
            that may be relevant to your drilling requirements.
          </p>

        </div>

        <Link
          href="/drilling-rigs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          View All Drilling Rigs

          <ArrowRight size={17} />
        </Link>

      </div>

      {/* =====================================================
          RELATED RIG CARDS
      ===================================================== */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {relatedRigs.map((relatedRig, index) => (

          <motion.article
            key={relatedRig.slug}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#090C11] transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <Link
              href={`/drilling-rigs/${relatedRig.slug}`}
              className="block"
            >

              <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1117]">

                <img
                  src={relatedRig.heroImage}
                  alt={relatedRig.model}
                  className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Model badge */}

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  {relatedRig.model}
                </div>

              </div>

            </Link>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="p-7">

              {/* Category */}

              {relatedRig.category.length > 0 && (

                <div className="flex flex-wrap gap-2">

                  {relatedRig.category
                    .slice(0, 2)
                    .map((category) => (

                      <span
                        key={category}
                        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400"
                      >
                        {category.replace(/-/g, " ")}
                      </span>

                    ))}

                </div>

              )}

              {/* Name */}

              <h3 className="mt-4 text-2xl font-bold text-white">
                {relatedRig.name}
              </h3>

              {/* Description */}

              {relatedRig.tagline && (

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                  {relatedRig.tagline}
                </p>

              )}

              {/* CTA */}

              <Link
                href={`/drilling-rigs/${relatedRig.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-yellow-400"
              >
                View Rig

                <ChevronRight size={17} />
              </Link>

            </div>

          </motion.article>

        ))}

      </div>

      {/* =====================================================
          BOTTOM LINK
      ===================================================== */}

      <div className="flex justify-center">

        <Link
          href="/drilling-rigs"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
        >
          Explore Complete Rig Range

          <ExternalLink size={16} />
        </Link>

      </div>

    </section>
  );
}