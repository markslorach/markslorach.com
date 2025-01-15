import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export const socialLinks = [
  {
    title: "Github",
    href: "https://github.com/markslorach",
    icon: <FaGithub className="h-7 w-7" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/markslorach",
    icon: <FaLinkedin className="h-7 w-7" />,
  },
  {
    title: "Bluesky",
    href: "https://bsky.app/profile/markslorach.com",
    icon: <FaBluesky className="h-7 w-7" />,
  },
];

const StickyLinks = () => {
  return (
    <div className="fixed left-0 hidden min-h-dvh flex-col items-center justify-center gap-3 p-4 lg:flex">
      {socialLinks.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          target="_blank"
          aria-label={`Link to Mark Slorach's ${link.title} profile`}
          className="text-gray-400 transition-transform duration-200 ease-in-out hover:scale-110 hover:text-gray-500/80"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default StickyLinks;
