import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "./pages/Homepage.jsx";
import ContactPage from "./pages/Homepage.jsx";
import AboutPage from "./pages/Homepage.jsx";
import NavBar from "./components/NavBar.jsx";
const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<Outlet />
				</>
			),
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/about",
					element: <AboutPage />,
				},
				{
					path: "/contact",
					element: <ContactPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
