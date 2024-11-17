import SectionTitle from "@/components/SectionTitle";
import TrendItem from "@/components/TrendItem";
import React from "react";
export default function Trend() {
  return (
    <div className="container mt-32 relative">
      <SectionTitle title="Trending NFTs" isCenter={true} />
      <div className="grid grid-cols-12 gap-6 mt-14">
        <TrendItem
          title="Venture Capitalist"
          img="trend1.jfif"
          point={32}
          price={0}
          sale={2.835}
        />
        <TrendItem
          title="Venture Capitalist"
          img="trend2.jfif"
          point={53}
          price={25.3}
          sale={2.835}
        />
        <TrendItem
          title="Venture Capitalist"
          img="trend3.png"
          point={65}
          price={0}
          sale={2.835}
        />
        <TrendItem
          title="Venture Capitalist"
          img="trend4.png"
          point={48}
          price={63.1}
          sale={2.835}
        />
      </div>
      <div className="w-[648px] mx-auto h-1 bg-[#E7E7E73D] relative mt-14">
        <div className="absolute h-1 left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-secondary from-0 to-100% w-60"></div>
      </div>
      <div className="hidden lg:block absolute right-0 top-0 -translate-x-1/4 -translate-y-[40%] w-80 h-80 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </div>
  );
}
