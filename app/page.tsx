import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import { Heart, MapPin, Route } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { isBlogEnabled } from "@/lib/blog-visibility"
import heroBannerImage from "@/public/pages/homePage/spitz-nain-pomeranien-feu-blanc-gris-noir.webp"
import heroPuppyImage from "@/public/pages/homePage/spitz-chiot-gris-1-mois.webp"
import introPortraitImage from "@/public/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.webp"
import signatureDogImage from "@/public/pages/homePage/spitz-nain-pomeranien-gris-silver-et-blanc.webp"
import aurelieFounderImage from "@/public/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg"
import marineFounderImage from "@/public/assets/authors/marine-and-a-new-puppy.jpeg"

import { shibaBenefits } from "@/components/content/home/shiba/shibaBenefits"

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

export default function HomePage() {
  // Schémas JSON-LD
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const lastMod = returnLastmod(siteConfig.pages.home)
  const nordicTraits = [
    "la noblesse du husky",
    "son regard attendrissant",
    "son esthétique sauvage",
  ]
  const breedingCommitments = [
    "la sélection rigoureuse des couleurs et des marquages",
    "le respect de la santé et du bien-être de nos chiens",
    "des tests ADN rigoureux",
    "l'équilibre émotionnel et la douceur de caractère",
    "la capacité à être un bon chien de compagnie",
    "son adaptation à tous les milieux, du citadin au rural",
  ]
  const founders = [
    {
      name: "Aurélie",
      image: aurelieFounderImage,
      description:
        "Passionnée par les animaux depuis toujours, Aurélie a d'abord exercé comme éducatrice comportementaliste auprès de centres de rééducation, d'éducation canine et d'associations de protection animale. Son expérience des chiens nordiques, puis sa rencontre avec le Spitz nain Poméranien, l'ont naturellement conduite vers un élevage où le comportement, la socialisation et le bien-être occupent une place centrale. Elle accompagne chaque chiot et chaque famille avec précision, de la naissance jusqu'à la vie adulte.",
      badges: [
        "Ancienne éducatrice comportementaliste",
        "Depuis 2018 dans l'élevage",
        "Spécialiste bien-être animal",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      image: marineFounderImage,
      description:
        "Marine a changé de vie pour se consacrer pleinement au développement de l'élevage depuis quatre ans. Véritable perfectionniste, elle veille à l'entretien rigoureux des locaux, à l'observation quotidienne des chiots et au confort de chaque maman. Grâce à sa vigilance et à son sens de l'anticipation, chaque petit est ausculté, accompagné et bichonné dès la naissance afin d'évoluer dans des conditions optimales pour sa santé et son bien-être.",
      badges: [
        "4 ans d'expérience en élevage canin",
        "Protocoles d'hygiène rigoureux",
        "Suivi quotidien des chiots",
      ],
    },
  ]

  return (
    <>
      {/* JSON-LD Schemas */}
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

      <div className="flex flex-col">
        <section className="relative overflow-hidden bg-accent-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.14),transparent_24%)]" aria-hidden="true" />
          <div className="relative overflow-hidden bg-linear-to-tl from-[#1a3048] to-[#07111d]">
            <div className="container mx-auto px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-14">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className="space-y-8 text-white">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/72 md:text-sm">
                      Cercle Polaire
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-white md:text-5xl lg:text-6xl">
                      Bienvenue dans notre élevage Cercle Polaire
                      <span className="mt-2 block text-white/92">Spitz nain Poméranien</span>
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-white/84 md:text-lg">
                      Découvrez notre programme d&apos;élevage dédié au Spitz nain, appelé également loulou de
                      Poméranie au marquage husky : un sujet sur un million possède ce gène absolument
                      rarissime, qui lui donne l&apos;allure du plus petit primitif au monde ressemblant au husky.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/chiots-disponibles"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#223852] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-[#d8e5f0] dark:text-[#102030] dark:hover:bg-[#c9d8e8]"
                    >
                      Voir nos chiots disponibles
                    </Link>
                    <p className="text-sm leading-relaxed text-white/74 md:max-w-sm">
                      À la recherche d&apos;un Spitz nain poméranien absolument atypique ?
                    </p>
                  </div>

                  <div className="grid gap-5 border-t border-white/14 pt-6 sm:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                        Rareté
                      </p>
                      <p className="text-lg font-semibold text-white">1 sur 1 million</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                        Signature
                      </p>
                      <p className="text-lg font-semibold text-white">Marquage husky</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                        Essence
                      </p>
                      <p className="text-lg font-semibold text-white">Le plus petit primitif</p>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                  <div className="relative rounded-[2.2rem] border border-white/14 bg-white/8 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="relative aspect-[5/6] overflow-hidden rounded-[1.7rem] sm:aspect-[16/12] lg:aspect-[5/6]">
                      <Image
                        src={heroBannerImage}
                        alt="Bandeau de présentation Spitz nain Poméranien"
                        fill
                        priority
                        fetchPriority="high"
                        loading="eager"
                        unoptimized
                        placeholder="blur"
                        sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, (min-width: 768px) 80vw, 100vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-[#16253a]/36 via-transparent to-white/8"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-4 block sm:hidden">
                    <div className="mx-auto max-w-[220px] rounded-[1.6rem] border border-white/14 bg-white/10 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <Image
                          src={heroPuppyImage}
                          alt="Spitz nain Poméranien chiot de 1 mois avec un marquage husky"
                          fill
                          unoptimized
                          placeholder="blur"
                          sizes="220px"
                          quality={68}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-2 hidden w-[42%] min-w-[190px] max-w-[240px] sm:block lg:-bottom-10 lg:-right-4">
                    <div className="rounded-[1.8rem] border border-white/14 bg-white/10 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                        <Image
                          src={heroPuppyImage}
                          alt="Spitz nain Poméranien chiot de 1 mois avec un marquage husky"
                          fill
                          unoptimized
                          placeholder="blur"
                          sizes="(min-width: 1280px) 220px, (min-width: 768px) 26vw, 180px"
                          quality={68}
                          className="object-cover object-center"
                        />
                        <div
                          className="absolute inset-0 bg-linear-to-t from-[#152538]/24 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu centré */}
        {/* Présentation */}
        <section className="py-16 bg-muted/30 my-8">
          <div className="container mx-auto p-2">
            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
              <div className="space-y-6 rounded-[2rem] border border-primary/10 bg-linear-to-br from-[#fbfdff] via-card to-[#e8eff6] p-6 shadow-[0_28px_80px_rgba(52,81,110,0.10)] dark:from-[#122031] dark:via-[#152231] dark:to-[#1a2a3d] md:p-8 lg:p-10">
                <p className="w-fit text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Le Spitz nain Poméranien
                </p>

                <div className="space-y-4">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-[0.01em] md:text-4xl">
                    Nos spitz nains sont issus d&apos;un long travail de sélection
                  </h2>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Nous élevons avec passion et engagement le plus petit de tous les primitifs au monde :
                    le spitz nain poméranien. Nous sommes tombés sous le charme d&apos;une robe unique au
                    monde, le marquage husky.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm dark:bg-[#1a2a3d]">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                      Notre signature
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      Provenant du gène domino, chaque chiot est une œuvre vivante, avec une combinaison
                      unique de couleurs allant du gris silver au noir et blanc, en passant par le bleu et
                      blanc, tout en conservant l&apos;âme sauvage du husky.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#1d3046] p-5 text-white shadow-[0_20px_60px_rgba(16,30,48,0.24)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                      Un seul regard
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
                      Leur masque est dessiné à la manière d&apos;une œuvre d&apos;art. Il est possible de les
                      reconnaître en un seul coup d&apos;œil.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-primary/10 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Une présence rare, une expression nordique et un vrai travail d&apos;élevage derrière
                    chaque chiot.
                  </p>
                  <Link
                    href="/presentation-elevage"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Découvrir notre méthode d&apos;élevage
                  </Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-md xl:max-w-sm">
                <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white/70 p-3 shadow-[0_28px_90px_rgba(52,81,110,0.14)] backdrop-blur-sm dark:bg-[#182737]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={introPortraitImage}
                      alt="Chiot blanc dans un décor japonais"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, (max-width: 1280px) 42vw, 360px"
                      quality={70}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 py-12">
          <div className="container mx-auto p-2">
            <div className="overflow-hidden rounded-[2.5rem] border border-primary/10 bg-linear-to-br from-[#fbfdff] via-[#f1f6fb] to-[#e3ebf4] px-4 py-8 shadow-[0_32px_120px_rgba(52,81,110,0.10)] dark:from-[#101b28] dark:via-[#142233] dark:to-[#1a2a3d] md:px-6 md:py-10 lg:px-8">
              <div className="mx-auto mb-10 max-w-4xl text-center space-y-4">
                <p className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Une identité rare
                </p>
                <h2 className="text-2xl font-semibold tracking-[0.01em] md:text-4xl">
                  L&apos;expression nordique en version miniature
                </h2>
                <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground md:text-lg">
                  Une lecture plus visuelle de ce qui rend nos spitz nains Poméraniens si singuliers :
                  l&apos;allure nordique, la rareté du marquage husky, l&apos;équilibre émotionnel et la qualité
                  de vie que nous construisons autour de chaque chiot.
                </p>
                <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
                <Card className="overflow-hidden border-primary/15 bg-linear-to-br from-[#fbfdff] via-white/95 to-[#e7eef6] shadow-[0_24px_80px_rgba(52,81,110,0.12)] dark:from-[#122031] dark:via-[#152231] dark:to-[#1c2d41]">
                  <CardContent className="space-y-6 p-6 md:p-8">
                    <div className="space-y-3">
                      <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Signature visuelle
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[0.02em] md:text-3xl">
                        L&apos;expression nordique en version miniature
                      </h3>
                      <p className="max-w-2xl leading-relaxed text-muted-foreground">
                        À travers le marquage husky, il devient la plus petite expression du chien nordique,
                        concentrant dans un format délicat, élégant et proche de l&apos;humain une présence
                        immédiatement reconnaissable.
                      </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {nordicTraits.map((trait, index) => (
                          <div
                            key={trait}
                            className="rounded-[1.4rem] border border-primary/10 bg-white/90 p-4 shadow-[0_10px_30px_rgba(52,81,110,0.08)] dark:bg-[#1b2b3f]"
                          >
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                              0{index + 1}
                            </div>
                            <p className="mt-3 text-sm font-medium leading-relaxed text-foreground md:text-base">
                              {trait}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="overflow-hidden rounded-[1.8rem] border border-primary/10 bg-white/70 p-3 shadow-[0_18px_50px_rgba(52,81,110,0.10)] dark:bg-[#1a2a3d]">
                        <div className="relative aspect-4/5 overflow-hidden rounded-[1.2rem]">
                          <Image
                            src={signatureDogImage}
                            alt="Spitz nain Poméranien gris silver et blanc"
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 320px"
                            quality={70}
                          />
                          <div
                            className="absolute inset-0 bg-linear-to-t from-[#3f2512]/28 via-transparent to-transparent"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                        <div className="rounded-[1.8rem] bg-[#1d3046] px-6 py-6 text-white shadow-[0_24px_70px_rgba(16,30,48,0.26)]">
                      <p className="leading-relaxed text-white/92 md:text-lg">
                        Nous aimons dire que nos chiots portent la couleur du husky dans le plus petit
                        primitif du monde. Au-delà de l&apos;esthétique, notre travail repose sur une sélection
                        exigeante, pensée pour faire naître des compagnons harmonieux, sensibles et
                        profondément connectés à leur famille.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-primary/15 bg-white/85 shadow-[0_24px_80px_rgba(52,81,110,0.10)] backdrop-blur-sm dark:bg-[#142334]">
                  <CardContent className="space-y-6 p-6 md:p-8">
                    <div className="space-y-3">
                      <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Méthode d&apos;élevage
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[0.02em] md:text-3xl">
                        Une sélection guidée par la santé et l&apos;équilibre
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        Notre programme d&apos;élevage repose sur des choix précis, effectués avec constance
                        pour préserver la beauté du type, la stabilité émotionnelle et les aptitudes de chien
                        de compagnie du Spitz nain Poméranien.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {breedingCommitments.map((commitment, index) => (
                        <div
                          key={commitment}
                          className="rounded-[1.4rem] border border-primary/10 bg-linear-to-br from-white to-[#eef4fa] px-4 py-4 shadow-[0_8px_24px_rgba(52,81,110,0.06)] dark:from-[#182737] dark:to-[#203246]"
                        >
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/65">
                            Engagement 0{index + 1}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground">
                            {commitment}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.8rem] border border-primary/10 bg-primary/6 px-6 py-6">
                      <p className="leading-relaxed text-muted-foreground md:text-lg">
                        Nos chiots grandissent dans un environnement optimal, sécurisant et stimulant afin de
                        devenir des compagnons confiants, rares et magnétiques, destinés à ceux qui ressentent
                        l&apos;appel du sauvage en version extrêmement miniature.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 py-12">
          <div className="container mx-auto p-2">
            <div className="overflow-hidden rounded-[2.2rem] border border-primary/10 bg-linear-to-br from-white via-[#f4f8fc] to-[#e4ecf5] px-4 py-8 shadow-[0_24px_90px_rgba(52,81,110,0.08)] dark:from-[#101b28] dark:via-[#142233] dark:to-[#1a2a3d] md:px-6 md:py-10">
              <div className="mx-auto mb-10 max-w-4xl text-center space-y-4">
                <p className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Le quotidien de l&apos;élevage
                </p>
                <h2 className="text-2xl font-semibold tracking-[0.01em] md:text-4xl">
                  Un cadre exigeant, une présence constante
                </h2>
                <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground md:text-lg">
                  Derrière chaque chiot, il y a une organisation précise, des espaces pensés pour leur
                  confort et une attention quotidienne portée à la santé, à la naissance et à l&apos;éveil.
                </p>
                <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="overflow-hidden border-primary/15 bg-white/80 shadow-[0_20px_60px_rgba(52,81,110,0.08)] backdrop-blur-sm dark:bg-[#142334]">
                  <CardContent className="space-y-5 p-6 md:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-sm">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                        Accessible depuis la France et la Suisse
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[0.01em]">
                        Un élevage accessible depuis toute la France
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        L&apos;élevage Spitz nain Poméranien est situé en Bourgogne-Franche-Comté à la limite
                        du Jura, dans la commune de Dommartin-lès-Cuiseaux (71), à 1h30 de Lyon, 2h de
                        Genève et moins de 4h de Paris en voiture.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-primary/10 bg-linear-to-r from-primary/8 to-transparent px-5 py-4">
                      <div className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Route className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Nous sommes idéalement situés pour accueillir les familles de toute la France et
                          des pays limitrophes, notamment de Suisse, qui souhaitent adopter un Spitz nain
                          Poméranien.
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-primary/15 bg-[#1d3046] text-white shadow-[0_24px_70px_rgba(16,30,48,0.24)]">
                  <CardContent className="space-y-5 p-6 md:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                      <Heart className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                        Notre exigence
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[0.01em]">
                        Faire naître des compagnons harmonieux
                      </h3>
                      <p className="leading-relaxed text-white/85">
                        Chaque portée est préparée bien avant la naissance : sélection de lignées saines,
                        dépistages ADN et maladies génétiques, suivi vétérinaire rigoureux et beaucoup de
                        présence humaine dès les premiers jours.
                      </p>
                      <p className="leading-relaxed text-white/85">
                        Le Spitz nain Poméranien est une race particulièrement délicate à élever en raison de
                        sa très petite taille. Le suivi de gestation, l&apos;accompagnement des mises bas et les
                        soins intensifs des premiers jours demandent une énergie considérable, que nous
                        assumons avec exigence pour donner à chaque chiot le meilleur départ possible.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Nos valeurs */}
        <section className="my-8 bg-muted/20 py-16 dark:bg-[#0f1823]">
          <div className="container mx-auto p-2">
            <div className="mb-12 text-center space-y-4">
              <p className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                Nos valeurs
              </p>
              <h2 className="text-2xl font-semibold tracking-[0.01em] md:text-4xl">
                Une méthode d&apos;élevage responsable
              </h2>

              <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground md:text-lg">
                Au-delà de la rareté du marquage husky, notre élevage repose sur une méthode responsable :
                santé, socialisation précoce, transparence et temps réellement dédié à chaque chiot comme à
                chaque famille.
              </p>

              <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {shibaBenefits.map((item) => (
                <Card
                  key={item.title}
                  className="group h-full overflow-hidden rounded-[1.8rem] border-primary/10 bg-white/85 p-3 shadow-[0_18px_50px_rgba(52,81,110,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(52,81,110,0.12)] dark:bg-[#142334]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-[#4a2b13]/20 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <CardContent className="flex h-[220px] flex-col space-y-3 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/65">
                      Valeur
                    </p>
                    <h3 className="text-xl font-semibold tracking-[0.01em]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {isBlogEnabled ? (
            <Link
              href="/blog"
              className="mt-12 flex w-fit m-auto items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Découvrir nos conseils autour du Spitz nain
            </Link>
          ) : null}
        </section>

        {/* éleveurs */}
        <section className="my-8 bg-muted/30 py-16 dark:bg-[#0f1823]">
          <div className="container mx-auto p-2">
            <div className="overflow-hidden rounded-[2.5rem] border border-primary/10 bg-linear-to-br from-[#fbfdff] via-white to-[#e7eef6] px-4 py-8 shadow-[0_26px_90px_rgba(52,81,110,0.08)] dark:from-[#101b28] dark:via-[#142233] dark:to-[#1a2a3d] md:px-6 md:py-10">
              <div className="mb-12 text-center space-y-4">
                <p className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Les éleveuses
                </p>
                <h2 className="text-2xl font-semibold tracking-[0.01em] md:text-4xl">Les Éleveuses</h2>
                <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground md:text-lg">
                  L&apos;élevage est né d&apos;une longue expérience des chiens de type nordique, développée pendant
                  neuf ans au sein de l&apos;élevage Royal Pomsky. Cette connaissance du type husky nous a
                  naturellement conduites vers un nouveau défi : retrouver cette expression sauvage et
                  magnétique dans le plus petit primitif du monde, sans altérer l&apos;intégrité du Spitz nain
                  Poméranien.
                </p>
                <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground">
                  Nos chiens sont issus d&apos;un travail de sélection sur plusieurs générations. Leurs tests ADN
                  confirment des Poméraniens 100 %, sans croisement, afin de préserver la pureté de la race,
                  la stabilité de la taille, la cohérence du type et la transmission naturelle du marquage
                  husky.
                </p>
                <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
              {founders.map((founder, index) => (
                <Link
                  key={index}
                  href={`/presentation-eleveuses#${founder.name.toLowerCase()}`}
                  className="block h-full rounded-[1.8rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Lire la présentation de ${founder.name}`}
                >
                  <article className="group flex h-full overflow-hidden rounded-[1.9rem] border border-primary/10 bg-linear-to-br from-white via-[#f8fbfe] to-[#e7eef6] shadow-[0_18px_50px_rgba(52,81,110,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(52,81,110,0.12)] dark:from-[#122031] dark:via-[#162435] dark:to-[#1d2d42]">
                    <div className="grid h-full w-full gap-0 md:grid-cols-[240px_1fr]">
                      <div className="flex items-start justify-center p-5 md:p-6">
                        <div className="w-full max-w-[220px] overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_14px_40px_rgba(52,81,110,0.10)] dark:bg-[#1a2a3d]">
                          <div className="relative aspect-4/5 w-full overflow-hidden">
                            <Image
                              src={founder.image || "/home-founder-fallback.jpg"}
                              alt={`Photo d'${founder.name}, fondatrice de l'élevage`}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-[1.04]"
                              sizes="(max-width: 768px) 70vw, (max-width: 1024px) 38vw, 240px"
                              quality={70}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid h-full grid-rows-[auto_auto_1fr] gap-5 p-6 md:p-7">
                        <div className="space-y-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/65">
                            Éleveuse
                          </p>
                          <h3 className="text-2xl font-semibold tracking-[0.01em] md:text-3xl">
                            {founder.name}
                          </h3>
                        </div>

                        <div className="min-h-[72px] space-y-1.5">
                          {founder.badges.map((badge, badgeIdx) => (
                            <p
                              key={badgeIdx}
                              className="text-sm leading-relaxed text-primary/75"
                            >
                              {badge}
                            </p>
                          ))}
                        </div>

                        <div className="h-full rounded-[1.4rem] border border-primary/10 bg-white/70 px-5 py-4 dark:bg-[#1a2a3d]">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {founder.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
              </div>

              <div className="mt-12 rounded-[1.8rem] border border-primary/10 bg-white/75 px-6 py-8 text-center shadow-[0_16px_40px_rgba(52,81,110,0.06)] dark:bg-[#142334]">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-[0.01em] md:text-3xl">
                    Vous souhaitez adopter un Spitz nain Poméranien ?
                  </h3>
                  <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
                    Échangeons ensemble sur votre projet d&apos;adoption et trouvons le chiot qui correspond le
                    mieux à votre mode de vie, à votre sensibilité et à votre environnement.
                  </p>
                  <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
                  <Link
                    href="/contact"
                    aria-label="Contacter les éleveuses pour un projet d'adoption de Spitz nain Poméranien"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Contacter Aurélie et Marine
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQSection
          title="FAQ Spitz nain Poméranien en bref"
          description="Les points clés sur notre élevage de Spitz nain Poméranien."
          items={faqHome}
        />
        <div className="container mx-auto text-right text-xs text-muted-foreground my-6">
          Dernière mise à jour : {lastMod}
        </div>
      </div>
    </>
  )
}
