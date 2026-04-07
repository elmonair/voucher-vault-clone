import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  slug: string;
  subcategories?: { label: string; slug: string }[];
};

const navItems: NavItem[] = [
  {
    label: "IPTV",
    slug: "iptv",
    subcategories: [
      { label: "Strong 8K IPTV", slug: "strong-8k" },
      { label: "Trex IPTV", slug: "trex" },
      { label: "Neo IPTV", slug: "neo" },
      { label: "Crystal IPTV", slug: "crystal" },
      { label: "Magnum IPTV", slug: "magnum" },
    ],
  },
  {
    label: "Subscriptions",
    slug: "subscriptions",
    subcategories: [
      { label: "Spotify Premium", slug: "spotify" },
      { label: "YouTube Premium", slug: "youtube" },
      { label: "Netflix Premium", slug: "netflix" },
      { label: "Shahid VIP", slug: "shahid" },
    ],
  },
  {
    label: "Gift Cards",
    slug: "gift-cards",
    subcategories: [
      { label: "PlayStation", slug: "playstation" },
      { label: "Xbox", slug: "xbox" },
      { label: "Nintendo", slug: "nintendo" },
      { label: "Steam", slug: "steam" },
      { label: "Google Play", slug: "google-play" },
    ],
  },
  {
    label: "PlayStation",
    slug: "playstation",
    subcategories: [
      { label: "PS Plus", slug: "ps-plus" },
      { label: "PS Store Cards", slug: "ps-store" },
      { label: "PS Now", slug: "ps-now" },
    ],
  },
  {
    label: "Xbox",
    slug: "xbox",
    subcategories: [
      { label: "Xbox Game Pass", slug: "game-pass" },
      { label: "Xbox Live Gold", slug: "live-gold" },
      { label: "Xbox Gift Cards", slug: "gift-cards" },
    ],
  },
  {
    label: "Nintendo",
    slug: "nintendo",
    subcategories: [
      { label: "Nintendo eShop", slug: "eshop" },
      { label: "Nintendo Online", slug: "online" },
    ],
  },
  {
    label: "PC Games",
    slug: "pc-games",
    subcategories: [
      { label: "Steam Keys", slug: "steam" },
      { label: "Origin Keys", slug: "origin" },
      { label: "Ubisoft Keys", slug: "ubisoft" },
      { label: "Battle.net", slug: "battlenet" },
    ],
  },
  {
    label: "Top Ups",
    slug: "top-ups",
    subcategories: [
      { label: "PUBG UC", slug: "pubg" },
      { label: "Free Fire Diamonds", slug: "free-fire" },
      { label: "Fortnite V-Bucks", slug: "fortnite" },
      { label: "Roblox Robux", slug: "roblox" },
    ],
  },
  {
    label: "Deals",
    slug: "deals",
    subcategories: [
      { label: "Flash Sales", slug: "flash-sales" },
      { label: "Weekly Deals", slug: "weekly-deals" },
      { label: "Under $10", slug: "under-10" },
      { label: "Bundles", slug: "bundles" },
    ],
  },
];

/* ── Desktop dropdown item ── */
const NavDropdownItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const close = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <Link
        to={`/category/${item.slug}`}
        className={`px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground ${isOpen ? "text-foreground" : ""}`}
      >
        {item.label}
        {item.subcategories && (
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        )}
      </Link>
      {isOpen && item.subcategories && (
        <div className="absolute left-0 top-full mt-1 z-[60] min-w-[180px] rounded-lg border border-border/40 bg-card/95 backdrop-blur-md shadow-xl py-1.5">
          {item.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              to={`/category/${item.slug}/${sub.slug}`}
              className="block px-3.5 py-2 text-[13px] text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Mobile sidebar ── */
const MobileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 left-0 z-[80] h-full w-72 bg-card border-r border-border shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">B</span>
            </div>
            <span className="font-bold text-foreground text-sm">BuySell Vouchers</span>
          </Link>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-65px)] py-2">
          {navItems.map((item) => (
            <div key={item.slug}>
              {item.subcategories ? (
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={() => toggleExpand(item.slug)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      expandedSlug === item.slug ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={`/category/${item.slug}`}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}

              {item.subcategories && expandedSlug === item.slug && (
                <div className="bg-secondary/30">
                  {item.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/category/${item.slug}/${sub.slug}`}
                      className="block px-8 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      onClick={onClose}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ── Header ── */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground shrink-0"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-bold text-foreground text-sm">BuySell</span>
              <br />
              <span className="font-bold text-foreground text-sm">Vouchers</span>
            </div>
          </Link>

          {/* Search */}
          <div className={`${searchOpen ? "flex" : "hidden"} md:flex flex-1 max-w-xl`}>
            <div className="relative w-full">
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
          <div className="flex items-center gap-2 shrink-0">
            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
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

        {/* Desktop Navigation */}
        <nav className="hidden md:block max-w-7xl mx-auto px-4 pb-2">
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <NavDropdownItem key={item.slug} item={item} />
            ))}
          </div>
        </nav>
      </header>

      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
