import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
    return(
        <div>
     <SignIn path="/login" signUpUrl="/signup" /> 
    </div>
    );
    };
    
    
    export default Login