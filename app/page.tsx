'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Star, Quote, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export default function HomePage() {
  // AUSKOMMENTIERT: Calendly-Funktion vorerst deaktiviert
  // const openCalendly = () => {
  //   if (typeof window !== 'undefined' && (window as any).Calendly) {
  //     (window as any).Calendly.initPopupWidget({
  //       url: 'https://calendly.com/entruempler-gorllias-info/30min'
  //     })
  //   }
  // }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#4D1F1F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Entrümpler-Gorillas Team"
            fill
            className="object-cover opacity-40 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#4D1F1F]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-10">
              <Image
                src="/logo.png"
                alt="Entrümpler-Gorillas Logo"
                width={400}
                height={120}
                className="w-[280px] sm:w-[350px] md:w-[450px] h-auto drop-shadow-2xl"
                priority
              />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
              Platz schaffen für<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Neues</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Ihr Premium-Partner für Haushaltsauflösungen, Entrümpelungen und Sondertransporte in Ehingen, Ulm und Umgebung.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
{/* AUSKOMMENTIERT: Kostenlose Beratung Button vorerst deaktiviert
              <button
                onClick={openCalendly}
                className="group bg-white hover:bg-gray-100 text-[#4D1F1F] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-3 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Kostenlose Beratung
              </button>
              */}
              <a
                href="/services"
                className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center gap-3"
              >
                Unsere Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

