import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

// Components
import NavBar from "./(site)/components/NavBar";
import Footer from "./(site)/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["300", "400", "500", "700"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Mark Slorach - Software Developer",
  description:
    "Mark Slorach is a full-stack software developer based in Scotland.",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en" className={inter.className}>
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
