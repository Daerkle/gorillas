import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "./components/cookie-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Entrümpler-Gorillas - Professionelle Haushaltsauflösungen in Ehingen (Donau)",
  description: "Professionelle Haushaltsauflösungen, Entrümpelungen, Second Hand An- und Verkauf, Möbel Taxi und Tatortreinigung in Ehingen (Donau) und Umgebung. Ihr zuverlässiger Partner im Alb-Donau-Kreis.",
  keywords: [
    "Haushaltsauflösung Ehingen",
    "Entrümpelung Ehingen Donau",
    "Entrümpler Ehingen",
    "Haushaltsauflösung Alb-Donau-Kreis",
    "Second Hand Ehingen",
    "Möbel Taxi Ehingen",
    "Tatortreinigung Ehingen",
    "Entrümpelung Ulm",
    "Messiwohnung Ehingen",
    "Wohnungsauflösung Ehingen"
  ],
  authors: [{ name: "Entrümpler-Gorillas" }],
  openGraph: {
    title: "Entrümpler-Gorillas - Haushaltsauflösungen in Ehingen (Donau)",
    description: "Professionelle Entrümpelungen und Haushaltsauflösungen in Ehingen (Donau) und Umgebung. Schnell, zuverlässig und fair.",
    url: "https://www.entruempler-gorillas.de",
    siteName: "Entrümpler-Gorillas",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.entruempler-gorillas.de",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.entruempler-gorillas.de",
    "name": "Entrümpler-Gorillas",
    "image": "https://www.entruempler-gorillas.de/logo.png",
    "description": "Professionelle Haushaltsauflösungen, Entrümpelungen und Second-Hand-Services in Ehingen (Donau) und Umgebung.",
    "url": "https://www.entruempler-gorillas.de",
    "telephone": "+491621511113",
    "email": "entruempler-gorillas@web.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kornhausgasse 3",
      "addressLocality": "Ehingen (Donau)",
      "postalCode": "89584",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.2841853",
      "longitude": "9.7280659"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ehingen (Donau)"
      },
      {
        "@type": "City",
        "name": "Ulm"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alb-Donau-Kreis"
      }
    ],
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  }

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
{/* AUSKOMMENTIERT: Calendly vorerst deaktiviert
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        */}
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
