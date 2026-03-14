"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import ProductCategoryTab from "@/components/atoms/ProductCategoryTab";
import ProductCard from "@/components/molecules/home/ProductCard";
import {
  ProductCategory,
  productCategories,
  productList,
} from "@/constant/our-product";
import { BodyMediumRegular, Heading2 } from "@/components/atoms/Typography";
import { usePublishedProducts } from "@/lib/api/hooks";

const OurProduct: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All",
  );
  const { data: apiProducts, isLoading } = usePublishedProducts();

  // Use API data if available, otherwise fallback to static data
  const products = apiProducts?.length
    ? apiProducts.map((p, i) => ({
        id: i + 1,
        title: p.title,
        description: p.description,
        category: p.category as ProductCategory,
        originalPrice: p.originalPrice,
        price: p.price,
        screens: p.screens,
        imgUrl: p.imgUrl,
      }))
    : productList;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="w-full bg-[#FDFCFC]">
      <Container className="w-full flex flex-col gap-10 ipad-vertical:gap-14">
        {/* Header */}
        <div className="flex flex-col ipad-horizontal:flex-row ipad-horizontal:items-end ipad-horizontal:justify-between gap-6 ipad-horizontal:gap-0">
          {/* Left - Title & Description */}
          <div className="flex flex-col gap-4 ">
            <Heading2 className="font-instrument-serif">Our Product</Heading2>
            <BodyMediumRegular className="font-instrument-sans max-w-[463px]">
              A creative studio that blends into your team. We design, build,
              and ship digital products with the care of an in-house crew.
            </BodyMediumRegular>
          </div>

          {/* Right - Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {productCategories.map((category) => (
              <ProductCategoryTab
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={setActiveCategory}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-6 ipad-vertical:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 animate-pulse">
                <div className="w-full aspect-4/3 rounded-t-2xl bg-[#E8E8E8]" />
                <div className="flex flex-col gap-3 p-[18px]">
                  <div className="w-20 h-6 rounded-full bg-[#E8E8E8]" />
                  <div className="w-3/4 h-5 rounded bg-[#E8E8E8]" />
                  <div className="w-full h-4 rounded bg-[#E8E8E8]" />
                  <div className="flex justify-between mt-2">
                    <div className="w-16 h-5 rounded bg-[#E8E8E8]" />
                    <div className="w-24 h-4 rounded bg-[#E8E8E8]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-6 ipad-vertical:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
                  d="M20 7H4C3.45 7 3 7.45 3 8V19C3 19.55 3.45 20 4 20H20C20.55 20 21 19.55 21 19V8C21 7.45 20.55 7 20 7Z"
                  stroke="#ABABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 7V5C16 4.45 15.55 4 15 4H9C8.45 4 8 4.45 8 5V7"
                  stroke="#ABABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12V16M10 14H14"
                  stroke="#ABABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="font-instrument-sans text-base text-[#ABABAB]">
              No products available yet
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurProduct;
