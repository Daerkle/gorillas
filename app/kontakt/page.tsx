"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            Kontaktieren Sie uns
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed break-words px-2">
            Wir sind für Sie da - vereinbaren Sie noch heute einen Termin für Ihre Entrümpelung
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent">
                  Unsere Kontaktdaten
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich zu allen Fragen
                  rund um Entrümpelung und Haushaltsauflösung.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      Hauptstraße 46<br />
                      89584 Ehingen<br />
                      Baden-Württemberg
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:01621511113"
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-700 group-hover:text-[#4D1F1F] transition-colors text-xl font-semibold">
                      0162 1511113
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:entruempler-gorillas@web.de"
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-[#4D1F1F]/10 shadow-lg hover:shadow-xl hover:border-[#4D1F1F]/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">E-Mail</h3>
                    <p className="text-gray-700 group-hover:text-[#4D1F1F] transition-colors font-semibold break-words">
                      entruempler-gorillas@web.de
                    </p>
                  </div>
                </a>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-[#4D1F1F]/10 shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Erreichbarkeit</h3>
                    <p className="text-gray-700">
                      Mo - Sa: Nach Vereinbarung<br />
                      Sonn- & Feiertage: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-[#4D1F1F]/10 shadow-xl">
                <CardHeader className="bg-gradient-to-br from-[#4D1F1F] to-[#712E2E] text-white rounded-t-xl">
                  <CardTitle className="text-2xl">Kontaktformular</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-900">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D1F1F] focus:border-transparent transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D1F1F] focus:border-transparent transition-all"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-900">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D1F1F] focus:border-transparent transition-all"
                        placeholder="0162 1234567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-900">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D1F1F] focus:border-transparent resize-none transition-all"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] hover:from-[#712E2E] hover:to-[#4D1F1F] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Anfrage absenden
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] bg-clip-text text-transparent">
              So finden Sie uns
            </h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#4D1F1F]/10 p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8!2d9.7280659!3d48.2841853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDE3JzAzLjEiTiA5wrA0Myc0MS4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="450"
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
