
import React from 'react';

const RSVP: React.FC = () => {
  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">RSVP</h1>
      <p className="text-lg text-foreground/90 mb-8">
        Merci de nous confirmer votre présence avant le [Date Limite RSVP].
      </p>
      <p className="text-foreground/80">
        Le formulaire de RSVP sera disponible ici très prochainement.
      </p>
      {/* Placeholder for form */}
      <div className="mt-8 p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-serif text-primary mb-6">Formulaire de Réponse (Bientôt)</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-left text-foreground/80">Nom complet</label>
            <input type="text" name="name" id="name" disabled className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed" />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-left text-foreground/80">Nombre de personnes</label>
            <input type="number" name="guests" id="guests" disabled className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed" />
          </div>
          <button type="submit" disabled className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary/50 cursor-not-allowed">
            Envoyer (Indisponible)
          </button>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
