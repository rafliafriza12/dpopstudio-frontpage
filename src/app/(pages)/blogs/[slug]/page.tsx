"use client";

import { use } from "react";
import { BlogDetailPageTemplate } from "@/components/templates/BlogDetailPageTemplate";
import { MainLayout } from "@/components/templates/MainLayout";
import { blogList } from "@/constant/blog";
import { notFound } from "next/navigation";
import { useBlogBySlug } from "@/lib/api/hooks";
import BlogDetailSkeleton from "@/components/organisms/blogs/BlogDetailSkeleton";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = use(params);
  const { data: apiBlog, isLoading } = useBlogBySlug(slug);

  // Fallback to static data if API not available
  const staticBlog = blogList.find((b) => b.slug === slug);

  const blog = apiBlog
    ? {
        category: apiBlog.category,
        title: apiBlog.title,
        readTime: apiBlog.readTime,
        date: new Date(apiBlog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        excerpt: apiBlog.excerpt,
        featuredImage: apiBlog.imgUrl,
        content: apiBlog.content,
      }
    : staticBlog
      ? {
          category: staticBlog.category,
          title: staticBlog.title,
          readTime: staticBlog.readTime,
          date: staticBlog.date,
          excerpt: staticBlog.excerpt,
          featuredImage: staticBlog.imgUrl,
          content: staticBlog.content,
        }
      : null;

  if (isLoading) {
    return (
      <MainLayout>
        <BlogDetailSkeleton />
      </MainLayout>
    );
  }

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
        featuredImage={blog.featuredImage}
        content={blog.content}
      />
    </MainLayout>
  );
}
