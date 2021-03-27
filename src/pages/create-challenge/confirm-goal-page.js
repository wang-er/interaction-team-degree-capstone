import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../config";
import { Button } from "../../components/base/buttons";
import { ButtonsContainer } from "../onboarding/onboarding";

export const CarouselButton = styled(Button)`
  margin: 10px 10px;
`;

const ConfirmGoalPage = (props) => {
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
      userID: props.userID,
      title: props.challengeName,
      frequency: props.frequency,
      duration: props.duration,
      endDate: props.endDate,
      reward: props.reward,
      moneyAmount: props.moneyAmount,
      motive: props.motive,
      currentDay: props.currentDay,
      totalDays: props.totalDays,
    });
  };

  const wrapper = () => {
    sendChallengeToFirebase();
    handleValues();
  };

  return (
    <>
      {console.log(
        `reward is ${props.reward} and moneyAmount ${props.moneyAmount}`
      )}
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
        I will {props.reward} with ${props.moneyAmount}{" "}
      </h2>
      <ButtonsContainer key="carousel">
        <CarouselButton
          type="secondary"
          key="button1"
          onClick={handleBackButton}
        >
          Back
        </CarouselButton>
        <CarouselButton type="primary" key="button2" onClick={wrapper}>
          Confirm
        </CarouselButton>
      </ButtonsContainer>
    </>
  );
};

export default ConfirmGoalPage;
