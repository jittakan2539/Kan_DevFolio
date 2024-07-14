import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_Kan.png";
import { FaBars } from "react-icons/fa";

const Nav = () => {
	const handleContextMenu = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<nav className="flex justify-between p-10 py-5 bg-white">
				<FaBars />
				<Link to="/home" className="hover:scale-110 duration-500">
					{" "}
					<img
						src={Logo}
						alt="Elviro Logo"
						className="w-36"
						onContextMenu={handleContextMenu}
					/>
				</Link>

				<ul className="flex items-start  mx-6 gap-11 text-2xl font-semibold">
					<li className="hover:scale-110 duration-500 text-amber-600">
						<Link to="/home/">Home</Link>
					</li>
					<li className="hover:scale-110 duration-500 text-amber-600">
						<Link to="/home/about">About</Link>
					</li>
					<li className="hover:scale-110 duration-500 text-amber-600">
						<Link to="/home/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
