import Button from "@/components/Button";
import CollectionItem from "@/components/CollectionItem";
import OptionItem from "@/components/OptionItem";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
export default function Collection() {
  return (
    <div className="container mt-32">
      <div className="flex items-center justify-between">
        <SectionTitle title="Top collections" isCenter={false} />
        <div className="flex items-center gap-2 ">
          <OptionItem title="1 DAY" active={false} />
          <OptionItem title="7 DAYS" active={true} />
          <OptionItem title="30 DAYS" active={false} />
        </div>
        <OptionItem title="Ethereum" active={false} />
      </div>
      <div className="mt-14 grid grid-cols-12 gap-6">
        <CollectionItem
          title="Bored Ape Yacht Club"
          img="collection1.jfif"
          count={2.7}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Chromie Squiggle "
          img="collection2.jfif"
          count={2.9}
          rate={10.0}
          price={19320000}
        />
        <CollectionItem
          title="Worlwide Webb Land"
          img="collection3.jfif"
          count={2.7}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Bored Ape Chemistry "
          img="collection4.png"
          count={2.5}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Bored Ape Kennel Club"
          img="collection5.jfif"
          count={1.9}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Brick-and-Mortar "
          img="collection6.jfif"
          count={1.9}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="RTFKT CloneX Mintvial"
          img="collection7.jfif"
          count={1.9}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Psychedelics Anonymous"
          img="collection8.jfif"
          count={1.4}
          rate={10.0}
          price={10450000}
        />
        <CollectionItem
          title="Free Way to Back Up"
          img="collection9.jfif"
          count={1.5}
          rate={10.0}
          price={10450000}
        />
      </div>
      <Button
        title="See All Collections"
        width="w-56"
        height="h-11"
        paddingX="px10"
        paddingY="py-4"
        style="mt-14 mx-auto"
      />
    </div>
  );
}
