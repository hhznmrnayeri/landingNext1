import Image from "next/image";
import React from "react";
import HeartIcon from "../../public/svg/HeartIcon";
import UniqIcon from "../../public/svg/UniqIcon";
import Uniq2Icon from "../../public/svg/Uniq2Icon";
type SlideItemProps = {
  img: string;
  title: string;
  point: number;
  from: number;
  hasUsers: boolean;
};
export default function SlideItem({
  img,
  title,
  point,
  from,
  hasUsers,
}: SlideItemProps) {
  return (
    <div className="group col-span-3 bg-[#1E1B33] rounded-xl flex flex-col p-6 gap-6">
      <Image
        src={`/images/${img}`}
        width={264}
        height={232}
        alt="drop"
        className="rounded-xl w-full h-60"
      />
      <div className="flex flex-col">
        <div className="flex items-start justify-between font-outfitMedium">
          <h5 className="text-2xl">{title}</h5>
          {hasUsers ? (
            <button className="flex items-center gap-1 text-sm child:w-3.5 child:h-3.5">
              <HeartIcon />
              {point}
            </button>
          ) : null}
        </div>
        <div className="flex items-center justify-between mt-4">
          {hasUsers ? (
            <div className="flex items-center text-sm gap-1">
              <UniqIcon />
              <p>From {from} Flow</p>
            </div>
          ) : (
            <div className="flex items-center text-sm gap-1 text-[#03DB8066]">
              <Uniq2Icon />
              <p>From {from} ETH</p>
            </div>
          )}
          {hasUsers ? (
            <div className="flex items-center child:-ml-3">
              <Image
                src={"/images/user1.png"}
                alt="user"
                width={24}
                height={24}
                className="rounded-full w-6 h-6 border border-white"
              />
              <Image
                src={"/images/user2.png"}
                alt="user"
                width={24}
                height={24}
                className="rounded-full w-6 h-6 border border-white"
              />
              <Image
                src={"/images/user3.png"}
                alt="user"
                width={24}
                height={24}
                className="rounded-full w-6 h-6 border border-white"
              />
            </div>
          ) : (
            <button className="flex items-center gap-1 text-sm child:w-3.5 child:h-3.5">
              <HeartIcon />
              {point}
            </button>
          )}
        </div>
        {hasUsers ? null : <hr className="mt-6" />}
        <button
          className={`${
            hasUsers
              ? "uppercase w-full flex-center"
              : "w-28 h-10 px-6 flex items-center"
          }  border border-[#E7E7E766] text-sm font-outfitSemiBold rounded-lg py-3 mt-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:from-0% group-hover:to-100%`}
        >
          {hasUsers ? "Live now" : "Place bid"}
        </button>
      </div>
    </div>
  );
}
