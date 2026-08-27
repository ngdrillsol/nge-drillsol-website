"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectData } from "./project.types";

interface EngineeringJourneyProps {
  project: ProjectData;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function EngineeringJourney({
  project,
}: EngineeringJourneyProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[180px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10"
      >

        {/* Section Header */}

        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-400">
            ENGINEERING JOURNEY
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From Challenge to Execution
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Every successful drilling project follows a disciplined engineering
            process. From understanding complex geological conditions to
            delivering dependable groundwater infrastructure, each phase was
            executed with precision, planning and field expertise.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-12 max-w-6xl sm:mt-16 lg:mt-24">

          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-500/0 via-amber-400 to-amber-500/0 lg:block" />

          <div className="space-y-20">

            {project.journey.map((step, index) => {

              const left = index % 2 === 0;

              return (

                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative"
                >

                  {/* Desktop Layout */}

                  <div className="hidden lg:grid lg:grid-cols-[1fr_90px_1fr] lg:items-center">

                    {/* LEFT CARD */}

                    {left ? (

                      <div className="pr-14">

                        <motion.div
                          whileHover={{
                            y: -6,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                        >

                          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                            STEP {(index + 1).toString().padStart(2, "0")}
                          </span>

                          <h3 className="mt-4 text-3xl font-bold text-white">
                            {step.title}
                          </h3>

                          <p className="mt-6 leading-8 text-slate-400">
                            {step.description}
                          </p>

                          <div className="mt-8 flex items-center gap-3 text-amber-400">

                            
                          </div>

                        </motion.div>

                      </div>

                    ) : (

                      <div />

                    )}

                    {/* Timeline Dot */}

                    <div className="relative flex justify-center">

                      <div className="absolute h-12 w-px bg-amber-400/40" />

                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/40 bg-black shadow-[0_0_40px_rgba(251,191,36,0.25)]">

                        <span className="text-lg font-bold text-amber-300">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                      </div>

                    </div>

                    {/* RIGHT CARD */}
                                        {!left ? (

                      <div className="pl-14">

                        <motion.div
                          whileHover={{
                            y: -6,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                        >

                          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                            STEP {(index + 1).toString().padStart(2, "0")}
                          </span>

                          <h3 className="mt-4 text-3xl font-bold text-white">
                            {step.title}
                          </h3>

                          <p className="mt-6 leading-8 text-slate-400">
                            {step.description}
                          </p>

                          <div className="mt-8 flex items-center gap-3 text-amber-400">

                            
                          </div>

                        </motion.div>

                      </div>

                    ) : (

                      <div />

                    )}

                  </div>

                  {/* Mobile Layout */}

                  <div className="relative pl-16 lg:hidden">

                    {/* Timeline */}

                    <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-amber-500/20 via-amber-400 to-amber-500/20" />

                    {/* Dot */}

                    <div className="absolute left-[10px] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-black shadow-[0_0_25px_rgba(251,191,36,0.25)]">

                      <span className="text-xs font-bold text-amber-300">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>

                    </div>

                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                    >

                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                        STEP {(index + 1).toString().padStart(2, "0")}
                      </span>

                      <h3 className="mt-4 text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-400">
                        {step.description}
                      </p>

                      <div className="mt-7 flex items-center gap-2 text-amber-400">

                        
                      </div>

                    </motion.div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </motion.div>

    </section>
  );
}
