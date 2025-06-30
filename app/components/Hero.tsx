import Link from "next/link";
import { socialLinks } from "./shared/StickyLinks";
import Avatar from "./ui/Avatar";

const Hero = () => {
  return (
    <section className="border-b pb-16">
      <Avatar />

      <div className="mb-6">
        <h1 className="mb-1 text-[34.5px] font-semibold leading-none text-neutral-800">
          Hello! I'm <span className="text-blue-400">Mark</span>.
        </h1>

        <span className="text-xl font-light text-neutral-800/60 md:text-[23px]">
          A software developer based in Scotland.
        </span>
      </div>

      <p className="text-balance text-lg font-light text-neutral-600 md:text-[19px]">
        I build web applications with React, Next.js and TypeScript. I love
        experimenting with new tech, recently I've been creating tools that
        integrate with AI systems using MCP. I'm a bootcamp graduate with a
        background in video production and commercial drone operation.
      </p>

      <div className="mt-6 flex space-x-3 lg:hidden">
        {socialLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            aria-label={`Link to Mark Slorach's ${link.title} profile`}
            className="text-gray-400"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
