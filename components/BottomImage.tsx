'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface BottomImageProps {
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function BottomImage({ onImageRef }: BottomImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onImageRef && imageRef.current) {
      onImageRef(imageRef.current);
    }
  }, [onImageRef]);

  return (
    <div ref={imageRef} className="fixed w-[380px] h-[565px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" >
      <Image
        src="/images/root2.png"
        alt="Bottom image"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
