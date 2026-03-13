import { Container } from "@/components/atoms/Container";
import {
  BodyMediumRegular,
  BodySmallRegular,
  Heading2,
  Heading5,
} from "@/components/atoms/Typography";
import SocialIconCard from "@/components/atoms/SocialIconCard";
import { socialPlatforms } from "@/constant/social-platform";
import Image from "next/image";

interface IWeAreHereProps {
  order: "first" | "middle" | "last";
}

const WeAreHere: React.FC<IWeAreHereProps> = ({ order }) => {
  switch (order) {
    case "first":
      return (
        <section className="w-full bg-[#FDFCFC]">
          <Container className="w-full flex flex-col items-center justify-center gap-[52px]">
            <div className="flex flex-col items-center gap-6">
              <Heading2 className="font-instrument-serif">We Are Here</Heading2>
              <BodyMediumRegular className="font-instrument-sans">
                Discover our latest designs, ideas, and creative updates across
                our favorite platforms.
              </BodyMediumRegular>
            </div>

            <div className=" w-full max-w-[1080px] h-auto ipad-vertical:h-[250px]  border border-[#D5D5D5] bg-[#F5F5F5] rounded-2xl flex items-center justify-center px-4 ipad-vertical:px-8 py-6 ipad-vertical:py-8 overflow-hidden">
              <div className="flex items-center flex-wrap justify-center gap-4 ipad-vertical:gap-0 ipad-vertical:flex-nowrap ipad-vertical:-space-x-24 ipad-vertical:-mb-44">
                {socialPlatforms.map((platform) => (
                  <SocialIconCard key={platform.id} platform={platform} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      );
    case "middle":
      return (
        <section className="w-full bg-[#FDFCFC]">
          <Container className="w-full flex flex-col items-center justify-center gap-[52px]">
            <div className="flex flex-col items-center gap-6">
              <Heading2 className="font-instrument-serif">We Are Here</Heading2>
              <BodyMediumRegular className="font-instrument-sans">
                Discover our latest designs, ideas, and creative updates across
                our favorite platforms.
              </BodyMediumRegular>
            </div>

            <div className=" w-full max-w-[1080px] h-auto ipad-vertical:h-[302px]  border border-[#D5D5D5] bg-white rounded-2xl grid grid-cols-1 ipad-vertical:grid-cols-7">
              <div className="col-span-1 ipad-vertical:col-span-3 w-full h-[200px] ipad-vertical:h-full bg-[#F5F5F5] rounded-2xl overflow-hidden relative ">
                <Image
                  src={"/img/we-are-here/we-are-here-middle.png"}
                  alt="dpopstudio"
                  fill
                  className="object-contain translate-y-7 scale-[0.8] "
                />
              </div>
              <div className="w-full h-full col-span-1 ipad-vertical:col-span-2 px-4 ipad-vertical:px-[60px] py-6 ipad-vertical:py-8 flex flex-col justify-between gap-4 ipad-vertical:gap-0">
                {socialPlatforms.slice(0, 3).map((platform) => {
                  return (
                    <div className="flex w-full h-[51px] gap-[18px]">
                      <div className="h-full w-[51px] bg-[#F3F2F1] rounded-[10px] relative">
                        <Image
                          src={platform.icon}
                          alt="dpopstudio"
                          fill
                          className="object-contain scale-[0.8]"
                        />
                      </div>
                      <div className=" h-full flex flex-col justify-center gap-2 mt-1">
                        <Heading5 className="font-instrument-sans">
                          {platform.name}
                        </Heading5>
                        <BodySmallRegular className="text-[#787878] font-instrument-sans">
                          @dpopstudio
                        </BodySmallRegular>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-full col-span-1 ipad-vertical:col-span-2 px-4 ipad-vertical:px-[60px] py-6 ipad-vertical:py-8 flex flex-col justify-between gap-4 ipad-vertical:gap-0">
                {socialPlatforms.slice(3).map((platform) => {
                  return (
                    <div className="flex w-full h-[51px] gap-[18px]">
                      <div className="h-full w-[51px] bg-[#F3F2F1] rounded-[10px] relative">
                        <Image
                          src={platform.icon}
                          alt="dpopstudio"
                          fill
                          className="object-contain scale-[0.8]"
                        />
                      </div>
                      <div className=" h-full flex flex-col justify-center gap-2 mt-1">
                        <Heading5 className="font-instrument-sans">
                          {platform.name}
                        </Heading5>
                        <BodySmallRegular className="text-[#787878] font-instrument-sans">
                          @dpopstudio
                        </BodySmallRegular>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      );
    case "last":
      return (
        <section className="w-full bg-[#FDFCFC]">
          <Container className="w-full flex flex-col items-center justify-center gap-[52px]">
            <div className="flex flex-col items-center gap-6">
              <Heading2 className="font-instrument-serif">We Are Here</Heading2>
              <BodyMediumRegular className="font-instrument-sans">
                Discover our latest designs, ideas, and creative updates across
                our favorite platforms.
              </BodyMediumRegular>
            </div>

            <div className=" w-full max-w-[1080px]  bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-5 ipad-vertical:gap-10">
              {socialPlatforms.map((platform) => {
                return (
                  <div className="w-full flex flex-col h-auto ipad-vertical:h-[298px] rounded-2xl border border-[#D5D5D5]">
                    <div className="w-full h-[160px] ipad-vertical:h-[199px] rounded-t-2xl bg-[#F5F5F5] relative overflow-hidden">
                      <Image
                        src={"/img/we-are-here/we-are-here-middle.png"}
                        alt="dpopstudio"
                        fill
                        className="object-contain translate-y-4 scale-[0.8] "
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex w-full h-[51px] gap-[18px]">
                        <div className="h-full w-[51px] bg-[#F3F2F1] rounded-[10px] relative">
                          <Image
                            src={platform.icon}
                            alt="dpopstudio"
                            fill
                            className="object-contain scale-[0.8]"
                          />
                        </div>
                        <div className=" h-full flex flex-col justify-center gap-2 mt-1">
                          <Heading5 className="font-instrument-sans">
                            {platform.name}
                          </Heading5>
                          <BodySmallRegular className="text-[#787878] font-instrument-sans">
                            @dpopstudio
                          </BodySmallRegular>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      );

    default:
      return;
  }
};

export default WeAreHere;
