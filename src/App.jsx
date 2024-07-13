import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import OpenPage from "./pages/OpenPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<OpenPage />
				</>
			),
		},
		{
			path: "/home",
			element: (
				<>
					<NavBar />
					<Outlet />
				</>
			),
			children: [
				{
					path: "",
					element: <HomePage />,
				},
				{
					path: "about",
					element: <AboutPage />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
