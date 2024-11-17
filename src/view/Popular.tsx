import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import SlideItem from "@/components/SlideItem";
import React from "react";
export default function Popular() {
  return (
    <div className="container mt-48">
      <div className="flex items-center justify-between">
        <SectionTitle title="Browse popular NFTs" isCenter={false} />
        <div className="flex items-center">
          <Button
            title="All NFT,s "
            paddingX="px-6"
            paddingY="py-3"
            width=""
            height=""
          />
          <span className="font-outfitMedium text-sm px-6 py-3">Art</span>
          <span className="font-outfitMedium text-sm px-6 py-3">Games</span>
          <span className="font-outfitMedium text-sm px-6 py-3">Sports</span>
          <span className="font-outfitMedium text-sm px-6 py-3">
            Tranding Cards
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-14">
        <SlideItem
          title="Election Season"
          img="popular1.jfif"
          point={32}
          from={0.05}
          hasUsers={false}
        />
        <SlideItem
          title="Election Season"
          img="popular2.jfif"
          point={32}
          from={0.05}
          hasUsers={false}
        />
        <SlideItem
          title="Election Season"
          img="popular3.jfif"
          point={32}
          from={0.05}
          hasUsers={false}
        />
        <SlideItem
          title="Election Season"
          img="popular4.jfif"
          point={32}
          from={0.05}
          hasUsers={false}
        />
      </div>
    </div>
  );
}
