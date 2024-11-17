import SlideItem from "@/components/SlideItem";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
export default function Drops() {
  return (
    <div className="container pt-32 relative">
      <SectionTitle title="Selected notable drops" isCenter={true} />
      <div className="grid grid-cols-12 gap-6 mt-14">
        <SlideItem
          title="Science Jobs"
          img="drop1.png"
          point={59}
          from={17.26}
          hasUsers={true}
        />
        <SlideItem
          title="Science Jobs"
          img="drop2.jfif"
          point={68}
          from={37.85}
          hasUsers={true}
        />
        <SlideItem
          title="Science Jobs"
          img="drop3.png"
          point={25}
          from={34.02}
          hasUsers={true}
        />
        <SlideItem
          title="Science Jobs"
          img="drop4.jfif"
          point={43}
          from={21.83}
          hasUsers={true}
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-0 -translate-x-1/4 translate-y-[40%] w-80 h-80 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </div>
  );
}
