"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-yellow-500/30 bg-[#0b0b0b] px-6 py-16 md:px-12 lg:px-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Let's Build Your Project
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Ready to Find the
          <br />
          <span className="text-yellow-400">
            Perfect Drilling Solution?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
          Share your project details with our engineering team and receive
          expert recommendations on drilling methods, drilling rigs,
          accessories and complete project solutions.
        </p>

        {/* Project information */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] md:grid-cols-4">
          <div className="px-5 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
              Industry
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Your Application
            </p>
          </div>

          <div className="border-white/10 px-5 py-6 md:border-l">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
              Geology
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Ground Conditions
            </p>
          </div>

          <div className="border-white/10 px-5 py-6 md:border-l">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
              Rig Selection
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Best Equipment
            </p>
          </div>

          <div className="border-white/10 px-5 py-6 md:border-l">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
              Support
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Engineering Team
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-yellow-300"
            >
              Get Engineering Consultation
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://wa.me/919106360907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.12]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}