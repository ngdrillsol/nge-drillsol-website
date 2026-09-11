"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Drill,
} from "lucide-react";

import { getRigBySlug } from "./rig.data";
import type { RigData } from "./rig.types";

interface RelatedRigsProps {
  rig: RigData;
}

function formatCategory(category: string) {
  return category
    .replace(/-drilling-rigs$/i, "")
    .replace(/-rigs$/i, "")
    .split("-")
    .map((word) =>
      word.toLowerCase() === "dth"
        ? "DTH"
        : word.charAt(0).toUpperCase() +
          word.slice(1)
    )
    .join(" ");
}

export default function RelatedRigs({
  rig,
}: RelatedRigsProps) {

  const relatedRigs = (rig.relatedRigs || [])
    .map((slug) => getRigBySlug(slug))
    .filter(
      (relatedRig): relatedRig is RigData =>
        Boolean(relatedRig)
    );

  if (!relatedRigs.length) {
    return null;
  }

  return (
    <section
      id="related-rigs"
      className="space-y-12"
      aria-labelledby="related-rigs-heading"
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

            <Drill
              size={14}
              aria-hidden="true"
            />

            Compare Drilling Rigs

          </span>

          <h2
            id="related-rigs-heading"
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Drilling Rigs Related to{" "}

            <span className="text-yellow-400">
              {rig.model}
            </span>

          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Compare the {rig.model} with other NGE Drillsol
            drilling rigs that may suit different drilling
            depths, bore diameters, methods and project
            requirements.
          </p>

        </div>

        <Link
          href="/drilling-rigs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          View All NGE Drilling Rigs

          <ArrowRight
            size={17}
            aria-hidden="true"
          />
        </Link>

      </div>

      {/* =====================================================
          RELATED RIG CARDS
      ===================================================== */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {relatedRigs.map(
          (relatedRig, index) => {
            const rigUrl =
              `/drilling-rigs/${relatedRig.slug}`;

            const productName =
              relatedRig.name
                .toLowerCase()
                .includes(
                  relatedRig.model.toLowerCase()
                )
                ? relatedRig.name
                : `${relatedRig.model} ${relatedRig.name}`;

            return (
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

                {/* IMAGE */}

                <Link
                  href={rigUrl}
                  aria-label={`View ${productName}`}
                  className="block"
                >

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1117]">

                    <img
                      src={relatedRig.heroImage}
                      alt={`${productName} drilling rig by NGE Drillsol`}
                      className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      {relatedRig.model}
                    </div>

                  </div>

                </Link>

                {/* CONTENT */}

                <div className="p-7">

                  {/* Categories */}

                  {relatedRig.category.length > 0 && (

                    <div className="flex flex-wrap gap-2">

                      {relatedRig.category
                        .slice(0, 2)
                        .map((category) => (

                          <span
                            key={category}
                            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400"
                          >
                            {formatCategory(category)}
                          </span>

                        ))}

                    </div>

                  )}

                  {/* Name */}

                  <h3 className="mt-4 text-2xl font-bold text-white">

                    <Link
                      href={rigUrl}
                      className="transition hover:text-yellow-400"
                    >
                      {productName}
                    </Link>

                  </h3>

                  {/* Description */}

                  {relatedRig.tagline && (

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                      {relatedRig.tagline}
                    </p>

                  )}

                  {/* CTA */}

                  <Link
                    href={rigUrl}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-yellow-400"
                  >
                    View {relatedRig.model} Details

                    <ChevronRight
                      size={17}
                      aria-hidden="true"
                    />

                  </Link>

                </div>

              </motion.article>
            );
          }
        )}

      </div>

      {/* =====================================================
          BOTTOM INTERNAL LINK
      ===================================================== */}

      <div className="flex justify-center">

        <Link
          href="/drilling-rigs"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-300 transition hover:border-yellow-500/30 hover:text-yellow-400"
        >
          Explore All NGE Drilling Rigs

          <ArrowRight
            size={16}
            aria-hidden="true"
          />

        </Link>

      </div>

    </section>
  );
}