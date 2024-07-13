import Profile from "../../assets/images/Kan_pic.png";
import { Link } from "react-router-dom";

export default function Intro() {
	return (
		<header className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
			<div className="overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-full">
				<img
					src={Profile}
					alt="Kan's Image"
					className="object-cover w-full h-full  transform transition-transform duration-1000 hover:scale-125"
				/>
			</div>

			<section className="flex flex-col gap-3 w-[400px]">
				<div>
					<p className="text-2xl font-normal">Greetings!</p>
					<p className="text-6xl font-semibold text-amber-950">
						I&apos;m{" "}
						<span className="hover:text-amber-500">
							<Link to="/home/about">Kan</Link>
						</span>
						.
					</p>
					<p className="text-xl font-normal">(Kan Jittapramoulboon)</p>
				</div>
				<div>
					<p className="text-3xl font-semibold text-amber-700">
						Web Developer/UX designer
					</p>
				</div>
				<p className="text-lg italic text-end">
					&quot;I can code, design, draw and speak 4 languages.&quot;
				</p>
				<a
					href="../../assets/CV_Kan_Jittapramoulboon_Fullstack.pdf"
					download
					className=" button w-32 text-lg text-center"
				>
					Resume
				</a>
				<p>
					A passionate junior software developer, with knowledge in UX design
					and animation. I am voracious for learning and seek to constantly
					improve both my technical and soft skills. I aim to solve
					people&quot;s problems and improve their quality of life.
				</p>
			</section>
		</header>
	);
}
