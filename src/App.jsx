import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import OpenPage from "./pages/OpenPage.jsx";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

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
					<Footer />
				</>
			),
			children: [
				{
					path: "",
					element: <Home />,
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
		{
			path: "*",
			element: (
				<>
					<NotFoundPage />
				</>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
