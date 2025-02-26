import { BadgeCheck, CircleX } from "lucide-react";

import title from "@/assets/img/C_A/heading.svg";
import { features } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Competitive = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src={title}
          alt="Competitive Advantage"
          className="w-36 md:w-44 lg:w-52"
        />
        <h1 className="text-2xl font-extrabold md:text-4xl">
          How Mathology Stands Out
        </h1>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex w-full min-w-max flex-col items-center justify-center">
          <div className="flex h-12 w-full items-center justify-center text-lg text-gray-400">
            <span className="w-4/12 truncate px-4 text-left">Feature</span>
            <span className="w-2/12 truncate px-4 text-center">Mathology</span>
            <span className="w-2/12 truncate px-4 text-center">
              Khan Academy
            </span>
            <span className="w-2/12 truncate px-4 text-center">Mathletics</span>
            <span className="w-2/12 truncate px-4 text-center">
              White Rose Math
            </span>
          </div>

          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                "flex h-12 w-full items-center justify-center text-black",
                {
                  "bg-gray-100": feature.id % 2 !== 0,
                }
              )}
            >
              <span className="w-4/12 truncate px-4 text-left">
                {feature.feature}
              </span>
              <div className="flex w-2/12 items-center justify-center px-4">
                {feature.mathology === "No" ? (
                  <CircleX className="size-5 shrink-0 fill-destructive text-white" />
                ) : (
                  <BadgeCheck className="size-5 shrink-0 fill-brand text-white" />
                )}
                &nbsp;{feature.mathology}
              </div>
              <div className="flex w-2/12 items-center justify-center px-4">
                {feature.khan_academy === "No" ? (
                  <CircleX className="size-5 shrink-0 fill-destructive text-white" />
                ) : (
                  <BadgeCheck className="size-5 shrink-0 fill-brand text-white" />
                )}
                &nbsp;{feature.khan_academy}
              </div>
              <div className="flex w-2/12 items-center justify-center px-4">
                {feature.mathletics === "No" ? (
                  <CircleX className="size-5 shrink-0 fill-destructive text-white" />
                ) : (
                  <BadgeCheck className="size-5 shrink-0 fill-brand text-white" />
                )}
                &nbsp;{feature.mathletics}
              </div>
              <div className="flex w-2/12 items-center justify-center px-4">
                {feature.white_rose_math === "No" ? (
                  <CircleX className="size-5 shrink-0 fill-destructive text-white" />
                ) : (
                  <BadgeCheck className="size-5 shrink-0 fill-brand text-white" />
                )}
                &nbsp;{feature.white_rose_math}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitive;
