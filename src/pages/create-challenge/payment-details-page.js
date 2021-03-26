import React, { useState } from "react";
import styled from "styled-components";

export const CarouselButton = styled.button`
  border: none;
  font-weight: bold;
  color: ${(props) => (props.isFilled ? "white" : "blue")};
  padding: 10px;
  margin-top: 1000px;
  background-color: ${(props) => (props.isFilled ? "blue" : "transparent")};
  border: 1px solid blue;
  border-radius: 3px;
  margin: 10px;
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${(props) => (props.isFilled ? "white" : "blue")};
  }
`;

export const CarouselButtons = styled.div``;

const PaymentDetailsPage = (props) => {
  const [phone, setPhone] = useState("");

  let handleValues = () => {
    // props.sendDataToParent(4, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(3, "index");
  };

  return (
    <>
      <div>payment</div>;
      <CarouselButtons key="carousel">
        <CarouselButton key="button1" onClick={handleBackButton}>
          Back
        </CarouselButton>
        <CarouselButton
          isFilled
          key="button2"
          // onClick={() => alert("open animation here??")}
          onClick={props.sendChallengeToFirebase}
        >
          Confirm Payment
        </CarouselButton>
        <CarouselButton isFilled="false" key="button2">
          Skip Payment
        </CarouselButton>
      </CarouselButtons>
    </>
  );
};

export default PaymentDetailsPage;
