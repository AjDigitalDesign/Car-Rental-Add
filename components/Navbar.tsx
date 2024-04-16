import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full z-10 absolute top-0">
      <nav className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 flex flex-row justify-between items-center py-4">
        <div>
          <Image
            src="/images/logo_v4.png"
            width={100}
            height={100}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div>
          <Button className="shadow-md bg-organge-1 font-semibold rounded-none uppercase">
            <Link href="/cars">Sign In</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
