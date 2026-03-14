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
    link: "/services",
  },
  {
    name: "Product",
    link: "/products",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
