import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./App.css";
function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Sidebar />
			</div>
		</BrowserRouter>
	);
}

export default App;
