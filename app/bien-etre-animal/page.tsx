import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { faqBienEtre } from "@/lib/faq-data"
import { Calendar, Bed, Utensils, Dumbbell, SpadeIcon as Spa, PawPrint, Dog } from "lucide-react"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Link from "next/link"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"

const pageImage = "/locaux.webp"

const wellnessInternalLinks: InternalLinkItem[] = [
    {
        href: "/presentation-elevage",
        title: "Découvrir l’élevage",
        description: "Mieux comprendre notre cadre de vie, notre sélection et notre manière d’élever nos Spitz nains Poméraniens.",
    },
    {
        href: "/presentation-elevage#travail-educatif-elevage",
        title: "Voir le travail éducatif",
        description: "Découvrir la socialisation, les manipulations douces, les premiers repères et l’accompagnement mis en place à l’élevage.",
    },
    {
        href: "/adoption/reussir-son-adoption",
        title: "Préparer l’arrivée du chiot",
        description: "Anticiper les premiers jours à la maison, la transition alimentaire et les bonnes bases pour un départ serein.",
    },
    {
        href: "/spitz-nain-pomeranien/chiots-disponibles",
        title: "Voir nos portées",
        description: "Suivre les disponibilités, les futures ouvertures de réservation et nos prochaines naissances.",
    },
    {
        href: "/contact",
        title: "Programmer une visite",
        description: "Nous contacter pour échanger sur votre projet d’adoption et organiser une visite sur rendez-vous.",
    },
]

