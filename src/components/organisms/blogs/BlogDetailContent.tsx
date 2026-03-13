"use client";
import { Container } from "@/components/atoms/Container";
import Image from "next/image";
import { Heading1, Heading2 } from "@/components/atoms/Typography";

interface BlogDetailContentProps {
  category: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  content: string; // HTML string
}

export default function BlogDetailContent({
  category,
  title,
  readTime,
  date,
  excerpt,
  featuredImage,
  content,
}: BlogDetailContentProps) {
  return (
    <section className="w-full bg-[#F8F7F5] text-black">
      <Container className="w-full flex flex-col items-center py-10 ipad-vertical:py-16 ipad-horizontal:py-20 pt-28! ipad-vertical:pt-32! ipad-horizontal:pt-36!">
        {/* Article Header */}
        <div className="w-full max-w-[680px] flex flex-col gap-6">
          {/* Category Badge */}
          <div>
            <span className="inline-block px-5 py-2 text-sm font-instrument-sans font-medium bg-[#1E1E1E] text-white rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <Heading2 className="font-instrument-serif">{title}</Heading2>

          {/* Meta Row */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-instrument-sans text-black/60">
              {readTime} - {date}
            </p>
            <div className="flex items-center gap-3">
              {/* View Icon */}
              <button
                className="text-black/40 hover:text-black transition-colors"
                aria-label="Views"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              {/* Share/Bookmark Icon */}
              <button
                className="text-black/40 hover:text-black transition-colors"
                aria-label="Share"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-base ipad-vertical:text-lg font-instrument-sans leading-[160%] text-black/80">
            {excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="w-full max-w-[1051px] mt-8 ipad-vertical:mt-10">
          <div className="relative w-full aspect-video rounded-[14px] overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Body - dangerouslySetInnerHTML */}
        <div className="w-full max-w-[680px] mt-8 ipad-vertical:mt-12">
          <article
            className="blog-content font-instrument-sans text-base ipad-vertical:text-lg leading-[180%] text-black/90"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Container>
    </section>
  );
}
