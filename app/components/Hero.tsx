import Image from "next/image";

const Hero = () => {
  return (
    <section className="border-b pb-16">
      <Image
        src="/images/avatar.png"
        alt="Avatar"
        width={69}
        height={69}
        quality={80}
        priority
        className="-ml-1.5 mb-3 rounded-2xl"
      />
      <div className="mb-5 space-y-1">
        <h1 className="text-4xl font-semibold text-neutral-800">
          Hello! I'm <span className="text-blue-400">Mark</span>.
        </h1>
        <span className="block text-2xl font-light text-neutral-800/60">
          A full-stack software developer based in Scotland.
        </span>
      </div>
      <p className="text-lg font-light text-neutral-800 md:text-xl text-balance">
        I'm a full-stack developer with a keen interest in front-end
        development. I recently graduated from CodeClan's software development
        bootcamp following a career as a freelance videographer. I love all
        things code, especially working with React and the JavaScript ecosystem.
        <br />
        You can check out my projects below, or feel free to say hello!
      </p>
    </section>
  );
};

export default Hero;
