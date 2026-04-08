import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryPills from "@/components/CategoryPills";
import PopularCategories from "@/components/PopularCategories";
import PromotedProducts from "@/components/PromotedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <PopularCategories />
      <PromotedProducts />
      <Footer />
    </div>
  );
};

export default Index;
