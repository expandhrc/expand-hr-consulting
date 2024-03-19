import { contactMethods } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mt-6">
      <div className="padding-container max-container flex w-full flex-col">
        <div className="border bg-gray-20" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-2">
          <Link href="/">
            <Image
              src="/Logo/FullLogoCropped.jpg"
              alt="logo"
              width={130}
              height={80}
              className="rounded-xl"
            />
          </Link>
          <div className="flex flex-col gap-2 items-center justify-start">
            <p className="text-xs md:text-sm text-gray-50">
              2024 Expand HR Consulting | All rights reserved
            </p>
            <div className="flex gap-8 items-center">
              {contactMethods.map((contact, index) => (
                <Link
                  href={contact.url}
                  target="_blank"
                  key={index}
                  className="text-primary text-sm md:text-lg cursor-pointer
                hover:text-skyBlue transition-all duration-300"
                >
                  <contact.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
