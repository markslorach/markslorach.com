import type { Metadata } from "next";
import { Nunito_Sans as FontSans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import StickyLinks from "./components/shared/StickyLinks";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Slorach - Software Developer",
  description: "A full-stack software developer based in Scotland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-gray-50 font-sans antialiased", fontSans.variable)}
      >
        <main className="mx-auto flex h-dvh max-w-2xl flex-col px-4">
          <NavBar />
          <StickyLinks />
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
