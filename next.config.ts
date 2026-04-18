import type { NextConfig } from "next";

const isBlogEnabled = process.env.NEXT_PUBLIC_ENABLE_BLOG !== "false";

const nextConfig: NextConfig = {
    images: {
        qualities: [70, 75, 80]
    },
    async redirects() {
        return [
            {
                source: "/le-mame-shiba",
                destination: "/spitz-nain-pomeranien",
                permanent: true
            },
            {
                source: "/mame-shiba-prix",
                destination: "/spitz-nain-pomeranien/prix",
                permanent: true
            },
            {
                source: "/chiots-disponibles",
                destination: "/spitz-nain-pomeranien/chiots-disponibles",
                permanent: true
            },
            {
                source: "/nos-adultes-reproducteurs",
                destination: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
                permanent: true
            },
            {
                source: "/nos-chiens",
                destination: "/spitz-nain-pomeranien/nos-adultes-reproducteurs",
                permanent: true
            },
            {
                source: "/le-shiba-inu/",
                destination: isBlogEnabled
                    ? "/blog/mame-shiba/sante/le-shiba-inu-caractere-sante-alimentation-prix"
                    : "/spitz-nain-pomeranien",
                permanent: true
            },
            {
                source: "/le-shiba-inu",
                destination: isBlogEnabled
                    ? "/blog/mame-shiba/sante/le-shiba-inu-caractere-sante-alimentation-prix"
                    : "/spitz-nain-pomeranien",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
