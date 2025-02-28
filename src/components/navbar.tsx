import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Phone,
  SquareChartGantt,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "../assets/img/logo.svg";
import MaxWidthWrapper from "./max-width-wrapper";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="fixed z-50 w-full bg-yellow-400 text-black">
        <MaxWidthWrapper className="flex h-8 items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Phone className="size-4" /> +1 (973) 495 7630
          </div>
          <div className="flex items-center justify-center gap-2">
            <Twitter className="size-4" />
            <Instagram className="size-4" />
            <Facebook className="size-4" />
            <Youtube className="size-4" />
          </div>
        </MaxWidthWrapper>
      </div>

      <div
        className={`fixed top-8 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-white-500/30 shadow-md backdrop-blur-lg" : "bg-white"
        }`}
      >
        <MaxWidthWrapper className="flex h-16 items-center justify-between">
          <Link to="/" className="z-30 flex font-semibold">
            <img src={Image} alt="Logo" className="w-32 rounded-sm" />
          </Link>

          <div className="hidden h-full items-center gap-4 lg:flex lg:gap-8">
            {[
              { id: "hero", label: "Home" },
              { id: "features", label: "Features" },
              { id: "mathology-work", label: "How It Works" },
              { id: "testimonials", label: "Testimonials" },
              { id: "faq", label: "FAQ's" },
            ].map((item) => (
              <span
                key={item.id}
                className={`lg:text-md cursor-pointer rounded-md p-2 font-medium backdrop-blur-lg transition-colors hover:bg-blue-500/20 ${
                  activeSection === item.id
                    ? "relative font-bold text-brand after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-brand"
                    : "text-gray-600"
                }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="https://student.mathology.io"
              style={{ borderTopRightRadius: "16px" }}
              className="lg:text-md hidden rounded-b-full rounded-l-full bg-[#2431DD] p-3 text-sm capitalize text-white lg:flex"
            >
              get started
            </Link>
          </motion.div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <SquareChartGantt className="size-6 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-5">
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {[
                    { id: "hero", label: "Home" },
                    { id: "features", label: "Features" },
                    { id: "mathology-work", label: "How It Works" },
                    { id: "testimonials", label: "Testimonials" },
                    { id: "faq", label: "FAQ's" },
                  ].map((item) => (
                    <span
                      key={item.id}
                      className={`cursor-pointer transition-colors ${
                        activeSection === item.id
                          ? "font-bold text-brand underline"
                          : "hover:text-blue-600"
                      }`}
                      onClick={() => handleScrollToSection(item.id)}
                    >
                      {item.label}
                    </span>
                  ))}
                  <Link
                    to="https://student.mathology.io"
                    className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-4 capitalize text-white"
                  >
                    get started
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
