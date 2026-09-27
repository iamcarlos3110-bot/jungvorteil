export const metadata = {
  title: 'Impressum | JungVorteil Schweiz',
  description: 'Rechtliche Informationen, Impressum und Angaben zum Betreiber des unabhängigen Schweizer Vorteilsportals JungVorteil.'
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 prose prose-emerald text-stone-800">
      <h1 className="text-3xl font-extrabold text-stone-900 mb-8 border-b pb-4">Impressum</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">1. Kontaktadresse &amp; Betreiber der Website</h2>
        <p className="leading-relaxed">
          <strong>JungVorteil Schweiz</strong><br />
          Carlos Piñeiro (Betreiber &amp; Inhaber)<br />
          Plaza del Peñón 7, 7B izq.<br />
          28923 Alcorcón, Madrid<br />
          Spanien
        </p>
        <p className="mt-2">
          <strong>E-Mail:</strong> <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">kontakt@jungvorteil.ch</a><br />
          <strong>Website:</strong> <a href="https://jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">https://jungvorteil.ch</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">2. Vertretungsberechtigte Person &amp; Redaktionsleitung</h2>
        <p className="leading-relaxed">
          <strong>Gründer &amp; Chefredaktor:</strong> Carlos Piñeiro<br />
          Verantwortlich für Inhalt, Redaktionsleitung &amp; Entwicklung von JungVorteil Schweiz.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">3. Unternehmensform &amp; Registerhinweis</h2>
        <p className="leading-relaxed mb-2">
          JungVorteil ist ein unabhängig betriebenes privates Vorteilsportal von Carlos Piñeiro.
        </p>
        <p className="leading-relaxed text-sm text-stone-600">
          Es besteht kein Eintrag im Handelsregister und keine Mehrwertsteuernummer (keine MwSt-Pflicht). Es werden keine erfundenen Registernummern oder Rechtsformen geführt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">4. Haftungsausschluss für Inhalte</h2>
        <p className="leading-relaxed mb-4">
          Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann JungVorteil jedoch keine Gewähr übernehmen.
        </p>
        <p className="leading-relaxed mb-4">
          Haftungsansprüche gegen JungVorteil wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
        </p>
        <p className="leading-relaxed">
          Alle Angebote auf dieser Website sind unverbindlich. Wir behalten uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen oder zu löschen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">5. Haftung für Links &amp; Affiliate-Hinweis</h2>
        <p className="leading-relaxed mb-4">
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
        </p>
        <p className="leading-relaxed">
          <strong>Transparenzhinweis zu Partnerlinks:</strong> Einige der verlinkten Angebote können sogenannte Affiliate-Links sein. Wenn Sie über einen solchen Link ein Angebot wahrnehmen, erhält JungVorteil unter Umständen eine kleine Provision. Der Preis für Sie als Nutzer ändert sich dadurch zu keinem Zeitpunkt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">6. Urheberrechte</h2>
        <p className="leading-relaxed">
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich JungVorteil oder den speziell genannten Rechteinhabern (z.B. Schweizer Partnerunternehmen). Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>
      </section>
    </div>
  );
}



