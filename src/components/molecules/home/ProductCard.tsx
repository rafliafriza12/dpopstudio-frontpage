"use client";

import { useState } from "react";
import Image from "next/image";
import { IProductItem } from "@/constant/our-product";
import ProductBadge from "@/components/atoms/ProductBadge";
import { BodyMediumRegular, Heading5 } from "@/components/atoms/Typography";

interface ProductCardProps {
  product: IProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 group cursor-pointer bg-[#F5F5F5] rounded-b-2xl">
        {/* Image */}
        <div className="relative w-full aspect-4/3 rounded-t-2xl overflow-hidden bg-[#F5F5F5]">
          <Image
            src={product.imgUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-300"
          />

          {/* Hover Overlay with Buttons */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5 z-10">
            {/* Preview Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="w-12 h-12 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 hover:border-white transition-all duration-200 cursor-pointer"
              aria-label="Preview"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="white"
                  strokeWidth="1.8"
                />
                <path
                  d="M2 12C4.4 7.2 7.8 4.5 12 4.5S19.6 7.2 22 12c-2.4 4.8-5.8 7.5-10 7.5S4.4 16.8 2 12Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Cart / Buy Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="w-12 h-12 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 hover:border-white transition-all duration-200 cursor-pointer"
              aria-label="Add to cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 4.5H5.05L7.53 14.01C7.68 14.58 8.19 14.99 8.78 14.99H17.78C18.33 14.99 18.82 14.63 19 14.11L21.48 7H6.12"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9.5" cy="18.5" r="1.5" fill="white" />
                <circle cx="17" cy="18.5" r="1.5" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 items-start p-[18px] ">
          {/* Badge */}
          <ProductBadge label={product.category} />

          {/* Title */}
          <div className="flex flex-col gap-3">
            <Heading5 className="font-instrument-sans font-semibold line-clamp-1">
              {product.title}
            </Heading5>

            {/* Description */}
            <BodyMediumRegular className="font-instrument-sans line-clamp-2">
              {product.description}
            </BodyMediumRegular>
          </div>

          {/* Price & Screens */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-baseline gap-2">
              {product.originalPrice !== 0 && (
                <span className="font-poppins text-sm text-[#ABABAB] line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="font-instrument-sans font-semibold text-xl text-secondary">
                ${product.price}
              </span>
            </div>
            <span className="font-poppins text-sm text-[#6B6B6B]">
              {product.screens}
            </span>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-[90%] mx-4 flex flex-col items-center gap-5 shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Rocket Icon */}
            <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C12 2 7 7.5 7 13C7 15.21 8.79 17 11 17H13C15.21 17 17 15.21 17 13C17 7.5 12 2 12 2Z"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17V22"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 20H16"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="2" fill="#1a1a1a" />
              </svg>
            </div>

            {/* Text */}
            <div className="text-center">
              <h3 className="font-instrument-sans font-semibold text-xl text-[#1a1a1a] mb-2">
                Coming Soon
              </h3>
              <p className="font-poppins text-sm text-[#6B6B6B] leading-relaxed">
                This feature is currently under development. Stay tuned for
                updates!
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl bg-[#1a1a1a] text-white font-poppins text-sm font-medium hover:bg-[#2d2d2d] transition-colors duration-200 cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
