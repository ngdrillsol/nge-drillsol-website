"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { contactCards } from "./contact.data";

const icons = [
  Phone,
  Mail,
  MessageCircle,
  MapPin,
];

export default function ContactCards() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Quick Contact
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Reach Our
          <span className="block text-yellow-400">
            Engineering Team
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Choose the most convenient way to connect with our engineering
          and sales team. We're here to help with technical guidance,
          quotations and project discussions.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {contactCards.map((card, index) => {

          const Icon = icons[index];

          return (

            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >

              <Link
                href={card.href}
                target={
                  card.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-lg font-semibold text-yellow-400 break-words">
                  {card.value}
                </p>

                <p className="mt-5 flex-1 leading-8 text-slate-400">
                  {card.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold text-yellow-400">
                    Contact Now
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowRight size={20} />

                  </div>

                </div>

              </Link>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}