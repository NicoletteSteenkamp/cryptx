import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import profile from "../images/profileicon";
import { useUser } from '@clerk/clerk-react'; 

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem 1rem 1rem;
  box-shadow: 0 0 3px rgb(203, 203, 203);
`;

//right div styles
const Search = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0 0 0.3rem 0.3rem;
  position: relative;

  input {
    width: 330px;
    font-size: 1rem;
    padding: 0.65rem 0.4rem;
    border-radius: 10px;
    // color: rgb(203, 203, 203);
    border: solid 2px rgb(203, 203, 203);
  }

  .search-icon {
    position: absolute;
    font-size: 1.25rem;
    right: 12px;
    color: #999;
    cursor: pointer;
  }
`;

//styles for left
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  .icons {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    color: grey;
    font-size: 1.3rem;

    .fa-icon {
      cursor: pointer;
    }
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  gap: 0.65rem;

  .names {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-size: 0.9rem;

    h4 {
      color: #777;
    }
  }
`;

const Image = styled.img`
  box-shadow: 1px 1px 1px 1px rgb(203, 203, 203);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 45%;
  width: 45px;
  height: 45px;
`;

const Icon = styled.div`
  display: grid;
  place-items: center;

  i{
  font-size: .85rem;
  }
`;

const Header = () => {
    const { user } = useUser(); // Get current user from Clerk
  
    return (
      <Container>
        {/* Right side content */}
        <Search>
          <input type="text" placeholder="Search type of keywords" />
          <i className="fa fa-search search-icon" aria-hidden="true" />
        </Search>
  
        <LeftDiv>
          <div className="icons">
            {/* Icons for notifications and queries */}
            <i className="fa-regular fa-bell fa-icon" aria-hidden="true" />
            <i className="fa-regular fa-circle-question" aria-hidden="true" />
          </div>
          <ProfileDiv>
            <Image 
              src={user?.profileiconUrl || profile} 
              alt={user?.fullName ? `${user.fullName}'s profile` : 'profile'} 
            />
            <div className="names">
              {user?.fullName || 'User'}
              <br/>
              
              @{user?.username || 'username'}
            </div>
            {/* Icon pointing down */}
            <Icon>
              <i className="fa-solid fa-chevron-down" />
            </Icon>
          </ProfileDiv>
        </LeftDiv>
      </Container>
    );
  };
  
  export default Header;
  // return (
  //     <div className="Header">

  //         <div className="navbar">
  //             <div className="search">
  //                 <input type="search" placeholder="Search type of keywords" />
  //                 <i className="fa fa-search search-icon" aria-hidden="true" />
  //             </div>
  //             <div className="icons">
  //                 <i className="fa fa-bell-slash" aria-hidden="true" />
  //                 question mark
  //             </div>
  //             <div className="profile">icon user-name name</div>
  //         </div>
  //     </div>

  // );

