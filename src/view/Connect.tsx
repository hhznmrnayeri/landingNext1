import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
export default function Connect() {
  return (
    <div className="container pt-32 relative">
      <div className="grid grid-cols-12 gap-14">
        <Image
          src={"/images/connect.png"}
          alt="connect"
          width={466}
          height={486}
          className="col-span-4"
        />
        <div className="flex flex-col items-start col-span-8">
          <h3 className="font-outfitMedium text-6xl">
            Create, Sell well & Collect Your Best Very Fast NFTs.
          </h3>
          <p className="font-outfitLight text-lg mt-7 mb-12 text-[#C0C0C0]">
            Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of
            lorem ipsum is to create a natural looking block of text (sentence,
            paragraph, page, etc.) that doesnt distract from the layout. A
            practice not without controversy, laying out pages with meaningless
          </p>
          <Button
            title="Connect Wallet"
            paddingX="px-5"
            paddingY="py-3"
            width=""
            height=""
          />
        </div>
      </div>
      <div className="hidden lg:block absolute left-0 top-0  translate-y-[40%] w-96 h-96 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </div>
  );
}
