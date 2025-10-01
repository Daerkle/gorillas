import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Groß und dominant */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E]">
        <Image
          src="/img_4058.webp"
          alt="Entrümpler-Gorillas Team"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-center text-white px-6 md:px-4 max-w-6xl mx-auto py-12 md:py-0">
          {/* Logo */}
          <div className="flex justify-center animate-fade-in mb-8 md:mb-12">
            <Image
              src="/logo.png"
              alt="Entrümpler-Gorillas Logo"
              width={300}
              height={120}
              className="drop-shadow-2xl w-[250px] h-auto sm:w-[300px] md:w-[400px]"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white drop-shadow-2xl leading-tight break-words">
            Professionelle<br />Haushaltsauflösungen
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 text-white/95 drop-shadow-lg break-words px-2">
            Ihr vertrauenswürdiger Partner für Entrümpelungen, Second-Hand-Services und Sondertransporte
            in Ehingen und Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/kontakt"
              className="bg-white hover:bg-white/90 text-[#4D1F1F] px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:border-white text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:bg-white/20 backdrop-blur-sm shadow-xl"
            >
              Unsere Services
            </a>
          </div>
        </div>
      </section>

      {/* Slogan Section - Clean und minimalistisch */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent leading-tight">
            Wir Entrümpeln, als wäre<br />Morgen schon Heute
          </h2>
        </div>
      </section>

      {/* Services Section - Modern grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent">
              Unsere Dienstleistungen
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Von der kompletten Haushaltsauflösung bis zum nachhaltigen Second-Hand-Verkauf -
              wir bieten Ihnen umfassende Services für jeden Bedarf.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="group overflow-hidden border-2 border-[#4D1F1F]/10 shadow-xl hover:shadow-2xl hover:border-[#4D1F1F]/30 transition-all duration-500 hover:-translate-y-4 bg-white">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/aufloesung.webp"
                  alt="Haushaltsauflösungen"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4D1F1F]/60 to-transparent" />
              </div>
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-[#4D1F1F] font-bold mb-4 text-center">
                  Haushaltsauflösungen
                </CardTitle>
                <div className="w-20 h-1 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-lg leading-relaxed text-center text-gray-700">
                  Professionelle Haus- und Wohnungsauflösungen für nachhaltige Entrümpelungen und Organisation,
                  um Ihnen bei einem stressfreien Neuanfang zu helfen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 border-[#4D1F1F]/10 shadow-xl hover:shadow-2xl hover:border-[#4D1F1F]/30 transition-all duration-500 hover:-translate-y-4 bg-white">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/secon.webp"
                  alt="Second Hand An- und Verkauf"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#712E2E]/60 to-transparent" />
              </div>
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-[#4D1F1F] font-bold mb-4 text-center">
                  Second Hand An- und Verkauf
                </CardTitle>
                <div className="w-20 h-1 bg-gradient-to-r from-[#712E2E] to-[#4D1F1F] rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-lg leading-relaxed text-center text-gray-700">
                  Nachhaltige Second Hand Lösung, mit Abholservice. Entspanntes Verkaufen von Gegenständen,
                  während wir persönlich die Artikel bei Ihnen abholen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 border-[#4D1F1F]/10 shadow-xl hover:shadow-2xl hover:border-[#4D1F1F]/30 transition-all duration-500 hover:-translate-y-4 bg-white">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/sonderfahrten.webp"
                  alt="Sonderfahrten / Kurierfahrten"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4D1F1F]/60 to-transparent" />
              </div>
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-[#4D1F1F] font-bold mb-4 text-center">
                  Sonderfahrten / Kurierfahrten
                </CardTitle>
                <div className="w-20 h-1 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mx-auto"></div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-lg leading-relaxed text-center text-gray-700">
                  Schnelle Sonder- und Kurierfahrten. Zuverlässiger Transport für eilige Lieferungen,
                  Sondergut und wichtige Sendungen mit flexiblem Service.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean minimalistisch */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Antworten auf die wichtigsten Fragen rund um unsere Services und Abläufe.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6">
            <AccordionItem value="item-1" className="border-2 border-[#4D1F1F]/10 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300">
              <AccordionTrigger className="text-left text-2xl font-semibold text-[#4D1F1F] hover:text-[#712E2E] py-6 hover:no-underline">
                Wie lange dauert eine Angebotsanfrage?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pb-6 leading-relaxed">
                Das Angebot erfolgt in der Regel noch am selben Tag nach der Besichtigung.
                Dieses wird elektronisch per E-mail übermittelt und ist für Sie völlig unverbindlich.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-[#4D1F1F]/10 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300">
              <AccordionTrigger className="text-left text-2xl font-semibold text-[#4D1F1F] hover:text-[#712E2E] py-6 hover:no-underline">
                Wie schnell sind Sie verfügbar?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pb-6 leading-relaxed">
                Nach Terminvereinbarung können wir meist innerhalb weniger Tage mit der Arbeit beginnen.
                In dringenden Fällen bemühen wir uns um schnellstmögliche Verfügbarkeit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-[#4D1F1F]/10 bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300">
              <AccordionTrigger className="text-left text-2xl font-semibold text-[#4D1F1F] hover:text-[#712E2E] py-6 hover:no-underline">
                Können zusätzliche Kosten entstehen?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pb-6 leading-relaxed">
                Ja, bei nicht einsehbaren Werkstoffen die eine besondere Entsorgung benötigen.
                Dies wird aber direkt nach Feststellung mit dem Auftraggeber besprochen vor Ort -
                keine Überraschungen!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Location Section - Modern und prominent */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#712E2E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Unser Standort
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Besuchen Sie uns in Ehingen oder kontaktieren Sie uns für eine persönliche Beratung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-white/30 shadow-2xl">
                <h3 className="text-3xl font-bold text-[#4D1F1F] mb-6">Entrümpler-Gorillas</h3>
                <div className="space-y-4 text-lg text-gray-800">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#4D1F1F] rounded-full"></div>
                    <span className="font-semibold">Hauptstraße 46</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#712E2E] rounded-full"></div>
                    <span>89584 Ehingen</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#4D1F1F] rounded-full"></div>
                    <span>Baden-Württemberg, Deutschland</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="tel:01621511113"
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group shadow-lg"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">0162 1511113</span>
                </a>
                <a
                  href="mailto:entruempler-gorillas@web.de"
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group shadow-lg"
                >
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">E-Mail senden</span>
                </a>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8!2d9.7280659!3d48.2841853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDE3JzAzLjEiTiA5wrA0Myc0MS4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
