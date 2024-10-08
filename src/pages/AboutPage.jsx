import About from "../../src/assets/images/About_pic.jpg";
import { useState } from "react";

function AboutPage() {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};
	return (
		<header className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 my-10">
			<div
				className={`${
					imageLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
				} transition-all duration-1000 w-64 md:w-96 md:h-{400px} overflow-hidden rounded-2xl hover`}
			>
				<img
					src={About}
					alt="Kan's Image"
					className="object-cover w-full h-full scale-125 md:scale-100 hover:scale-125 duration-1000"
					onLoad={handleImageLoad}
				/>
			</div>

			<section className="flex flex-col gap-3 w-[500px] items-center md:items-start px-5 md:px-0">
				<h1 className="text-4xl md:text-5xl font-bold text-amber-700">
					About me
				</h1>
				<p className="text-xl italic ">
					&quot;Always finding the new horizon.&quot;
				</p>
				<p className="text-lg md:text-xl">
					Nice to see you again! I&apos;m Kan Jittapramoulboon. A passionate web
					developer/designer with backgrounds in animation and design. I am a
					curious person and a coracious reader. In my free time, you will find
					me either reading or watching some documentaries
				</p>
				<p className="text-lg md:text-xl">
					My passion is to create something that could improve people&apos;s
					life. And I realize that I could apply my skills in software
					development and UX design to make everyone&apos;s life easier.
				</p>
				<p className="text-lg md:text-xl">
					I have a hand-on experience in Generation&apos;s Thailand Bootcamp,
					where I got to push my limit as an artist-turn-software developer. At
					the end of the day, however overwhelming the problems are, I am
					confident that I am capable of making it through.
				</p>
			</section>
		</header>
	);
}

export default AboutPage;
