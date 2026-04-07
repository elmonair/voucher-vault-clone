import { Search, User, ChevronDown, ChevronRight, Gamepad2, Film, ShoppingBag, UtensilsCrossed, Plane, Trophy, Cpu, Home, Sparkles, BookOpen, Smartphone, CreditCard, Monitor, Download, MoreHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const categories = [
  { icon: Gamepad2, label: "Gaming" },
  { icon: Film, label: "Entertainment" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Plane, label: "Travel" },
  { icon: Trophy, label: "Sport" },
  { icon: Cpu, label: "Electronics" },
  { icon: Home, label: "Home" },
  { icon: Sparkles, label: "Beauty" },
  { icon: BookOpen, label: "Ebooks" },
  { icon: Smartphone, label: "Mobile" },
  { icon: CreditCard, label: "Prepaid" },
  { icon: CreditCard, label: "Vcc" },
  { icon: Monitor, label: "Software" },
  { icon: Download, label: "Downloads" },
  { icon: MoreHorizontal, label: "All gift cards" },
];

const iptvItems = ["Strong 8K", "Trex", "Neo 4K", "Magnum", "Crystal"];

const subscriptionItems = [
  "Netflix", "Spotify", "Disney+", "YouTube Premium", "Amazon Prime",
  "HBO Max", "Apple TV+", "Crunchyroll", "DAZN", "Hulu",
];

const giftCardItems = [
  "Amazon", "Apple / iTunes", "Google Play", "Steam", "PlayStation Store",
  "Xbox Store", "Netflix", "Spotify", "Uber", "Walmart",
  "Target", "Visa", "Mastercard", "eBay", "Zalando",
];

const playstationItems = [
  "PS Plus Essential", "PS Plus Extra", "PS Plus Premium",
  "PSN Gift Card $10", "PSN Gift Card $25", "PSN Gift Card $50",
  "PSN Gift Card $100", "PS Now", "PS VR2 Credits",
];

const xboxItems = [
  "Xbox Game Pass Ultimate", "Xbox Game Pass Core", "Xbox Live Gold",
  "Xbox Gift Card $10", "Xbox Gift Card $25", "Xbox Gift Card $50",
  "Xbox Gift Card $100", "EA Play", "Xbox Game Pass PC",
];

const nintendoItems = [
  "Nintendo eShop $10", "Nintendo eShop $20", "Nintendo eShop $35",
  "Nintendo eShop $50", "Nintendo Switch Online", "Nintendo Switch Online Family",
];

const pcGamesItems = [
  "Steam Wallet", "EA App", "Ubisoft Connect", "Epic Games",
  "GOG", "Blizzard Balance", "Riot Points", "Valorant Points",
  "Minecraft Java", "Windows Store",
];

const topUpItems = [
  "PUBG UC", "Free Fire Diamonds", "Mobile Legends Diamonds",
  "Genshin Impact Genesis Crystals", "Roblox Robux", "Fortnite V-Bucks",
  "Clash of Clans Gems", "Brawl Stars Gems", "Coin Master Spins",
];

const dealsItems = [
  "Flash Sales", "Bundle Deals", "Clearance", "Weekly Specials",
  "New Arrivals", "Best Sellers", "Under $10", "Under $25",
];

const gamingTrending = [
  { name: "PUBG", icon: "🎮" },
  { name: "Steam", icon: "🎮" },
  { name: "PlayStation", icon: "🎮" },
  { name: "Xbox", icon: "🎮" },
  { name: "EA Sports FC", icon: "⚽" },
  { name: "Free Fire", icon: "🔥" },
  { name: "Razer Gold", icon: "🎮" },
  { name: "Roblox", icon: "🎮" },
  { name: "Nintendo", icon: "🎮" },
];

const gamingItems = [
  "Valorant (312)", "Fortnite (212)", "Mobile Legends (161)",
  "Riot Access (139)", "League of Legends (136)", "Yalla Ludo (109)",
  "Call of Duty (107)", "Minecraft (97)", "Eneba (89)",
  "PC (72)", "Clash of Clans (71)", "Genshin Impact (65)",
  "EA Sports FC (65)", "Bigo Live (64)", "Nexon Game Card (63)",
  "Blizzard (61)", "Apex Legends (57)", "UniPin (57)",
  "Nintendo eShop (52)", "JAWAKER (49)", "8 Ball Pool (47)",
  "Xbox 360 (46)", "GameStop (41)", "Xbox Game Pass (39)",
  "Grand Theft Auto V (36)", "Kinguin (35)", "ExitLag (35)",
];

const brandsTrending = [
  { name: "Amazon", icon: "📦" },
  { name: "Spotify", icon: "🎵" },
  { name: "Apple", icon: "🍎" },
  { name: "Google Play", icon: "▶️" },
  { name: "Netflix", icon: "🎬" },
  { name: "Visa", icon: "💳" },
  { name: "Walmart", icon: "🛒" },
  { name: "Uber", icon: "🚗" },
];

const brandsItems = [
  "PlayStation Network (PSN) (1485)", "Steam (1133)", "Xbox (998)",
  "Razer Gold (594)", "Roblox (511)", "PUBG (491)",
  "Other (403)", "Valorant (312)", "Free Fire (249)",
  "Rewarble (241)", "PayPal (224)", "Nintendo (220)",
  "Telegram (219)", "Binance (213)", "Fortnite (212)",
  "TikTok (207)", "Windows (189)", "Zalando (179)",
  "Adidas (172)", "H&M (169)", "Mobile Legends (161)",
  "Nike (155)", "Riot Access (139)", "League of Legends (136)",
  "Global Experiences Card (127)", "Lastminute (124)", "LEGO (122)",
];

type DropdownType = "categories" | "gaming" | "brands" | "iptv" | "subscriptions" | "giftcards" | "playstation" | "xbox" | "nintendo" | "pcgames" | "topups" | "deals" | null;

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (type: DropdownType) => setOpenDropdown((prev) => (prev === type ? null : type));

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="font-bold text-foreground text-sm">BuySell</span>
            <br />
            <span className="font-bold text-foreground text-sm">Vouchers</span>
          </div>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-10 pl-4 pr-12 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
              <Search className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-4 h-4" />
            <span>LOG IN / REGISTER</span>
          </button>
          <button className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span>🇬🇧</span>
            <span>ENG / USD</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div ref={dropdownRef} className="relative">
        <nav className="max-w-7xl mx-auto px-4 pb-2">
          <ul className="flex items-center gap-2 overflow-x-auto scrollbar-hide text-sm font-medium">
            {[
              { label: "IPTV", dropdown: "iptv" as DropdownType },
              { label: "Subscriptions", dropdown: "subscriptions" as DropdownType },
              { label: "Gift Cards", dropdown: "giftcards" as DropdownType },
              { label: "PlayStation", dropdown: "playstation" as DropdownType },
              { label: "Xbox", dropdown: "xbox" as DropdownType },
              { label: "Nintendo", dropdown: "nintendo" as DropdownType },
              { label: "PC Games", dropdown: "pcgames" as DropdownType },
              { label: "Top Ups", dropdown: "topups" as DropdownType },
              { label: "Deals", dropdown: "deals" as DropdownType },
            ].map(({ label, dropdown }) => (
              <li key={label}>
                <button
                  onClick={() => dropdown && toggle(dropdown)}
                  className={`px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap flex items-center gap-1 ${openDropdown === dropdown ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {label} <ChevronDown className="w-3 h-3" />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dropdown panels */}
        {openDropdown && (
          <div className="absolute left-0 right-0 bg-card border-b border-border shadow-lg z-50 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {openDropdown === "iptv" && (
                <div className="space-y-1">
                  {iptvItems.map((item) => (
                    <a key={item} href="#" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-2.5 px-3 rounded-lg">
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                      {item}
                    </a>
                  ))}
                </div>
              )}

              {openDropdown === "categories" && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-4">
                  {categories.map(({ icon: Icon, label }) => (
                    <a key={label} href="#" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                      <Icon className="w-4 h-4 shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
              )}

              {(openDropdown === "gaming" || openDropdown === "brands") && (
                <div className="flex gap-8">
                  {/* Trending sidebar */}
                  <div className="w-48 shrink-0 border-r border-border pr-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Trending</p>
                    <div className="space-y-1">
                      {(openDropdown === "gaming" ? gamingTrending : brandsTrending).map((item) => (
                        <a key={item.name} href="#" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5">
                          <span className="text-base">{item.icon}</span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="flex-1 grid grid-cols-3 gap-x-12 gap-y-1.5 content-start">
                    {(openDropdown === "gaming" ? gamingItems : brandsItems).map((item) => (
                      <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 truncate">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
