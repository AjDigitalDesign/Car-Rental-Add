import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row  gap-5 z-0 max-w-screen-2xl mx-auto items-end lg:justify-between w-full px-4 sm:px-6  md:px-8 lg:px-12 xl:px-14">
      <div className="flex-1 pt-36  lg:pt-48 xl:w-3/12">
        <span className="text-black font-semibold capitalize tracking-tight text-lg lg:text-2xl mb-2 block">
          Plan Your next trip
        </span>
        <h1 className="font-extrabold text-xl lg:text-3xl xl:text-6xl 2xl:text-6xl tracking-tight xl:leading-[65px]">
          FIND YOUR <span className="text-organge-1">BEST</span> CAR RENTAL WITH
          Car Rental.
        </h1>
        <p className="mt-2">
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </p>

        <Button className="bg-organge-1 rounded-none mt-5">
          <Link href="/cars">Book Now</Link>
        </Button>
      </div>
      <div className="items-end xl:w-[55%]">
        <div className="w-full">
          <Image
            src="/images/hero2.webp"
            width={600}
            height={600}
            alt="hero"
            className="bg-cover object-cover bg-center w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
