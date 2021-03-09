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

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Input = styled.input`
    padding: 10px;
    margin: 10px 0px;

`


export const SignupButton = styled(Link)`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;
`



const CreateAccountDetailsPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    return (
        <LandingLayout>
            <LandingTitle>
                Create your account.
            </LandingTitle>
            <FieldContainer>
                <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
            </FieldContainer>

                    <SignupButton to={{ pathname: "/home" }}>
                        Sign up
                    </SignupButton>

        </LandingLayout>
    )
}

export default CreateAccountDetailsPage