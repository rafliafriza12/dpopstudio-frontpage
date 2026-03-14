import { Hero } from "../organisms/blogs/hero";
import CTA from "../organisms/CTA";
import BlogArticles from "../organisms/home/BlogArticles";

export function BlogsPageTemplate() {
  return (
    <>
      <Hero />
      <BlogArticles />
      <CTA />
    </>
  );
}
