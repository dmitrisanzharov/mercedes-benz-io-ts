import React from "react";
import "./Cookies.css";
import classNames from "classnames";

type Props = {
	showCookies: boolean;
	setShowCookies: Function;
	noCookiesAnimation: boolean;
};

const Cookies = ({
	showCookies,
	setShowCookies,
	noCookiesAnimation,
}: Props) => {
	return (
		<div
			className={classNames("MercMainContainer_CookiesContainer", {
				"MercMainContainer_CookiesContainer--NotVisible": !showCookies,
				"MercMainContainer_CookiesContainer--NoCookieAnimation":
					noCookiesAnimation,
			})}
		>
			<div className="MercMainContainer_CookiesContainer_InnerContainer ">
				<div className="MercMainContainer_CookiesContainer_InnerContainer_TextBox ">
					<div>
						<b>Mercedes-Benz.io uses cookies</b>
					</div>
					<div>
						On this website, only cookies that are technically necessary for its
						operation are used.
					</div>
					<div>
						For more information, please refer to our{" "}
						<div className="MercMainContainer_CookiesContainer_InnerContainer_TextBox_Links">
							Privacy Policy
							<div className="MercMainContainer_CookiesContainer_InnerContainer_TextBox_Links_BottomBorder"></div>
						</div>{" "}
						and{" "}
						<div className="MercMainContainer_CookiesContainer_InnerContainer_TextBox_Links">
							Cookie Statement
							<div className="MercMainContainer_CookiesContainer_InnerContainer_TextBox_Links_BottomBorder"></div>
						</div>
						.
					</div>
				</div>
				<div className="MercMainContainer_CookiesContainer_InnerContainer_BtnBox ">
					<button
						className="MercMainContainer_CookiesContainer_BGBox_Btn"
						onClick={() => {
							setShowCookies(false);
							sessionStorage.setItem("mercCookiesAccepted", "true");
						}}
					>
						OK!
					</button>
				</div>
			</div>
			<div className="MercMainContainer_CookiesContainer_BGBox"></div>
		</div>
	);
};

export default Cookies;
