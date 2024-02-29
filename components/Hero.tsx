import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container bg-white rounded-xl padding-container
     flex flex-col gap-6 xl:gap-20 py-10 mb-4 xl:flex-row"
    >
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64 text-indigo-950">
          HR Expand <br /> Plus
        </h1>
      </div>

      <div className="relative flex flex-1 items-start">
        <p className="regular-16 lg:regular-20 text-gray-50 text-md xl:max-w-[520px]">
          Welcome to{" "}
          <span className="font-extrabold">HR Expand Plus Consulting —</span>{" "}
          where strategic brilliance meets transformative solutions. Discover
          tailored consultancy services crafted to propel your business forward.
          Join us on a journey of innovation, collaboration, and unparalleled
          success.
        </p>
      </div>
    </section>
  );
};

export default Hero;
