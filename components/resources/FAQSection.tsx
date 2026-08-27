"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I choose the right drilling rig for my project?",
    answer:
      "The correct drilling rig depends on your geology, drilling depth, bore diameter, drilling method, application and mobility requirements. Our engineering team evaluates these factors before recommending the most suitable solution.",
  },
  {
    question: "Which drilling method is suitable for hard rock formations?",
    answer:
      "Hard rock formations commonly require DTH (Down-The-Hole) drilling or heavy-duty rotary drilling depending on formation characteristics, project objectives and borehole specifications.",
  },
  {
    question: "Can NGE DRILLSOL customize drilling rigs?",
    answer:
      "Yes. Our drilling rigs can be customized for drilling depth, rotary torque, pull-up capacity, mast design, hydraulic systems, truck chassis and customer-specific operational requirements.",
  },
  {
    question: "Do you provide installation and operator training?",
    answer:
      "Yes. We provide installation guidance, commissioning support, operator training and technical assistance to help customers begin operations efficiently.",
  },
  {
    question: "Do you export drilling rigs internationally?",
    answer:
      "Yes. NGE DRILLSOL exports drilling rigs and drilling equipment to customers across Africa, the Middle East and other international markets with complete export documentation and logistics support.",
  },
  {
    question: "Do you supply spare parts after delivery?",
    answer:
      "Yes. We supply genuine spare parts, drilling accessories and technical support throughout the service life of the equipment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Frequently Asked Questions
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Answers From Our
          <span className="block text-yellow-400">
            Engineering Team
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Find answers to common technical questions about drilling rigs,
          drilling methods, customization, engineering support and
          international projects.
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
              className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090909]"
            >

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >

                <span className="text-xl font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
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
