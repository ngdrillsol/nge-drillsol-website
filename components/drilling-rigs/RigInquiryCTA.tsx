"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigInquiryCTAProps {
  rig: RigData;
}

export default function RigInquiryCTA({
  rig,
}: RigInquiryCTAProps) {
  const whatsappNumber = "919106360907";

  const whatsappMessage = encodeURIComponent(
    `Hello NGE DRILLSOL,

I am interested in the ${rig.model} (${rig.name}).

Please share the technical details, configuration and quotation.

Project requirements:
• Required drilling depth:
• Bore diameter:
• Formation:
• Drilling method:
• Project location:

Thank you.`
  );

  return (
    <section
      id="inquiry"
      className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-[#090C11]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[110px]" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />

      </div>

      <div className="relative grid gap-12 p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          {/* Eyebrow */}

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

            <Send size={14} />

            Start Your Inquiry

          </span>

          {/* Heading */}

          <h2 className="mt-7 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

            Looking for the{" "}

            <span className="text-yellow-400">
              {rig.model}
            </span>
            ?

          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Tell us about your drilling project and our team can
            discuss the appropriate machine configuration, tooling
            and commercial requirements.

          </p>

          {/* =================================================
              WHAT TO SEND
          ================================================= */}

          <div className="mt-9 grid gap-4 sm:grid-cols-2">

            {[
              "Required drilling depth",
              "Target bore diameter",
              "Formation / ground condition",
              "Drilling method",
              "Project location",
              "Required quantity",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-yellow-400"
                />

                <span className="text-sm text-slate-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* =================================================
              TRUST NOTE
          ================================================= */}

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

            <p className="text-sm leading-7 text-slate-400">

              <span className="font-semibold text-white">
                International enquiries welcome.
              </span>{" "}
              Share your project requirements and our sales team can
              help you evaluate the appropriate NGE DRILLSOL rig.

            </p>

          </div>

        </motion.div>

        {/* ===================================================
            RIGHT CONTACT CARD
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col rounded-[30px] border border-white/10 bg-black/30 p-7 backdrop-blur-xl sm:p-8"
        >

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Get in Touch
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Request {rig.model} Information
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Choose the fastest way to send your requirements.
          </p>

          {/* =================================================
              WHATSAPP
          ================================================= */}

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-4 rounded-2xl bg-yellow-500 p-5 text-black transition hover:scale-[1.02] hover:bg-yellow-400"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/10">

              <MessageCircle size={22} />

            </div>

            <div className="flex-1">

              <p className="font-bold">
                WhatsApp Sales
              </p>

              <p className="mt-1 text-xs font-medium text-black/60">
                Send your project requirements
              </p>

            </div>

            <ArrowRight size={20} />

          </a>

          {/* =================================================
              EMAIL
          ================================================= */}

          <a
            href={`mailto:info@nge-drillsol.com?subject=${encodeURIComponent(
              `${rig.model} Enquiry`
            )}&body=${encodeURIComponent(
              `Hello NGE DRILLSOL,

I am interested in the ${rig.model}.

Project requirements:

Required drilling depth:
Target bore diameter:
Formation:
Drilling method:
Project location:
Required quantity:

Please share technical details and quotation.

Regards`
            )}`}
            className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-yellow-500/30 hover:bg-white/[0.07]"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">

              <Mail
                size={21}
                className="text-yellow-400"
              />

            </div>

            <div className="flex-1">

              <p className="font-bold text-white">
                Email Enquiry
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Send detailed requirements
              </p>

            </div>

            <ArrowRight
              size={19}
              className="text-slate-500"
            />

          </a>

          {/* =================================================
              CONTACT PAGE
          ================================================= */}

          <Link
            href="/contact"
            className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-yellow-500/30 hover:bg-white/[0.07]"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">

              <Phone
                size={21}
                className="text-yellow-400"
              />

            </div>

            <div className="flex-1">

              <p className="font-bold text-white">
                Contact Our Team
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Open the contact page
              </p>

            </div>

            <ArrowRight
              size={19}
              className="text-slate-500"
            />

          </Link>

          {/* =================================================
              MODEL REFERENCE
          ================================================= */}

          <div className="mt-auto pt-8">

            <div className="border-t border-white/10 pt-6">

              <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Enquiry Reference
              </p>

              <p className="mt-2 font-bold text-slate-300">
                {rig.model}
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}