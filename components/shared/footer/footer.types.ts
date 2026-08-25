export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
}