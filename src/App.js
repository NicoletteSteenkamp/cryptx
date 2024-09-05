import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import "./App.css";


export default function App() {
	return (
		<BrowserRouter>
			<div>
        <Header/>
				
				<Sidebar />
        <Register/>
        <Login/>
			</div>
		</BrowserRouter>
	);
}
