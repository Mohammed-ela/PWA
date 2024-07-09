
# Momo Dev Frontend

Bienvenue dans le projet frontend de Momo Dev, une application PWA (Progressive Web App) pour apprendre le développement web. Ce projet utilise Ionic Vue pour fournir une expérience utilisateur riche et réactive.

## Table des matières

- [Aperçu](#aperçu)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Dépendances](#dépendances)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Aperçu

Momo Dev est une application PWA conçue pour aider les développeurs à apprendre et à améliorer leurs compétences en développement web. L'application offre une interface utilisateur conviviale avec des fonctionnalités interactives pour une meilleure expérience d'apprentissage.

## Installation

Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

### Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur) ou yarn (v1 ou supérieur)

### Étapes

1. Clonez le dépôt :
    \`\`\`bash
    git clone https://github.com/votre-utilisateur/momo-dev-frontend.git
    cd momo-dev-frontend
    \`\`\`

2. Installez les dépendances :
    \`\`\`bash
    npm install
    \`\`\`
    ou
    \`\`\`bash
    yarn install
    \`\`\`

## Configuration

Assurez-vous que les configurations nécessaires sont correctement définies. Le fichier de configuration principal pour l'API est \`axios.js\`.

\`\`\`javascript
// axios.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
\`\`\`

## Démarrage

Pour démarrer l'application localement, utilisez la commande suivante :

\`\`\`bash
npm run serve
\`\`\`
ou
\`\`\`bash
yarn serve
\`\`\`

L'application sera accessible à l'adresse \`http://localhost:8080\`.

## Structure du projet

Voici un aperçu de la structure des fichiers principaux du projet :

\`\`\`
.
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── views
│   │   └── App.vue
│   ├── main.js
│   ├── router.js
│   ├── store.js
│   └── axios.js
└── package.json
\`\`\`

### Fichiers importants

- **index.html** : Le fichier HTML principal pour l'application.
- **App.vue** : Le composant racine de l'application Vue.
- **main.js** : Le point d'entrée principal de l'application.
- **axios.js** : Configuration de l'instance Axios pour les requêtes API.
- **store.js** : Configuration de Pinia pour la gestion de l'état global.

## Dépendances

Le projet utilise les dépendances suivantes :

- Vue 3
- Ionic Vue
- Vue Router
- Pinia (gestion de l'état)
- Axios (pour les requêtes HTTP)

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### \`npm run serve\`

Lance l'application en mode développement.
Ouvrez [http://localhost:8080](http://localhost:8080) pour la voir dans le navigateur.

### \`npm run build\`

Construit l'application pour la production dans le dossier \`dist\`.
Il regroupe correctement Vue en mode production et optimise la build pour de meilleures performances.

### \`npm run lint\`

Analyse et corrige les fichiers de code source en utilisant ESLint.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, veuillez soumettre une pull request ou ouvrir une issue sur GitHub.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
