"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Drilling Rigs", href: "/drilling-rigs" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10"
  aria-label="Open navigation menu"
>
  <Menu className="h-6 w-6" />
</SheetTrigger>

      <SheetContent
        side="right"
        className="border-white/10 bg-[#0B1120] text-white"
      >
        <div className="mt-12 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Button className="mt-8 rounded-xl bg-blue-600 hover:bg-blue-700">
            Get Quote
          </Button>
        </div>
      </SheetContent>
    </Sheet>

)}