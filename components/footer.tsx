import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 relative">
                                <Image
                                    src="/logo-cercle-polaire.png"
                                    alt="logo Spitz nain Poméranien élevage de Spitz nain Poméranien"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                    quality={80}
                                />
                            </div>
                            <span className="text-lg font-bold text-primary">Spitz nain Poméranien</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevage Professionel de Spitz nain Poméranien en Saône-et-Loire (71). Santé, socialisation et accompagnement des familles.
                        </p>
                    </div>

                    <nav>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/spitz-nain-pomeranien"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Le Spitz nain Poméranien
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/spitz-nain-pomeranien/nos-adultes-reproducteurs"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos adultes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/spitz-nain-pomeranien/chiots-disponibles"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos chiots
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h3 className="font-semibold mb-4">Informations légales</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/conditions-generales"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Termes &amp; conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/politique-de-confidentialite"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <address className="not-italic">
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Dommartin-lès-Cuiseaux, Saône-et-Loire (71)</li>
                            <li>Visites sur rendez-vous</li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                >
                                    Page contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@spitz-nain-pomeranien.fr"
                                    className="hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                    aria-label="Envoyer un email à contact@spitz-nain-pomeranien.fr"
                                >
                                    e-mail : contact@spitz-nain-pomeranien.fr
                                </a>
                            </li>
                        </ul>
                    </address>

                    <div>
                        <h3 className="font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/people/Elevage-Spitz-Nain-Pomeranien/100088811580709"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                    aria-label="Suivez Spitz nain Poméranien sur Facebook (lien externe)"
                            >
                                <Facebook className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.instagram.com/spitznainpomeranien/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                    aria-label="Suivez Spitz nain Poméranien sur Instagram (lien externe)"
                            >
                                <Instagram className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@spitznainpomeranien"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                    aria-label="Suivez Spitz nain Poméranien sur TikTok (lien externe)"
                            >
                                <FaTiktok className="h-5 w-5" aria-hidden="true" />
                            </a>
                            {/* <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Twitter (lien externe)"
                            >
                                <Twitter className="h-5 w-5" aria-hidden="true" />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Spitz nain Poméranien. Tous droits réservés.</p>
                </div>
            </div>
        </footer >
    )
}
