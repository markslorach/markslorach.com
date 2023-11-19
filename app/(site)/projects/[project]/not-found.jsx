import Image from "next/image"

export default function NotFound() {
  return (
    <main className="flex justify-center">
    <figure className="pb-2">
        <Image
          src="/images/404.png"
          width={150}
          height={150}
          alt="404 Not Found"
          className="rounded-full"
        />
      </figure>
      
    </main>
  )
}