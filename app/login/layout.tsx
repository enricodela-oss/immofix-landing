import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anmelden | Immofix",
  description:
    "Bei Immofix anmelden — digitale Hausverwaltungssoftware für professionelle Verwalter. Schadensmeldungen, Handwerker-Koordination und Versicherungsübermittlung.",
  keywords: "Immofix Login, Immofix Anmelden, Immofix Sign in, Hausverwaltung Software",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
