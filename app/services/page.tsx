import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Drilling Services & Support",
  "description": "Explore NGE Drillsol service information and discuss your drilling project, equipment or support requirements with the team.",
  "alternates": {
    "canonical": "/services"
  },
  "openGraph": {
    "title": "Drilling Services & Support | NGE Drillsol",
    "description": "Explore NGE Drillsol service information and discuss your drilling project, equipment or support requirements with the team.",
    "url": "/services",
    "type": "website",
    "siteName": "NGE Drillsol",
    "locale": "en_US"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Drilling Services & Support | NGE Drillsol",
    "description": "Explore NGE Drillsol service information and discuss your drilling project, equipment or support requirements with the team."
  }
};

import ServicesPage from "@/components/services/ServicesPage";

export default function Page() {
  return <ServicesPage />;
}