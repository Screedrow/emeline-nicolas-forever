
import React from 'react';
import { Camera } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const placeholderImages = Array(6).fill(null); // Create 6 placeholders

  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">Galerie Photos</h1>
      <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
        Revivez les plus beaux moments de notre histoire et (bientôt) de notre mariage.
        Nous ajouterons les photos de la cérémonie et de la réception ici après le grand jour !
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placeholderImages.map((_, index) => (
          <div 
            key={index} 
            className="aspect-square bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Camera className="w-12 h-12 text-secondary-foreground/50 mb-2" />
            <p className="text-sm text-secondary-foreground">Photo {index + 1}</p>
            <p className="text-xs text-secondary-foreground/70">(Bientôt disponible)</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif text-primary mb-4">Un immense merci !</h2>
        <p className="text-foreground/80">
          Nous tenons à vous remercier chaleureusement pour votre présence, vos sourires, et votre amour. 
          Vous rendez cette journée encore plus spéciale.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
