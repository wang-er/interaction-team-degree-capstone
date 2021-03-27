import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import styled from "styled-components";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
`;

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
      <ButtonsContainer key="carousel">
        <CarouselButton
          key="button1"
          type="secondary"
          onClick={handleBackButton}
        >
          Back
        </CarouselButton>
        <CarouselButton type="primary" key="button2" onClick={handleValues}>
          Next
        </CarouselButton>
      </ButtonsContainer>
    </>
  );
};

export default MotivePage;
