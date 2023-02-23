// icons
import stuttgartIcon from "../images/ourLocations/stuttgartIcon.svg";
import berlinIcon from "../images/ourLocations/berlinIcon.svg";
import lisbonIcon from "../images/ourLocations/lisbonIcon.svg";
import bragaIcon from "../images/ourLocations/bragaIcon.webp";

// videos
import stuttgartOfficeVideo from "../videos/WEBSITE-Office_Stuttgart-12mb.gif";
import berlinOfficeVideo from "../videos/WEBSITE-Office_Berlim-1-2.gif";
import lisbonOfficeVideo from "../videos/WEBSITE-Office_Lisboa-1.gif";

// images
import bragaImage from "../images/ourLocations/bragaImage.jpg";

interface OurLocations {
	objId: string;
	cityName: string;
	detailsAvailable: boolean;
	details?: {
		logo: string;
		heading: string;
		info: string[];
		address: string;
		videoFile: string | boolean;
	};
}

const ourLocations: OurLocations[] = [
	{
		objId: "63f5a9736de1768fc309fe03",
		cityName: "STUTTGART",
		detailsAvailable: true,
		details: {
			logo: stuttgartIcon,
			heading: "OUR FIRST HOME AND HEADQUARTERS",
			info: [
				"Stuttgart, home to our headquarters and to the German car industry. Hills, valleys, forests, parks, and vineyards are easy to find within its boundaries.",
				"Our office is located close to the new Mercedes Benz Campus in Stuttgart Vaihingen. It offers several green spots to sit outside and the nearby canteen serves delicious Swabian and international cuisine.",
			],
			address: "Industriestraße 19-21, 70565 Stuttgart Germany",
			videoFile: stuttgartOfficeVideo,
		},
	},
	{
		objId: "63f5a9736de1768fc309fe07",
		cityName: "|",
		detailsAvailable: false,
	},
	{
		objId: "63f5a9736de1768fc309fe04",
		cityName: "BERLIN",
		detailsAvailable: true,
		details: {
			logo: berlinIcon,
			heading: "OUR CANAL FRONT HOME",
			info: [
				"We invite the ever-changing spirit of Berlin at our canal front home on Wallstraße.",
				"Steeped in history dating back to the 17th century, find us in the neoclassical Spindlershof building from 1903.",
				"We sit close to the inspiring Berlinische Galerie and Museum Island, between cultural sites like the brutalist Spitteleck building, historical Fischerinsel, and the modernist Axel Springer area.",
			],
			address: "Wallstraße 9, 10179 Berlin Germany",
			videoFile: berlinOfficeVideo,
		},
	},
	{
		objId: "63f5a9736de1768fc309fe08",
		cityName: "|",
		detailsAvailable: false,
	},
	{
		objId: "63f5a9736de1768fc309fe05",
		cityName: "LISBON",
		detailsAvailable: true,
		details: {
			logo: lisbonIcon,
			heading: "OUR HOME BY THE RIVER",
			info: [
				"The Portuguese capital, also known for its seven hills, has a long history, full of kings, discoveries, and reconstructions.",
				"Currently, a huge digital gravity is felt throughout the city, where locals, tourists, and explorers enjoy its history and traditions, cruising from the river to the ocean. A city that has kept its roots and where we can enjoy the layers of history at every corner, where tradition and the modern coexist side by side. All of this is reflected in the diversity of its people and how it attracts incredible professional talents from all around the world.",
			],
			address: "Av. Dom João II 41, 1990-096 Lisboa Portugal",
			videoFile: lisbonOfficeVideo,
		},
	},
	{
		objId: "63f5a9736de1768fc309fe09",
		cityName: "|",
		detailsAvailable: false,
	},
	{
		objId: "63f5a9736de1768fc309fe06",
		cityName: "BRAGA",
		detailsAvailable: true,
		details: {
			logo: bragaIcon,
			heading: "OUR HOME IN THE NORTH",
			info: [
				"Known as the “City of Future”, Braga is a place where you can thrive to innovate, making it the perfect place to have incredible talents in a cozy environment.",
				"The city kept its essence while evolving; you will find historic places, as well as modern designs, always with a warm welcome from everyone around the city and myths around the corner.",
				"Braga is the city where tradition meets the contemporary, and where one can find the perfect balance between work and personal growth.",
			],
			address: "Av. da Liberdade 615 1º, 4710-251 Braga Portugal",
			videoFile: bragaImage,
		},
	},
];

export default ourLocations;
