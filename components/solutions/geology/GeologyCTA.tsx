"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MessageSquare,
  Drill,
  FileText,
} from "lucide-react";

interface GeologyCTAProps {
  geologyName?: string;
}

export default function GeologyCTA({
  geologyName = "this formation",
}: GeologyCTAProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello NGE Drillsol, I am planning a drilling project in ${geologyName}. I would like your engineers to recommend the suitable drilling rig, drilling method and tooling for my project.`
  );

  const whatsappUrl = `https://wa.me/919106360907?text=${whatsappMessage}`;

  return (
    <section
      id="geology-inquiry"
      className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.10] via-[#0A0D13] to-[#05070B] px-7 py-12 sm:px-10 lg:px-14 lg:py-14"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            <Drill size={14} />
            Need Engineering Guidance?
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Planning to drill in{" "}
            <span className="text-yellow-400">
              {geologyName}
            </span>
            ?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Tell us your target depth, bore diameter, project
            application and location. Our engineering team can help
            evaluate the formation and recommend a suitable drilling
            method, rig configuration and tooling.
          </p>

          {/* Engineering inputs */}

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Target Depth",
              "Bore Diameter",
              "Drilling Method",
              "Project Location",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* =====================================================
            RIGHT ACTIONS
        ===================================================== */}

        <div className="flex w-full flex-col gap-4 lg:w-[300px]">

          {/* WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-500 px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
          >

            <MessageSquare size={19} />

            Discuss With Our Engineers

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </a>

          {/* Contact page */}

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/[0.08]"
          >

            <FileText size={19} />

            Send Project Details

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </Link>

        </div>

      </div>

      {/* Bottom engineering statement */}

      <div className="relative z-10 mt-10 border-t border-white/10 pt-7">

        <p className="text-center text-sm font-medium text-slate-500">
          Engineering before equipment. The right rig starts with
          understanding the ground.
        </p>

      </div>

    </section>
  );
}