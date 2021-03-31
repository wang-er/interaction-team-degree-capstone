import React, { useState, useEffect } from "react";
import Picture from "../../components/gallery";
import styled from "styled-components";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
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
    <>
      <h1 class="create-challenge-title">Let’s motivate you with a reward.</h1>
      <p class="create-challenge-text">
        Specify a reward and how much money you will spend on it. You can also
        input $0 for a non-monetary reward.
      </p>
      <Picture />
      <form>
        <p>
          I will{" "}
          <input
            type="text"
            name="reward-name"
            onChange={handleInputChange("reward")}
          />{" "}
          {"\n"}
          {"\n"}
          with $
          <input
            type="text"
            size="8"
            name="money-amount"
            onChange={handleInputChange("moneyAmount")}
          />
          {"\n"}
        </p>
      </form>
      <ButtonsContainer>
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

export default CreateRewardPage;
