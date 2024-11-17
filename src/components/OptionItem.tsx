import React from "react";
import ChevronDownIcon from "../../public/svg/ChevronDownIcon";
type OptionItemProps = {
  title: string;
  active: boolean;
};
export default function OptionItem({ title, active }: OptionItemProps) {
  return (
    <button
      className={`${
        active
          ? "bg-gradient-to-r from-primary to-secondary from-0% to-100%"
          : ""
      } flex-center gap-1.5 text-xs h-11 w-24 rounded-lg py-3 px-3.5 border border-[#E7E7E766] bg-[#1E1B33] flex-nowrap child:flex-shrink-0 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:from-0% hover:to-100%`}
    >
      {title}
      <ChevronDownIcon />
    </button>
  );
}
