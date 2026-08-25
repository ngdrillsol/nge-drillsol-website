import { notFound } from "next/navigation";

import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import { industries } from "@/components/industries/industries.data";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndustryPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.id === slug
  );

  if (!industry) {
    notFound();
  }

  return <IndustryDetailPage industry={industry} />;
}