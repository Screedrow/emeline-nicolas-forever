# Composant RSVP - Site de Mariage

## Description
Le composant RSVP permet aux invités de confirmer leur présence au mariage en recherchant leur nom et en sélectionnant leur statut de présence.

## Fonctionnalités

### 1. Recherche d'invité
- Champ de saisie pour le prénom
- Recherche en temps réel dans la base de données Supabase
- Affichage des résultats sous forme de menu déroulant cliquable

### 2. Affichage de la famille
- Une fois l'invité sélectionné, affichage de tous les membres de sa famille
- Chaque membre a son nom affiché avec deux boutons d'action

### 3. Confirmation de présence
- Bouton "Présent" (vert) pour confirmer la présence
- Bouton "Absent" (rouge) pour décliner l'invitation
- Pour l'instant, les actions sont loggées dans la console

## Structure des fichiers

```
src/
├── components/
│   └── RSVP.tsx          # Composant principal RSVP
└── pages/api/
    ├── search-guest.js    # API de recherche d'invité
    └── get-family.js      # API de récupération de la famille
```

## API

### `/api/search-guest.js`
- **Méthode** : POST
- **Paramètres** : `{ firstName: string }`
- **Retour** : Liste des invités avec `id`, `display_name`, `family_group_id`

### `/api/get-family.js`
- **Méthode** : POST
- **Paramètres** : `{ familyGroupId: number }`
- **Retour** : Liste des membres de la famille

## États du composant

- `firstName` : Prénom saisi par l'utilisateur
- `searchResults` : Résultats de la recherche
- `loading` : État de chargement de la recherche
- `error` : Messages d'erreur
- `hasSearched` : Indique si une recherche a été effectuée
- `selectedGuest` : Invité sélectionné
- `family` : Membres de la famille
- `loadingFamily` : État de chargement de la famille
- `familyError` : Erreurs liées à la famille

## Design

- Interface responsive avec Tailwind CSS
- Boutons avec couleurs sémantiques (vert pour présent, rouge pour absent)
- Animations et transitions fluides
- Design clair et moderne

## Utilisation

1. L'utilisateur saisit son prénom
2. Il clique sur "Rechercher"
3. Il sélectionne son nom dans la liste des résultats
4. Il voit tous les membres de sa famille
5. Il clique sur "Présent" ou "Absent" pour chaque membre

## Prochaines étapes

- Ajouter la sauvegarde des réponses en base de données
- Ajouter des confirmations visuelles
- Gérer les cas d'erreur plus spécifiques
- Ajouter des validations supplémentaires
