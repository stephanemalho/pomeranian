import { createLastmodGetter } from "./lastmod";

/**
 * ============================================================
 * CONFIGURATION SEO & LÉGALE — Spitz nain Poméranien
 * ============================================================
 * Source de vérité unique pour :
 * - SEO
 * - Métadonnées
 * - Mentions légales
 * - Sitemap
 */

/* -------------------------------------------------------------------------- */
/*  CANONICAL NAME (UNE SEULE SOURCE DE VÉRITÉ)                                */
/* -------------------------------------------------------------------------- */

const CANONICAL_NAME = "Spitz nain Poméranien";

export const seoLastmod = "2026-04-04";

/* -------------------------------------------------------------------------- */
/*  SITE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
    /* ----------------------------- Identité --------------------------------- */
    name: CANONICAL_NAME,
    author: CANONICAL_NAME,
    locale: "fr-FR",

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.spitz-nain-pomeranien.fr",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de Spitz nain Poméranien en France",
    description:
        "Spitz nain Poméranien est un élevage spécialisé en Poméraniens en France. Nos chiots sont élevés avec soin, socialisés progressivement et issus d'une sélection attentive portée sur la santé, le type et l'équilibre.",
    keywords: [
        "élevage Spitz nain Poméranien",
        "Spitz nain Poméranien France",
        "chiot Spitz nain Poméranien",
        "Spitz nain Poméranien",
        "élevage spitz nain pomeranien",
        "adopter Spitz nain Poméranien",
        "élevage pomeranien"
    ],

    /* ------------------------------ Contact ---------------------------------- */
    contact: {
        email: "contact@spitz-nain-pomeranien.fr",
        phone: "+33689758031",
        phoneFormatted: "06 89 75 80 31"
    },

    /* ---------------------------- Données légales ----------------------------- */
    legal: {
        legalName: "ELEVAGE ROYAL",
        tradeName: CANONICAL_NAME,
        legalForm: "GAEC (Groupement Agricole d'Exploitation en Commun)",
        siren: "917907016",
        siret: "91790701600013",
        apeCode: "01.49Z",
        activity: "Élevage d'autres animaux",
        foundingDate: "2022-06-15",
        address: {
            city: "Dommartin-lès-Cuiseaux",
            postalCode: "71480",
            country: "France"
        }
    },

    /* ----------------------- Localisation (marketing) ------------------------- */
    location: {
        region: "Bourgogne-Franche-Comté",
        department: "Saône-et-Loire",
        departmentCode: "71",
        nearbyCity: "Saint-Amour (39) Jura"
    },

    /* ------------------------------ Horaires ---------------------------------- */
    businessHours: [
        { day: "Monday", open: "09:00", close: "18:00" },
        { day: "Tuesday", open: "09:00", close: "18:00" },
        { day: "Wednesday", open: "09:00", close: "18:00" },
        { day: "Thursday", open: "09:00", close: "18:00" },
        { day: "Friday", open: "09:00", close: "18:00" },
        { day: "Saturday", open: "09:00", close: "18:00" },
        { day: "Sunday", closed: true }
    ],

    /* ------------------------------ OpenGraph --------------------------------- */
    ogImage: "/spitz-pomeranien-in-a-sakura-tree.jpg",
    ogImageAlt:
        "Spitz nain Poméranien dans un décor naturel",
    ogImageWidth: 2560,
    ogImageHeight: 1707,

    socialLinks: {
        instagram: "https://www.instagram.com/spitznainpomeranien/"
    },

    /* ------------------------------- Pages ------------------------------------ */
    pages: {
        home: "/",
        spitz: "/spitz-nain-pomeranien",
        puppies: "/spitz-nain-pomeranien/chiots-disponibles",
        reproductors: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        terms: "/conditions-generales",
        privacy: "/politique-de-confidentialite"
    }
};

type SocialImageAsset = {
    width: number;
    height: number;
    type: string;
};

