"use client";
import React, { useState } from "react";
import SearchManufacturers from "./SearchManufacturers";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchBar = ({ setManuFacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchmodel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchmodel === "") {
      return alert("Please enter a manufacturer and model");
    }

    setModel(searchmodel);
    setManuFacturer(searchManufacturer);
  };

  // const UpdateSearchParams = (
  //   manusearchManufacturerfacturer: string,
  //   model: string
  // ) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }

  //   if (searchManufacturer) {
  //     searchParams.set("manufacturer", searchManufacturer);
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }

  //   const newPathname = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   router.push(newPathname);
  // };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturers
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <Button
          type="submit"
          className="-ml-3 z-10 bg-transparent sm:hidden hover:bg-transparent"
        >
          <Image
            src="/images/magnifying-glass.svg"
            width={40}
            height={40}
            className="object-contain"
            alt="search"
          />
        </Button>
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/images/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[-20px] h-[-20px]  ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="Model"
          value={searchmodel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Model"
          className="w-full h-[48px] pl-12 p-4 bg-gray-200 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <Button
          type="submit"
          className="-ml-3 z-10 bg-transparent sm:hidden hover:bg-transparent"
        >
          <Image
            src="/images/magnifying-glass.svg"
            width={40}
            height={40}
            className="object-contain"
            alt="search"
          />
        </Button>
      </div>
      <Button
        type="submit"
        className="-ml-3 z-10 bg-transparent max-sm:hidden hover:bg-transparent"
      >
        <Image
          src="/images/magnifying-glass.svg"
          width={40}
          height={40}
          className="object-contain"
          alt="search"
        />
      </Button>
    </form>
  );
};

export default SearchBar;
