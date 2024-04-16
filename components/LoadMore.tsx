"use client";
import { LoadMoreProps } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { updateSearchParams } from "@/utils";

const LoadMore = ({ pageNumber, isNext, setLimit }: LoadMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };

  return (
    <div className="w-full flex justify-center items-center py-9 gap-5mt-10 mt-10">
      {!isNext && (
        <Button
          type="button"
          className="bg-organge-1 text-white"
          onClick={handleNavigation}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default LoadMore;
