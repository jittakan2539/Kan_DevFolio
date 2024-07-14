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
		<section className="max-w-sm overflow-hidden shadow-lg rounded-3xl h-[600px]">
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
				<div className="font-bold text-2xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
				<p className="text-gray-700 text-lg mt-2 font-semibold">
					Tech stack:{" "}
					<span className="text-base font-normal">{techStack.join(", ")}</span>
				</p>
			</div>
			<div className="px-6 pt-4 pb-2 flex justify-between items-center">
				<a
					href={liveLink}
					target="_blank"
					className="inline-block text-xl text-orange-800 hover:text-orange-600"
				>
					Live Preview
				</a>
				<a
					href={codeLink}
					target="_blank"
					className="flex items-center gap-2 text-xl text-orange-800"
				>
					<FaGithub ckassName="h-10 text-gray-500 hover:text-gray-800" />
					<p className=" hover:text-orange-600">View Code</p>
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
