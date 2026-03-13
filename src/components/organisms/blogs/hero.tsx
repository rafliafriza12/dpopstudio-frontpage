"use client";
import { Container } from "@/components/atoms/Container";
import Image from "next/image";
import { Heading1 } from "@/components/atoms/Typography";

export function Hero() {
  return (
    <section className="w-full bg-[#F8F7F5] overflow-hidden text-black">
      <Container className="w-full relative z-0 flex items-center min-h-svh py-16 ipad-vertical:py-20 ipad-horizontal:py-28">
        {/* Background Image - absolute inside container */}
        <div className="absolute z-[-1] w-[500px] h-[500px] ipad-vertical:w-[800px] ipad-vertical:h-[800px] ipad-horizontal:w-[1300px] ipad-horizontal:h-[1300px] top-1/2 -right-60 -translate-y-1/2">
          <Image
            src={"/img/logo/hero-blog-logo.webp"}
            alt="Dpopstudio"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full ipad-vertical:w-1/2 flex flex-col gap-8 ipad-vertical:gap-24">
          <Heading1 className="max-w-[542.34px] font-instrument-serif">
            Insights for Designers, Founders, and Digital Teams
          </Heading1>
          <div>
            <button className="px-10 py-5 text-sm font-instrument-sans font-medium border border-black rounded-[10px] hover:bg-black hover:text-white transition-all duration-300">
              Read Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
