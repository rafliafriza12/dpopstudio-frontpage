import Image from "next/image";
import { IBlogItem } from "@/constant/blog";
import { Heading5 } from "@/components/atoms/Typography";

interface BlogCardProps {
  blog: IBlogItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className="flex flex-col gap-4 cursor-pointer group">
      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#E8E8E8]">
        <Image
          src={blog.imgUrl}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 font-poppins text-sm text-[#6B6B6B]">
        <span>{blog.date}</span>
        <span>•</span>
        <span>{blog.category}</span>
      </div>

      {/* Title */}
      <Heading5 className="font-instrument-sans font-semibold ">
        {blog.title}
      </Heading5>

      {/* Excerpt */}
      <p className="font-instrument-sans text-sm text-[#6B6B6B] leading-relaxed line-clamp-3">
        {blog.excerpt}
      </p>
    </article>
  );
};

export default BlogCard;
