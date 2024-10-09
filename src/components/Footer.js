import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem; /* Reduced padding */
  background-color: #f3f3f3;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem; /* Smaller font size */
  
  margin: 0 auto;

  a {
    color: #6154f0;
    text-decoration: none;
    margin: 0 4px; /* Slightly tighter spacing */
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Optional: Add more spacing between lines if necessary */
  br {
    margin-bottom: 0.2rem; /* Reduces space between lines */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      This app was created by 
      <a href="https://github.com/JunaidAlexander" target="_blank" rel="noopener noreferrer">Junaid Alexander</a>
      and 
      <a href="https://github.com/NicoletteSteenkamp" target="_blank" rel="noopener noreferrer">Nicolette Steenkamp</a>. 
      <br />
      Open-sourced code is available on 
      <a href="https://github.com/NicoletteSteenkamp/cryptx" target="_blank" rel="noopener noreferrer">GitHub</a>
      and deployed on 
      <a href="https://cryptx-cryptotrader.netlify.app" target="_blank" rel="noopener noreferrer">Netlify</a>.
    </FooterContainer>
  );
};

export default Footer;
