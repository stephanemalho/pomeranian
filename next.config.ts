import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        qualities: [70, 75, 80]
    },
    async redirects() {
        return [
            {
                source: "/le-spitz-pomeranien",
                destination: "/spitz-nain-pomeranien",
                permanent: true
            },
            {
                source: "/spitz-pomeranien-prix",
                destination: "/spitz-nain-pomeranien/prix",
                permanent: true
            },
            {
                source: "/chiots-disponibles",
                destination: "/spitz-nain-pomeranien/chiots-disponibles",
                permanent: true
            },
            {
                source: "/blog/:path*",
                destination: "/spitz-nain-pomeranien",
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
                source: "/le-spitz-inu/",
                destination: "/spitz-nain-pomeranien",
                permanent: true
            },
            {
                source: "/le-spitz-inu",
                destination: "/spitz-nain-pomeranien",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
