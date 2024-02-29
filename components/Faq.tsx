import Image from "next/image";
import Button from "./Button";

const Faq = () => {
  return (
    <section
      id="faq"
      className="max-container bg-[#f0f8ff] rounded-xl padding-container flex flex-col gap-6 xl:gap-12 py-10 pb-32"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">FAQs</h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          Explore answers to common queries about our consultancy services in
          our FAQs. From service details to engagement processes, we've compiled
          essential information to streamline your experience. Navigate
          confidently and find the information you need as you embark on a
          transformative journey with{" "}
          <span className="font-extrabold">HR Expand Plus Consulting. </span>
        </p>
      </div>

      <div className="relative flex flex-col gap-8 flex-1 items-start mt-6">
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            1. Q: What services does HR Expand Plus Consulting offer?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A:{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>s
            provides a range of HR consulting services, including talent
            acquisition, organizational development, strategic HR planning, and
            customized solutions tailored to your business needs.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            2. Q: How can HR Expand Plus Consulting help with recruitment?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: We specialize in designing and implementing effective
            recruitment strategies, leveraging innovative approaches,
            technology, and industry expertise to attract and secure top-tier
            talent for your organization.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            3. Q: What industries does HR Expand Plus Consulting serve?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A:{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>{" "}
            has experience serving a diverse range of industries, including but
            not limited to technology, manufacturing, healthcare, finance, and
            professional services.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            4. Q: How does your HR consulting process work?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: Our{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>{" "}
            begins with a thorough assessment of your needs. We then develop
            tailored solutions, implement strategic initiatives, and provide
            ongoing support to ensure the success of your HR goals.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            5. Q: Can HR Expand Plus Consulting assist with employee training
            and development?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: Absolutely. We offer customized training and development
            programs to enhance the skills of your workforce, fostering
            professional growth and contributing to overall organizational
            success.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            6. Q: What sets HR Expand Plus Consulting apart from other HR
            consulting firms?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A:{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>{" "}
            stands out for its personalized approach, industry-specific
            expertise, and a commitment to delivering measurable results. We
            prioritize building long-term partnerships and understanding the
            unique needs of each client.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            7. Q: How can I contact HR Expand Plus Consulting for services?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: You can reach out to{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>{" "}
            through our [Contact Page], where you'll find our contact details, a
            contact form, and information on scheduling a consultation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            8. Q: Is HR Expand Plus Consulting experienced in handling HR
            challenges for startups?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: Yes, we have a proven track record of assisting startups with
            their HR challenges. Our flexible and scalable solutions are
            designed to support organizations at every stage of growth.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            9. Q: Can HR Expand Plus Consulting help with HR compliance and
            regulations?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A: Absolutely. We stay updated on HR regulations and compliance
            requirements to ensure your organization is well-informed and in
            adherence to all relevant laws and standards.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bold-20 text-gray-50">
            10. Q: What types of assessments does HR Expand Plus Consulting
            offer for recruitment or career management purposes?
          </p>
          <p className="regular-20 text-gray-50 ml-4">
            - A:{" "}
            <span className="font-extrabold">HR Expand Plus Consulting </span>{" "}
            provides a range of assessments, including skills assessments,
            behavioral assessments, and cultural fit assessments, tailored to
            your specific hiring or career management needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
