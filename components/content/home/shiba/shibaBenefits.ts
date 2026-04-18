import mameSize from "@/public/pages/homePage/spitz-nain-noir-reflet-bleu-et-blanc-tres-petit.webp";
import nihonMame from "@/public/pages/homePage/spitz-nain-noir-reflet-bleu-et-blanc-tres-petit.webp";
import shibaPolyvalent from "@/public/pages/homePage/spitz-nain-noir-reflet-bleu-et-blanc-tres-petit.webp";
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
];
