"use client";

import { motion } from "framer-motion";

import { PlatformTabsProps } from "./platform.types";

export const platformSectionIds: Record<string, string> = {
  ngdr: "ngdr-series",
  ngdth: "ngdth-series",
  ngcore: "core-series",
  ngpiling: "piling-series",
  ngwr: "workover-series",
};

export default function PlatformTabs({
  platforms,
  selectedPlatform,
  onSelect,
}: PlatformTabsProps) {
  return (
    <div className="mt-10 sm:mt-12 lg:mt-14">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0 xl:grid-cols-5">
        {platforms.map((platform) => {
          const active = selectedPlatform.id === platform.id;

          return (
            <motion.a
              key={platform.id}
              href={`#${platformSectionIds[platform.id] ?? "platform-details"}`}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => {
                event.preventDefault();
                onSelect(platform);
                window.requestAnimationFrame(() => {
                  window.requestAnimationFrame(() => {
                    document
                      .getElementById(platformSectionIds[platform.id] ?? "platform-details")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  });
                });
              }}
              className={`group relative w-[85vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:w-[72vw] sm:p-6 lg:w-auto lg:max-w-none ${
                active
                  ? "border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 shadow-[0_0_40px_rgba(255,190,0,0.12)]"
                  : "border-white/10 bg-white/5 hover:border-yellow-500/40 hover:bg-white/10"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                    active
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {platform.application}
                </span>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {platform.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {platform.tagline}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      active ? "text-yellow-400" : "text-slate-300"
                    }`}
                  >
                    Explore Platform
                  </span>

                  <motion.span
                    animate={{ x: active ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xl ${
                      active ? "text-yellow-400" : "text-slate-500"
                    }`}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
