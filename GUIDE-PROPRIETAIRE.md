# Guide de la propriétaire — modifier le site avec Codex

Ce document explique le fonctionnement du projet sans demander de connaissances initiales
en développement. Les modifications doivent être relues avant publication.

## Les outils

- Git : historique des modifications.
- GitHub : dépôt distant et Pull Requests.
- GitHub Desktop : interface visuelle pour Git.
- Node.js : environnement nécessaire à Next.js.
- VS Code : éditeur de fichiers.
- Codex : assistant qui peut lire, expliquer et modifier le projet avec des prompts.
- Notion : source possible des informations sur les chiots.

## Première installation

Après avoir reçu l'accès GitHub :

```bash
git clone https://github.com/stephanemalho/pomeranian.git
cd pomeranian
npm install
npm run dev
```

Le site local est ensuite disponible à l'adresse `http://localhost:3000`.

## Prompt conseillé pour commencer

```text
Explique-moi la structure de ce projet sans modifier aucun fichier.
Montre-moi où sont les pages, les données des chiots et les images.
Réponds en français avec des explications simples.
```

## Workflow sécurisé

1. Créer une branche avec Codex ou GitHub Desktop.
2. Décrire précisément la modification.
3. Demander à Codex de ne rien publier automatiquement.
4. Vérifier le résultat dans le navigateur local.
5. Demander un résumé des fichiers modifiés.
6. Faire un commit avec un message clair.
7. Faire un push de la branche.
8. Ouvrir une Pull Request.
9. Faire relire et fusionner uniquement après validation.

## Exemples de demandes

```text
Marque Opale comme réservée. Ne change rien d'autre et ne fais aucun push.
```

```text
Ajoute ces trois photos à la galerie de Luna. Conserve les photos existantes,
vérifie les chemins et montre-moi le résultat avant toute validation.
```

```text
Lis la base Notion Élevage Royal en lecture seule et compare les chiots
avec le site. Ne modifie ni Notion ni le code ; donne-moi uniquement un rapport.
```

## À retenir

- Un commit est une sauvegarde nommée.
- Un push envoie une branche sur GitHub.
- Une Pull Request demande une validation.
- Le build vérifie que le projet peut être construit ; il ne publie pas le site.
- Le déploiement est une étape distincte et doit rester contrôlée.
