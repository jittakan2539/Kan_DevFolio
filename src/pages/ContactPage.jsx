import { FaLinkedin, FaMobile, FaRegEnvelope } from "react-icons/fa";
export default function ContactPage() {
	return (
		<main className="flex flex-col items-center my-5 gap-3">
			<h1 className="text-4xl md:text-5xl font-bold  text-amber-700">
				Contact
			</h1>
			<hr className="border border-neutral-400 w-3/4 md:w-1/4" />
			<p className="text-center text-xl text-neutral-500">
				You can contact me from the methods below.
			</p>

			<section className="flex flex-col gap-5 mt-5">
				<section className="flex gap-5 text-5xl items-center">
					<a href="mailto:jittakan2539@gmail.com" target="_blank">
						<FaMobile className="text-neutral-800 text-3xl bg-sky" />
					</a>
					<h2 className="text-xl md:text-2xl font-normal ml-6e  text-neutral-600">
						+66 81 814 6768
					</h2>
				</section>

				<section className="flex gap-5 text-5xl items-center">
					<a href="mailto:jittakan2539@gmail.com" target="_blank">
						<FaRegEnvelope className="text-red-800 text-3xl bg-sky" />
					</a>
					<h2 className="text-xl md:text-2xl font-normal ml-6e  text-neutral-600">
						jittakan2539@gmail.com
					</h2>
				</section>

				<section className="flex gap-5 text-5xl items-center">
					<a href="mailto:jittakan2539@gmail.com" target="_blank">
						<FaLinkedin className="text-3xl text-blue-800" />
					</a>
					<h2 className="text-xl md:text-2xl font-normal ml-6e  text-neutral-600">
						Kan Jittapramoulboon
					</h2>
				</section>
			</section>
			<hr className="border border-neutral-400 w-3/4 md:w-1/4 mt-10" />
			<p className="text-center text-2xl md:text-3xl text-neutral-500">
				Or download my resume.
			</p>
			<a
				href="https://drive.google.com/file/d/1S6brEASCpmIUI-TCkUwKBuiKyZyD6k11/view?usp=sharing"
				download
				className=" text-3xl bg-amber-700 text-white border-2 border-white hover:bg-white hover:border-neutral-900 hover:text-black  px-10 py-2 rounded-lg"
			>
				Resume
			</a>
		</main>
	);
}
