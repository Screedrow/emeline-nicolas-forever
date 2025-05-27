import React from 'react';

// One of the uploaded images
const coupleImageUrl = "/lovable-uploads/ae48c455-446e-447d-b6a5-18483f8c7cf5.png"; 

const OurStory: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-serif text-primary text-center mb-12">Notre Histoire</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-foreground/90">
          <p className="text-justify">
          Notre aventure a commencé de la manière la plus moderne qui soit : sur Internet! 
          Un simple message sur Facebook, un compliment déguisé sous une passion commune. 
          Ce fut le début d'une belle complicité, de rires partagés et d'une évidence qui grandissait jour après jour.
          </p>
          <p className="text-justify">
          Les étapes se sont enchaînées naturellement, des petites attentions du quotidien aux premiers voyages. 
          Chaque moment passé ensemble renforçait notre amour et notre désir de construire un avenir commun. 
          Très vite, nous avons emménagé ensemble, nous nous sommes pacsés au bout de trois ans, dans l'attente du mariage. 
          Mais Emeline ne se doutait pas que celui-ci allait arriver bien plus vite qu'elle ne l'imaginait!
          </p>
          <p className="text-justify">
          2024, voyage à l'autre bout du monde, dans le pays de l'Oncle Sam : un road trip de rêve! 
          Des boulevards vertigineux de San Francisco aux paysages magnifiques des différents canyons, 
          ce merveilleux séjour s'est terminé sur la plage de Santa Monica, où le panorama utopique laissa place à l'émotion.
          Une séance photo improvisée, comme on en avait déjà fait au fil de notre parcours, s'est transformée en une demande solennelle, 
          bercée par les vagues de l'océan, qui, comme une berceuse, murmuraient à nos oreilles ce que l'amour avait de plus beau à nous offrir. 
          Un moment magique qui a scellé notre promesse et ouvert le chemin vers ce grand jour que nous avons tant hâte de partager avec vous.
          </p>
          <p className="text-justify">
          C'est une immense joie pour nous de bientôt célébrer notre amour, entourés de ceux qui comptent le plus. 
          Merci de faire partie de ce moment précieux et d'être les témoins de ce bonheur.
          </p>
        </div>
        <div>
          <img 
            src={coupleImageUrl} 
            alt="Emeline et Nicolas" 
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px] mx-auto"
          />
           <p className="text-center text-sm text-muted-foreground mt-2">Emeline, prête pour l'aventure !</p>
        </div>
      </div>

      {/* Placeholder for a small gallery or more photos */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif text-primary mb-8">Quelques souvenirs en images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder images */}
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-background aspect-square rounded-lg shadow-md flex items-center justify-center">
              <p className="text-secondary-foreground">Photo {i}</p>
            </div>
          ))}
        </div>
         <p className="mt-4 text-foreground/80">D'autres photos seront ajoutées bientôt !</p>
      </div>
    </div>
  );
};

export default OurStory;
