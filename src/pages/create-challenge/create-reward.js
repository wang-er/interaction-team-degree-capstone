import React, { useState, useEffect } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";
import { LayoutDiv } from "../../components/layout";
import { H3, Body } from "../../components/base/fonts";
import { Input } from "../../components/base/forms";
import { CloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

const CreateRewardPage = (props) => {
  const [reward, setReward] = React.useState("");
  const [moneyAmount, setMoneyAmount] = React.useState("");

  let handleInputChange = (property) => {
    return (e) => {
      let inputValue = e.target.value;
      switch (property) {
        case "reward":
          setReward(inputValue);
        case "moneyAmount":
          setMoneyAmount(inputValue);
        default:
          console.log("unknown type");
      }
    };
  };

  let handleValues = () => {
    props.sendDataToParent(reward, "reward");
    props.sendDataToParent(moneyAmount, "moneyAmount");
    props.sendDataToParent(2, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(0, "index");
  };

  return (
    <NewChallengeLayout type="plain">
      <Link to={{ pathname: "/home" }}>
        <CloseButton class="close-button" size="md" paddingLeft="350px" />
      </Link>
      <H3>Let’s motivate you with a reward.</H3>
      <Body>
        Specify a reward and how much money you will spend on it. You can also
        input $0 for a non-monetary reward.
      </Body>
      <Picture />
      <form>
        <Body>
          I will{" "}
          <Input
            type="text"
            name="reward-name"
            onChange={handleInputChange("reward")}
          />{" "}
          {"\n"}
          {"\n"}
          with $
          <Input
            type="text"
            size="8"
            name="money-amount"
            onChange={handleInputChange("moneyAmount")}
          />
          {"\n"}
        </Body>
      </form>
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

export default CreateRewardPage;