export const metadata: Metadata = {
    title: pageMetadata.wellness.title,
    description: pageMetadata.wellness.description,
    keywords: pageMetadata.wellness.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: `${siteConfig.siteUrl}/bien-etre-animal`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Locaux et espaces de vie de l élevage Spitz nain Poméranien",
                width: 1200,
                height: 630,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/bien-etre-animal`,
    },
}

export default function SejoursPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Bien-être animal", url: "/bien-etre-animal" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqBienEtre))

    const lastMod = returnLastmod(siteConfig.pages.wellness)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto">
                    <section className="text-center space-y-6 mb-16">
                        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/locaux.webp"
                                alt="Image d un des espaces de vie des chiens de l elevage"
                                fill
                                className="object-cover"
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, 70vw"
                                quality={60}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-white text-center space-y-4">
                                    <h1 className="text-xl md:text-3xl font-bold">La vie de nos Spitz nains Poméraniens à l’élevage</h1>
                                    <div className="flex flex-col items-center justify-center space-x-4 p-2 md:flex-row">
                                        <Calendar className="h-5 w-5" aria-hidden="true" />
                                        <span className="md:text-lg">Suivez l’ouverture des réservations sur nos prochaines portées</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">
                            Découvrez le quotidien de nos Spitz nains Poméraniens, de la naissance aux premiers apprentissages
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center text-muted-foreground mb-8 gap-6">
                            <div className="flex flex-col items-center justify-center p-2">
                                <Dog className="min-h-8 min-w-8" />
                                <span className="m-4">
                                    Envie de rencontrer nos spitz nains marqués husky ?{" "}
                                    <Link href="/contact" className="text-blue-700 underline hover:text-blue-500">
                                        Planifiez une visite
                                    </Link>{" "}
                                    ou{" "}
                                    <Link href="/spitz-nain-pomeranien/chiots-disponibles" className="text-blue-700 underline hover:text-blue-500">
                                        inscrivez-vous pour suivre l’ouverture des réservations
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </section>

                    <div className="space-y-16">
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Nursery intérieure
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Un environnement calme et sécurisé dès la naissance</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les premières semaines sont essentielles pour le bon développement d’un Spitz nain Poméranien. Nos chiots grandissent dans une nursery intérieure calme, tempérée et propre, pensée pour leur sécurité, leur confort et leur stabilité émotionnelle.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nous veillons à respecter le rythme de la mère et des chiots, avec une présence quotidienne, des manipulations douces et une attention particulière portée au sommeil, au repos et aux premiers repères. Cette phase est primordiale pour construire un chiot serein, bien dans ses pattes et proche de l’humain.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Dès le départ, nous recherchons un équilibre entre cocon rassurant, observation attentive et premiers contacts positifs avec le monde extérieur, sans surstimulation inutile.
                                    </p>
                                </div>
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/cocom-pour-chiots-mame-shiba.webp",
                                            "pages/conditions-de-vie/bebe-chiots-lit-douillet.webp",
                                            "pages/conditions-de-vie/salle-ambiante-pour-chiots.webp",
                                        ]}
                                        alt="Carrousel montrant les cocons et espaces de repos des chiots de l elevage"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-sur-structure-bois-01.webp",
                                                alt: "Chiot en découverte sur une structure en bois",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-parmi-les-branches.webp",
                                                alt: "Chiot observant son environnement pendant une phase de découverte",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-jardin-course-02.webp",
                                                alt: "Chiot en mouvement pendant une séance de jeux d'éveil",
                                            },
                                        ]}
                                        alt="Carrousel d'images montrant les jeux et activités de nos chiots"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Spa className="h-4 w-4 mr-2" />
                                        Éveil et socialisation
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Découvertes progressives et expériences positives</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Le Spitz nain Poméranien est un petit chien vif, intelligent et attentif à son environnement. Nous mettons donc en place une socialisation douce et progressive, avec des textures variées, des sons du quotidien, des objets nouveaux et des temps d’interaction adaptés à chaque chiot.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        L’objectif n’est pas d’aller trop vite, mais de favoriser la curiosité, la confiance et la proximité avec l’humain. Chaque chiot avance à son rythme afin d’aborder sereinement la suite de sa vie de famille.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Dumbbell className="h-4 w-4 mr-2" />
                                        Bien-être animal
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Sorties quotidiennes, enrichissement olfactif et rythmes respectés</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Bien-être animal : sorties quotidiennes, enrichissement olfactif et rythmes respectés pour des spitz nains sereins, joueurs et proches de l’humain, de véritables compagnons de vie.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Malgré leur petit format, les Spitz nains Poméraniens ont besoin de se dépenser, de flairer, d’explorer et d’interagir avec leur environnement. Les promenades, les jeux calmes, les découvertes encadrées et les temps de repos équilibrés participent à leur bon développement.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nous privilégions une routine rassurante, des sorties régulières, des espaces sécurisés et des activités adaptées à leur âge pour encourager un tempérament stable, éveillé et joyeux.
                                    </p>
                                </div>
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/image-all-shiba/jardin-cloture-elevage-horizontal.webp",
                                                alt: "Parc extérieur clôturé de l'élevage pour les sorties quotidiennes",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-en-laisse-herbe-01.webp",
                                                alt: "Chiot accompagné pendant une sortie encadrée",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-jardin-ensemble-03.webp",
                                                alt: "Chiot évoluant dans un espace extérieur sécurisé de l'élevage",
                                            },
                                        ]}
                                        alt="Carrousel d images de chiots et d adultes jouant en plein air sous encadrement"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-80 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/conditions-de-vie/nourrite-des-chiots-marque.webp",
                                                alt: "Alimentation remise au départ pour accompagner la transition du chiot",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-interieur-textile-01.webp",
                                                alt: "Chiot au calme dans un environnement intérieur soigné",
                                            },
                                        ]}
                                        alt="Carrousel d'images de l'alimentation et des soins des chiots et des chiens adultes reproducteurs"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Utensils className="h-4 w-4 mr-2" />
                                        Suivi vétérinaire
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Suivi vétérinaire, soins et transition encadrée</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Suivi vétérinaire : vaccins, identification, test ADN des parents, vermifuges réguliers et bilan santé complet remis le jour du départ.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nous accordons aussi une attention particulière à la transition alimentaire, au sevrage progressif et au confort digestif des chiots. Un kit de départ et des recommandations claires sont remis afin d’accompagner les premières semaines dans la nouvelle famille.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="grid md:grid-cols-2 gap-12">
                                <Card className="bg-muted/40 border-0 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Transparence</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Livret détaillé, contrats clairs, photos et vidéos régulières de l’évolution des chiots.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Nous tenons à offrir un cadre clair, sérieux et rassurant tout au long du projet d’adoption, avec des informations précises sur la portée, le suivi, la santé et les conditions de départ.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/40 border-0 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Accompagnement</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Conseils d’éducation, kit de transition et disponibilité après l’adoption pour répondre à vos questions.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Notre rôle ne s’arrête pas au départ du chiot. Nous restons disponibles pour vous aider à préparer son arrivée, comprendre ses besoins et poser de bonnes bases dès les premières semaines.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                    </div>

                    <section className="mt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Planning de socialisation</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Matin</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>8h :</strong> Soins, nettoyage des espaces et observation des chiots
                                        </p>
                                        <p>
                                            <strong>9h :</strong> Manipulations douces et premiers repères avec l’humain
                                        </p>
                                        <p>
                                            <strong>10h :</strong> Découvertes sensorielles, jeux calmes et enrichissement
                                        </p>
                                        <p>
                                            <strong>11h :</strong> Sortie adaptée à l’âge, exploration et temps de repos
                                        </p>
                                        <p>
                                            <strong>12h :</strong> Pause, calme et respect du rythme de la portée
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Après-midi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>13h :</strong> Repas, transition alimentaire et surveillance individuelle
                                        </p>
                                        <p>
                                            <strong>14h :</strong> Présentation de nouveaux sons, objets et textures
                                        </p>
                                        <p>
                                            <strong>15h :</strong> Enrichissement olfactif et interactions positives
                                        </p>
                                        <p>
                                            <strong>16h30 :</strong> Temps calme, observations et échanges avec les familles sur rendez-vous
                                        </p>
                                        <p>
                                            <strong>19h :</strong> Dernière sortie, câlins et retour au repos
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <InternalLinksSection
                        title="Liens utiles pour continuer la visite"
                        description="Après le quotidien de nos chiots et de nos adultes, retrouvez les pages les plus utiles pour découvrir l’élevage, préparer l’adoption et suivre nos futures portées."
                        items={wellnessInternalLinks}
                        className="mt-16"
                    />

                    <FAQSection
                        title="FAQ adoption et quotidien"
                        description="Tout ce qu’il faut savoir sur le quotidien en élevage, la socialisation et les besoins du Spitz nain Poméranien."
                        items={faqBienEtre}
                    />

                    <section className="mt-16 text-center">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Visiter l’élevage</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Envie de rencontrer nos spitz nains marqués husky ? Planifiez une visite ou inscrivez-vous pour suivre l’ouverture des réservations sur nos prochaines portées.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/spitz-nain-pomeranien/chiots-disponibles"
                                className="flex w-fit items-center justify-center rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Voir nos portées
                            </Link>

                            <Link
                                href="/contact"
                                className="flex w-fit items-center justify-center rounded-md border border-primary px-6 py-4 font-semibold text-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Programmer une visite
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-muted-foreground">
                            <PawPrint className="h-5 w-5" aria-hidden="true" />
                            <span>Parking sur place et environnement calme pour préserver la tranquillité des chiots.</span>
                        </div>
                    </section>

                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
