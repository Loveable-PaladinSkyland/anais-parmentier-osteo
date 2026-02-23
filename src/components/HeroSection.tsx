import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-treatment.jpg";
import { personalData } from "@/data/personalData";

const HeroSection = () => {
  return <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-light/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Retrouvez votre{" "}
              <span className="text-primary">équilibre</span> et votre{" "}
              <span className="text-primary">bien-être</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {personalData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Prendre rendez-vous
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href={personalData.navigation.services.href}>Découvrir mes services</a>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              {personalData.hero.quickInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{info}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img src={heroImage} alt="Séance d'ostéopathie" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{personalData.professional.patientsCount}</p>
                  <p className="text-sm text-muted-foreground">{personalData.professional.patientsLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;