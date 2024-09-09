import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  background-color: #f3f3f3;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  
  a {
    color: #6154f0; /* Custom link color */
    text-decoration: none;
    margin: 0 5px;
    
    &:hover {
      text-decoration: underline;
    }
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
