import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mt-6">
      <div className="padding-container max-container flex w-full flex-col">
        <div className="border bg-gray-20" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-1">
          <Link href="/">
            <Image
              src="/Logo/FullLogoCropped.jpg"
              alt="logo"
              width={130}
              height={80}
              className="rounded-xl"
            />
          </Link>
          <p className="text-xs md:p-regular text-gray-50">
            2024 HR Expand Plus | All rights reserved
          </p>
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
