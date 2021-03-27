import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
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

const MotivePage = (props) => {
  const [motive, setMotive] = useState("");

  let handleInputChange = (property) => {
    return (e) => {
      let inputValue = e.target.value;
      switch (property) {
        case "motive":
          setMotive(inputValue);
      }
    };
  };

  let handleValues = () => {
    props.sendDataToParent(motive, "motive");
    props.sendDataToParent(3, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(1, "index");
  };
  return (
    <>
      <h1 class="create-challenge-title">
        Why do you want to accomplish this goal?
      </h1>
      <p class="create-challenge-text">
        Thinking about your motive will help you stick with your goal!
      </p>
      <Textarea
        colorScheme="whiteAlpha"
        width="90%"
        placeholder="Write as much (or as little) as you want."
        onChange={handleInputChange("motive")}
      />
      <CarouselButtons key="carousel">
        <CarouselButton key="button1" onClick={handleBackButton}>
          Back
        </CarouselButton>
        <CarouselButton isFilled key="button2" onClick={handleValues}>
          Next
        </CarouselButton>
      </CarouselButtons>
    </>
  );
};

export default MotivePage;
