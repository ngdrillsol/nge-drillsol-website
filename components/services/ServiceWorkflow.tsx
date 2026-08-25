"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { workflow } from "./services.data";

export default function ServiceWorkflow() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Process
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          From Requirement
          <span className="block text-yellow-400">
            To Lifetime Support
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every drilling project follows a structured engineering
          process to ensure the right equipment, successful installation
          and reliable long-term performance.
        </p>

      </div>

      {/* Timeline */}

      <div className="mx-auto max-w-5xl">

        {workflow.map((step, index) => (

          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >

            <div className="flex gap-8">

              {/* Step Number */}

              <div className="flex flex-col items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-black">

                  {step.step}

                </div>

                {index !== workflow.length - 1 && (
                  <div className="my-4 flex justify-center">
                    <ArrowDown
                      size={26}
                      className="text-yellow-500"
                    />
                  </div>
                )}

              </div>

              {/* Content */}

              <div className="mb-12 flex-1 rounded-[28px] border border-white/10 bg-[#090909] p-8">

                <h3 className="text-3xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {step.description}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom Banner */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <h3 className="text-center text-3xl font-bold text-white">
          Every Step Guided By Engineers
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-300">
          We don't simply deliver a drilling rig.
          We guide your project through engineering consultation,
          equipment selection, customization, manufacturing,
          commissioning and long-term technical support.
        </p>

      </div>

    </section>
  );
}