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

const OurProduct: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");

  const filteredProducts =
    activeCategory === "All"
      ? productList
      : productList.filter((product) => product.category === activeCategory);

  return (
    <section className="w-full bg-[#FDFCFC]">
      <Container className="w-full flex flex-col gap-10 ipad-vertical:gap-14">
        {/* Header */}
        <div className="flex flex-col ipad-vertical:flex-row ipad-vertical:items-end ipad-vertical:justify-between gap-6 ipad-vertical:gap-0">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ipad-vertical:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurProduct;
