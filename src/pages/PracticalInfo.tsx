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
            <li><a className="hover:text-primary transition-colors" href="https://www.airbnb.fr/rooms/1233833156953526425?adults=1&children=0&enable_m3_private_room=true&infants=0&location=La%20Magdelaine-sur-Tarn%2C%20France&pets=0&search_mode=regular_search&check_in=2024-10-04&check_out=2024-10-06&source_impression_id=p3_1727334611_P3UQgsyDJQULXCyg&previous_page_section_name=1001&federated_search_id=7e13ce11-1161-49d0-bd56-6a85ba43881a" target='_blank' rel="noopener noreferrer">Loft pour 8 personnes</a></li>
            <li><a className="hover:text-primary transition-colors" href="https://www.airbnb.fr/rooms/43876244?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-11-01&check_out=2024-11-03&source_impression_id=p3_1727334790_P3fW3rGsgGyK3A6R&previous_page_section_name=1000&federated_search_id=bcaa8d7a-5750-4999-b913-4f1fde54e944" target='_blank' rel="noopener noreferrer">Domaine des Jammetous (16 personnes)</a></li>
            <li>Autres adresses à venir...</li>
          </ul>
          <p className="text-justify">Nous vous conseillons de réserver rapidement.</p>
        </InfoSection>
      </div>
    </div>
  );
};

export default PracticalInfo;
