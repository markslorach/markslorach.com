import Link from "next/link";
import Heading from "./shared/Heading";
import { contact } from "@/data/contact";

const Contact = () => {
  return (
    <section>
      <div className="mb-16 space-y-1">
        <Heading>Get in Touch</Heading>
        <p className="text-lg font-light text- md:text-pretty leading-normal text-neutral-800/80">
          Feel free to get in touch or connect with me on LinkedIn. I'm always
          happy to chat code, answer any questions about my projects or explore
          potential opportunities.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {contact.map((item, idx) => (
          <div key={idx}>
            <h3 className="mb-1.5 text-xl font-semibold leading-none text-neutral-800">
              {item.title}
            </h3>
            <Link
              href={item.href}
              target="_blank"
              aria-label={item.aria}
              className="text-lg text-neutral-800/60 transition-colors hover:text-neutral-800/80"
            >
              {item.content}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
