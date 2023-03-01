import facebookIcon from "../images/socialMediaIcons/facebookIcon.svg";
import facebookIconHover from "../images/socialMediaIcons/facebookIconHover.svg";
//
import linkedInIcon from "../images/socialMediaIcons/linkedInIcon.svg";
import linkedInIconHover from "../images/socialMediaIcons/linkedInIconHover.svg";
//
import xingLogo from "../images/socialMediaIcons/xingLogo.svg";
import xingLogoHover from "../images/socialMediaIcons/xingLogoHover.svg";
//
import gitHub from "../images/socialMediaIcons/githubLogo.svg";
import gitHubHover from "../images/socialMediaIcons/githubLogoHover.svg";
//
import instagramIcon from "../images/socialMediaIcons/instagramIcon.svg";
import instagramIconHover from "../images/socialMediaIcons/instagramIconHover.svg";

interface SocialMediaIcon {
	id: string;
	icon: string;
	iconHover: string;
	altText: string;
}

const socialMediaIconsView: SocialMediaIcon[] = [
	{
		id: "63ff84ac28a4fb05d70b7a10",
		icon: facebookIcon,
		iconHover: facebookIconHover,
		altText: "facebook",
	},
	{
		id: "63ffa6d128a4fb05d70b7a7d",
		icon: linkedInIcon,
		iconHover: linkedInIconHover,
		altText: "linkedin",
	},
	{
		id: "63ffa6d128a4fb05d70b7a7e",
		icon: xingLogo,
		iconHover: xingLogoHover,
		altText: "xing",
	},
	{
		id: "63ffa6d128a4fb05d70b7a80",
		icon: instagramIcon,
		iconHover: instagramIconHover,
		altText: "instagram",
	},
	{
		id: "63ffa6d128a4fb05d70b7a7f",
		icon: gitHub,
		iconHover: gitHubHover,
		altText: "github",
	},
];

export default socialMediaIconsView;
