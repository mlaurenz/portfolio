import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Matías Laurenz | Technology & AI Business Partner",
  description: "25+ años construyendo empresas. Ahora utilizo esa experiencia + tecnología + AI para hacer que las cosas sucedan en tu negocio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full antialiased bg-white text-black">{children}</body>
    </html>
  );
}
