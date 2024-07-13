import { useState } from "react";
import notFound from "../assets/images/notFound.png";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<section className="relative h-screen w-full flex flex-col justify-center">
			<img
				id="p"
				src={notFound}
				alt="Kan's opening Illustration"
				className={`object-cover object-right-top md:object-center w-full h-full ${
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
						className={`text-amber-700 text-3xl md:text-4xl lg:text-4xl text-center font-thin ${
							imageLoaded
								? "opacity-100 transform translate-y-0 transition-transform duration-1000 delay-500"
								: " transform translate-y-10"
						}`}
					>
						404{" "}
						<span className="block md:inline text-neutral-500 text-xl lg:text-3xl">
							| Oops! Seems like your URL does not exist.
						</span>
					</p>
					<Link to="/home">
						<button className=" text-xl lg:text-3xl bg-stone-500 text-white border-2 border-white hover:bg-white hover:border-neutral-900 hover:text-black mt-4 px-10 py-2 rounded-lg">
							Home
						</button>
					</Link>
				</div>
			</section>
		</section>
	);
}
