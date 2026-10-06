import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Drilling Resources",
  "description": "Browse NGE Drillsol drilling resources and contact the team with questions about equipment and project requirements.",
  "alternates": {
    "canonical": "/resources"
  },
  "openGraph": {
    "title": "Drilling Resources | NGE Drillsol",
    "description": "Browse NGE Drillsol drilling resources and contact the team with questions about equipment and project requirements.",
    "url": "/resources",
    "type": "website",
    "siteName": "NGE Drillsol",
    "locale": "en_US"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Drilling Resources | NGE Drillsol",
    "description": "Browse NGE Drillsol drilling resources and contact the team with questions about equipment and project requirements."
  }
};

import ResourcesPage from "@/components/resources/ResourcesPage";

export default function Page() {
  return <ResourcesPage />;
}