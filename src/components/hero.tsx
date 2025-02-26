import { Link } from "react-router-dom";

import group from "@/assets/img/Hero/group.svg";
import BG from "@/assets/img/Hero/hero.svg";
import intro from "@/assets/img/Hero/introduction.svg";
import line from "@/assets/img/Hero/line_waves.svg";
import star from "@/assets/img/Hero/stars.svg";

import MaxWidthWrapper from "./max-width-wrapper";

const Hero = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="relative flex h-full w-full items-start justify-center"
    >
      <img
        src={BG}
        alt="bg"
        className="z-0 aspect-[9/16] h-[800px] w-full object-cover md:aspect-auto md:h-full xl:h-full"
      />
      <MaxWidthWrapper className="absolute inset-0 flex h-full w-full flex-col items-center justify-start gap-10 py-10 md:flex-row md:gap-0 md:py-0 md:pb-10">
        <div className="flex w-full flex-col items-start justify-center gap-5 text-white md:h-full md:w-1/2 md:gap-4 lg:gap-10">
          <img src={intro} alt="introduction" />
          <h1 className="text-md w-full text-left font-extrabold md:text-2xl lg:text-4xl">
            What is Mathology?
          </h1>
          <span className="text-left text-xs md:text-sm lg:w-[85%] lg:text-lg">
            Mathology is an AI-powered EdTech platform that personalizes math
            learning through adaptive learning, gamification, and real-world
            applications. It bridges learning gaps, boosts confidence, and
            aligns with global curricula for K-12 students.
          </span>
          <Link
            to="https://student.mathology.io"
            className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-brand p-4 text-left text-sm text-white"
          >
            GET STARTED
          </Link>
          <img
            src={line}
            alt="line"
            className="-right-4 mx-auto hidden items-end justify-end md:flex md:w-20 lg:w-24"
          />
        </div>
        <div className="relative flex w-full items-start justify-start md:h-full md:w-1/2 md:items-center md:justify-center">
          <img
            src={star}
            alt="stars"
            className="absolute right-10 top-0 md:top-5 lg:top-10 xl:top-20"
          />
          <img src={group} alt="group" />
          <img
            src={star}
            alt="stars"
            className="absolute bottom-0 right-10 md:bottom-5 lg:bottom-10 xl:bottom-20"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
