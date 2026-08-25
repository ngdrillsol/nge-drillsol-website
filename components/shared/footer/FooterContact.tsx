"use client";

import Link from "next/link";

import { contactItems } from "./footer.data";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Contact
      </h3>

      <div className="space-y-5">
        {contactItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-start gap-4"
          >
            <div className="mt-1 text-xl">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <p className="text-slate-300 transition-colors duration-300 group-hover:text-yellow-400">
                {item.value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}