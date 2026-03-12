import { ProductCategory } from "@/constant/our-product";

interface ProductCategoryTabProps {
  category: ProductCategory;
  isActive: boolean;
  onClick: (category: ProductCategory) => void;
}

const ProductCategoryTab: React.FC<ProductCategoryTabProps> = ({
  category,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-5 py-2 rounded-full text-sm font-medium font-instrument-sans transition-all duration-200 border ${
        isActive
          ? "bg-secondary text-primary border-secondary"
          : "bg-transparent text-secondary border-[#E0E0E0] hover:border-secondary"
      }`}
    >
      {category}
    </button>
  );
};

export default ProductCategoryTab;
