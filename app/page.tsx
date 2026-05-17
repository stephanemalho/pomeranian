import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Heart, MapPin, PawPrint, ShieldCheck, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import heroBannerImage from "@/public/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp"
import introPortraitImage from "@/public/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.webp"
import aurelieFounderImage from "@/public/assets/authors/aurelie-elevage-spitz-pomeranien-et-chiot.jpeg"
import marineFounderImage from "@/public/assets/authors/marine-and-a-new-puppy.jpeg"

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: buildOpenGraph({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        alt: siteConfig.ogImageAlt,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        type: "image/webp",
      },
    ],
  }),
  twitter: buildTwitter({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  }),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

const commitments = [
  {
    title: "Sélection attentive",
    text: "Chaque mariage est réfléchi autour de la santé, du tempérament, du type et de la capacité du futur chiot à devenir un vrai chien de compagnie.",
    icon: ShieldCheck,
  },
  {
    title: "Socialisation progressive",
    text: "Les chiots découvrent les manipulations, les bruits du quotidien, les textures, les sorties adaptées et la présence humaine dans un rythme stable.",
    icon: PawPrint,
  },
  {
    title: "Accompagnement durable",
    text: "Nous échangeons avant l’adoption, préparons le départ et restons disponibles pour aider les familles lors des premières semaines.",
    icon: Heart,
  },
]

const founders = [
  {
    name: "Aurélie",
    image: aurelieFounderImage,
    description:
      "Aurélie apporte son expérience du comportement canin, de l’observation et de l’accompagnement des familles. Elle veille à ce que chaque chiot grandisse avec des repères lisibles, une relation humaine positive et une préparation cohérente à la vie de famille.",
  },
  {
    name: "Marine",
    image: marineFounderImage,
    description:
      "Marine suit le quotidien de l’élevage avec précision : hygiène, observation des chiots, confort des mamans et organisation des soins. Sa présence régulière permet d’ajuster le rythme de chaque portée sans précipitation.",
  },
]

const internalLinks = [
  {
    title: "Comprendre la race",
    text: "Origine, standard, caractère, entretien et points de vigilance avant adoption.",
    href: "/spitz-nain-pomeranien",
  },
  {
    title: "Voir nos chiots",
    text: "Disponibilités, tarifs, préparation au départ, socialisation et réservation.",
    href: "/spitz-nain-pomeranien/chiots-disponibles",
  },
  {
    title: "Découvrir nos adultes",
    text: "Les reproducteurs, leur tempérament, leur santé et leur rôle dans notre sélection.",
    href: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
  },
]

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const lastMod = returnLastmod(siteConfig.pages.home)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-[#102033] text-white">
          <div className="container mx-auto grid gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
            <div className="space-y-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Cercle Polaire
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                  Élevage de Spitz nain Poméranien en France
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                  Nous élevons des Spitz nains Poméraniens avec une attention particulière portée à la
                  santé, au tempérament, à la socialisation et à l’accompagnement des familles.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/spitz-nain-pomeranien/chiots-disponibles"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Voir nos chiots
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Parler de votre projet
                </Link>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-lg bg-black md:h-110">
              <Image
                src={heroBannerImage}
                alt="Spitz nain Poméranien de l'élevage Cercle Polaire"
                fill
                priority
                placeholder="blur"
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative h-80 overflow-hidden rounded-lg bg-muted lg:h-105">
              <Image
                src={introPortraitImage}
                alt="Jeune Spitz nain Poméranien au pelage clair"
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Notre élevage
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">
                Une sélection à taille humaine, pensée pour la vie de famille
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Spitz nain Poméranien demande plus qu’une belle apparence : il a besoin d’un départ
                stable, d’une socialisation progressive et d’humains capables de respecter son petit gabarit
                comme sa personnalité vive.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre rôle est de préparer des chiots équilibrés, de préserver le bien-être des adultes et
                d’accompagner chaque famille avec transparence avant toute réservation.
              </p>
              <Link
                href="/spitz-nain-pomeranien"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Lire les repères sur la race
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Nos engagements
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">Santé, socialisation et suivi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous privilégions des portées limitées, un suivi quotidien et un cadre calme pour respecter
                le rythme des chiots comme celui des adultes.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {commitments.map((item) => {
                const Icon = item.icon

                return (
                  <Card key={item.title} className="h-full bg-background/80">
                    <CardContent className="space-y-4 p-6">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Les éleveuses
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">Aurélie et Marine</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deux regards complémentaires au service d’un même objectif : faire grandir des chiots bien
                préparés, dans un cadre propre, stable et attentif.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {founders.map((founder) => (
                <Card key={founder.name} className="overflow-hidden">
                  <CardContent className="grid gap-0 p-0 md:grid-cols-[220px_1fr]">
                    <div className="relative min-h-80 bg-muted">
                      <Image
                        src={founder.image}
                        alt={`Photo de ${founder.name}, éleveuse de Spitz nain Poméranien`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 220px, 100vw"
                      />
                    </div>
                    <div className="space-y-4 p-6">
                      <h3 className="text-2xl font-semibold">{founder.name}</h3>
                      <p className="leading-relaxed text-muted-foreground">{founder.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Continuer la visite
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">Un parcours simple pour adopter</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {internalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  <Card className="h-full transition-colors group-hover:border-primary/35">
                    <CardContent className="space-y-3 p-6">
                      <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold group-hover:text-primary">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 grid gap-4 rounded-lg border bg-muted/30 p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">Situés en Saône-et-Loire</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                L’élevage est situé à Dommartin-lès-Cuiseaux, en Bourgogne-Franche-Comté, à proximité du Jura.
                Les visites se font uniquement sur rendez-vous afin de respecter le rythme des chiens.
              </p>
            </div>
            <FAQSection
              title="FAQ Spitz nain Poméranien en bref"
              description="Les points clés sur notre élevage de Spitz nain Poméranien."
              items={faqHome}
            />
            <div className="text-right text-xs text-muted-foreground mt-6">
              Dernière mise à jour : {lastMod}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
