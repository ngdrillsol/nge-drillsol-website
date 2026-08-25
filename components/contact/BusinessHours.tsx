"use client";

import { motion } from "framer-motion";

import {

  Clock3,

  CalendarDays,

  PhoneCall,

} from "lucide-react";

import { businessHours } from "./contact.data";

export default function BusinessHours() {

  return (

    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

          Business Hours

        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">

          We're Ready

          <span className="block text-yellow-400">

            To Assist You

          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

          Our engineering and sales teams are available during the

          following business hours. International inquiries are always

          welcome, and we aim to respond as quickly as possible.

        </p>

      </div>

      {/* Content */}

      <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

        {/* Hours Table */}

        <motion.div

          initial={{ opacity: 0, x: -25 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          className="rounded-[36px] border border-white/10 bg-[#090909] p-10"

        >

          <div className="mb-8 flex items-center gap-4">

            <Clock3

              size={38}

              className="text-yellow-400"

            />

            <h3 className="text-3xl font-bold text-white">

              Office Schedule

            </h3>

          </div>

          <div className="space-y-4">

            {businessHours.map((item) => (

              <div

                key={item.day}

                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5"

              >

                <span className="font-medium text-white">

                  {item.day}

                </span>

                <span

                  className={`font-semibold ${

                    item.hours === "Closed"

                      ? "text-red-400"

                      : "text-yellow-400"

                  }`}

                >

                  {item.hours}

                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div

          initial={{ opacity: 0, x: 25 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          className="space-y-6"

        >

          <div className="rounded-[30px] border border-white/10 bg-[#090909] p-8">

            <CalendarDays

              size={34}

              className="text-yellow-400"

            />

            <h3 className="mt-6 text-2xl font-bold text-white">

              International Inquiries

            </h3>

            <p className="mt-4 leading-8 text-slate-400">

              We regularly communicate with customers across different

              time zones. If you contact us outside business hours,

              we'll respond as soon as our team is available.

            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#090909] p-8">

            <PhoneCall

              size={34}

              className="text-yellow-400"

            />

            <h3 className="mt-6 text-2xl font-bold text-white">

              Priority Support

            </h3>

            <p className="mt-4 leading-8 text-slate-400">

              For urgent project discussions, export inquiries or

              technical assistance, we recommend contacting us directly

              via WhatsApp or phone.

            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}