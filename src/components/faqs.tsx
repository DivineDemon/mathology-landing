import { useState } from "react";

import Title from "@/assets/img/faqs.svg";
import { faqlist } from "@/lib/constants";

const FAQs = ({ id }: { id?: string }) => {
  const [more, setMore] = useState({
    id: 1,
    more: true,
  });

  const handleToggle = (id: number) => {
    setMore({
      id,
      more: !more.more,
    });
  };

  return (
    <div
      id={id}
      className="flex w-full flex-col items-center justify-center gap-3"
    >
      <img src={Title} alt="FQA's" className="w-16 md:w-20 lg:w-32" />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <h1 className="text-center text-sm text-gray-400 md:text-lg lg:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </h1>
      </div>
      <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className="grid w-full gap-5 md:grid-cols-2">
          {faqlist.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col gap-3 rounded-2xl bg-gray-100 p-4"
            >
              <h1 className="text-lg font-bold">{faq.title}</h1>
              <h1 className="lg:text-md text-gray-500 md:text-sm">
                {more.more && more.id === faq.id
                  ? faq.description
                  : `${faq.description.slice(0, 20)}...`}
                . &nbsp;
                <span
                  onClick={() => handleToggle(faq.id)}
                  className="font-semibold text-[#2431DD] underline"
                >
                  {more.more && more.id === faq.id ? "Read Less" : "Read More"}
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
