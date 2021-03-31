
import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import { db } from '../../config';
import { LayoutDiv } from '../../components/layout';
import { H3, Body } from '../../components/base/fonts';
import { LoginButton, HyperLink, Button } from '../../components/base/buttons';
import { Input } from '../../components/base/forms';


export const LoginLayout = styled(LayoutDiv)`
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    justify-content:  center;

`

export const LoginContent = styled.div`
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-evenly;
    height: 50vh;
    text-align: center;
    width: 100%;

`

export const LoginOptions = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 45px;
`


export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: auto;
    margin-bottom: 40px;
`


export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`

export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`

export const Blurb = styled.span`
    font-size: 16px !important;
`


const LoginPage = ({onUserUpdate}) => {
    const [phone, setPhone] = useState("");
    const [hasError, setError] = useState(false);

    const history = useHistory();

    const findLogin = (event) => {
        event.preventDefault();
        db.ref('users/').orderByChild('id').equalTo(phone).on('value', snapshot => {
            if (snapshot.val() != undefined && snapshot.val() != null) {
                handlePhone();
                history.push("/home");
            } else {
                setError(true);
            }
        });
    }

    const handlePhone = () => onUserUpdate(phone);


    return (
        <LoginLayout type="plain">
            <LoginContent>
                <H3> Login. </H3>
                <LoginForm onSubmit={findLogin}>
                    <Input Input style={{width: "100%"}} shadowed type="tel" placeholder="XXX-XXX-XXXX" required value={phone} onChange={e => setPhone(e.target.value)} />
                    <ErrorMessage isOpen={hasError}>Couldn't find your number! </ErrorMessage>
                    <Button as="input" type="submit" name="submit" value="Log in"></Button>
                </LoginForm>
            </LoginContent>
            <LoginOptions>
                <ButtonsContainer>
                    <LoginButton>
                        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" />
                        <div> Continue with Facebook </div>
                    </LoginButton>
                    <LoginButton>
                        <img src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" />
                        <div> Continue with Google</div>
                    </LoginButton>
                </ButtonsContainer>
                <Blurb>
                    <Body>
                       Don't have an account?&nbsp;
                        <HyperLink to="/create-account">Sign uo</HyperLink>
                    </Body>
                </Blurb>
            </LoginOptions>



            {/* <Link to="#">Forgot Password</Link>
            <ButtonsContainer>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Facebook
                    </SignupButton>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Google
                </SignupButton>
                <span>Don't have an account? <Link to="/create-account">Sign up</Link></span>
            </ButtonsContainer> */}

        </LoginLayout>
    )
}

export default LoginPage