import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Exchange, Furniture, Partner, Research } from "../assets/icons";
import HailIcon from "@mui/icons-material/Hail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EngineeringIcon from "@mui/icons-material/Engineering";
import {
	FurnitureAppliance,
	MaterialExchange,
	ProjectsPartners,
	ResearchContent,
} from "./product";

// CONTENT

export const navList = [
	{ name: "home", menu: "Homepage", link: "/" },
	{ name: "about", menu: "About Us", link: "/about" },
	{ name: "products", menu: "Products & Services", link: "/product" },
	{ name: "team", menu: "Teams", link: "/teams" },
];

export const SocMed = [
	{
		link: "https://linkedin.com/in/hanantyodian",
		socialMedia: "Linkedin",
		logo: <FaLinkedin size={32} />,
	},
	{
		link: "https://www.instagram.com/hanantyodut/",
		socialMedia: "Instagram",
		logo: <FaInstagram size={32} />,
	},
	{
		link: "www.linkedin.com/in/hanantyodian",
		socialMedia: "Whatsapp",
		logo: <FaWhatsapp size={32} />,
	},
	{
		link: "www.linkedin.com/in/hanantyodian",
		socialMedia: "E-Mail",
		logo: <HiOutlineMail size={32} />,
	},
];

export const client = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		message: "omaygaaadd omaygad",
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		message: "mayaan ya gitu dah",
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		message: "gokil abiez ini mah",
	},
	{
		id: 495674,
		name: "layla",
		image: "https://i.pravatar.cc/48?u=495674",
		message: "sangad inspiring",
	},
	{
		id: 765483,
		name: "kurt",
		image: "https://i.pravatar.cc/48?u=765483",
		message: "emezing",
	},
];

export const services = [
	{
		name: "Materials Exchange",
		image: "/component_exchange_FILL0_wght400_GRAD0_opsz24.svg",
		content: <MaterialExchange />,
	},
	{
		name: "Furnitures & appliances",
		image: "/shelves_FILL0_wght400_GRAD0_opsz24.svg",
		content: <FurnitureAppliance />,
	},
	{
		name: "Projects Partner",
		image: "/partner_exchange_FILL0_wght400_GRAD0_opsz24.svg",
		content: <ProjectsPartners />,
	},
	{
		name: "Research",
		image: "/experiment_FILL0_wght400_GRAD0_opsz24.svg",
		content: <ResearchContent />,
	},
];

export const timelineSteps = [
	{
		id: 1,
		title: "Polymore was established!",
		month: "jun",
		year: "2019",
		icon: <Exchange />,
	},
	{
		id: 2,
		title: "1st Project in Natuna",
		month: "Aug",
		year: "2019",
		icon: <Furniture />,
	},
	{
		id: 3,
		title: "Initiate fully functional team at Jakarta",
		month: "Sep",
		year: "2025",
		icon: <Research />,
	},
	{
		id: 4,
		title: "Our 1st workshop finished!",
		month: "Dec",
		year: "2027",
		icon: <Partner />,
	},
	{
		id: 5,
		title: "Our 2nd project",
		month: "Nov",
		year: "2025",
		icon: <Research />,
	},
	{
		id: 6,
		title: "1st Exhibition at JCC",
		month: "Dec",
		year: "2025",
		icon: <Research />,
	},
	{
		id: 7,
		title: "1st Partnership with PasteLab Jogja",
		month: "Jan",
		year: "2028",
		icon: <Partner />,
	},
];

export const TeamDiv = [
	{
		id: 1,
		title: "Managerial",
		image: <HailIcon />,
		member: 2,
	},
	{
		id: 2,
		title: "Engineering",
		image: <EngineeringIcon />,
		member: 5,
	},
	{
		id: 3,
		title: "Finance & Marketing",
		image: <SupportAgentIcon />,
		member: 4,
	},
];

export const positionMan = [
	{ id: 1, pos: "Founder" },
	{ id: 2, pos: "Co - Founder" },
];

export const positionEng = [
	{ id: 1, pos: "Researcher" },
	{ id: 2, pos: "Product Designer" },
	{ id: 3, pos: "Material Specialist" },
	{ id: 4, pos: "Manufacture Specialist" },
	{ id: 5, pos: "Finishing & Packaging Specialist" },
];

export const positionFin = [
	{ id: 1, pos: "Digital Marketing" },
	{ id: 2, pos: "Project Manager" },
	{ id: 3, pos: "Financial Specialist" },
	{ id: 4, pos: "Procurement" },
];

