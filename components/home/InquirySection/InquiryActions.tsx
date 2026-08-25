"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  FileText,
} from "lucide-react";

import { inquiryActions } from "./inquiry.data";

const icons = {
  "📄": FileText,
  "💬": MessageCircle,
  "✉️": Mail,
  "📞": Phone,
};

export default function InquiryActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {inquiryActions.map((item, index) => {
        const Icon = icons[item.icon as keyof typeof icons];

        // CTA based on card
        let cta = "Contact Now";

        if (item.title === "WhatsApp") {
          cta = "Chat On WhatsApp";
        } else if (item.title === "Email Us") {
          cta = "Mail Now";
        } else if (item.title === "Call Our Team") {
          cta = "Call Now";
        }

        return (
          <motion.a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
              item.primary
                ? "border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5"
                : "border-white/10 bg-white/5 hover:border-yellow-500/20"
            }`}
          >
            <div className="p-8">
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                  item.primary
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10 text-yellow-400"
                }`}
              >
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.subtitle}
              </p>

              <div className="mt-10 flex items-center justify-between">
                <span
                  className={`font-semibold ${
                    item.primary
                      ? "text-yellow-300"
                      : "text-slate-300 group-hover:text-yellow-300"
                  }`}
                >
                  {cta}
                </span>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                    item.primary
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black"
                  }`}
                >
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}