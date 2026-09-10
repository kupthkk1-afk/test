import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "𝗧𝗚 𝗦𝘁𝗼𝗿𝗲",
  description: "𝗘𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴 𝗮𝗯𝗼𝘂𝘁𝗲 𝗽𝗹𝗮𝗻𝗲",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
