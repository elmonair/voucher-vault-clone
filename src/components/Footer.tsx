const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buyer Protection</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Seller Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AML Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm">Payment Methods</h3>
            <div className="flex flex-wrap gap-2 text-2xl">
              <span title="Bitcoin">₿</span>
              <span title="Ethereum">Ξ</span>
              <span title="USDT">💲</span>
              <span title="Litecoin">Ł</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Pay with cryptocurrency securely
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 BuySellVouchers. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>10+ years of experience</span>
            <span>•</span>
            <span>1M+ cards sold monthly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
