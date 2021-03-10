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
    padding: 20px;
`

export const LandingTitle = styled.div`
    padding: 100px 10px 50px 10px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Input = styled.input`
    padding: 10px;
    margin: 10px 0px;
    width: 60vw;
`

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
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
        <LandingLayout>
            <LandingTitle>
                What's your phone number?
            </LandingTitle>
            <SignupForm onSubmit={sendNewAccount}>
                <Input type="tel" placeholder="XXX-XXX-XXXX" required value={phone} onChange={e => setPhone(e.target.value)} />
                <ErrorMessage isOpen={hasError}>Account details already exist! </ErrorMessage>
                <SignupButton as="input" type="submit" name="submit" value="Sign up"></SignupButton>
            </SignupForm>
            <span>Already have an account? <Link to="/login">Log in</Link></span>
        </LandingLayout>
    )
}

export default CreateAccountDetailsPage