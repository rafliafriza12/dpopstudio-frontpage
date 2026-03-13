"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/atoms/Container";
import Image from "next/image";
import { BodyMediumRegular, Heading1 } from "@/components/atoms/Typography";

interface HeroPageProps {
  withGradientElement?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC<HeroPageProps> = ({
  withGradientElement = true,
}) => {
  return (
    <section className="w-full bg-linear-to-b from-[#D0D1DA] to-[#F0F0F0] relative z-0 overflow-hidden text-black">
      <div className="absolute z-[-1] w-[500px] h-[500px] ipad-vertical:w-[1200px] ipad-vertical:h-[1200px] ipad-horizontal:w-[1300px] ipad-horizontal:h-[1300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12">
        <Image
          src={"/img/logo/hero-logo.webp"}
          alt="Dpopstudio"
          fill
          className="object-contain"
        />
      </div>
      {withGradientElement && (
        <div className="absolute z-[-2] bottom-0 w-full">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 551"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_7638_32)">
              <ellipse
                cx="786.069"
                cy="616.961"
                rx="564.857"
                ry="262.361"
                fill="url(#paint0_linear_7638_32)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_7638_32"
                x="-133.388"
                y="0"
                width="1838.91"
                height="1233.92"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="177.3"
                  result="effect1_foregroundBlur_7638_32"
                />
              </filter>
              <linearGradient
                id="paint0_linear_7638_32"
                x1="221.212"
                y1="616.961"
                x2="1350.93"
                y2="616.961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.415" stop-color="#C5CAFF" />
                <stop offset="1" stop-color="#FFFEEE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
      <Container className="w-full flex flex-col justify-center items-center h-svh">
        <div className="w-full ipad-horizontal:flex flex-col gap-8 ipad-vertical:flex-row ipad-vertical:items-start ipad-vertical:justify-between hidden">
          <Heading1 className="max-w-[542px] font-instrument-serif">
            We Work Like <span className="italic">We&apos;re You.</span>
          </Heading1>
          <BodyMediumRegular className="max-w-[248.92px] font-instrument-sans">
            A creative studio that blends into your team. We design, build, and
            ship digital products with the care of an in-house crew.
          </BodyMediumRegular>
        </div>
        <div className="w-full h-[85%] flex ipad-horizontal:hidden flex-col justify-between">
          <div className="w-full flex justify-start">
            <Heading1 className="max-w-[202px] ipad-vertical:max-w-[542px] font-instrument-serif mt-8">
              We Work Like <span className="italic">We&apos;re You.</span>
            </Heading1>
          </div>
          <div className="w-full flex justify-end">
            <BodyMediumRegular className="ipad-vertical:max-w-[248.92px] font-instrument-sans">
              A creative studio that blends into your team. We design, build,
              and ship digital products with the care of an in-house crew.
            </BodyMediumRegular>
          </div>
        </div>
      </Container>
    </section>
  );
};
