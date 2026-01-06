"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AnotherScreen from "./AnotherScree";
import BottlePlusFilter from "./BottlePlusFilter";
import BottomImage from "./BottomImage";
import CombinedImage from "./CombinedImage";
import CombinedImageWithText from "./CombinedImageWithText";
import FilterImage from "./FilterImage";
import Last from "./Last";

gsap.registerPlugin(ScrollTrigger);

const filterImages = [
  "/images/green-filter.jpg",
  "/images/purple-filter.jpg",
  "/images/red-filter.jpg",
];

export default function ScrollAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const bottomImageRef = useRef<HTMLDivElement>(null);
  const redDivRef = useRef<HTMLDivElement>(null);

  const firstPartRef = useRef<HTMLDivElement>(null);

  const firstLayerRef = useRef<HTMLDivElement>(null);
  const firstLayerImageRef = useRef<HTMLDivElement>(null);
  const firstLayerTextRef = useRef<HTMLSpanElement>(null);

  const secondLayerRef = useRef<HTMLDivElement>(null);
  const secondLayerImageRef = useRef<HTMLDivElement>(null);
  const secondLayerTextRef = useRef<HTMLSpanElement>(null);

  const thirdLayerRef = useRef<HTMLDivElement>(null);
  const thirdLayerImageRef = useRef<HTMLDivElement>(null);
  const thirdLayerTextRef = useRef<HTMLSpanElement>(null);

  const fourthLayerRef = useRef<HTMLDivElement>(null);
  const fourthLayerImageRef = useRef<HTMLDivElement>(null);
  const fourthLayerTextRef = useRef<HTMLSpanElement>(null);

  const fifthLayerRef = useRef<HTMLDivElement>(null);
  const fifthLayerImageRef = useRef<HTMLDivElement>(null);
  const fifthLayerTextRef = useRef<HTMLSpanElement>(null);

  const sixthLayerRef = useRef<HTMLDivElement>(null);
  const sixthLayerImageRef = useRef<HTMLDivElement>(null);
  const sixthLayerTextRef = useRef<HTMLSpanElement>(null);

  const dissapearTextRef = useRef<HTMLDivElement>(null);

  const textDivRef = useRef<HTMLDivElement>(null);

  const foldingLayersRef = useRef<HTMLDivElement>(null);

  const combinedLayersImageRef = useRef<HTMLDivElement>(null);
  const combinedLayersRef = useRef<HTMLDivElement>(null);

  const combinedLayersWithTextRef = useRef<HTMLDivElement>(null);
  const combinedLayersWithTextImageRef = useRef<HTMLDivElement>(null);

  const bottlePlusFilterRef = useRef<HTMLDivElement>(null);
  const bottlePlusFilterImageRef = useRef<HTMLDivElement>(null);

  const lastRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl1 = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);
    if (!bottomImageRef.current) return;

    const appearInitialTextAndMoveRootDown = gsap.timeline({
      scrollTrigger: {
        trigger: redDivRef.current,
        start: "top 90%",
        end: "40% 60%",
        // markers: true,
        scrub: 2,
        toggleActions: "restart none none none",
      },
    });
    appearInitialTextAndMoveRootDown
      .to(textDivRef.current, {
        opacity: 1,
        duration: 1,
        rotate: 360,
        y: "-40%",
      })
      .to(
        bottomImageRef.current,
        {
          y: "10%",
          duration: 1,
        },
        0
      ); // The "0" makes it start at the same time as the text animation

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstPartRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    tl.to(textDivRef.current, {
      y: "-60%",
      opacity: 0,
      duration: 1,
    }).to(
      bottomImageRef.current,
      {
        y: 100, // Move down by 400 pixels
        duration: 1,
        opacity: 0,
      },
      0
    ); // The "0" makes it start at the same time as the text animation

    // Operations with the first image and text
    gsap.to(firstLayerImageRef.current, {
      duration: 1,
      zIndex: 20,
      opacity: 1,
      top: "80%",
      scrollTrigger: {
        trigger: firstLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    gsap.to(firstLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: firstLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    // Operations with the second image and text
    gsap.to(secondLayerImageRef.current, {
      duration: 1,
      zIndex: 30,
      opacity: 1,
      top: "70%",
      scrollTrigger: {
        trigger: secondLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    gsap.to(secondLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: secondLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    // Operations with the third image and text
    gsap.to(thirdLayerImageRef.current, {
      duration: 1,
      zIndex: 40,
      opacity: 1,
      top: "60%",
      scrollTrigger: {
        trigger: thirdLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    gsap.to(thirdLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: thirdLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    // Operations with the fourth image and text
    gsap.to(fourthLayerImageRef.current, {
      duration: 1,
      zIndex: 50,
      opacity: 1,
      top: "50%",
      scrollTrigger: {
        trigger: fourthLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    gsap.to(fourthLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: fourthLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    // Operations with the fifth image and text
    gsap.to(fifthLayerImageRef.current, {
      duration: 1,
      zIndex: 60,
      opacity: 1,
      top: "40%",
      scrollTrigger: {
        trigger: fifthLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    gsap.to(fifthLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: fifthLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    // Operations with the sixth image and text
    gsap.to(sixthLayerImageRef.current, {
      duration: 1,
      zIndex: 70,
      opacity: 1,
      top: "20%",
      scrollTrigger: {
        trigger: sixthLayerRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    gsap.to(sixthLayerTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: sixthLayerRef.current,
        start: "top 5%",
        end: "bottom 90%",
        scrub: 2,
        // markers: true
      },
    });

    const dissapearAllTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: dissapearTextRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    dissapearAllTextTl
      .to(
        firstLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        secondLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        thirdLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        fourthLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        fifthLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        sixthLayerTextRef.current,
        {
          opacity: 0,
        },
        0
      );

    const foldingLayersTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: foldingLayersRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    foldingLayersTimeline
      .to(
        firstLayerImageRef.current,
        {
          top: "65%",
        },
        0
      )
      .to(
        secondLayerImageRef.current,
        {
          top: "60%",
        },
        0
      )
      .to(
        thirdLayerImageRef.current,
        {
          top: "55%",
        },
        0
      )
      .to(
        fourthLayerImageRef.current,
        {
          top: "50%",
        },
        0
      )
      .to(
        fifthLayerImageRef.current,
        {
          top: "45%",
        },
        0
      )
      .to(
        sixthLayerImageRef.current,
        {
          top: "40%",
        },
        0
      );

    const combinedLayersTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: combinedLayersRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    combinedLayersTimeline
      .to(
        firstLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        secondLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        thirdLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        fourthLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        fifthLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        sixthLayerImageRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        0
      )
      .to(
        combinedLayersImageRef.current,
        {
          opacity: 1,
          scale: 1,
        },
        0
      );

    const combinedLayersWithTextTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: combinedLayersWithTextRef.current,
        start: "top center",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    combinedLayersWithTextTimeline
      .to(
        combinedLayersWithTextImageRef.current,
        {
          opacity: 1,
        },
        0
      )
      .to(
        combinedLayersImageRef.current,
        {
          opacity: 0,
        },
        0
      );

    const bottlePlusFilterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: bottlePlusFilterRef.current,
        start: "top center",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    bottlePlusFilterTimeline
      .to(
        combinedLayersWithTextImageRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        bottlePlusFilterImageRef.current,
        {
          opacity: 1,
        },
        0
      );

    const lastTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: lastRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    lastTimeline
      .to(
        lastImageRef.current,
        {
          opacity: 1,
        },
        0
      )
      .to(
        bottlePlusFilterImageRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        backgroundRef.current,
        {
          opacity: 1, // Lower opacity for subtle background
        },
        0
      );
  });

  return (
    <div ref={sectionRef} className="relative w-full h-screen">
      {/* Fixed background with dark overlay */}
      <div
        ref={backgroundRef}
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/end.jpg")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0,
        }}
      >
        {/* Dark overlay to make it darker */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.8 }} />
      </div>

      <BottomImage
        onImageRef={(ref) => {
          bottomImageRef.current = ref;
        }}
      />

      <div className="h-screen  z-20 fixed  text-center w-full">
        <div
          ref={textDivRef}
          className="text-black text-center flex items-center justify-center h-full text-3xl opacity-0"
        >
          Some test text here with a lot of text to see how it looks and behaves
        </div>
      </div>

      <AnotherScreen />
      <div ref={redDivRef} className="relative h-screen w-24"></div>
      <div ref={firstPartRef} className="h-1/7 w-24 "></div>

      <FilterImage
        width={484}
        height={180}
        onImageRef={(ref) => {
          sixthLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer6.png"}
        index={5}
        targetY={0}
      />

      <FilterImage
        onTextRef={(ref) => {
          fifthLayerTextRef.current = ref;
        }}
        width={343}
        height={116}
        onImageRef={(ref) => {
          fifthLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer5.png"}
        index={4}
        targetY={0}
      />

      <FilterImage
        onTextRef={(ref) => {
          fourthLayerTextRef.current = ref;
        }}
        width={363}
        height={88}
        onImageRef={(ref) => {
          fourthLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer4.png"}
        index={3}
        targetY={0}
      />

      <FilterImage
        onTextRef={(ref) => {
          thirdLayerTextRef.current = ref;
        }}
        width={354}
        height={93}
        onImageRef={(ref) => {
          thirdLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer3.png"}
        index={2}
        targetY={0}
      />

      <FilterImage
        onTextRef={(ref) => {
          secondLayerTextRef.current = ref;
        }}
        width={350}
        height={150}
        onImageRef={(ref) => {
          secondLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer2.png"}
        index={1}
        targetY={0}
      />

      <FilterImage
        onTextRef={(ref) => {
          firstLayerTextRef.current = ref;
        }}
        width={346}
        height={102}
        onImageRef={(ref) => {
          firstLayerImageRef.current = ref;
        }}
        imageSrc={"/images/layer1.png"}
        index={1}
        targetY={0}
      />

      <div ref={firstLayerRef} className="h-screen w-24  relative"></div>

      <div ref={secondLayerRef} className="h-screen w-24  relative"></div>

      <div ref={thirdLayerRef} className="h-screen w-24  relative"></div>

      <div
        ref={fourthLayerRef}
        className="h-screen w-24 g-red-500 relative"
      ></div>

      <div ref={fifthLayerRef} className="h-screen w-24  relative"></div>

      <div ref={sixthLayerRef} className="h-screen w-24  relative"></div>

      <div ref={dissapearTextRef} className="h-screen w-24  relative"></div>

      <div ref={foldingLayersRef} className="h-screen w-24  relative"></div>

      <div ref={combinedLayersRef} className="h-screen w-24  relative"></div>

      <CombinedImage
        width={180}
        height={368}
        onImageRef={(ref) => {
          combinedLayersImageRef.current = ref;
        }}
      />

      <div
        ref={combinedLayersWithTextRef}
        className="h-screen w-24  relative"
      ></div>

      <CombinedImageWithText
        width={430}
        height={720}
        onImageRef={(ref) => {
          combinedLayersWithTextImageRef.current = ref;
        }}
      />

      <div ref={bottlePlusFilterRef} className="h-screen w-24  relative"></div>

      <BottlePlusFilter
        width={360}
        height={720}
        onImageRef={(ref) => {
          bottlePlusFilterImageRef.current = ref;
        }}
      />
      <AnotherScreen />
      <div ref={lastRef} className="h-screen w-24  relative"></div>

      <Last
        onImageRef={(ref) => {
          lastImageRef.current = ref;
        }}
      />

      <AnotherScreen />
    </div>
  );
}
