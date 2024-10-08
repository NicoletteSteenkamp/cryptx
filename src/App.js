import { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from  "./components/Header";
import "./App.css";
import Markets from "./pages/Markets";
import PriceChart from "./pages/PriceChart";
import Exchanges from "./pages/Exchanges";
import Footer from "./components/Footer";
import Login from "./pages/SignIn";
import Signup from "./pages/Register";
import { SignedIn, useAuth } from "@clerk/clerk-react"; 
import styled from "styled-components";
import Cryptopage from "./components/crypto";
import Transaction from "./pages/Transaction";

const Wrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const NotFound = () => <div>404 - Not Found</div>;

export default function App() {
  const { isSignedIn } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSignedIn) {
      if (location.pathname === "/signup" || location.pathname === "/login") {
        navigate("/app");
      }
    } else {
      if (location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [isSignedIn, navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/app/*"
        element={
          <SignedIn>
            <Wrap>
              <Sidebar />
              <Content>
                <Header /> 
                <Routes>
                  <Route path="/" element={<Cryptopage />} />
                  <Route path="coin-markets" element={<Markets />} />
                  <Route path="price-chart" element={<PriceChart assetId="bitcoin" />} />
                  <Route path="exchanges" element={<Exchanges />} />
                  <Route path="transactions" element={<Transaction />} />
                  <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
                </Routes>
              </Content>
            </Wrap>
            <Footer />
          </SignedIn>
        }
      />
      <Route path="/" element={isSignedIn ? <Navigate to="/app" /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
