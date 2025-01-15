import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24 flex items-center justify-between gap-4 border-t py-8">
      <span className="text-sm text-neutral-800/60">
        Made with{" "}
        <span role="img" aria-label="heart">❤️</span> using Next.js and Shadcn/ui.
      </span>
      <Link
        href="https://github.com/markslorach/markslorach.com.git"
        target="_blank"
        aria-label="GitHub repository for markslorach.com"
      >
        <Github className="h-5 w-5 text-neutral-800/80" />
      </Link>
    </footer>
  );
};

export default Footer;
