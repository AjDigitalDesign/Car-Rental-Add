"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import CarDetails from "./CarDetails";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-organge-2 hover:bg-white hover:shadow-md hover:cursor-pointer  group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="font-bold text-black capitalize text-xl">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-bold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car, "30")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex flex-row group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/images/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/images/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/images/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild className="rounded-none py-0">
            <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
              <Button className="bg-organge-1 w-full py-[16px] rounded-none font-semibold">
                View More
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-screen border-none rounded-[1px] sm:rounded-none p-0">
            <CarDetails car={car} carRent={carRent} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CarCard;
