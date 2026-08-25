export interface Project {
  id: string;

  title: string;

  client: string;

  location: string;

  duration: string;

  image: string;

  description: string;

  drillingMethod: string;

  application: string;

  rigs: string[];

  achievements: string[];

  gallery: string[];

  href: string;

  // Detailed project case study information
  overview?: string;

  work?: string[];

  challenges?: string[];

  results?: string[];
}

export interface ProjectMilestone {
  title: string;

  description: string;

  date: string;
}