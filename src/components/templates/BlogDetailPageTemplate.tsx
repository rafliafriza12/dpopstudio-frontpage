import BlogDetailContent from "../organisms/blogs/BlogDetailContent";
import CTA from "../organisms/CTA";
import BlogArticles from "../organisms/home/BlogArticles";

interface BlogDetailPageTemplateProps {
  category: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  content: string; // HTML string
}

export function BlogDetailPageTemplate({
  category,
  title,
  readTime,
  date,
  excerpt,
  featuredImage,
  content,
}: BlogDetailPageTemplateProps) {
  return (
    <>
      <BlogDetailContent
        category={category}
        title={title}
        readTime={readTime}
        date={date}
        excerpt={excerpt}
        featuredImage={featuredImage}
        content={content}
      />
      <BlogArticles />
      <CTA />
    </>
  );
}
