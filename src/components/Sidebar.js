import React from "react";
import { Link } from "react-router-dom";
import "../components/Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { BiAbacus } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { FiPieChart, FiMail, FiLogOut } from "react-icons/fi";
import Logo from "../images/Logo.jpg";
import styled from "styled-components";
import { useClerk } from "@clerk/clerk-react";

const SidebarWrap = styled.div`
  background-color: #F3F3F3;
  width: 280px;
  height: 100vh;
  position: relative;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function Sidebar() {
  const { signOut } = useClerk(); // Access the Clerk instance to sign out
  
  return (
    <SidebarWrap>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/">
              <MdDashboard />
              <h3>Overview</h3>
            </Link>
          </li>
          <li>
            <Link to="/app/price-chart">
              <FiPieChart />
              <h3>Chart</h3>
            </Link>
          </li>
          <li>
            <Link to="/app/transactions">
              <BiWallet />
              <h3>Transactions</h3>
            </Link>
          </li>
          <li>
            <Link to="/app/mailbox">
              <FiMail />
              <h3>Mail Box</h3>
            </Link>
          </li>
          <li>
		  <Link to="/app/exchanges">
              <BiAbacus />
              <h3>Exchanges</h3>
            </Link>
          </li>
          <li>
		  <Link to="/app/coin-markets">
              <ImNewspaper />
              <h3>Market</h3>
            </Link>
          </li>
          <li onClick={() => signOut()}>
            <FiLogOut />
            <h3>Logout</h3>
          </li>
        </ul>
      </div>
    </SidebarWrap>
  );
}
