import { Star } from "lucide-react";

import Bg from "@/assets/img/Testemonial/bg.svg";
import CEO from "@/assets/img/Testemonial/ceo.svg";
import colon from "@/assets/img/Testemonial/colon.svg";
import Title from "@/assets/img/Testemonial/title.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testemonial = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="relative h-full w-full">
      <img src={Bg} alt="bg" className="z-0 h-[400px] object-cover" />
      <div className="absolute inset-0 z-[1] flex h-[400px] w-full flex-col items-center justify-center md:mt-0 lg:mt-5 lg:p-5">
        <img src={Title} alt="Works" className="flex w-14 md:w-16 lg:w-24" />
        <h1 className="mt-1.5 w-full text-center font-bold text-white md:text-lg lg:text-4xl">
          What People Say about Our Organization
        </h1>
        <div className="mx-auto my-5 h-1 w-20 bg-yellow-500" />
        <div className="flex w-full items-center justify-center px-16 md:py-5 lg:px-20 lg:py-10">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative flex w-full items-center justify-center md:gap-5">
                    <img
                      src={colon}
                      alt=""
                      className="absolute -top-2.5 left-5 z-[1] flex size-7 items-start shadow-md"
                    />
                    <div className="flex h-fit w-full flex-col items-start justify-center gap-3 rounded-xl bg-[#1A3F68] px-3 pb-3 pt-8 text-white lg:gap-3 lg:p-6">
                      <div className="flex items-center justify-center gap-1 md:mt-2 lg:mt-0">
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-[#FFCD00] text-transparent lg:size-4" />
                        <Star className="size-4 shrink-0 fill-white/50 text-transparent lg:size-4" />
                      </div>
                      <span className="w-full text-left text-sm text-white/50 md:text-sm lg:text-lg">
                        Donec ac odio tempor orci dapibus ultrices in iaculis
                        nunc. Facilisis magna etiam tempor orci eu lobortis.
                        Faucibus interdum posuere lorem ipsum.
                      </span>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPagination />
            <CarouselPrevious className="bg-[#ffcd00] disabled:border disabled:border-white disabled:bg-transparent disabled:text-white" />
            <CarouselNext className="bg-[#ffcd00] disabled:border disabled:border-white disabled:bg-transparent disabled:text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
