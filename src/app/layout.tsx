import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Mail } from "lucide-react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Weida Hu - Professor",
  description: "Professor at Shanghai Astronomical Observatory. Research focuses on galaxies in the epoch of reionization, including their formation and evolution.",
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "CV", href: "/cv" },
  { name: "Activities", href: "/activities" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Weida Hu</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              <a
                href="https://github.com/weidahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-foreground/80"
              >
                GitHub
              </a>
              <a
                href="https://orcid.org/0000-0003-3424-3230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-foreground/80"
              >
                ORCID
              </a>
              <a
                href="mailto:weidahu@shao.ac.cn"
                className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground/80"
              >
                <Mail className="h-3.5 w-3.5" />
                weidahu at shao.ac.cn
              </a>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Weida Hu. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
