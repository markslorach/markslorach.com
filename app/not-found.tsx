import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/404.png"
        width={300}
        height={300}
        alt="404 image"
        className="h-28 w-28 rounded-full"
      />
    </div>
  );
}
