import React, { useState, useEffect } from "react";
import "./App.css";
import classNames from "classnames";

// components
import NavBar from "./components/NavBar/NavBar";
import LoremComponent from "./components/LoremComponent";
import TwoPics from "./components/TwoPics/TwoPics";
import OurLocations from "./components/OurLocations/OurLocations";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";

// views
import { navMenus } from "./views/navMenus";

// icons
import closeSign from "./images/closeSign.svg";
import closeSignWhite from "./images/closeSignWhite.svg";
import ioLogoBlueSmall from "./images/ioLogoBlueSmall.svg";
import oLeftSmall from "./images/o-left-MQ1.svg";
import oRightSmall from "./images/o-right-MQ1.svg";
import cElementLeft from "./images/cElementLeft.png";
import cElementRight from "./images/cElementRight.png";

// images
import welcomeImg from "./images/welcomeImg.jpg";
import planingImg from "./images/planingImg.jpg";
import office1Img from "./images/office1Img.jpg";
import outDoorImg1 from "./images/outDoorImg1.jpg";

// videos
import mercShootingDottedLines from "./videos/mercShootingDottedLines.mp4";
import wavingNeonVideo from "./videos/neonWaves.mp4";

function App() {
	const [scrollControlY, setScrollControlY] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [openMediumNavBar, setOpenMediumNavBar] = useState(false);
	const [indexOfActive, setIndexOfActive] = useState(7);
	const [showMission, setShowMission] = useState(false);
	const [clientInnerHeight, setClientInnerHeight] = useState(0);
	const [showCookies, setShowCookies] = useState(true);
	const [noCookiesAnimation, setNoCookiesAnimation] = useState(false);

	function handleScroll() {
		const scrollPosition = window.scrollY;
		setScrollControlY(scrollPosition);
	}

	function handleResize() {
		// console.log("handleResize");
		const width = window.innerWidth;
		setWindowWidth(width);
	}

	function handleShowMissionText(scrollSize: number) {
		if (showMission === true) {
			return;
		}
		if (scrollSize >= 600) {
			setShowMission(true);
		}
	}

	useEffect(() => {
		// console.log("running");
		// console.log("scroll amount", scrollControlY);
		//
		window.addEventListener("scroll", handleScroll, { once: true });
		window.addEventListener("resize", handleResize, {
			once: true,
		});
		handleShowMissionText(scrollControlY);
	});

	useEffect(() => {
		setIndexOfActive(0);
		setClientInnerHeight(window.innerHeight);

		if (sessionStorage.getItem("mercCookiesAccepted") === "true") {
			setShowCookies(false);
			setNoCookiesAnimation(true);
		}
	}, []);

	return (
		<div className="body1">
			<div className="MercMainContainer ">
				{/* ****************************************************************** */}
				{/* *****   NAVBAR SECTION     ****** */}
				{/* ***************************************************************** */}
				<div className="MercMainContainer_NavHolder">
					<div
						className={classNames(
							"MercMainContainer_NavHolder_Slider",
							{
								MercMainContainer_NavHolder_Slider_Top100px:
									// condition for Large NavBar
									scrollControlY >= 200 && windowWidth >= 1280,
							},
							{
								MercMainContainer_NavHolder_Slider_Top100px:
									// condition for Medium NavBar
									scrollControlY >= 97 && windowWidth <= 1279,
							}
						)}
					>
						<NavBar
							navMenus={navMenus}
							openMediumNavBar={openMediumNavBar}
							setOpenMediumNavBar={setOpenMediumNavBar}
							indexOfActive={indexOfActive}
							setIndexOfActive={setIndexOfActive}
						/>
					</div>
				</div>
				{/* Medium NavBar Modal */}
				<div
					className={classNames(
						"MercMainContainer_MediumNavBarModalContainer",
						{
							"MercMainContainer_MediumNavBarModalContainer--Opacity1":
								openMediumNavBar,
						}
					)}
				>
					<div className="MercMainContainer_MediumNavBarModalContainer_BackgroundBlurDiv"></div>
					<div className="MercMainContainer_MediumNavBarModalContainer_ModalBox ">
						<div className="MercMainContainer_MediumNavBarModalContainer_ModalBox_CloseSignContainer ">
							<button className="MercMainContainer_MediumNavBarModalContainer_ModalBox_CloseSignContainer_CloseSign">
								<img
									src={windowWidth > 767 ? closeSign : closeSignWhite}
									alt="close modal"
									width="100%"
									onClick={() => setOpenMediumNavBar(false)}
								/>
							</button>
						</div>
						<div className="MercMainContainer_MediumNavBarModalContainer_ModalBox_ItemsContainer ">
							{navMenus?.map((el, idx) => {
								return (
									<button
										key={el}
										className="MercMainContainer_MediumNavBarModalContainer_ModalBox_ItemsContainer_SingleItemBox "
										onClick={() => setIndexOfActive(idx)}
									>
										<div
											className={classNames(
												"MercMainContainer_MediumNavBarModalContainer_ModalBox_ItemsContainer_SingleItemBox_SingleItem",
												{
													"MercMainContainer_MediumNavBarModalContainer_ModalBox_ItemsContainer_SingleItemBox_SingleItem--Active":
														idx === indexOfActive,
												}
											)}
										>
											{el}
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</div>
				{/* ****************************************************************** */}
				{/* *****   NEON WAVES SECTION     ****** */}
				{/* ***************************************************************** */}
				<div className="MercMainContainer_NeonWavesContainer ">
					<video
						autoPlay={true}
						muted={true}
						loop={true}
						src={wavingNeonVideo}
						width="100%"
						className="MercMainContainer_NeonWavesContainer_Video"
					></video>
					<div className="MercMainContainer_NeonWavesContainer_TextBox ">
						<div className="MercMainContainer_NeonWavesContainer_TextBox_Logo ">
							<img src={ioLogoBlueSmall} alt="ioLogoBlueSmall" width="100%" />
						</div>
						<div className="MercMainContainer_NeonWavesContainer_TextBox_Title ">
							<span>
								<em>DRIVING </em>
							</span>
							<span>
								<em>MERCEDES-BENZ </em>
							</span>
							<span>
								<em>DIGITAL FUTURE</em>
							</span>
						</div>
						<div className="MercMainContainer_NeonWavesContainer_TextBox_ButtonBox ">
							<button>Join our tribe</button>
						</div>
					</div>
				</div>
				{/* ****************************************************************** */}
				{/* *****   OUR MISSION SECTION     ****** */}
				{/* ***************************************************************** */}
				<div className="MercMainContainer_OurMissionContainer ">
					{/* Shooting starts */}
					<div className="MercMainContainer_OurMissionContainer_VideoBox ">
						<video
							autoPlay={true}
							muted={true}
							loop={true}
							src={mercShootingDottedLines}
							width="100%"
						></video>
					</div>
					{/* Text */}
					<div className="MercMainContainer_OurMissionContainer_TextBox ">
						<div className="MercMainContainer_OurMissionContainer_TextBox_InnerBox ">
							<div
								className={classNames(
									"MercMainContainer_OurMissionContainer_TextBox_InnerBox_Heading Global_Opacity0",
									{
										addFadeInUpAnimation: showMission,
										Global_Opacity1: showMission,
									}
								)}
							>
								<em>OUR MISSION</em>
							</div>
							<div
								className={classNames(
									"MercMainContainer_OurMissionContainer_TextBox_InnerBox_Text Global_Opacity0",
									{
										addFadeInUpAnimation: showMission,
										Global_Opacity1: showMission,
										animationDelay_075: showMission,
									}
								)}
							>
								TO IGNITE AND BUILD THE DIGITAL SOLUTIONS OF MERCEDES-BENZ by
								FORMING A TRIBE OF DIGITAL ENTHUSIASTS THAT DRIVE MERCEDES-BENZ
								DIGITAL FUTURE
							</div>
							<div
								className={classNames(
									"MercMainContainer_OurMissionContainer_TextBox_InnerBox_AboutUs Global_Opacity0",
									{
										addFadeInUpAnimation: showMission,
										Global_Opacity1: showMission,
										animationDelay_1: showMission,
									}
								)}
							>
								About us
								<div className="MercMainContainer_OurMissionContainer_TextBox_InnerBox_AboutUs_BorderBelow"></div>
							</div>
						</div>
					</div>
				</div>
				{/* ****************************************************************** */}
				{/* *****   MEET OUR TRIBE SECTION     ****** */}
				{/* ***************************************************************** */}
				<div className="MercMainContainer_MeetOurTribeContainer ">
					<div className="MercMainContainer_MeetOurTribeContainer_HeadingContainer ">
						<div className="MercMainContainer_MeetOurTribeContainer_HeadingContainer_Heading ">
							<em>MEET OUR TRIBE</em>
						</div>
					</div>
					<div className="MercMainContainer_MeetOurTribeContainer_TwoPicsComponentContainer">
						<TwoPics
							heading1="WELCOME"
							heading2="JUSTDOIT"
							city1="BERLIN"
							city2="LISBON"
							picture1={welcomeImg}
							picture2={planingImg}
							miniLogo={cElementLeft}
							miniLogoSmall={oLeftSmall}
							miniLogoPosition="left"
							scrollControlY={scrollControlY}
							clientInnerHeight={clientInnerHeight}
						/>
						<div className="MercMainContainer_white25PxSeparator"></div>
						<TwoPics
							heading1="PROBLEMSOLVING"
							heading2="VOLUNTEERING"
							city1="STUTTGART"
							city2="STUTTGART"
							picture1={office1Img}
							picture2={outDoorImg1}
							miniLogo={cElementRight}
							miniLogoSmall={oRightSmall}
							miniLogoPosition="right"
							scrollControlY={scrollControlY}
							clientInnerHeight={clientInnerHeight}
						/>
					</div>
					{/* end of meet our tribe container */}
				</div>

				<OurLocations />

				<Carousel windowWidth={windowWidth} />

				<Footer />

				{/* end of the COMPONENT, main div */}
			</div>
			<Cookies
				showCookies={showCookies}
				setShowCookies={setShowCookies}
				noCookiesAnimation={noCookiesAnimation}
			/>
		</div>
	);
}

export default App;
