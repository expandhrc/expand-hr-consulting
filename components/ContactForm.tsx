"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { ImSpinner10 } from "react-icons/im";

export type FormData = {
  name: string;
  company: string;
  email: string;
  number: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);

  function onSubmit(data: FormData) {
    setIsSending(true);
    if (!Object.keys(data).every((key) => data[key as keyof FormData])) {
      setSubmitStatus("Please enter all required fields");
      setValidated(false);
      setIsSending(false);
      setSuccess(false);
      return;
    }
    sendEmail(data)
      .then((message) => {
        setSuccess(true);
        setValidated(true);
        setSubmitStatus(message);
      })
      .catch((error) => {
        alert(error);
        setSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full"
    >
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="name*"
          className="input"
          {...register("name", { required: false })}
        />
        <input
          type="text"
          placeholder="company*"
          className="input"
          {...register("company", { required: false })}
        />
      </div>
      <div className="flex gap-x-6 w-full">
        <input
          type="email"
          placeholder="email*"
          className="input"
          {...register("email", { required: false })}
        />
        <input
          type="text"
          placeholder="phone number*"
          className="input"
          {...register("number", { required: false })}
        />
      </div>
      <input
        type="text"
        placeholder="subject"
        className="input"
        {...register("subject", { required: false })}
      />
      <textarea
        placeholder="message*"
        className="textarea"
        {...register("message", { required: false })}
      ></textarea>
      <button
        className={`btn rounded-full bg-gradient-to-br from-lightBlue via-skyBlue to-lightBlue text-white
        w-full md:max-w-[170px] px-8 py-3 transition-all duration-300 flex flex-col items-center overflow-hidden
        justify-center shadow-md shadow-lightBlue/50 hover:from-skyBlue hover:via-lightBlue hover:to-skyBlue  cursor-pointer
    `}
      >
        {/* {isSending && } */}
        <span
          className={`transition-all duration-300 ${
            isSending ? " translate-y-0" : "transform -translate-y-full hidden"
          }`}
        >
          <ImSpinner10
            className={`animate-spin text-primary w-5 h-5 $
            `}
          />
        </span>
        <p className={`${isSending ? "hidden" : "visible"}`}>Send</p>
      </button>
      <p
        className={`text-center font-bold md:text-start transition-all duration-300 ${
          success
            ? "text-green-500 opacity-100"
            : !validated
            ? "text-red-400 opacity-100 -translate-y-0 "
            : "opacity-0 -translate-y-10"
        }`}
      >
        {submitStatus}
      </p>
    </form>
  );
};
export default ContactForm;
