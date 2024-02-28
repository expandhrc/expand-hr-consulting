import Image from "next/image";
import Button from "./Button";

const Team = () => {
  return (
    <section
      id="team"
      className="max-container bg-indigo-100/80 rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 pb-32 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">Team</h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          Meet the driving force behind{" "}
          <span className="font-extrabold">HR Expand Plus Consulting -</span>a
          team of seasoned professionals committed to propelling your business
          toward unparalleled success. Our diverse team brings together a wealth
          of experience and expertise across various industries. With a shared
          passion for excellence, innovation, and client satisfaction, we are
          dedicated to navigating the complexities of the business landscape
          alongside you. At HR Expand Plus Consulting, collaboration is at the
          heart of what we do. Get to know the faces behind the expertise, and
          discover the dynamic synergy that defines our consultancy approach.
          Our team consists of highly educated and highly trained consultants
          with diversified experienced each specialized in certain topics and
          streams to understand your business and your specific needs and
          provide you with the best tailor-made solutions. <br /> Your goals,
          our team – a powerful partnership for transformative results. <br />{" "}
          Contact us today and get to know our team members by face,
          knowledge-base and expertise and let us partner with you to serve your
          needs and lead your business to excellence.
        </p>
      </div>
    </section>
  );
};

export default Team;
