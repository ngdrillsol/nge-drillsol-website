import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";

import Navbar from "@/components/navbar/Navbar";
import FloatingContact from "@/components/shared/FloatingContact";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ngedrill.com"),

  title: {
    default: "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
    template: "%s | NGE Drillsol",
  },

  description:
    "NGE Drillsol is an Indian manufacturer and exporter of water well drilling rigs, DTH drilling rigs, rotary drilling rigs, piling rigs, workover rigs, core drilling rigs and drilling equipment for global markets.",

  applicationName: "NGE Drillsol",

  authors: [
    {
      name: "NGE Drillsol Pvt. Ltd.",
      url: "https://www.ngedrill.com",
    },
  ],

  creator: "NGE Drillsol Pvt. Ltd.",
  publisher: "NGE Drillsol Pvt. Ltd.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ngedrill.com",
    siteName: "NGE Drillsol",
    title: "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
    description:
      "Manufacturer and exporter of water well, DTH, rotary, piling, workover and core drilling rigs for global drilling projects.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
    description:
      "Manufacturer and exporter of water well, DTH, rotary, piling, workover and core drilling rigs for global drilling projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {/* Global Navbar */}
        <Navbar />

        {/* Website Content */}
        {children}

        {/* Global WhatsApp and Call Buttons */}
        <FloatingContact />

        {/* Google Ads + Google Analytics queue */}
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-0R3VLNNSW6');
            gtag('config', 'AW-16962622922');
          `}
        </Script>

        {/* Load Google tracking library after main page load */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0R3VLNNSW6"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}