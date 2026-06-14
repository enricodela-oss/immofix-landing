import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anmelden | Immofix",
  description:
    "Melden Sie sich bei Immofix an — der digitalen Hausverwaltungssoftware für professionelle Verwalter. QR-Schadensmeldungen, Handwerker-Koordination und Versicherungsübermittlung.",
  keywords: "Immofix Login, Immofix Anmelden, Hausverwaltung Software Login",
  openGraph: {
    title: "Anmelden | Immofix",
    description: "Bei Immofix anmelden — digitale Hausverwaltung.",
    type: "website",
  },
};

export default function LoginRedirectPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">

      {/* Nav */}
      <nav className="bg-white border-b border-stone-100 px-4 sm:px-6 h-16 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Immofix" width={32} height={32} className="rounded-lg object-cover" />
          <span className="text-stone-900 font-black text-xl tracking-tight">Immofix</span>
        </Link>
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
          ← Zurück zur Startseite
        </Link>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <Image src="/logo.png" alt="Immofix" width={72} height={72} className="rounded-2xl object-cover mb-5 shadow-lg" />
            <h1 className="text-2xl font-black text-stone-900 tracking-tight">Willkommen zurück</h1>
            <p className="text-sm text-stone-500 mt-1">Melden Sie sich bei Immofix an</p>
          </div>

          {/* Login box */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-3">
            <a
              href="https://immobilienverwaltung-blush.vercel.app/login"
              className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white font-semibold py-3.5 rounded-xl hover:bg-stone-700 transition-all text-sm"
            >
              Zum Dashboard anmelden
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-100" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-stone-400">oder</span>
              </div>
            </div>

            <a
              href="https://immobilienverwaltung-blush.vercel.app/signup"
              className="flex items-center justify-center gap-2 w-full border-2 border-stone-200 text-stone-700 font-semibold py-3.5 rounded-xl hover:border-stone-900 transition-all text-sm"
            >
              Neu registrieren — 14 Tage gratis
            </a>
          </div>

          {/* Features reminder */}
          <div className="mt-6 bg-white rounded-2xl border border-stone-100 p-4 space-y-2.5">
            {[
              "QR-Code Schadensmeldung für Mieter",
              "Handwerker-Koordination per WhatsApp",
              "Versicherungsschadensmeldung per PDF",
              "Live-Statusverfolgung in Echtzeit",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-stone-600">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-400 text-center mt-6">
            Noch kein Konto?{" "}
            <a href="https://immobilienverwaltung-blush.vercel.app/signup" className="underline hover:text-stone-600">
              Kostenlos testen
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-4 text-center">
        <p className="text-xs text-stone-400">© 2026 Immofix · <a href="/datenschutz" className="hover:text-stone-600">Datenschutz</a> · <a href="/impressum" className="hover:text-stone-600">Impressum</a></p>
      </footer>
    </div>
  );
}
