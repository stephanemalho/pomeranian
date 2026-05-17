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

export const dogs: AdultDog[] = [
    {
        name: "Ichiro",
        title: "Shota Go dit ICHIRO - Mâle Spitz nain Poméranien",
        color: "Rouge / Red",
        origin: "Issu de notre sélection",
        lineage:
            "Lignée suivie, choisie pour le type, le tempérament et la cohérence morphologique",
        size: "30 cm au garrot • 6,1 kg",
        temperament:
            "Avenant, doux, sensible, câlin, curieux, loyal et extrêmement intelligent. Ichiro est un chien de grande prestance, élégant, avec un regard profond et une vraie présence dans la meute.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/ichiro-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait d'Ichiro, mâle Spitz nain Poméranien de l'élevage Spitz nain Poméranien"
            },
            {
                src: "/pages/reproducteurs/ISHIRO-spitz-pomeranien-spitz-pomeranien.webp",
                alt: "Ichiro, mâle Spitz nain Poméranien de l'élevage Spitz nain Poméranien"
            }
        ]
    },
    {
        name: "Yuzu",
        title: "YUZU - Femelle Spitz nain Poméranien",
        color: "Rouge / Red",
        origin: "Issue de notre sélection",
        lineage: "Excellente lignée sélectionnée",
        size: "29,5 cm au garrot • 4,8 kg",
        temperament:
            "Curieuse, intelligente, malicieuse, joyeuse, active et pleine de vie. Yuzu est sélective dans ses affinités, mais lorsqu’on gagne son respect et son cœur, elle devient absolument adorable et très proche de l’humain.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/yuzu-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait de Yuzu, femelle Spitz nain Poméranien de l'élevage Spitz nain Poméranien"
            }
        ]
    },
    {
        name: "Sakura",
        title: "SAKURA - Femelle Spitz nain Poméranien",
        color: "Crème",
        origin: "Issue de notre sélection",
        lineage: "Excellente lignée sélectionnée",
        size: "28,5 cm au garrot • 4,7 kg",
        temperament:
            "Douce, élégante, sage, intelligente et loyale. Sakura est une femelle très observatrice, sociable et avenante, qui aime les câlins et l’attention. C’est une excellente maman et une véritable force tranquille.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/sakura-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait de Sakura, femelle Spitz nain Poméranien crème de l'élevage Spitz nain Poméranien"
            },
            {
                src: "/pages/reproducteurs/SAKURA-white-spitz-pomeranien-from-japan.webp",
                alt: "Sakura, femelle Spitz nain Poméranien crème issue de notre sélection"
            }
        ]
    },
    {
        name: "Kawaii",
        title: "KAWAII - Femelle Spitz nain Poméranien",
        color: "Red",
        origin: "Née en Europe, parents issus de lignées sélectionnées",
        lineage: "Excellente lignée sélectionnée",
        size: "25 cm au garrot • 3,8 kg",
        temperament:
            "Posée, calme, zen et réfléchie. Kawaii réclame juste ce qu’il faut de contact, communique beaucoup par le regard et sait parfaitement trouver sa place au sein de la meute. Discrète, bien codée et très adaptable, elle possède aussi un excellent rappel.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/kawaii-de-nuit-sur-un-rocher.webp",
                alt: "Kawaii de nuit sur un rocher"
            },
            {
                src: "/pages/reproducteurs/kawaii-sur-un-champ-de-fleurs-jaunes.webp",
                alt: "Kawaii dans un champ de fleurs jaunes"
            },
            {
                src: "/pages/reproducteurs/KAWAII-femelle-spitz-pomeranien-couleur-feu.webp",
                alt: "Kawaii, femelle Spitz nain Poméranien couleur feu"
            }
        ]
    },
    {
        name: "Hina",
        title: "HINA - Femelle Spitz nain Poméranien",
        color: "Non précisé",
        origin: "Née à l’élevage",
        size: "28 cm au garrot • 4,5 kg",
        temperament:
            "Femelle née à l’élevage, Hina représente notre sélection maison avec un petit format, une bonne stabilité et une présence douce dans le quotidien.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Hina.webp",
                alt: "Hina, femelle Spitz nain Poméranien née à l'élevage"
            }
        ]
    },
    {
        name: "Karasuki",
        title: "KARASUKI - Femelle Spitz nain Poméranien",
        color: "Non précisé",
        origin: "Née à l’élevage",
        size: "27 cm au garrot • 4 kg",
        temperament:
            "Karasuki est une femelle Spitz nain Poméranien au petit gabarit, suivie pour son équilibre, sa construction et sa capacité à évoluer sereinement dans la meute.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Karasuki.webp",
                alt: "Karasuki, femelle Spitz nain Poméranien née à l'élevage"
            }
        ]
    },
    {
        name: "Kimi",
        title: "KIMI - Femelle Spitz nain Poméranien",
        color: "Non précisé",
        origin: "Née à l’élevage",
        size: "25 cm au garrot • 3,5 kg",
        temperament:
            "Kimi est une petite femelle Spitz nain Poméranien au format compact, observée pour sa stabilité, sa douceur et son adaptation au quotidien de l’élevage.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Kimi.webp",
                alt: "Kimi, femelle Spitz nain Poméranien née à l'élevage"
            }
        ]
    },
    {
        name: "Natsuko",
        title: "NATSUKO dit NATSU - Mâle Spitz nain Poméranien",
        color: "Noire et feu",
        origin: "Né en Europe, parents issus de lignées sélectionnées",
        lineage: "Excellente lignée sélectionnée",
        size: "29 cm au garrot • 5,6 kg",
        temperament:
            "Très câlin, sociable, extraverti, joyeux et intéressé par l’humain. Natsu aime les balades et se montre à l’aise dans des environnements variés. C’est un petit ourson zen, stable et sans impulsivité.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/natsuko-dit-natsu-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait de Natsuko dit Natsu, mâle Spitz nain Poméranien noir et feu"
            },
            {
                src: "/pages/reproducteurs/NATSUKO-male-spitz-pomeranien-noir-et-feu.webp",
                alt: "Natsuko dit Natsu, mâle Spitz nain Poméranien noir et feu"
            }
        ]
    },
    {
        name: "Yumi",
        title: "YUMI - Femelle Spitz nain Poméranien",
        color: "Red",
        origin: "Née à l’élevage",
        lineage: "Excellente lignée sélectionnée",
        size: "28 cm au garrot • 5,5 kg",
        temperament:
            "Fille d’Ichiro et Sakura, Yumi possède le physique de sa mère dans une jolie couleur fauve. Très sociable, à l’écoute, facile à éduquer et interactive, elle s’intègre facilement à la meute et reflète très bien notre sélection.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/yumi-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait de Yumi, femelle Spitz nain Poméranien de l'élevage Spitz nain Poméranien"
            },
            {
                src: "/pages/reproducteurs/YUMI-femelle-spitz-pomeranien-couleur-feu.webp",
                alt: "Yumi, femelle Spitz nain Poméranien couleur feu"
            }
        ]
    },
    {
        name: "Waru",
        title: "HAIYU WARU - Mâle Spitz nain Poméranien",
        color: "Red",
        origin: "Origine sélectionnée",
        lineage: "Excellente lignée sélectionnée",
        size: "27 cm au garrot • 4,5 kg",
        temperament:
            "Waru a marqué l’histoire du Spitz nain Poméranien avant d’arriver chez nous. Solitaire, observateur, sensible et doux, il préfère souvent profiter de sa tranquillité en retrait du groupe.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Spitz nain Poméranien",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/waru-spitz-pomeranien-spitz-pomeranien-portrait.webp",
                alt: "Portrait de Waru, mâle Spitz nain Poméranien de l'élevage Spitz nain Poméranien"
            },
            {
                src: "/pages/reproducteurs/WARU-male-spitz-pomeranien-couleur-feu.webp",
                alt: "Waru, mâle Spitz nain Poméranien couleur feu"
            }
        ]
    }
];
