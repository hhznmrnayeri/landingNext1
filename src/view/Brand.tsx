import Image from "next/image";
import React from "react";
export default function Brand() {
  return (
    <div className="container mt-32 pb-20 border-b border-[#E7E7E73D] flex items-center justify-between">
      <Image src={"/images/brand1.png"} alt="brand" width={100} height={70} />
      <Image src={"/images/brand2.png"} alt="brand" width={208} height={60} />
      <Image src={"/images/brand3.png"} alt="brand" width={200} height={78} />
      <Image src={"/images/brand4.png"} alt="brand" width={200} height={78} />
      <Image src={"/images/brand5.png"} alt="brand" width={174} height={60} />
    </div>
  );
}
