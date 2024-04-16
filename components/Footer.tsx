import Image from "next/image";
import React from "react";

import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative max-w-screen-2xl mx-auto  mt-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-5 flex flex-col md:flex-row md:justify-between w-full gap-5">
        <div className="flex flex-col gap-3 md:w-2/5">
          <Image
            src="/images/logo_v4.png"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="line-clamp-3 text-gray-500">
            Book your car rental with Pay Now on Car Rental today. If you find a
            lower qualifying Avis rate published on another site, submit this
            form and we will match the base rate and give you an additional 10%
            off your rental.
          </p>
        </div>

        <div className="md:w-3/5">
          <div
            className="flex flex-wrap md:flex-row md
          justify-between w-full gap-5"
          >
            {footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-1">
                <h3 className="font-semibold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-500 font-semibold"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        <p className="text-sm font-semibold">
          ©2024 <span className="text-organge-1">Car Rental</span> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
