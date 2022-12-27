import { type DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    titleTemplate: "Ruth Cano Digital Content Creator | %s",
    themeColor: "#FAFAFA",
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://www.ruthcano.com/",
        site_name: "Ruth Cano Digital Content Creator",
    },
    twitter: {
        handle: "@ruthcano",
        site: "@ruthcano",
        cardType: "summary_large_image",
    },
    additionalMetaTags: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        {
            name: "description",
            content: "Ruth Cano Digital Content Creator",
        },
        {
            name: "keywords",
            content: "Ruth Cano, Portfolio, Web Developer, Frontend Developer, React Developer, Next.js Developer, JavaScript Developer, TypeScript Developer, HTML Developer, CSS Developer, SASS Developer, Tailwind Developer, Figma Developer, UI Developer, UX Developer, Web Designer, Frontend Designer, React Designer, Next.js Designer, JavaScript Designer, TypeScript Designer, HTML Designer, CSS Designer, SASS Designer, Tailwind Designer, Figma Designer, UI Designer, UX Designer, Web Developer, Frontend Developer, React Developer, Next.js Developer, JavaScript Developer, TypeScript Developer, HTML Developer, CSS Developer, SASS Developer, Tailwind Developer, Figma Developer, UI Developer, UX Developer, Web Designer, Frontend Designer, React Designer, Next.js Designer, JavaScript Designer, TypeScript Designer, HTML Designer, CSS Designer, SASS Designer, Tailwind Designer, Figma Designer, UI Designer, UX Designer",
        },
        {
            name: "author",
            content: "Ruth Cano",
        },
        {
            name: "robots",
            content: "index, follow",
        },
        {
            name: "googlebot",
            content: "index, follow",
        },
        {
            name: "msapplication-TileColor",
            content: "#FAFAFA",
        },
        {
            name: "msapplication-TileImage",
            content: "/ms-icon-144x144.png",
        },
        {
            name: "theme-color",
            content: "#FAFAFA",
        }
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-57x57.png",
            sizes: "57x57",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-60x60.png",
            sizes: "60x60",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-72x72.png",
            sizes: "72x72",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-76x76.png",
            sizes: "76x76",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-114x114.png",
            sizes: "114x114",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-120x120.png",
            sizes: "120x120",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-144x144.png",
            sizes: "144x144",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-152x152.png",
            sizes: "152x152",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-icon-180x180.png",
            sizes: "180x180",
        },
        {
            rel: "icon",
            href: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            rel: "icon",
            href: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
        },
        {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        },
        {
            rel: "manifest",
            href: "/manifest.json",
        },
    ]
}

export default config;