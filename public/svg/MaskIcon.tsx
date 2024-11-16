import React from "react";
type MaskIconProps = {
  style: string;
};
export default function MaskIcon({ style }: MaskIconProps) {
  return (
    <svg className={style} fill="none" viewBox="0 0 1250 1193">
      <g filter="url(#filter0_f_1_50)">
        <ellipse
          cx="625"
          cy="596.189"
          fill="#D71D61"
          fillOpacity="0.6"
          rx="225"
          ry="196.189"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_1_50"
          width="1250"
          height="1192.38"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1_50"
            stdDeviation="200"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}
