import { title } from "process";
import { Fragment } from "react";
export interface SearchManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
  Fragment?: typeof Fragment;
}

export interface CarProps {
  city_mpg: number;

  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type CarState = CarProps[] & { message?: string };

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFiltersProps {
  title: string;
  Fragment?: typeof Fragment;
  options: OptionsProps[];
  setFilter: (e: OptionsProps) => void;
}

export interface LoadMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}
