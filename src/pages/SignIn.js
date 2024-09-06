import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import styled from 'styled-components';

// Wrapper to center content
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack text and form vertically
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height for vertical centering
  text-align: center; // Ensure text is centered
`;

const Login = () => {
  return (
    <CenteredContainer>
      <h2>Welcome, please sign in</h2> 
      <SignIn path="/login" mode="modal" signUpUrl="/signup" />
    </CenteredContainer>
  );
};

export default Login;
