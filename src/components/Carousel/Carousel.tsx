import React, { useState, useEffect } from "react";
import "./Carousel.css";
import classNames from "classnames";

// view
import carouselView from "../../views/carouselView";

type Props = {};

const Carousel = (props: Props) => {
	const [count, setCount] = useState(-1);
	const [clickDirection, setClickDirection] = useState("");

	useEffect(() => {
		console.log("length", carouselView.length);
		console.log("count", count);

		if (count === -6) {
			const timeOut = setTimeout(() => {
				setCount(-1);
			}, 501);
			return () => clearTimeout(timeOut);
		}

		if (count === 0) {
			const timeOut = setTimeout(() => {
				setCount(-5);
			}, 501);
			return () => clearTimeout(timeOut);
		}
	}, [count]);

	return (
		<>
			<button
				onClick={() => {
					setCount(count + 1);
					setClickDirection("right");
				}}
			>
				leftArrow
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
					setClickDirection("left");
				}}
			>
				rightArrow
			</button>
			<hr />
			<div className="MercMainContainer_CarouselContainer drr">
				<div
					className={classNames(
						"MercMainContainer_CarouselContainer_Slider dbb",
						{
							"MercMainContainer_CarouselContainer_Slider--NoTransition":
								count === -1 || count === -5,
						}
					)}
					style={{ transform: `translateX(${count * 200}px)` }}
				>
					{carouselView?.map((el, i) => {
						const { id, backgroundImg, heading, authorAndDate, text } = el;
						return (
							<div
								className="MercMainContainer_CarouselContainer_Slider_SingleItems dyy"
								key={id}
								style={{ backgroundImage: `url(${backgroundImg})` }}
							></div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Carousel;
