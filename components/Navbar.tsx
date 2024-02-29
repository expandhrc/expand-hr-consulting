"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween bg-white max-container padding-container relative z-30 py-5 gap-6">
      <Link href="/">
        
        <div className="w-full h-full mix-blend-color-dodge" style={{
    backgroundImage: "url('/logo-for-webcropped.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "color-dodge"
}}>
</div>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all
               hover:text-indigo-800 hover:scale-105 text-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
