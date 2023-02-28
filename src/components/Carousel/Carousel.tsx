import React, { useState, useEffect, useMemo, useRef } from "react";
import "./Carousel.css";
import classNames from "classnames";

// icons
import leftArrow from "../../images/leftArrow.svg";
import rightArrow from "../../images/rightArrow.svg";

// view
import carouselView from "../../views/carouselView";

type Props = {
	windowWidth: number;
};

const Carousel = ({ windowWidth }: Props) => {
	const arrayController = useMemo(
		() => Array.from({ length: carouselView.length - 2 }).map((_, i) => i),
		[]
	);

	const transitionSpeedForCarousel = 1001;

	const [count, setCount] = useState(-1);
	const [clickDirection, setClickDirection] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(false);
	const [activeSlideIdx, setActiveSlideIdx] = useState(0);
	const [animate, setAnimate] = useState(false);

	// moving slider by HAND
	const itemsContainer: any = useRef();
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [mouseMoved, setMouseMoved] = useState(0);
	const [translateXValue, setTranslateXValue] = useState(0);

	// FUNCTIONS

	function handleMouseDown(e: any) {
		console.log("mouseDownTriggered");
		setIsDown(true);
		setStartX(e.pageX - itemsContainer?.current?.offsetLeft);
		setMouseMoved(0);
		setTranslateXValue(count * windowWidth);
	}

	function handleMouseMove(e: any) {
		if (!isDown) {
			return;
		}

		const currentMousePositionInsideContainer =
			e.pageX === undefined
				? e.touches[0].pageX - itemsContainer.current.offsetLeft
				: e.pageX - itemsContainer.current.offsetLeft;

		setMouseMoved(currentMousePositionInsideContainer - startX);
	}

	// USE EFFECTS

	useEffect(() => {
		itemsContainer.current.style.transform = `translateX(${
			translateXValue - mouseMoved
		})`;
	}, [mouseMoved]);

	useEffect(() => {
		// console.log("length", carouselView.length);
		// console.log("count", count);
		// console.log("windowSize", windowWidth);

		setActiveSlideIdx(count * -1);

		// count manager

		if (count === -6) {
			const timeOut = setTimeout(() => {
				setCount(-1);
				setBtnDisabled(false);
				setAnimate(false);
			}, transitionSpeedForCarousel);
			return () => clearTimeout(timeOut);
		}

		if (count === 0) {
			const timeOut = setTimeout(() => {
				setCount(-5);
				setBtnDisabled(false);
				setAnimate(false);
			}, transitionSpeedForCarousel);
			return () => clearTimeout(timeOut);
		}

		const timeOut = setTimeout(() => {
			setBtnDisabled(false);
			setAnimate(false);
		}, transitionSpeedForCarousel);
		return () => clearTimeout(timeOut);
	}, [count]);

	useEffect(() => {
		// console.log("activeSlideIdx", activeSlideIdx);
		if (activeSlideIdx === 5) {
			setActiveSlideIdx(0);
			return;
		}

		if (activeSlideIdx === 6) {
			setActiveSlideIdx(1);
		}
	}, [activeSlideIdx]);

	useEffect(() => {
		console.log("isDown state", isDown);
		console.log("startX: ", startX);
		console.log("walk", mouseMoved);
		console.log("translate", translateXValue);
	}, [isDown, startX, mouseMoved, translateXValue]);

	return (
		<>
			<hr />
			<div className="MercMainContainer_CarouselContainer bdd">
				{/* BUTTONS */}
				<button
					onClick={() => {
						setCount(count + 1);
						setClickDirection("right");
						setBtnDisabled(true);
						setAnimate(true);
					}}
					disabled={btnDisabled}
					className="MercMainContainer_CarouselContainer_LeftButton bdd"
				>
					<img src={leftArrow} alt="left arrow" width="100%" />
				</button>
				<button
					onClick={() => {
						setCount(count - 1);
						setClickDirection("left");
						setBtnDisabled(true);
						setAnimate(true);
					}}
					disabled={btnDisabled}
					className="MercMainContainer_CarouselContainer_RightButton bdd"
				>
					<img src={rightArrow} alt="right arrow" width="100%" />
				</button>
				{/* Little Slide Tracker Controller */}
				<div className="MercMainContainer_CarouselContainer_SlideTrackerContainer bdd">
					{arrayController.map((el, i) => {
						return (
							<div
								key={el}
								className={classNames(
									"MercMainContainer_CarouselContainer_SlideTrackerContainer_SingleCircle",
									{
										"MercMainContainer_CarouselContainer_SlideTrackerContainer_SingleCircle--Active":
											i === activeSlideIdx,
									}
								)}
							></div>
						);
					})}
				</div>
				{/* SLIDER STUFF and ITEMS */}
				<div
					className={classNames(
						"MercMainContainer_CarouselContainer_Slider bdd",
						{
							"MercMainContainer_CarouselContainer_Slider--NoTransition":
								(count === -1 && clickDirection === "left") ||
								(count === -5 && clickDirection === "right"),
							"MercMainContainer_CarouselContainer_Slider--Active": isDown,
						}
					)}
					style={{ transform: `translateX(${count * windowWidth}px)` }}
					// MOUSE EVENTS FOR HAND MOVING
					ref={itemsContainer}
					onMouseDown={(e) => handleMouseDown(e)}
					onMouseUp={() => setIsDown(false)}
					onMouseLeave={() => setIsDown(false)}
					onMouseMove={(e) => handleMouseMove(e)}
				>
					{carouselView?.map((el, i) => {
						const { id, backgroundImg, heading, authorAndDate, text } = el;
						return (
							<div
								key={id}
								className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer"
							>
								{/* background */}
								<div
									className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_BackgroundDiv bdd"
									style={{ backgroundImage: `url(${backgroundImg})` }}
								></div>
								{/* Text Box */}
								<div className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox bdd">
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_Heading bdd",
											{ "addFadeInUpAnimation animationDelay_0425": animate }
										)}
									>
										<em> {heading}</em>
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_AuthorAndDate bdd",
											{ "addFadeInUpAnimation animationDelay_050": animate }
										)}
									>
										{authorAndDate}
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_Text bdd",
											{ "addFadeInUpAnimation animationDelay_075": animate }
										)}
									>
										{text}
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_ReadMore bdd",
											{ "addFadeInUpAnimation animationDelay_090": animate }
										)}
									>
										Read more
										<div className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_ReadMore_BorderBottom"></div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Carousel;
