import { Link } from "react-router-dom";

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
  region,
  regionFlag,
  promoted = true,
  bonus = false,
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative p-4 pb-2 flex justify-center">
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" width={80} height={80} />
        </div>
        <span className="absolute top-3 left-3 text-lg" title={region}>
          {regionFlag}
        </span>
        {bonus && (
          <span className="absolute top-3 right-3 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
            Bonus
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        {promoted && (
          <span className="text-xs text-primary font-medium mb-1">Promoted</span>
        )}
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{sold} Sold</p>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="ml-2 text-xs text-muted-foreground line-through">{originalPrice}</span>
            )}
            {discount && (
              <span className="ml-1 text-xs font-semibold text-discount">{discount}</span>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground truncate max-w-[60%]">{seller}</span>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium">
            {sellerLevel}
          </span>
        </div>

        <Link
          to={`/product/${id}`}
          className="mt-3 w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity text-center block"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
