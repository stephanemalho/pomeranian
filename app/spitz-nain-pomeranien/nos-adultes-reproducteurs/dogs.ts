export type DogImage = {
    src: string;
    alt: string;
};

export type AdultDog = {
    name: string;
    title: string;
    color: string;
    origin: string;
    lineage?: string;
    size: string;
    temperament: string;
    health: string[];
    images: DogImage[];
};

const reproductorBasePath = "/pages/le-spitz-pomeranien/reproducteurs";

const buildDogImages = (
    dogFolder: string,
    imageBaseName: string,
    count: number,
    alt: string
): DogImage[] =>
    Array.from({ length: count }, (_, index) => {
        const imageNumber = String(index + 1).padStart(2, "0");

        return {
            src: `${reproductorBasePath}/${dogFolder}/${imageBaseName}-${imageNumber}.webp`,
            alt: `${alt} - photo ${index + 1}`
        };
    });

export const dogs: AdultDog[] = [
    {
        name: "Inuk",
        title: "INUK - Mâle Spitz nain Poméranien marquage husky",
        color: "Bleue et blanche",
        origin: "Non LOF, couleur exotique",
        size: "19 cm au garrot • 1,4 kg",
        temperament:
            "Inuk est un mâle joueur, attachant, sensible et sociable.",
        health: [
            "Test ADN laboratoire Antagene",
            "Indemne de maladie génétique"
        ],
        images: buildDogImages(
            "inuk",
            "inuk-spitz-nain-pomeranien-male-spitz-nain-pomeranien-marquage-husky-bleu-blanc",
            3,
            "Inuk, mâle Spitz nain Poméranien marquage husky bleu et blanc"
        )
    },
    {
        name: "Bulle",
        title: "BULLE - Femelle Spitz nain Poméranien marquage husky",
        color: "Noire, grise et blanche",
        origin: "Non LOF, couleur exotique",
        size: "22 cm au garrot • 3 kg",
        temperament:
            "Bulle est une femelle très joyeuse, pot de colle, proche de l’humain, sociable et douce.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "bulle",
            "bulle-spitz-nain-pomeranien-femelle-spitz-nain-pomeranien-marquage-husky-noire-grise-blanche",
            2,
            "Bulle, femelle Spitz nain Poméranien marquage husky noire grise et blanche"
        )
    },
    {
        name: "Apache",
        title: "APACHE - Femelle Spitz nain Poméranien marquage husky",
        color: "Grise, noire et blanche",
        origin: "Non LOF, couleur exotique",
        size: "21 cm au garrot • 2,9 kg",
        temperament:
            "Apache est une femelle vive et intelligente, interactive et joueuse. Elle est proche de l’humain et sociable.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "apache",
            "apache-spitz-nain-pomeranien-femelle-spitz-nain-pomeranien-marquage-husky-grise-noire-blanche",
            5,
            "Apache, femelle Spitz nain Poméranien marquage husky grise noire et blanche"
        )
    },
    {
        name: "Willow",
        title: "WILLOW - Femelle Spitz nain Poméranien marquage husky",
        color: "Bleue et blanche",
        origin: "Non LOF, couleur exotique",
        size: "21 cm au garrot • 3 kg",
        temperament:
            "Willow est une femelle douce et observatrice, interactive et joueuse. Elle est câline, proche de l’humain et sociable.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "willow",
            "willow-spitz-nain-pomeranien-femelle-spitz-nain-pomeranien-marquage-husky-bleue-blanche",
            2,
            "Willow, femelle Spitz nain Poméranien marquage husky bleue et blanche"
        )
    },
    {
        name: "Aleu",
        title: "ALEU - Femelle Spitz nain Poméranien marquage husky",
        color: "Grise et blanche",
        origin: "Non LOF, couleur exotique",
        size: "24 cm au garrot • 3,7 kg",
        temperament:
            "Aleu est une femelle vive et intelligente, interactive et joueuse. Elle adore les jeux de balle, elle est proche de l’humain et sociable.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "aleu",
            "aleu-spitz-nain-pomeranien-femelle-spitz-nain-pomeranien-marquage-husky-grise-blanche",
            6,
            "Aleu, femelle Spitz nain Poméranien marquage husky grise et blanche"
        )
    },
    {
        name: "Legend",
        title: "LEGEND - Mâle Spitz nain Poméranien marquage husky",
        color: "Noire et blanche",
        origin: "Non LOF, couleur exotique",
        size: "23 cm au garrot • 3 kg",
        temperament:
            "Legend est un mâle vif, joyeux et observateur. Interactif, il est câlin, proche de l’humain et sociable.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "legend",
            "legend-spitz-nain-pomeranien-male-spitz-nain-pomeranien-marquage-husky-noir-blanc",
            1,
            "Legend, mâle Spitz nain Poméranien marquage husky noir et blanc"
        )
    },
    {
        name: "Tempête",
        title: "TEMPÊTE - Femelle Spitz nain Poméranien marquage husky",
        color: "Bleue et blanche",
        origin: "Non LOF, couleur exotique",
        size: "18 cm au garrot • 2,2 kg",
        temperament:
            "Tempête est une femelle très attachante, drôle, unique et interactive. Elle est très mignonne.",
        health: ["Non LOF, couleur exotique"],
        images: buildDogImages(
            "tempete",
            "tempete-spitz-nain-pomeranien-femelle-spitz-nain-pomeranien-marquage-husky-bleue-blanche",
            4,
            "Tempête, femelle Spitz nain Poméranien marquage husky bleue et blanche"
        )
    }
];
