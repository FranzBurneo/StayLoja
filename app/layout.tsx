import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stay-loja-centro.vercel.app"),
  title: "Departamento familiar cerca del centro de Loja | Stay Loja Centro",
  description:
    "Departamento privado en Loja, sector Parque Infantil. Ideal para familias, parejas o viajes de trabajo. 2 habitaciones, 2 baños, cocina equipada, WiFi, Netflix y parqueadero.",
  keywords: [
    "alojamiento en Loja",
    "Airbnb Loja",
    "departamento en Loja",
    "hospedaje en Loja",
    "departamento cerca del centro de Loja",
    "alojamiento familiar en Loja",
    "departamento sector Parque Infantil Loja",
    "hospedaje familiar en Loja"
  ],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Departamento familiar cerca del centro de Loja | Stay Loja Centro",
    description:
      "Departamento privado en Loja, sector Parque Infantil, con 2 habitaciones, 2 baños, cocina equipada, WiFi, Netflix y parqueadero.",
    images: ["/images/property/sala-principal.jpg"],
    locale: "es_EC",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
