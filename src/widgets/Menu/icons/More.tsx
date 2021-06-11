import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480
				C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
			<circle cx="256" cy="256" r="32"/>
			<circle cx="368" cy="256" r="32"/>
			<circle cx="144" cy="256" r="32"/>
    </Svg>
  );
};

export default Icon;
