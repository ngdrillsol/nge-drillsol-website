export interface ProjectStat {
  label: string;
  value: string;
}

export interface JourneyStep {
  title: string;
  description: string;
}

export interface Highlight {
  title: string;
  description: string;
  image: string;
}

export interface ProjectData {
  id: string;

  // Hero Content
  badge: string;
  headline: string;
  description: string;

  // Hero Image
  heroImage: string;

  // Project Information
  location: string;
  client: string;
  project: string;
  rig: string;
  method: string;
  depth: string;

  // Overview
  overview: string;

  // Stats
  stats: ProjectStat[];

  // Engineering Journey
  journey: JourneyStep[];

  // Engineering Highlights
  highlights: Highlight[];

  // CTA
  cta: string;
}