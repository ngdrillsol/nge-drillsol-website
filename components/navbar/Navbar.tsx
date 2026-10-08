"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

const GST_NUMBER = "24AAGCN4440G1ZP";

const drillingRigCategories: DropdownItem[] = [
  {
    label: "Water Well Drilling Rigs",
    href: "/drilling-rigs/water-well-drilling-rigs",
    description: "Deep groundwater and borewell drilling",
  },
  {
    label: "DTH Drilling Rigs",
    href: "/drilling-rigs/dth-drilling-rigs",
    description: "Hard-rock and high-performance drilling",
  },
  {
    label: "Rotary Drilling Rigs",
    href: "/drilling-rigs/rotary-drilling-rigs",
    description: "Large-diameter rotary drilling",
  },
  {
    label: "Core Drilling Rigs",
    href: "/drilling-rigs/core-drilling-rigs",
    description: "Geological and mineral exploration",
  },
  {
    label: "Piling Rigs",
    href: "/drilling-rigs/piling-rigs",
    description: "Foundation and solar piling",
  },
  {
    label: "Tractor Mounted Rigs",
    href: "/drilling-rigs/tractor-mounted-drilling-rigs",
    description: "Compact mobile drilling solutions",
  },
  {
    label: "Workover Rigs",
    href: "/drilling-rigs/workover-rigs",
    description: "Oil & gas well servicing",
  },
];

const navigationLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Markets", href: "/markets" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

function GstBadge() {
  return (
    <div
      aria-label={`GSTIN: ${GST_NUMBER}`}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-yellow-400/40 bg-yellow-400/5 px-2 py-0.5 text-[10px] leading-4"
    >
      <span className="font-semibold text-yellow-400">
        GSTIN:
      </span>

      <span className="font-semibold text-yellow-100">
        {GST_NUMBER}
      </span>
    </div>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 h-0.5 w-6 bg-current transition-transform duration-150 ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />

      <span
        className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transition-opacity duration-100 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-150 ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </div>
  );
}

