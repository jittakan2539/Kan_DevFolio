import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaNpm,
	FaFigma,
	FaBootstrap,
} from "react-icons/fa";
import {
	SiVisualstudiocode,
	SiMongodb,
	SiTailwindcss,
	SiJavascript,
	SiVite,
	SiSqlite,
	SiExpress,
	SiPostman,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiAdobeaftereffects,
	SiAutodeskmaya,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
	{ id: "html", Component: FaHtml5, label: "HTML5" },
	{ id: "css", Component: FaCss3Alt, label: "CSS3" },
	{ id: "javascript", Component: SiJavascript, label: "JavaScript" },
	{ id: "tailwind", Component: SiTailwindcss, label: "Tailwind CSS" },
	{ id: "react", Component: FaReact, label: "React" },
	{ id: "bootstrap", Component: FaBootstrap, label: "Bootstrap" },
	{ id: "node", Component: FaNodeJs, label: "Node.js" },
	{ id: "express", Component: SiExpress, label: "Express.js" },
	{ id: "sql", Component: SiSqlite, label: "SQLite" },
	{ id: "npm", Component: FaNpm, label: "NPM" },
	{ id: "mongodb", Component: SiMongodb, label: "MongoDB" },
	{ id: "vite", Component: SiVite, label: "Vite" },
	{ id: "vscode", Component: SiVisualstudiocode, label: "VS Code" },
	{ id: "github", Component: DiGithubBadge, label: "GitHub" },
	{ id: "postman", Component: SiPostman, label: "Postman" },
];

const designSkills = [
	{ id: "figma", Component: FaFigma, label: "Figma" },
	{ id: "photoshop", Component: SiAdobephotoshop, label: "Photoshop" },
	{ id: "illustrator", Component: SiAdobeillustrator, label: "Illustrator" },
	{ id: "premiere", Component: SiAdobepremierepro, label: "Premiere Pro" },
	{
		id: "aftereffects",
		Component: SiAdobeaftereffects,
		label: "After Effects",
	},
	{ id: "maya", Component: SiAutodeskmaya, label: "Autodesk Maya" },
];

export default function Skills() {
	return (
		<div
			id="skills"
			className="bg-white rounded-lg shadow-md flex items-center justify-center min-h-screen"
		>
			<div className="text-center max-w-2xl w-full mx-auto">
				<h2 className="text-4xl font-bold text-amber-900 mb-3">Skills</h2>
				<hr className="mb-5 border border-neutral-300" />
				<h2 className="text-2xl font-bold text-amber-600 mb-6">Technical</h2>
				<div className="grid grid-cols-4 gap-4 my-4 justify-items-center text-orange-800">
					{skills.map(({ id, Component, label }) => (
						<div
							className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
							key={id}
						>
							<Component />
							<p className="text-sm mt-2 text-center">{label}</p>
						</div>
					))}
				</div>
				<h2 className="text-2xl font-bold text-amber-600 mt-6 mb-6">Design</h2>
				<div className="grid grid-cols-4 gap-4 my-4 justify-items-center text-orange-800">
					{designSkills.map(({ id, Component, label }) => (
						<div
							className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
							key={id}
						>
							<Component />
							<p className="text-sm mt-2 text-center">{label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
