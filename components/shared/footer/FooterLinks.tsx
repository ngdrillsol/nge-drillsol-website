import Link from "next/link";

import {
  footerSections,
} from "./footer.data";

export default function FooterLinks() {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid grid-cols-1 gap-8 min-[360px]:grid-cols-2 sm:gap-10 lg:grid-cols-4"
    >

      {footerSections.map(
        (section) => (
          <div key={section.title}>

            <h3 className="mb-6 text-lg font-semibold text-white">
              {section.title}
            </h3>

            <ul className="space-y-4">

              {section.links.map(
                (link) => (
                  <li
                    key={`${section.title}-${link.href}`}
                  >

                    <Link
                      href={link.href}
                      className="text-slate-400 transition-colors duration-200 hover:text-yellow-400"
                    >
                      {link.title}
                    </Link>

                  </li>
                )
              )}

            </ul>

          </div>
        )
      )}

    </nav>
  );
}