import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Tipografías
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO general
export const metadata: Metadata = {
  title: "Joaquín Pozzo | Portfolio",
  description: "Portfolio de Joaquín Pozzo, desarrollador web fullstack especializado en React y Node.js.",
  keywords: [
    "Joaquín Pozzo",
    "desarrollador web",
    "frontend",
    "backend",
    "portfolio",
    "React",
    "Node.js",
    "Next.js",
    "Astro",
    "landing page",
  ],
  authors: [{ name: "Joaquín Pozzo", url: "https://joaquinpozzo.dev" }],
  creator: "Joaquín Pozzo",
  openGraph: {
    title: "Joaquín Pozzo | Portfolio",
    description: "Portfolio profesional de desarrollos web, apps y landings.",
    url: "https://joaquinpozzo.dev",
    siteName: "Joaquín Pozzo Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // opcional: imagen para compartir en redes
        width: 1200,
        height: 630,
        alt: "Joaquín Pozzo Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://joaquinpozzo.dev"), // ajustá si es otro dominio
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
