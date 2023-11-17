import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="m-0">
      <figure className="pb-2">
        <Image
          src="/images/me.png"
          width={60}
          height={60}
          alt="Mark Slorach"
          className="hero-image"
        />
      </figure>
      <div className="hero-title">
        <h1 className="text-black/90 dark:text-white/90">
          Hello! <Link href={'/about'}><span className="text-highlight">I'm Mark</span></Link>, a design and
          user experience focused software developer based in Scotland.
        </h1>
      </div>
    </section>
  );
}
