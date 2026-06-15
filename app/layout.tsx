import type { Metadata } from 'next'
// ignore missing type declarations for CSS side-effect import
// @ts-ignore
import './globals.css'
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'NGE Drillsol Pvt. Ltd. | Heavy-Duty Drilling Rig Manufacturer & Exporter',
  description:
    'NGE Drillsol manufactures and exports premium rotary, DTH, core, piling and workover drilling rigs. 40+ years legacy. 1000+ units sold. 10+ countries. Mehsana, Gujarat, India.',
  keywords:
    'drilling rig manufacturer India, rotary drilling rig, DTH drilling rig, water well drilling, borewell rig, piling rig, core drilling, Africa drilling equipment, export drilling rig',
  openGraph: {
    title: 'NGE Drillsol Pvt. Ltd. | Premium Drilling Rig Manufacturer',
    description:
      "Engineering Heavy-Duty Drilling Solutions For The World's Toughest Conditions.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en" suppressHydrationWarning> className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}
      <body className="bg-white text-black dark:bg-[#0A0A0A] dark:text-white transition-colors duration-500">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
