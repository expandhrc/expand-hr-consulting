"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeIn } from "../variants";

const Cover = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="rounded-xl"
    >
      <Image
        src="/bg-cover.jpg"
        width={840}
        height={360}
        alt="cover"
        loading="lazy"
        className="w-full object-cover max-h-[360px]"
      />
    </motion.div>
  );
};

export default Cover;
