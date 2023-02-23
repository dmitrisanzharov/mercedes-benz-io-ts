import React, { useState, useEffect } from "react";
import "./OurLocations.css";
import classNames from "classnames";
// views
import ourLocationsView from "../../views/ourLocationsView";

type Props = {};

const OurLocations = (props: Props) => {
	const [indexSelected, setIndexSelected] = useState(0);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, [indexSelected]);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAnimate(false);
		}, 1500);
		return () => clearTimeout(timeOut);
	}, [animate]);

	return (
		<div className="MercMainContainer_OurLocationsContainer">
			<div className="MercMainContainer_OurLocationsContainer_InnerContainer ">
				{/* HEADING */}
				<div className="MercMainContainer_OurLocationsContainer_InnerContainer_Heading ">
					<em>OUR LOCATIONS</em>
				</div>
				{/* NAVBAR */}
				<div className="MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox ">
					<div className="MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox_InnerBox ">
						{ourLocationsView?.map((el, i) => {
							const { cityName, objId, detailsAvailable } = el;
							// console.log(el);
							return (
								<div
									key={objId}
									className="MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox_InnerBox_SingleItemWrapper"
								>
									{detailsAvailable ? (
										<button
											onClick={() => setIndexSelected(i)}
											className={classNames(
												"MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox_InnerBox_SingleItem ",
												{
													"MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox_InnerBox_SingleItem--Active":
														i === indexSelected,
												}
											)}
											disabled={animate}
										>
											<em>{cityName}</em>
										</button>
									) : (
										<div className="MercMainContainer_OurLocationsContainer_InnerContainer_NavBarOuterBox_InnerBox_Separator"></div>
									)}
								</div>
							);
						})}
					</div>
				</div>
				{/* VIDEO AND TEXT SECTION */}
				<div className="MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection ">
					<div className="MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_VideoBox ">
						<img
							src={
								ourLocationsView[indexSelected]?.details?.videoFile as string
							}
							alt={ourLocationsView[indexSelected].cityName}
							height="100%"
						/>
					</div>
					<div className="MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_TextBox ">
						<div
							className={classNames(
								"MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_TextBox_LogoHolder",
								{
									"addFadeInUpAnimation animationDelayNone animationTimingFunctionEaseOut":
										animate,
								}
							)}
						>
							<img
								src={ourLocationsView[indexSelected]?.details?.logo as string}
								alt={ourLocationsView[indexSelected].cityName + "symbol"}
								width="100%"
							/>
						</div>{" "}
						<div
							className={classNames(
								"MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_TextBox_Heading",
								{
									"addFadeInUpAnimation animationDelay050 animationTimingFunctionEaseOut":
										animate,
								}
							)}
						>
							<em>{ourLocationsView[indexSelected]?.details?.heading}</em>
						</div>
						{ourLocationsView[indexSelected]?.details?.info?.map((el) => {
							return (
								<div
									key={el}
									className={classNames(
										"MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_TextBox_Body ",
										{
											"addFadeInUpAnimation animationDelay_075 animationTimingFunctionEaseOut":
												animate,
										}
									)}
								>
									{el}
								</div>
							);
						})}
						<div
							className={classNames(
								"MercMainContainer_OurLocationsContainer_InnerContainer_VideoAndTextSection_TextBox_Address ",
								{
									"addFadeInUpAnimation animationDelay_1 animationTimingFunctionEaseOut":
										animate,
								}
							)}
						>
							{ourLocationsView[indexSelected]?.details?.address}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurLocations;
