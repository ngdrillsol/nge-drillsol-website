import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Drilling Project Overview",
  "description": "Browse the NGE Drillsol project pages and contact the team to discuss the requirements of your own drilling project.",
  "alternates": {
    "canonical": "/projects"
  },
  "openGraph": {
    "title": "Drilling Project Overview | NGE Drillsol",
    "description": "Browse the NGE Drillsol project pages and contact the team to discuss the requirements of your own drilling project.",
    "url": "/projects",
    "type": "website",
    "siteName": "NGE Drillsol",
    "locale": "en_US"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Drilling Project Overview | NGE Drillsol",
    "description": "Browse the NGE Drillsol project pages and contact the team to discuss the requirements of your own drilling project."
  }
};

import ProjectsPage from "@/components/projects/ProjectsPage";

export default function Page() {
  return <ProjectsPage />;
}