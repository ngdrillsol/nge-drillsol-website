"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-[90] flex flex-col items-end gap-3">

      {/* WhatsApp */}

      <a
        href="https://wa.me/919106360907"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NGE Drillsol on WhatsApp"
        className="
          group
          flex
          h-14
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
          hover:border-green-400/60
          hover:bg-[#162219]
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
            group-hover:max-w-[140px]
            group-hover:pl-5
            group-hover:opacity-100
          "
        >
          WhatsApp
        </span>

        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
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
          h-14
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
          hover:border-yellow-400/60
          hover:bg-[#211d10]
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
            group-hover:max-w-[120px]
            group-hover:pl-5
            group-hover:opacity-100
          "
        >
          Call Us
        </span>

        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <Phone
            size={22}
            className="text-yellow-400"
          />
        </span>
      </a>

    </div>
  );
}