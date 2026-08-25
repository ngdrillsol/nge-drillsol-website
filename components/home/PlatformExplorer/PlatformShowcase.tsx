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
      <motion.div
        key={platform.id}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-12 p-8 lg:grid-cols-2 lg:p-12">


          {/* Platform Details */}
          <PlatformDetails platform={platform} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}