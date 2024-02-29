import Image from "next/image";
import Button from "./Button";

const SocialMedia = () => {
  return (
    <section
      id="social"
      className="max-container bg-white rounded-xl padding-container 
    flex flex-col gap-6 xl:gap-20 py-10 mb-4"
    >
      <div className="relative flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">
          Social Media Integration
        </h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          Stay connected with HR Expand Plus Consulting on social media for
          real-time updates, industry insights, and engaging content. Follow us
          on all Social Media Platforms to join the conversation and be part of
          our dynamic community.
        </p>
        <p className="regular-18 mt-6 text-gray-50">
          E-mail: info@hrexpandplus.com
        </p>
        <p className="regular-18 mt-2 text-gray-50">Instagram: HRexpandplus</p>
        <p className="regular-18 mt-2 text-gray-50">Facebook: HRexpandplus</p>
        <p className="regular-18 mt-2 text-gray-50">Snapchat: HRexpandplus</p>
        <p className="regular-18 mt-2 text-gray-50">X: HRexpandplus</p>
        <p className="regular-18 mt-2 text-gray-50">Linkedin: HRexpandplus</p>
      </div>
    </section>
  );
};

export default SocialMedia;
