import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

const title = "Contact NGE Drillsol";
const description =
  "Contact NGE Drillsol to discuss your drilling equipment enquiry and share your project requirements.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
    siteName: "NGE Drillsol",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <ContactPage />;
}