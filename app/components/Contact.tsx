"use client";
import Link from "next/link";
import Heading from "./shared/Heading";
import { contact } from "@/data/contact";
import toast from "react-hot-toast";
import { CONTACT_EMAIL } from "@/constants";
import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section>
      <div className="mb-16 space-y-2">
        <Heading>Get in Touch</Heading>

        <p className="text- text-lg font-light leading-normal text-neutral-600 md:text-pretty">
          Feel free to get in touch or connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/markslorach/"
            target="_blank"
            aria-label="Mark Slorach's LinkedIn"
            className="font-semibold text-blue-400 transition-colors hover:text-blue-500"
          >
            LinkedIn
          </Link>
          . I'm always happy to chat code, answer any questions about my
          projects or explore potential opportunities.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-0">
        {contact.map((item, idx) => (
          <div key={idx}>
            <h3 className="mb-1.5 text-xl font-semibold leading-none text-neutral-800">
              {item.title}
            </h3>
            {item.content === CONTACT_EMAIL ? (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.content);
                  toast.success("Copied to clipboard!");
                }}
                className="flex cursor-pointer items-center gap-1 text-lg text-neutral-800/60 transition-all active:scale-95 sm:hover:text-neutral-800/80 sm:active:scale-100"
              >
                <ClipboardDocumentCheckIcon className="h-[18px] w-[18px]" />
                {item.content}
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                target="_blank"
                aria-label={item.aria}
                className="flex items-center gap-1 text-lg text-neutral-800/60 transition-colors sm:hover:text-neutral-800/80"
              >
                {item.content}
                <ArrowTopRightOnSquareIcon className="h-[18px] w-[18px]" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
