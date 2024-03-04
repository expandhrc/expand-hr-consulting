import Image from "next/image";
import Button from "./Button";

const Approach = () => {
  return (
    <section id="approach" className="max-container">
      <h2
        className="h2-large bg-gradient-to-br from-primary/80 via-skyBlue
       to-primary/70 text-white  py-4 text-center w-full"
      >
        <span
          className="font-extrabold text-transparent bg-gradient-to-br
        from-paleBlue via-white to-paleBlue bg-clip-text"
        >
          Our Approach
        </span>
      </h2>
      <div
        className="bg-gradient-to-br
        from-lightBlue via-paleBlue to-lightBlue padding-container flexCenter flex-col gap-6 xl:gap-12
       py-10 mb-4 "
      >
        <div className="relative rounded-xl z-20 flex flex-1 flex-col items-center xl:max-w-[90%] bg-slate-50 py-6">
          <p className="p-regular text-primary">
            At <span className="font-extrabold">Expand HR Consulting</span>, our
            consultancy approach is a finely tuned blend of insight,
            collaboration, and innovation. We believe in forging a deep
            understanding of our clients' challenges, working hand-in-hand to
            co-create strategic solutions. Our methodology is rooted in a
            rigorous analysis of industry trends, combined with a hands-on,
            client-focused implementation. By fostering open communication and
            tailoring our approach to each unique situation, we ensure that our
            clients not only overcome obstacles but also emerge stronger and
            more resilient. Welcome to a consultancy experience where precision
            meets partnership, and where our proven methodology paves the way
            for your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
