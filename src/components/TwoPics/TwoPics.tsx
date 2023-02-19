import React from "react";
import "./TwoPics.css";

type Props = {
	heading1: string;
	heading2: string;
	city1: string;
	city2: string;
	picture1: string;
	picture2: string;
	miniLogo: string;
	miniLogoPosition: string;
};

const TwoPics = ({
	heading1,
	heading2,
	city1,
	city2,
	picture1,
	picture2,
	miniLogo,
	miniLogoPosition,
}: Props) => {
	return (
		<div className="TwoPicsContainer drr">
			<div className="TwoPicsContainer_Img1Container dbb">
				<img src={picture1} alt="welcome meeting" width="100%" />
				<div className="TwoPicsContainer_Img1Container_Heading">
					<em>#{heading1}</em>
				</div>
			</div>
		</div>
	);
};

export default TwoPics;
