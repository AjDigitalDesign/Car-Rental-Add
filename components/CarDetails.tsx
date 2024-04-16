import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailProps {
  car: CarProps;
  carRent: string;
}

const CarDetail = ({ car, carRent }: CarDetailProps) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative w-full h-40 bg-primary-foreground bg-cover">
        <Image
          src={generateCarImageUrl(car, "1")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1 relative w-full h-24 bg-gray-200">
          <Image
            src={generateCarImageUrl(car, "33")}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-gray-200">
          <Image
            src={generateCarImageUrl(car, "13")}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-gray-200">
          <Image
            src={generateCarImageUrl(car, "29")}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-2">
        <h2 className="font-semibold text-xl capitalize">
          {car.make} {car.model}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(car).map(([key, value]) => (
            <div
              className="flex justify-between gap-5 w-full text-right"
              key={key}
            >
              <h4 className="text-gray-400 capitalize">{key}</h4>
              <p className="text-black font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
