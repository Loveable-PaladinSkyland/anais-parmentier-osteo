import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Calendar } from "lucide-react";
import { personalData } from "@/data/personalData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
            Prenez rendez-vous
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Je vous accueille dans mon cabinet pour une consultation
            personnalisée. N'hésitez pas à me contacter pour toute question.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-soft">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Téléphone
                </h3>
                <p className="text-muted-foreground mb-2">
                  Pour prendre rendez-vous ou toute question
                </p>
                <a
                  href={`tel:${personalData.contact.phone}`}
                  className="text-primary font-medium hover:underline"
                >
                  {personalData.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-soft">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Email
                </h3>
                <p className="text-muted-foreground mb-2">
                  Pour toute demande d'information
                </p>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {personalData.contact.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-soft">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Adresse du cabinet
                </h3>
                <p className="text-muted-foreground">
                  {personalData.contact.address.street}<br />
                  {personalData.contact.address.city}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-soft">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Horaires
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Lundi - Vendredi : {personalData.practice.schedule.mondayFriday}</p>
                  <p>Samedi : {personalData.practice.schedule.saturday}</p>
                  <p>Dimanche : {personalData.practice.schedule.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div
            className="bg-primary rounded-3xl p-10 text-primary-foreground flex flex-col justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-8">
              <Calendar className="w-8 h-8" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Réservez votre consultation
            </h3>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Première consultation ou suivi, je vous accueille dans un cadre
              chaleureux pour prendre soin de vous. La consultation dure environ
              {personalData.practice.consultationDuration}.
            </p>

            <div className="space-y-4 mb-8">
              {Object.values(personalData.practice.consultationTypes).map((consultation, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>{consultation.name} : {consultation.price}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="xl"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href={`tel:${personalData.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Appeler pour réserver
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
