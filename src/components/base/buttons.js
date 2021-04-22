import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradient, red, teal, white, warningGradient } from "./colors";

const handleFontColorType = (type) => {
  switch (type) {
    case "primary":
      return white;
    case "secondary":
      return teal;
    case "danger":
      return white;
    default:
      return white;
  }
};

const handleBackgroundColorType = (type) => {
  switch (type) {
    case "primary":
      return gradient;
    case "secondary":
      return white;
    case "danger":
      return warningGradient;
    default:
      return gradient;
  }
};

export const Button = styled.button`
  box-shadow: ${({ type }) =>
    type == "secondary" ? "0px 1px 5px #3508081A" : "none"};
  border: none;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  color: ${({ type }) => handleFontColorType(type)};
  padding: 12px 20px;
  background: ${({ type }) => handleBackgroundColorType(type)};
  border-radius: 5px;
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${({ type }) => handleFontColorType(type)};
  }
`;

export const SmallButton = styled(Button)`
  box-shadow: 0px 1px 9px #3508081a;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  padding: 6px 20px;
`;

export const HyperLink = styled(Link)`
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  text-decoration: underline;
  font-weight: 400;
  color: ${({ type }) => (type == "danger" ? red : teal)};
`;

export const LoginButton = styled.button`
  border: 1px solid #b5b5b5;
  color: black;
  font-weight: 500;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  padding: 12px 15px;
  border-radius: 5px;
  background: ${white};
  margin: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
  div {
    width: 100%;
    margin: 0px 15px;
  }
`;
