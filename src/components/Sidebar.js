import React from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { BiWallet } from "react-icons/bi";

import { MdClose, MdMenu } from "react-icons/md";
import { FiPieChart, FiMail, FiSettings, FiLogOut } from "react-icons/fi";
import logo from "./images/Logo.jpg";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="sidebar-menu">
				<ul>
					<li className=" dashboard">
						{" "}<MdDashboard />
						<h3>Overview</h3>
					</li>
					<li>
						<FiPieChart />
						<h3>Chart</h3>
					</li>
					<li>
						{" "}<BiWallet />
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
					<li>
						<FiLogOut />
						<h3>Logout</h3>
					</li>
				</ul>
			</div>
		</div>
	);
}
