export const metadata = {
  title: 'Datenschutzerklärung | JungVorteil'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-purple">
      <h1>Datenschutzerklärung</h1>
      
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/>
        [BETREIBER NAME]<br/>
        [ADRESSE]<br/>
        E-Mail: [EMAIL]
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
        <button onClick={() => {
          localStorage.removeItem('jv_cookie_consent');
          window.location.reload();
        }} className="text-purple-600 hover:underline">
          Cookie-Einstellungen öffnen
        </button>
      </p>

      <h2>4. Analyse-Tools und Werbung (Analytics)</h2>
      <p>
        Wenn Sie zugestimmt haben, nutzen wir auf unserer Website Google Analytics. Anbieter ist die Google Ireland Limited. 
        Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
        Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
      </p>
    </div>
  );
}
