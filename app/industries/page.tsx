import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Industries & Drilling Applications",
  "description": "Explore NGE Drillsol industry pages and share your drilling application, ground conditions and project requirements for review.",
  "alternates": {
    "canonical": "/industries"
  },
  "openGraph": {
    "title": "Industries & Drilling Applications | NGE Drillsol",
    "description": "Explore NGE Drillsol industry pages and share your drilling application, ground conditions and project requirements for review.",
    "url": "/industries",
    "type": "website",
    "siteName": "NGE Drillsol",
    "locale": "en_US"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Industries & Drilling Applications | NGE Drillsol",
    "description": "Explore NGE Drillsol industry pages and share your drilling application, ground conditions and project requirements for review."
  }
};

import IndustriesPage from "@/components/industries/IndustriesPage";

export default function Page() {
  return <IndustriesPage />;
}