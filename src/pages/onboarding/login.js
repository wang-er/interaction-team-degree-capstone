
import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import { db } from '../../config';

export const LandingLayout = styled.div`
    background-color: #E0E0E0;
    height: 100vh;
    overflow: scroll;
    z-index: 10000000;
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 0px 20px;
`

export const LandingTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
    padding: 50px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: auto;
    margin-bottom: 40px;
`

export const Input = styled.input`
    padding: 10px;
    margin: 10px 0px;

`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const LoginButton = styled(Link)`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;
    text-align: center;

`


export const SignupButton = styled(LoginButton)`
    border: 2px solid blue;
    background-color: unset;
    color: blue; 
`

export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
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
        <LandingLayout>
            <LandingTitle>
                Login.
            </LandingTitle>
            <LoginForm onSubmit={findLogin}>
                <Input type="tel" placeholder="XXX-XXX-XXXX" required value={phone} onChange={e => setPhone(e.target.value)} />
                <ErrorMessage isOpen={hasError}>Couldn't find your number! </ErrorMessage>
                <LoginButton as="input" type="submit" name="submit" value="Log in"></LoginButton>
            </LoginForm>


            <Link to="#">Forgot Password</Link>
            <ButtonsContainer>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Facebook
                    </SignupButton>
                <SignupButton to={{ pathname: "/onboarding" }}>
                    Login with Google
                </SignupButton>
                <span>Don't have an account? <Link to="/create-account">Sign up</Link></span>
            </ButtonsContainer>

        </LandingLayout>
    )
}

export default LoginPage