function DesktopDropdown({
  label,
  items,
  open,
  onToggle,
  allHref,
  onNavigate,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  allHref: string;
  onNavigate: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-200 transition-colors duration-100 hover:bg-white/5 hover:text-white"
        aria-expanded={open}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b0f16] p-2 shadow-xl transition-[opacity,transform,visibility] duration-150 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-100 hover:bg-white/[0.06]"
          >
            <div>
              <div className="text-sm font-semibold text-white">
                {item.label}
              </div>

              {item.description && (
                <div className="mt-1 text-xs text-slate-500 group-hover:text-slate-400">
                  {item.description}
                </div>
              )}
            </div>

            <ArrowUpRight />
          </Link>
        ))}

        <div className="mt-1 border-t border-white/10 pt-2">
          <Link
            href={allHref}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-yellow-400 hover:bg-yellow-400/10"
          >
            <span>Explore All {label}</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(
    null
  );
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileDialogRef = useRef<HTMLDialogElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const dialog = mobileDialogRef.current;
    const trigger = mobileTriggerRef.current;
    if (!dialog) return;

    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    const desktop = window.matchMedia("(min-width: 1440px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    desktop.addEventListener("change", closeOnDesktop);

    // Native modality keeps keyboard focus inside and the background inert.
    dialog.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    mobileCloseRef.current?.focus({ preventScroll: true });

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      if (!desktop.matches) trigger?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  useEffect(() => {
    let ticking = false;
    let frameId = 0;

    const handleScroll = () => {
      if (!ticking) {
        frameId = window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "border-white/10 bg-[#05070b]/95"
          : "border-transparent bg-black/20"
      }`}
    >
      <nav
        className="mx-auto flex h-[78px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10 xl:px-12"
        aria-label="Main navigation"
      >
        {/* LOGO, TAGLINE AND GST NUMBER */}

        <div className="shrink-0">
          <Link
            href="/"
            onClick={closeAll}
            className="block"
            aria-label="NGE DRILLSOL Home"
          >
            <div className="leading-none">
              <div className="flex items-baseline">
                <span className="text-[23px] font-black tracking-[-0.06em] text-white sm:text-[26px]">
                  NGE
                </span>

                <span className="ml-1 text-[16px] font-bold tracking-[0.06em] text-yellow-400 sm:ml-1.5 sm:text-[19px] sm:tracking-[0.08em]">
                  DRILLSOL
                </span>
              </div>

              <div className="mt-1 hidden text-[7px] font-medium uppercase tracking-[0.3em] text-slate-500 min-[360px]:block">
                Drilling • Engineering • Solutions
              </div>
            </div>
          </Link>

          <div className="mt-1">
            <GstBadge />
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center min-[1440px]:flex">
          <Link
            href="/"
            onClick={closeAll}
            className="rounded-full px-3 py-2 text-[13px] font-medium text-white hover:bg-white/5"
          >
            Home
          </Link>

          <DesktopDropdown
            label="Drilling Rigs"
            items={drillingRigCategories}
            open={activeDropdown === "drilling"}
            onToggle={() => toggleDropdown("drilling")}
            allHref="/drilling-rigs"
            onNavigate={closeAll}
          />

          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              className="rounded-full px-3 py-2 text-[13px] font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP QUOTE BUTTON */}

        <div className="hidden shrink-0 items-center min-[1440px]:flex">
          <Link
            href="/contact"
            onClick={closeAll}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-yellow-400 px-5 py-3 text-[13px] font-bold text-black transition-colors duration-100 hover:bg-yellow-300"
          >
            Get a Quote

            <span className="transition-transform duration-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight />
            </span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          ref={mobileTriggerRef}
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-12 min-w-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 min-[1440px]:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
        >
          <MenuIcon open={mobileOpen} />
          <span>Menu</span>
        </button>
      </nav>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <dialog
          ref={mobileDialogRef}
          id="mobile-navigation"
          aria-labelledby="mobile-navigation-title"
          aria-modal={true}
          onKeyDown={(event) => {
            if (event.key !== "Tab" || event.ctrlKey || event.altKey || event.metaKey) return;
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
            ).filter((control) => control.getClientRects().length > 0);
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first && last) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last && first) {
              event.preventDefault();
              first.focus();
            }
          }}
          onCancel={(event) => {
            event.preventDefault();
            closeAll();
          }}
          className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-hidden border-0 bg-[#05070b] p-0 text-white backdrop:bg-black/60 open:flex min-[1440px]:hidden"
        >
          <div className="mx-auto flex min-h-[78px] w-full max-w-2xl shrink-0 items-center justify-between gap-4 border-b border-white/10 px-5 pt-[env(safe-area-inset-top)] sm:px-8">
            <h2 id="mobile-navigation-title" className="text-lg font-bold">
              Menu
            </h2>
            <button
              ref={mobileCloseRef}
              type="button"
              onClick={closeAll}
              aria-label="Close menu"
              className="flex h-12 min-w-12 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              <MenuIcon open />
              <span>Close</span>
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
          >
            <div className="mx-auto max-w-2xl px-5 py-3 sm:px-8">
              <Link
                href="/"
                onClick={closeAll}
                className="block rounded-xl px-4 py-3.5 text-base font-semibold text-white hover:bg-white/5"
              >
                Home
              </Link>

              <MobileSection
                id="mobile-drilling-links"
                title="Drilling Rigs"
                items={drillingRigCategories}
                open={activeDropdown === "mobile-drilling"}
                onToggle={() => toggleDropdown("mobile-drilling")}
                allHref="/drilling-rigs"
                onNavigate={closeAll}
              />

              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="block rounded-xl px-4 py-3.5 text-base font-semibold text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="shrink-0 border-t border-white/10 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
            <Link
              href="/contact"
              onClick={closeAll}
              className="mx-auto flex min-h-12 w-full max-w-2xl items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 text-sm font-bold text-black hover:bg-yellow-300"
            >
              Get a Quote
              <ArrowUpRight />
            </Link>
          </div>
        </dialog>
      )}
    </header>
  );
}

function MobileSection({
  id,
  title,
  items,
  open,
  onToggle,
  allHref,
  onNavigate,
}: {
  id: string;
  title: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  allHref: string;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-semibold text-white hover:bg-white/5"
      >
        {title}
        <ChevronDown open={open} />
      </button>

      <div id={id} hidden={!open} className="mb-2 pl-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={allHref}
          onClick={onNavigate}
          className="block rounded-xl px-4 py-3 text-sm font-semibold text-yellow-400 hover:bg-yellow-400/10"
        >
          Explore All {title} →
        </Link>
      </div>
    </div>
  );
}