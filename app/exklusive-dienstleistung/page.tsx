import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Lock, Heart, Clock } from "lucide-react"
import Link from "next/link"

export default function ExklusiveDienstleistungPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E]">
        <Image
          src="/img_4058.webp"
          alt="Tatortreinigung - Professionell und Diskret"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-center text-white px-6 md:px-4 max-w-5xl mx-auto py-16 md:py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl leading-tight break-words">
            Exklusive Dienstleistung
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg break-words px-2">
            Tatortreinigung mit höchsten Standards an Diskretion, Professionalität und Sensibilität
          </p>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4D1F1F] mb-2">Diskretion</h3>
                <p className="text-gray-700 text-sm">Absolute Vertraulichkeit in jeder Situation</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4D1F1F] mb-2">Sicherheit</h3>
                <p className="text-gray-700 text-sm">Höchste hygienische Standards</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4D1F1F] mb-2">Sensibilität</h3>
                <p className="text-gray-700 text-sm">Einfühlsamer Umgang mit Betroffenen</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4D1F1F] mb-2">Verfügbarkeit</h3>
                <p className="text-gray-700 text-sm">Schnelle Reaktionszeiten im Ernstfall</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <Card className="border-2 border-[#4D1F1F]/10 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Tatortreinigung - Professionell und Diskret
              </h2>
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="text-xl font-semibold text-[#4D1F1F]">
                  Sehr geehrte Damen und Herren,
                </p>

                <p>
                  wir möchten Ihnen unsere Dienstleistungen im Bereich <strong>Tatortreinigung</strong> vorstellen.
                  Als spezialisiertes Unternehmen legen wir größten Wert auf Diskretion, Professionalität
                  und höchste Qualitätsstandards.
                </p>

                <p>
                  Unsere Erfahrung befähigt uns, sensibel und effizient mit anspruchsvollen Reinigungsaufgaben
                  umzugehen. Wir verstehen, dass Tatortreinigung eine äußerst sensible Angelegenheit ist, und
                  unsere hochqualifizierten Teams setzen alles daran, Ihnen in solchen Situationen eine
                  umfassende und verlässliche Lösung zu bieten.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-[#4D1F1F]/10 my-8">
                  <h3 className="text-2xl font-bold text-[#4D1F1F] mb-4">Unsere Leistungen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Gründliche Reinigung von Tatorten unter Berücksichtigung aller hygienischen und sicherheitstechnischen Aspekte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Diskreter und respektvoller Umgang in schweren Momenten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Professionelle Entlastung für Betroffene</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Einhaltung höchster Reinigungsstandards</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Vertrauen Sie auf unsere Expertise und unsere Hingabe zu höchsten Reinigungsstandards.
                  Wir stehen Ihnen zur Seite, um auch in herausfordernden Situationen für Sauberkeit und
                  Ordnung zu sorgen.
                </p>

                <p>
                  Für weitere Informationen oder eine persönliche Beratung stehen wir Ihnen gerne zur Verfügung.
                </p>

                <p className="text-xl font-semibold text-[#4D1F1F] pt-6">
                  Mit freundlichen Grüßen,<br />
                  Ihr Entrümpler-Gorillas Team
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#712E2E] rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wir sind für Sie da
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine diskrete und professionelle Beratung.
            Wir stehen Ihnen jederzeit zur Verfügung.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-white/90 text-[#4D1F1F] px-10 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50"
            >
              <Link href="tel:01621511113" className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Jetzt anrufen
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              className="border-2 border-white hover:border-white text-white px-10 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:bg-white/20 backdrop-blur-sm shadow-xl bg-transparent"
            >
              <Link href="/kontakt">
                Kontaktformular
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold text-lg">Telefon</p>
                <p className="text-white/90">0162 1511113</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold text-lg">Verfügbarkeit</p>
                <p className="text-white/90">Nach Vereinbarung</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
