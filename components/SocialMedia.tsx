import Image from "next/image";
import Button from "./Button";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { contactMethods } from "@/constants";
import { IoShareSocialOutline } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <section
      id="social"
      className="max-container rounded-xl padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4"
    >
      <div className="relative bg-slate-50 rounded-xl py-4 z-20 flex flex-1 flex-col items-center w-full">
        <IoShareSocialOutline
          className="text-5xl -rotate-12"
          style={{ stroke: "url(#blue-gradient)" }}
        />
        <h2 className="h2 text-heading  text-center w-full">
          Social Media Integration
        </h2>
        <p className="p-regular mt-6 text-gray-50">
          Stay connected with{" "}
          <span className="font-extrabold">Expand HR Consulting </span> on
          social media for real-time updates, industry insights, and engaging
          content. Follow us on all Social Media Platforms to join the
          conversation and be part of our dynamic community.
        </p>
        <div className="flex items-center gap-12 mt-12">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className="text-primary text-xl md:text-2xl cursor-pointer
              hover:text-skyBlue transition-all duration-300"
            >
              <contact.icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
