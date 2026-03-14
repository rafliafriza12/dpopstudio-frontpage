import { Container } from "@/components/atoms/Container";

export default function BlogDetailSkeleton() {
  return (
    <section className="w-full bg-[#F8F7F5] text-black">
      <Container className="w-full flex flex-col items-center py-10 ipad-vertical:py-16 ipad-horizontal:py-20 pt-28! ipad-vertical:pt-32! ipad-horizontal:pt-36!">
        {/* Article Header */}
        <div className="w-full max-w-[680px] flex flex-col gap-6 animate-pulse">
          {/* Category Badge */}
          <div>
            <div className="w-24 h-9 rounded-full bg-[#E0E0E0]" />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-10 ipad-vertical:h-14 rounded-lg bg-[#E0E0E0]" />
            <div className="w-3/4 h-10 ipad-vertical:h-14 rounded-lg bg-[#E0E0E0]" />
          </div>

          {/* Meta Row */}
          <div className="flex items-center justify-between">
            <div className="w-40 h-4 rounded bg-[#E0E0E0]" />
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-[#E0E0E0]" />
              <div className="w-5 h-5 rounded bg-[#E0E0E0]" />
            </div>
          </div>

          {/* Excerpt */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-5 rounded bg-[#E0E0E0]" />
            <div className="w-full h-5 rounded bg-[#E0E0E0]" />
            <div className="w-2/3 h-5 rounded bg-[#E0E0E0]" />
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full max-w-[1051px] mt-8 ipad-vertical:mt-10 animate-pulse">
          <div className="w-full aspect-video rounded-[14px] bg-[#E0E0E0]" />
        </div>

        {/* Article Body */}
        <div className="w-full max-w-[680px] mt-8 ipad-vertical:mt-12 flex flex-col gap-5 animate-pulse">
          {/* Paragraph 1 */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-5/6 h-4 rounded bg-[#E0E0E0]" />
          </div>

          {/* Heading */}
          <div className="w-2/5 h-7 rounded-lg bg-[#E0E0E0] mt-2" />

          {/* Paragraph 2 */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-3/4 h-4 rounded bg-[#E0E0E0]" />
          </div>

          {/* Inline Image */}
          <div className="w-full aspect-[16/10] rounded-lg bg-[#E0E0E0] mt-2" />

          {/* Paragraph 3 */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-2/3 h-4 rounded bg-[#E0E0E0]" />
          </div>

          {/* Heading */}
          <div className="w-1/3 h-7 rounded-lg bg-[#E0E0E0] mt-2" />

          {/* Paragraph 4 */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-full h-4 rounded bg-[#E0E0E0]" />
            <div className="w-4/5 h-4 rounded bg-[#E0E0E0]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
