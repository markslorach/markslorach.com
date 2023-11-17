'use client'
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import config from "@/sanity.config";

const SanityImage = ({ asset, width, height }) => {
  const imageProps = useNextSanityImage(config, asset);

  if (!imageProps) return null;

  return (
    <div className="flex justify-center">
      <Image {...imageProps} width={width} height={height} />
    </div>
  );
};

export default SanityImage;
