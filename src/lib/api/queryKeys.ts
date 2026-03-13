export const queryKeys = {
  products: {
    all: ["products"] as const,
    published: () => [...queryKeys.products.all, "published"] as const,
  },
  blogs: {
    all: ["blogs"] as const,
    published: () => [...queryKeys.blogs.all, "published"] as const,
    bySlug: (slug: string) => [...queryKeys.blogs.all, "slug", slug] as const,
  },
} as const;
