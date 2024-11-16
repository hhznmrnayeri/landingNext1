import React from "react";
type DetailItemProps = {
  point: number;
  text: string;
  isGradient: boolean;
};
export default function DetailItem({
  point,
  text,
  isGradient,
}: DetailItemProps) {
  return (
    <div className="flex-center flex-col gap-3 flex-shrink-0">
      <span
        className={`${
          isGradient
            ? "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
            : "text-[#7040F2]"
        } font-outfitSemiBold text-4xl`}
      >
        {point}+
      </span>
      <p className="font-outfitMedium text-xl flex-shrink-0">{text}</p>
    </div>
  );
}
