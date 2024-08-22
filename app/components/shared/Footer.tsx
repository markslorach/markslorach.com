"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 border-t py-12 text-center">
      <small className="tracking-wide text-gray-400 dark:text-gray-500">
        Built using{" "}
        <Link href="https://nextjs.org/" target="_blank" className="font-bold">
          Next.js
        </Link>
        ,{" "}
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          className="font-bold"
        >
          Tailwind
        </Link>
        ,{" "}
        <Link
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="font-bold"
        >
          TypeScript
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.sanity.io/"
          target="_blank"
          className="font-bold"
        >
          Sanity.io
        </Link>
        .
      </small>
    </div>
  );
};

export default Footer;
