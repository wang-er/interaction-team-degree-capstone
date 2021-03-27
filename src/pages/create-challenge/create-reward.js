import React, { useState, useEffect } from "react";
import Picture from "../../components/gallery";
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

export default CreateRewardPage;
