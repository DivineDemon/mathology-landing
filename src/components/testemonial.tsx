import { useEffect, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Bg from "@/assets/img/Testemonial/bg.svg";
import Title from "@/assets/img/Testemonial/title.svg";

import MaxWidthWrapper from "./max-width-wrapper";
import TestimonialCard from "./testimonials/testimonial-card";
import { Button } from "./ui/button";

const Testimonial = ({ id }: { id?: string }) => {
  const totalCards = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - visibleCards ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div id={id} className="relative h-full w-full overflow-hidden">
      <img
        src={Bg}
        alt="bg"
        className="z-0 h-[400px] w-full object-cover md:h-full"
      />
      <MaxWidthWrapper className="absolute inset-0 z-[1] flex h-[400px] w-full flex-col items-center justify-center md:mt-0 md:h-full lg:mt-5 lg:p-5">
        <img src={Title} alt="Works" className="flex w-14 md:w-16 lg:w-24" />
        <h1 className="mt-1.5 w-full text-center font-bold text-white md:text-lg lg:text-4xl">
          What People Say about Our Organization
        </h1>
        <div className="mx-auto my-5 h-1 w-20 bg-yellow-500" />
        <div className="relative flex w-full items-center justify-center px-5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`z-[2] mr-4 flex size-8 shrink-0 items-center justify-center rounded-full p-1.5 text-black ${
              currentIndex === 0
                ? "cursor-not-allowed border border-white bg-transparent text-white"
                : "bg-yellow-500 hover:bg-yellow-500/85"
            }`}
          >
            <ArrowLeft className="w-full" />
          </button>

          <div className="relative w-full overflow-hidden">
            <div
              id="carousel"
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(totalCards / visibleCards) * 100}%`,
              }}
            >
              {[...Array(totalCards)].map((_, idx) => (
                <div
                  key={idx}
                  className="px-2"
                  style={{ width: `${100 / totalCards}%` }}
                >
                  <TestimonialCard />
                </div>
              ))}
            </div>
          </div>

          <Button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= totalCards - visibleCards}
            className={`z-[2] ml-4 flex size-8 shrink-0 items-center justify-center rounded-full p-1.5 text-black ${
              currentIndex >= totalCards - visibleCards
                ? "cursor-not-allowed border border-white bg-transparent text-white"
                : "bg-yellow-500 hover:bg-yellow-500/85"
            }`}
          >
            <ArrowRight />
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonial;
