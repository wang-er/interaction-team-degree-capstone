import React, { useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { H1 } from '../../components/base/fonts';
import { Layout, LayoutDiv } from '../../components/layout';
import { Button, HyperLink} from '../../components/base/buttons';


export const LandingLayout = styled(LayoutDiv)`
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;

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
        <LandingLayout type={"plain"}>
            <H1>Centiv</H1>
            <ButtonsContainer>
                <Button>
                    <Link to={{ pathname: "/onboarding" }}> Sign up </Link>
                </Button>
                <HyperLink to={{ pathname: "/login" }}>
                    Log in
                </HyperLink>
            </ButtonsContainer>
        </LandingLayout>
    )
}

export default LandingPage