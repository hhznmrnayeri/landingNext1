import DetailItem from "@/components/DetailItem";
import React from "react";
export default function Details() {
  return (
    <div className="container flex items-center justify-between gap-16 py-24 border-b border-[#E7E7E73D]">
      <p className="text-xl font-outfitLight">
        We will take all the worry and guesswork out of your blockchain and
        cryptocurrency concerns.
      </p>
      <DetailItem point={30000} text="World Arts" isGradient={true} />
      <DetailItem point={18000} text="Digital Artists" isGradient={false} />
      <DetailItem point={22000} text="Live Auctions" isGradient={false} />
      <DetailItem point={50000} text="Unique Products" isGradient={false} />
    </div>
  );
}
