interface ProductBadgeProps {
  label: string;
}

const categoryColors: Record<string, string> = {
  Dashboard: "bg-[#F7F5FF] text-[#7058FA]",
  Website: "bg-[#FFF4EB] text-[#F67402]",
  SaaS: "bg-[#EBFEF8] text-[#08CD8F]",
  Mobile: "bg-[#FEF5FF] text-[#E658FA]",
  "Pitch Deck": "bg-[#EDEBFF] text-[#3D27FF]",
};

const defaultColor = "bg-secondary text-primary";

const ProductBadge: React.FC<ProductBadgeProps> = ({ label }) => {
  const colorClass = categoryColors[label] || defaultColor;

  return (
    <span
      className={`inline-block text-xs font-medium font-instrument-sans px-3 py-1 rounded-md ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default ProductBadge;
