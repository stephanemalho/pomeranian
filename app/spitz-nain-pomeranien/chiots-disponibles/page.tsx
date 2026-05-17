import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Heart, Mail, NotebookText, PawPrint, Phone, ShieldCheck, Sprout } from "lucide-react"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { Badge } from "@/components/ui/badge"

const pageImage = "/pages/spitz-pomeranien-prix/trois-spitz-pomeranien-bebe.jpg"

const puppiesInternalLinks: InternalLinkItem[] = [
    {
        href: "/spitz-nain-pomeranien",
        title: "Comprendre la race",
        description: "Origine, standard, caractère et points de vigilance avant adoption.",
    },
    {
        href: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
        title: "Voir nos adultes",
        description: "Découvrir les chiens qui portent notre sélection et leur tempérament.",
    },
    {
        href: "/contact",
        title: "Parler de votre projet",
        description: "Nous contacter pour une future portée, une visite ou une réservation.",
    },
]

const adoptionSteps = [
    "préparer un trajet calme avec caisse ou sac adapté, eau, alèse et linge familier",
    "prévoir les premières 48 heures comme un sas calme, sans visites ni sollicitations excessives",
    "installer un espace de repos lisible, loin du passage et accessible au chiot",
    "sortir très régulièrement pour accompagner la propreté sans pression",
    "habituer progressivement à de courtes absences pour construire la solitude sans rupture brutale",
]

const socialisationSteps = [
    "manipulations douces et régulières pour préparer les soins courants",
    "découverte graduelle des sons, textures, objets et routines de maison",
    "contacts humains positifs et temps de repos respectés",
    "sorties adaptées à l’âge et au niveau de sécurité sanitaire",
    "suivi vétérinaire et observation quotidienne du développement",
]

