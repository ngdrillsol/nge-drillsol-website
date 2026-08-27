"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[90] flex flex-col items-end gap-2 sm:bottom-6 sm:right-5 sm:gap-3">

      {/* WhatsApp */}

      <a
        href="https://wa.me/919106360907"
        target="_blank"
        rel="noopener noreferrer"
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
  );
}
