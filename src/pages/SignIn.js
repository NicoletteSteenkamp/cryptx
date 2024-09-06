import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
    return (
        <div>
            <SignIn path="/login" mode="modal" signUpUrl="/signup" /> 
        </div>
    );
};

export default Login;
