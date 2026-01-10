import Link from "next/link"
import Image from "next/image"

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Impressum</h1>
          <p className="text-xl text-white/90">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-2 border-[#4D1F1F]/10 shadow-xl p-8 md:p-12 space-y-8">

            {/* Angaben gemäß § 5 TMG */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p className="font-semibold text-xl text-[#4D1F1F]">Entrümpler-Gorillas</p>
                <p>Inhaber: Gemizoglou & Soukouldanos GbR</p>
                <p>Kornhausgasse 3</p>
                <p>89584 Ehingen (Donau)</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Kontakt
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p><span className="font-semibold">Achilleas Gemizoglou:</span> <a href="tel:01621511113" className="text-[#4D1F1F] hover:text-[#712E2E] transition-colors">0162 1511113</a></p>
                <p><span className="font-semibold">Eleftherios Soukouldanos:</span> <a href="tel:01727873085" className="text-[#4D1F1F] hover:text-[#712E2E] transition-colors">0172 7873085</a></p>
                <p><span className="font-semibold">E-Mail:</span> <a href="mailto:entruempler-gorillas@web.de" className="text-[#4D1F1F] hover:text-[#712E2E] transition-colors">entruempler-gorillas@web.de</a></p>
              </div>
            </div>

            {/* Steuernummer */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Steuernummer
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p className="font-semibold">58002/00462</p>
              </div>
            </div>

            {/* Berufsbezeichnung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p><span className="font-semibold">Berufsbezeichnung:</span> Entrümpelungsdienstleistungen</p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Streitschlichtung
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#4D1F1F] hover:text-[#712E2E] underline transition-colors">https://ec.europa.eu/consumers/odr/</a></p>
                <p className="mt-4">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Haftung für Inhalte
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Haftung für Links
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                Urheberrecht
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                <p>Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* Webdesign Credit */}
            <div className="mt-12 pt-8 border-t-2 border-[#4D1F1F]/10">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <p className="text-gray-600">Webdesign & Entwicklung:</p>
                <a
                  href="https://oakmind.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/dark_font.png"
                    alt="OAKMIND GmbH"
                    width={160}
                    height={54}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                KI-gestützte Softwarelösungen aus Baden-Württemberg
              </p>
            </div>

          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4D1F1F] to-[#712E2E] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>← Zurück zur Startseite</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
