import React from "react";

export default function Ellipse({ width, height}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="125" cy="125" r="125" fill="url(#paint0_radial_83_2)" />
      <defs>
        <radialGradient
          id="paint0_radial_83_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(125 125) rotate(90) scale(125)"
        >
          <stop stopColor="#860B0B" />
          <stop offset="0.9997" stopColor="#708B14" stopOpacity="0.109375" />
          <stop offset="0.9998" stopColor="#191F0E" stopOpacity="0.22" />
          <stop offset="0.9999" stopColor="#47570A" stopOpacity="0.131828" />
        </radialGradient>
      </defs>
    </svg>
  );
}
