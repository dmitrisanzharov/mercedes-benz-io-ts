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

	const transitionSpeedForCarousel = 1001; //! not need

	const singleItemWidth = windowWidth; //! not needed, cause single item width IS widnowWidth

	const [translateAmount, setTranslateAmount] = useState(windowWidth);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [mouseMoved, setMouseMoved] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const [count, setCount] = useState(0);
	const [stopAnime, setStopAnime] = useState(false);
	const [btnDisable, setBtnDisable] = useState(false);
	const [clickDirection, setClickDirection] = useState("");
	// experiemantal states

	// old states and value

	const [activeSlideIdx, setActiveSlideIdx] = useState(0);
	const [animate, setAnimate] = useState(false);
	const [translateXValue, setTranslateXValue] = useState(0);
	const itemsContainer: any = useRef();
	// moving slider by HAND

	// FUNCTIONS

	function handleMouseDown(e: any) {
		setIsDown(true);
		setStartX(e.clientX);
		setCurrentTranslate(translateAmount);
		setMouseMoved(0);
		setStopAnime(false);
	}

	function handleMouseUp(e: any) {
		setIsDown(false);
		setCurrentTranslate(translateAmount);
		// handleTranstionAfterMouseMove();
	}

	function handleMouseLeave(e: any) {
		setIsDown(false);
	}

	function handleMouseMove(e: any) {
		if (isDown === false) {
			return;
		}

		const mouseMovedVar = e.clientX - startX;
		setMouseMoved(mouseMovedVar);
	}

	function handleTranstionAfterMouseMove() {
		// console.log("is down", isDown);

		// tests
		const movedRight = mouseMoved > 0;

		const movedLeft = mouseMoved < 0;

		const movedRightAndBiggerThanHalf = mouseMoved >= singleItemWidth / 2;

		const movedLeftAndBiggerThanHalf = mouseMoved < singleItemWidth / -2;

		if (movedRight) {
			setClickDirection("left");
		}

		if (movedLeft) {
			setClickDirection("right");
		}

		if (movedRight && movedRightAndBiggerThanHalf) {
			// console.log("a");
			setCount(count - 1);
			return;
		}

		if (movedRight && !movedRightAndBiggerThanHalf) {
			// console.log("b");
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		if (movedLeft && movedLeftAndBiggerThanHalf) {
			// console.log("c");
			setCount(count + 1);
			return;
		}

		if (movedLeft && !movedLeftAndBiggerThanHalf) {
			// console.log("d");
			setTranslateAmount(count * singleItemWidth);
			return;
		}

		setTranslateAmount(count * singleItemWidth);
	}

	function handleTransitionEnd() {
		setStopAnime(true);
		setBtnDisable(false);

		if (count === 0) {
			setCount(5);

			return;
		}

		if (count === 6) {
			setCount(1);

			return;
		}
	}

	// USE EFFECTS

	useEffect(() => {
		setTranslateAmount(currentTranslate - mouseMoved);
	}, [mouseMoved]);

	useEffect(() => {
		// console.log("count effect", count);
		setTranslateAmount(count * singleItemWidth);
	}, [count]);

	useEffect(() => {
		handleTranstionAfterMouseMove();
	}, [isDown]);

	return (
		<>
			{/* this is items holder */}
			<div
				className={classNames("MercMainContainer_CarouselContainer", {
					"MercMainContainer_CarouselContainer--NoPointerEvents": btnDisable,
				})}
				onMouseDown={(e) => handleMouseDown(e)}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				onMouseMove={(e) => handleMouseMove(e)}
			>
				{/* BUTTONS */}
				<button
					className="MercMainContainer_CarouselContainer_LeftButton"
					onClick={(e) => {
						setCount(count - 1);
						setStopAnime(false);
						setBtnDisable(true);
						setClickDirection("left");
					}}
					disabled={btnDisable}
				>
					<img src={leftArrow} alt="left arrow" width="100%" />
				</button>
				<button
					className="MercMainContainer_CarouselContainer_RightButton"
					onClick={(e) => {
						setCount(count + 1);
						setStopAnime(false);
						setBtnDisable(true);
						setClickDirection("right");
					}}
					disabled={btnDisable}
				>
					<img src={rightArrow} alt="right arrow" width="100%" />
				</button>

				{/* Little Slide Tracker Controller */}
				<div className="MercMainContainer_CarouselContainer_SlideTrackerContainer">
					{arrayController.map((el, i) => {
						return (
							<div
								key={el}
								className={classNames(
									"MercMainContainer_CarouselContainer_SlideTrackerContainer_SingleCircle",
									{
										"MercMainContainer_CarouselContainer_SlideTrackerContainer_SingleCircle--Active":
											i === count ||
											(i === 0 && count === 5) ||
											(i === 0 && count === 0) ||
											(i === 1 && count === 6),
									}
								)}
							></div>
						);
					})}
				</div>
				{/* SLIDER STUFF-  this is STING */}
				<div
					className={classNames("MercMainContainer_CarouselContainer_Slider", {
						"MercMainContainer_CarouselContainer_Slider--NoTransition":
							isDown || stopAnime,
					})}
					style={{ transform: `translateX(${translateAmount * -1}px)` }}
					onTransitionEnd={handleTransitionEnd}
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
									className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_BackgroundDiv"
									style={{ backgroundImage: `url(${backgroundImg})` }}
								></div>
								{/* Text Box */}
								<div className="MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox">
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_Heading",
											{
												"addFadeInUpAnimation animationDelay_0425":
													(i === count &&
														clickDirection === "right" &&
														i !== 1) ||
													(i === count && clickDirection === "left" && i !== 5),
											}
										)}
									>
										<em> {heading}</em>
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_AuthorAndDate",
											{
												"addFadeInUpAnimation animationDelay_050":
													(i === count &&
														clickDirection === "right" &&
														i !== 1) ||
													(i === count && clickDirection === "left" && i !== 5),
											}
										)}
									>
										{authorAndDate}
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_Text",
											{
												"addFadeInUpAnimation animationDelay_075":
													(i === count &&
														clickDirection === "right" &&
														i !== 1) ||
													(i === count && clickDirection === "left" && i !== 5),
											}
										)}
									>
										{text}
									</div>
									<div
										className={classNames(
											"MercMainContainer_CarouselContainer_Slider_SingleItemsContainer_TextBox_ReadMore",
											{
												"addFadeInUpAnimation animationDelay_090":
													(i === count &&
														clickDirection === "right" &&
														i !== 1) ||
													(i === count && clickDirection === "left" && i !== 5),
											}
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
