"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(
        (currentScroll > 0 && currentScroll < lastScrollTop) ||
          currentScroll <= 0
      );
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`flexBetween fixed lg:max-h-[10%] top-0 right-0 left-0 bg-gradient-to-b from-white via-white to-white/20 max-container 
      padding-container z-30 py-2 gap-6 transition-transform duration-300 transform ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image
          src="/Logo/FullLogoCropped.jpg"
          alt=""
          width={150}
          height={50}
          className="rounded-xl max-h-[40px]"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="bold-16 text-primary flexCenter cursor-pointer pb-1.5 transition-all
               hover:text-indigo-800 hover:scale-105 text-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
