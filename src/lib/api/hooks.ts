import { useQuery } from "@tanstack/react-query";
import { publicGet, queryKeys } from "@/lib/api";
import { IProduct, IBlog } from "@/types/api";

export function usePublishedProducts() {
  return useQuery<IProduct[], Error>({
    queryKey: queryKeys.products.published(),
    queryFn: () => publicGet<IProduct[]>("/product/published"),
  });
}

export function usePublishedBlogs() {
  return useQuery<IBlog[], Error>({
    queryKey: queryKeys.blogs.published(),
    queryFn: () => publicGet<IBlog[]>("/blog/published"),
  });
}

export function useBlogBySlug(slug: string) {
  return useQuery<IBlog, Error>({
    queryKey: queryKeys.blogs.bySlug(slug),
    queryFn: () => publicGet<IBlog>(`/blog/slug/${slug}`),
    enabled: !!slug,
  });
}
