'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useEffect } from 'react';

interface FilterImageProps {
  width: number;
  height: number;
  imageSrc: string;
  index: number;
  targetY: number;
  onTextRef?: (ref: HTMLSpanElement | null) => void;
  onImageRef?: (ref: HTMLDivElement | null) => void;
}

export default function FilterImage({ width, height, imageSrc, index, onImageRef, onTextRef }: FilterImageProps) {  
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
      <span ref={textRef} className='-right-40 top-10 absolute border-l-40 h-[3px] flex items-center border-black pl-2 opacity-0'
      
      >
        asdasdasdsad        
      </span>
    </div>
  );
}
