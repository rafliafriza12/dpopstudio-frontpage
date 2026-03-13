import { BlogDetailPageTemplate } from "@/components/templates/BlogDetailPageTemplate";
import { MainLayout } from "@/components/templates/MainLayout";
import { blogList } from "@/constant/blog";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;

  const blog = blogList.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <MainLayout>
      <BlogDetailPageTemplate
        category={blog.category}
        title={blog.title}
        readTime={blog.readTime}
        date={blog.date}
        excerpt={blog.excerpt}
        featuredImage={blog.imgUrl}
        content={blog.content}
      />
    </MainLayout>
  );
}
