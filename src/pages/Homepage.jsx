import Image from "../assets/images/hero_illust.png";
export default function Homepage() {
	return (
		<>
			<header>
				<section className="w-full h-96 ">
					<img src={Image} alt="" className="object-cover " />
				</section>
			</header>
		</>
	);
}
