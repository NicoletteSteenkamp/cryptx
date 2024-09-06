import React from "react";
import useEffect from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";
import Login from "./Pages/SignIn";
import Signup from "./Pages/Register"; 
import { SignedIn, useAuth } from "@clerk/clerk-react"; 
import "./App.css";



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
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        <Route path="/signup" element={<Signup />} />

   
        <Route
          path="/"
          element={
            <SignedIn>
        
              <>
                <Header />
                <Sidebar />
                {/* Add other components you want to display in the main page */}
              </>
            </SignedIn>
          }
        />

        <Route
          path="/"
          element={
            isSignedIn ? <Navigate to="/app" /> : <Navigate to="/login" />
          }
        />

        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
