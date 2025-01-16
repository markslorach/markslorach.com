"use client";
import { useState } from "react";
import Image from "next/image";

const AvatarHover = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src="/images/avatar.png"
        alt="Avatar"
        width={68}
        height={68}
        quality={80}
        priority
        className={`-ml-1.5 mb-3 rounded-2xl transition-opacity duration-200 ease-in-out ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/images/waving.png"
        alt="Waving Avatar"
        width={68}
        height={68}
        quality={80}
        className={`absolute left-0 top-0 mb-3 rounded-2xl transition-opacity duration-200 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default AvatarHover;
