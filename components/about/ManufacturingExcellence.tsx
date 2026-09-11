"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Cog,
  ClipboardCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Cog,
    title: "Engineering & Machine Design",
    description:
      "Drilling rig development considers structural design, mast configuration, hydraulic systems, rotary or top-drive requirements, lifting capacity and serviceability.",
  },
  {
    icon: Factory,
    title: "Fabrication & Assembly",
    description:
      "Engineering designs are converted into drilling equipment through fabrication, machining, mechanical assembly, hydraulic integration and final machine assembly.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Functional Checks",
    description:
      "Machines are inspected and functionally checked before dispatch to verify the intended operating configuration and equipment integration.",
  },
  {
    icon: Wrench,
    title: "Field-Based Improvement",
    description:
      "Project experience, operator feedback and service requirements contribute to continued engineering and product development.",
  },
];

export default function ManufacturingExcellence() {
  return (
    <section
      className="space-y-16"
      aria-labelledby="manufacturing-heading"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Drilling Rig Manufacturing
        </span>

        <h2
          id="manufacturing-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          From Engineering Design
          <span className="block text-yellow-400">
            to Finished Drilling Rig
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol combines engineering, fabrication,
          mechanical assembly, hydraulic integration, inspection
          and functional verification to manufacture drilling
          equipment for field operation.
        </p>

      </div>

      {/* Main */}

      <div className="grid items-center gap-14 lg:grid-cols-2">

        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10"
        >

          <Factory
            size={54}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-8 text-4xl font-bold text-white">
            Manufacturing Approach
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            A drilling rig is a combination of structural,
            mechanical, hydraulic and operational systems. The
            manufacturing process therefore begins with the
            intended drilling application and machine
            configuration.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Our focus is on producing serviceable equipment with
            appropriate structural strength, machine integration
            and operating configuration for the intended drilling
            environment.
          </p>

        </motion.article>

        <div className="grid gap-6">

          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-[#090909] p-7 transition hover:border-yellow-500/30"
              >

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <Icon
                      size={30}
                      className="text-yellow-400"
                      aria-hidden="true"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* Bottom */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <div className="flex flex-col items-center text-center">

          <ArrowRight
            size={42}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-3xl font-bold text-white">
            Engineering and Manufacturing Work Together
          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
            The final drilling rig configuration should reflect
            both engineering requirements and the conditions in
            which the machine will actually operate.
          </p>

        </div>

      </div>

    </section>
  );
}