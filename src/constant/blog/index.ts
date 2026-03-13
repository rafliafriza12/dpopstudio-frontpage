export interface IBlogItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imgUrl: string;
  content: string; // HTML string
}

const defaultContent = `
<p>Startups today compete in a crowded digital landscape. Users have endless choices, and the difference between success and failure often comes down to one thing: experience.</p>

<p><strong>Great design helps companies:</strong></p>
<ul>
  <li>Improve user engagement</li>
  <li>Increase conversion rates</li>
  <li>Communicate brand value clearly</li>
  <li>Stand out from competitors</li>
</ul>

<p>A well-designed product doesn't just look good — it works seamlessly.</p>

<h3>The DPOP Approach to Design</h3>
<p>At DPOP Studio, our design process focuses on solving real problems. Every project starts with understanding the product, the business, and the users.</p>

<p><strong>Our process usually includes:</strong></p>
<ol>
  <li>
    <p>Product Discovery</p>
    <p>Understanding the market, users, and business goals.</p>
  </li>
  <li>
    <p>UX Strategy</p>
    <p>Structuring the product to ensure clarity and usability.</p>
  </li>
  <li>
    <p>UI Design</p>
    <p>Crafting a visual system that feels modern, clean, and scalable.</p>
  </li>
  <li>
    <p>Product Delivery</p>
    <p>Delivering production-ready assets for development teams.</p>
  </li>
</ol>

<p>This process allows us to create products that are not only visually compelling but also highly functional.</p>

<h3>Designing for Growth</h3>
<p>Many companies treat design as a finishing touch. We see it differently. Design should be part of the growth strategy. When done right, design can help companies:</p>

<ul>
  <li>Launch faster</li>
  <li>Raise funding</li>
  <li>Improve product adoption</li>
  <li>Build a recognizable brand</li>
</ul>

<p>That's why we collaborate closely with founders, product teams, and developers to ensure the design aligns with long-term goals.</p>

<h3>Final Thoughts</h3>
<p>Design is one of the most powerful investments a company can make. At DPOP Studio, we help ambitious companies transform ideas into beautifully crafted digital products that scale.</p>
<p>If you're building the next big product, we'd love to collaborate.</p>
`;

export const blogList: IBlogItem[] = [
  {
    id: 1,
    slug: "why-branding-fails-for-must-business",
    title: "Why Branding Fails for Must Business",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Product Design",
    date: "Mar 2, 2026",
    readTime: "8 min read",
    imgUrl: "/img/blog/blog-1.png",
    content: defaultContent,
  },
  {
    id: 2,
    slug: "why-branding-fails-for-must-business-2",
    title: "Why Branding Fails for Must Business",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Product Design",
    date: "Mar 2, 2026",
    readTime: "8 min read",
    imgUrl: "/img/blog/blog-2.png",
    content: defaultContent,
  },
  {
    id: 3,
    slug: "why-branding-fails-for-must-business-3",
    title: "Why Branding Fails for Must Business",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Product Design",
    date: "Mar 2, 2026",
    readTime: "8 min read",
    imgUrl: "/img/blog/blog-3.png",
    content: defaultContent,
  },
  {
    id: 4,
    slug: "why-branding-fails-for-must-business-4",
    title: "Why Branding Fails for Must Business",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Product Design",
    date: "Mar 2, 2026",
    readTime: "8 min read",
    imgUrl: "/img/blog/blog-4.png",
    content: defaultContent,
  },
  {
    id: 5,
    slug: "the-power-of-visual-identity-in-tech",
    title: "The Power of Visual Identity in Tech",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Branding",
    date: "Feb 25, 2026",
    readTime: "6 min read",
    imgUrl: "/img/blog/blog-1.png",
    content: defaultContent,
  },
  {
    id: 6,
    slug: "how-ux-research-drives-better-products",
    title: "How UX Research Drives Better Products",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "UX Research",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    imgUrl: "/img/blog/blog-2.png",
    content: defaultContent,
  },
  {
    id: 7,
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Design System",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    imgUrl: "/img/blog/blog-3.png",
    content: defaultContent,
  },
  {
    id: 8,
    slug: "from-wireframe-to-launch-a-case-study",
    title: "From Wireframe to Launch: A Case Study",
    excerpt:
      "In today's digital world, product design is no longer just about aesthetics. It's about creating meaningful experiences that help companies grow...",
    category: "Case Study",
    date: "Feb 10, 2026",
    readTime: "10 min read",
    imgUrl: "/img/blog/blog-4.png",
    content: defaultContent,
  },
];
