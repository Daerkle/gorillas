'use client'

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/agb", label: "AGB" },
    { href: "/exklusive-dienstleistung", label: "Exklusive Dienstleistung" },
  ]

  // AUSKOMMENTIERT: Calendly-Funktion vorerst deaktiviert
  // const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault()
  //   if (typeof window !== 'undefined' && (window as any).Calendly) {
  //     (window as any).Calendly.initPopupWidget({
  //       url: 'https://calendly.com/entruempler-gorllias-info/30min'
  //     })
  //   }
  // }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#4D1F1F] via-[#5A2525] to-[#712E2E] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-center h-16 relative">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-white/90 hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white/10 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
{/* AUSKOMMENTIERT: Termin buchen Button vorerst deaktiviert
            <a
              href="#"
              onClick={openCalendly}
              className="relative px-5 py-2 bg-white text-[#4D1F1F] hover:bg-white/90 transition-all duration-300 font-bold text-sm uppercase tracking-wider rounded-lg ml-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Termin buchen
            </a>
            */}
          </div>

          {/* Mobile Menu Button - Hamburger with X animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-4 flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-md">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
{/* AUSKOMMENTIERT: Termin buchen Button (Mobile) vorerst deaktiviert
              <a
                href="#"
                onClick={(e) => {
                  openCalendly(e)
                  setIsOpen(false)
                }}
                className="block px-4 py-3 text-base font-bold bg-white text-[#4D1F1F] hover:bg-white/90 rounded-lg transition-all duration-300 text-center shadow-lg"
              >
                Termin buchen
              </a>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
