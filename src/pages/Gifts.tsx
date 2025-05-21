
import React from 'react';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gifts: React.FC = () => {
  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">Liste de Cadeaux</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
        <p className="text-lg text-foreground/90 mb-4">
          Votre présence est le plus beau des cadeaux ! 
        </p>
        <p className="text-foreground/80 mb-8">
          Si vous souhaitez néanmoins nous témoigner votre affection par une attention, 
          vous pouvez participer à notre voyage de noces ou consulter notre liste de mariage.
        </p>
        <div className="space-y-4">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Accéder à notre cagnotte Leetchi (Exemple)
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Voir notre liste de mariage (Exemple)
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Les liens seront activés prochainement. Merci infiniment !
        </p>
      </div>
    </div>
  );
};

export default Gifts;
