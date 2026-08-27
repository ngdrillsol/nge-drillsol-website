"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-10 sm:mt-16"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#0B0F16] to-[#05070B] p-3 sm:rounded-[32px] sm:p-8">

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[140px]" />

        {/* World Map */}

        <div className="relative mx-auto max-w-6xl">

          <Image
            src="/images/world-map.png"
            alt="Global Presence"
            width={1400}
            height={700}
            className="w-full opacity-80"
            sizes="(max-width: 768px) 100vw, 1152px"
            priority
          />

          {/* India */}

          <div className="absolute left-[66%] top-[41%]">

            <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)]" />

            <span className="mt-1 block whitespace-nowrap text-[7px] font-semibold uppercase tracking-normal text-yellow-400 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
              India (HQ)
            </span>

          </div>

          {/* Australia */}

          <div className="absolute left-[84%] top-[72%]">

            <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)]" />

            <span className="mt-1 block -translate-x-4 whitespace-nowrap text-[7px] font-semibold uppercase tracking-normal text-yellow-400 sm:mt-2 sm:translate-x-0 sm:text-xs sm:tracking-[0.2em]">
              Australia
            </span>

          </div>

          {/* Senegal */}

          <div className="absolute left-[45%] top-[45%]">

            <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)]" />

            <span className="mt-1 block whitespace-nowrap text-[7px] font-semibold uppercase tracking-normal text-yellow-400 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
              Senegal
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
