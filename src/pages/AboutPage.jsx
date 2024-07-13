import Profile from "../../src/assets/images/Kan_pic.png";
function AboutPage() {
	return (
		<header className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
			<img
				src={Profile}
				alt="Kan's Image"
				className="object-cover w-80 h-80  md:w-96 md:h-96 rounded-full "
			/>
			<section className="flex flex-col gap-3 w-96">sdsd</section>
		</header>
	);
}

export default AboutPage;
