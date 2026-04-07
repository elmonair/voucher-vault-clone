import { ChevronRight } from "lucide-react";
import catPlaystation from "@/assets/cat-playstation.jpg";
import catValorant from "@/assets/cat-valorant.jpg";
import catXbox from "@/assets/cat-xbox.jpg";
import catUber from "@/assets/cat-uber.jpg";
import catSpotify from "@/assets/cat-spotify.jpg";
import catNetflix from "@/assets/cat-netflix.jpg";
import catNintendo from "@/assets/cat-nintendo.jpg";
import catFortnite from "@/assets/cat-fortnite.jpg";
import catAmazon from "@/assets/cat-amazon.jpg";
import catGoogleplay from "@/assets/cat-googleplay.jpg";
import catRiotaccess from "@/assets/cat-riotaccess.jpg";
import catRazergold from "@/assets/cat-razergold.jpg";

const popularCategories = [
  { name: "PlayStation", image: catPlaystation },
  { name: "Valorant", image: catValorant },
  { name: "Xbox", image: catXbox },
  { name: "Riot Access", image: catRiotaccess },
  { name: "Uber", image: catUber },
  { name: "Razer Gold", image: catRazergold },
  { name: "Spotify", image: catSpotify },
  { name: "Netflix", image: catNetflix },
  { name: "Nintendo", image: catNintendo },
  { name: "Fortnite", image: catFortnite },
  { name: "Amazon", image: catAmazon },
  { name: "Google Play", image: catGoogleplay },
];

const PopularCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-bold text-foreground mb-4">Popular categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {popularCategories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="relative rounded-xl overflow-hidden aspect-[3/2] group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={512}
              height={512}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-primary-foreground font-semibold text-sm flex items-center gap-1">
              {cat.name} <ChevronRight className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
