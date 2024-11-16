"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../public/svg/SearchIcon";
import Button from "@/components/Button";
import Link from "next/link";
export default function Nav() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <nav className="bg-[#04011C] py-5">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/images/lOGO.png"
            alt="logo"
            width={500}
            height={500}
            className="w-32 h-11"
          />
        </Link>
        <ul className="font-outfitMedium text-lg flex items-center gap-9">
          <li>Explore</li>
          <li>Stats</li>
          <li>Drops</li>
          <li>Activity</li>
        </ul>
        <div className="flex items-center gap-5">
          <form className="w-44 h-11 flex items-center justify-between border bg-[#E7E7E766] rounded-lg text-[#FFFFFF96] overflow-hidden px-3">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full h-full bg-transparent py-3"
            />
            <button className="flex-shrink-0 w-5 h-5 bg-transparent">
              <SearchIcon />
            </button>
          </form>
          <Button
            title="Get in Touch"
            width="w-32"
            height="h-11"
            paddingX="px-5"
            paddingY="py-3"
          />
        </div>
      </div>
    </nav>
  );
}
