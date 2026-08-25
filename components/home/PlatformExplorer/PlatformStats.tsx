"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Layers3,
  Mountain,
  Wrench,
} from "lucide-react";

import { PlatformStatsProps } from "./platform.types";

export default function PlatformStats({
  platform,
}: PlatformStatsProps) {
  const cards = [
    {
      title: "Models",
      value: platform.models.length,
      icon: Boxes,
    },
    {
      title: "Applications",
      value: platform.applications.length,
      icon: Layers3,
    },
    {
      title: "Methods",
      value: platform.drillingMethods.length,
      icon: Wrench,
    },
    {
      title: "Formations",
      value: platform.formations.length,
      icon: Mountain,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="text-xl font-bold text-white">
        Engineering Overview
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Platform capability at a glance.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <Icon className="mb-3 h-6 w-6 text-yellow-400" />

              <div className="text-3xl font-bold text-white">
                {card.value}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                {card.title}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}