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
import aurelieFounderImage from "@/public/assets/authors/aurelie/aurelie-avec-chiot-husky.webp"
import marineFounderImage from "@/public/assets/authors/marine-eleveuse-avec-spitz-bebe.jpeg"
import huskyMarkingImage from "@/public/pages/le-spitz-pomeranien/spitz-nain-pomeranien-noir-blanc-profil.webp"
import breedingSelectionImage from "@/public/pages/le-spitz-pomeranien/spitz-nain-pomeranien-creme-face.webp"

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
                  Nous élevons des spitz nains poméranien au marquage husky à la génétique rare et unique
                  au monde : 1 sujet sur 1 million possède cette robe spectaculaire issue du gène domino :
                  le poméranien aux allures de husky
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

            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={heroBannerImage}
                alt="Spitz nain Poméranien de l'élevage Cercle Polaire"
                fill
                priority
                placeholder="blur"
                className="object-contain"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-lg">
              <Image
                src={introPortraitImage}
                alt="Jeune Spitz nain Poméranien au pelage clair"
                fill
                placeholder="blur"
                className="object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Notre élevage
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">
                Notre élevage de poméranien vise l’excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionnés des chiens de type nordique et primitif, nous sommes tombés amoureux du plus
                petit primitif au monde : le spitz nain. Après plusieurs années de recherches et de
                sélection nous avons vu naître ces sujets à la robe rare et unique issus de prestigieuses
                lignées. Nos chiens sont tous testés ADN et indemnes de maladies génétiques. Ils sont
                séléctionnés pour leur tempérament sociable et proche de l’humain.
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
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                    Notre signature
                  </p>

                  <h2 className="max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
                    Nos Spitz nains sont issus d’un long travail de sélection
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Nous avons été séduits par la possibilité de retrouver, chez un Spitz nain sans
                    aucun mélange avec le Husky, ces contrastes et ce masque si caractéristiques qui
                    évoquent immédiatement l’univers des chiens nordiques.
                  </p>

                  <p className="leading-relaxed">
                    Notre sélection s’est ainsi construite autour de Poméraniens conservant pleinement
                    le type, le petit gabarit et les caractéristiques du Spitz nain, tout en exprimant
                    des marquages spectaculaires : gris silver, noir et blanc, nuances froides, masques
                    plus ou moins dessinés…
                  </p>

                  <p className="leading-relaxed">
                    Chaque naissance est unique. Le dessin du visage, l’intensité des contrastes et
                    la répartition des couleurs donnent à chacun de nos chiots une véritable identité.
                  </p>

                  <p className="leading-relaxed">
                    C’est finalement la rencontre de deux univers qui nous passionnent : l’esthétique
                    nordique que nous aimons tant chez le Pomsky, dans un véritable Spitz nain
                    Poméranien, sans croisement avec le Husky.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-5">
                  <p className="font-medium leading-relaxed">
                    Nous réfléchissons à chaque mariage dans son ensemble, en choisissant nos reproducteurs
                    pour leur complémentarité, leur santé, leur caractère et leur morphologie. Notre
                    ambition est de faire naître de magnifiques Spitz nains au look nordique, mais surtout
                    des chiens bien dans leurs pattes, proches de leur famille et agréables à vivre au
                    quotidien.
                  </p>
                </div>
              </div>

              <figure className="space-y-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={breedingSelectionImage}
                    alt="Spitz nain Poméranien présentant un marquage husky"
                    fill
                    placeholder="blur"
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>

                <figcaption className="text-sm leading-relaxed text-muted-foreground">
                  Le travail sur le marquage fait partie de notre sélection, au même titre que la
                  santé, le caractère et l’équilibre général du chien.
                </figcaption>
              </figure>
            </div>

            <div className="mt-16">
              <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                  Sélection et génétique
                </p>

                <h3 className="text-2xl font-semibold md:text-3xl">
                  Une sélection pensée sur plusieurs générations
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Notre travail ne s’arrête jamais à une seule portée. Chaque mariage s’inscrit dans
                  une vision à long terme, avec l’envie de construire génération après génération une
                  lignée qui nous ressemble.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Nous recherchons cet équilibre très particulier entre le type Poméranien que nous
                  aimons, un très petit gabarit et cette expression nordique qui fait toute la
                  singularité de nos chiens. Chaque naissance nous permet d’observer, d’affiner nos
                  choix et de poursuivre notre sélection vers un type toujours plus homogène et
                  reconnaissable.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />

                    <h4 className="text-lg font-semibold">
                      Tests et suivi de santé
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nos reproducteurs font l’objet d’un suivi attentif et de tests adaptés afin
                      d’éclairer nos décisions de mariage et de limiter autant que possible la
                      transmission de problèmes héréditaires.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />

                    <h4 className="text-lg font-semibold">
                      Type et marquage
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nous observons la morphologie, les couleurs et l’expression du marquage afin
                      de construire une sélection cohérente sans perdre de vue les qualités
                      fondamentales du Spitz nain Poméranien.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <Heart className="h-6 w-6 text-primary" aria-hidden="true" />

                    <h4 className="text-lg font-semibold">
                      Tempérament équilibré
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      La proximité avec l’humain, la stabilité émotionnelle, la curiosité et la
                      capacité à évoluer sereinement dans une famille font partie intégrante de
                      notre sélection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <PawPrint className="h-6 w-6 text-primary" aria-hidden="true" />

                    <h4 className="text-lg font-semibold">
                      Aptitude à la vie de famille
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nous recherchons des chiens capables de s’adapter à différents environnements
                      de vie, qu’ils soient urbains ou ruraux, tout en respectant leurs besoins
                      physiques et comportementaux.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 grid gap-10 rounded-lg border bg-muted/30 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={huskyMarkingImage}
                  alt="Spitz nain Poméranien élevé au sein de Cercle Polaire"
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                    À l’origine du projet
                  </p>

                  <h3 className="text-2xl font-semibold md:text-3xl">
                    Du Pomsky au Spitz nain, une histoire qui s’est dessinée naturellement
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Éleveuses de Pomsky depuis 2017 et pionnières de la race en France, c’est à travers
                    le Pomsky que nous sommes peu à peu tombées amoureuses du Spitz nain Poméranien.
                  </p>

                  <p className="leading-relaxed">
                    D’abord présent dans notre travail de sélection pour apporter son petit gabarit,
                    nous avons découvert au fil des années une race à part entière qui nous a
                    profondément séduites : son expression, sa personnalité, son incroyable fourrure
                    et ce format miniature si particulier.
                  </p>

                  <p className="leading-relaxed">
                    Notre passion pour l’esthétique nordique ne nous ayant jamais quittées, l’idée
                    s’est alors imposée naturellement : réunir dans un véritable Spitz nain ce que
                    nous aimions de ces deux univers.
                  </p>

                  <p className="leading-relaxed">
                    Nous avons ainsi orienté une partie de notre sélection vers des Poméraniens
                    capables d’exprimer naturellement ces magnifiques marquages inspirés du Husky :
                    masques, contrastes, gris silver, noir et blanc sans aucun croisement avec le Husky.
                  </p>

                  <p className="leading-relaxed">
                    Aujourd’hui, ce travail représente la continuité de notre histoire : celle d’une
                    passion commencée avec le Pomsky en 2017 et qui nous a conduites, presque
                    naturellement, jusqu’au Spitz nain Poméranien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Nos engagements
              </p>
              <h2 className="text-2xl font-semibold md:text-4xl">Grandir au cœur de notre quotidien</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos chiots naissent et grandissent auprès de nous. Dès leurs premières semaines, nous
                suivons leur évolution individuellement, observons leur caractère et les accompagnons
                progressivement dans leurs découvertes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La socialisation fait partie intégrante de notre quotidien : bruits de la maison,
                manipulations, présence humaine, autres chiens et premières expériences sont introduits
                naturellement et au rythme de chacun.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette proximité nous permet de connaître réellement nos chiots et de guider chaque
                famille vers celui dont le tempérament correspondra le mieux à son mode de vie.
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
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              {founders.map((founder) => (
                <Card key={founder.name} className="h-full overflow-hidden">
                  <CardContent className="grid h-full gap-0 p-6 md:grid-cols-[300px_1fr] md:items-center md:gap-8">
                    <div className="flex justify-center md:justify-start">
                      <div className="relative h-[420px] w-full max-w-[320px] overflow-hidden md:h-[460px] md:w-[300px] md:max-w-none">
                        <Image
                          src={founder.image}
                          alt={`Photo de ${founder.name}, éleveuse de Spitz nain Poméranien`}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 300px, 320px"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 pt-6 md:pt-0">
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
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  L’élevage est situé à Dommartin-lès-Cuiseaux, en Bourgogne-Franche-Comté, à proximité du Jura.
                  Les visites se font uniquement sur rendez-vous afin de respecter le rythme des chiens.
                </p>
                <p>
                  <span className="font-semibold">GAEC ELEVAGE ROYAL</span>
                  <br />
                  800 chemin de la liambe
                  <br />
                  71480 DOMMARTIN-LES-CUISEAUX
                </p>
              </div>
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
