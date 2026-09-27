import ResetCookieConsentButton from '@/components/ui/ResetCookieConsentButton';

export const metadata = {
  title: 'Datenschutzerklärung | JungVorteil Schweiz',
  description: 'Datenschutzerklärung von JungVorteil gemäss dem Schweizer Datenschutzgesetz (nDSG) und der DSGVO. Erfahren Sie mehr über Cookies, Google AdSense und Ihre Rechte.'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 prose prose-emerald text-stone-800">
      <h1 className="text-3xl font-extrabold text-stone-900 mb-8 border-b pb-4">Datenschutzerklärung</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">1. Allgemeine Hinweise &amp; Verantwortlicher</h2>
        <p className="leading-relaxed mb-4">
          Der Schutz Ihrer persönlichen Daten ist JungVorteil ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website gemäss dem revidierten Schweizer Datenschutzgesetz (nDSG) und der Datenschutz-Grundverordnung (DSGVO).
        </p>
        <p className="leading-relaxed">
          <strong>Verantwortlicher für die Datenverarbeitung:</strong><br />
          JungVorteil Schweiz<br />
          E-Mail: <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">kontakt@jungvorteil.ch</a><br />
          Website: <a href="https://jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">https://jungvorteil.ch</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">2. Datenerhebung auf unserer Website</h2>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Server-Log-Dateien</h3>
        <p className="leading-relaxed">
          Der Provider unserer Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies umfasst: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten dienen der technischen Gewährleistung und Systemsicherheit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">3. Cookies &amp; Einstellungen zur Privatsphäre</h2>
        <p className="leading-relaxed mb-4">
          Unsere Internetseiten verwenden Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
        <div className="bg-stone-50 border border-stone-200/90 p-5 rounded-2xl not-prose my-4">
          <p className="text-sm text-stone-700 font-medium mb-3">
            Sie können Ihre gewählten Cookie-Einwilligungen jederzeit mit einem Klick einsehen, anpassen oder widerrufen:
          </p>
          <ResetCookieConsentButton />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">4. Analyse-Services (Google Analytics)</h2>
        <p className="leading-relaxed">
          Sofern Sie über unser Cookie-Banner zugestimmt haben, nutzen wir Google Analytics, einen Webanalysedienst der Google Ireland Limited (&quot;Google&quot;). Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert. Sie können diese Zustimmung jederzeit in den Cookie-Einstellungen widerrufen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">5. Google AdSense &amp; Werbung von Drittanbietern</h2>
        <p className="leading-relaxed mb-4">
          Nach Ihrer expliziten Zustimmung für die Cookie-Kategorie &quot;Werbung&quot; setzt diese Website Google AdSense ein, einen Dienst zur Einbindung von Werbeanzeigen der Google Ireland Limited (&quot;Google&quot;).
        </p>
        <p className="leading-relaxed mb-4">
          Google AdSense verwendet Cookies und Web Beacons, um Anzeigen basierend auf vorherigen Besuchen eines Nutzers auf dieser oder anderen Websites bereitzustellen. Google und seine Partner können dadurch zielgerichtete Werbeanzeigen anzeigen.
        </p>
        <p className="leading-relaxed">
          Sie können personalisierte Werbung direkt in Ihren Google-Konto-Einstellungen unter{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#2E4D28] underline font-bold">
            https://adssettings.google.com
          </a>{' '}
          deaktivieren.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">6. Ihre Rechte als betroffene Person</h2>
        <p className="leading-relaxed">
          Sie haben nach Schweizer Datenschutzrecht (nDSG) sowie der DSGVO das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich hierzu jederzeit an <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">kontakt@jungvorteil.ch</a>.
        </p>
      </section>
    </div>
  );
}



