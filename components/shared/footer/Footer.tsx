"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050608]">
      <div className="mx-auto max-w-7xl px-4 pb-36 pt-12 sm:px-6 sm:py-16 lg:py-20">

        {/* Top Section */}

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[1.1fr_2fr]">

          {/* Left */}

          <FooterBrand />

          {/* Right */}

          <div className="space-y-10 sm:space-y-14">

            <FooterLinks />

            <div className="border-t border-white/10 pt-10">
              <FooterContact />
            </div>

          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-20">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 NGE Drillsol Pvt. Ltd.
            </p>

            <p className="text-sm text-slate-500">
              Engineered for Performance. Built for Reliability.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
