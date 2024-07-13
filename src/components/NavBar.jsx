import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_Kan.png";

const Nav = () => {
	return (
		<>
			<nav className="flex justify-between p-10">
				<section>
					<img src={Logo} alt="Elviro Logo" className="w-48" />
				</section>

				<ul className="flex flex-row justify-end p-5 mx-6 gap-11 text-2xl font-semibold">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
