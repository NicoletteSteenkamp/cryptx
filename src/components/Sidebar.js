import React from "react";
import "../Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { MdClose, MdMenu } from "react-icons/md";
import { FiPieChart, FiMail, FiSettings, FiLogOut } from "react-icons/fi";
import logo from "./images/Logo.jpg";
import styled from "styled-components";
import { useClerk } from "@clerk/clerk-react";

const SidebarWrap = styled.div`
  background-color: #F3F3F3;
  width: 280px;
  /* Set the width of the sidebar */
  height: 100vh;
  /* Make the sidebar full height */
  position: relative;
  /* Fix the sidebar on the left side */
  /* top: 0;
  left: 0; */
  /* Align the sidebar to the left side */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  /* Add a shadow for depth */
  display: flex;
  flex-direction: column;
  /* Stack elements vertically */
  padding: 20px;
  /* Add padding inside the sidebar */
`
export default function Sidebar() {
	const { signOut } = useClerk(); // Access the Clerk instance to sign out
  
	return (
	  <SidebarWrap>
		<div className="logo">
		  <img src={logo} alt="Logo" />
		</div>
		<div className="sidebar-menu">
		  <ul>
			<li className="dashboard">
			  <MdDashboard />
			  <h3>Overview</h3>
			</li>
			<li>
			  <FiPieChart />
			  <h3>Chart</h3>
			</li>
			<li>
			  <BiWallet />
			  <h3>Transactions</h3>
			</li>
			<li>
			  <FiMail />
			  <h3>Mail Box</h3>
			</li>
			<li>
			  <FiSettings />
			  <h3>Settings</h3>
			</li>
			<li onClick={() => signOut()}> {/* Trigger signOut on click */}
			  <FiLogOut />
			  <h3>Logout</h3>
			</li>
		  </ul>
		</div>
	  </SidebarWrap>
	);
  }