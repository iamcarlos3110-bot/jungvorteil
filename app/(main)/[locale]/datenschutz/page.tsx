import ResetCookieConsentButton from '@/components/ui/ResetCookieConsentButton';

export const metadata = {
  title: 'Datenschutzerklärung | JungVorteil Schweiz',
  description: 'Datenschutzerklärung von JungVorteil gemäss dem Schweizer Datenschutzgesetz (nDSG) und der DSGVO. Erfahren Sie mehr über Next.js, Vercel, Supabase, LocalStorage, Cookies, Google AdSense und Ihre Rechte.'
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
          Carlos Piñeiro (Betreiber &amp; Inhaber)<br />
          Plaza del Peñón 7, 7B izq.<br />
          28923 Alcorcón, Madrid, Spanien<br />
          E-Mail: <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">kontakt@jungvorteil.ch</a><br />
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">2. Technische Infrastruktur &amp; Datenverarbeitung</h2>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Hosting &amp; Content Delivery (Next.js &amp; Vercel)</h3>
        <p className="leading-relaxed mb-4">
          Unsere Website basiert auf dem modernen Web-Framework <strong>Next.js (React)</strong> und wird auf der Serverless-Cloud-Infrastruktur von <strong>Vercel Inc. (USA/EU)</strong> gehostet. Beim Aufruf unserer Seiten werden automatisch technische Daten (IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Zeitstempel) in verschlüsselten Server-Log-Dateien (SSL/TLS) zur Gewährleistung von Stabilität, Performance, Serverless Routing und DDoS-Schutz verarbeitet.
        </p>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Datenbank &amp; Backend (Supabase)</h3>
        <p className="leading-relaxed">
          Zur Bereitstellung unseres Vorteilskatalogs, der Filterfunktionen, der Magazinbeiträge und des Anfragen-Handlings nutzen wir PostgreSQL-Datenbankdienste von <strong>Supabase Inc.</strong>. Hierbei werden strukturierte Angebotsdaten, anonyme Klick-Zähler sowie technische Ratenbegrenzungseinträge (Rate Limiting zum Schutz vor automatisierter Überlastung) verarbeitet.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">3. Speichertechnologien (Cookies, LocalStorage &amp; SessionStorage)</h2>
        <p className="leading-relaxed mb-4">
          Unsere Website nutzt funktionelle Cookies sowie moderne Web-Storage-Technologien Ihres Browsers. In der folgenden Übersicht informieren wir Sie transparent über die verwendeten Speicherpunkte:
        </p>

        <div className="overflow-x-auto not-prose my-6 border border-stone-200 rounded-2xl shadow-sm">
          <table className="w-full text-left text-sm text-stone-700">
            <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
              <tr>
                <th className="p-3">Name / Schlüssel</th>
                <th className="p-3">Typ</th>
                <th className="p-3">Kategorie</th>
                <th className="p-3">Dauer</th>
                <th className="p-3">Zweck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">jv_cookie_consent</td>
                <td className="p-3">LocalStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">Notwendig</span></td>
                <td className="p-3">Dauerhaft</td>
                <td className="p-3">Speicherung Ihres Zustimmungsstatus für das Cookie-Banner.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">jv_favorites</td>
                <td className="p-3">LocalStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-semibold">Funktional</span></td>
                <td className="p-3">Dauerhaft (lokal)</td>
                <td className="p-3">Speicherung Ihrer gemerkten Angebote/Favoriten direkt auf Ihrem Gerät ohne Server-Transfer.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">jv_preferences</td>
                <td className="p-3">LocalStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-semibold">Funktional</span></td>
                <td className="p-3">Dauerhaft (lokal)</td>
                <td className="p-3">Speicherung Ihrer Filter- und Personalisierungseinstellungen (z.B. Stadt, Kategorie).</td>
              </tr>

              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">contact_form_submitted</td>
                <td className="p-3">SessionStorage</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">Notwendig</span></td>
                <td className="p-3">Sitzung Ende</td>
                <td className="p-3">Schutz vor Mehrfachabsendungen des Kontaktformulars (Spam-Schutz).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">_ga, _ga_*</td>
                <td className="p-3">Cookie</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-semibold">Analytisch</span></td>
                <td className="p-3">2 Jahre / 24 Std.</td>
                <td className="p-3">Google Analytics Nutzungsstatistik (nur nach Ihrer expliziten Zustimmung).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-stone-900 font-semibold">__gads, __gpi</td>
                <td className="p-3">Cookie</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-semibold">Werbung</span></td>
                <td className="p-3">13 Monate</td>
                <td className="p-3">Google AdSense Werbeeinbindung und Anzeigensteuerung (nur nach Ihrer expliziten Zustimmung).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-stone-50 border border-stone-200/90 p-5 rounded-2xl not-prose my-4">
          <p className="text-sm text-stone-700 font-medium mb-3">
            Sie können Ihre gewählten Cookie-Einwilligungen jederzeit mit einem Klick einsehen, anpassen oder widerrufen:
          </p>
          <ResetCookieConsentButton />
        </div>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">4. Kontaktformular &amp; E-Mail-Übermittlung (Resend)</h2>
        <p className="leading-relaxed">
          Wenn Sie uns über unser Kontaktformular oder per E-Mail anschreiben, werden Ihre Angaben (Name, E-Mail-Adresse, Nachrichtentext sowie Ihre IP-Adresse zur Missbrauchs- und Spamprävention) zur Bearbeitung der Anfrage verarbeitet. Zur sicheren und zuverlässigen Auslieferung transaktionaler E-Mails nutzen wir den Dienst <strong>Resend Inc.</strong>. Die Daten werden vertraulich behandelt und nicht an unbefugte Dritte weitergegeben.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">5. Anonymes Klick-Tracking &amp; Analyse-Services</h2>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Internes Klick-Tracking (<code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm text-stone-800 font-mono">/api/click</code>)</h3>
        <p className="leading-relaxed mb-4">
          Wenn Sie auf ein Angebot klicken, um zum jeweiligen Schweizer Partner/Anbieter zu gelangen, wird über unsere Schnittstelle <code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm text-stone-800 font-mono">/api/click</code> ein anonymer Klick-Zähler zur aggregierten statistischen Auswertung der Angebots-Beliebtheit aufgerufen. Hierbei werden lediglich die Angebots-ID, die Gerätekategorie (z.B. Desktop/Mobil) und allfällige Kampagnen-Parameter (UTM) erfasst. Es werden keine personenbezogenen Nutzerprofile erstellt.
        </p>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Google Analytics</h3>
        <p className="leading-relaxed">
          Sofern Sie über unser Cookie-Banner zugestimmt haben, nutzen wir Google Analytics, einen Webanalysedienst der Google Ireland Limited (&quot;Google&quot;). Die Datenverarbeitung erfolgt anonymisiert (mit aktivierter IP-Anonymisierung) zur Optimierung unseres Webangebots. Sie können diese Zustimmung jederzeit in den Cookie-Einstellungen widerrufen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">6. Google AdSense &amp; Werbung von Drittanbietern</h2>
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
        <h2 className="text-xl font-bold text-stone-900 mb-3">7. Datenschutzerklärungen externer Dienstleister (Drittanbieter)</h2>
        <p className="leading-relaxed mb-4">
          Detaillierte Informationen zur Datenverarbeitung durch die von uns genutzten externen Dienstleister finden Sie in den jeweiligen Datenschutzerklärungen der Anbieter:
        </p>
        <ul className="list-disc ml-5 space-y-2 mb-4 text-sm">
          <li>
            <strong>Google Ireland Limited (Google Analytics &amp; AdSense):</strong>{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2E4D28] underline font-semibold">
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Vercel Inc. (Cloud Hosting &amp; CDN):</strong>{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2E4D28] underline font-semibold">
              https://vercel.com/legal/privacy-policy
            </a>
          </li>
          <li>
            <strong>Supabase Inc. (Database &amp; Backend):</strong>{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2E4D28] underline font-semibold">
              https://supabase.com/privacy
            </a>
          </li>
          <li>
            <strong>Resend Inc. (E-Mail Delivery Service):</strong>{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2E4D28] underline font-semibold">
              https://resend.com/legal/privacy-policy
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">8. Ihre Rechte als betroffene Person</h2>
        <p className="leading-relaxed">
          Sie haben nach Schweizer Datenschutzrecht (nDSG) sowie der DSGVO das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich hierzu jederzeit an <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] underline font-semibold">kontakt@jungvorteil.ch</a>.
        </p>
      </section>
    </div>
  );
}





