import Button from "@/components/Button";
import React from "react";
import FaceBookIcon from "../../public/svg/FaceBookIcon";
import TwitterIcon from "../../public/svg/TwitterIcon";
import InstagramIcon from "../../public/svg/InstagramIcon";
import LinkedinIcon from "../../public/svg/LinkedinIcon";
export default function Footer() {
  return (
    <footer className="relative">
      <div className="container mt-24 mb-24 flex items-start justify-between relative">
        <div className="flex flex-col items-start gap-8">
          <h6 className="text-2xl font-outfitMedium">Marketplace</h6>
          <ul className="flex flex-col gap-3">
            <li>Explore</li>
            <li>Help Center</li>
            <li>Become a Partner</li>
            <li>About Us</li>
            <li>Platform Status</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-8">
          <h6 className="text-2xl font-outfitMedium">Community</h6>
          <ul className="flex flex-col gap-3">
            <li>Profile</li>
            <li>Favorites</li>
            <li>Watchlist</li>
            <li>My Collections</li>
            <li>Rankings</li>
            <li>Activity</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-8">
          <h6 className="text-2xl font-outfitMedium">Categories</h6>
          <ul className="flex flex-col gap-3">
            <li>Arts</li>
            <li>Collectibles</li>
            <li>Games</li>
            <li>Sports</li>
            <li>Trading Cards</li>
            <li>Photography</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-8 w-96">
          <h6 className="text-2xl font-outfitMedium">Marketplace</h6>
          <p className="">
            If you’re an NFT enthusiast or are looking to download our NFT App.
          </p>
          <form className="h-14 w-full flex items-center justify-between bg-[#E7E7E766] rounded-lg text-[#FFFFFF96] overflow-hidden pl-3">
            <input
              type="text"
              placeholder="Type Your Email"
              className="outline-none w-full h-full bg-transparent py-3"
            />
            <Button
              title="Subscribe"
              paddingX="px-7"
              paddingY="py-5"
              width=""
              height=""
            />
          </form>
          <div className="flex items-center gap-5">
            <button className="child:w-5 child:h-5">
              <FaceBookIcon />
            </button>
            <button className="child:w-5 child:h-5">
              <TwitterIcon />
            </button>
            <button className="child:w-5 child:h-5">
              <InstagramIcon />
            </button>
            <button className="child:w-5 child:h-5">
              <LinkedinIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1B33]">
        <div className="container flex it justify-between py-7">
          <div className="flex items-center gap-12">
            <span>Privacy Policy</span>
            <span>License</span>
            <span>API</span>
          </div>
          <p className="text-[#C0C0C0]">@ 2021 All rights reserved</p>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 w-80 h-80 bg-[#D71D61] opacity-25 blur-[70px] -z-10 rounded-full"></div>
    </footer>
  );
}
