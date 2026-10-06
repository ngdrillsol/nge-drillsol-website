import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import { industries } from "@/components/industries/industries.data";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.id === slug);
  if (!industry) notFound();

  const title = `${industry.title} Drilling`;
  const description = `Explore the ${industry.title} page and share your drilling application, ground conditions and project requirements with NGE Drillsol for review.`;
  const url = `/industries/${industry.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | NGE Drillsol`, description, url, type: "website", siteName: "NGE Drillsol", locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} | NGE Drillsol`, description },
  };
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