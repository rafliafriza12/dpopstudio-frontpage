export type ProductCategory =
  | "All"
  | "Dashboard"
  | "Website"
  | "SaaS"
  | "Mobile"
  | "Pitch Deck";

export interface IProductItem {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  originalPrice: number;
  price: number;
  screens: string;
  imgUrl: string;
}

export const productCategories: ProductCategory[] = [
  "All",
  "Dashboard",
  "Website",
  "SaaS",
  "Mobile",
  "Pitch Deck",
];

export const productList: IProductItem[] = [
  {
    id: 1,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "Dashboard",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-1.png",
  },
  {
    id: 2,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "Mobile",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-2.png",
  },
  {
    id: 3,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "SaaS",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-3.png",
  },
  {
    id: 4,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "Dashboard",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-4.png",
  },
  {
    id: 5,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "Mobile",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-5.png",
  },
  {
    id: 6,
    title: "FluxCRM – Dashboard UI Kit",
    description: "200+ screens for analytics, CRM, project management & more.",
    category: "SaaS",
    originalPrice: 79,
    price: 49,
    screens: "200+ Screens",
    imgUrl: "/img/recent-work/recent-work-1.png",
  },
];
