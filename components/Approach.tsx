import Image from "next/image";
import Button from "./Button";

const Approach = () => {
  return (
    <section
      id="approach"
      className="max-container bg-[#f0f8ff] rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 pb-32 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">Our Approach</h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          At <span className="font-extrabold">HR Expand Plus Consulting </span>,
          our consultancy approach is a finely tuned blend of insight,
          collaboration, and innovation. We believe in forging a deep
          understanding of our clients' challenges, working hand-in-hand to
          co-create strategic solutions. Our methodology is rooted in a rigorous
          analysis of industry trends, combined with a hands-on, client-focused
          implementation. By fostering open communication and tailoring our
          approach to each unique situation, we ensure that our clients not only
          overcome obstacles but also emerge stronger and more resilient.
          Welcome to a consultancy experience where precision meets partnership,
          and where our proven methodology paves the way for your success.
        </p>
      </div>
    </section>
  );
};

export default Approach;
