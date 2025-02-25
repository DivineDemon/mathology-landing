import { ArrowRight } from "lucide-react";

import Ai from "@/assets/img/Feature/ai_driven.svg";
import Feature_logo from "@/assets/img/Feature/feature.svg";
import Game from "@/assets/img/Feature/gamification.svg";
import Mapping from "@/assets/img/Feature/skill_mapping.svg";
import Base from "@/assets/img/Feature/standards_based.svg";
import Teacher from "@/assets/img/Feature/teacher.svg";
import VR from "@/assets/img/Feature/vr_ar_metaverse.svg";
import { Button } from "@/components/ui/button";

const Feature = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4"
    >
      <img src={Feature_logo} alt="feature" className="w-24 md:w-44" />

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 pb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#363539]">
          Core Features of Mathology
        </h1>
        <div className="flex text-xl text-gray-500">
          <h1>
            We don't just work with concrete and steel.&nbsp;
            <span className="underline">We are Approachable</span>
          </h1>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={Ai} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={Base} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={Mapping} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={Game} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={VR} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16">
          <div className="rounded-full bg-brand p-5">
            <img src={Teacher} alt="Ai" className="size-16" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#363539]">
            AI-Driven
            <br />
            Personalization
          </h2>
        </div>
      </div>

      <Button className="text-md rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-6 font-semibold">
        FIND OUT MORE <ArrowRight />
      </Button>
    </div>
  );
};

export default Feature;
