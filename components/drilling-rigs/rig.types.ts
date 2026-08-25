export interface RigImage {
  src: string;
  alt: string;
}

export interface RigVideo {
  title: string;
  url: string;
  thumbnail?: string;
}

export interface RigDownload {
  title: string;
  description?: string;
  file: string;
}

export interface RigFAQ {
  question: string;
  answer: string;
}

export interface RigSpecification {
  label: string;
  value: string;
}

export interface RigFeature {
  title: string;
  description: string;
}

export interface RigApplication {
  title: string;
  description: string;
}

export interface RigEquipment {
  title: string;
  items: string[];
}

export interface RigPerformance {
  label: string;
  value: string;
}

export interface RigData {
  slug: string;

  model: string;

  name: string;

  shortName?: string;

  category: string[];

  tagline: string;

  description: string;

  heroImage: string;

  gallery: RigImage[];

  quickSpecs: RigSpecification[];

  specifications: RigSpecification[];

  features: RigFeature[];

  applications: RigApplication[];

  equipment: RigEquipment[];

  performance?: RigPerformance[];

  projects?: string[];

  videos?: RigVideo[];

  downloads?: RigDownload[];

  faqs?: RigFAQ[];

  relatedRigs?: string[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}