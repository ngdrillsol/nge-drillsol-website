"use client";

import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export default function FloatingContact() {
  const pathname = usePathname();
  const trackWhatsAppConversion = () => {
    if (typeof window !== "undefined") {
      (window as Window & {
        gtag?: (command: "event", eventName: "conversion", parameters: { send_to: string }) => void;
      }).gtag?.("event", "conversion", {
        send_to: "AW-16962622922/f5vZCK-o8-4cEMqrtJg_",
      });
    }
  };
  return (
    <>
      <nav
        aria-label="Quick contact"
        className="mobile-contact-bar fixed inset-x-0 bottom-0 z-[90] grid grid-cols-2 gap-2 border-t border-white/15 bg-[#05070b]/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md sm:hidden"
      >
        <Link
          href="/contact#inquiry-form"
          className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 text-sm font-bold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Enquire
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <a
          href={getPageWhatsAppEnquiryUrl(pathname)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppConversion}
          aria-label="Chat with NGE Drillsol on WhatsApp"
          className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-green-400/40 bg-green-400/10 px-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <MessageCircle size={20} className="text-green-400" aria-hidden="true" />
          WhatsApp
        </a>
      </nav>

    <div className="fixed bottom-6 right-5 z-[90] hidden flex-col items-end gap-3 sm:flex">

      {/* WhatsApp */}

     <a
  href={getPageWhatsAppEnquiryUrl(pathname)}
  target="_blank"
  rel="noopener noreferrer"
  onClick={trackWhatsAppConversion}
        aria-label="Chat with NGE Drillsol on WhatsApp"
        className="
          group
          flex
          h-12
          items-center
          overflow-hidden
          rounded-full
          border
          border-green-400/30
          bg-[#111713]/95
          text-white
          shadow-2xl
          backdrop-blur-md
          transition-all
          duration-300
          sm:h-14
          sm:hover:border-green-400/60
          sm:hover:bg-[#162219]
        "
      >
        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap
            pl-0
            text-sm
            font-semibold
            opacity-0
            transition-all
            duration-300
            sm:group-hover:max-w-[140px]
            sm:group-hover:pl-5
            sm:group-hover:opacity-100
          "
        >
          WhatsApp
        </span>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
          <MessageCircle
            size={23}
            className="text-green-400"
          />
        </span>
      </a>

      {/* Call */}

      <a
        href="tel:+919106360907"
        aria-label="Call NGE Drillsol"
        className="
          group
          flex
          h-12
          items-center
          overflow-hidden
          rounded-full
          border
          border-yellow-400/30
          bg-[#15140f]/95
          text-white
          shadow-2xl
          backdrop-blur-md
          transition-all
          duration-300
          sm:h-14
          sm:hover:border-yellow-400/60
          sm:hover:bg-[#211d10]
        "
      >
        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap
            pl-0
            text-sm
            font-semibold
            opacity-0
            transition-all
            duration-300
            sm:group-hover:max-w-[120px]
            sm:group-hover:pl-5
            sm:group-hover:opacity-100
          "
        >
          Call Us
        </span>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
          <Phone
            size={22}
            className="text-yellow-400"
          />
        </span>
      </a>

    </div>
    </>
  );
}
