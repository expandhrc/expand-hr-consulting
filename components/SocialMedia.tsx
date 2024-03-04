import Image from "next/image";
import Button from "./Button";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { contactMethods } from "@/constants";

const SocialMedia = () => {
  return (
    <section
      id="social"
      className="max-container rounded-xl padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4"
    >
      <div className="relative bg-slate-50 rounded-xl py-4 z-20 flex flex-1 flex-col items-center w-full">
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
        <div className="grid grid-cols-1 min-w-[250px] justify-between items-center gap-6 mt-8">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className="p-regular group gap-6 text-gray-50 flex items-center min-w-[250px] cursor-pointer
              hover:text-skyBlue transition-all duration-300"
            >
              {
                <contact.icon className="text-primary group-hover:text-skyBlue" />
              }

              {contact.username}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
