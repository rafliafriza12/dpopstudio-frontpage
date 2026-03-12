import Image from "next/image";
import { IProductItem } from "@/constant/our-product";
import ProductBadge from "@/components/atoms/ProductBadge";
import { BodyMediumRegular, Heading5 } from "@/components/atoms/Typography";

interface ProductCardProps {
  product: IProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer bg-[#F5F5F5] rounded-b-2xl">
      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-t-2xl overflow-hidden bg-[#F5F5F5]">
        <Image
          src={product.imgUrl}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 items-start p-[18px] ">
        {/* Badge */}
        <ProductBadge label={product.category} />

        {/* Title */}
        <div className="flex flex-col gap-3">
          <Heading5 className="font-instrument-sans font-semibold ">
            {product.title}
          </Heading5>

          {/* Description */}
          <BodyMediumRegular className="font-instrument-sans">
            {product.description}
          </BodyMediumRegular>
        </div>

        {/* Price & Screens */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-baseline gap-2">
            <span className="font-poppins text-sm text-[#ABABAB] line-through">
              ${product.originalPrice}
            </span>
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
  );
};

export default ProductCard;
