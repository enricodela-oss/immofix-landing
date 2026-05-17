import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immofix — Digitale Hausverwaltung für moderne Verwalter",
  description:
    "Mieter melden Schäden per QR-Code. Sie werden in Echtzeit benachrichtigt. Handwerker bestätigen per App. Die komplette digitale Lösung für Hausverwaltungen.",
  keywords: "Hausverwaltung, Schadensmeldung, QR-Code, Verwalter, Immobilien, Digital",
  openGraph: {
    title: "Immofix — Digitale Hausverwaltung",
    description: "Schadensmeldungen. Digital. Sofort.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-stone-900">{children}</body>
    </html>
  );
}
