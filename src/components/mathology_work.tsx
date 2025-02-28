import Bg from "@/assets/img/H_M_W/bg.svg";
import CAAA from "@/assets/img/H_M_W/caaa.svg";
import PLJ from "@/assets/img/H_M_W/plj.svg";
import SOA from "@/assets/img/H_M_W/soa.svg";
import TPI from "@/assets/img/H_M_W/tpi.svg";

import MaxWidthWrapper from "./max-width-wrapper";

const MathologyWork = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="relative h-full w-full">
      <img
        src={Bg}
        alt="bg"
        className="z-0 h-[730px] object-cover xl:h-full xl:w-full"
      />

      <MaxWidthWrapper className="jutify-between absolute inset-0 z-[1] flex w-full flex-col items-center gap-5 p-5 md:gap-10 lg:gap-0 lg:p-14">
        <div className="flex flex-col items-center justify-center gap-3 px-6 text-left md:gap-5 md:px-10 lg:gap-10">
          <h1 className="text-xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
            How Mathology Works
          </h1>
          <h1 className="text-center text-xs text-white md:text-sm lg:text-2xl">
            Mathology Analytics and Guided Learning Curriculum coverage
            Topic-wise progress Identify focus areas track the improvement of
            students and help them improve in Math
          </h1>
        </div>

        <div className="grid grid-cols-1 items-center justify-end gap-5 overflow-auto md:flex md:grid-cols-2 md:overflow-hidden md:px-6 lg:grid-cols-4 lg:gap-16 lg:px-3">
          <div className="col-span-1 flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-16">
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 lg:p-7">
              <img src={SOA} alt="SOA" className="" />
              <h1 className="text-center font-bold lg:text-lg">
                Student Onboarding
                <br />& Assessment
              </h1>
              <span className="lg:text-medium text-center md:text-sm">
                Students take an initial
                <br /> diagnostic test to determine <br /> their current math
                proficiency.
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 lg:mt-24 lg:p-7">
              <img src={PLJ} alt="" />
              <h1 className="text-center font-bold lg:text-lg">
                Personalized Learning
                <br />
                Journey
              </h1>
              <span className="lg:text-medium text-center md:text-sm">
                Based on assessment results,
                <br /> students receive:
                <br />
                Interactive lessons tailored to
                <br /> their skill level.
              </span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-16">
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 lg:p-7">
              <img src={CAAA} alt="" />
              <h1 className="text-center font-bold lg:text-lg">
                Continuous Assessment <br />& AI Adaptation
              </h1>
              <span className="lg:text-medium text-center md:text-sm">
                The system tracks student
                <br /> progress in real-time and <br />
                adjusts content accordingly.
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 py-9 lg:mt-24 lg:p-7">
              <img src={TPI} alt="" />
              <h1 className="text-center font-bold lg:text-lg">
                Teacher & Parent <br /> Involvement
              </h1>
              <span className="lg:text-medium text-center md:text-sm">
                Teachers can access detailed
                <br /> reports and insights into
                <br /> student learning trends.
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MathologyWork;
