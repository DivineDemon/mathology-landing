import { useState } from "react";

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
import { Button } from "./ui/button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="w-full bg-yellow-400 text-black">
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

      <div className="w-full bg-white">
        <MaxWidthWrapper className="flex h-16 items-center justify-between">
          <Link to="/" className="z-40 flex font-semibold">
            <img src={Image} alt="Logo" className="size-32" />
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
                className={`lg:text-md cursor-pointer font-medium transition-colors ${
                  activeSection === item.id
                    ? "relative font-bold text-brand after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-brand"
                    : "text-gray-600"
                }`}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>

          <Button
            style={{
              borderTopRightRadius: "16px",
            }}
            className="lg:text-md hidden rounded-b-full rounded-l-full bg-[#2431DD] text-sm capitalize lg:flex"
          >
            get started
          </Button>

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
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.label}
                    </span>
                  ))}
                  <Button className="rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-lg bg-[#2431DD] p-6 capitalize">
                    get started
                  </Button>
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
