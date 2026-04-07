import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import catRoblox from "@/assets/cat-roblox.jpg";
import catPubg from "@/assets/cat-pubg.jpg";
import catApple from "@/assets/cat-apple.jpg";
import catSteam from "@/assets/cat-steam.jpg";

const featuredBrands = [
  { name: "Roblox", image: catRoblox },
  { name: "PUBG", image: catPubg },
  { name: "Apple", image: catApple },
  { name: "Steam", image: catSteam },
];

const HeroBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-auto lg:h-[320px]">
        {/* Main hero */}
        <div
          className="lg:col-span-2 relative rounded-xl overflow-hidden bg-cover bg-center flex items-center min-h-[250px]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="relative z-10 p-8 max-w-md">
            <h1 className="text-2xl md:text-3xl font-extrabold text-primary-foreground leading-tight mb-4">
              Buy Gift Cards with Crypto from the World's Trusted Marketplace
            </h1>
            <ul className="space-y-2 mb-6">
              {["10+ years of experience", "1M+ cards sold monthly", "Industry-low fees"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Explore catalogue <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Featured brands grid */}
        <div className="grid grid-cols-2 gap-3">
          {featuredBrands.map((brand) => (
            <a
              key={brand.name}
              href="#"
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-primary-foreground font-semibold text-sm flex items-center gap-1">
                {brand.name} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
