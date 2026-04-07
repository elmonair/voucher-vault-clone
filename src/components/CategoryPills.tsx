import { Gamepad2, Film, ShoppingBag, UtensilsCrossed, Plane, CreditCard, Dumbbell, Monitor, Home, Sparkles, BookOpen, Smartphone } from "lucide-react";

const categories = [
  { name: "Gaming", icon: Gamepad2 },
  { name: "Entertainment", icon: Film },
  { name: "Retail", icon: ShoppingBag },
  { name: "Food", icon: UtensilsCrossed },
  { name: "Travel", icon: Plane },
  { name: "Prepaid", icon: CreditCard },
  { name: "Sport", icon: Dumbbell },
  { name: "Electronics", icon: Monitor },
  { name: "Home", icon: Home },
  { name: "Beauty", icon: Sparkles },
  { name: "Ebooks", icon: BookOpen },
  { name: "Mobile", icon: Smartphone },
];

const CategoryPills = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all whitespace-nowrap shrink-0"
          >
            <cat.icon className="w-4 h-4" />
            {cat.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryPills;
