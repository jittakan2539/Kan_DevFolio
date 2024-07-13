import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_Kan.png";

const Nav = () => {
	return (
		<>
			<nav className="flex justify-between p-10">
				<Link to="/home">
					{" "}
					<img src={Logo} alt="Elviro Logo" className="w-48" />
				</Link>

				<ul className="flex flex-row justify-end p-5 mx-6 gap-11 text-2xl font-semibold">
					<li>
						<Link to="/home/">Home</Link>
					</li>
					<li>
						<Link to="/home/about">About</Link>
					</li>
					<li>
						<Link to="/home/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
