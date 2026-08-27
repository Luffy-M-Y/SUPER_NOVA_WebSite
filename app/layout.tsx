import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPER NOVA — Windows Utility",
  description: "A local, offline Windows utility for Wi-Fi, password and recovery tasks.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
