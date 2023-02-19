import React, { useState } from "react";
import "./NavBar.css";
import classNames from "classnames";

// images & icons
import mercLogo from "../../images/mercLogo.jpg";
import hamburger4 from "../../images/hamburger4.svg";

type Props = {
	navMenus: string[];
	openMediumNavBar: boolean;
	setOpenMediumNavBar: Function;
	indexOfActive: number;
	setIndexOfActive: Function;
};

const NavBar = ({
	navMenus,
	openMediumNavBar,
	setOpenMediumNavBar,
	indexOfActive,
	setIndexOfActive,
}: Props) => {
	return (
		<nav className="NavBar ">
			<section className="NavBar_Section ">
				{/* LARGE NAVBAR */}
				<div className="NavBar_Section_LargeNavBarContainer">
					<div className="NavBar_Section_LogoSection  ">
						<div className="NavBar_Section_LogoSection_LogoBox Global_cursorPointer ">
							<div>
								<img src={mercLogo} alt="mercedes main logo" />
							</div>
							<div>Mercedes-Benz</div>
						</div>
					</div>
					<div className="NavBar_Section_HrLine"></div>
					<div className="NavBar_Section_LogoSection_NavMenuItemContainer ">
						{navMenus?.map((el, idx) => {
							return (
								<button
									key={el}
									className={classNames(
										"NavBar_Section_LogoSection_NavMenuItemContainer_NavMenuItem",
										{
											NavBar_Section_LogoSection_NavMenuItemContainer_NavMenuItem_Active:
												idx === 4,
										}
									)}
									autoFocus={idx === 0}
									onClick={() => setIndexOfActive(idx)}
									id={el}
								>
									<div
										className={classNames(
											"NavBar_Section_LogoSection_NavMenuItemContainer_NavMenuItem_TopBorder",
											{
												NavBar_Section_LogoSection_NavMenuItemContainer_NavMenuItem_TopBorder_100pc:
													idx === indexOfActive,
											}
										)}
									></div>
									{el}
								</button>
							);
						})}
					</div>
				</div>
				{/* MEDIUM NAVBAR */}
				<div className="NavBar_Section_MediumContainer ">
					<button
						className={classNames(
							"NavBar_Section_MediumContainer_HamburgerMenuButtonHolder ",
							{
								"NavBar_Section_MediumContainer_HamburgerMenuButtonHolder--GrayBackground":
									openMediumNavBar,
							}
						)}
						onClick={() => setOpenMediumNavBar(!openMediumNavBar)}
					>
						<img src={hamburger4} alt="hamburger menu" />
					</button>
					<div className="NavBar_Section_MediumContainer_LogoHolder ">
						<img src={mercLogo} alt="mercedes main logo" width="100%" />
					</div>
				</div>
			</section>
		</nav>
	);
};

export default NavBar;
