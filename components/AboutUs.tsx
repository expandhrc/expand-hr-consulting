"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { BiGroup } from "react-icons/bi";

const AboutUs = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-container bg-gradient-to-br
      from-lightBlue via-paleBlue to-lightBlue padding-container 
    flexCenter flex-col gap-6 xl:gap-20 py-10"
    >
      <div className="relative z-20 flex  flex-col items-center rounded-xl bg-slate-50 py-6 gap-1">
        <BiGroup
          className="text-5xl rotate-6"
          style={{ fill: "url(#blue-gradient)" }}
        />
        <h2 className="h2 text-heading">About Us</h2>
        <p className="max-w-[50%] text-heading text-center font-bold">
          Welcome to a consultancy experience where innovation meets impact, and
          where your success is our shared journey!
        </p>
        <p className="p-regular mt-6 text-gray-90">
          In establishing our consultancy firm, we envisioned a dynamic space
          where expertise and innovation converge to catalyze positive change.
          Founded in 2009, our journey is fueled by a passion for empowering
          businesses to thrive in an ever-evolving landscape.
          <br /> At <span className="font-extrabold">Expand HR Consulting</span>
          , we believe in the transformative power of strategic consulting. Our
          mission is to partner with clients, understand their unique
          challenges, and collaboratively craft tailored solutions that drive
          sustainable growth. <br /> With a team of seasoned professionals
          dedicated to excellence, we bring a fresh perspective to the
          consultancy arena. Rooted in values of integrity, collaboration, and
          client success,{" "}
          <span className="font-extrabold">Expand HR Consulting</span> is
          committed to navigating the complexities of today's business
          environment, providing insightful solutions, and unlocking the full
          potential of every partnership.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
