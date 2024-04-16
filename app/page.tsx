"use client";
import CarCard from "@/components/CarCard";
import CustomFilters from "@/components/CustomFilters";
import Hero from "@/components/Hero";
import LoadMore from "@/components/LoadMore";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { CarState, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  console.log(allCars);

  //Search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10);

  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   model: searchParams.model || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  // });

  const getCars = async () => {
    try {
      const results = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        year: year || 2022,
        fuel: fuel.toLowerCase() || "",
        limit: limit || 10,
      });

      setAllCars(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  return (
    <div>
      <Hero />
      <div
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 lg:mt-32 "
        id="discover"
      >
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
          <h2 className="font-extrabold text-3xl capitalize lg:text-4xl">
            Our rental fleet
          </h2>
          <p>Explore our inventory of Cars</p>
        </div>
        {/* Search and Fitlers */}
        {/* mt-12 w-full flex-between items-center flex-wrap lg:flex lg:flex-row gap- */}
        <div className="flex flex-col justify-between w-full gap-5 lg:flex-row items-center">
          <div className="lg:w-[75%]">
            <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />
          </div>

          <div className="flex flex-col justify-between w-full gap-3 lg:flex-row lg:w-[25%] items-center">
            <CustomFilters title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilters
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section className="lg:mb-20">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            {loading && (
              <div className=" mt-16 w-full flex justify-center items-center">
                <Image
                  src="/images/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <LoadMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2 lg:mb-20">
            <h2 className="text-black font-semibold text-xl">
              Oops, No Result
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}

        <section></section>
      </div>
    </div>
  );
}
