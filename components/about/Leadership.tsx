"use client";

import { motion } from "framer-motion";
import {
  UserCircle2,
  Compass,
  Lightbulb,
  Users,
} from "lucide-react";

import { leadership } from "./about.data";

export default function Leadership() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Leadership
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Leadership Guided By
          <span className="block text-yellow-400">
            Engineering Excellence
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Behind every drilling rig is a team committed to engineering,
          innovation and long-term customer success. Our leadership
          focuses on solving real drilling challenges through practical
          engineering solutions.
        </p>

      </div>

      {/* Leader Card */}

      <div className="mx-auto max-w-6xl">

        {leadership.map((member) => (

          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 overflow-hidden rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] via-[#090909] to-[#05070B] p-5 sm:rounded-[30px] sm:p-8 lg:grid-cols-[340px_1fr] lg:gap-10 lg:rounded-[36px] lg:p-10"
          >

            {/* Left */}

            <div>

              <div className="flex aspect-square items-center justify-center rounded-[28px] border border-white/10 bg-[#111827]">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-[28px] object-cover"
                  />
                ) : (
                  <UserCircle2
                    size={140}
                    className="text-slate-500"
                  />
                )}

              </div>

            </div>

            {/* Right */}

            <div>

              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
                {member.designation}
              </span>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {member.name}
              </h3>

              <p className="mt-8 text-lg leading-9 text-slate-300">
                {member.description}
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Compass
                    className="text-yellow-400"
                    size={30}
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Vision
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Building globally trusted drilling engineering
                    solutions.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Lightbulb
                    className="text-yellow-400"
                    size={30}
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Innovation
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Continuous product development driven by field
                    experience.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Users
                    className="text-yellow-400"
                    size={30}
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Partnership
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Long-term customer relationships built on trust and
                    engineering support.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
