import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
export default function ContactPage() {
	return (
		<main className="flex flex-col items-center my-5 gap-3">
			<h1 className="text-5xl font-bold  text-amber-700">Contact</h1>
			<picture className="flex gap-5">
				<a href="mailto:jittakan2539@gmail.com" target="_blank">
					<FaRegEnvelope className="text-red-800 text-3xl bg-sky" />
				</a>
				<a href="https://github.com/jittakan2539" target="_blank">
					<FaGithub className="text-3xl bg-sky" />
				</a>
				<a
					href="https://www.linkedin.com/in/kan-jittapramoulboon"
					target="_blank"
				>
					<FaLinkedin className="text-3xl text-blue-800" />
				</a>
			</picture>
		</main>
	);
}
