import { Container } from "@/components/atoms/Container";
import Image from "next/image";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  Heading1,
  Heading5,
} from "../atoms/Typography";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="w-full bg-[#101010] relative z-0 overflow-hidden">
      <div className="absolute z-[-1] w-[800px] h-[800px] ipad-vertical:w-[1200px] ipad-vertical:h-[1200px] lg:w-[1800px] lg:h-[1800px] -bottom-[400px] ipad-vertical:-bottom-[650px] lg:-bottom-[950px] left-1/2 -translate-x-1/2 -rotate-12">
        <Image
          src={"/img/logo/hero-logo.webp"}
          alt="Dpopstudio"
          fill
          className="object-contain"
        />
      </div>
      <Container className="flex flex-col items-center justify-start gap-[71px] min-h-[60vh] lg:min-h-screen">
        <div className="flex flex-col items-center gap-1.5 max-w-[595px]">
          <BodyLargeMedium className="font-instrument-sans text-[#747BF5]">
            Have any Question?
          </BodyLargeMedium>
          <h1 className="font-instrument-serif text-center text-white text-[36px] ipad-vertical:text-[56px] lg:text-[80px] leading-[100%] tracking-[-1px]">
            Get a free consultation about your projects.
          </h1>
        </div>
        <div className="flex items-center flex-col max-w-[560px] gap-6">
          <Heading5 className="font-instrument-sans font-medium text-[#B8B8B8] text-center leading-[150%]!">
            Let’s discuss your project or maybe a vision you have in mind. Book
            a quick call with our team and see where it goes.
          </Heading5>
          <Link
            href={"#"}
            className="px-[28.98px] py-4 rounded-[10px] bg-white"
          >
            <BodyMediumRegular className="font-instrument-sans">
              Book a call
            </BodyMediumRegular>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
