import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Entrümpler-Gorillas - Professionelle Haushaltsauflösungen in Ehingen",
  description: "Professionelle Haushaltsauflösungen, Entrümpelungen, Second Hand An- und Verkauf, Möbel Taxi und Tatortreinigung in Ehingen und Umgebung.",
  keywords: ["Haushaltsauflösung", "Entrümpelung", "Ehingen", "Ulm", "Second Hand", "Möbel Taxi", "Tatortreinigung"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
