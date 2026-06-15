import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const machines = [
  {
    label: 'Rotary Drilling Rigs',
    href: '/machines?category=rotary',
  },
  {
    label: 'DTH Drilling Rigs',
    href: '/machines?category=dth',
  },
  {
    label: 'Core Drilling Rigs',
    href: '/machines?category=core',
  },
  {
    label: 'Workover Rigs',
    href: '/machines?category=workover',
  },
  {
    label: 'Piling Rigs',
    href: '/machines?category=piling',
  },
]


const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Machines', href: '/machines' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blogs', href: '/blogs' },
]

const countries = [
  'Kenya', 'Sudan', 'Ethiopia', 'Mozambique',
  'Senegal', 'Lebanon', 'Nepal', 'Bangladesh', 'Australia',
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1E1E1E]">
      {/* CTA strip */}
      <div className="bg-[#F5C518] py-5 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-700 text-[#0A0A0A] text-lg tracking-tight">
              Ready to drill deeper? Get a custom quote today.
            </p>
            <p className="text-[#0A0A0A]/70 text-sm font-body mt-0.5">
              Response within 24 hours — export-ready documentation available.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919106360907?text=Hello%2C%20I%20need%20a%20quotation%20for%20a%20drilling%20rig."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-heading font-600 text-sm px-5 py-2.5 hover:bg-[#1A1A1A] transition-colors"
            >
              WhatsApp Inquiry
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#0A0A0A]/30 text-[#0A0A0A] font-heading font-600 text-sm px-5 py-2.5 hover:bg-[#0A0A0A]/10 transition-colors"
            >
              Request Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="NGE Drillsol" fill className="object-contain" />
            </div>
            <div>
              <div className="font-heading font-700 text-white text-base">NGE Drillsol</div>
              <div className="text-[0.6rem] text-gray-550 tracking-[0.15em] uppercase font-body">
                Pvt. Ltd.
              </div>
            </div>
          </div>
          <p className="text-gray-450 text-sm font-body leading-relaxed mb-5">
            Precision-engineered drilling rigs built for extreme geological and climatic conditions.
            Trusted by contractors across 10+ countries since 1985.
          </p>
        </div>

        {/* Machines */}
        <div>
          <h4 className="font-heading font-600 text-white text-sm tracking-wider uppercase mb-5">
            Our Drilling Rigs
          </h4>
          <ul className="flex flex-col gap-2.5">
            {machines.map((m) => (
              <li key={m.label}>
                <Link
                  href={m.href}
                  className="text-gray-450 text-sm font-body hover:text-yellow transition-colors flex items-center gap-1.5"
                >
                  <span className="text-yellow text-xs">›</span>
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-600 text-white text-sm tracking-wider uppercase mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 mb-7">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-gray-450 text-sm font-body hover:text-yellow transition-colors flex items-center gap-1.5"
                >
                  <span className="text-yellow text-xs">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-heading font-600 text-white text-sm tracking-wider uppercase mb-3">
            Export Markets
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {countries.map((c) => (
              <span
                key={c}
                className="text-[0.65rem] font-body text-gray-550 border border-[#2A2A2A] px-2 py-0.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-600 text-white text-sm tracking-wider uppercase mb-5">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <MapPin size={15} className="text-yellow flex-shrink-0 mt-0.5" />
              <p className="text-gray-450 text-sm font-body leading-relaxed">
                C/O NG Engineering, Sr. No. 553,<br />
                Opp. Guru 308, Bypass Highway,<br />
                Mehsana – 384002, Gujarat, India
              </p>
            </div>
            <a
              href="tel:+919106360907"
              className="flex gap-3 items-center text-gray-450 hover:text-yellow transition-colors"
            >
              <Phone size={14} className="text-yellow flex-shrink-0" />
              <span className="text-sm font-body">+91 91063 60907</span>
            </a>
            <a
              href="mailto:info@ngedrill.com"
              className="flex gap-3 items-center text-gray-450 hover:text-yellow transition-colors"
            >
              <Mail size={14} className="text-yellow flex-shrink-0" />
              <span className="text-sm font-body">info@ngedrill.com</span>
            </a>
            <a
              href="https://www.ngedrill.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center text-gray-450 hover:text-yellow transition-colors"
            >
              <ExternalLink size={14} className="text-yellow flex-shrink-0" />
              <span className="text-sm font-body">www.ngedrill.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E1E1E] px-6 lg:px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-550 font-body">
          <span>© {new Date().getFullYear()} NGE Drillsol Pvt. Ltd. All rights reserved.</span>
          <span className="section-label" style={{ fontSize: '0.6rem' }}>
            Founded 1985 · Mehsana, Gujarat, India
          </span>
        </div>
      </div>
    </footer>
  )
}
