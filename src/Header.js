import React from "react";
import "./Header.css";
import 'font-awesome/css/font-awesome.min.css';


const Header = () => {
    return (
        <div className="Header">

            <div className="navbar">

                <div className="search">
                    <input type="search" placeholder="Search type of keywords" />
                    <i className="fa fa-search search-icon" aria-hidden="true" />
                </div>
                <div className="icons">
                    <i className="fa fa-bell-slash" aria-hidden="true" />
                    question mark
                </div>
                <div className="profile">icon user-name name</div>
            </div>
        </div>
    );
};

export default Header;