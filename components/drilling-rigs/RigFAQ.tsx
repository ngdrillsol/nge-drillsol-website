"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageCircleQuestion,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigFAQProps {
  rig: RigData;
}

export default function RigFAQ({
  rig,
}: RigFAQProps) {
  const faqs = rig.faqs || [];

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  if (!faqs.length) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="space-y-12"
      aria-labelledby="rig-faq-heading"
    >
      {/* =====================================================
          FAQ STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

            <HelpCircle
              size={14}
              aria-hidden="true"
            />

            {rig.model} FAQ

          </span>

          <h2
            id="rig-faq-heading"
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Frequently Asked Questions About{" "}

            <span className="text-yellow-400">
              {rig.model}
            </span>

          </h2>

        </div>

        <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
          Answers to common questions about the {rig.model}
          drilling rig, including its drilling capacity,
          applications, configuration and project suitability.
        </p>

      </div>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <div className="mx-auto max-w-5xl space-y-4">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          const questionId =
            `faq-question-${rig.slug}-${index}`;

          const answerId =
            `faq-answer-${rig.slug}-${index}`;

          return (
            <motion.article
              key={`${faq.question}-${index}`}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className={`overflow-hidden rounded-[24px] border transition-colors duration-300 ${
                isOpen
                  ? "border-yellow-500/30 bg-yellow-500/[0.035]"
                  : "border-white/10 bg-[#090C11]"
              }`}
            >

              {/* QUESTION */}

              <h3>
                <button
                  id={questionId}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                >

                  <div className="flex items-start gap-4">

                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                        isOpen
                          ? "bg-yellow-500/15 text-yellow-400"
                          : "bg-white/5 text-slate-500"
                      }`}
                    >

                      <MessageCircleQuestion
                        size={18}
                        aria-hidden="true"
                      />

                    </div>

                    <span className="text-base font-semibold leading-7 text-white sm:text-lg">
                      {faq.question}
                    </span>

                  </div>

                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-yellow-400"
                        : ""
                    }`}
                  />

                </button>
              </h3>

              {/* =================================================
                  ANSWER

                  Important:
                  The answer always remains in the DOM.
              ================================================= */}

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-70"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-white/10 px-6 pb-7 pt-6 sm:px-8">

                    <p className="max-w-4xl text-base leading-8 text-slate-400">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          STILL HAVE QUESTIONS
      ===================================================== */}

      <div className="rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-xl font-bold text-white">
              Need technical guidance for the {rig.model}?
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Share your drilling depth, bore diameter,
              geological formation, drilling method and project
              location. NGE Drillsol can evaluate the appropriate
              machine configuration for your project.
            </p>

          </div>

          <a
            href="#inquiry"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-yellow-400"
          >
            Discuss {rig.model}
          </a>

        </div>

      </div>

    </section>
  );
}