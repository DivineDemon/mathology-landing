import { motion } from "framer-motion";
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
      className="relative top-20 flex h-full w-full items-start justify-center md:top-24 xl:top-10"
    >
      <motion.img
        src={BG}
        alt="bg"
        className="z-0 aspect-[9/16] h-[800px] w-full object-cover md:aspect-auto md:h-full xl:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <MaxWidthWrapper className="absolute inset-0 flex h-full w-full flex-col items-center justify-start gap-10 py-10 md:flex-row md:gap-0 md:py-0 md:pb-10">
        <motion.div
          className="flex w-full flex-col items-start justify-center gap-5 text-white md:h-full md:w-1/2 md:gap-4 lg:gap-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={intro}
            alt="introduction"
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-md w-full text-left font-extrabold md:text-2xl lg:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            What is Mathology?
          </motion.h1>
          <motion.span
            className="text-left text-xs md:text-sm lg:w-[85%] lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Mathology is an AI-powered EdTech platform that personalizes math
            learning through adaptive learning, gamification, and real-world
            applications. It bridges learning gaps, boosts confidence, and
            aligns with global curricula for K-12 students.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="https://student.mathology.io"
                className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-brand p-2.5 text-left text-sm text-white lg:p-4"
              >
                GET STARTED
              </Link>
            </motion.div>
          </motion.div>
          <motion.img
            src={line}
            alt="line"
            className="-right-4 mx-auto hidden items-end justify-end md:flex md:w-20 lg:w-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>
        <motion.div
          className="relative flex w-full items-start justify-start md:h-full md:w-1/2 md:items-center md:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.img
            src={star}
            alt="stars"
            className="absolute right-10 top-0 md:top-5 lg:top-10 xl:top-20"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={group}
            alt="group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img
            src={star}
            alt="stars"
            className="absolute bottom-0 right-10 md:bottom-5 lg:bottom-10 xl:bottom-20"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
