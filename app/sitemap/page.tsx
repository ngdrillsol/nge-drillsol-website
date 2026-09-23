import type { Metadata } from "next";
import Link from "next/link";
import getSitemapEntries from "../sitemap";
import { rigCategories } from "@/components/drilling-rigs/drilling-rigs.data";

type SiteLink = { href: string; label: string };
type SiteGroup = { id: string; title: string; description: string; links: SiteLink[] };

export const metadata: Metadata = {
  title: "Sitemap | NGE Drillsol",
  description:
    "Browse NGE Drillsol pages, drilling rig categories and models, solutions, industries, services, projects, markets and company information.",
  alternates: { canonical: "https://www.ngedrill.com/sitemap" },
};

const titles: Record<string, string> = {
  "/": "Home",
  "/about": "About NGE Drillsol",
  "/contact": "Contact Us",
  "/drilling-rigs": "All Drilling Rigs",
  "/solutions": "Drilling Solutions",
  "/industries": "Industries We Serve",
  "/services": "Services",
  "/projects": "Projects",
  "/projects/adani-green-hydrogen": "Adani Green Hydrogen Project",
  "/markets": "Global Markets",
  "/resources": "Resources",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-use": "Terms of Use",
  "/sitemap": "Sitemap",
};

function pathname(url: string) {
  const path = new URL(url, "https://www.ngedrill.com").pathname;
  return path.replace(/\/+$/, "") || "/";
}

// Labels are derived from the actual URLs, so no unverified model fields are needed.
function titleForPath(path: string) {
  if (titles[path]) return titles[path];
  const lastPart = decodeURIComponent(path.split("/").filter(Boolean).pop() || "");
  return lastPart
    .split("-")
    .map((word) => {
      if (/^(ng|dth|api|epc|pvc|ms$|pdc|tds)/i.test(word)) return word.toUpperCase();
      if (word.toLowerCase() === "oil") return "Oil";
      if (word.toLowerCase() === "gas") return "Gas";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default async function SitemapPage() {
  // Reuse the XML generator directly: no network fetch, duplicated route list,
  // or separately maintained product list is required.
  const entries = await getSitemapEntries();
  const categoryPaths = new Set(rigCategories.map((category) => pathname(category.href)));
  const paths = Array.from(new Set(entries.map((entry) => pathname(entry.url))));

  const groups: SiteGroup[] = [
    { id: "company", title: "Company", description: "Meet NGE Drillsol and contact our team.", links: [] },
    { id: "categories", title: "Drilling Rig Categories", description: "Explore rigs by drilling application and platform.", links: [] },
    { id: "rigs", title: "Drilling Rig Models", description: "Visit individual model pages for equipment details.", links: [] },
    { id: "solutions", title: "Solutions", description: "Explore our approach to drilling requirements.", links: [] },
    { id: "industries", title: "Industries", description: "Find drilling equipment for your industry.", links: [] },
    { id: "services", title: "Services", description: "Explore engineering and service support.", links: [] },
    { id: "projects", title: "Projects", description: "Discover project work and applications.", links: [] },
    { id: "markets", title: "Markets", description: "Explore our international markets.", links: [] },
    { id: "resources", title: "Resources", description: "Find information and learning resources.", links: [] },
    { id: "legal", title: "Website Information", description: "Read our website policies and terms.", links: [] },
    { id: "other", title: "More Pages", description: "Additional pages available on our website.", links: [] },
  ];

  for (const path of paths) {
    let groupId = "other";
    if (["/", "/about", "/contact"].includes(path)) groupId = "company";
    else if (["/privacy-policy", "/terms-of-use", "/sitemap"].includes(path)) groupId = "legal";
    else if (path === "/drilling-rigs" || categoryPaths.has(path)) groupId = "categories";
    else if (path.startsWith("/drilling-rigs/")) groupId = "rigs";
    else {
      const section = ["solutions", "industries", "services", "projects", "markets", "resources"].find(
        (name) => path === `/${name}` || path.startsWith(`/${name}/`)
      );
      if (section) groupId = section;
    }
    groups.find((group) => group.id === groupId)?.links.push({ href: path, label: titleForPath(path) });
  }

  const visibleGroups = groups.filter((group) => group.links.length > 0);

  return (
    <main className="min-h-screen bg-[#050914] pb-20 pt-28 text-slate-300 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-yellow-300">← Back to Home</Link>
        <header className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#10264b] to-[#070d19] p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">Explore NGE Drillsol</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Sitemap</h1>
          <p className="mt-5 max-w-2xl text-base leading-8">Find our company pages, drilling rigs, solutions, services and project information in one place.</p>
          <p className="mt-5 text-sm text-slate-400">{paths.length} pages · {visibleGroups.length} sections</p>
        </header>

        <nav aria-label="Sitemap sections" className="my-8 flex flex-wrap gap-2">
          {visibleGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-yellow-400/40 hover:text-yellow-300">
              {group.title}
            </a>
          ))}
        </nav>

        <div className="grid items-start gap-5 md:grid-cols-2">
          {visibleGroups.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 id={`${group.id}-title`} className="text-xl font-semibold text-white">{group.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
              <ul className="mt-5 divide-y divide-white/5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group flex items-center justify-between gap-4 rounded-sm py-3 text-sm leading-6 hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400">
                      <span>{link.label}</span><span aria-hidden="true" className="shrink-0 text-yellow-400">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
