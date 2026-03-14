export type ProductCategory =
  | "Dashboard"
  | "Website"
  | "SaaS"
  | "Mobile"
  | "Pitch Deck";

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  category: ProductCategory;
  originalPrice: number;
  price: number;
  screens: string;
  imgUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imgUrl: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
