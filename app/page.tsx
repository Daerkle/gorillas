'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Star, Quote } from "lucide-react"

export default function HomePage() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/entruempler-gorllias-info/30min'
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Groß und dominant */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E]">
        <Image
          src="/hero.png"
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
            Professionelle<br />Haushaltsauflösungen in<br />Ehingen (Donau)
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 text-white/95 drop-shadow-lg break-words px-2">
            Ihr vertrauenswürdiger Partner für Entrümpelungen, Second-Hand-Services und Sondertransporte
            in Ehingen (Donau), Ulm und dem gesamten Alb-Donau-Kreis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={openCalendly}
              className="bg-white hover:bg-white/90 text-[#4D1F1F] px-8 sm:px-10 py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 flex items-center gap-3"
            >
              <Calendar size={24} />
              Kostenlose Beratung buchen
            </button>
            <a
              href="/services"
              className="border-2 border-white hover:border-white text-white px-8 sm:px-10 py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:bg-white/20 backdrop-blur-sm shadow-xl"
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
                  src="/secon.png"
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
                  src="/sonderfahrten.png"
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

      {/* Reviews Section - Google Bewertungen */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#712E2E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Das sagen unsere Kunden
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-white/90">
              5.0 Sterne aus 7 Google-Bewertungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 - Steffen Göttle */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ich bin mehr als zufrieden! Es war eine unglaublich gute und angenehme Erfahrung.
                Was die Jungs hier aufbauen und bereits aufgebaut haben, ist wirklich beeindruckend...
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">Steffen Göttle</p>
                <p className="text-sm text-gray-500">vor einem Monat · Google</p>
              </div>
            </div>

            {/* Review 2 - Peter Pöschl */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Starke Worte Starkes Team top Arbeit extrem sauber super nette Leute haben unseren
                Umzug am 30.08. zur vollsten Zufriedenheit durchgeführt sehr zu empfehlen
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">Peter Pöschl</p>
                <p className="text-sm text-gray-500">vor 2 Monaten · Google</p>
              </div>
            </div>

            {/* Review 3 - R. B. */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kann die Firma nur empfehlen. Sie arbeiten sauber sind sehr freundlich und arbeiten
                schnell und gut. Kann man nur empfehlen. Das werde ich auch machen.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">R. B.</p>
                <p className="text-sm text-gray-500">vor 2 Monaten · Google</p>
              </div>
            </div>

            {/* Review 4 - Nicole Schacher */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Tolles Team, super fleißig, gründlich, genau und sorgfältig. Absolut zu empfehlen.
                Danke für den tollen Service am 20.09.2025.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">Nicole Schacher</p>
                <p className="text-sm text-gray-500">vor einem Monat · Google</p>
              </div>
            </div>

            {/* Review 5 - Muddy Head */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uneingeschränkte Empfehlung - Die Jungs konnten recht kurzfristig eine 2 Zimmer
                &quot;Rumpelkammer&quot; binnen 3 Stunden besenrein freiräumen - und das zu einem fairen Preis
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">Muddy Head</p>
                <p className="text-sm text-gray-500">vor 2 Monaten · Google</p>
              </div>
            </div>

            {/* Review 6 - Jay Dee */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#4D1F1F]/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                ⭐️⭐️⭐️⭐️⭐️ Absolut empfehlenswert! Professioneller Service mit viel Erfahrung
                und Kompetenz.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#4D1F1F]">Jay Dee</p>
                <p className="text-sm text-gray-500">vor 9 Monaten · Google</p>
              </div>
            </div>
          </div>

          {/* Google Link */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?sca_esv=052283a6d4230c4d&sxsrf=AE3TifPk1aDaVVc47OlL0iMwQCvLKi5TYQ:1763408470251&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4CViIxDCyzBIHRSUvffQm6m4z7_bEqYLDrKs2zhjCwvHnVe9PSZpOsoKR_kLjNUbMLEkId7omI22aaTTTp1lmJ2GZqQBK-DN3d3jVmTDnAl2P7X5A%3D%3D&q=Entr%C3%BCmpler-Gorillas+Rezensionen&sa=X&ved=2ahUKEwipi9q7-PmQAxVelGoFHU51Ib8Q0bkNegQIIBAE&biw=2560&bih=1243&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#4D1F1F] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              Mehr Bewertungen auf Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean minimalistisch */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent px-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
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
              Besuchen Sie uns in Ehingen (Donau) oder kontaktieren Sie uns für eine persönliche Beratung.
              Wir sind Ihr lokaler Partner im Alb-Donau-Kreis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-white/30 shadow-2xl">
                <h3 className="text-3xl font-bold text-[#4D1F1F] mb-6">Entrümpler-Gorillas</h3>
                <div className="space-y-4 text-lg text-gray-800">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#4D1F1F] rounded-full"></div>
                    <span className="font-semibold">Kornhausgasse 3</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#712E2E] rounded-full"></div>
                    <span>89584 Ehingen (Donau)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#4D1F1F] rounded-full"></div>
                    <span>Baden-Württemberg, Deutschland</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:01621511113"
                  className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">Achilleas</span>
                  </div>
                  <span className="font-semibold">0162 1511113</span>
                </a>
                <a
                  href="tel:01727873085"
                  className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">Eleftherios</span>
                  </div>
                  <span className="font-semibold">0172 7873085</span>
                </a>
                <a
                  href="mailto:entruempler-gorillas@web.de"
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group shadow-lg sm:col-span-2"
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
