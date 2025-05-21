
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen, CalendarDays, Gift, Camera, Info, Mail } from 'lucide-react';

const NavLinks = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Notre Histoire', href: '/notre-histoire', icon: BookOpen },
  { name: 'Programme', href: '/programme', icon: CalendarDays },
  { name: 'RSVP', href: '/rsvp', icon: Mail }, // Using Mail for RSVP for now
  { name: 'Cadeaux', href: '/cadeaux', icon: Gift },
  { name: 'Galerie', href: '/galerie', icon: Camera },
  { name: 'Infos Pratiques', href: '/infos-pratiques', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif text-primary hover:text-primary/80 transition-colors">
              Emeline & Nicolas
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:bg-secondary hover:text-secondary-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                <div className="flex items-center">
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
