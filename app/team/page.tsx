import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Achilleas Gemizoglou",
      image: "/achi.webp",
      phone: "01621511113",
      role: "Geschäftsführer",
    },
    {
      name: "Eleftherios Soukouldanos",
      image: "/elef.webp",
      phone: "01727873085",
      role: "Geschäftsführer",
    },
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
            Unser Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed break-words px-2">
            Lernen Sie die Geschäftsführer von Entrümpler-Gorillas kennen -
            Ihre erfahrenen Partner für professionelle Haushaltsauflösungen.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="group overflow-hidden border-2 border-[#4D1F1F]/10 shadow-xl hover:shadow-2xl hover:border-[#4D1F1F]/30 transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4D1F1F]/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {member.role}
                  </div>
                </div>

                <CardHeader className="pb-6 bg-white">
                  <CardTitle className="text-3xl text-[#4D1F1F] font-bold mb-3 group-hover:text-[#712E2E] transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] rounded-full"></div>
                </CardHeader>

                <CardContent className="space-y-6 bg-white">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-[#4D1F1F]/10">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin size={20} className="text-[#4D1F1F]" />
                      <span className="font-bold text-gray-900">Gemizoglou & Soukouldanos GbR</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Hauptstr. 46<br />
                      89584 Ehingen/Do
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#4D1F1F]/10 to-[#712E2E]/10 hover:from-[#4D1F1F]/20 hover:to-[#712E2E]/20 rounded-xl transition-all duration-300 group/link border-2 border-transparent hover:border-[#4D1F1F]/30"
                    >
                      <Phone size={20} className="text-[#4D1F1F] group-hover/link:scale-110 transition-transform" />
                      <span className="font-bold text-gray-900 group-hover/link:text-[#4D1F1F] transition-colors">
                        {member.phone}
                      </span>
                    </a>

                    <a
                      href="mailto:entruempler-gorillas@web.de"
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 rounded-xl transition-all duration-300 group/link border-2 border-[#4D1F1F]/10 hover:border-[#4D1F1F]/30"
                    >
                      <Mail size={20} className="text-[#4D1F1F] group-hover/link:scale-110 transition-transform" />
                      <span className="font-bold text-gray-900 group-hover/link:text-[#4D1F1F] transition-colors text-sm md:text-base">
                        entruempler-gorillas@web.de
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Kontaktieren Sie uns
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="bg-white hover:bg-white/90 text-[#4D1F1F] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="/services"
                  className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  Unsere Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
