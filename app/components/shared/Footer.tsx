import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24 flex items-center justify-between gap-4 border-t py-8">
      <span className="text-lg text-neutral-800/60">
        created by{" "}
        <Link
          className="font-semibold text-blue-400 transition-colors hover:text-blue-500"
          href="https://linkedin.com/in/markslorach"
          target="_blank"
          aria-label="Link for Mark Slorach's LinkedIn profile"
        >
          mark slorach
        </Link>
        .
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
