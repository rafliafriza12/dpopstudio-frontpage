"use client";
import { Container } from "@/components/atoms/Container";
import Image from "next/image";
import { Heading1 } from "@/components/atoms/Typography";

export function Hero() {
  return (
    <section className="w-full bg-[#F8F7F5] overflow-hidden text-black">
      <Container className="w-full relative z-0 flex  ipad-horizontal:items-center min-h-svh py-16 ipad-vertical:py-20 ipad-horizontal:py-28">
        {/* Background Image - absolute inside container */}
        <div className="absolute z-[-1] w-150 h-150 bottom-[-7%] left-1/2 -translate-x-1/2 ipad-vertical:translate-x-0 ipad-vertical:w-200 ipad-vertical:h-200 ipad-vertical:bottom-[-5%] ipad-vertical:-right-[10%] ipad-vertical:left-auto ipad-horizontal:w-325 ipad-horizontal:h-325 ipad-horizontal:bottom-auto ipad-horizontal:top-1/2 ipad-horizontal:-right-60 ipad-horizontal:-translate-y-1/2">
          <Image
            src={"/img/logo/hero-blog-logo.webp"}
            alt="Dpopstudio"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full ipad-horizontal:w-1/2 flex flex-col gap-8 ipad-vertical:gap-10 mt-10 ipad-vertical:mt-14 ipad-horizontal:mt-0">
          <h1 className="w-80 ipad-vertical:w-full ipad-horizontal:w-[542.34px] font-instrument-serif leading-[120%] text-[52px] ipad-vertical:text-[92px] ipad-horizontal:text-[80px] lg:text-[92px]">
            Insights for Designers,{" "}
            <br className="hidden ipad-vertical:block ipad-horizontal:hidden" />
            Founders, and{" "}
            <br className="hidden ipad-vertical:block ipad-horizontal:hidden" />
            Digital Teams
          </h1>
          <div>
            <button className="px-10 py-4 text-sm font-instrument-sans font-medium border border-black rounded-[10px] hover:bg-black hover:text-white transition-all duration-300">
              Read Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
