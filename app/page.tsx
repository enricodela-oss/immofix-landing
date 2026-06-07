"use client";

import { useState, useEffect } from "react";

// ─── Icons (inline SVG components) ───────────────────────────────────────────

function IconQR() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h2v2h-2zM18 14h3v2h-3zM14 18h2v3h-2zM18 18h3v3h-3z" strokeWidth={0} fill="currentColor" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCheckSmall({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-300/40 to-stone-500/20 rounded-full blur-3xl scale-75" />

      {/* Phone frame */}
      <div className="relative w-64 h-[520px] bg-stone-900 rounded-[44px] shadow-2xl border-4 border-stone-700 overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2 shrink-0">
          <div className="w-28 h-6 bg-stone-800 rounded-full" />
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pb-2 shrink-0">
          <span className="text-white text-[10px] font-semibold">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="flex gap-0.5">
              {[2, 3, 4, 4].map((h, i) => (
                <div key={i} className={`w-1 bg-white rounded-sm`} style={{ height: h * 2.5 }} />
              ))}
            </div>
            <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="w-5 h-3 ml-0.5" viewBox="0 0 24 12" fill="none">
              <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" strokeOpacity="0.4" />
              <rect x="1.5" y="1.5" width="16" height="9" rx="1.5" fill="white" />
              <path d="M22 4v4a2 2 0 000-4z" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="bg-stone-800 px-4 py-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Immofix" className="w-6 h-6 rounded-md object-cover" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Immofix</p>
                <p className="text-stone-400 text-[10px]">Dashboard</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-stone-600 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">HV</span>
            </div>
          </div>
        </div>

        {/* Notification badge */}
        <div className="mx-3 mt-2 shrink-0">
          <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-300 text-[10px] font-medium">3 neue Meldungen</p>
          </div>
        </div>

        {/* Ticket list */}
        <div className="flex-1 px-3 py-2 space-y-2 overflow-hidden">
          {[
            { id: "TKT-042", cat: "Sanitär", text: "Rohrbruch Bad 2.OG", status: "Offen", dot: "bg-red-400" },
            { id: "TKT-041", cat: "Elektro", text: "Steckdose defekt EG", status: "In Arbeit", dot: "bg-amber-400" },
            { id: "TKT-040", cat: "Allgemein", text: "Fenster klemmt 1.OG", status: "Erledigt", dot: "bg-emerald-400" },
          ].map((t) => (
            <div key={t.id} className="bg-stone-800 rounded-xl p-2.5 border border-stone-700/50">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-stone-400 text-[9px] font-mono">{t.id}</span>
                    <span className="text-stone-500 text-[9px]">·</span>
                    <span className="text-stone-400 text-[9px]">{t.cat}</span>
                  </div>
                  <p className="text-white text-[11px] font-medium truncate">{t.text}</p>
                </div>
                <div className={`flex items-center gap-1 ml-2 shrink-0`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                  <span className="text-stone-400 text-[9px]">{t.status}</span>
                </div>
              </div>
            </div>
          ))}

          {/* QR section */}
          <div className="bg-stone-700/50 rounded-xl p-2.5 border border-stone-600/30 mt-1">
            <p className="text-stone-400 text-[9px] mb-1.5 font-medium uppercase tracking-wide">QR-Code teilen</p>
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 bg-white rounded-lg p-1 shrink-0">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-0.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`rounded-[1px] ${[0, 2, 4, 6, 8].includes(i) ? "bg-stone-900" : "bg-stone-300"}`} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white text-[10px] font-medium">Haus Musterstraße 5</p>
                <p className="text-stone-400 text-[9px]">Mieter scannen zum Melden</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="bg-stone-800/80 backdrop-blur border-t border-stone-700/50 px-4 py-3 shrink-0">
          <div className="flex justify-around items-center">
            {[
              { label: "Tickets", active: true },
              { label: "Gebäude", active: false },
              { label: "Berichte", active: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5">
                <div className={`w-1 h-1 rounded-full ${item.active ? "bg-white" : "bg-stone-600"}`} />
                <span className={`text-[9px] ${item.active ? "text-white font-semibold" : "text-stone-500"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1 shrink-0">
          <div className="w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl px-4 py-3 w-52 border border-stone-100">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-red-500 text-sm">🔔</span>
          </div>
          <div>
            <p className="text-stone-900 text-xs font-semibold leading-tight">Neue Meldung!</p>
            <p className="text-stone-500 text-[10px] mt-0.5 leading-tight">Rohrbruch · Musterstr. 5 · Soeben</p>
          </div>
        </div>
        <div className="mt-2 h-1 bg-stone-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-stone-800 rounded-full" />
        </div>
      </div>

      {/* Floating status pill */}
      <div className="absolute -left-6 bottom-32 bg-emerald-500 text-white rounded-full px-4 py-2 shadow-lg text-xs font-semibold flex items-center gap-1.5">
        <div className="w-2 h-2 bg-white rounded-full" />
        Erledigt!
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── 1. NAVBAR ─────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-sm border-b border-stone-200" : "border-b border-stone-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Immofix" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-stone-900 font-black text-xl tracking-tight">Immofix</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#preise" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Preise
              </a>
              <a href="#demo" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors">
                Demo
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#preise"
                className="text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors"
              >
                Anmelden
              </a>
              <a
                href="#preise"
                className="bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-stone-700 transition-colors"
              >
                Kostenlos testen
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-stone-600 hover:text-stone-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white px-4 py-4 space-y-3">
            {["Features", "Preise", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-stone-700 hover:text-stone-900 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#preise"
              className="block w-full bg-stone-900 text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-stone-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Kostenlos testen
            </a>
          </div>
        )}
      </nav>

      {/* ── 2. LOGO HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

        {/* Radialer Hintergrund-Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

        {/* Logo mit Licht-Effekt */}
        <div className="relative flex flex-col items-center gap-10">

          {/* Logo Container */}
          <div className="relative">
            {/* Glow hinter dem Logo */}
            <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -inset-4 bg-white/10 rounded-[40px] blur-2xl" />

            {/* Logo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[48px] overflow-hidden shadow-2xl shadow-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Immofix"
                className="w-full h-full object-cover"
              />
              {/* Lichtzug-Animation */}
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              {/* Dauerhafte obere Licht-Reflexion */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Textblock */}
          <div className="text-center space-y-3">
            <h2 className="text-white text-4xl sm:text-5xl font-black tracking-tight">
              Immofix
            </h2>
            <p className="text-white/40 text-lg font-light tracking-wide">
              Digitale Schadensmeldung
            </p>
          </div>

          {/* Scroll-Hinweis */}
          <div className="absolute bottom-[-40vh] flex flex-col items-center gap-2 opacity-30">
            <span className="text-white text-xs uppercase tracking-widest font-medium">Mehr entdecken</span>
            <svg className="w-5 h-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── 3. HERO ───────────────────────────────────────────────────────── */}
      <section
        id="demo"
        className="min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-white to-stone-100 pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-stone-600 text-sm font-medium">Neu: Handwerker-Abnahme per QR-Code</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] tracking-tight mb-6">
                Schadens&shy;meldungen.{" "}
                <span className="text-stone-500">Digital.</span>{" "}
                <span className="relative">
                  Sofort.
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-stone-900 rounded" />
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xl text-stone-500 leading-relaxed mb-10 max-w-xl">
                Mieter melden per QR-Code. Sie werden in Echtzeit benachrichtigt.
                Handwerker bestätigen per App.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#preise"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-stone-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-stone-200"
                >
                  Jetzt kostenlos starten
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#wie-es-funktioniert"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-xl text-base font-semibold border-2 border-stone-200 hover:border-stone-900 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Live Demo ansehen
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["E", "M", "K", "S", "T"].map((l, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                      style={{
                        backgroundColor: ["#44403c","#57534e","#78716c","#a8a29e","#d6d3d1"][i],
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-500 text-xs">Jetzt kostenlos testen</p>
                </div>
              </div>
            </div>

            {/* Right: Phone mockup */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS STRIP ────────────────────────────────────────────────── */}
      <section className="bg-stone-900 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-stone-700">
            {[
              {
                value: "< 30 Sek.",
                label: "Meldung abschicken",
                sublabel: "Vom Foto bis zum Ticket",
              },
              {
                value: "Echtzeit",
                label: "Statusupdates",
                sublabel: "Mieter sehen jeden Schritt",
              },
              {
                value: "100%",
                label: "Papierlos",
                sublabel: "Alles digital, nichts verliert sich",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:px-8">
                <p className="text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="text-stone-300 font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-stone-500 text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ───────────────────────────────────────────────── */}
      <section id="wie-es-funktioniert" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-stone-500 font-semibold text-sm uppercase tracking-widest mb-3">So einfach geht's</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
              In 3 Schritten zum{" "}
              <span className="text-stone-500">papierlosen</span> Büro
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl">
              <div className="flex justify-between px-24">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-stone-900 to-stone-300 mt-0" />
                <div className="flex-1 h-0.5 bg-gradient-to-r from-stone-300 to-stone-900" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative">
              {[
                {
                  number: "01",
                  emoji: "📱",
                  title: "Mieter scannt QR-Code",
                  description:
                    "Der Mieter scannt den QR-Code am Aushang. Öffnet das Formular im Browser — kein App-Download nötig. Foto aufnehmen, Schaden beschreiben, absenden.",
                  tag: "Sekunden",
                },
                {
                  number: "02",
                  emoji: "🔔",
                  title: "Verwalter wird benachrichtigt",
                  description:
                    "Sie erhalten sofort eine Push-Notification. Im Dashboard sehen Sie Ticket, Foto, Wohnung und Kategorie. Per Klick leiten Sie an den passenden Handwerker weiter.",
                  tag: "Echtzeit",
                },
                {
                  number: "03",
                  emoji: "✅",
                  title: "Handwerker bestätigt Abnahme",
                  description:
                    "Der Handwerker scannt nach der Reparatur den QR-Code. Gibt seinen Abschlussbericht ein. Mieter sieht automatisch \"Erledigt\" — ohne Ihren Eingriff.",
                  tag: "Automatisch",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <span className="text-white font-black text-lg">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all w-full">
                    <div className="text-3xl mb-3">{step.emoji}</div>
                    <h3 className="text-stone-900 font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{step.description}</p>
                    <span className="inline-block bg-stone-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES ───────────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-stone-500 font-semibold text-sm uppercase tracking-widest mb-3">Alles an einem Ort</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Features, die{" "}
              <span className="text-stone-500">wirklich</span> helfen
            </h2>
            <p className="text-stone-500 mt-4 text-lg max-w-xl mx-auto">
              Kein Schnickschnack. Nur das, was Verwalter täglich brauchen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconQR />,
                title: "QR-Code Schadensmeldung",
                description:
                  "Mehrsprachiges Formular (DE, EN, TR, ES, FR + mehr). Kein App-Download. Einfach scannen, melden, fertig.",
                highlight: "8 Sprachen",
              },
              {
                icon: <IconBell />,
                title: "Push-Benachrichtigungen",
                description:
                  "Sofortige Notifications — auch bei geschlossenem Browser. Nie wieder eine Meldung verpassen.",
                highlight: "< 2 Sek. Reaktionszeit",
              },
              {
                icon: <IconEye />,
                title: "Echtzeit-Statusverfolgung",
                description:
                  "Mieter sehen live den Status ihrer Meldung: Gemeldet → In Arbeit → Erledigt. Polling alle 5 Sekunden.",
                highlight: "Keine Rückfragen",
              },
              {
                icon: <IconShare />,
                title: "Handwerker-Weiterleitung",
                description:
                  "Ein Klick: Ticket per WhatsApp oder E-Mail direkt an den zuständigen Handwerker. Mit allen Infos und Foto.",
                highlight: "WhatsApp + E-Mail",
              },
              {
                icon: <IconDocument />,
                title: "PDF-Monatsbericht",
                description:
                  "Automatisch generierter Monatsbericht mit allen Tickets, Kosten und Statistiken. Druckfertig in Sekunden.",
                highlight: "Druckfertig",
              },
              {
                icon: <IconCheck />,
                title: "Handwerker-Abnahme per QR",
                description:
                  "Handwerker scannt nach der Reparatur einen QR-Code, gibt Abschlussbericht ein — Ticket schließt sich automatisch.",
                highlight: "Vollautomatisch",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-stone-100 group-hover:bg-stone-900 rounded-xl flex items-center justify-center mb-5 text-stone-600 group-hover:text-white transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-stone-900 font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{feat.description}</p>
                <span className="inline-flex items-center gap-1 text-stone-600 text-xs font-semibold bg-stone-100 px-3 py-1.5 rounded-full">
                  <IconCheckSmall className="w-3 h-3 text-emerald-500" />
                  {feat.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PRICING ────────────────────────────────────────────────────── */}
      <section id="preise" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-stone-500 font-semibold text-sm uppercase tracking-widest mb-3">Transparent & fair</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Einfache Preise,{" "}
              <span className="text-stone-500">keine Überraschungen</span>
            </h2>
            <p className="text-stone-500 mt-4 text-lg">
              14 Tage kostenlos testen. Keine Kreditkarte nötig.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "Starter",
                price: "29",
                period: "/Monat",
                tagline: "Perfekt für den Einstieg",
                highlighted: false,
                features: [
                  "Bis zu 5 Gebäude",
                  "Unbegrenzte Tickets",
                  "QR-Code Meldungen",
                  "Push-Notifications",
                  "Mieter-Statusverfolgung",
                  "E-Mail Support",
                ],
                cta: "Kostenlos testen",
                ctaStyle: "border-2 border-stone-200 text-stone-900 hover:border-stone-900",
              },
              {
                name: "Professional",
                price: "79",
                period: "/Monat",
                tagline: "Für wachsende Verwaltungen",
                highlighted: true,
                badge: "Beliebteste Wahl",
                features: [
                  "Bis zu 25 Gebäude",
                  "Alle Starter-Features",
                  "Handwerker-Abnahme QR",
                  "PDF-Monatsberichte",
                  "WhatsApp-Weiterleitung",
                  "Prioritäts-Support",
                ],
                cta: "Jetzt starten",
                ctaStyle: "bg-white text-stone-900 hover:bg-stone-100 font-bold",
              },
              {
                name: "Enterprise",
                price: "199",
                period: "/Monat",
                tagline: "Für große Verwaltungen",
                highlighted: false,
                features: [
                  "Unbegrenzte Gebäude",
                  "Alle Pro-Features",
                  "API-Zugang",
                  "Dedizierter Account Manager",
                  "SLA-Garantie",
                  "On-Premise Option",
                ],
                cta: "Kontakt aufnehmen",
                ctaStyle: "border-2 border-stone-200 text-stone-900 hover:border-stone-900",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-stone-900 text-white shadow-2xl shadow-stone-900/20 scale-105"
                    : "bg-stone-50 border border-stone-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${plan.highlighted ? "text-stone-400" : "text-stone-500"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`text-5xl font-black ${plan.highlighted ? "text-white" : "text-stone-900"}`}>
                      {plan.price}€
                    </span>
                    <span className={`text-sm mb-2 ${plan.highlighted ? "text-stone-400" : "text-stone-500"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.highlighted ? "text-stone-400" : "text-stone-500"}`}>{plan.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-white/20" : "bg-stone-200"}`}>
                        <IconCheckSmall className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-stone-700"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? "text-stone-300" : "text-stone-600"}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block text-center py-3.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              30-Tage-Geld-zurück-Garantie · DSGVO-konform · Hosted in Deutschland
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Immofix" className="w-20 h-20 rounded-2xl object-cover opacity-90" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Jetzt verfügbar — sofort loslegen</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Bereit loszulegen?
          </h2>
          <p className="text-stone-400 text-xl mb-4 leading-relaxed">
            Kostenlos 14 Tage testen — keine Kreditkarte nötig.
          </p>
          <p className="text-stone-500 text-base mb-10">
            Starten Sie heute noch — kostenlos und ohne Kreditkarte.
            Werden Sie Teil der digitalen Zukunft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#preise"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-10 py-4 rounded-xl text-base font-bold hover:bg-stone-100 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
            >
              Jetzt kostenlos starten
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="mailto:hallo@immofix.de"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-10 py-4 rounded-xl text-base font-semibold border-2 border-white/30 hover:border-white/70 transition-all hover:-translate-y-0.5"
            >
              Demo vereinbaren
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: "🇩🇪", text: "Server in Deutschland" },
              { icon: "🔒", text: "DSGVO-konform" },
              { icon: "⚡", text: "Setup in 5 Minuten" },
              { icon: "🎯", text: "Keine Einrichtungsgebühr" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-stone-400 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-stone-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Immofix" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-white font-black text-xl tracking-tight">Immofix</span>
            </a>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Features", href: "#features" },
                { label: "Preise", href: "#preise" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "Impressum", href: "/impressum" },
                { label: "Kontakt", href: "mailto:enrico.de.la@icloud.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-stone-600 text-sm font-medium whitespace-nowrap">
              © 2026 Immofix
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-800 text-center">
            <p className="text-stone-600 text-xs">
              Enrico De la Cruz González · Luruper Hauptstraße 114k · 22547 Hamburg ·{" "}
              <a href="mailto:enrico.de.la@icloud.com" className="hover:text-stone-400 transition-colors">
                enrico.de.la@icloud.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
