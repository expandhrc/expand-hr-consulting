import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="align-middle">
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer fill-lightBlue"
        />
      </SheetTrigger>
      <SheetContent
        className={`flex flex-col gap-6 items-center bg-slate-50 md:hidden`}
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
        <ul className="h-full flex-col w-full">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="h3 text-primary flexCenter cursor-pointer mb-6 transition-all
               hover:text-indigo-800 hover:scale-105 text-center"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
