import Amal from "@/assets/img/Partners/Amal.svg";
import EDUMY from "@/assets/img/Partners/EDU.my.svg";
import Edu from "@/assets/img/Partners/edu.svg";
import Edufell from "@/assets/img/Partners/edufeel.svg";
import Global from "@/assets/img/Partners/global.svg";
import GLS from "@/assets/img/Partners/gls.svg";
import Ilmx from "@/assets/img/Partners/ilmx.svg";
import Insight from "@/assets/img/Partners/insights.svg";

const Partner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 px-5">
      <div className="mx-auto flex w-full items-center justify-center text-3xl text-gray-400">
        Our Partners
      </div>
      <div className="flex w-full flex-col gap-5">
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={GLS} alt="" className="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Edu} alt="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Global} alt="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Edufell} alt="" />
          </span>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Insight} alt="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={EDUMY} alt="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Amal} alt="" />
          </span>
          <span className="bg-gray-100 p-5 md:p-7 lg:p-10">
            <img src={Ilmx} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Partner;
