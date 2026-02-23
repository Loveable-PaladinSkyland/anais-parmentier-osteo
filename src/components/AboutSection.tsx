import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import portraitImage from "@/assets/osteopath-portrait.jpg";
import { personalData } from "@/data/personalData";

const iconMap = {
  GraduationCap,
  Award,
  Heart,
  Sparkles
};

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
                alt={`${personalData.professional.name} - Ostéopathe`}
                className="w-full h-[600px] object-cover object-top"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-hover">
              <div className="text-center">
                <p className="font-display text-3xl font-bold">{personalData.professional.experience}</p>
                <p className="text-sm opacity-90">{personalData.professional.experienceLabel}</p>
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
                {personalData.professional.name}
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                {personalData.professional.title}
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{personalData.about.introduction}</p>
              <p>{personalData.about.formation}</p>
              <p>{personalData.about.objective}</p>
            </div>

            {/* Qualities */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {personalData.qualities.map((quality, index) => {
                const IconComponent = iconMap[quality.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-sage-light/50 rounded-xl">
                    <IconComponent className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {quality.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
