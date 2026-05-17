import Image from "next/image"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { faqSpitzNainPomeranien } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { BookOpen, Heart, PawPrint, Ruler, ShieldCheck, Sparkles } from "lucide-react"

const pageImage = "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp"

const keyFacts = [
    {
        title: "Origine",
        text: "Le Spitz nain, aussi appelé Poméranien ou Loulou de Poméranie, est la plus petite variété du Spitz allemand. Le standard FCI rattache la race à l’Allemagne et au groupe 5, section Spitz européens.",
        icon: BookOpen,
    },
    {
        title: "Taille FCI",
        text: "Le standard du Spitz nain/Poméranien indique une taille de 21 cm ± 3 cm au garrot, avec un poids cohérent avec la taille du chien.",
        icon: Ruler,
    },
    {
        title: "Caractère",
        text: "Le Poméranien est décrit comme attentif, vif, très attaché à son humain, apte à la vie de famille et ni craintif ni agressif lorsqu’il est bien sélectionné et socialisé.",
        icon: Heart,
    },
]

const carePoints = [
    {
        title: "Pelage double",
        text: "Le Spitz nain possède un poil de couverture long et droit, porté par un sous-poil court, dense et ouaté. Un brossage régulier évite les nœuds et garde le poil aéré.",
    },
    {
        title: "Petit chien, vrais besoins",
        text: "Son format compact convient bien à la vie de compagnie, mais il a besoin de sorties adaptées, d’interactions, de calme et de repères éducatifs cohérents.",
    },
    {
        title: "Vigilance santé",
        text: "Comme toute race miniature, le choix de l’élevage compte : suivi vétérinaire, sélection de reproducteurs sains, transparence et préparation progressive du chiot.",
    },
]

const spitzInternalLinks: InternalLinkItem[] = [
    {
        href: "/spitz-nain-pomeranien/chiots-disponibles",
        title: "Voir nos chiots",
        description: "Disponibilités, tarifs, préparation au départ et conseils pour l’arrivée à la maison.",
    },
    {
        href: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        title: "Découvrir nos adultes",
        description: "Comprendre les chiens qui portent notre sélection, leur santé et leur tempérament.",
    },
    {
        href: "/contact",
        title: "Parler de votre projet",
        description: "Échanger avec nous avant de vous inscrire pour une portée ou une visite.",
    },
]

export const metadata: Metadata = {
    title: pageMetadata.spitz.title,
    description: pageMetadata.spitz.description,
    keywords: pageMetadata.spitz.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.spitz.title,
        description: pageMetadata.spitz.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.spitz}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Spitz nain Poméranien dans un décor naturel",
                width: 1200,
                height: 630,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.spitz.title,
        description: pageMetadata.spitz.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.spitz}`,
    },
}

export default function SpitzNainPomeranienPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Spitz nain Poméranien", url: siteConfig.pages.spitz },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqSpitzNainPomeranien))

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

            <main className="py-16">
                <div className="container mx-auto space-y-16">
                    <section className="grid gap-10 items-center md:grid-cols-2">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Le Spitz nain Poméranien
                            </Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">
                                Spitz nain Poméranien : origine, caractère, taille et entretien
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Le Spitz nain Poméranien est un petit chien de compagnie issu de la famille du Spitz
                                allemand. Sous son apparence très expressive, il reste un vrai chien : vif, attentif,
                                proche de ses humains et sensible à la qualité de sa socialisation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Cette page rassemble les repères essentiels avant adoption, en s’appuyant sur le standard
                                FCI/Centrale Canine et sur une lecture pratique de la vie avec un Poméranien.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>chien de compagnie</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>robe double et collerette</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>sélection et santé à vérifier</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-72 overflow-hidden rounded-lg bg-black md:h-105">
                            <Image
                                src={pageImage}
                                alt="Spitz nain Poméranien dans un décor naturel"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </section>

                    <section className="grid gap-5 md:grid-cols-3">
                        {keyFacts.map((fact) => {
                            const Icon = fact.icon

                            return (
                                <Card key={fact.title}>
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                            <CardTitle className="text-lg">{fact.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{fact.text}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </section>

                    <section className="grid gap-8 items-center md:grid-cols-[0.9fr_1.1fr]">
                        <div className="relative h-72 overflow-hidden rounded-lg bg-black md:h-96">
                            <Image
                                src="/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.webp"
                                alt="Jeune Spitz nain Poméranien au pelage clair"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                            />
                        </div>
                        <div className="space-y-5">
                            <h2 className="text-xl md:text-2xl font-bold">Ce qu’il faut retenir avant adoption</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le Poméranien est souvent choisi pour son petit format, mais il ne doit pas être traité
                                comme un accessoire. Son équilibre dépend d’un cadre stable, de sorties adaptées, d’un
                                apprentissage doux et d’une gestion attentive des stimulations.
                            </p>
                            <div className="grid gap-4">
                                {carePoints.map((point) => (
                                    <div key={point.title} className="rounded-lg border bg-muted/30 p-4">
                                        <h3 className="font-semibold">{point.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="rounded-lg border bg-muted/30 p-6 md:p-8">
                        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-bold">Références utiles</h2>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Ces sources servent de base aux repères de cette page.
                                </p>
                            </div>
                            <div className="grid gap-3 text-sm">
                                <a
                                    href="https://www.fci.be/fr/nomenclature/SPITZ-ALLEMAND-97.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md border bg-background p-4 text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Standard officiel FCI n°97 : Spitz Allemand, variété Spitz nain / Poméranien
                                </a>
                                <a
                                    href="https://www.centrale-canine.fr/sites/default/files/fci_race/097.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-md border bg-background p-4 text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    PDF Centrale Canine / FCI : standard français du Spitz allemand
                                </a>
                            </div>
                        </div>
                    </section>

                    <InternalLinksSection
                        title="Continuer votre lecture"
                        description="Les pages utiles pour relier les informations de race à notre élevage et à votre projet."
                        items={spitzInternalLinks}
                    />

                    <FAQSection
                        title="FAQ sur le Spitz nain Poméranien"
                        description="Les réponses essentielles avant de démarrer un projet d’adoption."
                        items={faqSpitzNainPomeranien}
                    />
                </div>
            </main>
        </>
    )
}
