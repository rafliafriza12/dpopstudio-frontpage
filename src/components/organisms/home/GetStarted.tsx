import { Container } from "@/components/atoms/Container";
import ProcessCard from "@/components/molecules/home/ProcessCard";
import { processSteps } from "@/constant/process";

const GetStarted: React.FC = () => {
  return (
    <section className="w-full bg-[#F6F6F6]">
      <Container className="w-full flex flex-col items-center gap-10 ipad-vertical:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xl">
          <h2 className="font-instrument-serif text-4xl ipad-vertical:text-5xl lg:text-[56px] text-secondary leading-[1.1]">
            Super Simple <br />
            to Get Started
          </h2>
          <p className="font-poppins text-sm ipad-vertical:text-base text-[#6B6B6B] leading-relaxed">
            Our process ensures precision and efficiency, driving growth and
            delivering results for your business.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-5 ipad-vertical:gap-6 w-full">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
