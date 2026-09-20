export type Puppy = {
    name: string;
    coat: string;
    color: string;
    sexe: string;
    weight: string;
    parents: string;
    readyDate: string;
    age: string;
    size: string;
    ruler: string;
    pedigree: string;
    description: string;
    health?: string[];
    highlights: string[];
    images: string[];
    linkTo: string;
    isAvailable?: boolean;
    isReserved?: boolean;
};

// Ajouter ici les chiots à mettre en avant lorsqu'une portée est née
// et que des réservations / disponibilités doivent être affichées.
export const puppies: Puppy[] = [
    {
        name: "Nanook",
        coat: "Yeux Bruns",
        color: "grise sable et blanche marquage Husky",
        sexe: "Mâle",
        weight: "2 à 3 kg",
        parents: "Bulle et Legend",
        readyDate: "2026-09-20",
        age: "1 semaines",
        size: "Petite",
        pedigree: "Non LOF couleur exotique",
        ruler: "15 cm",
        description:
            "Nanook est une femelle Poméranien au marquage Husky, rare et unique elle possède une robe grise, nuancée de noir et de sable.",
        highlights: ["Joueuse", "Affectueuse", "Sociable"],
        images: ["/pages/le-spitz-pomeranien/chiots/nanook/nanook.jpeg"],
        linkTo: "https://forms.gle/VXzUR4y1LK4jMDrEA"
    },
    {
        name: "Soren",
        coat: "Yeux Bruns",
        color: "Noir et blanc marquage Husky",
        sexe: "Mâle",
        weight: "2 à 3 kg",
        parents: "Bulle et Legend",
        readyDate: "2026-09-20",
        age: "1 semaines",
        size: "Petit",
        pedigree: "Non LOF couleur exotique",
        ruler: "15 cm",
        description:
            "Soren est un petit mâle à la robe rare Musy noire et blanche",
        highlights: ["Joueuse", "Affectueuse", "Sociable"],
        images: ["/pages/le-spitz-pomeranien/chiots/soren/soren.jpeg"],
        linkTo: "https://forms.gle/VXzUR4y1LK4jMDrEA",
        isReserved: true
    },
    {
        name: "Opale",
        coat: "Yeux Bruns",
        color: "gris sable et noir",
        sexe: "Femelle",
        weight: "2 à 3 kg",
        parents: "Bulle et Legend",
        readyDate: "2026-09-20",
        age: "1 semaines",
        size: "Petit",
        pedigree: "Non LOF couleur exotique",
        ruler: "15 cm",
        description:
            "Opale est une très jolie femelle Poméranie marquage Husky de couleur sable et grise.",
        highlights: ["Joueuse", "Affectueuse", "Sociable"],
        images: ["/pages/le-spitz-pomeranien/chiots/opale/opale.jpeg"],
        linkTo: "https://forms.gle/VXzUR4y1LK4jMDrEA",
    },
    {
        name: "Koda",
        coat: "Yeux Bruns",
        color: "gris et sable",
        sexe: "Mâle",
        weight: "2 à 3 kg",
        parents: "Bulle et Legend",
        readyDate: "2026-09-20",
        age: "1 semaines",
        size: "Petit",
        pedigree: "Non LOF couleur exotique",
        ruler: "15 cm",
        description:
            "Koda est un minuscule mâle de couleur grise, sable et blanche au marquage Husky",
        highlights: ["Joueuse", "Affectueuse", "Sociable"],
        images: ["/pages/le-spitz-pomeranien/chiots/koda/koda.jpeg"],
        linkTo: "https://forms.gle/VXzUR4y1LK4jMDrEA",
    }
];
