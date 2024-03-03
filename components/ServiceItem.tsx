import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { Collapse } from "react-collapse";

interface AccordionItemProps {
  open: boolean;
  toggle: any;
  title: string;
  paragraphs: string[];
}

const ServiceItem = ({
  open,
  toggle,
  title,
  paragraphs,
}: AccordionItemProps) => {
  return (
    <div className="flex flex-col p-6 bg-slate-50 rounded-xl">
      <div
        className="flex flex-col mb-2 items-center justify-start gap-4"
        onClick={toggle}
      >
        <FaDiamond style={{ fill: "url(#blue-gradient)" }} />
        <p
          className="h3 font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text min-h-[50px] text-center"
        >
          {title}
        </p>
      </div>
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className="p-start text-primary py-1 text-center ml-2">
          {paragraph}
        </p>
      ))}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="10%" y2="100%">
            <stop offset="10%" stopColor="#0c345c" />
            <stop offset="40%" stopColor="#1d7bd1" />
            <stop offset="50%" stopColor="#63aae9" />
            <stop offset="60%" stopColor="#1d7bd1" />
            <stop offset="90%" stopColor="#0c345c" />
            {/* <stop offset="20%" stopColor="#1d7bd1" />
            <stop offset="50%" stopColor="#0c345c" />
            <stop offset="80%" stopColor="#1d7bd1" /> */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ServiceItem;
