import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { faqSpitzNainPomeranien } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { Feather, Heart, PawPrint, Ruler, Sparkles } from "lucide-react"

const pageImage = "/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp"

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
                alt: "Spitz nain Poméranien dans un décor doux et naturel",
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

const traits = [
    {
        title: "Petit format",
        text: "Le Spitz nain Poméranien est un chien compact, léger et facile à intégrer dans une vie de famille, à condition de respecter ses besoins de mouvement et de repos.",
        icon: Ruler,
    },
    {
        title: "Tempérament proche",
        text: "Vif, expressif et attentif, il aime participer à la vie quotidienne. Une socialisation progressive aide à construire un adulte confiant et bien dans ses pattes.",
        icon: Heart,
    },
    {
        title: "Pelage dense",
        text: "Sa fourrure double demande un brossage régulier, une attention aux périodes de mue et un entretien doux pour préserver la qualité du poil.",
        icon: Feather,
    },
]

const spitzInternalLinks: InternalLinkItem[] = [
    {
        href: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        title: "Voir nos chiens reproducteurs",
        description: "Découvrir les adultes qui portent notre sélection et leurs lignées.",
    },
    {
        href: "/bien-etre-animal",
        title: "Comprendre leur cadre de vie",
        description: "Voir comment nous socialisons les chiots et organisons le quotidien de l’élevage.",
    },
    {
        href: "/spitz-nain-pomeranien/prix",
        title: "Consulter nos prix à l’élevage",
        description: "Retrouver nos tarifs actuels et ce qu’ils recouvrent concrètement.",
    },
]

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
                            <h1 className="text-xl md:text-3xl font-bold">
                                Spitz nain Poméranien : caractère, taille, entretien et adoption
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Le Spitz nain Poméranien, aussi appelé Poméranien, est un petit chien de compagnie vif,
                                élégant et très attaché à ses humains. Son format compact ne doit pas faire oublier son
                                besoin de repères, de socialisation et d’un quotidien bien structuré.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre sélection met l’accent sur la santé, l’équilibre émotionnel, la qualité du type et
                                l’accompagnement des familles avant comme après l’adoption.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>chien proche de l’humain</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>petit format, grande présence</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>socialisation progressive</span>
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
                        {traits.map((trait) => {
                            const Icon = trait.icon

                            return (
                                <Card key={trait.title}>
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                            <CardTitle className="text-lg">{trait.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{trait.text}</p>
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
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold">Un petit chien à préparer sérieusement</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le Poméranien peut vivre en appartement comme en maison, si son quotidien reste stable :
                                sorties régulières, apprentissages doux, manipulations positives et temps de repos
                                respectés. Son intelligence et sa sensibilité demandent une éducation cohérente, sans
                                brutalité ni surstimulation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Avant toute adoption, nous échangeons avec chaque famille sur son rythme de vie, ses
                                attentes et sa capacité à accompagner un chiot dans les premières semaines.
                            </p>
                            <Link
                                href={siteConfig.pages.contact}
                                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </section>

                    <InternalLinksSection
                        title="Continuer votre lecture"
                        description="Les pages utiles pour comprendre notre élevage, nos chiens et les prochaines étapes d’une adoption."
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
