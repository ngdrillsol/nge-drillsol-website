"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Wrench,
  Headphones,
  Phone,
  Mail,
} from "lucide-react";

import { departments } from "./contact.data";

const icons = [
  Globe,
  Building2,
  Wrench,
  Headphones,
];

export default function DepartmentContacts() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Departments
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Connect With The
          <span className="block text-yellow-400">
            Right Team
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Whether you need export assistance, engineering guidance,
          quotations or after-sales support, our specialists are ready
          to help.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {departments.map((department, index) => {

          const Icon = icons[index] || Building2;

          return (

            <motion.div
              key={department.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-[#090909] p-8 transition hover:border-yellow-500/30"
            >

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-2xl font-bold text-white">
                    {department.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {department.description}
                  </p>

                </div>

              </div>

              {/* Contact Details */}

              <div className="mt-8 space-y-4">

                <Link
                  href={`tel:${department.contact.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-yellow-500/30"
                >

                  <Phone
                    size={20}
                    className="text-yellow-400"
                  />

                  <span className="text-white">
                    {department.contact}
                  </span>

                </Link>

                <Link
                  href={`mailto:${department.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-yellow-500/30"
                >

                  <Mail
                    size={20}
                    className="text-yellow-400"
                  />

                  <span className="text-white break-all">
                    {department.email}
                  </span>

                </Link>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}