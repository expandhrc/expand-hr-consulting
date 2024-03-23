import { LuMessageSquareDashed } from "react-icons/lu";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section id="contact" className="max-container">
      <p
        className="h2-large w-full text-center py-4 font-extrabold mt-6
        bg-skyBlue/20"
      >
        <span
          className="font-extrabold text-transparent bg-gradient-to-br
        from-primary via-skyBlue to-primary bg-clip-text"
        >
          Contact Us
        </span>
      </p>
      <div
        className="padding-container flexCenter flex-col gap-6 xl:gap-12 py-10 mb-4
      bg-gradient-to-r from-primary via-skyBlue to-primary"
      >
        <p className="max-w-[65%] md:max-w-[50%] text-paleBlue text-center font-bold">
          Connect with us to embark on a collaborative journey towards
          transformative solutions!
        </p>
        <div className="relative rounded-xl py-6 z-20 flex flex-1 flex-col items-center xl:max-w-[90%]">
          <LuMessageSquareDashed className="text-7xl text-paleBlue rotate-6" />
          <p className="p-regular mt-6 text-paleBlue">
            We value open communication and look forward to understanding your
            unique challenges. Whether you have specific inquiries, require
            tailored consultancy services, or simply want to explore the
            potential for collaboration, our team is ready to assist.
            <br /> Reach out through the provided contact information, and let's
            start a conversation that leads to innovative strategies and lasting
            success.
          </p>
        </div>
        <div
          className="relative flex flex-col gap-6 flex-1 items-start w-full xl:max-w-[85%]
      "
        >
          <p className="h2 text-start font-extrabold mt-6 text-paleBlue">
            <span className="font-extrabold">How can we help you?</span>
          </p>
          <p className="p-regular text-paleBlue ">
            Thank you for your interest in Expand HR consulting. Fill out the
            form below, and we'll get back to you promptly.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
