import Image from "next/image";
import React from "react";
import CheckIcon from "../../public/svg/CheckIcon";
import HeartIcon from "../../public/svg/HeartIcon";
import ReloadIcon from "../../public/svg/ReloadIcon";
import Button from "./Button";
type TrendItemProps = {
  title: string;
  point: number;
  sale: number;
  price: number;
  img: string;
};
export default function TrendItem({
  title,
  img,
  point,
  price,
  sale,
}: TrendItemProps) {
  return (
    <div className="group trend_item relative col-span-3 flex flex-col gap-5 border border-[#E7EBEE66] bg-[#1E1B33] rounded-xl p-6 overflow-hidden">
      <div className="flex flex-col gap-32 p-4  w-64 h-60 rounded-lg absolute bottom-0 right-6 top-6 left-6 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-center gap-2 self-end">
          <button className="bg-[#1E1B33B8] rounded py-2 px-3">
            <ReloadIcon />
          </button>
          <button className="flex items-center gap-1 text-sm font-outfitMedium bg-[#1E1B33B8] rounded py-1 px-3 child:w-3.5 child:h-3.5">
            <HeartIcon />
            {point}
          </button>
        </div>
        <Button
          title="Buy Now"
          width="w-36"
          height="h-11"
          paddingX="px-10"
          paddingY="py-4"
          style="self-center"
        />
      </div>
      <Image
        src={`/images/${img}`}
        alt="trend"
        width={270}
        height={240}
        className="w-64 h-60 rounded-xl"
      />
      <div className="flex flex-col items-start">
        <p className="text-sm flex items-center gap-1">
          By Ya Chin-Ho
          <CheckIcon />
        </p>
        <h4 className="text-2xl font-outfitMedium mt-2">{title}</h4>
        <div className="rounded-lg border border-[#E7E7E766] p-4 mt-4 flex items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2.5">
            <span className="text-[#C0C0C0] text-xs">From</span>
            {price > 0 ? (
              <span className="text-sm">{price} ETH</span>
            ) : (
              <span className="text-sm">Not for sale</span>
            )}
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <span className="text-[#C0C0C0] text-xs">Highest bid</span>
            <span className="">{sale} ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
