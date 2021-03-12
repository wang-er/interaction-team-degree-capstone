import React, { useEffect } from 'react'
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

export const SignupButton = styled.div`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
`

export const LoginButton = styled.div`
    font-weight: bold;
    padding: 10px;
    margin: 10px;
`


const LandingPage = () => {
    return (
        <LandingLayout>
            <LandingTitle>
                Centiv
            </LandingTitle>
            <ButtonsContainer>
                <Link to={{ pathname: "/onboarding" }}>
                    <SignupButton>
                        Sign up
                    </SignupButton>
                </Link>
                <Link to={{ pathname: "/login" }}>
                    <LoginButton>
                        log in
                    </LoginButton>
                </Link>
            </ButtonsContainer>
        </LandingLayout>
    )
}

export default LandingPage