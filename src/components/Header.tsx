import { Search, User, ChevronDown } from "lucide-react";

const Header = () => {
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
      <nav className="max-w-7xl mx-auto px-4 pb-2">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide text-sm font-medium">
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-foreground">
              All gift cards
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-foreground flex items-center gap-1">
              Categories <ChevronDown className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-foreground flex items-center gap-1">
              Gaming <ChevronDown className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-foreground flex items-center gap-1">
              Brands <ChevronDown className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-primary flex items-center gap-1">
              💚 Official Store
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors whitespace-nowrap text-primary flex items-center gap-1">
              🎁 Promotions
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
