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
	python,
	flask,
	swift,
	tailwind,
	nodejs,
	mongodb,
	git,
	codingtemple,
	adonaiandkaylee,
	finesse,
	blissfulbalance,
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
		title: "Full Stack Developer",
		icon: web,
	},
	{
		title: "API Developer",
		icon: mobile,
	},
	{
		title: "Database Management",
		icon: backend,
	},
	{
		title: "Deployment and Maintenance",
		icon: creator,
	},
];

const technologies = [
	{
		name: "python",
		icon: python,
	},
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
		name: "Swift",
		icon: swift,
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
		name: "flask",
		icon: flask,
	},
];

const experiences = [
	{
		title: "Software Engineer Intern",
		company_name: "Coding Temple",
		icon: codingtemple,
		iconBg: "#383E56",
		date: "February 2024 - April 2024",
		points: [
			"Developed and maintained robust, scalable web applications utilizing a full stack of technologies including HTML, Python, React, and Flask.",
			"Leveraged Python to design and implement RESTful APIs, facilitating communication between the front-end and back-end systems.",
			"Created dynamic and responsive UIs using React, focusing on enhancing user engagement and interaction, while implementing server-side logic and routing using Flask, ensuring smooth data flow and efficient request handling.",
		],
	},
	{
		title: "Facilitator | CEO",
		company_name: "Adonai & Kaylee | Holistic Wellness",
		icon: adonaiandkaylee,
		iconBg: "#E6DEDD",
		date: "July 2022 - Present",
		points: [
			"Juggled multiple roles to ensure the seamless operation of the establishment.",
			"Focused on client satisfaction, I oversaw operations, led teams, and formed strategic partnerships.",
			"Enhanced our digital presence through website development, optimizing user experience and operations.",
			"Honed my skills in project management, problem-solving, and adaptability.",
		],
	},
	{
		title: "Barber",
		company_name: "Finesse Barber Studio",
		icon: finesse,
		iconBg: "#383E56",
		date: "Feb 2021 - August 2022",
		points: [
			"Established precision, creativity, and client satisfaction.",
			"Meticulous approach and effective communication ensured personalized experiences.",
			"Adaptability to industry trends, with skills in problem-solving, creativity, and customer-centricity.",
		],
	},
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
	{
		name: "Blissful Balance Yoga",
		description:
			"Web-based platform that allows users to create, retrieve, update, and delete a user and posts. Utilizes user authentication and authorization to ensure secure access to the platform.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "python",
				color: "green-text-gradient",
			},
			{
				name: "flask",
				color: "pink-text-gradient",
			},
		],
		image: blissfulbalance,
		source_code_link: "https://github.com/adonaione/3d-portfolio",
	},
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
