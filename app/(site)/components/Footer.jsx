import Link from "next/link";

export default function Footer() {
  const contactDetails = [
    {
      href: "/",
      icon: "Email",
      text: "hello@markslorach.com",
    },
    {
      href: "https://www.linkedin.com/in/markslorach/",
      icon: "LinkedIn",
      text: "in/markslorach",
    },
    {
      href: "https://github.com/markslorach",
      icon: "GitHub",
      text: "git/markslorach",
    },
  ];

  return (
    <footer className="my-16">
      <h2 className="mb-6">Contact</h2>
      <div className="grid grid-cols-4 gap-4 tracking-wide">
        <div className="col-span-1">
          {contactDetails.map((detail) => (
            <div
              className="flex mb-4 text-white/70 font-light"
              key={detail.text}
            >
              {detail.icon}
            </div>
          ))}
        </div>
        <div className="col-span-3 gap-4">
          {contactDetails.map((detail) => (
            <div
              className="flex mb-4 text-white/70 hover:text-white/90 transition duration-300 ease-in-out"
              key={detail.text}
            >
              <Link href={detail.href}>
                <p>{detail.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