const socialImageAssets: Record<string, SocialImageAsset> = {
    "/spitz-pomeranien-in-a-sakura-tree.jpg": {
        width: 2560,
        height: 1707,
        type: "image/webp"
    },
    "/locaux.webp": {
        width: 2048,
        height: 1536,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp": {
        width: 2560,
        height: 1709,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.jpeg": {
        width: 1320,
        height: 1908,
        type: "image/webp"
    },
    "/pages/homePage/spitz-chiot-gris-1-mois.webp": {
        width: 1320,
        height: 866,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.webp": {
        width: 2560,
        height: 1707,
        type: "image/jpeg"
    },
    "/pages/homePage/spitz-nain-pomeranien-gris-silver-et-blanc.webp": {
        width: 2560,
        height: 1708,
        type: "image/jpeg"
    },
    "/pages/spitz-pomeranien-prix/trois-spitz-pomeranien-bebe.jpg": {
        width: 1600,
        height: 1066,
        type: "image/jpeg"
    },
    "/pages/spitz-pomeranien-prix/deux-spitz-pomeranien-chiots-blanc-et-un-noir.jpeg": {
        width: 2560,
        height: 1707,
        type: "image/jpeg"
    },
    "/pages/reproducteurs/ISHIRO-spitz-pomeranien-spitz-pomeranien.webp": {
        width: 683,
        height: 1024,
        type: "image/webp"
    },
    "/pages/reproducteurs/YUMI-femelle-spitz-pomeranien-couleur-feu.webp": {
        width: 2560,
        height: 1709,
        type: "image/webp"
    },
    "/pages/reproducteurs/kawaii-sur-un-champ-de-fleurs-jaunes.webp": {
        width: 3127,
        height: 2087,
        type: "image/webp"
    },
    "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-spitz-pomeranien-de-elevage-kawaii.jpeg":
        {
            width: 3301,
            height: 2203,
            type: "image/jpeg"
        },
    "/assets/authors/aurelie-elevage-spitz-pomeranien-et-chiot.jpeg": {
        width: 1708,
        height: 2560,
        type: "image/jpeg"
    }
};

const mimeTypeByExtension: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml"
};

const getSiteRelativeImagePath = (urlOrPath: string) => {
    if (urlOrPath.startsWith("/")) {
        return urlOrPath;
    }

    try {
        const parsedUrl = new URL(urlOrPath);
        if (parsedUrl.origin === siteConfig.siteUrl) {
            return parsedUrl.pathname;
        }
    } catch {
        return undefined;
    }

    return undefined;
};

const inferMimeType = (urlOrPath: string) => {
    const withoutQuery = urlOrPath.split("?")[0] ?? urlOrPath;
    const extension = withoutQuery.split(".").pop()?.toLowerCase();

    return extension ? mimeTypeByExtension[extension] : undefined;
};

export const resolveSocialImage = (urlOrPath: string) => {
    const siteRelativePath = getSiteRelativeImagePath(urlOrPath);
    const asset =
        (siteRelativePath ? socialImageAssets[siteRelativePath] : undefined) ??
        undefined;

    return {
        url: siteRelativePath
            ? new URL(siteRelativePath, siteConfig.siteUrl).toString()
            : urlOrPath,
        ...(asset?.width ? { width: asset.width } : {}),
        ...(asset?.height ? { height: asset.height } : {}),
        ...(asset?.type || inferMimeType(urlOrPath)
            ? { type: asset?.type ?? inferMimeType(urlOrPath) }
            : {})
    };
};

type OpenGraphParams = {
    title: string;
    description: string;
    url: string;
    type?: "website" | "article";
    images?: Array<{
        url: string;
        alt?: string;
        width?: number;
        height?: number;
        type?: string;
    }>;
    publishedTime?: string;
    authors?: string[];
};

export const buildOpenGraph = ({
    title,
    description,
    url,
    type = "website",
    images,
    publishedTime,
    authors
}: OpenGraphParams) => ({
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    ...(type === "article" && publishedTime ? { publishedTime } : {}),
    ...(type === "article" && authors ? { authors } : {}),
    images:
        images && images.length > 0
            ? images.map((image) => {
                  const resolvedImage = resolveSocialImage(image.url);

                  return {
                      url: resolvedImage.url,
                      width: resolvedImage.width ?? siteConfig.ogImageWidth,
                      height: resolvedImage.height ?? siteConfig.ogImageHeight,
                      alt: image.alt ?? siteConfig.ogImageAlt,
                      type: resolvedImage.type
                  };
              })
            : (() => {
                  const resolvedImage = resolveSocialImage(siteConfig.ogImage);

                  return [
                      {
                          url: resolvedImage.url,
                          width: resolvedImage.width ?? siteConfig.ogImageWidth,
                          height:
                              resolvedImage.height ?? siteConfig.ogImageHeight,
                          alt: siteConfig.ogImageAlt,
                          type: resolvedImage.type
                      }
                  ];
              })()
});

type TwitterParams = {
    title: string;
    description: string;
    imageUrl?: string;
};

