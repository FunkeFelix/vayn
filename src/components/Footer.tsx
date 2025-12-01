import { Link } from "react-router-dom";
import { Mail, Instagram, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Vayn</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die Event-App aus Köln für echte Verbindungen. Vayn verwandelt jeden QR-Code
              am Einlass in neue Gespräche.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/vaynconnect" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:lrc@vaynconnect.de" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/support" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:lrc@vaynconnect.de" 
                  className="hover:text-primary transition-colors"
                >
                  lrc@vaynconnect.de
                </a>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li>
                <Link to="/privacy#impressum" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Lade Vayn herunter</h4>
              <p className="text-muted-foreground">
                Verfügbar für iOS und Android
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary-dark transition-colors"
              >
                <Smartphone className="w-5 h-5" />
                App Store
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary-dark transition-colors"
              >
                <Smartphone className="w-5 h-5" />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Vayn UG (haftungsbeschränkt) · HRB 125570 · Amtsgericht Köln</p>
          <p>Metzer Straße 30 · 50677 Köln · Geschäftsführer: Leon Röll Carrere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
