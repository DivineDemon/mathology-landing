import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import Amal from "@/assets/img/Partners/Amal.svg";
import EDUMY from "@/assets/img/Partners/EDU.my.svg";
import Edu from "@/assets/img/Partners/edu.svg";
import Edufell from "@/assets/img/Partners/edufeel.svg";
import Global from "@/assets/img/Partners/global.svg";
import GLS from "@/assets/img/Partners/gls.svg";
import Ilmx from "@/assets/img/Partners/ilmx.svg";
import Insight from "@/assets/img/Partners/insights.svg";

const partnersRow1 = [GLS, Edu, Global, Edufell];
const partnersRow2 = [Insight, EDUMY, Amal, Ilmx];

const Partner = () => {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  useEffect(() => {
    controlsRow1.start({
      x: ["-95%", "100%"],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
    controlsRow2.start({
      x: ["100%", "-95%"],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
  }, [controlsRow1, controlsRow2]);

  const handleRow1HoverStart = async () => {
    await controlsRow1.stop();
  };

  const handleRow1HoverEnd = async () => {
    await controlsRow1.start({
      x: ["-95%", "100%"],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
  };

  const handleRow2HoverStart = async () => {
    await controlsRow2.stop();
  };

  const handleRow2HoverEnd = async () => {
    await controlsRow2.start({
      x: ["100%", "-95%"],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="mx-auto flex w-full items-center justify-center text-3xl text-gray-400">
        Our Partners
      </div>
      <div className="flex w-full flex-col gap-5">
        <motion.div
          className="flex w-full gap-5 md:gap-7"
          animate={controlsRow1}
        >
          {partnersRow1.map((logo, index) => (
            <motion.span
              key={index}
              className="bg-gray-100 p-5 md:p-7 lg:p-10"
              onHoverStart={handleRow1HoverStart}
              onHoverEnd={handleRow1HoverEnd}
            >
              <img src={logo} alt="" className="md:h-16 md:w-auto" />
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex w-full gap-5 md:gap-7"
          animate={controlsRow2}
        >
          {partnersRow2.map((logo, index) => (
            <motion.span
              key={index}
              className="bg-gray-100 p-5 md:p-7 lg:p-10"
              onHoverStart={handleRow2HoverStart}
              onHoverEnd={handleRow2HoverEnd}
            >
              <img src={logo} alt="" className="w-auto md:h-16" />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