export const buildTwitter = ({
    title,
    description,
    imageUrl
}: TwitterParams) => ({
    card: "summary_large_image",
    title,
    description,
    images: [
        resolveSocialImage(
            imageUrl
                ? imageUrl
                : new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()
        ).url
    ]
});

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: "Élevage de Spitz nain Poméranien en France | Chiots & accompagnement",
        description:
            "Élevage de Spitz nain Poméranien en France : chiots élevés avec soin, socialisation sérieuse, sélection attentive et accompagnement avant adoption.",
        keywords: [
            "élevage de Spitz nain Poméranien responsable",
            "chiots Spitz nain Poméranien en France",
            "élevage de petit spitz à taille humaine",
            "chiots spitz bien socialisés",
            "Spitz nain Poméranien roux",
            "Spitz nain Poméranien noir",
            "Spitz nain Poméranien blanc",
            "adopter un pomeranien",
            "Spitz nain Poméranien",
            "élevage de Spitz nain Poméranien en France",
            "adopter un Spitz nain Poméranien en France"
        ]
    },

    spitz: {
        title: "Spitz nain Poméranien : caractère, taille, entretien et adoption",
        description:
            "Découvrez le Spitz nain Poméranien : origine, standard FCI, taille, caractère, pelage, entretien et points essentiels à connaître avant adoption.",
        keywords: [
            "spitz pomeranien",
            "Spitz nain Poméranien",
            "taille du Spitz nain Poméranien",
            "caractere Spitz nain Poméranien",
            "standard Spitz nain Poméranien",
            "adopter un Spitz nain Poméranien",
            "chien ressemblant à un renard",
            "chien de compagnie"
        ]
    },

    puppies: {
        title: "Chiots Spitz nain Poméranien disponibles, tarifs et adoption",
        description:
            "Découvrez nos chiots Spitz nain Poméranien, les prochaines portées, les tarifs, la socialisation à l’élevage et les conseils pour préparer l’adoption.",
        keywords: [
            "chiots Spitz nain Poméranien",
            "Spitz nain Poméranien disponible",
            "reservation chiot Spitz nain Poméranien",
            "portee Spitz nain Poméranien",
            "elevage Spitz nain Poméranien france",
            "acheter un Spitz nain Poméranien",
            "inscription portee Spitz nain Poméranien"
        ]
    },

    reproductors: {
        title: "Nos adultes reproducteurs Spitz nain Poméranien",
        description:
            "Les chiens présentés ici constituent le cœur de notre élevage Spitz nain Poméranien. Chacun participe à notre sélection, avec une attention portée au type, à la santé, au caractère et à la cohérence des lignées.",
        keywords: [
            "nos chiens Spitz nain Poméranien",
            "adultes reproducteurs Spitz nain Poméranien",
            "lignées Spitz nain Poméranien",
            "tests genetiques spitz nain pomeranien",
            "caractere Spitz nain Poméranien"
        ]
    },

    contact: {
        title: "Contact & visites",
        description:
            "Parlons de votre futur compagnon. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots.",
        keywords: [
            "contact elevage Spitz nain Poméranien",
            "visite elevage",
            "rendez-vous",
            "adoption Spitz nain Poméranien",
            "informations chiot",
            "reservation chiot",
            "questions elevage Spitz nain Poméranien",
            "prendre contact avec elevage Spitz nain Poméranien"
        ]
    },

    legalNotice: {
        title: "Mentions légales",
        description:
            "Informations réglementaires de l'élevage Spitz nain Poméranien et cadre juridique d'utilisation du site.",
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: "Termes et conditions d'utilisation",
        description:
            "Règles d'usage du site Spitz nain Poméranien, informations précontractuelles et responsabilités de chacune des parties.",
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: "Politique de confidentialité",
        description:
            "Comment Spitz nain Poméranien collecte, utilise et protège vos données personnelles dans le respect du RGPD.",
        keywords: [
            "RGPD",
            "confidentialite",
            "donnees personnelles",
            "cookies",
            "droits des utilisateurs"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "monthly",
        priority: 1.0,
        lastmod: "2026-04-12"
    },
    {
        url: "/spitz-nain-pomeranien",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: "2026-04-06"
    },
    {
        url: "/spitz-nain-pomeranien/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-04-12"
    },
    {
        url: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-04-12"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: seoLastmod
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: seoLastmod
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: seoLastmod
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: seoLastmod
    }
];

/* -------------------------------------------------------------------------- */
/*  LASTMOD                                                                    */
/* -------------------------------------------------------------------------- */

export const returnLastmod = createLastmodGetter(sitemapPages);

// Compat legacy (à supprimer plus tard)
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
