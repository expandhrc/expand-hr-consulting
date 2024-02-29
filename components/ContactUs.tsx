import Image from "next/image";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="max-container bg-[#f0f8ff] rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 pb-32 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">Contact Us</h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          Connect with us at{" "}
          <span className="font-extrabold">HR Expand Plus Consulting </span> to
          embark on a collaborative journey towards transformative solutions. We
          value open communication and look forward to understanding your unique
          challenges. Whether you have specific inquiries, require tailored
          consultancy services, or simply want to explore the potential for
          collaboration, our team is ready to assist. Reach out through the
          provided contact information, and let's start a conversation that
          leads to innovative strategies and lasting success. Welcome to a
          consultancy experience where your goals become our focus. Contact us
          today, and let's navigate the path to your business excellence
          together.
        </p>
      </div>
      <div className="relative flex flex-col gap-6 flex-1 items-start">
        <p className="bold-20 font-extrabold mt-6 text-gray-50 ">
          <span className="font-extrabold">Contact Form:</span>
        </p>
        <p className="regular-20 text-gray-50 ">
          Fill out the form below, and we'll get back to you promptly.
        </p>
        <form className="flex flex-col gap-6 w-full mx-auto">
          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input type="text" placeholder="name*" className="input" />
            <input type="text" placeholder="company*" className="input" />
          </div>
          <div className="flex gap-x-6 w-full">
            <input type="email" placeholder="email*" className="input" />
            <input type="text" placeholder="phone number*" className="input" />
          </div>
          <input type="text" placeholder="subject" className="input" />
          <textarea placeholder="message*" className="textarea"></textarea>
          <button
            className="btn rounded-full bg-indigo-900 text-white
             w-full md:max-w-[170px] px-8 py-3 transition-all duration-300 flex items-center
            justify-center overflow-hidden hover:opacity-90 group "
            disabled
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
