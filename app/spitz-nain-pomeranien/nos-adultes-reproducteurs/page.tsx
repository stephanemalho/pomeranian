import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqReproducteurs } from "@/lib/faq-data"
import { Dog, PawPrint, Ruler, ShieldCheck } from "lucide-react"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { dogs } from "./dogs"

const pageImage =
    "/pages/le-spitz-pomeranien/reproducteurs/inuk/inuk-spitz-nain-pomeranien-male-spitz-nain-pomeranien-marquage-husky-bleu-blanc-01.jpeg"

const reproductorsInternalLinks: InternalLinkItem[] = [
    {
        href: "/spitz-nain-pomeranien",
        title: "Le standard & l'histoire",
        description: "Tout savoir sur le caractère, l'origine et les particularités du Spitz nain Poméranien.",
    },
    {
        href: "/spitz-nain-pomeranien/chiots-disponibles",
        title: "Chiots & réservation",
        description: "Découvrez nos chiots disponibles, les futures portées et les conditions de réservation.",
    },
    {
        href: "/contact",
        title: "Contact & questions",
        description: "Une question sur une portée ou sur l'élevage ? Nous sommes là pour vous répondre.",
    },
]

export const metadata: Metadata = {
    title: pageMetadata.reproductors.title,
    description: pageMetadata.reproductors.description,
    keywords: pageMetadata.reproductors.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.reproductors}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Inuk, mâle Spitz nain Poméranien marquage husky bleu et blanc",
                width: 2048,
                height: 1366,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.reproductors}`,
    },
}

export default function NosChiensPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiens", url: siteConfig.pages.reproductors },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqReproducteurs))
    const lastMod = returnLastmod(siteConfig.pages.reproductors)

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
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1 className="text-xl md:text-3xl font-bold">Nos Spitz Nains Poméraniens : Le cœur de notre élevage</h1>
                        <h2 className="text-xl md:text-2xl">Santé, caractère d'exception et rigueur de sélection</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Découvrez les chiens qui partagent notre quotidien et font la fierté de notre élevage. Chaque mariage est pensé avec soin pour allier la beauté de la race, une santé irréprochable et un tempérament équilibré.   
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Bien plus que des reproducteurs, ce sont nos compagnons de vie. Nous sélectionnons des chiens stables, affectueux et suivis médicalement avec la plus grande rigueur pour vous offrir des chiots sains et bien élevés.   
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <div className="grid gap-10">
                        {dogs.map((dog, index) => (
                            <Card key={dog.name} className="overflow-hidden bg-muted/30">
                                <CardContent className="p-0">
                                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                        <div className={`relative md:min-h-120 min-w-0 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                            {dog.images.length > 0 ? (
                                                <ImageCarousel
                                                    images={dog.images}
                                                    alt={`Carrousel d'images de ${dog.name}`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                                />
                                            ) : (
                                                <div className="mx-4 flex h-72 items-center justify-center rounded-lg bg-card/40 p-8 text-center md:h-full">
                                                    <div className="space-y-3">
                                                        <PawPrint className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                                                        <p className="text-sm font-medium text-muted-foreground">
                                                            Photos de {dog.name} à venir
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`p-8 space-y-4 flex flex-col justify-center min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <Badge variant="secondary">
                                                    <PawPrint className="h-4 w-4 mr-1" />
                                                    {dog.color}
                                                </Badge>
                                                <Badge variant="outline">{dog.origin}</Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">{dog.title}</h3>
                                                {dog.lineage && (
                                                    <p className="text-sm text-primary font-medium">{dog.lineage}</p>
                                                )}
                                                <p className="text-muted-foreground">{dog.temperament}</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Dog className="h-4 w-4 text-primary" />
                                                    <span>{dog.title}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Ruler className="min-h-4 min-w-4 text-primary" />
                                                    <span>{dog.size}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold flex items-center gap-2">
                                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                                    Santé et confirmations
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                    {dog.health.map((healthItem) => (
                                                        <li key={healthItem}>{healthItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <Link
                            href="/spitz-nain-pomeranien/chiots-disponibles"
                            className="inline-block w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Découvrir nos chiots disponibles
                        </Link>
                    </div>

                    <InternalLinksSection
                        title="Pour aller plus loin"
                        description="Découvrez la race en détail, consultez nos disponibilités ou contactez-nous pour échanger sur votre projet."
                        items={reproductorsInternalLinks}
                        className="mt-16"
                    />

                    <FAQSection
                        title="FAQ sélection et lignées"
                        description="Santé, équilibre émotionnel, vie de meute et importance des lignées dans notre sélection Spitz nain Poméranien."
                        items={faqReproducteurs}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
