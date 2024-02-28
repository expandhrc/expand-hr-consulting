import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-6">
      <div className="padding-container max-container flex w-full flex-col gap-6">
        <div className="border bg-gray-20" />
        <div className="flex gap-2 items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-for-webcropped.jpg"
              alt="logo"
              width={130}
              height={80}
            />
          </Link>
          <p className="regular-14 text-center text-gray-30">
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
