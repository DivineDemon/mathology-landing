import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Image from "../assets/img/footer.svg";

const Footer = () => {
  return (
    <footer className="mx-auto flex h-full w-full flex-col items-center justify-center border-t bg-[#0B294B]">
      <div className="flex h-full w-full items-center justify-between p-6 text-white lg:p-24 lg:px-24">
        <h1 className="text-xl font-semibold lg:text-4xl">Get Started Today</h1>
        <Link
          target="_blank"
          to="https://student.mathology.io"
          className="flex items-center justify-center gap-2.5 rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-white p-3 text-primary lg:p-7 lg:px-10"
        >
          Try It Free <ArrowRight className="size-5" />
        </Link>
      </div>

      <div className="h-px w-full border border-[#223953]" />

      <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 p-6 md:flex-row md:px-10 lg:p-10 lg:px-24">
        <img src={Image} alt="logo" className="w-32" />

        <div className="flex items-center justify-center gap-5 lg:gap-10">
          <span className="text-xs text-white lg:text-lg">Cookies Policy</span>
          <span className="text-xs text-white lg:text-lg">Legal Terms</span>
          <span className="text-xs text-white lg:text-lg">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
