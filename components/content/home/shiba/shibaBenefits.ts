import mameSize from "@/public/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg";
import nihonMame from "@/public/pages/homePage/mame-shiba-puppy-blanc-white.jpeg";
import redMame from "@/public/pages/homePage/ushiro-paris.jpg";
import primitifDog from "@/public/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg";
import shibaExpressive from "@/public/pages/homePage/mame-shiba-courant-dans-herbe.jpg";
import shibaPolyvalent from "@/public/pages/homePage/mame-shiba-for-modern-life.jpeg";
import { StaticImageData } from "next/image";

type BenefitCard = {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
};

export const shibaBenefits: BenefitCard[] = [
    {
        title: "Santé et bien-être dès la naissance",
        text: "Examens génétiques ciblés, suivi vétérinaire pendant la gestation et la lactation, alimentation premium et sélection rigoureuse des reproducteurs nous permettent d'accompagner des chiots robustes dès leurs premiers jours.",
        image: mameSize,
        alt: "Petit chien se tenant debout sur l'herbe"
    },
    {
        title: "Une sélection génétique rigoureuse",
        text: "Nos mariages sont pensés pour préserver la pureté du Spitz nain Poméranien, la stabilité de la taille, l'harmonie du type et la transmission naturelle du marquage husky, sans aucun croisement.",
        image: nihonMame,
        alt: "Deux chiots blottis l'un contre l'autre"
    },
    {
        title: "Socialisation précoce et douceur",
        text: "Jeux, stimulations, manipulations et découvertes progressives préparent des chiots bien dans leurs pattes, proches de l'humain et faciles à intégrer dans leur nouvelle famille.",
        image: shibaPolyvalent,
        alt: "Petit chien après une baignade, regard vif"
    },
    {
        title: "Un environnement hautement sécurisé",
        text: "Maternité dédiée, locaux aménagés, présence humaine continue et sorties régulières dans un terrain d'un hectare offrent un cadre rassurant, stimulant et adapté à cette race délicate.",
        image: primitifDog,
        alt: "Petit chien regardant l'objectif avec beaucoup de caractère"
    },
    {
        title: "Un petit chien, un grand compagnon",
        text: "Nous recherchons des chiots au tempérament stable, joyeux et tendre, capables de s'adapter aussi bien à la vie citadine qu'à un cadre plus rural, tout en restant de merveilleux chiens de compagnie.",
        image: shibaExpressive,
        alt: "Petit chien attentif dans l'herbe, regard expressif"
    },
    {
        title: "Transparence et accompagnement",
        text: "Visites sur rendez-vous, livret d'accueil, kit chiot et conseils avant comme après l'adoption permettent à chaque famille d'avancer avec clarté, confiance et suivi personnalisé.",
        image: redMame,
        alt: "Petit chien actif en extérieur sur l'herbe verte"
    }
];
