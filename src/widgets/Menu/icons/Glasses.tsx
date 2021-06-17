import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 499.98 239.63" {...props}>
      <path
        d="M379.93,362.87A119.82,119.82,0,1,1,499.75,243.05,120,120,0,0,1,379.93,362.87Zm0-214.63a94.82,94.82,0,1,0,94.82,94.81A94.92,94.92,0,0,0,379.93,148.24Z"
        transform="translate(0.24 -123.24)"
        fill="#231f20"
      />
      <circle cx="418.21" cy="78.85" r="23.96" fill="#231f20" />
      <path
        d="M119.58,362.87A119.82,119.82,0,1,1,239.39,243.05,120,120,0,0,1,119.58,362.87Zm0-214.63a94.82,94.82,0,1,0,94.81,94.81A94.92,94.92,0,0,0,119.58,148.24Z"
        transform="translate(0.24 -123.24)"
        fill="#231f20"
      />
      <circle cx="157.85" cy="78.85" r="23.96" fill="#231f20" />
    </Svg>
  );
};

export default Icon;
