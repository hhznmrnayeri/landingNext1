import React from "react";
type ButtonProps = {
  title: string;
  width: string;
  height: string;
  paddingY: string;
  paddingX: string;
};
export default function Button({
  title,
  width,
  height,
  paddingX,
  paddingY,
}: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-primary from-0% to-secondary to-100% rounded-lg flex-center font-outfitMedium ${width} ${height} ${paddingX} ${paddingY}`}
    >
      {title}
    </button>
  );
}
