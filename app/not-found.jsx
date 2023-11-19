import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <figure>
          <Image
            src="/images/404.png"
            width={150}
            height={150}
            alt="404 Not Found"
            className="rounded-full"
            placeholder="blur"
          />
        </figure>
        <h1 className="text-7xl leading-none tracking-wide font-bold text-white/90">
          404
        </h1>
        <p className="text-sm sm:text-base font-semibold leading-none tracking-wide text-white/70">
          Sorry, I couldn't find the page you are looking for!
        </p>
      </div>
    </main>
  );
}
