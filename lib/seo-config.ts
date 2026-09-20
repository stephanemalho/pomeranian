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

export const seoLastmod = "2026-09-20";

/* -------------------------------------------------------------------------- */
/*  SITE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
    /* ----------------------------- Identité --------------------------------- */
    name: CANONICAL_NAME,
    author: CANONICAL_NAME,
    locale: "fr-FR",

    siteUrl:
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://www.spitz-nain-pomeranien.fr",

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
        email: "cerclepolairepomeranien@gmail.com ",
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
    ogImage: "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.jpeg",
    ogImageAlt: "Spitz nain Poméranien dans un décor naturel",
    ogImageWidth: 2560,
    ogImageHeight: 1707,

    socialLinks: {
        instagram: "https://www.instagram.com/pomeranien.cerclepolaire"
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
    "/locaux.webp": {
        width: 2048,
        height: 1536,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp": {
        width: 1536,
        height: 1024,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.jpeg": {
        width: 1536,
        height: 1024,
        type: "image/jpeg"
    },
    "/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.jpeg": {
        width: 1024,
        height: 1536,
        type: "image/jpeg"
    },
    "/pages/homePage/spitz-chiot-gris-1-mois.webp": {
        width: 1320,
        height: 866,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.webp": {
        width: 1024,
        height: 1536,
        type: "image/webp"
    },
    "/pages/homePage/spitz-nain-pomeranien-gris-silver-et-blanc.webp": {
        width: 1536,
        height: 1024,
        type: "image/webp"
    },
    "/assets/authors/aurelie-elevage-spitz-pomeranien-et-chiot.jpeg": {
        width: 1708,
        height: 2560,
        type: "image/jpeg"
    },
    "/assets/authors/marine-eleveuse-avec-spitz-bebe.jpeg": {
        width: 2048,
        height: 1536,
        type: "image/jpeg"
    },
    "/pages/conditions-de-vie/sortie-encadree-avec-marine.webp": {
        width: 1534,
        height: 1006,
        type: "image/webp"
    },
    "/pages/conditions-de-vie/la-maman-et-son-chiot-avec-marine.webp": {
        width: 1600,
        height: 1066,
        type: "image/webp"
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
                      width:
                          image.width ??
                          resolvedImage.width ??
                          siteConfig.ogImageWidth,
                      height:
                          image.height ??
                          resolvedImage.height ??
                          siteConfig.ogImageHeight,
                      alt: image.alt ?? siteConfig.ogImageAlt,
                      type: image.type ?? resolvedImage.type
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
        title: "Élevage de Spitz Nain Poméranien en France | Chiots & Éleveur",
        description: "Élevage familial de Spitz nains Poméraniens en France. Découvrez nos chiots élevés avec soin, socialisés, issus de lignées sélectionnées et prêts à l'adoption.",
        keywords: [
            "élevage spitz nain poméranien france",
            "éleveur spitz nain",
            "chiot spitz nain poméranien",
            "adopter un pomeranien",
            "spitz nain roux noir blanc",
            "élevage canin familial spitz"
        ]
    },

    spitz: {
        title: "Spitz Nain Poméranien : Caractère, Taille, Entretien & Prix",
        description: "Tout savoir sur le Spitz nain Poméranien : standard FCI, caractère, taille, espérance de vie, entretien du pelage et conseils avant d'adopter votre chiot.",
        keywords: [
            "spitz pomeranien race",
            "caractere spitz nain pomeranien",
            "taille spitz nain pomeranien",
            "entretien pelage pomeranien",
            "standard fci spitz nain",
            "chien nain qui ressemble a un renard"
        ]
    },

    puppies: {
        title: "Chiots Spitz Nain Poméranien Disponibles : Prix & Réservation",
        description: "Consultez nos chiots Spitz nain Poméranien disponibles à la réservation. Informations sur les prochaines portées, prix, santé et processus d'adoption.",
        keywords: [
            "chiots spitz nain pomeranien disponibles",
            "prix spitz nain pomeranien",
            "reservation chiot pomeranien",
            "portee spitz nain france",
            "acheter un spitz nain pomeranien"
        ]
    },

    reproductors: {
        title: "Nos Reproducteurs Spitz Nain Poméranien | Lignées & Tests de Santé",
        description: "Découvrez les étalons et femelles reproductrices de notre élevage de Spitz nains. Sélection rigoureuse sur la santé, le type FCI et le pedigree.",
        keywords: [
            "reproducteurs spitz nain pomeranien",
            "lignées spitz nain pomeranien",
            "tests génétiques spitz nain",
            "étalons pomeranien",
            "femelles spitz nain"
        ]
    },

    contact: {
        title: "Contact & Visite de l'Élevage de Spitz Nain Poméranien",
        description: "Une question sur nos chiots ou sur la réservation ? Contactez notre élevage de Spitz nains Poméraniens. Visites sur rendez-vous uniquement.",
        keywords: [
            "contact elevage spitz nain",
            "visiter elevage pomeranien",
            "rendez-vous elevage canin",
            "adresse elevage spitz nain france"
        ]
    },

    legalNotice: {
        title: "Mentions Légales | Élevage de Spitz Nain Poméranien",
        description: "Consultez les mentions légales de notre site d'élevage de Spitz nain Poméranien : éditeur, SIRET, hébergement et cadre juridique.",
        keywords: [
            "mentions legales elevage",
            "siret elevage canin",
            "éditeur site spitz nain"
        ]
    },

    terms: {
        title: "Conditions Générales d'Utilisation (CGU) | Élevage Spitz Nain",
        description: "Conditions générales d'utilisation du site de notre élevage de Spitz nains Poméraniens. Règles d'usage, propriétés et responsabilités.",
        keywords: [
            "cgu elevage canin",
            "conditions d utilisation site spitz"
        ]
    },

    privacy: {
        title: "Politique de Confidentialité & RGPD | Élevage Spitz Nain",
        description: "Protection de vos données personnelles et politique de cookies conformément au RGPD pour notre site d'élevage de Spitz nain Poméranien.",
        keywords: [
            "politique de confidentialite",
            "protection donnees rgpd elevage",
            "gestion des cookies"
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
        lastmod: "2026-09-20"
    },
    {
        url: "/spitz-nain-pomeranien/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: "2026-09-20"
    },
    {
        url: "/spitz-nain-pomeranien",
        changefreq: "monthly",
        priority: 0.85,
        lastmod: "2026-09-20"
    },
    {
        url: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-09-20"
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
