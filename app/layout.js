import { Ubuntu } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Mark Slorach | Software Developer",
  description:
    "Mark Slorach is a design and user experience focused junior software developer based in Scotland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
