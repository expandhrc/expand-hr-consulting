import { AiOutlineTeam } from "react-icons/ai";

const Team = () => {
  return (
    <section
      id="team"
      className="max-container rounded-xl padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4"
    >
      <div className="relative bg-slate-50 rounded-xl py-4 z-20 flex flex-1 flex-col items-center w-full gap-1">
        <AiOutlineTeam
          className="text-5xl rotate-6"
          style={{ fill: "url(#blue-gradient)" }}
        />
        <h2 className="h2 text-heading  text-center w-full">Team</h2>
        <p className="max-w-[50%] text-heading text-center font-bold">
          Your goals, our team – a powerful partnership for transformative
          results!
        </p>
        <p className="p-regular mt-6 text-gray-50">
          Collaboration is at the heart of what we do. Get to know the faces
          behind the expertise, and discover the dynamic synergy that defines
          our consultancy approach.
          <br />
          Meet the driving force behind{" "}
          <span className="font-extrabold">Expand HR Consulting</span>, a team
          of seasoned professionals committed to propelling your business toward
          unparalleled success. Our diverse team brings together a wealth of
          experience and expertise across various industries. With a shared
          passion for excellence, innovation, and client satisfaction, we are
          dedicated to navigating the complexities of the business landscape
          alongside you, to understand your specific needs and provide you with
          the best tailor-made solutions.
          <br /> Let us partner with you to serve your needs and lead your
          business to excellence. Contact us today and get to know our team
          members by face, knowledge-base and expertise.
        </p>
      </div>
    </section>
  );
};

export default Team;
