import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yuxuan Sun",
  description: "Photography and projects by Yuxuan Sun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} bg-[#f7f7f5] text-[#111111] antialiased`}>
        <header className="border-b border-black/10">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
            <Link href="/" className="text-lg font-semibold tracking-wide">
              Yuxuan Sun
            </Link>

            <div className="flex gap-6 text-sm text-black/60">
              <Link href="/photography" className="transition hover:text-black">
                Photography
              </Link>
              <Link href="/projects" className="transition hover:text-black">
                Projects
              </Link>
              <Link href="/about" className="transition hover:text-black">
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10 md:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}