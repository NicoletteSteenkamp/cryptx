import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div className="MainContent">
					<Sidebar />
					<div className="ContentArea">
						
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
