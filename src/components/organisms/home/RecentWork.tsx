"use client";

import { Container } from "@/components/atoms/Container";
import { BodySmallMedium, Heading2 } from "@/components/atoms/Typography";
import { IRecentWorkItem, recentWorkList } from "@/constant/recent-work";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const RecentWork: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F5] pb-5 ipad-vertical:pb-7.5 lg:pb-15 lg:min-h-[90vh] flex flex-col justify-center items-center">
      <Container className="w-full  flex flex-col items-center gap-10">
        <div className="max-w-[580.18px] flex flex-col items-center gap-6 ipad-vertical:gap-8 px-5 ipad-vertical:px-0">
          <BodySmallMedium className="font-instrument-sans uppercase ">
            recent work
          </BodySmallMedium>
          <Heading2 className="font-instrument-serif text-center">
            Designs That Speak Your Brand's Language
          </Heading2>
        </div>
      </Container>
      <div className=" w-full max-w-[2550px] overflow-hidden">
        <Marquee direction="right" className="w-full overflow-hidden">
          {recentWorkList.map((item: IRecentWorkItem, i: number) => {
            return (
              <div className="mr-4 ipad-vertical:mr-[33px] w-[280px] h-[220px] ipad-vertical:w-[400px] ipad-vertical:h-[310px] lg:w-[516.55px] lg:h-[400.31px] rounded-[16px] ipad-vertical:rounded-[26px] relative overflow-hidden">
                <Image
                  src={item.imgUrl}
                  alt={item.workName}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default RecentWork;
