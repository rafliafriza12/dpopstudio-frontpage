"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import BlogCard from "@/components/molecules/home/BlogCard";
import { blogList, IBlogItem } from "@/constant/blog";
import { BodyMediumRegular, Heading2 } from "@/components/atoms/Typography";
import Link from "next/link";
import { usePublishedBlogs } from "@/lib/api/hooks";

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

const BlogArticles: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const { data: apiBlogs, isLoading } = usePublishedBlogs();

  // Use API data if available, otherwise fallback to static data
  const allBlogs: IBlogItem[] = apiBlogs?.length
    ? apiBlogs.map((b, i) => ({
        id: i + 1,
        slug: b.slug,
        title: b.title,
        excerpt: b.excerpt,
        category: b.category,
        date: new Date(b.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        readTime: b.readTime,
        imgUrl: b.imgUrl,
        content: b.content,
      }))
    : blogList;

  const visibleBlogs = allBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < allBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, allBlogs.length),
    );
  };

  return (
    <section className="w-full bg-primary">
      <Container className="w-full flex flex-col gap-10 ipad-vertical:gap-14">
        {/* Header */}
        <div className="flex flex-col ipad-vertical:flex-row ipad-vertical:items-start ipad-vertical:justify-between gap-6">
          {/* Left - Title */}
          <Heading2 className="font-instrument-serif ">
            Blogs &<br className="hidden ipad-vertical:block" />
            Articles
          </Heading2>

          {/* Right - Description & Button */}
          <div className="flex flex-col items-start gap-4 max-w-[365px]">
            <BodyMediumRegular className="font-instrument-sans ">
              Strategic design services crafted to create clarity, consistency,
              and growth.
            </BodyMediumRegular>
            <Link
              href="/blogs"
              className="inline-block bg-secondary text-primary font-instrument-sans  px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity duration-200"
            >
              All Blogs
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ipad-vertical:gap-x-8 ipad-vertical:gap-y-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 animate-pulse">
                <div className="w-full aspect-4/3 rounded-2xl bg-[#E8E8E8]" />
                <div className="flex items-center gap-2">
                  <div className="w-20 h-4 rounded bg-[#E8E8E8]" />
                  <div className="w-2 h-2 rounded-full bg-[#E8E8E8]" />
                  <div className="w-16 h-4 rounded bg-[#E8E8E8]" />
                </div>
                <div className="w-3/4 h-5 rounded bg-[#E8E8E8]" />
                <div className="space-y-2">
                  <div className="w-full h-4 rounded bg-[#E8E8E8]" />
                  <div className="w-2/3 h-4 rounded bg-[#E8E8E8]" />
                </div>
              </div>
            ))}
          </div>
        ) : visibleBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ipad-vertical:gap-x-8 ipad-vertical:gap-y-12">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 gap-5">
            <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  stroke="#ABABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H12M7 11H17M7 15H14"
                  stroke="#ABABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="font-instrument-sans text-base text-[#ABABAB]">
              No articles published yet
            </p>
          </div>
        )}

        {/* Load More */}
        {!isLoading && visibleBlogs.length > 0 && hasMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-secondary text-primary font-poppins text-sm font-medium px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogArticles;
