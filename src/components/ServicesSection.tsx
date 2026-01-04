import { 
  Baby, 
  User, 
  Users, 
  Dumbbell, 
  Heart, 
  Briefcase,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Nourrissons & Enfants",
    description:
      "Accompagnement dès les premiers jours de vie pour les troubles du sommeil, coliques, reflux, et suivi de la croissance.",
  },
  {
    icon: User,
    title: "Adultes",
    description:
      "Soulagement des douleurs dorsales, cervicales, articulaires, maux de tête et troubles fonctionnels.",
  },
  {
    icon: Users,
    title: "Femmes enceintes",
    description:
      "Préparation à l'accouchement, soulagement des douleurs liées à la grossesse et accompagnement post-partum.",
  },
  {
    icon: Dumbbell,
    title: "Sportifs",
    description:
      "Prévention des blessures, optimisation des performances et récupération après l'effort.",
  },
  {
    icon: Heart,
    title: "Seniors",
    description:
      "Maintien de la mobilité, prévention des chutes et amélioration du confort au quotidien.",
  },
  {
    icon: Briefcase,
    title: "Troubles posturaux",
    description:
      "Correction des déséquilibres liés au travail sédentaire, port de charges ou mauvaises postures.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Mes Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
            Une approche globale pour tous
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            L'ostéopathie s'adresse à tous les âges et toutes les conditions.
            Je vous propose un accompagnement personnalisé adapté à vos besoins
            spécifiques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Prendre RDV
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
