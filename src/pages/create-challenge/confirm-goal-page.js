import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../config";

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

const ConfirmGoalPage = (props) => {
  const [phone, setPhone] = useState("");

  let handleValues = () => {
    props.sendDataToParent(4, "index");
  };

  let handleBackButton = () => {
    props.sendDataToParent(2, "index");
  };

  // Create official challenge object and send to Firebase
  const sendChallengeToFirebase = () => {
    db.ref("challenges/" + props.challengeID).set({
      id: props.challengeID,
      challengeName: props.challengeName,
      frequency: props.frequency,
      duration: props.duration,
      endDate: props.endDate,
      reward: props.reward,
      moneyAmount: props.moneyAmount,
      motive: props.motive,
    });
  };

  const wrapper = () => {
    sendChallengeToFirebase();
    handleValues();
  };

  return (
    <>
      <h1 class="create-challenge-title">Confirm your goal.</h1>
      <p class="create-challenge-text">
        Make sure all your info is correct, then you can set up your payment
        method and deposit your money into your piggybank.
      </p>
      <h1 class="create-challenge-title">Your goal.</h1>
      <h2>
        I want to {props.challengeName} {props.frequency} times a{" "}
        {props.duration} by {props.endDate}
      </h2>
      <h1 class="create-challenge-title">Your reward.</h1>
      <h2>
        I will {props.reward} with {props.moneyAmount}{" "}
      </h2>
      <CarouselButtons key="carousel">
        <CarouselButton key="button1" onClick={handleBackButton}>
          Back
        </CarouselButton>
        <CarouselButton isFilled key="button2" onClick={wrapper}>
          Confirm
        </CarouselButton>
      </CarouselButtons>
    </>
  );
};

export default ConfirmGoalPage;
