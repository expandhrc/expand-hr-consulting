"use client";

import { Service, servicesData } from "@/constants";
import React, { FC, useState } from "react";
import AccordionItem from "./ServiceItem";
import ServiceItem from "./ServiceItem";
import { CiSettings } from "react-icons/ci";

const ServicesDesc = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(-1);
    }
    ("");
    setOpen(index);
  };

  const renderServiceItems: FC<{ services: Service[] }> = ({ services }) => {
    return (
      <div className="grid md:grid-cols-3 gap-4 mt-6 padding-container xl:max-w-[90%]">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            open={index === open}
            title={service.heading}
            paragraphs={service.paragraphs}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    );

    //   <div
    //     key={index}
    //     className="flex flex-col py-4 gap-2 bg-white w-[75%] lg:max-w-[60%] rounded-xl"
    //   >
    //     <h3 className="h3 text-lightBlue text-center mb-2">
    //       {service.heading}
    //     </h3>
    //     {service.paragraphs.map((paragraph, pIndex) => (
    //       <p key={pIndex} className="p-regular mx-8 text-primary">
    //         {paragraph}
    //       </p>
    //     ))}
    //   </div>
  };

  return (
    <section id="solutions" className="max-container">
      <p
        className="h2-large w-full text-center py-4 font-extrabold mt-6
        bg-skyBlue/20"
      >
        <span
          className="font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text"
        >
          HR Solutions
        </span>
      </p>
      <div
        className="relative flex items-center flex-col gap-2 flex-1 py-10
       bg-gradient-to-r from-primary via-lightBlue to-primary"
      >
        <CiSettings
          className="text-7xl animate-spin-slow"
          style={{ fill: "url(#lightBlue-gradient)" }}
        />
        {renderServiceItems({ services: servicesData })}
        <p className="bold-18 text-center font-extrabold mt-6 text-primary padding-container">
          <span className="font-extrabold text-white">
            Contact Us to Learn More About Our Services.
          </span>
        </p>
      </div>
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="lightBlue-gradient"
            x1="0%"
            y1="0%"
            x2="10%"
            y2="100%"
          >
            <stop offset="10%" stopColor="#c4dff7" />
            <stop offset="40%" stopColor="#ffff" />
            <stop offset="50%" stopColor="#c4dff7" />
            <stop offset="60%" stopColor="#ffff" />
            <stop offset="90%" stopColor="#c4dff7" />
            {/* <stop offset="20%" stopColor="#1d7bd1" />
            <stop offset="50%" stopColor="#0c345c" />
            <stop offset="80%" stopColor="#1d7bd1" /> */}
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default ServicesDesc;
