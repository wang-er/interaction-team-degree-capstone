import styled from "styled-components"
import { darkPurple, gradient, grayPurple, lightPurple, purple, red, teal, white } from "./colors";


export const Input = styled.input` 
    ::placeholder {
        color: #6A6A6A;
    }
    box-shadow: ${({ shadowed }) =>(shadowed ? "5px 7px 10px #8580801A" : "none")}; 
    border: ${({ shadowed }) =>(shadowed ? "none" : "1px solid #B5B5B5")}; 
    color: ${darkPurple};
    font-weight: 400;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    padding:  ${props => (props.small ? "6px 15px" : "12px 15px")}; 
    border-radius: 5px;
    margin: 10px;
    text-decoration: none;
    outline-color: ${lightPurple};
    width: ${props => (props.type == "checkbox" ? "30px" : "initial")};
    height: ${props => (props.type == "checkbox" ? "30px" : "inital")};
`

export const Select = styled.select`
    ::placeholder {
        color: #6A6A6A;
    }
    border: 1px solid #B5B5B5;
    color: ${darkPurple};
    font-weight: 400;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 5px;
    margin: 10px;
    text-decoration: none;
    outline-color: ${lightPurple};
`

export const Label = styled.label`
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${props => (props.color ? props.color : darkPurple)};

    display: flex;
    align-items: center;
`

 