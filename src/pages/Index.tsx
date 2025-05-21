import React from 'react';
import Countdown from '@/components/Countdown';
import { Button } from '@/components/ui/button'; // shadcn button
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const heroImageUrl = "https://scontent-cdg4-3.cdninstagram.com/v/t51.29350-15/412281888_1062739884919986_108142507212831925_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-cdg4-3.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QHt5m7vqkFAqO_1EiQHh7s8RF_XOx6vklJdIa0QfDThsKKjc9DLE_ZirPLr-qn0rmk&_nc_ohc=RZU1lPQQZHoQ7kNvwHn3GlR&_nc_gid=vwdIeqykpZtGO3nWDIB-SQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI2NDI2NTQ5OTU3NDc4MTE0NQ%3D%3D.3-ccb7-5&oh=00_AfJ5u5wMQ72maMdsPJ_W7Zm4fOphVwUqPB9a87R5nL6mOA&oe=6833CBA3&_nc_sid=7a9f4b";
  const weddingDate = "2025-10-12T00:00:00"; // Format YYYY-MM-DDTHH:mm:ss

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white relative"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <div className="relative z-10 p-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 tracking-tight">
            Emeline & Nicolas
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            Bienvenue sur le site de notre mariage !
          </p>
          <Link to="/notre-histoire">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Découvrir notre histoire <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Welcome Message & Countdown Section */}
      <section className="py-16 md:py-24 text-center container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 animate-fade-in-up animation-delay-200">
          Nous avons hâte de célébrer avec vous !
        </h2>
        <p className="text-lg text-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Rejoignez-nous pour fêter notre union et partager des moments inoubliables. En attendant le grand jour, voici le compte à rebours :
        </p>
        <Countdown targetDate={weddingDate} />
      </section>

      {/* Call to action for other pages - example for Program */}
      <section className="py-16 md:py-24 bg-secondary w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-secondary-foreground mb-6 animate-fade-in-up">
            Découvrez le Programme
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Consultez les détails de la journée, des lieux de la cérémonie et de la réception.
          </p>
          <Link to="/programme">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Voir le programme <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
