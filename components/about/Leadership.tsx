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
    <section
      className="space-y-16"
      aria-labelledby="leadership-heading"
    >

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Leadership
        </span>

        <h2
          id="leadership-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Leadership Behind
          <span className="block text-yellow-400">
            NGE Drillsol
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol&apos;s leadership combines drilling
          experience, engineering development, manufacturing and
          customer requirements to guide the company&apos;s
          equipment and project approach.
        </p>

      </div>

      <div className="mx-auto max-w-6xl">

        {leadership.map((member) => (

          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 overflow-hidden rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] via-[#090909] to-[#05070B] p-5 sm:rounded-[30px] sm:p-8 lg:grid-cols-[340px_1fr] lg:gap-10 lg:rounded-[36px] lg:p-10"
          >

            <div>

              <div className="flex aspect-square items-center justify-center rounded-[28px] border border-white/10 bg-[#111827]">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.designation} at NGE Drillsol`}
                    className="h-full w-full rounded-[28px] object-cover"
                  />
                ) : (
                  <UserCircle2
                    size={140}
                    className="text-slate-500"
                    aria-hidden="true"
                  />
                )}

              </div>

            </div>

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
                    aria-hidden="true"
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Direction
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Building a focused drilling engineering and
                    manufacturing business.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Lightbulb
                    className="text-yellow-400"
                    size={30}
                    aria-hidden="true"
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Engineering
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Developing drilling equipment around practical
                    project and field requirements.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <Users
                    className="text-yellow-400"
                    size={30}
                    aria-hidden="true"
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Customers
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    Building long-term relationships through
                    equipment supply and technical support.
                  </p>

                </div>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}