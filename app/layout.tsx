import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

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
  title: {
    default: "NGE DRILLSOL | Premium Drilling Rigs",
    template: "%s | NGE DRILLSOL",
  },

  description:
    "Manufacturer and exporter of premium water well drilling rigs, DTH drilling rigs, piling rigs, and drilling accessories for global markets.",
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

        {/* Global WhatsApp + Call */}
        <FloatingContact />
      </body>
    </html>
  );
}