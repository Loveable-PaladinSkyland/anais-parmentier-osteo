export const personalData = {
  // Professional Information
  professional: {
    name: "Fanny Matte",
    title: "Ostéopathe D.O.",
    description: "Ostéopathe D.O. diplômée, je vous accompagne vers un mieux-être durable grâce à une approche douce et personnalisée.",
    experience: "5+",
    experienceLabel: "Années d'expérience",
    patientsCount: "+500",
    patientsLabel: "Patients accompagnés"
  },

  // Contact Information
  contact: {
    phone: "+33600000000",
    phoneDisplay: "06 00 00 00 00",
    email: "contact@fanny-matte-osteo.fr",
    address: {
      street: "123 Rue de la Santé",
      city: "75000 Paris",
      full: "123 Rue de la Santé, 75000 Paris"
    }
  },

  // Practice Information
  practice: {
    consultationDuration: "45 minutes à 1 heure",
    consultationTypes: {
      first: {
        name: "Première consultation",
        price: "60€"
      },
      followUp: {
        name: "Consultation de suivi",
        price: "55€"
      },
      baby: {
        name: "Nourrisson (0-2 ans)",
        price: "55€"
      }
    },
    schedule: {
      mondayFriday: "9h00 - 19h00",
      saturday: "9h00 - 13h00",
      sunday: "Fermé"
    }
  },

  // Professional Qualities
  qualities: [
    {
      icon: "GraduationCap",
      label: "Diplômée D.O."
    },
    {
      icon: "Award",
      label: "Agréée RNCP"
    },
    {
      icon: "Heart",
      label: "Approche douce"
    },
    {
      icon: "Sparkles",
      label: "Soins personnalisés"
    }
  ],

  // About Section Content
  about: {
    introduction: "Passionnée par le corps humain et ses capacités d'auto-guérison, j'ai choisi l'ostéopathie pour accompagner mes patients vers un mieux-être durable.",
    formation: "Diplômée d'une formation de 5 ans en ostéopathie, je pratique une approche douce et globale, considérant chaque patient dans son ensemble : physique, émotionnel et environnemental.",
    objective: "Mon objectif est de vous aider à retrouver votre équilibre naturel et de vous accompagner sur le chemin du bien-être."
  },

  // Navigation Links
  navigation: {
    home: {
      href: "#accueil",
      label: "Accueil"
    },
    services: {
      href: "#services",
      label: "Services"
    },
    about: {
      href: "#apropos",
      label: "À propos"
    },
    contact: {
      href: "#contact",
      label: "Contact"
    }
  },

  // Hero Section
  hero: {
    title: "Retrouvez votre équilibre et votre bien-être",
    subtitle: "Fanny Matte, ostéopathe diplômée, vous accompagne avec des soins personnalisés pour soulager vos douleurs et améliorer votre qualité de vie.",
    quickInfo: [
      "Consultations sur RDV",
      "Tous publics",
      "Urgences acceptées"
    ]
  },

  // Footer
  footer: {
    copyright: "Fanny Matte Ostéopathe. Tous droits réservés.",
    madeWith: "Fait avec ❤️ en France"
  }
};

export type PersonalData = typeof personalData;
