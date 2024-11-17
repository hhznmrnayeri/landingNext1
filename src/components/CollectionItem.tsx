import Image from "next/image";
import React from "react";
import UniqIcon from "../../public/svg/UniqIcon";
type CollectionItemProps = {
  title: string;
  img: string;
  price: number;
  count: number;
  rate: number;
};
export default function CollectionItem({
  title,
  img,
  price,
  count,
  rate,
}: CollectionItemProps) {
  return (
    <div className="col-span-4 flex rounded-2xl p-5 items-center justify-between bg-[#1E1B33] border border-[#E7E7E766]">
      <div className="flex items-start gap-3">
        <Image
          src={`/images/${img}`}
          alt="collection"
          width={52}
          height={52}
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col items-start gap-4">
          <h6 className="text-xl font-outfitMedium">{title}</h6>
          <p className="flex items-center gap-1.5 text-sm">
            <UniqIcon />
            {price}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end text-sm">
        <p className="text-[#03DB80] font-outfitMedium">{count}k ETH</p>
        <span className="">+{rate}%</span>
      </div>
    </div>
  );
}
