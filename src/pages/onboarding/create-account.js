import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import { db } from '../../config';
import { LayoutDiv } from '../../components/layout';
import { H3, Body } from '../../components/base/fonts';
import { Input } from '../../components/base/forms';
import { Button, HyperLink } from '../../components/base/buttons';


export const CreateAccountLayout = styled(LayoutDiv)`
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
`

export const CreateAccountContent = styled.div`
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  space-evenly;
    height: 50vh;
    text-align: center;
`

export const LandingTitle = styled.div`
    padding: 100px 10px 50px 10px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`



export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`


export const SignupButton = styled(Link)`
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: blue;
    border-radius: 3px;
    margin: 10px;
    text-decoration: none;
    border: none;
    width: 40vw;
`


export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`

export const Blurb = styled.span`
    font-size: 16px !important;
`

export const BackButton = styled(Link) `
    width: 24px;
    height: 24px;
    position: fixed;
    top: 20px;
    left: 20px;
`


const CreateAccountDetailsPage = ({onUserUpdate}) => {
    const [phone, setPhone] = useState("");
    const [hasError, setError] = useState(false);
    const history = useHistory();

    const sendNewAccount = (event) => {
        event.preventDefault();
        console.log("STOP");
        db.ref('users/').orderByChild('id').equalTo(phone).on('value', snapshot => {
            if (snapshot.val() != undefined && snapshot.val() != null) {
                setError(true);
            } else {
                console.log("new user")
                const newUser = {
                    id: phone
                }
                db.ref('users/').push(newUser);
                handlePhone();
                history.push("/home");
            }
        });
    }

    const handlePhone = () => onUserUpdate(phone);


    return (
        <CreateAccountLayout type="plain">
            <CreateAccountContent>
                <H3>
                    What's your phone number?
                </H3>
                <SignupForm onSubmit={sendNewAccount}>
                    <Input style={{width: "100%"}} shadowed type="tel" placeholder="XXX-XXX-XXXX" required value={phone} onChange={e => setPhone(e.target.value)} />
                    <ErrorMessage isOpen={hasError}>Account details already exist! </ErrorMessage>
                    <Button as="input" type="submit" name="submit" value="Send Code"></Button>
                </SignupForm>
            {/* <Blurb>
                <Body>
                    Already have an account?&nbsp;
                    <HyperLink to="/login">Log in</HyperLink>
                </Body>
            </Blurb> */}
            </CreateAccountContent>
            <BackButton to="/create-account">
                <img src="https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/chevron-back-solid-512.png"/>
            </BackButton>
        </CreateAccountLayout>
    )
}

export default CreateAccountDetailsPage