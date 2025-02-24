import Gallary from "@/assets/img/H_M_W/Group 1261153464.svg";
import Bg from "@/assets/img/H_M_W/bg.svg";

import { Button } from "./ui/button";

const MathologyWork = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="relative h-full w-full">
      <img src={Bg} alt="bg" className="z-0 h-[250px] object-cover" />

      <div className="jutify-between absolute inset-0 z-[1] grid w-full grid-cols-1 items-center md:grid-cols-2 lg:p-5">
        <div className="col-span-1 flex flex-col items-start justify-center gap-3 px-6 text-left md:gap-5 md:p-10 lg:gap-10">
          <h1 className="text-xl font-bold text-white md:text-4xl lg:text-6xl">
            How Mathology Works
          </h1>
          <h1 className="text-xs text-white md:text-sm lg:text-2xl">
            Mathology Analytics and Guided Learning Curriculum coverage
            Topic-wise progress Identify focus areas track the improvement of
            students and help them improve in Math
          </h1>
          <Button
            type="button"
            className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] text-xs md:p-6 md:px-7 md:text-sm lg:text-lg"
          >
            GET STARTED
          </Button>
        </div>

        <div className="col-span-1 hidden items-center justify-end md:flex md:p-6 lg:p-3">
          <img src={Gallary} alt="imges" />
        </div>
      </div>
    </div>
  );
};

export default MathologyWork;
