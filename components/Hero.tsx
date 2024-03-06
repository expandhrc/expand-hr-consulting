"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate="show"
      exit="hidden"
      id="home"
      className="max-container bg-white rounded-xl padding-container
     flex flex-col items-center gap-6 xl:gap-20 py-10 md:flex-row"
    >
      <div className="relative z-20 flex flex-1 flex-col items-center gap-6 xl:w-1/2">
        <h1 className="h1 text-primary text-center">
          <span
            className="font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text"
          >
            Expand HR Consulting
          </span>
        </h1>
        <p className="p-regular text-primary text-md">
          Welcome to{" "}
          <span className="font-extrabold">Expand HR Consulting —</span> where
          strategic brilliance meets transformative solutions. Discover tailored
          consultancy services crafted to propel your business forward. Join us
          on a journey of innovation, collaboration, and unparalleled success.
        </p>
      </div>

      {/* <Image
        src={"/hero.jpg"}
        width={450}
        height={450}
        alt=""
        className="rounded-xl hidden md:flex"
      /> */}
    </motion.section>
  );
};

export default Hero;
