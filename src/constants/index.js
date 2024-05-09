import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "API Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Software Engineer Trainee",
		company_name: "Coding Temple",
		icon: starbucks,
		iconBg: "#383E56",
		date: "February 2024 - April 2024",
		points: [
			"I underwent an intensive curriculum focusing on front-end and back-end development, collaborating on real-world projects and embracing agile practices. ",
			"I delved into various programming languages, frameworks, and methodologies, honing my ability to translate conceptual ideas into tangible, functional solutions.",
			"I actively engaged in code reviews, debugging sessions, and agile development practices, refining my proficiency in problem-solving and fostering a keen eye for detail. This equipped me with the technical expertise necessary and instilled in me a passion for creativity, collaboration, and excellence in software craftsmanship.",
		],
	},
	{
		title: "Facilitator | CEO",
		company_name: "Adonai & Kaylee | Holistic Wellness",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "July 2022 - Present",
		points: [
			"I adeptly juggled multiple roles to ensure the seamless operation of the establishment, laying a foundation that resonates with the responsibilities of a Software Developer. Focused on client satisfaction, I oversaw operations, led teams, and formed strategic partnerships.",
			"I enhanced our digital presence through website development, optimizing user experience and operations.",
			"This multifaceted role honed my skills in project management, problem-solving, and adaptability, developing  a strong candidate for a Software Developer role.",
		],
	},
	{
		title: "Barber",
		company_name: "Finesse Barber Studio",
		icon: shopify,
		iconBg: "#383E56",
		date: "Feb 2021 - August 2022",
		points: [
			"As a skilled Barber, I honed precision, creativity, and client satisfaction, traits essential for a Software Developer.",
			"My meticulous approach and effective communication ensured personalized experiences, akin to understanding user needs in software development.",
			"Adaptability to industry trends reflects readiness for technology's fast pace. With skills in problem-solving, creativity, and customer-centricity, I'm well-equipped for success as a Software Developer.",
		],
	},
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

const testimonials = [
	// {
	// 	testimonial:
	// 		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
	// 	name: "Sara Lee",
	// 	designation: "CFO",
	// 	company: "Acme Co",
	// 	image: "https://randomuser.me/api/portraits/women/4.jpg",
	// },
	// {
	// 	testimonial:
	// 		"I've never met a web developer who truly cares about their clients' success like Rick does.",
	// 	name: "Chris Brown",
	// 	designation: "COO",
	// 	company: "DEF Corp",
	// 	image: "https://randomuser.me/api/portraits/men/5.jpg",
	// },
	// {
	// 	testimonial:
	// 		"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
	// 	name: "Lisa Wang",
	// 	designation: "CTO",
	// 	company: "456 Enterprises",
	// 	image: "https://randomuser.me/api/portraits/women/6.jpg",
	// },
];

const projects = [
	// 	{
	// 		name: "Car Rent",
	// 		description:
	// 			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	// 		tags: [
	// 			{
	// 				name: "react",
	// 				color: "blue-text-gradient",
	// 			},
	// 			{
	// 				name: "mongodb",
	// 				color: "green-text-gradient",
	// 			},
	// 			{
	// 				name: "tailwind",
	// 				color: "pink-text-gradient",
	// 			},
	// 		],
	// 		image: carrent,
	// 		source_code_link: "https://github.com/",
	// 	},
	// 	{
	// 		name: "Job IT",
	// 		description:
	// 			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	// 		tags: [
	// 			{
	// 				name: "react",
	// 				color: "blue-text-gradient",
	// 			},
	// 			{
	// 				name: "restapi",
	// 				color: "green-text-gradient",
	// 			},
	// 			{
	// 				name: "scss",
	// 				color: "pink-text-gradient",
	// 			},
	// 		],
	// 		image: jobit,
	// 		source_code_link: "https://github.com/",
	// 	},
	// 	{
	// 		name: "Trip Guide",
	// 		description:
	// 			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 		tags: [
	// 			{
	// 				name: "nextjs",
	// 				color: "blue-text-gradient",
	// 			},
	// 			{
	// 				name: "supabase",
	// 				color: "green-text-gradient",
	// 			},
	// 			{
	// 				name: "css",
	// 				color: "pink-text-gradient",
	// 			},
	// 		],
	// 		image: tripguide,
	// 		source_code_link: "https://github.com/",
	// 	},
];

export { services, technologies, experiences, testimonials, projects };
