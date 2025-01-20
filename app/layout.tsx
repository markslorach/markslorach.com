import type { Metadata } from "next";
import { Nunito_Sans as FontSans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import StickyLinks from "./components/shared/StickyLinks";
import { cn } from "@/lib/utils";
import { GridPatternLinearGradient } from "./components/ui/GridPatternLinearGradient";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" className="overflow-y-scroll" suppressHydrationWarning>
      <body
        className={cn("bg-gray-50 font-sans antialiased", fontSans.variable)}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
          <main className="mx-auto flex h-dvh max-w-2xl flex-col px-4">
            <GridPatternLinearGradient />
            <NavBar />
            <StickyLinks />
            <div className="flex-grow">{children}</div>
            <Footer />
          </main>
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "#60A5FA",
                  secondary: "#F9FAFB",
                },
                style: {
                  borderRadius: "8px",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#525252",
                  fontFamily: "var(--font-sans)",
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
