
import Sidebar from "./components/Sidebar";
import Header from "./Header";

import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function App() {
  return (
    <div>
		<Header/>
    <Sidebar/>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}