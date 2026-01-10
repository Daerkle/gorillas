'use client'

import Link from "next/link"
import Image from "next/image"

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-xl text-white/90">Informationen zur Datenverarbeitung</p>
        </div>
      </section>

      {/* Content Section with Scrollbar */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-2 border-[#4D1F1F]/10 shadow-xl">

            {/* Scrollable Content Container */}
            <div className="max-h-[600px] overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar">

              {/* 1. Datenschutz auf einen Blick */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3 sticky top-0 bg-white z-10">
                  1. Datenschutz auf einen Blick
                </h2>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Allgemeine Hinweise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Datenerfassung auf dieser Website</h3>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &quot;Hinweis zur verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    Wie erfassen wir Ihre Daten?
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    Wofür nutzen wir Ihre Daten?
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">
                    Welche Rechte haben Sie bezüglich Ihrer Daten?
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>
              </div>

              {/* 2. Hosting */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                  2. Hosting
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Externes Hosting</h3>
                  <p>
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="mt-2">
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="mt-2">
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                </div>
              </div>

              {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Datenschutz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-[#4D1F1F]/10 mt-2">
                    <p className="font-semibold">Entrümpler-Gorillas</p>
                    <p>Inhaber: Gemizoglou & Soukouldanos GbR</p>
                    <p>Kornhausgasse 3</p>
                    <p>89584 Ehingen (Donau)</p>
                    <p className="mt-2">Telefon: 0162 1511113</p>
                    <p>E-Mail: entruempler-gorillas@web.de</p>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Speicherdauer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>
              </div>

              {/* 4. Datenerfassung auf dieser Website */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                  4. Datenerfassung auf dieser Website
                </h2>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Server-Log-Dateien</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Kontaktformular</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#712E2E] mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>
              </div>

              {/* 5. Ihre Rechte */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                  5. Ihre Rechte
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="font-semibold">Sie haben folgende Rechte:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-semibold">Auskunftsrecht:</span> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                    <li><span className="font-semibold">Berichtigungsrecht:</span> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                    <li><span className="font-semibold">Löschungsrecht:</span> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                    <li><span className="font-semibold">Einschränkung der Verarbeitung:</span> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                    <li><span className="font-semibold">Datenübertragbarkeit:</span> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                    <li><span className="font-semibold">Widerspruchsrecht:</span> Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.</li>
                    <li><span className="font-semibold">Beschwerderecht:</span> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
                  </ul>
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

            {/* Scrollbar Indicator */}
            <div className="px-8 py-4 bg-gradient-to-r from-[#4D1F1F]/5 to-[#712E2E]/5 border-t border-[#4D1F1F]/10 rounded-b-2xl">
              <p className="text-center text-sm text-gray-600">
                ↕ Scrollen Sie für mehr Informationen
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

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4D1F1F 0%, #712E2E 100%);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #712E2E 0%, #4D1F1F 100%);
        }
      `}</style>
    </div>
  )
}
