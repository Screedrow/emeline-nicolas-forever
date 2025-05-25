import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t-2 border-primary py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary-foreground">
        <p className="text-sm">
          &copy; {currentYear} Emeline & Nicolas. Tous droits réservés.
        </p>
        <p className="text-xs mt-1">
          Avec amour et joie !
        </p>
      </div>
    </footer>
  );
};

export default Footer;
