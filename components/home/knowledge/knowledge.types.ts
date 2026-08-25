export interface KnowledgeCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  articleCount: number;
  slug: string;
}

export interface KnowledgeCardProps {
  category: KnowledgeCategory;
}