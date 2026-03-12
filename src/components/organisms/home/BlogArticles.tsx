"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import BlogCard from "@/components/molecules/home/BlogCard";
import { blogList } from "@/constant/blog";
import { BodyMediumRegular, Heading2 } from "@/components/atoms/Typography";
import Link from "next/link";

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

const BlogArticles: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleBlogs = blogList.slice(0, visibleCount);
  const hasMore = visibleCount < blogList.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, blogList.length),
    );
  };

  return (
    <section className="w-full bg-primary">
      <Container className="w-full flex flex-col gap-10 ipad-vertical:gap-14">
        {/* Header */}
        <div className="flex flex-col ipad-vertical:flex-row ipad-vertical:items-start ipad-vertical:justify-between gap-6">
          {/* Left - Title */}
          <Heading2 className="font-instrument-serif ">
            Blogs &<br />
            Articles
          </Heading2>

          {/* Right - Description & Button */}
          <div className="flex flex-col items-start gap-4 max-w-[365px]">
            <BodyMediumRegular className="font-instrument-sans ">
              Strategic design services crafted to create clarity, consistency,
              and growth.
            </BodyMediumRegular>
            <Link
              href="/blog"
              className="inline-block bg-secondary text-primary font-instrument-sans  px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity duration-200"
            >
              All Blogs
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ipad-vertical:gap-x-8 ipad-vertical:gap-y-12">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
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
