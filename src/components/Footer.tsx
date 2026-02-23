import { Heart } from "lucide-react";
import { personalData } from "@/data/personalData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              {personalData.professional.name}
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {personalData.professional.description}
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
                  href={personalData.navigation.home.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  {personalData.navigation.home.label}
                </a>
              </li>
              <li>
                <a
                  href={personalData.navigation.services.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  {personalData.navigation.services.label}
                </a>
              </li>
              <li>
                <a
                  href={personalData.navigation.about.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  {personalData.navigation.about.label}
                </a>
              </li>
              <li>
                <a
                  href={personalData.navigation.contact.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                >
                  {personalData.navigation.contact.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>{personalData.contact.address.full}</li>
              <li>
                <a href={`tel:${personalData.contact.phone}`} className="hover:text-primary-foreground transition-smooth">
                  {personalData.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="hover:text-primary-foreground transition-smooth"
                >
                  {personalData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} {personalData.footer.copyright}
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            {personalData.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
