"use client";
import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { CustomFiltersProps } from "@/types";
import Image from "next/image";
import { updateSearchParams } from "@/utils";

const CustomFilters = ({
  title,
  options,
  Fragment,
  setFilter,
}: CustomFiltersProps) => {
  const [selected, setSelected] = useState(options[0]);

  // const router = useRouter();

  // const handdleUpdateParams = (e: { title: string; value: string }) => {
  //   const newPathname = updateSearchParams(title, e.value.toLowerCase());

  //   router.push(newPathname);
  // };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="relative w-full min-w-[150px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/images/chevron-up-down.svg"
              width={20}
              height={20}
              alt="btn"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active
                        ? "bg-organge-1 text-white cursor-pointer"
                        : "text-gray-900 cursor-pointer"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-medium"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilters;
