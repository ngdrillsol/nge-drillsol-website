"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  Mountain,
  Globe2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function CompanyStory() {
  const principles = [
    {
      icon: Factory,
      title: "Engineering & Manufacturing",
      description:
        "Our drilling equipment is developed around engineering requirements, machine configuration and real operating conditions.",
    },
    {
      icon: Mountain,
      title: "Ground Conditions Matter",
      description:
        "Drilling depth, bore diameter and geological formation are considered when selecting or configuring drilling equipment.",
    },
    {
      icon: Globe2,
      title: "International Requirements",
      description:
        "Machine configurations can be evaluated according to operating environment, project requirements and destination market.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Development",
      description:
        "Field experience, customer requirements and engineering development contribute to improvements in our drilling equipment.",
    },
  ];

  return (
    <section
      className="space-y-16"
      aria-labelledby="company-story-heading"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Our Company
        </span>

        <h2
          id="company-story-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Engineering Drilling Equipment
          <span className="block text-yellow-400">
            Around Real Project Requirements
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Drilling projects differ in geology, depth, bore
          diameter, operating environment and application.
          NGE Drillsol approaches equipment selection and
          manufacturing with those project conditions in mind.
        </p>

      </div>

      {/* Story */}

      <div className="grid items-center gap-14 lg:grid-cols-2">

        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#111827] to-[#090909] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10"
        >

          <h3 className="text-4xl font-bold text-white">
            How NGE Drillsol Works
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            NGE Drillsol develops drilling rigs for groundwater,
            DTH, rotary, piling, exploration, core drilling and
            workover applications.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Instead of considering only a machine model, our
            engineering approach evaluates factors such as required
            drilling depth, hole diameter, formation, drilling
            method, mounting configuration and supporting
            equipment.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            This approach allows standard platforms to be selected
            or configured according to the technical requirements
            of a drilling project.
          </p>

          <Link
            href="/drilling-rigs"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            Explore NGE Drilling Rigs

            <ArrowRight
              size={17}
              aria-hidden="true"
            />
          </Link>

        </motion.article>

        {/* Principles */}

        <div className="grid gap-6">

          {principles.map((item, index) => {
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

      {/* Statement */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <p className="mx-auto max-w-4xl text-center text-2xl font-medium leading-10 text-white">
          Our objective is to combine drilling experience,
          engineering and manufacturing to provide equipment suited
          to the ground conditions and technical requirements of
          each project.
        </p>

      </div>

    </section>
  );
}