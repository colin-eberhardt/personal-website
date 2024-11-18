import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const NAV_LINKS = [
  {label: "Home", href: "/"},
  {label: "Resume", href: "resume"},
  {label: "Portfolio", href: "portfolio"},
  {label: "Contact", href: "contact"},
  {label: "Fun Facts", href: "fun-facts"},
]

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Colin Eberhardt",
  description: "Personal website for Colin Eberhardt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
            <div className={styles.title}>
              Colin J. Eberhardt
            </div>
            <div className={styles.links}>
              { NAV_LINKS.map((link:any) => 
              <Link 
                className={styles.link}
                href={link.href}>
                  {link.label}
                </Link>
              )}
            </div>
        </header>
        {children}
      </body>
    </html>
  );
}
