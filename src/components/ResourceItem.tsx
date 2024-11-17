import Image from "next/image";
import React from "react";
import Button from "./Button";
import CommentIcon from "../../public/svg/CommentIcon";
type ResourceItemProps = {
  title: string;
  img?: string;
  userImage: string;
  userName: string;
  date: string;
  isAbsolute?: boolean;
  isSingleBtn?: boolean;
  btn?: string;
};
export default function ResourceItem({
  title,
  img,
  userImage,
  userName,
  isAbsolute,
  isSingleBtn,
  btn,
  date,
}: ResourceItemProps) {
  return (
    <div
      className={`${
        isAbsolute
          ? "absolute w-11/12 left-0 right-0 -bottom-16 mx-auto"
          : "col-span-6 row-span-1 flex items-center gap-6"
      } rounded-lg bg-[#1E1B33] p-8`}
    >
      {isAbsolute ? null : (
        <Image
          src={`/images/${img}`}
          alt="resource"
          width={158}
          height={152}
          className="w-40 h-40 rounded-lg"
        />
      )}
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <Button
            title={`${btn}`}
            width=""
            height="h-8"
            paddingX="px-6"
            paddingY="py-2"
            style="text-sm"
          />
          {isSingleBtn ? null : (
            <Button
              title="NFT"
              width="w-20"
              height="h-8"
              paddingX="px-6"
              paddingY="py-2"
              style="text-sm"
            />
          )}
          <span className="text-sm font-outfitMedium flex items-center gap-1 child:flex-grow child:flex-shrink-0">
            <CommentIcon />
            No Comment
          </span>
        </div>
        <h4 className="text-2xl font-outfitMedium">{title}</h4>
        <div className="flex items-center gap-4">
          <Image
            src={`/images/${userImage}`}
            alt="user"
            width={44}
            height={44}
            className="rounded-full w-11 h-11 border border-white"
          />
          <div className="flex flex-col items-start gap-1">
            <h6 className="font-outfitMedium">{userName}</h6>
            <span className="text-[#C0C0C0]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
