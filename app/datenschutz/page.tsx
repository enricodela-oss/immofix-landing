export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-stone-400 hover:text-stone-700 transition-colors mb-8 inline-block">
          ← Zurück
        </a>

        <h1 className="text-3xl font-black text-stone-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-stone-400 text-sm mb-10">Stand: Mai 2026</p>

        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der DSGVO ist:</p>
            <p className="font-medium text-stone-900">Enrico De la Cruz González</p>
            <p>Luruper Hauptstraße 114k, 22547 Hamburg</p>
            <p>E-Mail: <a href="mailto:enrico.de.la@icloud.com" className="text-stone-900 underline underline-offset-2">enrico.de.la@icloud.com</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">2. Hosting</h2>
            <p>
              Diese Website wird gehostet bei <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
              Beim Aufruf der Website werden automatisch Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) in Server-Logs gespeichert.
              Dies erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>
            <p>
              Die Datenverarbeitung durch Vercel erfolgt auf Grundlage der Standardvertragsklauseln der EU-Kommission.
              Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-stone-900 underline underline-offset-2">vercel.com/legal/privacy-policy</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">3. Nutzung der Immofix-App</h2>
            <p>
              Bei der Nutzung der Immofix-Anwendung werden folgende Daten verarbeitet:
            </p>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              <li>Benutzername und Passwort (verschlüsselt gespeichert)</li>
              <li>Schadensmeldungen inkl. Beschreibungen und Fotos</li>
              <li>Gebäude- und Adressdaten</li>
              <li>Push-Notification-Subscriptions (Gerätekennungen)</li>
            </ul>
            <p>
              Die Daten werden in der Datenbank von <strong>Supabase</strong> (EU-Region) gespeichert.
              Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">4. Cookies</h2>
            <p>
              Die App verwendet ausschließlich technisch notwendige Cookies (Session-Cookie für die Anmeldung).
              Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">5. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:enrico.de.la@icloud.com" className="text-stone-900 underline underline-offset-2">enrico.de.la@icloud.com</a>
            </p>
            <p>
              Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              Zuständig ist der <strong>Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">6. Datensicherheit</h2>
            <p>
              Alle Datenübertragungen erfolgen verschlüsselt via HTTPS/TLS.
              Passwörter werden mit PBKDF2-SHA512 gehasht und niemals im Klartext gespeichert.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
