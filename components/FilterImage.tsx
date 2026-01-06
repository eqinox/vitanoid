"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface FilterImageProps {
  width: number;
  height: number;
  imageSrc: string;
  index: number;
  targetY: number;
  imageText?: string;
  onTextRef?: (ref: HTMLSpanElement | null) => void;
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function FilterImage({
  width,
  height,
  imageSrc,
  index,
  onImageRef,
  onTextRef,
  imageText,
}: FilterImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (onImageRef && imageRef.current) {
      onImageRef(imageRef.current);
    }
    if (onTextRef && textRef.current) {
      onTextRef(textRef.current);
    }
  }, [onImageRef, onTextRef]);

  return (
    <div
      ref={imageRef}
      className="fixed top-0 z-0 opacity-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={imageSrc}
        alt={`Filter ${index + 1}`}
        fill
        className="object-cover"
      />
      <span
        ref={textRef}
        className="md:-right-40 md:top-10 absolute md:border-l-40 md:h-[3px] flex items-center md:border-black md:pl-2 opacity-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-top-5"
      >
        {imageText}
      </span>
    </div>
  );
}
