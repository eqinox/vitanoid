"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface CombinedImageProps {
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function Last({ onImageRef }: CombinedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (onImageRef && imageRef.current) {
      onImageRef(imageRef.current);
    }
  }, [onImageRef]);

  return (
    <div
      ref={imageRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      style={{
        // width: "1080px",
        // height: "1920px",
        opacity: 0,
      }}
    >
      <Image
        src={"/images/end.jpg"}
        alt="End image"
        fill
        className="object-contain"
      />
    </div>
  );
}
