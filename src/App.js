import { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./Pages/SignIn";
import Signup from "./Pages/Register";
import Markets from "./Pages/Markets";
import Footer from "./components/Footer";
import styled from "styled-components";
import PriceChart from "./Pages/PriceChart";

const Wrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

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
                  <Route path="coin-markets" element={<Markets />} />
                  <Route path="price-chart" element={<PriceChart assetId="bitcoin" />} />
                  {/* Add more routes as needed */}
                </Routes>
                <Footer />
              </Content>
            </Wrap>
          </SignedIn>
        }
      />
      <Route path="/" element={isSignedIn ? <Navigate to="/app" /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
