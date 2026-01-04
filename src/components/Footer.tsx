import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Anaïs Parmentier
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Ostéopathe D.O. diplômée, je vous accompagne vers un mieux-être
              durable grâce à une approche douce et personnalisée.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>123 Rue de la Santé, 75000 Paris</li>
              <li>
                <a href="tel:+33600000000" className="hover:text-primary-foreground transition-smooth">
                  06 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@anais-parmentier-osteo.fr"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  contact@anais-parmentier-osteo.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Anaïs Parmentier Ostéopathe. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-destructive" /> en France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
