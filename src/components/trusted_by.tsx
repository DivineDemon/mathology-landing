import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TrustedBy = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full flex-col items-center justify-center gap-8 px-5"
    >
      <div className="mx-auto flex w-full items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-600 lg:text-5xl">
          Trusted By
        </h1>
      </div>

      <div className="flex items-center justify-center gap-8 md:gap-20 lg:gap-40">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <h2 className="text-xl font-semibold text-gray-600 md:text-3xl">
            {startCount ? <CountUp start={0} end={5000} duration={2} /> : "0"}+
          </h2>
          <h2 className="text-lg text-gray-400 lg:text-xl">Students</h2>
        </div>
        <div className="w-full border border-gray-300 py-6"></div>
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <h2 className="text-xl font-semibold text-gray-600 md:text-3xl">
            {startCount ? <CountUp start={0} end={289} duration={2} /> : "0"}+
          </h2>
          <h2 className="text-lg text-gray-400 lg:text-xl">Teachers</h2>
        </div>
        <div className="w-full border border-gray-300 py-6"></div>
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <h2 className="text-xl font-semibold text-gray-600 md:text-3xl">
            {startCount ? <CountUp start={0} end={40} duration={2} /> : "0"}+
          </h2>
          <h2 className="text-lg text-gray-400 lg:text-xl">Schools</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBy;
