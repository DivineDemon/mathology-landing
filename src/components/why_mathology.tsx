import { motion } from "framer-motion";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

import child from "@/assets/img/Guaranteed Success/child.svg";
import Child from "@/assets/img/Guaranteed Success/img.svg";
import one from "@/assets/img/Guaranteed Success/one_small.svg";
import study from "@/assets/img/Guaranteed Success/study.svg";
import Title from "@/assets/img/Guaranteed Success/title.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WhyMathology = () => {
  return (
    <motion.div
      className="flex w-full items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
          <motion.img
            src={Child}
            alt="image"
            className="w-full rounded-[8%] lg:w-96"
          />
          <motion.div className="flex -space-x-8" variants={fadeInUp}>
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
              Online Courses Form Experts.
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center md:text-center lg:items-start lg:justify-start lg:text-left"
          variants={fadeInUp}
        >
          <motion.img
            src={Title}
            alt="Why Mathology"
            className="w-36 md:w-44 lg:w-56"
            variants={fadeInUp}
          />
          <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
            <h1 className="pt-3 text-4xl font-extrabold">
              The Problem We Solve
            </h1>
            <h1 className="text-lg">
              Mathematics is a critical skill in today's world, yet millions of
              students struggle with it.
            </h1>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 pt-5"
            variants={fadeInUp}
          >
            <img src={one} alt="board" className="size-14 md:size-20" />
            <img src={study} alt="study" className="w-44 md:w-60" />
            <img src={child} alt="childrens" className="size-14 md:size-20" />
          </motion.div>

          <motion.div className="flex flex-col gap-3 pt-5" variants={fadeInUp}>
            {[
              "Over 50% of students report difficulty with math concepts by Grade 8.",
              "Math anxiety affects students' confidence and long-term academic success.",
              "Traditional teaching methods often fail to address individual learning needs.",
              "Many educators lack tools to effectively assess and support diverse learners.",
            ].map((text, index) => (
              <motion.h1
                key={index}
                className="flex items-center gap-2 text-lg font-bold"
                variants={fadeInUp}
              >
                <CircleCheck className="size-5 shrink-0 rounded-full fill-brand text-white" />
                {text}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              to="https://student.mathology.io"
              className="mt-5 flex items-center justify-center gap-2 rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-brand p-4 text-sm text-white"
            >
              GET STARTED <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyMathology;
