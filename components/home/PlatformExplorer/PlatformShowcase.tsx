"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { PlatformShowcaseProps } from "./platform.types";
import PlatformDetails from "./PlatformDetails";

export default function PlatformShowcase({
  platform,
}: PlatformShowcaseProps) {
  return (
    <AnimatePresence mode="wait">

      <motion.article
        key={platform.id}
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -25,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:p-12">

          {/* ===================================================
              PLATFORM DETAILS
          =================================================== */}

          <div>
            <PlatformDetails
              platform={platform}
            />
          </div>

          {/* ===================================================
              PLATFORM IMAGE
          =================================================== */}

          <div className="relative">

            <div className="absolute inset-8 rounded-full bg-yellow-500/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080B10] p-4">

              <div className="relative aspect-[4/3]">

                <Image
                  src={platform.heroImage}
                  alt={`${platform.title} ${platform.tagline} by NGE Drillsol`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-contain p-4"
                />

              </div>

            </div>

            {/* Platform label */}

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                NGE Drillsol Platform
              </p>

              <p className="mt-1 font-bold text-white">
                {platform.title}
              </p>

            </div>

          </div>

        </div>

      </motion.article>

    </AnimatePresence>
  );
}