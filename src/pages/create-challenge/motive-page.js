import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import styled from "styled-components";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import { H3, Body } from "../../components/base/fonts";
import { Input } from "../../components/base/forms";
import { CloseButton } from "@chakra-ui/react";
import { LayoutDiv } from "../../components/layout";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
`;

export const NewChallengeLayout = styled(LayoutDiv)`
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  justify-content: center;
`;

export const ButtonsContainer1 = styled(ButtonsContainer)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MotivePage = (props) => {
  const [motive, setMotive] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setMotive(inputValue);
  };

  let handleValues = () => {
    props.sendDataToParent(motive, "motive");
    props.sendDataToParent(3, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(1, "index");
  };
  return (
    <NewChallengeLayout type="plain">
      <CloseButton
        class="close-button"
        size="md"
        paddingLeft="350px"
        onClick={() => alert("implement")}
      />
      <H3>Why do you want to accomplish this goal?</H3>
      <Body>
        Thinking about your motive will help you stick with your goal!
      </Body>
      <Textarea
        colorScheme="whiteAlpha"
        width="90%"
        placeholder="Write as much (or as little) as you want."
        onChange={handleInputChange}
      />
      <ButtonsContainer1>
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
      </ButtonsContainer1>
    </NewChallengeLayout>
  );
};

export default MotivePage;
