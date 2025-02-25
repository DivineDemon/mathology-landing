import { Star } from "lucide-react";

import CEO from "@/assets/img/Testemonial/ceo.svg";
import colon from "@/assets/img/Testemonial/colon.svg";

const TestimonialCard = () => {
  return (
    <div className="flex w-full shrink-0 items-center justify-center md:gap-5">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-3 rounded-xl bg-[#1A3F68] p-3 text-white lg:gap-3 lg:p-6">
        <div className="flex items-center justify-center gap-1 md:mt-2 lg:mt-0">
          <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
          <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
          <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
          <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
          <Star className="size-4 shrink-0 fill-white/50 text-transparent lg:size-4" />
        </div>
        <div className="w-full gap-1 text-left text-sm text-white/50 md:text-sm lg:text-lg">
          <img src={colon} alt="colon" className="mb-0.5 inline size-4" /> Donec
          ac odio tempor orci dapibus ultrices in iaculis nunc. Facilisis magna
          etiam tempor orci eu lobortis. Faucibus interdum posuere lorem ipsum.{" "}
          <img src={colon} alt="colon" className="inline size-4 rotate-180" />
        </div>
        <div className="flex items-center justify-between gap-1.5 p-1 md:gap-3 lg:p-2">
          <img src={CEO} alt="" className="size-7 shrink-0" />
          <span className="text-xs md:text-sm lg:text-lg">
            Leslie johnson
            <br />
            <span className="text-xs text-[#ECA30C] md:text-sm lg:text-lg">
              Student
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
