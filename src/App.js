import React from "react";

import Sidebar from "./components/Sidebar";
import Header from "./Header";
import "./App.css";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function App() {
  return (
    <div>
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
		<Header/>
    <Sidebar/>
      
    </div>
  )
}