export const metadata: Metadata = {
    title: pageMetadata.puppies.title,
    description: pageMetadata.puppies.description,
    keywords: pageMetadata.puppies.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.puppies}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Chiots Spitz nain Poméranien à l'élevage",
                width: 1200,
                height: 630,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.puppies}`,
    },
}

export default function NosChiotsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
    const lastMod = returnLastmod(siteConfig.pages.puppies)
    const availablePuppies = puppies.filter((puppy) => puppy.isAvailable !== false)
    const hasAvailablePuppies = availablePuppies.length > 0

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
                        <div className="space-y-5">
                            <Badge variant="secondary" className="w-fit">Nos chiots</Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">Chiots Spitz nain Poméranien disponibles et futures portées</h1>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Cette page rassemble les disponibilités, les tarifs, la préparation au départ et notre
                                manière de socialiser les chiots. L’objectif est de vous donner une vision claire avant
                                toute réservation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#tarifs" className="rounded-md border px-4 py-2 text-sm font-medium text-primary hover:bg-muted">Tarifs</a>
                                <a href="#socialisation" className="rounded-md border px-4 py-2 text-sm font-medium text-primary hover:bg-muted">Socialisation</a>
                                <a href="#preparer-adoption" className="rounded-md border px-4 py-2 text-sm font-medium text-primary hover:bg-muted">Préparer l’adoption</a>
                            </div>
                        </div>
                        <div className="relative h-72 overflow-hidden rounded-lg bg-black md:h-105">
                            <Image
                                src={pageImage}
                                alt="Chiots Spitz nain Poméranien à l'élevage"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </section>

                    {hasAvailablePuppies ? (
                        <section className="grid gap-10">
                            {availablePuppies.map((puppy, index) => (
                                <Card key={puppy.name} className="overflow-hidden bg-muted/30">
                                    <CardContent className="p-0">
                                        <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                            <div className={`relative min-h-80 lg:min-h-120 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                                <ImageCarousel
                                                    images={puppy.images}
                                                    alt={`Carrousel d'images du chiot ${puppy.name}`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                                />
                                            </div>
                                            <div className={`p-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">{puppy.coat}</Badge>
                                                    <Badge variant="outline">{puppy.color}</Badge>
                                                </div>
                                                <h2 className="text-2xl font-bold">{puppy.name}</h2>
                                                <p className="text-muted-foreground">{puppy.description}</p>
                                                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                                                    <span className="flex items-center gap-2 text-muted-foreground"><PawPrint className="h-4 w-4 text-primary" />{puppy.sexe}</span>
                                                    <span className="flex items-center gap-2 text-muted-foreground"><Heart className="h-4 w-4 text-primary" />{puppy.parents}</span>
                                                    <span className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4 text-primary" />{puppy.readyDate}</span>
                                                </div>
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-fit rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90"
                                                    href={puppy.linkTo}
                                                >
                                                    Demander plus d’informations
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </section>
                    ) : (
                        <section className="rounded-lg border bg-muted/30 p-8 md:p-10">
                            <div className="mx-auto max-w-3xl space-y-5 text-center">
                                <NotebookText className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                                <h2 className="text-xl font-semibold md:text-2xl">Aucun chiot affiché actuellement</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Les réservations peuvent s’anticiper avant l’affichage d’une portée. Nous prenons le
                                    temps d’échanger avec les familles afin de comprendre leur mode de vie et de préparer
                                    une adoption cohérente.
                                </p>
                                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                                    <Link
                                        href="https://forms.gle/myGmQAj5Kim6UnVx8"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/85"
                                    >
                                        Rejoindre la liste d’attente
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="rounded-md border border-primary px-5 py-3 font-semibold text-primary hover:bg-primary/10"
                                    >
                                        Nous contacter
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )}

                    <section id="tarifs" className="scroll-mt-24 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                        <div className="space-y-3">
                            <Badge variant="secondary" className="w-fit">Tarifs</Badge>
                            <h2 className="text-xl font-bold md:text-2xl">Tarifs et réservation</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le prix d’un Spitz nain Poméranien dépend du sérieux de l’élevage, du suivi, de la
                                sélection, des soins et de l’accompagnement. Les offres trop basses doivent inviter à
                                vérifier les origines, les garanties et les conditions d’élevage.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card>
                                <CardContent className="space-y-2 p-6">
                                    <h3 className="font-semibold">Mâle Spitz nain Poméranien</h3>
                                    <p className="text-3xl font-bold text-primary">4 500 €</p>
                                    <p className="text-sm text-muted-foreground">Chiot de compagnie issu de notre sélection.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="space-y-2 p-6">
                                    <h3 className="font-semibold">Femelle Spitz nain Poméranien</h3>
                                    <p className="text-3xl font-bold text-primary">5 000 €</p>
                                    <p className="text-sm text-muted-foreground">Même exigence de suivi, de socialisation et d’accompagnement.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="socialisation" className="scroll-mt-24 rounded-lg border bg-muted/30 p-6 md:p-8">
                        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                            <div className="space-y-3">
                                <Badge variant="secondary" className="w-fit">Socialisation</Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Un départ progressif, pas une mise en scène</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    La socialisation doit rester adaptée à l’âge du chiot : assez riche pour l’ouvrir au
                                    monde, assez calme pour respecter son sommeil, sa taille et sa maturité.
                                </p>
                            </div>
                            <div className="grid gap-3">
                                {socialisationSteps.map((item) => (
                                    <div key={item} className="flex gap-3 rounded-md bg-background p-4">
                                        <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="preparer-adoption" className="scroll-mt-24 grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardContent className="space-y-5 p-6 md:p-8">
                                <Badge variant="secondary" className="w-fit">Préparer l’adoption</Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Les premiers jours doivent être simples et lisibles</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Un chiot Spitz nain Poméranien n’a pas besoin d’une arrivée spectaculaire. Il a besoin
                                    d’humains calmes, d’un espace de repos, d’un rythme régulier et de sorties fréquentes.
                                </p>
                                <div className="grid gap-3">
                                    {adoptionSteps.map((item) => (
                                        <div key={item} className="flex gap-3">
                                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-5 p-6 md:p-8">
                                <Badge variant="secondary" className="w-fit">Contact</Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Parlez-nous de votre projet</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nous échangeons avec chaque famille avant réservation afin de vérifier que le Spitz
                                    nain Poméranien correspond au quotidien envisagé.
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span>{siteConfig.contact.phoneFormatted}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span>{siteConfig.contact.email}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/85"
                                >
                                    Nous contacter
                                </Link>
                            </CardContent>
                        </Card>
                    </section>

                    <InternalLinksSection
                        title="Pages utiles avant de réserver"
                        description="Le parcours le plus simple pour comprendre la race, nos adultes et la suite de votre projet."
                        items={puppiesInternalLinks}
                    />

                    <FAQSection
                        title="FAQ adoption et vie avec un Spitz nain Poméranien"
                        description="Préparation des chiots, réservations, accompagnement et départ en famille : les réponses essentielles."
                        items={faqNosChiots}
                    />
                    <div className="text-right text-xs text-muted-foreground">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </main>
        </>
    )
}
