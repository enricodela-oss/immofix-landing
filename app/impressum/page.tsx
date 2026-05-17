export default function Impressum() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-sm text-stone-400 hover:text-stone-700 transition-colors mb-8 inline-block">
          ← Zurück
        </a>

        <h1 className="text-3xl font-black text-stone-900 mb-2">Impressum</h1>
        <p className="text-stone-400 text-sm mb-10">Angaben gemäß § 5 TMG</p>

        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">

          <section className="space-y-1">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Verantwortlich</h2>
            <p className="font-medium text-stone-900">Enrico De la Cruz González</p>
            <p>Luruper Hauptstraße 114k</p>
            <p>22547 Hamburg</p>
            <p>Deutschland</p>
          </section>

          <section className="space-y-1">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:enrico.de.la@icloud.com" className="text-stone-900 underline underline-offset-2">enrico.de.la@icloud.com</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Hinweis zur Online-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-stone-900 underline underline-offset-2">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
