
import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LandingLayout = styled.div`
    background-color: #E0E0E0;
    height: 100vh;
    overflow: scroll;
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`

export const LandingTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    padding: 10px;
    margin: 10px 0px;

`


export const LoginButton = styled(Link)`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;
`


export const SignupButton = styled(LoginButton)`
    border: 2px solid blue;
    background-color: unset;
    color: blue;


`



const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    return (
        <LandingLayout>
            <LandingTitle>
                Login.
            </LandingTitle>
            <ButtonsContainer>
                <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" />
            </ButtonsContainer>
            <LoginButton to={{ pathname: "/home" }}>
                Sign in
            </LoginButton>
            <Link to="#">Forgot Password</Link>
            <ButtonsContainer>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Facebook
                    </SignupButton>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Google
                    </SignupButton>
            </ButtonsContainer>

        </LandingLayout>
    )
}

export default LoginPage