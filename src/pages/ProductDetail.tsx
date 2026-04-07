import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, Zap, Clock, Star } from "lucide-react";

const levelColor: Record<string, string> = {
  Legend: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Hero: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Master: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  Gamer: "bg-green-500/10 text-green-600 border-green-500/20",
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to marketplace</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Image + Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border p-8 flex flex-col items-center">
              <div className="w-40 h-40 rounded-xl overflow-hidden bg-secondary flex items-center justify-center mb-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl" title={product.region}>{product.regionFlag}</span>
                <span className="text-sm text-muted-foreground">{product.region}</span>
              </div>
              {product.category && (
                <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{product.category}</span>
              )}
            </div>

            {/* Description */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Description</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "Buyer Protection", desc: "Full refund if not delivered" },
                { icon: Zap, label: "Instant Delivery", desc: "Code sent immediately" },
                { icon: Clock, label: "24/7 Support", desc: "Always here to help" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Purchase panel */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h1 className="text-xl font-bold text-foreground mb-4 leading-tight">{product.title}</h1>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">{product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="text-sm font-semibold text-discount">{product.discount}</span>
                )}
              </div>

              <p className="text-xs text-muted-foreground mb-5">{product.sold} sold</p>

              {/* Quantity */}
              <div className="mb-5">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Quantity</label>
                <div className="flex items-center border border-border rounded-lg overflow-hidden w-fit">
                  <button className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors">−</button>
                  <span className="px-4 py-2 text-sm font-medium text-foreground border-x border-border">1</span>
                  <button className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors">+</button>
                </div>
              </div>

              {/* Buy button */}
              <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity mb-4">
                Buy now
              </button>

              {/* Seller info */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">Sold by</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                      {product.seller.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-foreground">{product.seller}</span>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${levelColor[product.sellerLevel] || "bg-secondary text-secondary-foreground"}`}>
                    {product.sellerLevel}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.sold} sales)</span>
                </div>
              </div>

              {/* Payment methods */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-xs text-muted-foreground mb-2">Accepted payment methods</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-secondary px-2 py-1 rounded">BTC</span>
                  <span className="bg-secondary px-2 py-1 rounded">ETH</span>
                  <span className="bg-secondary px-2 py-1 rounded">USDT</span>
                  <span className="bg-secondary px-2 py-1 rounded">LTC</span>
                  <span className="bg-secondary px-2 py-1 rounded">VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
