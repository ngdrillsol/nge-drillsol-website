import { notFound } from "next/navigation";

import GeologyDetailPage from "@/components/solutions/geology/GeologyDetailPage";
import { geologyData } from "@/components/solutions/geology/geology.data";

interface GeologyPageProps {
  params: Promise<{
    slug: string;
  }>;
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