import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_Kan.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	const handleContextMenu = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<nav className="flex justify-between items-center p-10 py-5 bg-white relative">
				<Link to="/home" className="hover:scale-110 duration-500">
					<img
						src={Logo}
						alt="Elviro Logo"
						className="w-20 md:w-36"
						onContextMenu={handleContextMenu}
					/>
				</Link>
				{openMenu ? (
					<FaXmark
						onClick={toggleOpenMenu}
						className=" text-2xl block md:hidden"
					/>
				) : (
					<FaBars onClick={toggleOpenMenu} className="block md:hidden" />
				)}
				<section
					className={`${
						openMenu ? "max-h-96" : "max-h-0"
					} z-50 md:hidden absolute left-0 top-full w-full bg-white overflow-hidden transition-max-height duration-1000 ease-in-out`}
				>
					<ul className="0 bg-white flex flex-col items-center gap-11 text-2xl font-semibold py-5">
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
				</section>

				<ul className="hidden md:flex items-start mx-6 gap-11 text-2xl font-semibold">
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
