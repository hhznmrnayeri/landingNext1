import React from "react";
type HexagonIconProps = {
  style: string;
};
export default function HexagonIcon({ style }: HexagonIconProps) {
  return (
    <svg fill="none" viewBox="0 0 57 57" className={style}>
      <path
        stroke="url(#paint0_linear_1_52)"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="m35.744 55.344 19.6-19.598L48.17 8.973 21.398 1.8l-19.6 19.598L8.974 48.17z"
        opacity="0.2"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_52"
          x1="25.945"
          x2="2.592"
          y1="65.143"
          y2="2.698"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F68080"></stop>
          <stop offset="0.339" stopColor="#9A6BFF"></stop>
          <stop offset="0.974" stopColor="#1FDCE9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
