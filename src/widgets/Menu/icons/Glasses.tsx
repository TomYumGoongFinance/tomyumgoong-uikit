import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <circle cx="442.5" cy="205.5" r="18.5" />
      <circle cx="171.5" cy="205.5" r="18.5" />
      <circle cx="126.9" cy="249.4" r="113.9" />
      <circle cx="384.3" cy="249.4" r="113.9" />
    </Svg>
  );
};

export default Icon;
