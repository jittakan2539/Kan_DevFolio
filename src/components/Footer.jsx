import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
export default function Footer() {
	return (
		<>
			<footer className="bg-neutral-800 flex flex-col justify-between items-center gap-5 p-10">
				<p className="text-white text-2xl">Tel: +66 81 814 6768</p>
				<section className="flex gap-8">
					<a href="mailto:jittakan2539@gmail.com" target="_blank">
						<FaRegEnvelope className="text-white text-5xl bg-sky" />
					</a>
					<a href="https://github.com/jittakan2539" target="_blank">
						<FaGithub className="text-5xl bg-white rounded-full" />
					</a>
					<a
						href="https://www.linkedin.com/in/kan-jittapramoulboon"
						target="_blank"
					>
						<FaLinkedin className="text-5xl text-white" />
					</a>
				</section>

				<hr className="border border-neutral-400 w-3/4" />
				<p className="text-white text-center text-md">
					© 2024 By Kan Jittapramoulboon. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
