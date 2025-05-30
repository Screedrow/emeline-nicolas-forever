import React, { useState } from 'react';

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
      const res = await fetch('/api/search-guest.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName }),
      });
      const data = await res.json();
      if (res.ok) {
        setSearchResults(data);
        setHasSearched(true);
      } else {
        setError(data.error || 'Erreur lors de la recherche.');
      }
    } catch (err) {
      setError('Erreur réseau.');
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
      const res = await fetch('/api/get-family.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ familyGroupId: guest.family_group_id }),
      });
      const data = await res.json();
      if (res.ok) {
        setFamily(data);
      } else {
        setFamilyError(data.error || 'Erreur lors de la récupération de la famille.');
      }
    } catch (err) {
      setFamilyError('Erreur réseau.');
    } finally {
      setLoadingFamily(false);
    }
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
              <ul className="space-y-2">
                {family.map((member: any) => (
                  <li key={member.id} className="p-3 rounded bg-primary/5 border border-primary/10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-primary">{member.first_name} {member.last_name}</span>
                    {/* Ici on ajoutera les options RSVP pour chaque membre à l'étape suivante */}
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
