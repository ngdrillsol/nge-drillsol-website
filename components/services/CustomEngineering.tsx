"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Mountain,
  Truck,
  Gauge,
  Cog,
  CheckCircle2,
} from "lucide-react";

const customizationPoints = [
  {
    icon: Mountain,
    title: "Geology-Based Design",
    description:
      "Every rig is configured according to the geological formation, drilling method and expected drilling conditions.",
  },
  {
    icon: Gauge,
    title: "Performance Configuration",
    description:
      "Hydraulic systems, rotary torque, pull-up capacity and drilling depth are selected to match your project requirements.",
  },
  {
    icon: Truck,
    title: "Vehicle & Mounting Options",
    description:
      "Available as truck-mounted, trailer-mounted, tractor-mounted or skid-mounted solutions depending on operational needs.",
  },
  {
    icon: Cog,
    title: "Custom Features",
    description:
      "Mast configuration, mud pumps, compressors, rod handling systems and auxiliary equipment can be integrated according to customer specifications.",
  },
];

export default function CustomEngineering() {
  return (
    <section className="space-y-10 md:space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Custom Engineering
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Every Project
          <span className="block text-yellow-400">
            Deserves Its Own Engineering Solution
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We understand that no two drilling projects are identical.
          Our engineering team works closely with every customer to
          configure drilling equipment that matches operational goals,
          geology and field conditions.
        </p>

      </div>

      {/* Two Column Layout */}

      <div className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-14 md:overflow-visible lg:grid-cols-2 lg:items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-[84vw] max-w-[340px] shrink-0 snap-start rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-5 sm:rounded-[28px] sm:p-8 md:w-auto md:max-w-none lg:rounded-[32px] lg:p-10"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Settings
              size={40}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            Engineered Around Your Requirements
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Instead of asking customers to adapt to standard machines,
            we adapt our engineering to meet the technical demands of
            each project.
          </p>

          <div className="mt-10 space-y-5">

            {[
              "Drilling Depth",
              "Hole Diameter",
              "Geological Formation",
              "Drilling Method",
              "Mobility Requirements",
              "Budget & Productivity Goals",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle2
                  size={22}
                  className="text-yellow-400"
                />

                <span className="text-slate-200">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <div className="contents md:grid md:gap-6">

          {customizationPoints.map((point, index) => {
            const Icon = point.icon;

            return (

              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="w-[84vw] max-w-[340px] shrink-0 snap-start rounded-[28px] border border-white/10 bg-[#090909] p-6 transition hover:border-yellow-500/30 md:w-auto md:max-w-none md:p-8"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <Icon
                      size={28}
                      className="text-yellow-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      {point.title}
                    </h4>

                    <p className="mt-4 leading-8 text-slate-400">
                      {point.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}
