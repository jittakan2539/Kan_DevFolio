import ProductCard from "./ProductCard";
import Elviro from "../../assets/images/project01-elviro/elviro-desktop.jpg";
import CRUD from "../../assets/images/project02_CRUD Generation/Generation-image.jpg";

export default function Projects() {
	return (
		<section className="my-5">
			<h2 className="text-4xl font-bold text-amber-950 mb-3">Projects</h2>
			<div className="p-10 flex justify-center gap-20">
				<ProductCard
					image={Elviro}
					title="Elviro: E-Commerce Web App"
					description="A comprehensive e-commerce web application designed for a starting family, emphasizing user experience and functionality. The design uses earth tones to convey safety and environmental consciousness. It includes extensive product details, a shopping cart system, and an admin dashboard."
					techStack={[
						"HTML",
						"JavaScript",
						"React",
						"Node.js",
						"Express.js",
						"MongoDB",
					]}
					liveLink="https://elviro-frontend.vercel.app/"
					codeLink="https://github.com/jsd7-group3-the-immortal-elf/elviro-frontend"
				/>
				<ProductCard
					image={CRUD}
					title="User Registration Web App"
					description="A web application created for registering users. The app is separated into admin section, where user infomation can be viewed in user section."
					techStack={["HTML", "JavaScript", "React"]}
					liveLink="https://10-kan-react.vercel.app/"
					codeLink="https://github.com/jittakan2539/10-Kan-react"
				/>
			</div>
		</section>
	);
}
