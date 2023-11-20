import Link from "next/link";

export default function Footer() {
  const contactDetails = [
    {
      href: "mailto:hello@markslorach.com",
      name: "Email",
      text: "hello@markslorach.com",
    },
    {
      href: "https://www.linkedin.com/in/markslorach/",
      name: "LinkedIn",
      text: "in/markslorach",
    },
    {
      href: "https://github.com/markslorach",
      name: "GitHub",
      text: "git/markslorach",
    },
  ];

  return (
    <footer className="mt-28 mb-16 " id="contact">
      <h2 className="mb-6">Contact</h2>
      <div className="grid grid-cols-5 sm:grid-cols-4 sm:gap-4 tracking-wide">
        <div className="col-span-2 sm:col-span-1">
          {contactDetails.map((detail) => (
            <div
              className="flex mb-4 text-white/70 font-light"
              key={detail.text}
            >
              {detail.name}
            </div>
          ))}
        </div>
        <div className="col-span-3 sm:col-span-3 gap-4">
          {contactDetails.map((detail) => (
            <div
              className="flex mb-4 text-white/70 hover:text-white/90 transition duration-300 ease-in-out"
              key={detail.text}
            >
              <Link href={detail.href} target="blank">
                <p>{detail.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
