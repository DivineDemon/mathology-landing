import { ArrowRight, CircleCheck } from "lucide-react";

import child from "@/assets/img/Guaranteed Success/child.svg";
import Child from "@/assets/img/Guaranteed Success/img.svg";
import one from "@/assets/img/Guaranteed Success/one_small.svg";
import study from "@/assets/img/Guaranteed Success/study.svg";
import Title from "@/assets/img/Guaranteed Success/title.svg";

import { Button } from "./ui/button";

const WhyMathology = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-col gap-3">
          <img
            src={Child}
            alt="image"
            className="w-full rounded-[8%] lg:w-96"
          />
          <div className="flex -space-x-8">
            <img
              src={Child}
              alt="image"
              className="size-14 rounded-full border-4 border-white md:size-16"
            />
            <img
              src={Child}
              alt="image"
              className="size-14 rounded-full border-4 border-white md:size-16"
            />
            <h1 className="p-2 pl-10 text-left">
              Online Courses Form
              <br />
              Experts.
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:text-center lg:items-start lg:justify-start lg:text-left">
          <img
            src={Title}
            alt="Why Mathology"
            className="w-36 md:w-44 lg:w-56"
          />
          <div className="flex flex-col gap-3">
            <h1 className="pt-3 text-4xl font-extrabold">
              The Problem We Solve
            </h1>
            <h1 className="text-lg">
              Mathematics is a critical skill in today's world, yet millions of
              students
              <br />
              struggle with it. Studies indicate that:
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 pt-5">
            <img src={one} alt="board" className="size-14 md:size-20" />
            <img src={study} alt="study" className="w-44 md:w-60" />
            <img src={child} alt="childrens" className="size-14 md:size-20" />
          </div>

          <div className="flex flex-col gap-3 pt-5">
            <h1 className="flex items-center gap-2 text-lg font-bold">
              <CircleCheck className="size-5 shrink-0 rounded-full fill-brand text-white" />
              Over 50% of students report difficulty with math concepts by Grade
              8.
            </h1>
            <h1 className="flex items-center gap-2 text-lg font-bold">
              <CircleCheck className="size-5 shrink-0 rounded-full fill-brand text-white" />
              Math anxiety affects students' confidence and long-term academic
              success.
            </h1>
            <h1 className="flex items-center gap-2 text-lg font-bold">
              <CircleCheck className="size-5 shrink-0 rounded-full fill-brand text-white" />
              Traditional teaching methods often fail to address individual
              learning needs.
            </h1>
            <h1 className="flex items-center gap-2 text-lg font-bold">
              <CircleCheck className="size-5 shrink-0 rounded-full fill-brand text-white" />
              Many educators lack tools to effectively assess and support
              diverse learners.
            </h1>
          </div>
          <Button className="mt-5 rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-brand p-6">
            GET STARTED <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyMathology;
