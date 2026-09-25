import ResetCookieConsentButton from '@/components/ui/ResetCookieConsentButton';

export const metadata = {
  title: 'Datenschutzerklärung | JungVorteil'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-emerald">
      <h1>Datenschutzerklärung</h1>
      
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/>
        JungVorteil Schweiz<br/>
        E-Mail: kontakt@jungvorteil.ch
      </p>

      <h2>2. Datenerhebung auf unserer Website</h2>
      <h3>Server-Log-Dateien</h3>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Unsere Internetseiten verwenden so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      </p>
      <p>
        Sie können Ihre Cookie-Einstellungen jederzeit über folgenden Link anpassen: <br/>
        <ResetCookieConsentButton />
      </p>

      <h2>4. Analyse-Tools (Google Analytics)</h2>
      <p>
        Wenn Sie zugestimmt haben, nutzen wir auf unserer Website Google Analytics. Anbieter ist die Google Ireland Limited. 
        Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen.
      </p>

      <h2>5. Google AdSense & Drittanbieter-Werbung</h2>
      <p>
        Sofern Sie über unser Cookie-Banner Ihre Zustimmung für die Kategorie &quot;Werbung&quot; erteilt haben, nutzt diese Website Google AdSense, einen Dienst zur Einbindung von Werbeanzeigen der Google Ireland Limited (&quot;Google&quot;).
      </p>
      <p>
        Google AdSense verwendet Cookies und Web Beacons (unsichtbare Grafiken), wodurch Google und seine Partner Daten über Ihre Nutzung dieser Website (einschließlich Ihrer IP-Adresse) verarbeiten können, um relevante und personalisierte Werbeanzeigen bereitzustellen.
      </p>
      <p>
        Sie können Ihre Einwilligung für Werbe-Cookies jederzeit in unseren Cookie-Einstellungen widerrufen (<ResetCookieConsentButton />) oder personalisierte Werbung direkt in Ihren Google-Konto-Einstellungen unter <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#3F5E39] underline font-semibold">https://adssettings.google.com</a> deaktivieren.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
        Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
      </p>
    </div>
  );
}


