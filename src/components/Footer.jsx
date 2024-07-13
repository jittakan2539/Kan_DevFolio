import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
export default function Footer() {
	return (
		<>
			<footer className="flex flex-col justify-between items-center gap-2 p-10">
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
				<hr className="border border-neutral-500 w-3/4" />
				<p className="text-xl">
					© 2024 By Kan Jittapramoulboon. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
