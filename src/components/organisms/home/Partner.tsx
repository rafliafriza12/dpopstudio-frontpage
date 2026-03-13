"use client";
import { IPartner, partnerList } from "@/constant/partner";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partner: React.FC = () => {
  return (
    <section className="w-full h-[150px] ipad-vertical:h-[200px] lg:h-[247px] bg-[#EDECEF] flex items-center justify-center">
      <div className=" w-full max-w-[2550px] overflow-hidden">
        <Marquee direction="left" className="w-full overflow-hidden">
          {partnerList.map((item: IPartner, i: number) => {
            return (
              <div className="mr-10 ipad-vertical:mr-[77px] w-[100px] ipad-vertical:w-[120px] lg:w-[137.87px] aspect-video rounded-[26px] relative overflow-hidden opacity-60">
                <Image
                  src={item.imgUrl}
                  alt={item.partnerName}
                  fill
                  className="object-cover "
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Partner;
