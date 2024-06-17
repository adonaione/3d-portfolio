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
	cogno,
	blissfulbalance,
	threejs,
	kaylee,
	travis,
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
		date: "February 2024 - Present",
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
		title: "Case Analyst II",
		company_name: "Cognosante MVH, LLC",
		icon: cogno,
		iconBg: "#383E56",
		date: "January 2018 - August 2022",
		points: [
			"Identifying and remediating consumer data issues related to health insurance exchange coverage.",
			"Apply appropriate research and technical knowledge to resolve outstanding issues in a timely and accurate manner.",
			"Responsible for making outbound calls to gather additional information as well as inform the consumer of the disposition of their care.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Working with Adonai is always such a pleasure, he quickly accomplishes any given tasks efficiently. He navigates spontaneous tasks with ease and delivers a beautiful outcome. He adds a unique atmosphere to anywhere he works that makes him a very valuable addition to any project/team.",
		name: "Kaylee",
		designation: "CEO",
		company: "Adonai & Kaylee | Holistic Wellness",
		image: kaylee,
	},
	{
		testimonial:
			"Adonai is a dedicated and creative individual who consistently demonstrated excellent communication and collaboration skills. His ability to translate conceptual ideas into functional solutions, as seen in his innovative yoga app capstone project, truly sets him apart.",
		name: "Travis Peck",
		designation: "Instructor",
		company: "Coding Temple",
		image: travis,
	},
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
