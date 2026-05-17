"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Le Spitz nain Poméranien", href: "/spitz-nain-pomeranien" },
    { name: "Nos chiots", href: "/spitz-nain-pomeranien/chiots-disponibles" },
    { name: "Nos adultes", href: "/spitz-nain-pomeranien/nos-adultes-reproducteurs" },
    { name: "Contact", href: "/contact" },
]

export function DesktopNav() {
    const pathname = usePathname()

    return (
        <nav className="hidden lg:flex" aria-label="Navigation principale">
            <ul className="flex items-center gap-1">
                {navigation.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href || pathname.startsWith(`${item.href}/`)

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "inline-flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
