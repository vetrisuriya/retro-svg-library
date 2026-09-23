import type { Metadata } from "next";
import { Archivo_Black, Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"] });
const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"] });

const SITE_URL = "https://vetrisuriya.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Retro.Icons — Free Retro SVG Icons, Doodle Characters & Caricatures",
    template: "%s — Retro.Icons",
  },
  description:
    "Free hand-drawn retro SVG icons (websites, blog, news, hospitals, banks, LMS, AI, Web3, music, food, sports, home, fashion, tools) plus doodle human characters, animal mascots and caricatures. Click to copy SVG, download SVG, JSX & PNG.",
  keywords: [
    "retro svg icons", "free svg icons", "doodle icons", "hand drawn icons",
    "click to copy svg", "svg icon library", "doodle characters", "ui illustrations",
    "animal mascots svg", "caricature icons", "onboarding illustrations", "empty state illustrations",
    "hospital icons", "bank icons", "lms icons", "ai icons", "web3 icons", "indian doodle characters",
    "diwali doodle", "cricket icons", "free icons for commercial use",
  ],
  authors: [{ name: "Vetri Suriya", url: SITE_URL }],
  creator: "Vetri Suriya",
  publisher: "Retro.Icons",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "Retro.Icons",
    title: "Retro.Icons — Free Retro SVG Icons, Doodle Characters & Caricatures",
    description:
      "500+ retro SVG icons + 250+ doodle characters, animals & caricatures. Free for commercial use. Click to copy, download SVG + PNG.",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: "Retro.Icons doodle library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retro.Icons — Free Retro SVG Icons & Doodle Characters",
    description: "500+ icons + 250+ characters. Click to copy SVG. Free forever.",
    images: ["/og-cover.svg"],
  },
  category: "design",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grotesk.variable} ${display.variable} ${hand.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#org`,
                  name: "Retro.Icons",
                  url: SITE_URL,
                  founder: { "@type": "Person", name: "Vetri Suriya", url: SITE_URL },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#site`,
                  url: SITE_URL,
                  name: "Retro.Icons",
                  publisher: { "@id": `${SITE_URL}/#org` },
                  inLanguage: "en",
                },
                {
                  "@type": "WebApplication",
                  name: "Retro.Icons",
                  applicationCategory: "DesignApplication",
                  operatingSystem: "Web",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                  description:
                    "Free retro SVG icon and doodle character library with click-to-copy and downloads.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
