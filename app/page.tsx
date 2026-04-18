import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import { Heart, MapPin, Route } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { isBlogEnabled } from "@/lib/blog-visibility"

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
      image: "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
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
      image: "/pages/homePage/marine-de-kawaii-avec-un-chiot-mame.jpg",
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
        <section className="bg-accent-foreground">
          <div className="overflow-hidden bg-linear-to-b from-[#f7c888] via-[#de8d3e] to-[#8f4e1f]">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-6xl space-y-5 md:space-y-6">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#8a572c] shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:rounded-4xl">
                  <Image
                    src="/pages/homePage/bandeau-presentation-kawaii-mameshiba.jpg"
                    alt="Bandeau de présentation Spitz nain Poméranien"
                    width={1260}
                    height={400}
                    priority
                    fetchPriority="high"
                    loading="eager"
                    sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
                    className="block h-auto w-full"
                  />
                </div>

                <div className="mx-auto max-w-6xl rounded-xl border border-white/12 bg-[#9b6331]/72 px-6 py-6 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-sm md:rounded-4xl md:px-8">
                  <div className="mx-auto max-w-4xl">
                    <div className="mx-auto inline-flex items-center gap-3 px-4 py-1 text-md uppercase tracking-[0.35em] text-white/80">
                      Cercle Polaire
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold tracking-[0.03em] text-white md:text-4xl">
                      Bienvenue dans notre élevage Cercle Polaire - Spitz nain Poméranien
                    </h1>
                  </div>
                </div>

                <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/12 bg-[#8c5a31]/55 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-sm md:rounded-4xl">
                  <div className="relative aspect-4/3 sm:aspect-16/11 md:aspect-16/8 lg:aspect-16/7">
                    <Image
                      src="/mame-shiba-in-a-sakura-tree.jpg"
                      alt="Spitz nain Poméranien dans un décor inspiré du Japon"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 960px, (min-width: 1024px) 80vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 32px)"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#6b401f]/35 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                </div>

                <div className="mx-auto max-w-6xl rounded-xl border border-white/12 bg-[#6a4021]/82 px-6 py-6 text-white shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-md md:rounded-4xl md:px-8 md:py-8 lg:px-10">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/72">
                    À la recherche d&apos;un Spitz nain
                    poméranien absolument atypique ?
                  </p>
                  <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_0.75fr] lg:items-end">
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-white/88 md:text-lg">
                        Découvrez notre programme d’élevage dédié au Spitz nain, appelé également loulou de
                        Poméranie au marquage husky : 1 sujet sur 1 million possède ce gène absolument rarissime, et
                        en fait le plus petit primitif au monde ressemblant au Husky.
                      </p>
                    </div>
                    <div className="flex lg:justify-end">
                      <Link
                        href="/chiots-disponibles"
                        className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-full"
                      >
                        Voir nos chiots disponibles
                      </Link>
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
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center p-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Le Spitz nain Poméranien
                </Badge>

                <h2 className="text-xl md:text-2xl font-bold">
                  Nos spitz nains sont issus d’un long travail de sélection
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Nous élevons avec passion et engagement, le plus petit de tous les primitifs au monde : le
                  spitz nain poméranien, nous sommes tombés sous le charme d’une robe unique au monde
                  : le marquage husky ! Provenant du gène domino, chaque chiot est une œuvre vivante,
                  avec une combinaison unique de couleurs allant du gris silver au noir et blanc, en passant
                  par le bleu et blanc, tout en conservant l’âme sauvage du husky.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Leur masque est dessiné à la manière d’une œuvre d’art, il est possible de les reconnaître
                  en un seul coup d’œil
                </p>

                <Link
                  href="/presentation-elevage"
                  className="inline-block rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Découvrir notre méthode d&apos;élevage
                </Link>
              </div>

              <div className="relative w-full aspect-video md:h-200 h-125 md:aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src="/pages/homePage/spitz-nain-pomeranien-blanc-beige-gris.jpeg"
                  alt="Chiot blanc dans un décor japonais"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 50vw"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 my-8">
          <div className="container mx-auto p-2">
            <div className="mx-auto max-w-4xl text-center space-y-4 mb-10">
              <Badge variant="secondary" className="w-fit mx-auto">
                Une identité rare
              </Badge>
              <h2 className="text-xl md:text-2xl font-bold">L&apos;expression nordique en version miniature</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Une section dédiée pour mieux raconter ce qui rend nos spitz nains Poméraniens si
                singuliers : l&apos;allure nordique, la sélection, l&apos;équilibre et la qualité de vie que
                nous construisons autour de chaque chiot.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <Card className="overflow-hidden border-primary/15 bg-linear-to-br from-[#fff8ef] via-card to-[#f6ede2] shadow-[0_24px_80px_rgba(115,74,32,0.12)]">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Signature visuelle
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[0.02em]">
                      L&apos;expression nordique en version miniature
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      À travers le marquage husky, il devient la plus petite expression du chien nordique,
                      concentrant dans un format délicat, élégant et proche de l&apos;humain une présence
                      immédiatement reconnaissable.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {nordicTraits.map((trait, index) => (
                      <div
                        key={trait}
                        className="rounded-2xl border border-primary/10 bg-white/80 p-4 shadow-sm"
                      >
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                          0{index + 1}
                        </div>
                        <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                          {trait}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl bg-[#6b401f] px-6 py-5 text-white shadow-[0_20px_60px_rgba(61,36,16,0.22)]">
                    <p className="leading-relaxed text-white/92">
                      Nous aimons dire que nos chiots portent la couleur du husky dans le plus petit
                      primitif du monde. Au-delà de l&apos;esthétique, notre travail repose sur une sélection
                      exigeante, pensée pour faire naître des compagnons harmonieux, sensibles et
                      profondément connectés à leur famille.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/15 bg-card shadow-[0_24px_80px_rgba(115,74,32,0.10)]">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Méthode d&apos;élevage
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[0.02em]">
                      Une sélection guidée par la santé et l&apos;équilibre
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Notre programme d&apos;élevage repose sur des choix précis, effectués avec constance
                      pour préserver la beauté du type, la stabilité émotionnelle et les aptitudes de chien
                      de compagnie du Spitz nain Poméranien.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {breedingCommitments.map((commitment) => (
                      <div
                        key={commitment}
                        className="rounded-2xl border border-primary/10 bg-muted/40 px-4 py-4 text-sm leading-relaxed text-foreground"
                      >
                        {commitment}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-primary/10 bg-primary/6 px-6 py-5">
                    <p className="text-muted-foreground leading-relaxed">
                      Nos chiots grandissent dans un environnement optimal, sécurisant et stimulant afin de
                      devenir des compagnons confiants, rares et magnétiques, destinés à ceux qui ressentent
                      l&apos;appel du sauvage en version extrêmement miniature.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 my-8">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/15 bg-card/80 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Un élevage ancré dans le Jura, pensé pour leur bien-être</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      L&apos;élevage est situé dans le Jura, non loin de Saint-Amour, à Dommartin-lès-Cuiseaux.
                      Nos Spitz nains Poméraniens marquage husky y grandissent dans des espaces dédiés à
                      leur sécurité et à leur confort : maternité haut de gamme, locaux aménagés, présence
                      humaine constante et sorties régulières sur notre terrain d&apos;un hectare.
                    </p>
                    <div className="flex items-start gap-3 rounded-xl bg-primary/6 px-4 py-3 text-sm text-muted-foreground">
                      <Route className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>Ce cadre nous permet de préparer des chiots curieux, confiants et capables de s&apos;adapter aussi bien à une vie citadine qu&apos;à un environnement rural.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/15 bg-card/80 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Faire naître des compagnons harmonieux</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Chaque portée est préparée bien avant la naissance : sélection de lignées saines,
                      dépistages ADN et maladies génétiques, suivi vétérinaire rigoureux et beaucoup de
                      présence humaine dès les premiers jours.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
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
        </section>
        {/* Portées disponibles */}
        {/* <section className="py-16 my-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Portées actuellement disponibles</h2>

            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Portée du 12 octobre 2025</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Île-de-France</span>
              </div>
            </div>

            <Link href="/chiots-disponibles" className="inline-block rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85">
              Voir les chiots disponibles
            </Link>
          </div>


        </div>
      </section> */}
        {/* Nos valeurs */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-xl md:text-2xl font-bold">
                Nos valeurs
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Au-delà de la rareté du marquage husky, notre élevage repose sur une méthode
                responsable : santé, socialisation précoce, transparence et temps réellement dédié
                à chaque chiot comme à chaque famille.
              </p>

              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {shibaBenefits.map((item) => (
                <Card key={item.title} className="overflow-hidden bg-muted/70 p-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                    />
                  </div>

                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
              className="flex my-12 m-auto w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Découvrir nos conseils autour du Spitz nain
            </Link>
          ) : null}
        </section>

        {/* éleveurs */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-xl md:text-2xl font-bold">Les Éleveuses</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                L&apos;élevage est né d&apos;une longue expérience des chiens de type nordique, développée pendant
                neuf ans au sein de l&apos;élevage Royal Pomsky. Cette connaissance du type husky nous a
                naturellement conduites vers un nouveau défi : retrouver cette expression sauvage et
                magnétique dans le plus petit primitif du monde, sans altérer l&apos;intégrité du
                Spitz nain Poméranien.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                Nos chiens sont issus d&apos;un travail de sélection sur plusieurs générations. Leurs tests
                ADN confirment des Poméraniens 100 %, sans croisement, afin de préserver la pureté de la
                race, la stabilité de la taille, la cohérence du type et la transmission naturelle du
                marquage husky.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Link
                  key={index}
                  href={`/presentation-eleveuses#${founder.name.toLowerCase()}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
                  aria-label={`Lire la présentation de ${founder.name}`}
                >
                  <article className="relative text-center bg-muted/70 rounded-lg overflow-hidden">
                    <div
                      className={`absolute top-4 right-4 items-end md:flex hidden flex-col gap-2 z-10`}
                    >
                      {founder.badges.map((badge, badgeIdx) => (
                        <Badge
                          key={badgeIdx}
                          variant="secondary"
                          className="text-[11px] shadow-sm p-2 backdrop-blur-sm bg-background/85"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative w-full aspect-square">
                      <Image
                        src={founder.image || "/home-founder-fallback.jpg"}
                        alt={`Photo d'${founder.name}, fondatrice de l'élevage`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={70}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center space-y-4 my-12">
              <h3 className="text-xl md:text-2xl font-semibold">
                Vous souhaitez adopter un Spitz nain Poméranien ?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Échangeons ensemble sur votre projet d&apos;adoption et trouvons le chiot qui correspond le
                mieux à votre mode de vie, à votre sensibilité et à votre environnement.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>
            <Link
              href="/contact"
              aria-label="Contacter les éleveuses pour un projet d'adoption de Spitz nain Poméranien"
              className="flex my-12 m-auto w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contacter Aurélie et Marine
            </Link>
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
