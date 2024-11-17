import React from "react";
type SectionTitleProps = {
  title: string;
  isCenter: boolean;
};
export default function SectionTitle({ title, isCenter }: SectionTitleProps) {
  return (
    <h2 className={`section__title ${isCenter ? "text-center mx-auto" : ""}`}>
      {title}
    </h2>
  );
}
