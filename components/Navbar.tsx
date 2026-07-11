'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Machines',
   href: '/machines',
    sub: [
  { label: 'Rotary Drilling Rigs', href: '/machines?category=rotary' },
  { label: 'DTH Drilling Rigs', href: '/machines?category=dth' },
  { label: 'Core Drilling Rigs', href: '/machines?category=core' },
  { label: 'Workover Rigs', href: '/machines?category=workover' },
  { label: 'Tractor Mounted Drilling Rigs', href: '/machines?category=tractor-mounted' },
],
  },
  { label: 'Projects', href: '/projects' },
{ label: 'Services', href: '/services' },
{ label: 'About Us', href: '/about' },
{ label: 'Blogs', href: '/blogs' },
{ label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex items-center justify-between bg-[#0D0D0D] border-b border-[#1E1E1E] px-8 py-2 text-xs font-body text-gray-450">
        <span className="section-label" style={{ fontSize: '0.65rem' }}>
          One Stop Drilling Solution
        </span>
        <div className="flex items-center gap-6">
          <a
            href="tel:+919106360907"
            className="flex items-center gap-1.5 text-yellow font-semibold hover:text-yellow-light transition-colors"
          >
            <Phone size={11} />
            +91 91063 60907
          </a>
          <div className="flex items-center gap-3">
  
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61578717216649"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#f5c518] transition duration-300"
  >
    <FaFacebookF size={16} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ngedrill1/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#f5c518] transition duration-300"
  >
    <FaInstagram size={16} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@NGEDRILLSOL"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#f5c518] transition duration-300"
  >
    <FaYoutube size={16} />
  </a>

</div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed top-0 lg:top-[33px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1E1E1E]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
  <Image
    src="/images/logo.png"
    alt="NGE Drillsol"
    width={45}
    height={45}
    className="object-contain"
  />
</div>
            <div className="hidden sm:block">
              <div
                className="font-heading font-700 text-white leading-tight"
                style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                NGE Drillsol
              </div>
              <div className="text-[0.6rem] text-gray-450 tracking-[0.15em] uppercase font-body">
                Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.sub ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenSub(link.label)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-heading font-500 text-gray-350 hover:text-white transition-colors tracking-wide">
                    {link.label}
                    <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <AnimatePresence>
                    {openSub === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-[#141414] border border-[#2A2A2A] py-2 shadow-card"
                      >
                        {link.sub.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            className="block px-4 py-2.5 text-xs text-gray-350 hover:text-white hover:bg-[#1E1E1E] transition-colors font-body tracking-wide"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-heading font-500 text-gray-350 hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-20 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="border-b border-[#1E1E1E]">

  <Link
  href={link.href || '#'}
  onClick={() => {
    setMobileOpen(false)
    setOpenSub(null)
  }}
  className="block py-3.5 text-lg font-heading font-600 text-white"
>
  {link.label}
</Link>

  {link.sub && (
    <div className="pl-4 pb-3 flex flex-col gap-1">
      {link.sub.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          onClick={() => setMobileOpen(false)}
          className="py-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors"
        >
          {s.label}
        </Link>
      ))}
    </div>
  )}

</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+919106360907" className="btn-primary text-center justify-center">
                <Phone size={14} /> Call Now
              </a>
              <a
                href="https://wa.me/919106360907"
                className="btn-outline text-center justify-center"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mt-8 text-xs text-gray-550 font-body">
              <p>info@ngedrill.com</p>
              <p className="mt-1">Mehsana, Gujarat, India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
