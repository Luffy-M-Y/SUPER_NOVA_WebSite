import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPER NOVA — Utilitaire Windows",
  description: "Un utilitaire Windows local et hors ligne pour le Wi-Fi et les comptes Windows locaux.",
  icons: {
    icon: "/SUPER_NOVA.ico",
    shortcut: "/SUPER_NOVA.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
