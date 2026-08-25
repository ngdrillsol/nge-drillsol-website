import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Drilling Rigs",
    href: "/drilling-rigs",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}