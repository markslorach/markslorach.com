import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <figure className="mb-4">
        <Image
          src="/images/me.png"
          width={60}
          height={60}
          alt="Mark Slorach"
          className="hero-image"
        />
      </figure>
      <div className="hero-title">
        <h1>
          Hello!{" "}
          <Link href={"/about"}>
            <span className="text-highlight">I'm Mark</span>
          </Link>
          .<br />
          <span className="hero-span">
            A design and user experience focused software developer based in
            Scotland.
          </span>
        </h1>
      </div>
    </section>
  );
}
