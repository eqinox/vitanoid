'use client';

import ScrollAnimationSection from '@/components/ScrollAnimationSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
   <ScrollAnimationSection />
  );
}
