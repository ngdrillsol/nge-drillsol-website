
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigHeroProps {
  rig: RigData;
}

const categoryHrefMap: Record<string, string> = {
  "water-well": "/drilling-rigs/water-well-drilling-rigs",
  "water-well-drilling-rigs":
    "/drilling-rigs/water-well-drilling-rigs",

  dth: "/drilling-rigs/dth-drilling-rigs",
  "dth-drilling-rigs": "/drilling-rigs/dth-drilling-rigs",

  rotary: "/drilling-rigs/rotary-drilling-rigs",
  "rotary-drilling-rigs":
    "/drilling-rigs/rotary-drilling-rigs",

  tractor: "/drilling-rigs/tractor-mounted-drilling-rigs",
  "tractor-mounted":
    "/drilling-rigs/tractor-mounted-drilling-rigs",
  "tractor-mounted-drilling-rigs":
    "/drilling-rigs/tractor-mounted-drilling-rigs",

  piling: "/drilling-rigs/piling-rigs",
  "piling-rigs": "/drilling-rigs/piling-rigs",

  core: "/drilling-rigs/core-drilling-rigs",
  "core-drilling-rigs": "/drilling-rigs/core-drilling-rigs",

  workover: "/drilling-rigs/workover-rigs",
  "workover-rigs": "/drilling-rigs/workover-rigs",
};

function formatCategory(category: string) {
  return category
    .replace(/-drilling-rigs$/i, "")
    .replace(/-rigs$/i, "")
    .split("-")
    .map((word) =>
      word.toLowerCase() === "dth"
        ? "DTH"
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default function RigHero({ rig }: RigHeroProps) {
  const categories = rig.category || [];

  const primaryCategory = categories[0]
    ? formatCategory(categories[0])
    : "Drilling Rig";

  const productName = rig.name
    .toLowerCase()
    .includes(rig.model.toLowerCase())
    ? rig.name
    : `${rig.model} ${rig.name}`;

  const hasDownloads =
    Boolean(rig.downloads && rig.downloads.length > 0);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#05070B]">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >

          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <ChevronRight
            size={15}
            aria-hidden="true"
          />

          <Link
            href="/drilling-rigs"
            className="transition hover:text-yellow-400"
          >
            Drilling Rigs
          </Link>

          <ChevronRight
            size={15}
            aria-hidden="true"
          />

          <span className="text-slate-300">
            {rig.model}
          </span>

        </nav>

        {/* Hero Content */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Category Links */}

            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">

                {categories.map((category) => {
                  const href =
                    categoryHrefMap[category.toLowerCase()];

                  const label = formatCategory(category);

                  return href ? (
                    <Link
                      key={category}
                      href={href}
                      className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:border-yellow-500/50 hover:bg-yellow-500/15"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span
                      key={category}
                      className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400"
                    >
                      {label}
                    </span>
                  );
                })}

              </div>
            )}

            {/* Brand */}

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              NGE Drillsol • {primaryCategory}
            </p>

            {/* Main SEO H1 */}

            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {productName}
            </h1>

            {/* Tagline */}

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {rig.tagline}
            </p>

            {/* Trust Point */}

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">

              <CheckCircle2
                size={20}
                className="shrink-0 text-yellow-400"
                aria-hidden="true"
              />

              <span>
                Engineered for professional drilling applications
                and project-specific requirements
              </span>

            </div>

            {/* Actions */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#inquiry"
                className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-bold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
              >
                Request Technical Details

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={`https://wa.me/919106360907?text=${encodeURIComponent(
                  `Hello NGE Drillsol, I am interested in the ${rig.model} drilling rig. Please share technical details and quotation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                />

                Discuss {rig.model}
              </Link>

              {hasDownloads && (
                <Link
                  href="#downloads"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 font-semibold text-slate-200 transition hover:border-yellow-500/30 hover:text-yellow-400"
                >
                  <Download
                    size={18}
                    aria-hidden="true"
                  />

                  Product Brochure
                </Link>
              )}

            </div>

            {/* Primary Category */}

            <div className="mt-10 text-sm text-slate-500">
              Primary category:
              <span className="ml-2 text-slate-300">
                {primaryCategory}
              </span>
            </div>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative"
          >

            <div className="absolute inset-10 rounded-full bg-yellow-500/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-2xl">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#0A0D12]">

                <img
                  src={rig.heroImage}
                  alt={`${productName} drilling rig by NGE Drillsol`}
                  className="h-full w-full object-contain transition duration-700 hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              </div>

            </div>

            {/* Model Badge */}

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 shadow-xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Model
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {rig.model}
              </p>

            </div>

            {/* Primary Quick Spec */}

            {rig.quickSpecs?.[0] && (
              <div className="absolute right-6 top-6 rounded-2xl border border-yellow-500/20 bg-black/80 px-5 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {rig.quickSpecs[0].label}
                </p>

                <p className="mt-1 text-lg font-bold text-yellow-400">
                  {rig.quickSpecs[0].value}
                </p>

              </div>
            )}

          </motion.div>

        </div>

        {/* Quick Spec Bar */}

        {rig.quickSpecs.length > 0 && (

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4"
          >

            {rig.quickSpecs.slice(0, 4).map((spec, index) => (

              <div
                key={`${spec.label}-${index}`}
                className={`p-6 lg:p-7 ${
                  index !== 0
                    ? "border-t border-white/10 sm:border-l lg:border-t-0"
                    : ""
                }`}
              >

                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {spec.label}
                </dt>

                <dd className="mt-3 text-xl font-bold text-white">
                  {spec.value}
                </dd>

              </div>

            ))}

          </motion.dl>

        )}

      </div>
    </section>
  );
}