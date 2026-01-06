"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface CombinedImageProps {
  width: number;
  height: number;
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function BottlePlusFilter({
  width,
  height,
  onImageRef,
}: CombinedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (onImageRef && imageRef.current) {
      onImageRef(imageRef.current);
    }
  }, [onImageRef]);

  return (
    <div
      ref={imageRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full"
      style={{
        width: `${width}px`,
        // height: `${height}px`,
        opacity: 0,
      }}
    >
      <Image
        src={"/images/bottle-plus-filter.png"}
        alt="Bottle plus filter"
        fill
        className="object-cover"
      />
    </div>
  );
}
