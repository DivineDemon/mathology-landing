import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Ai from "@/assets/img/Feature/ai_driven.svg";
import Feature_logo from "@/assets/img/Feature/feature.svg";
import Game from "@/assets/img/Feature/gamification.svg";
import Mapping from "@/assets/img/Feature/skill_mapping.svg";
import Base from "@/assets/img/Feature/standards_based.svg";
import Teacher from "@/assets/img/Feature/teacher.svg";
import VR from "@/assets/img/Feature/vr_ar_metaverse.svg";

const features = [
  { img: Ai, title: "AI-Driven", subtitle: "Personalization" },
  { img: Base, title: "Standards-Based", subtitle: "Personalization" },
  { img: Mapping, title: "Skill Mapping &", subtitle: "Tagging System" },
  { img: Game, title: "Gamification &", subtitle: "Student Engagement" },
  {
    img: VR,
    title: "Immersive Learning:",
    subtitle: "VR, AR & Metaverse Integration",
  },
  { img: Teacher, title: "Teacher &", subtitle: "Institutional Support" },
];

const Feature = ({ id }: { id?: string }) => {
  return (
    <motion.div
      id={id}
      className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={Feature_logo}
        alt="feature"
        className="w-24 md:w-44"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

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
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-3 rounded-3xl border bg-white p-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.0,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="rounded-full bg-brand p-5">
              <img src={feature.img} alt={feature.title} className="size-16" />
            </div>
            <h2 className="text-center text-2xl font-bold text-[#363539]">
              {feature.title}
              <br />
              {feature.subtitle}
            </h2>
          </motion.div>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          to="https://student.mathology.io"
          className="text-md flex items-center justify-center gap-2 rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-4 font-semibold text-white"
        >
          FIND OUT MORE <ArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Feature;
