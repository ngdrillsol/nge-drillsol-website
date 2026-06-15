'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Globe2, Wrench, Headphones, Package, Truck, Zap,
  Phone, MessageSquare
} from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'
import { blogs } from "@/data/blogs"

/* ─── Fade-in animation helper ─── */
function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Yellow glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #text-red-400 0%, transparent 70%)' }}
      />

      {/* Machine image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] opacity-30 lg:opacity-100">
        <div className="relative h-full">
          <Image
            src="/images/machine-ngdr3000-premium.png"
            alt="NGDR3000 Drilling Rig"
            fill
            className="object-contain object-center scale-90 lg:scale-95"
            priority
          />
          {/* Fade overlay on left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent lg:via-[#0A0A0A]/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6"
          >
            Est. 1985 · Mehsana, Gujarat, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-white leading-[1.04] mb-6"
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
            }}
          >
            Engineering Heavy-Duty{' '}
            <span className="text-yellow">Drilling Solutions</span>{' '}
            For The World's Toughest Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="text-gray-350 font-body text-base lg:text-lg leading-relaxed mb-3"
          >
            Rotary Drilling · DTH Drilling · Core Drilling · Piling Solutions · Drilling Accessories
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="text-gray-550 font-body text-sm leading-relaxed mb-10"
          >
            Export-ready. Field-proven. Built for Africa, Asia and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/machines" className="btn-primary gap-2">
              Explore Machines <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline gap-2">
              Get Quotation
            </Link>
            <a
              href="https://wa.me/919106360907?text=Hello%2C%20I%20need%20drilling%20rig%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost gap-2"
            >
              <MessageSquare size={14} /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Flagship badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-10 left-6 lg:left-8 hidden lg:flex items-center gap-3"
        >
          <div className="w-px h-10 bg-[#2A2A2A]" />
          <div>
            <div className="text-[0.65rem] text-gray-550 uppercase tracking-[0.15em] font-body mb-0.5">
              Flagship Model
            </div>
            <div className="font-heading font-600 text-white text-sm">NGDR3000</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1E1E1E] bg-[#0D0D0D]/80 backdrop-blur-sm overflow-hidden py-3">
        <div className="cert-track text-[0.65rem] font-body text-gray-550 tracking-[0.2em] uppercase">
          {Array(2).fill([
            'Rotary Drilling Rigs',
            'DTH Drilling Rigs',
            'Core Drilling',
            'Piling Rigs',
            'Workover Rigs',
            'Water Well Drilling',
            'Solar Piling',
            'EPC Ready',
            'Export Certified',
            'Tractor Mounted Rigs',
            'Spare Parts Available',
            '40+ Years Legacy',
          ]).flat().map((item, i) => (
            <span key={i} className="px-6 border-r border-[#1E1E1E]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 2: TRUST METRICS ─── */
function TrustMetrics() {
  const stats = [
    { num: '40+', label: 'Years of Legacy', sub: 'Founded 1985, Mehsana India' },
    { num: '1000+', label: 'Units Sold', sub: 'Across India & global markets' },
    { num: '10+', label: 'Countries', sub: 'Africa, Asia, Middle East, ANZ' },
    { num: '16+', label: 'Machine Models', sub: 'Rotary, DTH, Core, Piling & more' },
  ]

  return (
    <>
      <section className="bg-[#0D0D0D] border-y border-[#1E1E1E] py-8 lg:py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#1E1E1E]">
            {stats.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1} className="text-center lg:px-8">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-1">
                  {s.num}
                </div>
                <div className="font-heading text-white text-xs mb-1 tracking-tight">
                  {s.label}
                </div>
                <div className="text-gray-550 text-xs font-body">{s.sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES ROW */}
     <section className="certificates-section">
  <div>
    <div className="cert-track">
      <div className="cert-card">
  <img src="/images/certificates/iso.png" className="cert-logo" />
</div>

<div className="cert-card">
  <img src="/images/certificates/startup-india.png" className="cert-logo" />
</div>

<div className="cert-card">
  <img src="/images/certificates/make-in-india.png" className="cert-logo" />
</div>

<div className="cert-card">
  <img src="/images/certificates/msme.png" className="cert-logo" />
</div>

<div className="cert-card">
  <img src="/images/certificates/ce.png" className="cert-logo" />
</div>

<div className="cert-card">
  <img src="/images/certificates/export-quality.png" className="cert-logo" />
</div>
      
    </div>
  </div>
</section>
    </>
  )
}

// --- SECTION 3: MACHINE CATEGORIES ---

/* ─── SECTION 3: MACHINE CATEGORIES ─── */
const categories = [
  {
    id: 'rotary',
    title: 'Rotary Drilling Rigs',
    image: '/images/machine-ngdr3000-premium.png',
    models: ['NGDR3000', 'NGDR2000', 'NGDR1500', 'NGDR1000'],
    depth: 'Up to 1,500m',
    diameter: '150mm – 1,500mm',
    applications: 'Water well, EPC, Mining, Mineral exploration',
    tag: 'Flagship Category',
  },
  {
    id: 'dth',
    title: 'DTH Drilling Rigs',
    image: '/images/machine-ngdth600r-premium.png',
    models: ['NGDTH200', 'NGDTH300', 'NGDTH600'],
    depth: 'Up to 600m',
    diameter: '100mm – 600mm',
    applications: 'Hard rock, Borewell, Foundation drilling',
    tag: 'High Performance',
  },
  {
    id: 'core',
    title: 'Core Drilling Rigs',
    image: '/images/machine-ngcore100-premium.png',
    models: ['NGCORE50', 'NGCORE100', 'NGCORE100Trolley'],
    depth: 'Up to 200m',
    diameter: 'NQ / HQ / PQ',
    applications: 'Geo-technical, Exploration, Soil testing',
    tag: 'Trolley & Tractor Mounted',
  },
  {
    id: 'workover',
    title: 'Workover Rigs',
    image: '/images/machine-ngwr3100-premium.png',
    models: ['NGWR3100'],
    depth: '1500m - 2000m',
    diameter: 'N/A',
    applications: 'Oil, Natural gas, Well servicing',
    tag: 'Heavy Duty',
  },
  {
    id: 'tractor',
    title: 'Tractor Mounted Drilling Rigs',
    image: '/images/machine-ngdth50-premium.png',
    models: ['NGDTH30', 'NGDTH50', 'NGDP15', 'NGDP30', 'NGDP60',],
    depth: 'Up to 200m',
    diameter: '100mm – 700mm',
    applications: 'Multi-purpose, DTH, Rotary, Odex, Solar Piling, Foundation, Infrastructure',
    tag: 'Multi-Purpose',
  },
]

function MachineCategories() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">Product Range</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              className="font-heading text-white"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Complete Drilling Rig<br />
              <span className="text-yellow">Product Range</span>
            </h2>
            <Link href="/machines" className="btn-outline text-xs self-start lg:self-auto">
              View All Machines <ChevronRight size={13} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 0.08}>
              <Link href={`/machines?category=${cat.id}`} className="product-card block group h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-white">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 tag">{cat.tag}</div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-600 text-white text-base mb-1 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-gray-550 text-xs font-body mb-4 leading-relaxed">
                    {cat.applications}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-[#141414] px-3 py-2">
                      <div className="text-[0.6rem] text-gray-550 uppercase tracking-wider font-body mb-0.5">
                        Max Depth
                      </div>
                      <div className="text-white text-xs font-heading font-500">{cat.depth}</div>
                    </div>
                    <div className="bg-[#141414] px-3 py-2">
                      <div className="text-[0.6rem] text-gray-550 uppercase tracking-wider font-body mb-0.5">
                        Models
                      </div>
                      <div className="text-white text-xs font-heading font-500">
                        {cat.models.length} variants
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {cat.models.slice(0, 2).map((m) => (
                        <span key={m} className="tag text-[0.6rem]">{m}</span>
                      ))}
                      {cat.models.length > 2 && (
                        <span className="tag text-[0.6rem]">+{cat.models.length - 2} more</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-yellow text-xs font-heading font-500 group-hover:gap-2 transition-all">
                      View <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 4: WHY CHOOSE ─── */
function WhyChoose() {
  const features = [
    {
      icon: <Wrench size={22} />,
      title: 'Custom Rig Manufacturing',
      desc: 'Every rig engineered to your geology, depth requirement and mounting preference. Truck, trailer, tractor or trolley.',
    },
    {
      icon: <Globe2 size={22} />,
      title: 'Export Support',
      desc: 'Full export documentation, shipping coordination and customs support. Already active in 10+ countries.',
    },
    {
      icon: <Package size={22} />,
      title: 'Spare Parts Availability',
      desc: 'Complete spare parts inventory: API drill pipes, DTH hammers, bits, mud pumps, rotary heads and hydraulics.',
    },
    {
      icon: <Headphones size={22} />,
      title: 'After-Sales Support',
      desc: 'On-site training, remote diagnostics, field service teams and operator guidance included with every machine.',
    },
    {
      icon: <Truck size={22} />,
      title: 'Multiple Mounting Options',
      desc: 'Truck, trailer, skid, tractor and trolley mounting — configured to your terrain and logistics requirements.',
    },
    {
      icon: <Zap size={22} />,
      title: '40+ Years Engineering Legacy',
      desc: 'Founded 1985. Four decades of field-proven rig designs operating in deserts, mines, and coastal environments.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0D0D0D] diagonal-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn>
            <div className="section-label mb-5">Why NGE Drillsol</div>
            <h2
              className="font-heading text-white mb-6"
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Built Different.<br />
              <span className="text-yellow">Trusted Globally.</span>
            </h2>
            <p className="text-gray-450 font-body text-sm leading-relaxed mb-8 max-w-md">
              We don't just manufacture drilling rigs — we engineer drilling solutions. Every machine
              that leaves our Mehsana facility is built to perform in the field, not just on a spec sheet.
            </p>
            <div className="space-y-3 mb-10">
              {[
                'ISO-aligned manufacturing process',
                'Dual-engine configurations available',
                'Cummins, Tata & domestic engine options',
                'Adani Group project references',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-yellow flex-shrink-0" />
                  <span className="text-gray-350 text-sm font-body">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary gap-2">
              Our Story <ArrowRight size={14} />
            </Link>
          </FadeIn>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="bg-[#141414] border border-[#1E1E1E] p-5 hover:border-yellow/30 transition-colors group">
                  <div className="text-yellow mb-3 group-hover:scale-110 transition-transform inline-block">
                    {f.icon}
                  </div>
                  <h4 className="font-heading font-600 text-white text-sm mb-2">{f.title}</h4>
                  <p className="text-gray-550 text-xs font-body leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 5: SIGNATURE PRODUCTS ─── */
function SignatureProducts() {
  const products = [
    {
      id: 'ngdr3000',
      model: 'NGDR3000',
      badge: 'Primary Flagship',
      tagline: 'The Ultimate Deep Rotary Rig',
      image: '/images/machine-ngdr3000-premium.png',
      specs: [
        { k: 'Operation', v: 'Rotary, DTH, Foam Drilling' },
        { k: 'Drilling Capacity', v: '1,000m – 1,500m' },
        { k: 'Hole Diameter', v: '300mm – 1,500mm' },
        { k: 'Pullback Force', v: '120,000 kg' },
        { k: 'Mud Pump', v: '2,500 – 5,000 PSI' },
        { k: 'Prime Mover', v: '300 – 400 HP Dual Engine' },
        { k: 'Mounting', v: 'Trailer' },
      ],
      applications: ['Deep water wells', 'EPC projects', 'Large diameter drilling', 'Export projects'],
    },
    {
      id: 'ngdr2000',
      model: 'NGDR2000',
      badge: 'Secondary Flagship',
      tagline: 'Versatile High-Capacity Rotary Rig',
      image: '/images/machine-ngdr2000-premium.png',
      specs: [
        { k: 'Operation', v: 'Direct Rotary / DTH' },
        { k: 'Drilling Capacity', v: '850m' },
        { k: 'Hole Diameter', v: '300mm – 1,200mm' },
        { k: 'Pullback Force', v: '80,000 kg' },
        { k: 'Draw Works', v: 'Pneumatic Clutch' },
        { k: 'Prime Mover', v: '235 – 300 HP' },
        { k: 'Mounting', v: 'Truck, Trailer, Skid' },
      ],
      applications: ['Irrigation borewells', 'Mining exploration', 'Solar water supply', 'Government projects'],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">Signature Models</div>
          <h2
            className="font-heading text-white"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Our Most Trusted{' '}
            <span className="text-yellow">Flagship Rigs</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
<div className="bg-[#141414] border border-[#2A2A2A] hover:border-yellow/30 transition-all duration-300 group overflow-hidden min-h-[760px]">                {/* Header */}
                <div className="relative h-64 bg-white overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.model}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="tag">{p.badge}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="font-heading font-700 text-white text-2xl tracking-tight">
                      {p.model}
                    </div>
                    <div className="text-gray-450 text-xs font-body">{p.tagline}</div>
                  </div>
                </div>
                {/* Specs */}
                <div className="p-5">
                  <div className="mb-4">
                    {p.specs.map((s) => (
                      <div key={s.k} className="spec-row">
                        <span className="spec-key">{s.k}</span>
                        <span className="spec-value">{s.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-5">
                    <div className="text-[0.65rem] text-gray-550 uppercase tracking-wider font-body mb-2">
                      Key Applications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.applications.map((a) => (
                        <span key={a} className="tag text-[0.6rem]">{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href={`/machines#${p.id}`} className="btn-primary text-xs py-2.5 flex-1 justify-center">
                      View Details
                    </Link>
                      <Link
  href={`/machines/${p.id}`}
  className="btn-outline text-xs py-2.5 px-4 text-center"
>
  Technical Specs
</Link>
                    <a
                      href={`https://wa.me/919106360907?text=I%20am%20interested%20in%20${p.model}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2.5 px-4"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 6: PROJECTS ─── */
function Projects() {
  const projects = [
    {
      title: 'Adani Green Hydrogen Project',
      machine: 'NGDR3000',
      depth: '850m',
      formation: 'Hard rock / basalt',
      sector: 'Renewable Energy',
      image: '/images/adani/adani-card.png',
    },
    {
      title: 'Deep Borewell Infrastructure',
      machine: 'NGDR2000',
      depth: '600m',
      formation: 'Alluvial / granite',
      sector: 'Water Security',
      image: '/images/machine-ngdr2000-premium.png',
    },
    {
      title: 'Solar Piling – Large Scale',
      machine: 'NGDP60',
      depth: '18m piles',
      formation: 'Sandy / laterite',
      sector: 'Solar Energy',
      image: '/images/machine-ngdp60-premium.png',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">Track Record</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              className="font-heading text-white"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Proven In The Field.<br />
              <span className="text-yellow">Trusted By Industry.</span>
            </h2>
            <Link href="/projects" className="btn-outline text-xs self-start lg:self-auto">
              All Projects <ChevronRight size={13} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="product-card overflow-hidden group">
                <div className="relative h-44 bg-white overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 tag">{p.sector}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-heading font-600 text-white text-sm mb-3 leading-tight">
                    {p.title}
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-550 font-body">Machine</span>
                      <span className="text-white font-heading font-500">{p.machine}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-550 font-body">Depth</span>
                      <span className="text-white font-heading font-500">{p.depth}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-550 font-body">Formation</span>
                      <span className="text-white font-heading font-500">{p.formation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 7: GLOBAL PRESENCE ─── */
function GlobalPresence() {
  const countries = [
    { name: 'India', desc: 'HQ & Manufacturing', highlight: true },
    { name: 'Kenya', desc: 'Water well projects' },
    { name: 'Sudan', desc: 'Deep borewell' },
    { name: 'Ethiopia', desc: 'Infrastructure' },
    { name: 'Mozambique', desc: 'Mining sector' },
    { name: 'Senegal', desc: 'Export supply' },
    { name: 'Lebanon', desc: 'Drilling projects' },
    { name: 'Nepal', desc: 'Waterwell' },
    { name: 'Bangladesh', desc: 'Groundwater' },
    { name: 'Australia', desc: 'Export Sales' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="section-label mb-4">Global Presence</div>
          <h2
            className="font-heading text-white"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Delivered Across<br />
            <span className="text-yellow">10+ Countries</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map visual */}
          <FadeIn>
  <div className="relative bg-[#0D0D0D] border border-[#1E1E1E] overflow-hidden aspect-[4/3] rounded-xl">

    {/* World Map */}
    <div
      className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-90"
      style={{
        backgroundImage: "url('/images/world-map-dark.png')"
      }}
    />

    {/* INDIA HQ */}
    <div className="absolute top-[49%] left-[64%] group">
      <div className="w-2.5 h-2.5 rounded-full bg-yellow shadow-[0_0_10px_rgba(245,197,24,0.6)]"></div>
      <div className="
absolute top-[-5px] left-[18px]
bg-black/90 backdrop-blur-md
px-3 py-2 rounded-lg
border border-red-500/40
text-red-400 text-[8px]
font-medium
leading-tight
shadow-[0_0_12px_rgba(239,68,68,0.25)]
z-50
min-w-[180px]
">
        <div>
  🇮🇳 India (HQ)
</div>
<div>
  Mr. Kuldeep Suthar
</div>
<div>
  📞 +91 91063 60907
</div>
      </div>
    </div>

    {/* AUSTRALIA */}
    <div className="absolute top-[70%] left-[80%] group">
      <div className="w-2.5 h-2.5 rounded-full bg-yellow shadow-[0_0_10px_rgba(245,197,24,0.6)]"></div>
      <div className="
absolute top-[20px] right-[-72px]
bg-black/90 backdrop-blur-md
px-3 py-2 rounded-lg
border border-red-500/40
text-red-400 text-[8px]
font-medium
leading-tight
shadow-[0_0_12px_rgba(239,68,68,0.25)]
z-50
min-w-[180px]
">
       <div>
  🇦🇺 Australia
</div>
<div>
  Mr. Vijay Gadhavi
</div>
<div>
  📞 +61 431 854 400
</div>
      </div>
    </div>

    {/* SENEGAL */}
    <div className="absolute top-[51%] left-[41%] group">
      <div className="w-2.5 h-2.5 rounded-full bg-yellow shadow-[0_0_10px_rgba(245,197,24,0.6)]"></div>
      <div className="
absolute top-[15px] right-[-70px]
bg-black/90 backdrop-blur-md
px-3 py-2 rounded-lg
border border-red-500/40
text-red-400 text-[8px]
font-medium
leading-tight
shadow-[0_0_12px_rgba(239,68,68,0.25)]
z-50
min-w-[180px]
">
        🇸🇳 Senegal – Mr.Sagar Sote 
      </div>
    </div>

    {/* Bottom label */}
    <div className="absolute bottom-4 left-4 right-4">
      <div className="text-[0.65rem] text-gray-500 uppercase tracking-wider font-body">
        Manufacturing • Export Presence • Physical Operations
      </div>
    </div>

  </div>
</FadeIn>

          {/* Country grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {countries.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.06}>
                  <div
                    className={`p-4 border transition-all ${
                      c.highlight
                        ? 'bg-yellow/10 border-yellow/40 text-yellow'
                        : 'bg-[#141414] border-[#1E1E1E] text-white hover:border-yellow/25'
                    }`}
                  >
                    <div className="font-heading font-600 text-sm mb-0.5">{c.name}</div>
                    <div className="text-[0.65rem] text-gray-550 font-body">{c.desc}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4} className="mt-8">
              <p className="text-gray-450 text-sm font-body leading-relaxed">
                NGE Drillsol actively exports to Africa, Asia, the Middle East and ANZ.
                Full export documentation, customs support and after-sales service available
                in all active markets.
              </p>
              <Link href="/contact" className="btn-primary mt-5 gap-2 inline-flex">
                Export Inquiry <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 8: INQUIRY FORM ─── */
function InquirySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D0D0D] grid-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn>
            <div className="section-label mb-5">Get A Quote</div>
            <h2
              className="font-heading text-white mb-5"
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Tell Us Your<br />
              <span className="text-yellow">Drilling Requirement</span>
            </h2>
            <p className="text-gray-450 font-body text-sm leading-relaxed mb-8 max-w-md">
              Fill in your project details and our engineering team will recommend
              the right machine, provide a competitive quotation and arrange export logistics.
            </p>

            {/* Contact options */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="https://wa.me/919106360907?text=I%20need%20a%20drilling%20rig%20quotation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#141414] border border-[#2A2A2A] hover:border-yellow/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageSquare size={17} />
                </div>
                <div>
                  <div className="text-white text-sm font-heading font-600 group-hover:text-yellow transition-colors">
                    WhatsApp for Fastest Response
                  </div>
                  <div className="text-gray-550 text-xs font-body">+91 91063 60907</div>
                </div>
              </a>
              <a
                href="tel:+919106360907"
                className="flex items-center gap-4 p-4 bg-[#141414] border border-[#2A2A2A] hover:border-yellow/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-yellow/10 border border-yellow/30 flex items-center justify-center text-yellow flex-shrink-0">
                  <Phone size={17} />
                </div>
                <div>
                  <div className="text-white text-sm font-heading font-600 group-hover:text-yellow transition-colors">
                    Call Our Engineering Team
                  </div>
                  <div className="text-gray-550 text-xs font-body">Mon–Sat, 9 AM – 6 PM IST</div>
                </div>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '24h', label: 'Response Time' },
                { num: '100%', label: 'Export Ready' },
                { num: 'Free', label: 'Consultation' },
              ].map((s) => (
                <div key={s.label} className="text-center py-4 bg-[#141414] border border-[#1E1E1E]">
                  <div className="font-heading font-700 text-yellow text-xl mb-0.5">{s.num}</div>
                  <div className="text-gray-550 text-xs font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <InquiryForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE EXPORT ─── */
export default function HomePage() {
  const latestBlog = blogs[0]
  return (
    <>
      <HeroSection />
      {/* Latest Blog Section */}

  <section className="px-8 py-20 bg-[#0A0A0A]">
    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-yellow-500 uppercase tracking-[0.2em] text-sm mb-2">
            Latest Blog
          </p>

          <h2 className="text-4xl font-bold text-white">
            Industry Insights
          </h2>
        </div>

        <a
          href="/blogs"
          className="text-yellow-500 border border-yellow-500 px-5 py-2 hover:bg-yellow-500 hover:text-black transition"
        >
          View All Blogs
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#141414] border border-[#1E1E1E] rounded-2xl overflow-hidden">

        <div className="relative bg-[#111111] overflow-hidden rounded-l-2xl aspect-video flex items-center justify-center">
          <img
            src={latestBlog.image}
            alt={latestBlog.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">
          <p className="text-yellow-500 mb-3">
            {latestBlog.date}
          </p>

          <h3 className="text-3xl font-bold text-white mb-5">
            {latestBlog.title}
          </h3>

          <p className="text-gray-400 mb-8 text-base">
            {latestBlog.excerpt}
          </p>

          <div className="flex gap-4 flex-wrap">

  <a
    href="/blogs"
    className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
  >
    Read More Blogs →
  </a>

  <a
    href={`/blogs/${latestBlog.slug}`}
    className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
  >
    Know More →
  </a>

</div>
        </div>

      </div>
    </div>
  </section>
     
      <MachineCategories />
      <WhyChoose />
      <SignatureProducts />
      <Projects />
      <GlobalPresence />

  
      <InquirySection />
       <TrustMetrics />
    </>
  )
}
