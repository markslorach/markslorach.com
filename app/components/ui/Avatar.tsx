"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Avatar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative w-fit cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(!isHovering)}
    >
      <Image
        src="/images/waving.png"
        alt="Waving Avatar"
        width={68}
        height={68}
        quality={80}
        className={cn(
          "mb-3 rounded-2xl transition-opacity duration-200 ease-in-out",
          {
            "opacity-0": isHovering,
            "opacity-100": !isHovering,
          },
        )}
      />
      <Image
        src="/images/avatar.png"
        alt="Avatar"
        width={68}
        height={68}
        quality={80}
        priority
        className={cn(
          "absolute left-0 top-0 -ml-1.5 mb-3 rounded-2xl transition-opacity duration-200 ease-in-out",
          {
            "opacity-100": isHovering,
            "opacity-0": !isHovering,
          },
        )}
      />
    </div>
  );
};

export default Avatar;
