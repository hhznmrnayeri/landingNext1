import ResourceItem from "@/components/ResourceItem";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
export default function Resource() {
  return (
    <div className="container pt-32 relative">
      <SectionTitle title="Resouces for getting started" isCenter={true} />
      <div className="grid grid-cols-12 grid-rows-2 mt-14 gap-x-6 gap-y-8 h-[464px]">
        <div className="col-span-6 row-span-2 relative">
          <Image
            src={"/images/resource1.jfif"}
            alt="resource"
            width={500}
            height={500}
            className="w-full h-full rounded-lg"
          />
          <ResourceItem
            title="The Seven Secrets I should have received NFTs."
            img="resource2.png"
            userImage="user4.png"
            userName="Election Season"
            date="June 2, 2022"
            btn="NFT Token"
            isAbsolute={true}
            isSingleBtn={true}
          />
        </div>
        <ResourceItem
          title="I think I minted duplicate NFTs"
          img="resource2.png"
          userImage="user5.png"
          userName="Courtney Henry"
          date="May 27, 2022"
          btn="Game"
        />
        <ResourceItem
          title="The  Marketplace isn’t working"
          img="resource3.jfif"
          userImage="user6.png"
          userName="Courtney Henry"
          date="May 27, 2022"
          btn="NFT Token"
        />
      </div>
      <div className="hidden lg:block absolute left-0 top-0 -translate-x-1/4 translate-y-[40%] w-80 h-80 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </div>
  );
}
