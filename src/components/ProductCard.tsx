import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  sold: string;
  seller: string;
  sellerLevel: string;
  region: string;
  regionFlag: string;
  promoted?: boolean;
  bonus?: boolean;
}

const levelColors: Record<string, string> = {
  Legend: "bg-amber-100 text-amber-800",
  Hero: "bg-purple-100 text-purple-800",
  Master: "bg-blue-100 text-blue-800",
  Gamer: "bg-green-100 text-green-800",
};

const ProductCard = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  sold,
  seller,
  sellerLevel,
  regionFlag,
  promoted = true,
  bonus = false,
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      {/* Full-width image */}
      <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 text-base" title="Region">
          {regionFlag}
        </span>
        {bonus && (
          <span className="absolute top-2 right-2 text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
            🎁 $0.01
          </span>
        )}
        {promoted && (
          <span className="absolute bottom-2 right-2 text-[10px] bg-red-500/90 text-white px-2 py-0.5 rounded font-medium">
            ⬆ PROMOTED
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-3 py-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1 leading-tight min-h-[2.5rem]">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{sold} Sold</p>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="text-lg font-bold text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
          {discount && (
            <span className="text-xs font-semibold text-red-500">{discount}</span>
          )}
        </div>

        {/* Buy now button */}
        <Link
          to={`/product/${id}`}
          className="w-full py-2 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center block mb-3"
        >
          Buy now
        </Link>

        {/* Seller info */}
        <div className="border-t border-border pt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 min-w-0">
            <span className="text-xs text-foreground font-medium truncate">{seller}</span>
            <BadgeCheck className="w-3.5 h-3.5 text-primary shrink-0" />
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${levelColors[sellerLevel] || "bg-secondary text-secondary-foreground"}`}>
            {sellerLevel.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
