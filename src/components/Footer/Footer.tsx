import React, { useEffect, useState } from "react";
import "./Footer.css";
import classNames from "classnames";

// icons
import ioLogoBlueSmall from "../../images/ioLogoBlueSmall.svg";

// views;
import { navMenus } from "../../views/navMenus";
import socialMediaIconsView from "../../views/socialMediaIcons";

type Props = {};

const Footer = (props: Props) => {
	//
	const [selectedItem, setSelectedItem] = useState("");
	const [elementHoveredOver, setElementHoveredOver] = useState("");

	// functions
	function handleMouseOver(el: string) {
		setElementHoveredOver(el);
	}

	function handleOnLeave() {
		setElementHoveredOver("");
	}

	return (
		<div className="FooterContainer ">
			<div className="FooterContainer_LogoAndTextContainer ">
				<div className="FooterContainer_LogoAndTextContainer_Logo ">
					<img src={ioLogoBlueSmall} alt="mercedes dot io" />
				</div>
				<div className="FooterContainer_LogoAndTextContainer_NavItems ">
					{navMenus.map((el, i) => {
						return (
							<button
								key={el + el}
								className={classNames(
									"FooterContainer_LogoAndTextContainer_NavItems_SingleItem",
									{
										"FooterContainer_LogoAndTextContainer_NavItems_SingleItem--Active":
											el === selectedItem,
									}
								)}
								onClick={() => setSelectedItem(el)}
							>
								<em>{el}</em>
							</button>
						);
					})}
				</div>
			</div>
			<div className="FooterContainer_SocialIconsContainer ">
				{/* All rights Reserved */}
				<div className="FooterContainer_SocialIconsContainer_Text ">
					<div className="FooterContainer_SocialIconsContainer_Text_RightsReserved ">
						© 2023 Mercedes-Benz.io. All rights reserved.
					</div>
					<div className="FooterContainer_SocialIconsContainer_Text_DataNotice">
						<div>|</div>
						<div className="FooterContainer_SocialIconsContainer_Text_DataNotice_Hoverable">
							Imprint
						</div>
						<div>|</div>
						<div className="FooterContainer_SocialIconsContainer_Text_DataNotice_Hoverable">
							Data Protection Notice
						</div>
					</div>
				</div>
				{/* SOCIAL ITEMS */}
				<div className="FooterContainer_SocialIconsContainer_SocialItems ">
					{socialMediaIconsView.map((el, i) => {
						const { id, icon, iconHover, altText } = el;
						return (
							<div
								key={id}
								title={altText}
								className="FooterContainer_SocialIconsContainer_SocialItems_SingleIcon "
								onMouseOver={() => handleMouseOver(altText)}
								onMouseLeave={handleOnLeave}
							>
								<img
									src={elementHoveredOver === altText ? iconHover : icon}
									alt={altText}
									width="100%"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Footer;
