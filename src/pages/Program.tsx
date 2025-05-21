
import React from 'react';
import { CalendarCheck2, MapPin, GlassWater, Utensils, Moon } from 'lucide-react'; // Example icons

interface EventItemProps {
  time: string;
  title: string;
  description: string;
  location?: string;
  locationLink?: string;
  icon: React.ElementType;
}

const EventItem: React.FC<EventItemProps> = ({ time, title, description, location, locationLink, icon: Icon }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0 mt-1">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <div>
      <p className="text-sm font-semibold text-primary">{time}</p>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-foreground/80 mb-2">{description}</p>
      {location && (
        <div className="flex items-center text-sm text-foreground/70">
          <MapPin className="w-4 h-4 mr-1 text-primary/80" />
          {locationLink ? (
            <a href={locationLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
              {location}
            </a>
          ) : (
            location
          )}
        </div>
      )}
    </div>
  </div>
);

const Program: React.FC = () => {
  const events = [
    {
      time: "15:00",
      title: "Cérémonie Civile",
      description: "Union à la mairie de [Ville].",
      location: "Mairie de [Ville], [Adresse]",
      locationLink: "#", // Replace with actual Google Maps link
      icon: CalendarCheck2,
    },
    {
      time: "17:00",
      title: "Vin d'Honneur",
      description: "Célébrons ensemble avec un verre à [Lieu du Vin d'Honneur].",
      location: "[Lieu du Vin d'Honneur], [Adresse]",
      locationLink: "#",
      icon: GlassWater,
    },
    {
      time: "19:00",
      title: "Réception & Dîner",
      description: "Place au dîner et à la fête jusqu'au bout de la nuit !",
      location: "[Lieu de Réception], [Adresse]",
      locationLink: "#",
      icon: Utensils,
    },
    {
      time: " lendemain - 11:00",
      title: "Brunch Convivial",
      description: "Pour ceux qui le souhaitent, prolongeons les festivités autour d'un brunch.",
      location: "[Lieu du Brunch], [Adresse]",
      locationLink: "#",
      icon: Moon, // Using Moon for "next day" / evening before
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-serif text-primary text-center mb-12">Programme du Mariage</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Voici le déroulement de cette journée spéciale. Nous avons hâte de la partager avec vous !
      </p>
      
      <div className="space-y-8">
        {events.map((event) => (
          <EventItem key={event.title} {...event} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">Intégration Google Maps</h2>
        <p className="text-foreground/80 mb-4">
          Cliquez sur les adresses pour voir les lieux sur Google Maps (liens à venir).
          Pour l'instant, voici un exemple de carte intégrée :
        </p>
        <div className="aspect-w-16 aspect-h-9 bg-secondary rounded-lg shadow-md overflow-hidden">
          {/* Replace with actual Google Maps embed iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625692566!2d2.292292615674507!3d48.8583700792874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e29641f06e9%3A0x73236bd1c538f988!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1678886560000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Exemple de carte Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Program;
