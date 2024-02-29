import Image from "next/image";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section
      className="max-container bg-white rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">About Us</h2>
        <p className="regular-16 lg:regular-20 mt-6 text-gray-50 ">
          In establishing our consultancy firm, we envisioned a dynamic space
          where expertise and innovation converge to catalyze positive change.
          Founded in 2009, our journey is fueled by a passion for empowering
          businesses to thrive in an ever-evolving landscape. At{" "}
          <span className="font-extrabold">HR Expand Plus Consulting </span>, we
          believe in the transformative power of strategic consulting. Our
          mission is to partner with clients, understand their unique
          challenges, and collaboratively craft tailored solutions that drive
          sustainable growth. With a team of seasoned professionals dedicated to
          excellence, we bring a fresh perspective to the consultancy arena.
          Rooted in values of integrity, collaboration, and client success,{" "}
          <span className="font-extrabold">HR Expand Plus Consulting</span> is
          committed to navigating the complexities of today's business
          environment, providing insightful solutions, and unlocking the full
          potential of every partnership. Welcome to a consultancy experience
          where innovation meets impact, and where your success is our shared
          journey. Services
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
