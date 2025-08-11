import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const RSVP: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<any | null>(null);
  const [family, setFamily] = useState<any[]>([]);
  const [loadingFamily, setLoadingFamily] = useState(false);
  const [familyError, setFamilyError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearchResults([]);
    setHasSearched(false);
    setSelectedGuest(null);
    setFamily([]);
    setFamilyError('');
    
    try {
      console.log('Test de connexion Supabase...');
      
      // Test 1: Vérifier que la table existe
      const { data: tableInfo, error: tableError } = await supabase
        .from('guests')
        .select('id')
        .limit(1);
      
      console.log('Test table guests:', tableInfo);
      console.log('Erreur table:', tableError);
      
      // Test 2: Compter le nombre total d'enregistrements
      const { count, error: countError } = await supabase
        .from('guests')
        .select('*', { count: 'exact', head: true });
      
      console.log('Nombre total d\'enregistrements:', count);
      console.log('Erreur count:', countError);
      
      // Test 3: Recherche simple
      const { data, error: searchError } = await supabase
        .from('guests')
        .select('*')
        .ilike('first_name', `%${firstName}%`);
      
      console.log('Résultats recherche:', data);
      console.log('Erreur recherche:', searchError);
      
      if (searchError) {
        setError(`Erreur: ${searchError.message}`);
        return;
      }
      
      if (data && data.length > 0) {
        // Formater les résultats comme attendu
        const formatted = data.map(guest => ({
          id: guest.id,
          display_name: `${guest.first_name} ${guest.last_name}`,
          family_group_id: guest.family_group_id
        }));
        
        setSearchResults(formatted);
        setHasSearched(true);
      } else {
        setSearchResults([]);
        setHasSearched(true);
      }
      
    } catch (err) {
      console.error('Erreur détaillée:', err);
      setError(`Erreur: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectGuest = async (guest: any) => {
    setSelectedGuest(guest);
    setLoadingFamily(true);
    setFamily([]);
    setFamilyError('');
    
    try {
      console.log('Chargement famille pour:', guest.display_name, 'Groupe:', guest.family_group_id);
      
      // Récupérer tous les membres de la famille
      const { data, error: familyError } = await supabase
        .from('guests')
        .select('*')
        .eq('family_group_id', guest.family_group_id);
      
      if (familyError) {
        console.error('Erreur famille Supabase:', familyError);
        setFamilyError(`Erreur: ${familyError.message}`);
        return;
      }
      
      console.log('Membres de la famille:', data);
      setFamily(data || []);
      
    } catch (err) {
      console.error('Erreur famille:', err);
      setFamilyError('Erreur lors du chargement de la famille.');
    } finally {
      setLoadingFamily(false);
    }
  };

  const handleRSVP = (memberId: number, status: 'present' | 'absent') => {
    console.log(`Membre ${memberId}: ${status === 'present' ? 'Présent' : 'Absent'}`);
    // Ici on pourra ajouter la logique pour sauvegarder en base de données
  };

  return (
    <div className="animate-fade-in-up text-center px-2">
      <h1 className="text-4xl font-serif text-primary mb-12">RSVP</h1>
      <div className="w-full max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <p className="text-lg text-foreground/90 mb-8 whitespace-normal break-words">
          Merci de nous confirmer votre présence avant le 15 avril 2026.
        </p>
        <form onSubmit={handleSearch} className="mb-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-left text-foreground/80">Prénom</label>
            <input
              type="text"
              name="name"
              id="name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-primary focus:border-primary transition"
              placeholder="Votre prénom"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 transition"
            disabled={loading}
          >
            {loading ? 'Recherche...' : 'Rechercher'}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
        
        {/* Résultats de recherche */}
        {hasSearched && !selectedGuest && (
          <div className="mt-6">
            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-3">
                <p className="mb-2 text-foreground/80 text-sm">Sélectionnez votre nom :</p>
                {searchResults.map((guest) => (
                  <button
                    key={guest.id}
                    className="w-full text-left px-4 py-3 rounded-md border border-primary bg-primary/5 hover:bg-primary/10 transition text-primary font-medium shadow-sm cursor-pointer"
                    onClick={() => handleSelectGuest(guest)}
                  >
                    {guest.display_name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-foreground/60 text-sm">Aucun invité trouvé avec ce prénom.</div>
            )}
          </div>
        )}
        
        {/* Affichage de la famille */}
        {selectedGuest && (
          <div className="mt-8 text-left">
            <h2 className="text-xl font-serif text-primary mb-4 text-center">Votre famille</h2>
            {loadingFamily ? (
              <div className="text-center text-foreground/80">Chargement...</div>
            ) : familyError ? (
              <div className="text-red-500 text-center">{familyError}</div>
            ) : (
              <ul className="space-y-3">
                {family.map((member: any) => (
                  <li key={member.id} className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="font-medium text-primary text-center sm:text-left">
                        {member.first_name} {member.last_name}
                      </span>
                      <div className="flex gap-2 justify-center sm:justify-end">
                        <button
                          onClick={() => handleRSVP(member.id, 'present')}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm font-medium shadow-sm"
                        >
                          Présent
                        </button>
                        <button
                          onClick={() => handleRSVP(member.id, 'absent')}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition text-sm font-medium shadow-sm"
                        >
                          Absent
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVP;
