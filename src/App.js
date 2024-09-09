import { useEffect } from "react";
import {
	Route,
	Routes,
	Navigate,
	useNavigate,
	useLocation
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./Pages/SignIn";
import Signup from "./Pages/Register";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import styled from "styled-components";
import Footer from "./components/Footer";

import "./App.css";


const Wrap = styled.div`display: flex;`;

const Content = styled.div`flex: 1;`;

export default function App() {
	const { isSignedIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(
		() => {
			if (isSignedIn) {
				if (location.pathname === "/signup" || location.pathname === "/login") {
					navigate("/app");
				}
			} else {
				if (location.pathname !== "/login") {
					navigate("/login");
				}
			}
		},
		[isSignedIn, navigate, location.pathname]
	);
  return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route
				path="/app"
				element={
					<SignedIn>
						<Wrap>
							<Sidebar />
							<Content>
								<Header />
								{/* Add the main content here */}
								<Footer />
							</Content>
						</Wrap>
					</SignedIn>
				}
			/>
			<Route
				path="/"
				element={isSignedIn ? <Navigate to="/app" /> : <Navigate to="/login" />}
			/>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}