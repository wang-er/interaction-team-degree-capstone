import React, { useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { LayoutDiv } from '../../components/layout';
import { Body, H3 } from '../../components/base/fonts';
import { HyperLink, LoginButton } from '../../components/base/buttons';

export const LandingLayout = styled(LayoutDiv)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    text-align: center;
`

export const LandingTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

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

export const LoginLink = styled(Link)`
    display: flex;
    flex-flow: column;
`

export const Blurb = styled.span`
    font-size: 16px !important;
`

const CreateAccountPage = () => {
    return (
        <LandingLayout type="plain">
            <H3>
                To continue, create your account.
            </H3>
            <ButtonsContainer>
                <LoginLink to={{ pathname: "/create-account-details" }}>
                    <LoginButton>
                        <img src="https://img.icons8.com/pastel-glyph/2x/person-male.png" />
                        <div>  Use phone </div>
                    </LoginButton>
                </LoginLink> 
                <LoginLink to={{ pathname: "/" }}>
                    <LoginButton>
                        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" />
                        <div> Continue with Facebook </div>
                    </LoginButton>
                </LoginLink> 
                <LoginLink to={{ pathname: "/" }}>
                    <LoginButton>
                        <img src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" />
                        <div> Continue with Google</div>
                    </LoginButton>
                </LoginLink> 
               
            </ButtonsContainer>
            <Blurb>
                <Body>
                    Already have an account?&nbsp;
                    <HyperLink to="/login">Log in</HyperLink>
                </Body>
            </Blurb>
        </LandingLayout>
    )
}

export default CreateAccountPage