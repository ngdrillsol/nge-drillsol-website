"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { certifications } from "./about.data";

export default function Certifications() {
  return (
    <section
      className="space-y-10 sm:space-y-16"
      aria-labelledby="certifications-heading"
    >

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Certifications, Registrations & Recognition
        </span>

        <h2
          id="certifications-heading"
          className="mt-6 text-4xl font-bold text-white md:text-5xl"
        >
          Quality Credentials
          <span className="block text-yellow-400">
            Supporting Our Operations
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol maintains certifications, registrations,
          recognitions and manufacturing credentials relevant to
          its engineering, production and business operations.
        </p>

      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-5">

        {certifications.map((certificate, index) => (

          <motion.article
            key={certificate.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            whileHover={{ y: -6 }}
            className="group flex w-[76vw] max-w-[300px] shrink-0 snap-start flex-col rounded-[28px] border border-white/10 bg-[#090909] p-4 text-center transition-all duration-300 hover:border-yellow-500/40 hover:shadow-[0_20px_60px_rgba(234,179,8,0.08)] sm:w-auto sm:max-w-none sm:p-6"
          >

            <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:h-[150px] sm:p-5">

              <div className="relative h-full w-full">

                <Image
                  src={certificate.image}
                  alt={`${certificate.title} - NGE Drillsol`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

              </div>

            </div>

            <h3 className="mt-4 text-lg font-bold text-white sm:mt-6">
              {certificate.title}
            </h3>

          </motion.article>

        ))}

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        <article className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <BadgeCheck
            size={42}
            className="mx-auto text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Documented Credentials
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Relevant registrations, certifications and company
            credentials support NGE Drillsol&apos;s manufacturing
            and business operations.
          </p>

        </article>

        <article className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <ShieldCheck
            size={42}
            className="mx-auto text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Quality Processes
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Engineering, manufacturing, inspection and machine
            preparation are managed with attention to documented
            project requirements.
          </p>

        </article>

        <article className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <CheckCircle2
            size={42}
            className="mx-auto text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Continuous Improvement
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Product development and internal processes continue to
            evolve with engineering requirements and field
            experience.
          </p>

        </article>

      </div>

    </section>
  );
}