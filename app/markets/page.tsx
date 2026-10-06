import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "India & Export Markets",
  "description": "Explore NGE Drillsol market information and contact the team with your country, project location and drilling equipment requirements.",
  "alternates": {
    "canonical": "/markets"
  },
  "openGraph": {
    "title": "India & Export Markets | NGE Drillsol",
    "description": "Explore NGE Drillsol market information and contact the team with your country, project location and drilling equipment requirements.",
    "url": "/markets",
    "type": "website",
    "siteName": "NGE Drillsol",
    "locale": "en_US"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "India & Export Markets | NGE Drillsol",
    "description": "Explore NGE Drillsol market information and contact the team with your country, project location and drilling equipment requirements."
  }
};

import MarketsPage from "@/components/markets/MarketsPage";

export default function Page() {
  return <MarketsPage />;
}