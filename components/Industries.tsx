import Image from "next/image";
import Button from "./Button";

const Industries = () => {
  return (
    <section
      id="industries"
      className="max-container bg-white rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">
          Industries We Serve
        </h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          At <span className="font-extrabold">HR Expand Plus Consulting </span>,
          our consultancy expertise extends across a diverse spectrum of
          industries, where we thrive on the dynamic challenges that each sector
          presents. Whether you operate in technology, finance, healthcare, or
          beyond, our team is poised to navigate the intricacies of your
          industry. We specialize in delivering strategic insights and tailored
          solutions that resonate with the unique demands and opportunities
          within any business. Our commitment is to be your trusted partner in
          unlocking the full potential of your business, fostering growth, and
          ensuring resilience in an ever-evolving marketplace. Discover how{" "}
          <span className="font-extrabold">HR Expand Plus Consulting </span> can
          elevate your industry presence, driving innovation and sustainable
          success in collaboration with our seasoned consultants. Welcome to a
          consultancy that understands the intricacies of your world and turns
          challenges into opportunities.
        </p>
      </div>
    </section>
  );
};

export default Industries;