export const mainContMilestone = [
	{
		id: 1,
		image: "/YMB_8227-Edit.jpg",
		year: "2019",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		achievement: [
			"2nd Place UMKM competition Kec.Natuna",
			"best projects KKN Natuna",
			"Honourable Mentions for Projects Community Services",
		],
	},
	{
		id: 2,
		image: "/DSC02176.JPG",
		year: "2025",
		desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		achievement: [
			"Created new community ~resEnvironment~ ",
			"Acknowledged by Public Area Business Secretary",
		],
	},
	{
		id: 3,
		image: "/DSC03359.JPG",
		year: "2027",
		desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
		achievement: [
			"Expanding the manufacturing plant to new Warehouse at East Jakarta",
			"Highest gross income in furniture start-up company",
		],
	},
	{
		id: 4,
		image: "/DSC06455.JPG",
		year: "2028",
		desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
		achievement: [
			"Partnering with PasteLab Company, Yogyakarta",
			"Honored by Jakarta Governor for the best start-up company in environmental cause",
			"Meeting with Dave Hakkens, the founder of PreciousPlastic",
		],
	},
];

export const objective = [
	{
		id: 1,
		primary: "Increasing waste problem in urban areas",
		secondary: "also increasing population growth",
	},
	{
		id: 2,
		primary: "Minimum facility and individual/community",
		secondary: "which controls and provide services in the related areas",
	},
	{
		id: 3,
		primary: "Increasing online market activity",
		secondary:
			"which many of the packages used plastic as it material due to pandemic condition",
	},
];

export const materialFlow = [
	{
		id: 1,
		phase: "Your plastic bottle from office",
		image: "/stock-image-material1.jpg",
	},
	{
		id: 2,
		phase: "We process your waste & create a new raw material",
		image: "/stock-image-material.jpg",
	},
	{
		id: 3,
		phase: "Ready to be processed at your will!",
		image: "/stock-material-2.jpg",
	},
];

export const linkFooter = [
	{ id: 1, title: "Portfolio", url: "#" },
	{ id: 2, title: "Web Design", url: "#" },
	{ id: 3, title: "About Us", url: "#" },
	{ id: 4, title: "Our Team", url: "#" },
	{ id: 5, title: "Blog", url: "#" },
	{ id: 6, title: "Events", url: "#" },
	{ id: 7, title: "Projects", url: "#" },
	{ id: 8, title: "Careers", url: "#" },
	{ id: 9, title: "Contact Us", url: "#" },
];

export const cardsProduct = [
	{
		id: 1,
		title: "Simple Outdoor Chair",
		image: "/chair1.jpg",
		desc: "Lightweight but durable, resistant in all weather conditions",
	},
	{
		id: 2,
		title: "Plant Pots",
		image: "/furnit2.jpg",
		desc: "Durable, high longevity, compact, stack-able",
	},
	{
		id: 3,
		title: "Decorative Vase",
		image: "/vase4.jpg",
		desc: "Highly durable, withstands fall damage, high longevity, custom colors/themes",
	},
	{
		id: 4,
		title: "Custom End Tables",
		image: "/endtable3.jpg",
		desc: "Lightweight but durable, easy to arrange, custom colors/themes",
	},
];

export const projectsInfo = [
	{
		id: 1,
		title: "Branch Workshop",
		image: "/workshops1.jpg",
		desc: "Ready to collaborate with government or private instituions on new workshops and new job opportunity for locals",
	},
	{
		id: 2,
		title: "Open Bazaar & Conventions",
		image: "/bazaar.jpg",
		desc: "Ready to promote redied products & prototype products, and public presentations",
	},
	{
		id: 3,
		title: "Community Services",
		image: "/communityservice1.jpg",
		desc: "Expand the awareness for waste environment with locals",
	},
];

export const protoInfo = [
	{
		id: 1,
		title: "Sheets Materials",
		image: "/sheets-products.jpg",
		desc: "Recycle material in shapes of sheets after compression process",
	},
	{
		id: 2,
		title: "Filaments Materials",
		image: "/filaments.jpg",
		desc: "Recycle material in shapes of filaments after extrusion process",
	},
	{
		id: 3,
		title: "Block Materials",
		image: "/blockprod.jpg",
		desc: "Recycle material in shapes of filaments after compression/injection process",
	},
];

export const machineryType = [
	{ id: 1, name: "Shredder" },
	{ id: 2, name: "Injector" },
	{ id: 3, name: "Extruder" },
	{ id: 4, name: "Compressor" },
];
