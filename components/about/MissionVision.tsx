"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Mission & Vision
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Engineering Today.
          <span className="block text-yellow-400">
            Building Tomorrow.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our purpose extends beyond manufacturing machinery. We strive to
          engineer reliable drilling solutions that help contractors,
          industries and governments complete challenging drilling projects
          safely, efficiently and successfully.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Mission */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-[#090909] p-10"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Target
              size={40}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            Our Mission
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            To design and manufacture dependable drilling rigs and
            engineering solutions that perform reliably across diverse
            geological formations while delivering long-term value to our
            customers worldwide.
          </p>

        </motion.div>

        {/* Vision */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-10"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Eye
              size={40}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            Our Vision
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            To become one of the world's most respected drilling engineering
            companies by delivering innovative equipment, customized
            engineering solutions and trusted technical support across global
            markets.
          </p>

        </motion.div>

      </div>

      {/* Bottom Banner */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <div className="flex flex-col items-center gap-6 text-center">

          <Compass
            size={46}
            className="text-yellow-400"
          />

          <h3 className="text-3xl font-bold text-white">
            Guided by Engineering. Driven by Customer Success.
          </h3>

          <p className="max-w-4xl text-lg leading-9 text-slate-300">
            Every machine we develop reflects our commitment to engineering
            excellence, practical innovation and long-term partnerships that
            help customers achieve dependable drilling performance in every
            environment.
          </p>

        </div>

      </div>

    </section>
  );
}