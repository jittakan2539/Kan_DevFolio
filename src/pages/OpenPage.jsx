import { useState } from "react";
import Image from "../assets/images/hero_illust.png";
import { Link } from "react-router-dom";

export default function OpenPage() {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<section className="relative h-screen w-full flex flex-col justify-center">
			<img
				id="p"
				src={Image}
				alt="Kan's opening Illustration"
				className={`object-cover object-center w-full h-full ${
					imageLoaded
						? "opacity-100 transition-opacity duration-1000"
						: "opacity-0"
				}`}
				draggable="false"
				onLoad={handleImageLoad}
			/>

			<section
				className={`absolute bottom-10 left-0 w-full ${
					imageLoaded
						? "opacity-100 transition-opacity duration-1000 delay-500"
						: "opacity-0"
				}`}
			>
				<div className="bg-white py-10 px-16 text-center flex-col justify-center items-start">
					<p
						className={`text-amber-700 text-3xl md:text-6xl text-center${
							imageLoaded
								? "opacity-100 transform translate-y-0 transition-transform duration-1000 delay-500"
								: " transform translate-y-10"
						}`}
					>
						KAN JITTAPRAMOULBOON{" "}
						<span className="block md:inline text-amber-900">| PORTFOLIO</span>
					</p>
					<Link to="/Home">
						<button className=" text-3xl bg-stone-500 text-white border-2 border-white hover:bg-white hover:border-neutral-900 hover:text-black mt-4 px-10 py-2 rounded-lg">
							Click
						</button>
					</Link>
				</div>
			</section>
		</section>
	);
}
