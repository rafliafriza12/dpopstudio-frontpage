export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterColumn {
  title: string;
  links: IFooterLink[];
}

export const footerColumns: IFooterColumn[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Product", href: "/product" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Branding", href: "/service/branding" },
      { label: "UI/UX Design", href: "/service/ui-ux-design" },
      { label: "Visual Design", href: "/service/visual-design" },
    ],
  },
  {
    title: "Our Product",
    links: [
      { label: "UI8", href: "https://ui8.net" },
      { label: "Gumroad", href: "https://gumroad.com" },
    ],
  },
  {
    title: "Help",
    links: [{ label: "Privacy", href: "/privacy-policy" }],
  },
  {
    title: "Social Media",
    links: [
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "X.com", href: "https://x.com" },
    ],
  },
];
