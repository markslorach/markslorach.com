import Link from "next/link";
import Heading from "./shared/Heading";
import { contact } from "@/data/contact";

const Contact = () => {
  return (
    <section>
      <div className="mb-16 space-y-1">
        <Heading>Get in Touch</Heading>
        <p className="text-lg font-light leading-normal text-neutral-800/80">
          I'm always happy to chat so please feel free to get in touch.
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
              aria-label={item.title}
              className="text-lg text-neutral-800/60 hover:text-neutral-800/80 transition-colors"
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
