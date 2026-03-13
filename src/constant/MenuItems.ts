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
    link: "#",
  },
  {
    name: "Product",
    link: "#",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "#",
  },
];
