export const metadata = {
  title: 'Impressum | JungVorteil'
};

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-purple">
      <h1>Impressum</h1>
      
      {/* ADMIN NOTE: Edit operator details below */}
      
      <h2>Kontaktadresse</h2>
      <p>
        [BETREIBER NAME]<br/>
        [ADRESSE]<br/>
        Schweiz
      </p>

      <h2>E-Mail</h2>
      <p>
        [EMAIL]
      </p>

      <h2>Handelsregistereintrag</h2>
      <p>
        [HANDELSREGISTER wenn vorhanden, sonst entfernen]
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
      </p>
      <p>
        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
      </p>
    </div>
  );
}
