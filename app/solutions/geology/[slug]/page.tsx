import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GeologyDetailPage from "@/components/solutions/geology/GeologyDetailPage";
import { geologyData } from "@/components/solutions/geology/geology.data";

interface GeologyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GeologyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const geology = geologyData.find((item) => item.slug === slug);
  if (!geology) notFound();

  const title = `${geology.name} Drilling Considerations`;
  const description = `Read about ${geology.name} drilling considerations and send your formation details and project requirements to NGE Drillsol for review.`;
  const url = `/solutions/geology/${geology.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | NGE Drillsol`, description, url, type: "website", siteName: "NGE Drillsol", locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} | NGE Drillsol`, description },
  };
}

export default async function GeologyPage({
  params,
}: GeologyPageProps) {
  const { slug } = await params;

  // geologyData is an array, so find the geology
  // entry using its slug.
  const geology = geologyData.find(
    (item) => item.slug === slug
  );

  if (!geology) {
    notFound();
  }

  return <GeologyDetailPage geology={geology} />;
}

/*
 * Generate all available geology URLs.
 *
 * Example:
 * /solutions/geology/clay
 * /solutions/geology/sand
 * /solutions/geology/gravel
 * /solutions/geology/hard-rock
 * /solutions/geology/limestone
 * /solutions/geology/mixed-formation
 */
export function generateStaticParams() {
  return geologyData.map((item) => ({
    slug: item.slug,
  }));
}