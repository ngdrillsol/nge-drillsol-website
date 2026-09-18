import Link from "next/link";

import {
  contactItems,
} from "./footer.data";

export default function FooterContact() {
  return (
    <div>

      <h3 className="mb-6 text-lg font-semibold text-white">
        Contact NGE Drillsol
      </h3>

      <div className="space-y-5">

        {contactItems.map(
          (item) => {

            const content = (
              <>
                <div
                  className="mt-1 text-xl"
                  aria-hidden="true"
                >
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
              </>
            );

            if (
              item.href.startsWith("tel:") ||
              item.href.startsWith("mailto:")
            ) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-4"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-4"
              >
                {content}
              </Link>
            );
          }
        )}

      </div>

    </div>
  );
}