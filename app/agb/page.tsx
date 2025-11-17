import Link from "next/link"

export default function AGBPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4D1F1F] via-[#5A2525] to-[#712E2E] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl text-white/90">Entrümpler-Gorillas</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-2 border-[#4D1F1F]/10 shadow-xl p-8 md:p-12 space-y-8">

            {/* Company Info */}
            <div className="text-center space-y-2 pb-6 border-b-2 border-[#4D1F1F]/10">
              <p className="font-bold text-xl text-[#4D1F1F]">Entrümpler-Gorillas</p>
              <p className="text-gray-700">Kornhausgasse 3</p>
              <p className="text-gray-700">89584 Ehingen (Donau)</p>
              <p className="text-gray-700">Deutschland</p>
              <p className="text-sm text-gray-600 mt-4">Stand: November 2025</p>
            </div>

            {/* § 1 Geltungsbereich */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 1 Geltungsbereich
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten für alle Verträge zwischen Entrümpler-Gorillas (nachfolgend &quot;Auftragnehmer&quot;) und dem Auftraggeber über Entrümpelungs-, Haushaltsauflösungs-, Transport- und damit zusammenhängende Dienstleistungen.</p>
                <p>(2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
                <p>(3) Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals ausdrücklich vereinbart werden.</p>
              </div>
            </div>

            {/* § 2 Vertragsschluss */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 2 Vertragsschluss und Angebot
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.</p>
                <p>(2) Der Vertrag kommt durch schriftliche oder elektronische Auftragsbestätigung des Auftragnehmers zustande. Eine mündliche Zusage ist nur bei gleichzeitiger Anzahlung bindend.</p>
                <p>(3) Kostenvoranschläge werden nach Besichtigung vor Ort erstellt und sind 14 Tage gültig. Die Besichtigung ist für den Auftraggeber kostenfrei.</p>
                <p>(4) Alle Preise verstehen sich als Festpreise inklusive Mehrwertsteuer, sofern nicht anders angegeben. Entsorgungskosten sind im Preis inbegriffen, sofern nicht ausdrücklich anders vereinbart.</p>
              </div>
            </div>

            {/* § 3 Termine */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 3 Termine und Durchführung
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Termine werden nach Auftragserteilung und Eingang der Anzahlung verbindlich vereinbart.</p>
                <p>(2) Der Auftragnehmer ist berechtigt, Subunternehmer zur Auftragserfüllung einzusetzen.</p>
                <p>(3) Bei Terminverschiebungen durch den Auftragnehmer wird schnellstmöglich ein Ersatztermin angeboten.</p>
                <p>(4) Der Auftraggeber verpflichtet sich, am vereinbarten Termin oder durch eine bevollmächtigte Person vor Ort zu sein und dem Auftragnehmer Zugang zu den zu entrümpelnden Räumlichkeiten zu gewähren.</p>
                <p>(5) Sollten die tatsächlichen Gegebenheiten vor Ort erheblich von den bei der Besichtigung vorgefundenen Verhältnissen abweichen, behält sich der Auftragnehmer eine entsprechende Preisanpassung vor.</p>
              </div>
            </div>

            {/* § 4 Stornierung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 4 Stornierung und Terminabsage durch den Auftraggeber
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="font-semibold text-[#4D1F1F]">Stornierungsfristen und Gebühren:</p>
                <div className="ml-4 space-y-2">
                  <p><strong>a) Stornierung bis 7 Tage vor dem vereinbarten Termin:</strong></p>
                  <ul className="list-disc ml-8 space-y-1">
                    <li>Kostenfrei, vollständige Rückerstattung der Anzahlung</li>
                  </ul>

                  <p><strong>b) Stornierung 4-6 Tage vor dem vereinbarten Termin:</strong></p>
                  <ul className="list-disc ml-8 space-y-1">
                    <li>30% des Auftragswertes als Stornierungsgebühr</li>
                    <li>Restliche Anzahlung wird erstattet</li>
                  </ul>

                  <p><strong>c) Stornierung 2-3 Tage vor dem vereinbarten Termin:</strong></p>
                  <ul className="list-disc ml-8 space-y-1">
                    <li>50% des Auftragswertes als Stornierungsgebühr</li>
                    <li>Bereits gebuchte Ressourcen (Fahrzeuge, Personal, Container) können nicht mehr umgebucht werden</li>
                  </ul>

                  <p><strong>d) Stornierung innerhalb von 48 Stunden vor dem vereinbarten Termin:</strong></p>
                  <ul className="list-disc ml-8 space-y-1">
                    <li>80% des Auftragswertes als Stornierungsgebühr</li>
                  </ul>

                  <p><strong>e) Stornierung am Tag der Durchführung oder Nichterscheinen:</strong></p>
                  <ul className="list-disc ml-8 space-y-1">
                    <li>100% des Auftragswertes fällig</li>
                    <li>Kein Anspruch auf Anzahlungsrückerstattung</li>
                  </ul>
                </div>
                <p>(2) Die Stornierung muss schriftlich (E-Mail ausreichend) erfolgen. Maßgeblich ist der Zeitpunkt des Zugangs beim Auftragnehmer.</p>
                <p>(3) Bei begründeten Notfällen (nachgewiesene Krankheit, Todesfall, höhere Gewalt) kann der Auftragnehmer kulant eine reduzierte Gebühr oder kostenfreie Terminverschiebung anbieten. Dies liegt im Ermessen des Auftragnehmers.</p>
                <p>(4) Bei Terminverschiebung durch den Auftraggeber (nicht Stornierung) gelten folgende Regelungen:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Bis 7 Tage vorher: kostenfrei</li>
                  <li>Innerhalb von 7 Tagen: 20% Bearbeitungsgebühr</li>
                </ul>
              </div>
            </div>

            {/* § 5 Preise */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 5 Preise und Zahlungsbedingungen
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) <strong>Anzahlung:</strong> Bei Auftragserteilung ist eine Anzahlung in Höhe von 30% der Auftragssumme fällig. Erst nach Zahlungseingang wird der Termin verbindlich reserviert.</p>
                <p>(2) <strong>Restzahlung:</strong> Die Restzahlung ist unmittelbar nach Fertigstellung der Arbeiten und besenreiner Übergabe fällig. Die Zahlung erfolgt in bar oder per Überweisung vor Ort.</p>
                <p>(3) <strong>Zahlungsmethoden:</strong></p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Barzahlung vor Ort</li>
                  <li>Banküberweisung (Vorauskasse bei Anzahlung)</li>
                  <li>EC-Kartenzahlung (nach Vereinbarung)</li>
                </ul>
                <p>(4) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.</p>
                <p>(5) Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.</p>
              </div>
            </div>

            {/* § 6 Leistungsumfang */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 6 Leistungsumfang
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Der Leistungsumfang ergibt sich aus der Auftragsbestätigung. Standardmäßig umfasst der Auftrag:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Komplette Ausräumung der vereinbarten Räumlichkeiten</li>
                  <li>Demontage von Möbeln und fest montierten Gegenständen</li>
                  <li>Fachgerechte Entsorgung aller Gegenstände</li>
                  <li>Besenreine Übergabe</li>
                </ul>
                <p>(2) <strong>Besenreine Übergabe</strong> bedeutet:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Alle Gegenstände sind entfernt</li>
                  <li>Böden sind gefegt oder gesaugt</li>
                  <li>Wandregale, Lampen, Hängeschränke sind demontiert</li>
                  <li>Schrauben und Nägel sind aus Wänden und Decken entfernt</li>
                  <li>Treppenhaus und Zufahrtswege sind gereinigt</li>
                </ul>
                <p>(3) Nicht im Leistungsumfang enthalten (außer gesondert vereinbart):</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Renovierungsarbeiten (Malerarbeiten, Bodenverlegung etc.)</li>
                  <li>Reinigung von Fenstern, Türen und Wänden</li>
                  <li>Entsorgung von Sondermüll (Asbest, Chemikalien, Farbreste etc.)</li>
                  <li>Gartenarbeiten</li>
                </ul>
              </div>
            </div>

            {/* § 7 Wertanrechnung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 7 Wertanrechnung
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Verwertbare Gegenstände (Möbel, Elektrogeräte, Antiquitäten) können nach Vereinbarung vom Auftragnehmer übernommen und mit dem Auftragswert verrechnet werden.</p>
                <p>(2) Die Wertermittlung erfolgt durch den Auftragnehmer nach marktüblichen Wiederverkaufspreisen. Der Auftraggeber hat kein Recht auf eine bestimmte Bewertung.</p>
                <p>(3) Bei besonders wertvollen Gegenständen empfiehlt der Auftragnehmer den direkten Verkauf durch den Auftraggeber, um höhere Erlöse zu erzielen.</p>
              </div>
            </div>

            {/* § 8 Pflichten */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 8 Pflichten des Auftraggebers
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Der Auftraggeber muss wahrheitsgemäße und vollständige Angaben über das Räumungsobjekt machen, insbesondere zu:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Größe und Umfang der Räumlichkeiten</li>
                  <li>Etage und Vorhandensein eines Aufzugs</li>
                  <li>Besondere Erschwernisse (schwere Möbel, Messie-Situation etc.)</li>
                  <li>Vorhandensein von Sondermüll</li>
                </ul>
                <p>(2) Der Auftraggeber ist verpflichtet, alle persönlichen Gegenstände und Wertgegenstände, die er behalten möchte, vor Beginn der Arbeiten zu entfernen oder deutlich zu kennzeichnen.</p>
                <p>(3) Der Auftraggeber stellt sicher, dass die notwendigen Parkgenehmigungen und Zugangsmöglichkeiten vorhanden sind.</p>
                <p>(4) Bei falschen oder unvollständigen Angaben behält sich der Auftragnehmer eine Preisanpassung vor.</p>
              </div>
            </div>

            {/* § 9 Haftung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 9 Haftung und Versicherung
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Der Auftragnehmer haftet für Schäden, die nachweislich durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.</p>
                <p>(2) Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
                <p>(3) Die Haftung ist pro Schadensfall auf die Höhe der Auftragssumme, maximal jedoch auf 5.000 € begrenzt.</p>
                <p>(4) Der Auftragnehmer ist durch eine Betriebshaftpflichtversicherung versichert.</p>
                <p>(5) Für Schäden durch höhere Gewalt (Unwetter, Naturkatastrophen etc.) wird keine Haftung übernommen.</p>
                <p>(6) Der Auftraggeber ist verpflichtet, Schäden unverzüglich, spätestens innerhalb von 24 Stunden nach Entdeckung, schriftlich zu melden.</p>
              </div>
            </div>

            {/* § 10 Entsorgung */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 10 Entsorgung und Umweltschutz
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Der Auftragnehmer verpflichtet sich zur fachgerechten und umweltfreundlichen Entsorgung aller Gegenstände.</p>
                <p>(2) Der Auftragnehmer verfügt über die erforderlichen Genehmigungen gemäß § 49 KrW-/AbfG für den Transport überwachungsbedürftiger Abfälle.</p>
                <p>(3) Sondermüll und Gefahrstoffe werden nur nach gesonderter Vereinbarung und gegen Aufpreis entsorgt.</p>
                <p>(4) Verwertbare Gegenstände werden soweit möglich an gemeinnützige Organisationen, Second-Hand-Läden oder bedürftige Personen gespendet.</p>
              </div>
            </div>

            {/* § 11 Datenschutz */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 11 Datenschutz
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Der Auftragnehmer verpflichtet sich zur vertraulichen Behandlung aller personenbezogenen Daten des Auftraggebers gemäß DSGVO.</p>
                <p>(2) Daten werden nur zur Auftragsabwicklung verwendet und nicht an Dritte weitergegeben.</p>
                <p>(3) Bei Messie-Situationen oder sensiblen Aufträgen wird besondere Diskretion gewahrt.</p>
              </div>
            </div>

            {/* § 12 Salvatorische Klausel */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 12 Salvatorische Klausel
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>
              </div>
            </div>

            {/* § 13 Gerichtsstand */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#4D1F1F] border-b-2 border-[#4D1F1F]/20 pb-3">
                § 13 Gerichtsstand und anzuwendendes Recht
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>(1) Für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag gilt deutsches Recht.</p>
                <p>(2) Gerichtsstand ist Ehingen, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mt-12 pt-8 border-t-2 border-[#4D1F1F]/10 text-center space-y-2">
              <h3 className="text-2xl font-bold text-[#4D1F1F]">Kontakt</h3>
              <p className="font-bold">Entrümpler-Gorillas</p>
              <p className="text-gray-700">Kornhausgasse 3</p>
              <p className="text-gray-700">89584 Ehingen (Donau)</p>
              <p className="text-gray-700">Deutschland</p>
              <p className="mt-4">
                <a href="mailto:entruempler-gorillas@web.de" className="text-[#4D1F1F] hover:text-[#712E2E] transition-colors">
                  entruempler-gorillas@web.de
                </a>
              </p>
              <p>
                <a href="https://www.entruempler-gorillas.de" className="text-[#4D1F1F] hover:text-[#712E2E] transition-colors">
                  www.entruempler-gorillas.de
                </a>
              </p>
            </div>

            {/* Hinweis */}
            <div className="mt-8 p-6 bg-[#4D1F1F]/5 rounded-xl border-2 border-[#4D1F1F]/10">
              <p className="text-sm text-gray-700 text-center">
                <strong>Hinweis:</strong> Mit der Auftragserteilung bestätigt der Auftraggeber, diese Allgemeinen Geschäftsbedingungen gelesen, verstanden und akzeptiert zu haben.
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
