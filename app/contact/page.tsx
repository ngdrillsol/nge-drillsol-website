'use client'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        <FadeIn className="mb-14">
          <div className="section-label mb-4">Get In Touch</div>
          <h1
            className="font-heading text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            Request a Quote or{' '}
            <span className="text-yellow">Technical Consultation</span>
          </h1>
          <p className="text-gray-450 font-body text-sm max-w-xl leading-relaxed">
            Our engineering team responds within 24 hours. For fastest response, use WhatsApp.
            Export documentation and CIF pricing available on request.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <div className="space-y-6">
            <FadeIn>
              <div className="bg-[#141414] border border-[#1E1E1E] p-6">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 bg-yellow/10 border border-yellow/25 flex items-center justify-center text-yellow flex-shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-white font-heading font-600 text-sm mb-1">Manufacturing Address</div>
                    <p className="text-gray-450 font-body text-xs leading-relaxed">
                      C/O NG Engineering, Sr. No. 553,<br />
                      Opp. Guru 308, Bypass Highway,<br />
                      Mehsana – 384002, Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 bg-yellow/10 border border-yellow/25 flex items-center justify-center text-yellow flex-shrink-0">
                    <Phone size={17} />
                  </div>
                  <div>
                    <div className="text-white font-heading font-600 text-sm mb-1">Phone / WhatsApp</div>
                    <a href="tel:+919106360907" className="text-yellow text-sm font-heading font-600 hover:text-yellow-light transition-colors">
                      +91 91063 60907
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 bg-yellow/10 border border-yellow/25 flex items-center justify-center text-yellow flex-shrink-0">
                    <Mail size={17} />
                  </div>
                  <div>
                    <div className="text-white font-heading font-600 text-sm mb-1">Email</div>
                    <a href="mailto:info@ngedrill.com" className="text-yellow text-sm font-heading font-600 hover:text-yellow-light transition-colors">
                      info@ngedrill.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 bg-yellow/10 border border-yellow/25 flex items-center justify-center text-yellow flex-shrink-0">
                    <Clock size={17} />
                  </div>
                  <div>
                    <div className="text-white font-heading font-600 text-sm mb-1">Working Hours</div>
                    <p className="text-gray-450 font-body text-xs">
                      Monday – Saturday: 9:00 AM – 6:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div >
                  </div>
                  <div className="flex items-center gap-3">

</div>
                  <div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-[#141414] border border-[#1E1E1E] p-6">
                <div className="text-[0.65rem] text-gray-550 uppercase tracking-wider font-body mb-4">Export Markets</div>
                <div className="flex flex-wrap gap-2">
                  {['Kenya','Sudan','Ethiopia','Mozambique','Senegal','Lebanon','Nepal','Bangladesh','Australia','India'].map((c) => (
                    <span key={c} className="text-xs font-body text-gray-350 border border-[#2A2A2A] px-2.5 py-1">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <a
                href="https://wa.me/919106360907?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20drilling%20rig%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white p-5 hover:bg-[#1DB954] transition-colors"
                style={{ boxShadow: '0 4px 30px rgba(37,211,102,0.2)' }}
              >
                <div className="font-heading font-700 text-base mb-1">WhatsApp — Fastest Response</div>
                <div className="text-white/70 text-xs font-body">
                  Click to open WhatsApp and start a conversation with our engineering team
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.1}>
            <InquiryForm />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
