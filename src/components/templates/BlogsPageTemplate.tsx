import { Hero } from "../organisms/home/Hero";
import CTA from "../organisms/CTA";
import BlogArticles from "../organisms/home/BlogArticles";

export function BlogsPageTemplate() {
  return (
    <>
      <Hero withGradientElement={false} />
      <BlogArticles />
      <CTA />
    </>
  );
}
