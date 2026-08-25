"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you export drilling rigs worldwide?",
    answer:
      "Yes. NGE DRILLSOL supplies drilling rigs and engineering solutions to customers across international markets. We also assist with export documentation and logistics.",
  },
  {
    question: "Can you recommend the right drilling rig for my project?",
    answer:
      "Absolutely. Our engineering team evaluates your drilling application, geology, drilling depth, bore diameter and project requirements before recommending the most suitable solution.",
  },
  {
    question: "Do you provide customized drilling rigs?",
    answer:
      "Yes. We can configure and customize drilling rigs based on your project requirements, operating conditions and customer specifications.",
  },
  {
    question: "Do you provide installation and operator training?",
    answer:
      "Yes. We provide technical guidance, commissioning assistance and operator training depending on the project scope and customer requirements.",
  },
  {
    question: "Can I visit your manufacturing facility?",
    answer:
      "Yes. Customers are welcome to schedule a visit to our engineering and manufacturing facility. Please contact our team in advance to arrange an appointment.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can submit the Engineering Inquiry Form on this page, contact us via email or WhatsApp, or call our sales team directly. The more project details you provide, the better we can recommend the right solution.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Frequently Asked Questions
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Have Questions?
          <span className="block text-yellow-400">
            We've Got Answers.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Here are answers to some of the most common questions we receive
          from customers around the world.
        </p>

      </div>

      {/* FAQ List */}

      <div className="mx-auto max-w-5xl space-y-5">

        {faqs.map((faq, index) => {

          const isOpen = openIndex === index;

          return (

            <motion.div
              key={faq.question}
              layout
              className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909]"
            >

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-yellow-400"
                      : "text-slate-400"
                  }`}
                />

              </button>

              <AnimatePresence>

                {isOpen && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="border-t border-white/10 px-8 py-6">

                      <p className="leading-8 text-slate-400">
                        {faq.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}