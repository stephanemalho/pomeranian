---
name: gestion-chiots-pomeranian
description: Modifier avec prudence les fiches et les images des chiots du site Pomeranian.
---

# Skill — gestion des chiots Pomeranian

Ce skill est destiné à la documentation et à l'assistance de la propriétaire. Il ne publie
jamais le site et ne remplace pas une validation humaine.

## Fichiers concernés

- Données : `app/spitz-nain-pomeranien/chiots-disponibles/puppies.ts`
- Images : `public/pages/le-spitz-pomeranien/chiots/`
- Page publique : `app/spitz-nain-pomeranien/chiots-disponibles/page.tsx`

## Ajouter un chiot

0. Demander le lien du notion afin de chercher les informations du site sur le board dédié.
1. Vérifier que le nom n'existe pas déjà.
2. Demander les informations manquantes au lieu de les inventer.
3. Vérifier le sexe, les parents, la date de disponibilité et le statut.
4. Créer un dossier d'images correspondant au nom du chiot en minuscules.
5. Ajouter uniquement les photos fournies ou validées.
6. Ajouter la fiche dans `puppies.ts` sans modifier les autres fiches.
7. Afficher un résumé des changements avant de les considérer comme validés.
8. Proposer un message de commit, sans faire de push.

## Modifier un chiot

- Identifier le chiot par son nom exact.
- Ne modifier que les champs demandés.
- Si le statut change, expliquer la conséquence publique.
- Pour une réservation, utiliser `isReserved: true`.
- Pour ne plus afficher un chiot, utiliser `isAvailable: false` après confirmation.
- Ne jamais supprimer une fiche parce qu'elle est réservée ou vendue sans instruction explicite.

## Remplacer ou ajouter des images

- Confirmer le chiot concerné et le nombre de photos à modifier.
- Conserver les autres images de la galerie.
- Vérifier que chaque chemin commence par `/pages/`.
- Préférer des noms comme `luna-portrait.webp` ou `luna-jardin-01.webp`.
- Ne supprimer une ancienne image qu'après recherche de ses références.
- Utiliser `npm run convert:webp` car une conversion est nécessaire (webp pour les page et jpg pour metadonnées ou og).

## Notion

Pour une demande de synchronisation :

1. lire la base en lecture seule ;
2. filtrer les fiches explicitement destinées au site ;
3. comparer les noms avec `puppies.ts` ;
4. produire un tableau des ajouts, modifications, statuts et photos ;
5. attendre la validation de la propriétaire ;
6. modifier le code seulement après validation.

Ne pas modifier la base Notion et ne pas déployer automatiquement.

## Réponse attendue de Codex

À la fin de chaque intervention, fournir :

- les fichiers modifiés ;
- les changements effectués ;
- les informations non fournies ou à confirmer ;
- les vérifications réalisées ;
- un message de commit proposé ;
- une mention claire si le build, le push ou le déploiement n'ont pas été réalisés.
