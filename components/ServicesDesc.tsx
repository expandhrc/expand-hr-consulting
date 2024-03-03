"use client";

import { Service, servicesData } from "@/constants";
import React, { FC, useState } from "react";
import AccordionItem from "./ServiceItem";
import ServiceItem from "./ServiceItem";

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
      <div className="grid md:grid-cols-3 gap-4 padding-container xl:max-w-[90%]">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            open={index === open}
            title={service.heading}
            paragraphs={service.paragraphs}
            toggle={() => toggle(index)}
          />
        ))}
        ;
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
    <div className="max-container">
      <p
        className="h2-large w-full text-center py-4 font-extrabold mt-6
        bg-skyBlue/20 rounded-t-xl"
      >
        <span
          className="font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text"
        >
          HR Solutions
        </span>
      </p>
      <div
        className="rounded-b-xl relative flex items-center flex-col gap-2 flex-1 py-10
       bg-gradient-to-r from-primary via-lightBlue to-primary"
      >
        {renderServiceItems({ services: servicesData })}
        <p className="bold-18 text-center font-extrabold mt-6 text-primary ">
          <span className="font-extrabold text-white">
            Contact Us to Learn More About Our Services.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServicesDesc;
