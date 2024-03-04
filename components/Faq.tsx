"use client";
import Image from "next/image";
import Button from "./Button";
import { FAQs, faqData } from "@/constants";
import { FC, useState } from "react";
import ServiceItem from "./AccordionItem";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(-1);
    }
    setOpen(index);
  };

  const renderServiceItems: FC<{ faqs: FAQs[] }> = ({ faqs }) => {
    return (
      <div className="flex flex-col items-center gap-4 padding-container xl:max-w-[90%]">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            title={faq.question}
            answer={faq.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="max-container rounded-xl padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4"
    >
      <div className="relative bg-slate-50 rounded-xl py-4 z-20 flex flex-1 flex-col items-center w-full">
        <p
          className="h2-large w-full text-center py-4 font-extrabold mt-6
         rounded-t-xl"
        >
          <span
            className="font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text"
          >
            FAQs
          </span>
        </p>
        <p className="p-regular mt-6 text-gray-50  ">
          Explore answers to common queries about our consultancy services in
          our FAQs. From service details to engagement processes, we've compiled
          essential information to streamline your experience. Navigate
          confidently and find the information you need as you embark on a
          transformative journey with{" "}
          <span className="font-extrabold">Expand HR Consulting. </span>
        </p>
      </div>

      <div className="relative flex flex-col gap-8 flex-1 items-center mt-6">
        {renderServiceItems({ faqs: faqData })}
      </div>
    </section>
  );
};

export default Faq;
