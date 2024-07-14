import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<>
			<footer className=" bg-neutral-800 flex flex-col justify-between items-center gap-5 p-10">
				<section className="flex justify-between w-full">
					<nav className="hidden md:flex gap-5 right-20 text-white text-center text-lg ">
						<Link to="/home">Home</Link>
						<Link to="/home/about">About</Link>
						<Link to="/home/contact">Contact</Link>
					</nav>
					<p className="text-white text-lg md:text-2xl">
						Wish you have a great day!
					</p>
					<p className="text-white text-lg md:text-2xl">Tel: +66 81 814 6768</p>
				</section>

				<picture className="flex gap-8">
					<a href="mailto:jittakan2539@gmail.com" target="_blank">
						<FaRegEnvelope className="text-white text-2xl md:text-5xl bg-sky" />
					</a>
					<a href="https://github.com/jittakan2539" target="_blank">
						<FaGithub className="text-2xl md:text-5xl bg-white rounded-full" />
					</a>
					<a
						href="https://www.linkedin.com/in/kan-jittapramoulboon"
						target="_blank"
					>
						<FaLinkedin className="text-2xl md:text-5xl text-white" />
					</a>
				</picture>

				<hr className="border border-neutral-400 w-3/4" />
				<p className="text-white text-center text-sm md:text-md">
					© 2024 By Kan Jittapramoulboon. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
