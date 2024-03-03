import Image from "next/image";
import Button from "./Button";
import { Service, servicesData } from "@/constants";
import { FC } from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container rounded-xl padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4"
    >
      <div className="relative bg-slate-50 rounded-xl py-4 z-20 flex flex-1 flex-col items-center w-full">
        <h2 className="h2 text-heading  text-center w-full">Services</h2>
        <p className="p-regular mt-6 text-gray-50 ">
          At <span className="font-extrabold">HR Expand Plus Consulting </span>,
          our suite of consultancy services is meticulously designed to propel
          businesses toward success in the modern landscape. With a
          forward-thinking approach, we offer strategic guidance across various
          domains. Whether navigating complex challenges, optimizing operations,
          or fostering innovation, our seasoned team of experts leverages a
          wealth of experience to tailor solutions that align with your unique
          goals. We prioritize collaboration, ensuring that our clients actively
          participate in the consulting process, fostering a partnership that
          goes beyond traditional advisory services. From in-depth market
          analysis to hands-on implementation,{" "}
          <span className="font-extrabold">HR Expand Plus Consulting </span> is
          committed to delivering results that drive lasting impact. Welcome to
          a consultancy experience where your aspirations meet our expertise.
        </p>
      </div>
    </section>
  );
};

export default Services;
