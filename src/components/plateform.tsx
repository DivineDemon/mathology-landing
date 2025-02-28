import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import bg from "@/assets/img/Platform/bg.svg";
import childs from "@/assets/img/Platform/childs.svg";
import school from "@/assets/img/Platform/school.svg";
import teacher_std from "@/assets/img/Platform/teacher_std.svg";

import MaxWidthWrapper from "./max-width-wrapper";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

const Platform = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="full relative w-full">
      <img
        src={bg}
        alt="bg"
        className="max-w-screen z-0 aspect-[9/16] h-[600px] w-full object-cover md:h-[1100px] lg:aspect-auto lg:h-[1700px] xl:h-[1800px] 2xl:h-[2000px]"
      />
      <MaxWidthWrapper className="absolute inset-0 z-[1] flex w-full flex-col items-center justify-center gap-5 px-6 md:gap-20">
        <h1 className="w-full text-left text-2xl font-extrabold text-black md:text-4xl lg:text-5xl">
          Platform for Everyone
        </h1>

        <AnimatePresence>
          <motion.div
            className="flex w-full items-center justify-center gap-5"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div
              variants={fadeInFromLeft}
              className="flex flex-col items-start justify-start gap-5 text-black lg:gap-10"
            >
              <h1 className="text-[18px] font-bold leading-[18px] text-black md:text-3xl lg:text-5xl">
                For Students
              </h1>
              <h1 className="w-full text-xs text-black md:text-sm lg:text-2xl">
                Mathology creates a smart learning ecosystem that not only
                solves problems but fosters critical thinking, tracks growth,
                and nurtures long-term academic success.
              </h1>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to="https://student.mathology.io"
                  className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-4 text-xs text-white md:text-sm lg:text-lg"
                >
                  GET STARTED
                </Link>
              </motion.div>
            </motion.div>
            <motion.img
              src={childs}
              alt=""
              className="w-[35%] lg:w-1/2"
              variants={fadeInFromRight}
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-5"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.img
              src={teacher_std}
              alt=""
              className="w-[35%] lg:w-1/2"
              variants={fadeInFromLeft}
            />
            <motion.div
              variants={fadeInFromRight}
              className="flex flex-col items-end justify-end gap-5 text-black lg:gap-10"
            >
              <h1 className="text-[18px] font-bold leading-[18px] text-black md:text-3xl lg:text-5xl">
                For Teachers
              </h1>
              <h1 className="w-full text-right text-xs text-black md:text-sm lg:text-2xl">
                Why? Broad, inclusive, and professional. It highlights their
                expertise while aligning with AI as a collaborative tool.
              </h1>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to="https://student.mathology.io"
                  className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-4 text-xs text-white md:text-sm lg:text-lg"
                >
                  GET STARTED
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-5"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div
              variants={fadeInFromLeft}
              className="flex flex-col items-start justify-start gap-2.5 text-black lg:gap-10"
            >
              <h1 className="text-[18px] font-bold leading-[18px] text-black md:text-3xl lg:text-5xl">
                For Schools
              </h1>
              <h1 className="text-xs text-black md:text-sm lg:text-2xl">
                Schools can use Edugain as their very own Math Learning System,
                complete with your own logo, branding, and unique URL.
              </h1>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to="https://student.mathology.io"
                  className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-4 text-xs text-white md:text-sm lg:text-lg"
                >
                  GET STARTED
                </Link>
              </motion.div>
            </motion.div>
            <motion.img
              src={school}
              alt=""
              className="w-[35%] lg:w-1/2"
              variants={fadeInFromRight}
            />
          </motion.div>
        </AnimatePresence>
      </MaxWidthWrapper>
    </div>
  );
};

export default Platform;
