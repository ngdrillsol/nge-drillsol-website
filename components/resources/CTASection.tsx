"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  BookOpen,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Need Technical Guidance?
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white xl:text-6xl">
          Let's Solve Your
          <span className="block text-yellow-400">
            Drilling Challenge
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Whether you're selecting a drilling rig, evaluating geological
          conditions or planning an upcoming project, our engineering
          team is ready to help you choose the most suitable drilling
          solution.
        </p>

        {/* Knowledge Highlights */}

        <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-4">

          <div>
            <BookOpen
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Learn
            </p>

            <p className="mt-2 text-white">
              Technical Knowledge
            </p>
          </div>

          <div>
            <BookOpen
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Evaluate
            </p>

            <p className="mt-2 text-white">
              Project Requirements
            </p>
          </div>

          <div>
            <BookOpen
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Select
            </p>

            <p className="mt-2 text-white">
              Right Equipment
            </p>
          </div>

          <div>
            <BookOpen
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Consult
            </p>

            <p className="mt-2 text-white">
              NGE Engineers
            </p>
          </div>

        </div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >

          {/* Speak With Our Engineers */}

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Speak With Our Engineers

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