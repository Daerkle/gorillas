'use client'

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#712E2E] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#4D1F1F] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Entrümpler-Gorillas Logo"
                width={180}
                height={72}
                className="drop-shadow-lg"
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              Professionelle Haushaltsauflösungen, Entrümpelungen und Second-Hand-Services
              in Ehingen (Donau) und Umgebung. Vertrauen Sie auf unsere Erfahrung.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  <p className="font-semibold">Adresse</p>
                  <p className="text-sm">
                    Kornhausgasse 3<br />
                    89584 Ehingen (Donau)
                  </p>
                </div>
              </div>

              <a
                href="tel:01621511113"
                className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <Phone size={20} className="text-white group-hover:scale-110 transition-transform" />
                <div className="text-white/90">
                  <p className="font-semibold">Achilleas Gemizoglou</p>
                  <p className="text-sm">0162 1511113</p>
                </div>
              </a>

              <a
                href="tel:01727873085"
                className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <Phone size={20} className="text-white group-hover:scale-110 transition-transform" />
                <div className="text-white/90">
                  <p className="font-semibold">Eleftherios Soukouldanos</p>
                  <p className="text-sm">0172 7873085</p>
                </div>
              </a>

              <a
                href="mailto:entruempler-gorillas@web.de"
                className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <Mail size={20} className="text-white group-hover:scale-110 transition-transform" />
                <div className="text-white/90">
                  <p className="font-semibold">E-Mail</p>
                  <p className="text-sm">entruempler-gorillas@web.de</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Schnellzugriff</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center group"
                >
                  <span className="text-white/90 group-hover:text-white transition-colors font-medium text-sm">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 space-y-6">
          {/* Legal Links Row */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/impressum"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                Impressum
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/datenschutz"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Main Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Entrümpler-Gorillas. Alle Rechte vorbehalten.
            </p>

            {/* Powered by Oakmind */}
            <div className="flex items-center space-x-3">
              <span className="text-white/70 text-sm font-medium">powered by</span>
              <a
                href="https://oakmind.de"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/white_font.png"
                  alt="OAKMIND GmbH"
                  width={140}
                  height={48}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-[#4D1F1F] transition-all duration-300 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm font-medium">Nach oben</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
