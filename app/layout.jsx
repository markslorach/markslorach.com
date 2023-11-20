// import { Ubuntu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

// Components
import NavBar from "./(site)/components/NavBar";
import Footer from "./(site)/components/Footer";

// const ubuntu = Ubuntu({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// });

export const metadata = {
  title: "Mark Slorach - Software Developer",
  description:
    "Mark Slorach is a full-stack software developer based in Scotland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
