import Image from "next/image";
import { IProcessStep } from "@/constant/process";
import { BodyMediumRegular, Heading5 } from "@/components/atoms/Typography";

interface ProcessCardProps {
  step: IProcessStep;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#D5D5D5] bg-primary p-5 ipad-vertical:p-6">
      {/* Image Area */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <Image
          src={step.imgUrl}
          alt={step.title}
          fill
          className="object-contain"
        />
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
