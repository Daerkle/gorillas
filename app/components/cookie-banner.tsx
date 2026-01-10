'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
      } catch (e) {
        console.error('Error parsing cookie consent:', e)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    savePreferences(necessaryOnly)
    setShowBanner(false)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))

    // Here you would typically initialize analytics/marketing scripts
    if (prefs.analytics) {
      // Initialize Google Analytics or similar
      console.log('Analytics enabled')
    }
    if (prefs.marketing) {
      // Initialize marketing cookies
      console.log('Marketing enabled')
    }
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300"
        onClick={() => !showSettings && setShowBanner(false)}
      />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        <div className="bg-white border-t-4 border-[#4D1F1F] shadow-2xl">
          <div className="container max-w-6xl mx-auto p-6 md:p-8">
            {!showSettings ? (
              // Main Banner
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#4D1F1F] mb-3">
                    🍪 Wir verwenden Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen.
                    Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Mit Ihrer Zustimmung
                    verwenden wir auch Analyse- und Marketing-Cookies zur Verbesserung unseres Angebots.
                  </p>
                  <a
                    href="/datenschutz"
                    className="text-[#4D1F1F] hover:text-[#712E2E] underline text-sm mt-2 inline-block"
                  >
                    Mehr Informationen in unserer Datenschutzerklärung
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 border-2 border-[#4D1F1F] text-[#4D1F1F] rounded-full font-semibold hover:bg-[#4D1F1F]/5 transition-all duration-300 whitespace-nowrap"
                  >
                    Einstellungen
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
                  >
                    Nur Notwendige
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#4D1F1F]">
                    Cookie-Einstellungen
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Notwendige Cookies
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Diese Cookies sind für die Grundfunktionen der Website erforderlich und können
                          nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="bg-gray-400 px-4 py-2 rounded-full text-white text-sm font-semibold cursor-not-allowed">
                          Immer aktiv
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white p-4 rounded-xl border-2 border-[#4D1F1F]/20 hover:border-[#4D1F1F]/40 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Analyse-Cookies
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                          Alle Informationen werden anonymisiert gesammelt und ausgewertet.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4D1F1F]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#4D1F1F]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-white p-4 rounded-xl border-2 border-[#4D1F1F]/20 hover:border-[#4D1F1F]/40 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          Marketing-Cookies
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Diese Cookies werden verwendet, um Werbung relevanter zu gestalten und
                          die Effektivität von Werbekampagnen zu messen.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4D1F1F]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#4D1F1F]"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Nur Notwendige
                  </button>
                  <button
                    onClick={saveCustomPreferences}
                    className="px-6 py-3 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Auswahl speichern
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
