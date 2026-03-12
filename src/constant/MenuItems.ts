export interface IMenuItem {
  name: string;
  link: string;
  child?: {
    name: string;
    link: string;
  }[];
}

export const menuItems: IMenuItem[] = [
  {
    name: "Service",
    link: "/",
  },
  {
    name: "Product",
    link: "/terms-of-services",
  },
  {
    name: "Blog",
    link: "/privacy-policy",
  },
  {
    name: "Contact",
    link: "/data-policy",
  },
];
