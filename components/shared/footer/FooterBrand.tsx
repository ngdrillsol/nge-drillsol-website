"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ngedrill1?igsh=MWtlcTFiOXZranRydQ%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/14mgUZFVVKx/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ngedrillsolpvtltd?si=58X3oUp2CIMEcY6g",
    icon: FaYoutube,
  },
];

export default function FooterBrand() {
  return (
    <div className="max-w-sm">

      {/* Company Name */}
      <Link
        href="/"
        className="text-3xl font-bold tracking-wide text-white"
      >
        NGE DRILLSOL
      </Link>

      {/* Tagline */}
      <p className="mt-6 text-lg leading-8 text-slate-400">
        Designed.
        <br />
        Engineered.
        <br />
        Delivered Worldwide.
      </p>

      {/* Social Media */}
      <div className="mt-10 flex items-center gap-4">

        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit NGE Drillsol on ${item.name}`}
              title={item.name}
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-slate-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-500
                hover:bg-yellow-500
                hover:text-black
                hover:shadow-[0_10px_30px_rgba(234,179,8,0.20)]
              "
            >
              <Icon
                size={20}
                className="
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>
          );
        })}

      </div>

    </div>
  );
}