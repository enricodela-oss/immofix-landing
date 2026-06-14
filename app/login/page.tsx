"use client";

import { useState } from "react";
import Image from "next/image";

const APP_URL = "https://immobilienverwaltung-blush.vercel.app";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Ungültige Zugangsdaten");
        return;
      }
      window.location.href = `${APP_URL}${data.home ?? "/dashboard"}`;
    } catch {
      setError("Verbindungsfehler. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4">

      {/* Logo + Titel */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/logo.png"
          alt="Immofix"
          width={72}
          height={72}
          className="rounded-2xl object-cover mb-4 shadow-md"
        />
        <h1 className="text-xl font-bold text-stone-900 tracking-tight">Immofix</h1>
        <p className="text-sm text-stone-500 mt-0.5">Bitte melde dich an</p>
      </div>

      {/* Login-Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
              Benutzername
            </label>
            <input
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Benutzername"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
              Passwort
            </label>
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold py-3 rounded-xl hover:bg-stone-700 transition-all disabled:opacity-60 text-sm"
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )}
            {loading ? "Anmelden…" : "Anmelden"}
          </button>
        </form>
      </div>

      {/* Passwort vergessen */}
      <div className="mt-4 text-center space-y-2">
        <a
          href={`${APP_URL}/passwort-vergessen`}
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          Passwort vergessen?
        </a>
        <p className="text-xs text-stone-400">
          Noch kein Konto?{" "}
          <a href={`${APP_URL}/signup`} className="underline hover:text-stone-600">
            Kostenlos testen
          </a>
        </p>
      </div>
    </div>
  );
}
