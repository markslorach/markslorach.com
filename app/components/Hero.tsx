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
        <span className="block text-2xl font-light text-neutral-800/80">
          A full-stack software developer based in Scotland.
        </span>
      </div>
      <p className="text-lg font-light leading-normal text-neutral-800-700 md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
        dui elementum, pretium quam sed, semper leo. Cras fringilla quam in
        tellus vulputate, laoreet malesuada ex dictum.
      </p>
    </section>
  );
};

export default Hero;
