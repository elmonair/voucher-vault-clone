import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/gift-cards-apple-228.png",
    title: "iTunes 500 USD USA",
    price: "$400.00",
    originalPrice: "500.00",
    discount: "-20%",
    sold: "520",
    seller: "micheljhaider0",
    sellerLevel: "Hero",
    region: "United States",
    regionFlag: "🇺🇸",
    bonus: true,
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Gift_cards-Xbox-228.png",
    title: "Xbox 25 ₺ TL TRY (Stockable) TR",
    price: "$0.54",
    sold: "216",
    seller: "M1card",
    sellerLevel: "Gamer",
    region: "Turkey",
    regionFlag: "🇹🇷",
    bonus: true,
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Gift_cards-Netflix-228.png",
    title: "Netflix Gift Card 500 ₺ TL TRY (Stockable) TR",
    price: "$16.25",
    sold: "76",
    seller: "M1card",
    sellerLevel: "Gamer",
    region: "Turkey",
    regionFlag: "🇹🇷",
    bonus: true,
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Gift_cards-PlayStation_network_aka_psn-228.png",
    title: "PlayStation Network PSN 1000 INR (INDIA)",
    price: "$10.76",
    originalPrice: "12.75",
    discount: "-15%",
    sold: "15,307",
    seller: "liquid2606",
    sellerLevel: "Hero",
    region: "India",
    regionFlag: "🇮🇳",
    bonus: true,
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Games-Valorant-228.png",
    title: "Valorant 2.5 EUR (225 VP) | Euro Area",
    price: "$2.82",
    originalPrice: "2.88",
    discount: "-2%",
    sold: "99,845",
    seller: "BSV.Official.Store",
    sellerLevel: "Legend",
    region: "Europe",
    regionFlag: "🇪🇺",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Games-Riot_Access-228.png",
    title: "Riot Access 2.5 EUR | Euro Area",
    price: "$2.81",
    originalPrice: "2.88",
    discount: "-3%",
    sold: "28,057",
    seller: "BSV.Official.Store",
    sellerLevel: "Legend",
    region: "Europe",
    regionFlag: "🇪🇺",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/virtual-credit-cards-visa-228.png",
    title: "Virtual Visa USA - 10 USD",
    price: "$10.38",
    sold: "1,174",
    seller: "EliteLoops",
    sellerLevel: "Master",
    region: "United States",
    regionFlag: "🇺🇸",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/payz-gift-cards-228.png",
    title: "Rewarble Payz Global - 50 USD",
    price: "$53.71",
    sold: "1,072",
    seller: "EliteLoops",
    sellerLevel: "Master",
    region: "Global",
    regionFlag: "🌍",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Gift_cards-Xbox-228.png",
    title: "Xbox 5 USD | USA",
    price: "$4.69",
    originalPrice: "5.00",
    discount: "-6%",
    sold: "5,823",
    seller: "BSV.Official.Store",
    sellerLevel: "Legend",
    region: "United States",
    regionFlag: "🇺🇸",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/Games-PLAYERUNKNOWNS_BATTLEGROUNDS_aka_PUBG-228.png",
    title: "PUBG 325 UC | Global",
    price: "$4.49",
    originalPrice: "5.00",
    discount: "-10%",
    sold: "3,685",
    seller: "BSV.Official.Store",
    sellerLevel: "Legend",
    region: "Global",
    regionFlag: "🌍",
    bonus: true,
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/paypal-gift-cards-228.png",
    title: "Rewarble PayPal Global - 10 USD",
    price: "$10.71",
    sold: "892",
    seller: "EliteLoops",
    sellerLevel: "Master",
    region: "Global",
    regionFlag: "🌍",
  },
  {
    image: "https://cdn.bsvmarket.com/images/product-images/228/binance-gift-cards-228.png",
    title: "Binance (USDT) Global - 10 USD",
    price: "$10.82",
    sold: "186",
    seller: "EliteLoops",
    sellerLevel: "Master",
    region: "Global",
    regionFlag: "🌍",
  },
];

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
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PromotedProducts;
