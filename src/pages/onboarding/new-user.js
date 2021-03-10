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

export const SignupButton = styled(Link)`
    font-weight: bold;
    width: 100%;
    color: blue;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;
`



const CreateAccountPage = () => {
    return (
        <LandingLayout>
            <LandingTitle>
                To continue, create your account.
            </LandingTitle>
            <ButtonsContainer>
                <SignupButton to={{ pathname: "/create-account-details" }}>
                    Use phone or email
                    </SignupButton>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Continue with Facebook
                    </SignupButton>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Continue with Google
                    </SignupButton>
            </ButtonsContainer>
            <span>Already have an account? <Link to="/login">Log in</Link></span>
        </LandingLayout>
    )
}

export default CreateAccountPage