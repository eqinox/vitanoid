"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CombinedImageProps {
  width: number;
  height: number;
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function CombinedImageWithText({
  width,
  height,
  onImageRef,
}: CombinedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    if (onImageRef && imageRef.current) {
      onImageRef(imageRef.current);
    }
  }, [onImageRef]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 400); // md breakpoint
      setIsMediumScreen(window.innerWidth >= 401);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  let divideWidth = 1;

  if (isSmallScreen) {
    divideWidth = 1.35;
  } else if (isMediumScreen) {
    divideWidth = 1.1;
  }

  return (
    <div
      ref={imageRef}
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  h-full`}
      style={{
        width: `${width / divideWidth}px`,
        // height: `${height}px`,
        opacity: 0,
        scale: 0.7,
      }}
    >
      <Image
        src={"/images/combined-plus-text.png"}
        alt="Combined image with text"
        fill
        className="object-cover"
      />
    </div>
  );
}
