import Profile from "../../assets/images/Kan_pic.png";

export default function Intro() {
	return (
		<header className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
			<img
				src={Profile}
				alt="Kan's Image"
				className="object-cover w-80 h-80  md:w-96 md:h-96 rounded-full "
			/>
			<section className="flex flex-col gap-3">
				<div>
					<p className="text-2xl font-normal">Greetings!</p>
					<p className="text-6xl font-semibold text-amber-950">I&apos;m Kan.</p>
					<p className="text-xl font-normal">(Kan Jittapramoulboon)</p>
				</div>
				<div>
					<p className="text-3xl font-semibold text-amber-700">
						Web Developer/UX designer
					</p>
				</div>
				<p className="text-lg italic text-end">
					&quot;I can code, draw and speak 4 languages.&quot;
				</p>
				<button className=" button w-32 text-lg text-center">Resume</button>
			</section>
		</header>
	);
}
