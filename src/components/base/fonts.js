import styled from "styled-components";
import { darkPurple, grayPurple, purple } from "./colors";

export const H1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 54px;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : purple)};
`;

export const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : purple)};
`;

export const H3 = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-size: 30px;
  line-height: 40px;

  font-weight: 600;
  color: ${(props) => (props.color ? props.color : purple)};
`;

export const H4 = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : purple)};
`;

export const BodyTitle = styled.p`
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : grayPurple)};
`;

export const BodyBold = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : darkPurple)};
`;

export const Body = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : darkPurple)};
`;
export const BodySmall = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : darkPurple)};
`;
