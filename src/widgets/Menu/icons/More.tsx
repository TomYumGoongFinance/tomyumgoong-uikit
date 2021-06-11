import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64,192c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S99.285,192,64,192z M64,298.667
			c-23.531,0-42.667-19.136-42.667-42.667S40.469,213.333,64,213.333c23.531,0,42.667,19.136,42.667,42.667
			S87.531,298.667,64,298.667z"
      />
      <path
        d="M256,192c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S291.285,192,256,192z M256,298.667
			c-23.531,0-42.667-19.136-42.667-42.667s19.136-42.667,42.667-42.667s42.667,19.136,42.667,42.667S279.531,298.667,256,298.667z"
      />
      <path
        d="M448,192c-35.285,0-64,28.715-64,64s28.715,64,64,64c35.285,0,64-28.715,64-64S483.285,192,448,192z M448,298.667
			c-23.531,0-42.667-19.136-42.667-42.667s19.136-42.667,42.667-42.667c23.531,0,42.667,19.136,42.667,42.667
			S471.531,298.667,448,298.667z"
      />
    </Svg>
  );
};

export default Icon;
