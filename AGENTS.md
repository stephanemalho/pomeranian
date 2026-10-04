# Guide de travail Codex — site Pomeranian

Ce fichier décrit les règles à respecter lorsqu'une personne modifie ce site avec Codex.
Il s'agit de règles de travail et de documentation : elles ne déclenchent aucun build et
ne publient jamais automatiquement le site.

## Avant toute modification

- Vérifier que le dépôt courant est bien `pomeranian`.
- Lire la demande et identifier précisément la page, le chiot, l'image ou le texte concerné.
- Ne pas modifier `main` directement pour une évolution du site : créer une branche dédiée nommée aurelie ou se placer dessus si existante.
- Ne pas inventer d'informations concernant un chiot, sa santé, ses parents, son âge, son prix ou sa disponibilité.
- Demander confirmation si une information est absente, contradictoire ou ambiguë.

## Contenu des chiots

- Les fiches principales sont dans `app/spitz-nain-pomeranien/chiots-disponibles/puppies.ts`.
- Les images publiques sont dans `public/pages/le-spitz-pomeranien/chiots/`.
- Respecter exactement les noms, statuts, dates, parents et textes fournis par la propriétaire.
- `isReserved: true` signifie qu'un chiot est réservé.
- `isAvailable: false` signifie qu'un chiot ne doit plus être affiché dans la liste publique.
- Un chiot réservé n'est pas nécessairement supprimé du site.
- Ne pas modifier plusieurs chiots lorsqu'un seul est demandé.

## Images

- Préserver les images existantes et leurs chemins sauf demande explicite.
- Utiliser un dossier par chiot et des noms de fichiers descriptifs, stables et en minuscules.
- Privilégier la qualité visuelle, l'orientation correcte et des images raisonnablement optimisées.
- Utiliser `npm run convert:webp` pour générer les variantes WebP lorsque c'est nécessaire.
- Vérifier les références avant de renommer ou supprimer une image.
- Ne jamais supprimer un fichier uniquement parce qu'il semble ancien.

## Notion

- Notion peut servir de source de contenu, mais une synchronisation doit d'abord produire un résumé.
- Ne jamais modifier Notion sans demande explicite.
- Ne jamais publier automatiquement une modification venant de Notion.
- Comparer les noms et les statuts avant toute proposition de synchronisation.
- Signaler les photos manquantes, les doublons et les informations contradictoires.

## Vérifications locales

Après une modification de code validée par la propriétaire :

1. vérifier visuellement la page avec `npm run dev` ;
2. lancer `npm run lint` ;
3. lancer `npm run build` avant une Pull Request, si la modification concerne le site ;
4. lancer `git diff --check` ;
5. résumer les fichiers modifiés et les points non vérifiés.

Ces commandes sont des vérifications locales. Elles ne constituent pas un déploiement.
Ne jamais lancer de push, merge ou déploiement sans autorisation explicite.

## Git

- Créer une branche descriptive, par exemple `content/ajout-chiot-luna`.
- Faire des commits petits et compréhensibles.
- Proposer un message de commit en français.
- Ne pas utiliser `git reset --hard`, `git checkout --` ou une suppression massive sans demande explicite.
- Ne pas pousser directement sur `main`.
- Préparer une Pull Request et attendre la validation humaine.
