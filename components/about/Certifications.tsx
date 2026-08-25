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
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Certifications & Recognition
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Built On
          <span className="block text-yellow-400">
            Quality & Compliance
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our commitment to engineering quality is supported by recognized
          certifications and industry standards that reinforce our focus on
          dependable manufacturing and customer confidence.
        </p>
      </div>

      {/* CERTIFICATES */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            whileHover={{ y: -6 }}
            className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-[#090909]
              p-6
              text-center
              transition-all
              duration-300
              hover:border-yellow-500/40
              hover:shadow-[0_20px_60px_rgba(234,179,8,0.08)]
            "
          >

            {/* Certificate Image */}

            <div
              className="
                relative
                flex
                h-[150px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
              "
            >
              <div className="relative h-full w-full">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} - NGE Drillsol`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Certificate Name */}

            <h3 className="mt-6 text-lg font-bold text-white">
              {certificate.title}
            </h3>

          </motion.div>
        ))}

      </div>

      {/* QUALITY INFORMATION */}

      <div className="grid gap-8 md:grid-cols-3">

        {/* Quality Standards */}

        <div className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <BadgeCheck
            size={42}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Quality Standards
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Engineering processes focused on dependable manufacturing and
            consistent product quality.
          </p>

        </div>

        {/* Customer Confidence */}

        <div className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <ShieldCheck
            size={42}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Customer Confidence
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Certifications help reinforce our commitment to quality,
            reliability and professional engineering practices.
          </p>

        </div>

        {/* Continuous Improvement */}

        <div className="rounded-[30px] border border-white/10 bg-[#090909] p-8 text-center">

          <CheckCircle2
            size={42}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Continuous Improvement
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            We continuously improve our products and processes to meet
            evolving customer expectations and industry requirements.
          </p>

        </div>

      </div>

    </section>
  );
}