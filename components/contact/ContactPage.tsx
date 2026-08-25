"use client";

import ContactHero from "./ContactHero";
import ContactCards from "./ContactCards";
import InquiryForm from "./InquiryForm";
import DepartmentContacts from "./DepartmentContacts";
import GlobalOffice from "./GlobalOffice";
import BusinessHours from "./BusinessHours";
import FAQSection from "./FAQSection";
import MapSection from "./MapSection";
import CTASection from "./CTASection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#05070B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-6 py-10 lg:px-8">

        {/* Hero */}
        <ContactHero />

        {/* Quick Contact */}
        <ContactCards />

        {/* Inquiry Form */}
        <InquiryForm />

        {/* Departments */}
        <DepartmentContacts />

        {/* Office */}
        <GlobalOffice />

        {/* Business Hours */}
        <BusinessHours />

        {/* Map */}
        <MapSection />

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <CTASection />

      </div>
    </main>
  );
}