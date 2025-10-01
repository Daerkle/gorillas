import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Trash2, Home, Sparkles, ShoppingBag, Truck, Send, Shield } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Trash2,
      title: "Entrümpelung aller Art",
      description: "Unsere Dienstleistung umfasst die umgehende Terminvereinbarung, maßgeschneiderte Angebote und eine gründliche, besenreine Entrümpelung mit fachgerechter Entsorgung aller Gegenstände."
    },
    {
      icon: Home,
      title: "Haus- und Wohnungsauflösungen",
      description: "Profi-Unterstützung für ein reibungsloses, schnelles Räumen von Häusern oder Wohnungen. Von der Planung bis zur Umsetzung kümmern wir uns um alles, inklusive der Entsorgung, um Ihnen einen stressfreien Prozess zu bieten."
    },
    {
      icon: Sparkles,
      title: "Messiwohnungen",
      description: "Wir übernehmen sensible Situationen mit Diskretion und Professionalität, um das Chaos zu beseitigen und die Räumlichkeiten wieder bewohnbar zu machen. Unsere Expertise garantiert eine gründliche Reinigung nach den höchsten Standards."
    },
    {
      icon: ShoppingBag,
      title: "Second Hand An- und Verkauf",
      description: "Unser Second-Hand-Ankaufs- und Verkaufsservice bietet nicht nur hochwertige Produkte, sondern auch einen bequemen Abholservice. Verkaufen Sie Ihre Artikel stressfrei und lassen Sie sich Ihre neuen Schätze bequem nach Hause liefern."
    },
    {
      icon: Truck,
      title: "Möbel - Taxi",
      description: "Unser Möbel-Taxi bringt Ihre Möbel sicher und schnell an ihr Ziel. Egal ob ein Sofa, ein Schrank oder ganze Möbelsets - wir kümmern uns um den Transport, damit Ihre Einrichtungspläne reibungslos umgesetzt werden können."
    },
    {
      icon: Send,
      title: "Sonder- und Kurierfahrten",
      description: "Unsere Sonder- und Kurierfahrten bieten maßgeschneiderte Lösungen für Ihre speziellen Transportbedürfnisse. Egal, ob es sich um dringende Lieferungen, sensible Fracht oder zeitkritische Sendungen handelt, wir garantieren zuverlässige und schnelle Zustellungen."
    },
    {
      icon: Shield,
      title: "Tatortreinigung",
      description: "Entrümpler Gorillas bietet professionelle Tatortreinigungsdienste an, um sicherzustellen, dass Orte nach unglücklichen Ereignissen gründlich gereinigt und wiederhergestellt werden. Unser engagiertes Team sorgt für Diskretion, Effizienz und höchste Qualitätsstandards."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#712E2E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="relative container max-w-4xl mx-auto text-center px-6 md:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl break-words leading-tight">
            Wir entrümpeln, als wäre<br className="hidden sm:block" />Morgen schon Heute!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed break-words px-2">
            Umfassende Dienstleistungen für alle Ihre Entrümpelungs- und Transportbedürfnisse
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent">
              Unsere Dienstleistungen
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professionelle Lösungen für jeden Bedarf
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <AccordionItem
                  key={`item-${index + 1}`}
                  value={`item-${index + 1}`}
                  className="border-2 border-[#4D1F1F]/10 bg-white rounded-2xl px-6 md:px-8 py-4 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-xl md:text-2xl font-semibold text-[#4D1F1F] hover:text-[#712E2E] py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span>{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-gray-700 pt-4 pb-6 leading-relaxed pl-16">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Haben Sie Fragen?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Kontaktieren Sie uns für ein unverbindliches Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="bg-white hover:bg-white/90 text-[#4D1F1F] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="tel:01621511113"
                  className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  0162 1511113
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
