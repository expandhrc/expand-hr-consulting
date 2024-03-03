import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { FaDiamond } from "react-icons/fa6";

interface AccordionItemProps {
  open: boolean;
  toggle: any;
  title: string;
  answer: string;
}

const AccordionItem = ({ open, toggle, title, answer }: AccordionItemProps) => {
  return (
    <div
      className="flex flex-col p-6 bg-primary rounded-xl w-[90%] md:max-w-[60%] cursor-pointer"
      onClick={toggle}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="p-regular text-paleBlue text-start">{title}</p>
        <div className="text-xl text-cyan-400 font-bold">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex items-start text-xl gap-1">
          <FaDiamond
            className="text-4xl"
            style={{ fill: "url(#blue-gradient-fill)" }}
          />
          <p className="regular-14 p-start text-paleBlue/90 py-1 text-center ml-4">
            {answer}
          </p>
        </div>
      </Collapse>
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="blue-gradient-fill"
            x1="0%"
            y1="0%"
            x2="10%"
            y2="100%"
          >
            <stop offset="10%" stopColor="#63aae9" />
            <stop offset="40%" stopColor="#1d7bd1" />
            <stop offset="50%" stopColor="#63aae9" />
            <stop offset="60%" stopColor="#1d7bd1" />
            <stop offset="90%" stopColor="#63aae9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AccordionItem;
