export interface KnowledgeCategory {
  id: string;

  title: string;

  description: string;

  icon: string;

  articles: number;

  href: string;
}

export interface FeaturedArticle {
  id: string;

  title: string;

  description: string;

  category: string;

  readTime: string;

  image: string;

  href: string;
}

export interface DownloadResource {
  title: string;

  type: string;

  size: string;

  href: string;
}