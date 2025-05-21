
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const emailMariés = "emeline.nicolas.mariage@example.com"; // Replace with actual email

  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">Contactez-nous</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-foreground/90 mb-6">
          Pour toute question, n'hésitez pas à nous contacter ou à joindre nos témoins.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary mr-3" />
            <a href={`mailto:${emailMariés}`} className="text-foreground hover:text-primary hover:underline">
              {emailMariés}
            </a>
          </div>
          <div className="flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary mr-3" />
            <span className="text-foreground">Témoin 1 (Nom) : [Numéro]</span>
          </div>
          <div className="flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary mr-3" />
            <span className="text-foreground">Témoin 2 (Nom) : [Numéro]</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Nous avons hâte de vous lire ou de vous entendre !
        </p>
        {/* Optional: Add a simple contact form later if needed */}
      </div>
    </div>
  );
};

export default Contact;
