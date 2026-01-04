import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import portraitImage from "@/assets/osteopath-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={portraitImage}
                alt="Anaïs Parmentier - Ostéopathe"
                className="w-full h-[600px] object-cover object-top"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-hover">
              <div className="text-center">
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm opacity-90">Années d'expérience</p>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sage-light rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                À propos
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
                Anaïs Parmentier
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                Ostéopathe D.O.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Passionnée par le corps humain et ses capacités d'auto-guérison,
                j'ai choisi l'ostéopathie pour accompagner mes patients vers un
                mieux-être durable.
              </p>
              <p>
                Diplômée d'une formation de 5 ans en ostéopathie, je pratique une
                approche douce et globale, considérant chaque patient dans son
                ensemble : physique, émotionnel et environnemental.
              </p>
              <p>
                Mon objectif est de vous aider à retrouver votre équilibre
                naturel et de vous accompagner sur le chemin du bien-être.
              </p>
            </div>

            {/* Qualities */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-sage-light/50 rounded-xl">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Diplômée D.O.
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-sage-light/50 rounded-xl">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Agréée RNCP
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-sage-light/50 rounded-xl">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Approche douce
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-sage-light/50 rounded-xl">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Soins personnalisés
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
