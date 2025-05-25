import React from 'react';
import {ParkingCircle, Shirt, BedDouble, Smartphone } from 'lucide-react';

interface InfoSectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, icon: Icon, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-3">
      <Icon className="w-7 h-7 text-primary mr-3" />
      <h2 className="text-2xl font-serif text-foreground">{title}</h2>
    </div>
    <div className="text-foreground/80 space-y-2">
      {children}
    </div>
  </div>
);


const PracticalInfo: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-serif text-primary text-center mb-12">Informations Pratiques</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto md:whitespace-nowrap">
        Quelques détails pour vous aider à préparer votre venue et profiter pleinement de la fête.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <InfoSection title="Dress Code" icon={Shirt}>
          <p className="text-justify">Nous vous invitons à vous parer de vos plus beaux atours ! 
          Les tenues de cérémonie sont vivement conseillées. Évidemment, le blanc est réservé aux stars du jour !
          </p>
        </InfoSection>
        <InfoSection title="Parking" icon={ParkingCircle}>
          <p className="text-justify">Un parking sera disponible à proximité du lieu de réception. Suivez la signalétique. 
            Pour la mairie, veuillez privilégier les parkings publics environnants.
          </p>
        </InfoSection>
        <InfoSection title="Flash info !" icon={Smartphone}>
          <p className="text-justify" style={{ fontWeight: 'bold' }}>Cérémonies déconnectées</p>
          <p className="text-justify">Pour pouvoir pleinement profiter des cérémonies, 
            les téléphones et appareils photo personnels devront être rangés! 
            Un photographe et un vidéaste seront présents pour immortaliser tous les moments importants. 
            Ne vous inquiétez pas, l'ensemble des photos et vidéos seront disponibles après le mariage !</p>
        </InfoSection>
        <InfoSection title="Hébergements" icon={BedDouble}>
          <p className="text-justify">Pour nos invités venant de loin, voici quelques suggestions d'hôtels et chambres d'hôtes à proximité :</p>
          <ul className="list-disc list-inside ml-4">
            <li>[Nom Hôtel 1 + lien/contact]</li>
            <li>[Nom Chambre d'hôte 1 + lien/contact]</li>
            <li>Pensez également à AirBnB.</li>
          </ul>
          <p className="text-justify">Nous vous conseillons de réserver rapidement.</p>
        </InfoSection>
      </div>
    </div>
  );
};

export default PracticalInfo;
