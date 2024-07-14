import Profile from "../../assets/images/Kan_pic.png";
import { Link } from "react-router-dom";

export default function Intro() {
	const handleContextMenu = (event) => {
		event.preventDefault();
	};
	return (
		<header className="flex flex-col items-center my-10">
			<section className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
				<div className="overflow-hidden w-60 h-60 md:w-96 md:h-96 rounded-full">
					<img
						src={Profile}
						alt="Kan's Image"
						className="object-cover w-full h-full transform transition-transform duration-1000 hover:scale-125"
						onContextMenu={handleContextMenu}
					/>
				</div>

				<section className="flex flex-col gap-3 w-[500px] items-center md:items-start">
					<div>
						<p className="text-center md:text-start text-2xl font-normal text-amber-950">
							Greetings!
						</p>
						<p className="text-center md:text-start text-6xl font-semibold text-amber-950">
							I&apos;m{" "}
							<span className="hover:text-amber-500">
								<Link to="/home/about">Kan</Link>
							</span>
							.
						</p>
						<p className="text-center md:text-start text-xl font-normal">
							(Kan Jittapramoulboon)
						</p>
					</div>
					<div>
						<p className="text-2xl md:text-4xl text-center font-semibold text-amber-700">
							Web Developer <br className="block md:hidden" />
							/UX designer
						</p>
					</div>
					<p className="text-center md:text-end text-md md:text-xl font-semibold italic ">
						&quot;I can code, design,
						<br className="block md:hidden" /> draw and speak 4 languages.&quot;
					</p>
					<a
						href="https://drive.google.com/file/d/1S6brEASCpmIUI-TCkUwKBuiKyZyD6k11/view?usp=sharing"
						className="text-center text-lg md:text-3xl w-40 bg-amber-700 text-white border-2 border-white hover:bg-white hover:border-neutral-900 hover:text-black px-6 py-2 rounded-lg inline-block mt-4"
						style={{ minWidth: "120px" }}
					>
						Resume
					</a>
				</section>
			</section>
			<p className="text-lg md:text-xl w-2/3 ">
				With a background in art and design, complemented by expertise in
				software development, I bridge both disciplines to create web
				applications that excel in functionality, user experience, and visual
				appeal. I am inherently curious and proactive, always eager to expand my
				knowledge. Beyond technical skills, I excel in teamwork, presentation,
				and problem-solving.
			</p>
		</header>
	);
}
