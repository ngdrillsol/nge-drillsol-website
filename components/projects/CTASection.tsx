"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Briefcase,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Effects */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Start Your Next Project
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white xl:text-6xl">
          Ready to Build Your
          <span className="block text-yellow-400">
            Next Drilling Success Story?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Whether you're planning a water well, renewable energy,
          infrastructure, mining or industrial drilling project,
          our engineering team is ready to recommend the right
          drilling solution for your site.
        </p>

        {/* Project Checklist */}

        <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-4">

          <div>
            <Briefcase
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Project
            </p>

            <p className="mt-2 text-white">
              Define Scope
            </p>
          </div>

          <div>
            <Briefcase
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Geology
            </p>

            <p className="mt-2 text-white">
              Site Conditions
            </p>
          </div>

          <div>
            <Briefcase
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Equipment
            </p>

            <p className="mt-2 text-white">
              Rig Selection
            </p>
          </div>

          <div>
            <Briefcase
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Support
            </p>

            <p className="mt-2 text-white">
              Engineering Team
            </p>
          </div>

        </div>

        {/* Action Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >

          {/* Discuss Your Project */}

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Discuss Your Project

            <ArrowRight size={18} />
          </Link>

          {/* WhatsApp */}

          <Link
            href="https://wa.me/919106360907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
          >
            <MessageCircle size={18} />

            WhatsApp
          </Link>

        </motion.div>

      </div>

    </section>
  );
}