// images
import img1 from "../images/carousel/img1_MicrosoftTeams-image-34.png";
import img2 from "../images/carousel/img2_mohammad-rahmani-q1p2DrLBtko-unsplash-scaled.jpg";
import img3 from "../images/carousel/img3_theo-eilertsen-photography-ajhmqq12XvI-unsplash.jpg";
import img4 from "../images/carousel/img4_alejandro-escamilla-y83Je1OC6Wc-unsplash-scaled.jpg";
import img5 from "../images/carousel/img5_f0167851f671dab2f8c363ed5e3d20a9.jpg";

interface CarouselView {
	id: string;
	heading: string;
	authorAndDate: string;
	text: string;
	backgroundImg: string;
}

const carouselView: CarouselView[] = [
	// dummy last
	{
		id: "63f6f2c658a23ab13b0437b7",
		backgroundImg: img5,
		heading: "Productivity series: Spotlight replacement",
		authorAndDate: "miroslav galic · January 6, 2023",
		text: "Introduction Continuing with the theme of my previous article (sharing my MacOS menubar setup), I'd like to show you how I used Spotlight and why I replaced it with another tool. The app is called Raycast and it's a real productivity swiss army knife. It does everything Spotlight does plus some built-in features like Clipboard […]",
	},
	// actual
	{
		id: "63f6f2c658a23ab13b0437b1",
		backgroundImg: img1,
		heading: "Meet the MB.ioneer Season 1 Recap",
		authorAndDate: "Thanh Hoang Nguyen · February 14, 2023",
		text: "Ask our MB.ioneers what this company is about and they will tell you one thing: People.  In our Meet The MB.ioneer - Series, we introduce our people by asking them quick-fire questions about their roles, what they like, and how they would describe their jobs to their grandmas. Season 1 is finally wrapped up now […]",
	},
	{
		id: "63f6f2c658a23ab13b0437b2",
		backgroundImg: img2,
		heading:
			"API Testing with Java and Spring Boot Test - Part 2: Improving the solution",
		authorAndDate: "Luiz Martins · February 6, 2023",
		text: "In the last part of this step-by-step, we created the project, set up the test framework, and also did all the configurations needed to run our API tests. You can see the first part of the series here: Let's continue to grow our test framework, but first, we need to do some improvements to the […]",
	},
	{
		id: "63f6f2c658a23ab13b0437b3",
		backgroundImg: img3,
		heading:
			"Inspiration and topics discussed in our MB.io tech community in January",
		authorAndDate: "Ronny Schreiber · February 6, 2023",
		text: "Also in 2023, we would like to share with you the news that is being discussed in our tech communities. You will surely find some inspiring topics. Framework or not Write reactive components without frontend frameworks. Should you be using a framework or not? Here at MB.io, we're always taking a serious look at this topic. […]",
	},
	{
		id: "63f6f2c658a23ab13b0437b4",
		backgroundImg: img4,
		heading: "Improving Your Development Documentation Project",
		authorAndDate: "Javier Hernandez · January 18, 2023",
		text: "PART 1 What this article coversFirst steps on how to improve an existing documentation project. ToolsConfluence, GitHub web and desktop versions, and MarkdownPad2. Introduction Developer Documentation is a curated set of files&nbsp;describing all the active&nbsp;workflows,&nbsp;setups,&nbsp;tools,&nbsp;conventions,&nbsp;best practices, and&nbsp;How-tos&nbsp;of your software development product. Through this article, I will refer to it as “documentation” or “docs”. Documentation supports […]",
	},
	{
		id: "63f6f2c658a23ab13b0437b5",
		backgroundImg: img5,
		heading: "Productivity series: Spotlight replacement",
		authorAndDate: "miroslav galic · January 6, 2023",
		text: "Introduction Continuing with the theme of my previous article (sharing my MacOS menubar setup), I'd like to show you how I used Spotlight and why I replaced it with another tool. The app is called Raycast and it's a real productivity swiss army knife. It does everything Spotlight does plus some built-in features like Clipboard […]",
	},
	// dummy last
	{
		id: "63f6f2c658a23ab13b0437b6",
		backgroundImg: img1,
		heading: "Meet the MB.ioneer Season 1 Recap",
		authorAndDate: "Thanh Hoang Nguyen · February 14, 2023",
		text: "Ask our MB.ioneers what this company is about and they will tell you one thing: People.  In our Meet The MB.ioneer - Series, we introduce our people by asking them quick-fire questions about their roles, what they like, and how they would describe their jobs to their grandmas. Season 1 is finally wrapped up now […]",
	},
];

export default carouselView;
