import Image from "next/image";
import React from "react";
import ArrowRightIcon from "../../public/svg/ArrowRightIcon";
import Button from "@/components/Button";
import PlayIcon from "../../public/svg/PlayIcon";
import HexagonIcon from "../../public/svg/HexagonIcon";
export default function Header() {
  return (
    <header className="pt-14 relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-16 ">
          <div className="col-span-7 flex flex-col items-start pt-24 relative">
            <h1 className="font-outfitBold text-6xl">
              Discover, collect, and sell extraordinary{" "}
              <span className="bg-gradient-to-r from-[#85129d] to-[#b1177b] text-transparent bg-clip-text">
                NFTs
              </span>
            </h1>
            <div className="flex items-end justify-between relative">
              <div className="flex flex-col items-start">
                <p className="font-outfitLight text-2xl mt-5">
                  Our marketplace is the world’s first and largest NFT market
                  for independent creators worldwide
                </p>
                <div className="mt-10 flex items-center gap-3">
                  <Button
                    title="Explore"
                    width="w-30"
                    height="h-11"
                    paddingX="px-8"
                    paddingY="py-3"
                  />
                  <button className="font-outfitMedium px-8 py-3 h-11 w-30 rounded-lg flex-center bg-[#1E1B33] border border-[#E7E7E766]">
                    Create
                  </button>
                </div>
                <div className="mt-10 flex items-center gap-2">
                  <span className="rounded-full w-8 h-8 bg-[#7040F2] flex-center p-3">
                    <PlayIcon />
                  </span>
                  <p className="font-outfitMedium">Learn more about Nftico</p>
                </div>
              </div>
              <div className="relative  w-64">
                <div className="absolute rounded-full flex-center border border-[#7040F2] rotate-12 p-2 w-40 h-40 overflow-hidden right-0 bottom-0">
                  <Image
                    src={"/images/header2.jfif"}
                    width={160}
                    height={160}
                    alt="header"
                    className="w-full h-full rounded-full border border-[#7040F2] border-dotted"
                  />
                </div>
                <div className="absolute rounded-full flex-center border border-[#7040F2] rotate-12 p-1 w-20 h-20 overflow-hidden right-36 -bottom-10">
                  <Image
                    src={"/images/header3.jfif"}
                    width={160}
                    height={160}
                    alt="header"
                    className="w-full h-full rounded-full border border-[#7040F2] border-dotted"
                  />
                </div>
              </div>
              <span className="w-3 h-3 rotate-45 bg-gradient-to-r from-[#F68080] to-[#FF9494] from-0% to-100% absolute bottom-0 left-0 right-0 mx-auto"></span>
            </div>
            <div className="flex self-end items-center gap-1 mt-24">
              <span className="w-10 h-2 bg-gradient-to-r from-primary to-secondary from-0% to-100% rounded-5xl"></span>
              <span className="w-4 h-2 bg-[#D9D9D9] rounded-5xl"></span>
              <span className="w-4 h-2 bg-[#D9D9D9] rounded-5xl"></span>
              <span className="w-4 h-2 bg-[#D9D9D9] rounded-5xl"></span>
            </div>
            <span className="w-3 h-3 rotate-45 bg-gradient-to-r from-[#9A6BFF] to-[#BC9DFF] from-0% to-100% absolute top-0 left-40 "></span>
            <HexagonIcon style="w-12 h-14  absolute top-8 right-12" />
          </div>
          <div className="col-span-5 relative">
            <Image
              className="w-full h-full rounded-lg"
              src={"/images/header.jfif"}
              alt="header"
              width={500}
              height={1000}
            />
            <button className="w-20 h-20 rounded-full flex-center bg-[#05021D] p-5 absolute -left-10 top-0 bottom-0 my-auto">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute left-0 top-0 translate-x-1/4 translate-y-[20%] w-80 h-80 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </header>
  );
}
