"use client";
import Image from "next/image";
import { IProcessStep } from "@/constant/process";
import { BodyMediumRegular, Heading5 } from "@/components/atoms/Typography";
import { useState, useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ProcessCardProps {
  step: IProcessStep;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(step.lottieUrl)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [step.lottieUrl]);

  useEffect(() => {
    if (lottieRef.current && animationData) {
      if (isHovered) {
        lottieRef.current.goToAndPlay(0, true);
      } else {
        const totalFrames = lottieRef.current.getDuration(true) as number;
        lottieRef.current.goToAndStop(totalFrames, true);
      }
    }
  }, [isHovered, animationData]);

  return (
    <div
      className="flex flex-col gap-5 rounded-2xl border border-[#D5D5D5] bg-primary p-5 ipad-vertical:p-6 transition-all duration-300 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {animationData ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
            className="w-full h-full object-contain"
            onDOMLoaded={() => {
              if (lottieRef.current) {
                const totalFrames = lottieRef.current.getDuration(
                  true,
                ) as number;
                lottieRef.current.goToAndStop(totalFrames, true);
              }
            }}
          />
        ) : (
          <Image
            src={step.imgUrl}
            alt={step.title}
            fill
            className="object-contain"
          />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <Heading5 className="font-instrument-serif ">{step.title}</Heading5>
        <BodyMediumRegular className="font-instrument-sans  text-[#787878]">
          {step.description}
        </BodyMediumRegular>
      </div>
    </div>
  );
};

export default ProcessCard;
