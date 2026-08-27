"use client";

import { motion } from "framer-motion";
import {
  Search,
  Map,
  Drill,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const timeline = [
  {
    icon: Search,
    title: "Project Requirement",
    description:
      "Understanding the customer's objective, drilling depth, geology, expected water yield and overall project requirements.",
  },
  {
    icon: Map,
    title: "Site Investigation",
    description:
      "Studying geological formations, access conditions and selecting the most suitable drilling method before execution.",
  },
  {
    icon: Drill,
    title: "Engineering Execution",
    description:
      "Deployment of drilling rigs, drilling equipment and engineering expertise for efficient field execution under challenging conditions.",
  },
  {
    icon: CheckCircle2,
    title: "Successful Completion",
    description:
      "Project completed successfully with reliable drilling performance and valuable engineering experience for future developments.",
  },
];

export default function ProjectTimeline() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Project Timeline
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          From Planning
          <span className="block text-yellow-400">
            To Project Success
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every successful drilling project follows a structured engineering
          process, ensuring the right drilling method, equipment selection
          and execution strategy.
        </p>

      </div>

      {/* Timeline */}

      <div className="mx-auto max-w-5xl">

        {timeline.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >

              <div className="flex gap-8">

                {/* Icon */}

                <div className="flex flex-col items-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-black">

                    <Icon size={28} />

                  </div>

                  {index !== timeline.length - 1 && (

                    <div className="my-4 flex justify-center">

                      <ArrowDown
                        size={30}
                        className="text-yellow-500"
                      />

                    </div>

                  )}

                </div>

                {/* Content */}

                <div className="mb-10 flex-1 rounded-[28px] border border-white/10 bg-[#090909] p-8">

                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {step.description}
                  </p>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
