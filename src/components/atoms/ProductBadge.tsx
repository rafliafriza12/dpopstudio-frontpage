interface ProductBadgeProps {
  label: string;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({ label }) => {
  return (
    <span className="inline-block bg-secondary text-primary text-xs font-medium font-instrument-sans px-3 py-1 rounded-md">
      {label}
    </span>
  );
};

export default ProductBadge;
