import React, { useEffect, useState, useRef } from "react";
import "./TwoPics.css";
import classNames from "classnames";

type Props = {
	heading1: string;
	heading2: string;
	city1: string;
	city2: string;
	picture1: string;
	picture2: string;
	miniLogo: string;
	miniLogoSmall: string;
	miniLogoPosition: string;
	scrollControlY: number;
	clientInnerHeight: number;
};

const TwoPics = ({
	heading1,
	heading2,
	city1,
	city2,
	picture1,
	picture2,
	miniLogo,
	miniLogoSmall,
	miniLogoPosition,
	scrollControlY,
	clientInnerHeight,
}: Props) => {
	const [zoomPic1, setZoomPic1] = useState(false);
	const [zoomPic2, setZoomPic2] = useState(false);

	const pic1Ref = useRef<HTMLInputElement>(null);
	const pic2Ref = useRef<HTMLInputElement>(null);

	// functions

	useEffect(() => {
		const pic1InViewCheck = pic1Ref?.current?.getBoundingClientRect()?.y;
		const pic2InViewCheck = pic2Ref?.current?.getBoundingClientRect()?.y;

		if (checkIfInView(pic1InViewCheck)) {
			setZoomPic1(true);
		}

		if (checkIfInView(pic2InViewCheck)) {
			setZoomPic2(true);
		}

		function checkIfInView(pic: number | undefined) {
			if (!pic) {
				return;
			}
			return pic - clientInnerHeight * 0.55 <= 0 ? true : false;
			// const pixelsFromTop;
		}
	}, [scrollControlY, clientInnerHeight]);

	return (
		<div className="TwoPicsContainer ">
			{/* image1 */}
			<div className="TwoPicsContainer_Img1Container_Wrapper">
				{/* C-Element Right */}
				{miniLogoPosition === "right" && (
					<div className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer--Right">
						<img
							src={miniLogo}
							alt="c element left"
							width="100%"
							className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer_MiniLogo"
						/>
						<img
							src={miniLogoSmall}
							alt="c element left small"
							className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer_MiniLogoSmall TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer_MiniLogoSmall--Right "
						/>
					</div>
				)}
				<div
					className="TwoPicsContainer_Img1Container"
					ref={pic1Ref}
					// style={{ display: "none" }}
				>
					<img
						src={picture1}
						alt="welcome meeting"
						width="100%"
						className={classNames({
							TwoPicsContainer_Img1Container_ImageScaleTo1: zoomPic1,
						})}
					/>
					<div className="TwoPicsContainer_Img1Container_Heading1">
						<em>#{heading1}</em>
					</div>
					<div className="TwoPicsContainer_Img1Container_City1">
						<div className="TwoPicsContainer_Img1Container_City1_Text">
							{city1 !== "STUTTGART" ? (
								<>
									<div>
										<em>{city1.slice(0, 2)}</em>
									</div>
									<div>
										{" "}
										<em>{city1.slice(2, 4)}</em>
									</div>
									<div>
										{" "}
										<em>{city1.slice(4, 6)}</em>
									</div>
								</>
							) : (
								<>
									<div>
										<em>{city1.slice(0, 3)}</em>
									</div>
									<div>
										{" "}
										<em>{city1.slice(3, 6)}</em>
									</div>
									<div>
										{" "}
										<em>{city1.slice(6, 9)}</em>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* image2 */}
			<div
				className="TwoPicsContainer_Img2ContainerWrapper"
				// style={{ display: "none" }}
			>
				{/* C-Element Left */}
				{miniLogoPosition === "left" && (
					<div className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer">
						<img
							src={miniLogo}
							alt="c element left"
							width="100%"
							className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer_MiniLogo"
						/>
						<img
							src={miniLogoSmall}
							alt="c element left small"
							width="100%"
							className="TwoPicsContainer_Img2ContainerWrapper_cElementLeftContainer_MiniLogoSmall"
						/>
					</div>
				)}
				<div className="TwoPicsContainer_Img2Container" ref={pic2Ref}>
					<img
						src={picture2}
						alt="people in meeting"
						width="100%"
						className={classNames({
							TwoPicsContainer_Img2Container_Image2ScaleTo135: zoomPic2,
						})}
					/>
					<div className="TwoPicsContainer_Img2Container_Heading2">
						<em>#{heading2}</em>
					</div>
					<div className="TwoPicsContainer_Img2Container_City2">
						<div className="TwoPicsContainer_Img2Container_City2_Text">
							{city2 !== "STUTTGART" ? (
								<>
									<div>
										<em>{city2.slice(0, 2)}</em>
									</div>
									<div>
										{" "}
										<em>{city2.slice(2, 4)}</em>
									</div>
									<div>
										{" "}
										<em>{city2.slice(4, 6)}</em>
									</div>
								</>
							) : (
								<>
									<div>
										<em>{city2.slice(0, 3)}</em>
									</div>
									<div>
										{" "}
										<em>{city2.slice(3, 6)}</em>
									</div>
									<div>
										{" "}
										<em>{city2.slice(6, 9)}</em>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TwoPics;
