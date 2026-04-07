import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const PromotedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">Promoted products</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors">
            Filters
          </button>
          <button className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors">
            Sorting
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PromotedProducts;