{/* AUSKOMMENTIERT: Scroll Indicator / Maus-Animation vorerst deaktiviert
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
        */}
      </section>

      {/* Slogan Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="container max-w-5xl mx-auto text-center px-4">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-[#4D1F1F] leading-tight mb-6">
              &quot;Wir entrümpeln, als wäre<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D1F1F] to-[#8B3A3A]">Morgen schon Heute&quot;</span>
            </h2>
            <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Schnell, diskret und besenrein. Wir kümmern uns um die Details, damit Sie sich auf das Wesentliche konzentrieren können.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#4D1F1F] mb-6">
              Unsere Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles aus einer Hand – professionell und zuverlässig.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Haushaltsauflösungen",
                desc: "Komplette Auflösung von Wohnungen und Häusern mit Wertanrechnung. Diskret und besenrein.",
                image: "/aufloesung.webp",
                color: "from-[#4D1F1F] to-[#2D1212]"
              },
              {
                title: "Second Hand & Ankauf",
                desc: "Nachhaltigkeit steht an erster Stelle. Wir kaufen Verwertbares an und geben Dingen ein zweites Leben.",
                image: "/secon.png",
                color: "from-[#712E2E] to-[#4D1F1F]"
              },
              {
                title: "Sonderfahrten",
                desc: "Express-Kurierfahrten und Sonder-Transporte. Wenn es mal schnell gehen muss.",
                image: "/sonderfahrten.png",
                color: "from-[#4D1F1F] to-[#712E2E]"
              }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <Card className="group h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-2xl font-bold mb-2">{service.title}</h3>
                      <div className="w-12 h-1 bg-amber-400 rounded-full group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-32 bg-[#4D1F1F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B3A3A] rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2D1212] rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Kundenstimmen
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xl text-white/80">
              Exzellenter Service bestätigt durch unsere Kunden
            </p>
          </FadeIn>

          <div className="relative w-full overflow-hidden mask-linear-gradient">
            <motion.div 
              className="flex gap-8 w-max px-4"
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "Steffen Göttle", text: "Ich bin mehr als zufrieden! Es war eine unglaublich gute und angenehme Erfahrung. Was die Jungs hier aufbauen ist beeindruckend." },
                { name: "Peter Pöschl", text: "Starke Worte Starkes Team top Arbeit extrem sauber super nette Leute. Zur vollsten Zufriedenheit durchgeführt." },
                { name: "Nicole Schacher", text: "Tolles Team, super fleißig, gründlich, genau und sorgfältig. Absolut zu empfehlen. Danke für den tollen Service." },
                { name: "Muddy Head", text: "Uneingeschränkte Empfehlung - Die Jungs konnten recht kurzfristig eine 2 Zimmer \"Rumpelkammer\" binnen 3 Stunden besenrein freiräumen." },
                { name: "Jay Dee", text: "⭐️⭐️⭐️⭐️⭐️ Absolut empfehlenswert! Professioneller Service mit viel Erfahrung und Kompetenz." },
                { name: "Steffen Göttle", text: "Ich bin mehr als zufrieden! Es war eine unglaublich gute und angenehme Erfahrung. Was die Jungs hier aufbauen ist beeindruckend." },
                { name: "Peter Pöschl", text: "Starke Worte Starkes Team top Arbeit extrem sauber super nette Leute. Zur vollsten Zufriedenheit durchgeführt." },
                { name: "Nicole Schacher", text: "Tolles Team, super fleißig, gründlich, genau und sorgfältig. Absolut zu empfehlen. Danke für den tollen Service." },
                { name: "Muddy Head", text: "Uneingeschränkte Empfehlung - Die Jungs konnten recht kurzfristig eine 2 Zimmer \"Rumpelkammer\" binnen 3 Stunden besenrein freiräumen." },
                { name: "Jay Dee", text: "⭐️⭐️⭐️⭐️⭐️ Absolut empfehlenswert! Professioneller Service mit viel Erfahrung und Kompetenz." }
              ].map((review, idx) => (
                <div key={idx} className="w-[350px] md:w-[450px] shrink-0 bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors duration-300">
                  <Quote className="w-8 h-8 text-amber-400/50 mb-4" />
                  <p className="text-gray-100 text-lg mb-6 italic leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-[#4D1F1F] font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-sm text-white/60">Google Bewertung</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <FadeIn className="text-center mt-16">
            <a
              href="https://www.google.com/search?sca_esv=052283a6d4230c4d&sxsrf=AE3TifPk1aDaVVc47OlL0iMwQCvLKi5TYQ:1763408470251&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4CViIxDCyzBIHRSUvffQm6m4z7_bEqYLDrKs2zhjCwvHnVe9PSZpOsoKR_kLjNUbMLEkId7omI22aaTTTp1lmJ2GZqQBK-DN3d3jVmTDnAl2P7X5A%3D%3D&q=Entr%C3%BCmpler-Gorillas+Rezensionen&sa=X&ved=2ahUKEwipi9q7-PmQAxVelGoFHU51Ib8Q0bkNegQIIBAE&biw=2560&bih=1243&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#4D1F1F] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Star className="w-5 h-5 fill-[#4D1F1F] text-[#4D1F1F]" />
              Alle Bewertungen auf Google
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#4D1F1F] mb-6">
              Häufige Fragen
            </h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Wie schnell bekomme ich ein Angebot?", a: "In der Regel erhalten Sie das unverbindliche Angebot noch am selben Tag nach der Besichtigung per E-Mail." },
                { q: "Wie kurzfristig sind Sie verfügbar?", a: "Meist können wir innerhalb weniger Tage starten. In Notfällen versuchen wir, sofortige Lösungen zu finden." },
                { q: "Gibt es versteckte Kosten?", a: "Nein. Wir arbeiten transparent. Sollten unvorhergesehene Sondermaterialien auftauchen, besprechen wir dies sofort vor Ort." },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-xl px-6 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                  <AccordionTrigger className="text-xl font-semibold text-[#4D1F1F] hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600 pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-[#2D1212] text-white relative">
        <div className="container max-w-6xl mx-auto px-4">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                Kontaktieren Sie uns
              </h2>
              <p className="text-gray-300 text-xl mb-8">
                Wir sind für Sie da – in Ehingen und im gesamten Alb-Donau-Kreis.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Standort</h3>
                    <p className="text-gray-300">Kornhausgasse 3<br />89584 Ehingen (Donau)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <a href="tel:01621511113" className="block text-gray-300 hover:text-amber-400 transition-colors">Achilleas: 0162 1511113</a>
                    <a href="tel:01727873085" className="block text-gray-300 hover:text-amber-400 transition-colors">Eleftherios: 0172 7873085</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                    <a href="mailto:entruempler-gorillas@web.de" className="text-gray-300 hover:text-amber-400 transition-colors">
                      entruempler-gorillas@web.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-2 rounded-2xl shadow-2xl backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8!2d9.7280659!3d48.2841853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a1d1155555555%3A0x5555555555555555!2sKornhausgasse%203%2C%2089584%20Ehingen%20(Donau)!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
