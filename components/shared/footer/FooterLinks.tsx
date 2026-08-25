"use client";

import Link from "next/link";

import { footerSections } from "./footer.data";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
      {footerSections.map((section) => (
        <div key={section.title}>
          {/* Section Title */}

          <h3 className="mb-6 text-lg font-semibold text-white">
            {section.title}
          </h3>

          {/* Links */}

          <ul className="space-y-4">
            {section.links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition-all duration-300 hover:text-yellow-400"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}