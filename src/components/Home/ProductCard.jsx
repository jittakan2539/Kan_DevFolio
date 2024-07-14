import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProductCard = ({
	image,
	title,
	description,
	techStack,
	liveLink,
	codeLink,
}) => {
	return (
		<section className="max-w-sm overflow-hidden shadow-lg rounded-3xl relative h-[450px] md:h-[600px]">
			<picture>
				<a href={liveLink}>
					<img
						className="object-cover w-full h-1/3 hover:scale-105"
						src={image}
						alt={title}
					/>
				</a>
			</picture>

			<div className="px-6 py-4">
				<div className="font-bold text-xl text-center md:text-2xl mb-2">
					{title}
				</div>
				<p className="text-gray-700 text-base hidden md:block">{description}</p>
				<p className="text-gray-700 text-lg mt-2 font-semibold">
					Tech stack:{" "}
					<span className="text-base font-normal">{techStack.join(", ")}</span>
				</p>
			</div>

			<div className="px-6 pt-4 pb-2 absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center bg-white backdrop-filter backdrop-blur-lg">
				<a
					href={liveLink}
					target="_blank"
					className="inline-block text-lg md:text-xl text-orange-800 hover:text-orange-600 px-4 py-2"
				>
					Live Preview
				</a>
				<a
					href={codeLink}
					target="_blank"
					className="flex items-center  gap-2 text-xl text-orange-800 hover:text-orange-600 px-4 py-2"
				>
					<FaGithub className="hidden md:block h-6 text-gray-500 hover:text-gray-800" />
					<p className="text-lg md:text-xl hover:text-orange-600">View Code</p>
				</a>
			</div>
		</section>
	);
};

ProductCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	techStack: PropTypes.string,
	liveLink: PropTypes.string,
	codeLink: PropTypes.string,
};

export default ProductCard;
