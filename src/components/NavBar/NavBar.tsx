import React from "react";
import "./NavBar.css";

// images
import mercLogo from "../../images/mercLogo.jpg";

// views
import { navMenus } from "../../views/navMenus";

type Props = {};

const NavBar = (props: Props) => {
	return (
		<nav className="drr">
			<section className="dbb">
				<div className="LogoSection dyy">
					<div className="LogoBox drr">
						<div>
							<img src={mercLogo} alt="mercedes main logo" />
						</div>
						<div>Mercedes-Benz</div>
					</div>
				</div>
				<div>
					{navMenus?.map((el) => {
						return (
							<div key={el} className="NavMenuItem">
								{el}
							</div>
						);
					})}
				</div>
			</section>
		</nav>
	);
};

export default NavBar;
